/** Run: node --test scripts/test_journal_reports.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
function setup(overrides = {}) {
  const context = vm.createContext({ URL, URLSearchParams,
    mapToContentLang: lang => ['zh', 'zh-TW'].includes(lang) ? 'zh' : lang === 'de' ? 'en' : lang,
    getWebLang: () => 'zh-TW', document: { addEventListener() {} }, ...overrides
  });
  for (const file of ['js/journal_reports_data.js', 'js/journal_reports.js']) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
  return { data: vm.runInContext('JournalReportData', context), ui: vm.runInContext('JournalReports', context) };
}
test('only valid published reports appear, with stable unique IDs', () => {
  const { data } = setup();
  const rows = data.list([null, {}, { id: 'a', title: 'Published' }, { id: 'a', title: 'Duplicate' },
    { id: 'b', title: 'Draft', status: 'draft' }, { id: 'c', title: 'Scheduled', status: 'scheduled' },
    { id: 'd', title: 'Hidden', published: false }, { id: 'e', title: ' ', status: 'published' }]);
  assert.equal(rows.length, 1); assert.equal(rows[0].title, 'Published');
  assert.throws(() => data.list({ reports: [] }), /array/);
});
test('unavailable remote reports use bundled editions while successful empty or draft responses stay authoritative', async () => {
  const {data}=setup();const published=[{id:'sample',title:'Sample',status:'published',published:true}];
  const paths=[];
  const local=async path=>{paths.push(path);return {ok:true,json:async()=>published};};
  const result=await data.load('de',async()=>{throw Error('HTTP 404');},local);
  assert.equal(result.reports.length,1);assert.deepEqual(paths,['data/editorial_reports/de.json']);
  for(const rows of [[],[{id:'sample',title:'Draft',status:'draft',published:false}]]){
    const empty=await data.load('en',async()=>rows,async()=>{throw Error('must not read local fallback');});
    assert.equal(empty.state,'empty');
  }
});
test('local static previews show the checked-out reports even before backend changes are pushed',async()=>{
  const {data}=setup({window:{location:{hostname:'127.0.0.1'},CONTENT_BASE_URL:'https://raw.githubusercontent.com/qn5566/ActivityEvent/main/content'}});
  const result=await data.load('zh-TW',async()=>{throw Error('must not use stale remote');},async()=>({ok:true,json:async()=>[{id:'local',title:'Local report'}]}));
  assert.equal(result.reports[0].id,'local');
});
test('the twelve bundled editions contain ten displayable samples with matching IDs',()=>{
  const {data}=setup();let ids;
  for(const language of ['zh','en','ja','ko','es','th','vi','ms','fil','hi','id','de']){
    const records=JSON.parse(fs.readFileSync(`data/editorial_reports/${language}.json`,'utf8'));
    assert.equal(data.list(records).length,10);
    assert.ok(records.every(report=>report.isSample && report.reviewStatus==='needs-fact-check'));
    const current=records.map(report=>report.id);if(ids)assert.deepEqual(current,ids);else ids=current;
  }
});
test('detail links resolve by ID or slug and never choose a default for unknown reports', () => {
  const { data } = setup();
  const rows = [{ id: 'a', slug: 'first' }, { id: 'b', slug: 'second' }];
  assert.equal(data.resolve(new URLSearchParams('id=b'), rows).slug, 'second');
  assert.equal(data.resolve(new URLSearchParams('slug=first'), rows).id, 'a');
  for (const query of ['', 'id=unknown', 'id=unknown&slug=first']) assert.equal(data.resolve(new URLSearchParams(query), rows), undefined);
});
test('unconfigured endpoints and successful empty responses show empty publications', async () => {
  const { data } = setup();
  for (const fetcher of [async () => [], async () => { throw Error('HTTP 404'); }]) {
    const result = await data.load('zh-TW', fetcher);
    assert.equal(result.state, 'empty'); assert.equal(result.reports.length, 0);
  }
  const calls = [];
  const empty = await data.load('en', async (file, lang) => { calls.push(lang); return []; });
  assert.equal(empty.state, 'empty'); assert.deepEqual(calls, ['en']);
});
test('missing translations can use a marked Chinese fallback without mixing unrelated article sources', async () => {
  const { data } = setup(); const calls = [];
  const result = await data.load('ja', async (file, lang) => {
    calls.push([file, lang]);
    if (lang === 'ja') throw Error('HTTP 404');
    return [{ id: 'report-1', title: '中文報導' }];
  });
  assert.equal(result.state, 'ready'); assert.equal(result.fallback, true);
  assert.equal(result.reports[0].title, '中文報導');
  assert.deepEqual(calls, [['editorial_reports.json', 'ja'], ['editorial_reports.json', 'zh-TW']]);
});
test('network, server and invalid payload failures stay distinct from empty content and can be retried', async () => {
  const { data } = setup();
  for (const fetcher of [async () => { throw Error('offline'); }, async () => { throw Error('HTTP 500'); }, async () => ({ error: 'bad response' })]) {
    const result = await data.load('zh-TW', fetcher);
    assert.equal(result.state, 'error'); assert.equal(result.reports.length, 0);
  }
  const recovered = await data.load('zh-TW', async () => [{ id: 'a', title: 'Recovered report' }]);
  assert.equal(recovered.state, 'ready');
});
test('German reports request their own edition while all PM sample drafts stay unpublished', async () => {
  const { data } = setup();
  const calls = [];
  const result = await data.load('de', async (...args) => {
    calls.push(args);
    return [{ id: 'report_example', title: 'Beispiel', status: 'draft', published: false }];
  });
  assert.deepEqual(calls, [['editorial_reports.json', 'de', 'de']]);
  assert.equal(result.state, 'empty');
  assert.equal(result.reports.length, 0);
});
test('report links reject executable URLs and new interface labels cover the seven website languages', () => {
  const { data, ui } = setup();
  for (const url of ['javascript:alert(1)', 'data:text/html,test', 'file:///tmp/test', '', null]) assert.equal(data.safeUrl(url), '');
  assert.equal(data.safeUrl('https://maps.google.com/?q=Taipei'), 'https://maps.google.com/?q=Taipei');
  for (const lang of ['zh-TW', 'en', 'ja', 'ko', 'es', 'de', 'th']) {
    for (const key of ['articles', 'reports', 'reportsTitle', 'reportsSubtitle', 'emptyTitle', 'emptyBody', 'deepEmptyTitle', 'deepEmptyBody', 'errorTitle', 'errorBody', 'retry', 'backArticles', 'backReports', 'read', 'loading', 'notFoundTitle', 'notFoundBody', 'photoTitle', 'nearbyTitle', 'directory', 'stays', 'fallback', 'typesLabel']) {
      assert.ok(ui.text(key, lang).trim()); assert.notEqual(ui.text(key, lang), key, `${lang}/${key}`);
    }
  }
});
