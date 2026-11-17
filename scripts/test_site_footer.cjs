const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const languages = ['zh-TW','en','ja','ko','es','de','th','vi','id','ms','fil','hi'];
function setup() {
  const context = vm.createContext({document: {addEventListener() {}}, window: {}});
  vm.runInContext(fs.readFileSync('js/i18n.js','utf8'), context);
  vm.runInContext(fs.readFileSync('js/site-footer.js','utf8'), context);
  return context;
}
test('footer translations cover every selectable locale and replace text without changing destinations', () => {
  const context = setup();
  const dict = vm.runInContext('SITE_FOOTER_I18N', context);
  for (const lang of languages) {
    const textNodes = ['slogan','about','team','copyright','footerContactLabel','footerQuickLinks','brand'].map(key => ({dataset:{footerText:key},textContent:''}));
    const links = Array.from({length:7}, (_,i) => ({dataset:{footerLink:String(i)},href: i===5?'themes.html?theme=railway':'destination',textContent:''}));
    const title = {dataset:{footerTitle:'team'},setAttribute(key,value){this[key]=value;}};
    context.root = {querySelectorAll(selector) { return selector==='[data-footer-text]'?textNodes:selector==='[data-footer-link]'?links:selector==='[data-footer-title]'?[title]:[]; }};
    vm.runInContext(`SiteFooter.apply('${lang}', root)`,context);
    assert.equal(Object.keys(dict[lang]).sort().join(),Object.keys(dict.en).sort().join());
    for(const node of [...textNodes,...links]) assert.ok(node.textContent?.trim(),lang);
    assert.equal(textNodes[0].textContent,dict[lang].slogan);
    assert.equal(links[5].href,'themes.html?theme=railway');
    assert.equal(title['aria-label'],title.title);
  }
});
test('all eleven main pages load the shared footer module and expose all seven stable links', () => {
  let count=0;
  for(const file of fs.readdirSync('.').filter(f=>f.endsWith('.html'))) {
    const html=fs.readFileSync(file,'utf8');
    if(!html.includes('<footer class="site-footer"')) continue;
    count++;
    assert.equal((html.match(/src="js\/site-footer.js"/g)||[]).length,1,file);
    const footer=html.match(/<footer class="site-footer"[\s\S]*?<\/footer>/)[0];
    for(const key of ['slogan','about','team','copyright','footerContactLabel','footerQuickLinks','brand']) assert.ok(footer.includes(`data-footer-text="${key}"`),`${file}/${key}`);
    assert.equal((footer.match(/data-footer-link=/g)||[]).length,7,file);
    assert.ok(footer.includes('themes.html?theme=railway'),file);
    assert.ok(!footer.includes('Taste the stars')&&!footer.includes('QUICK LINKS</span>'),file);
  }
  assert.equal(count,11);
});

test('footer reads URL and stored language on pages without the content loader', () => {
  const context = setup();
  context.URLSearchParams = URLSearchParams;
  context.window.location = {search: '?lang=ko'};
  context.localStorage = {getItem() { return 'ja'; }};
  assert.equal(vm.runInContext('SiteFooter.language()', context), 'ko');
  context.window.location.search = '';
  assert.equal(vm.runInContext('SiteFooter.language()', context), 'ja');
  context.localStorage.getItem = () => { throw new Error('storage disabled'); };
  assert.equal(vm.runInContext('SiteFooter.language()', context), 'zh-TW');
});
