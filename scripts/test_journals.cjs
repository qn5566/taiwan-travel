/** Run: node --test scripts/test_journals.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
test('journals is a standalone localized page with article rendering and no coffee API initialization', () => {
  const html = fs.readFileSync('journals.html', 'utf8');
  assert.ok(html.includes('data-category-text="journals.title"'));
  assert.ok(html.includes('src="js/journals.js"'));
  assert.ok(html.includes('id="article-modal"'));
  assert.ok(!html.includes('id="section-coffee-map"'));
  assert.ok(!html.includes('cafe_partnership.js'));
  const script = fs.readFileSync('js/journals.js', 'utf8');
  assert.ok(!script.includes('loadCafesContent('));
  assert.ok(!script.includes('loadMichelinContent('));
});
test('all main page navigation and footer links point to journals.html', () => {
  for (const file of fs.readdirSync('.').filter(name => name.endsWith('.html'))) {
    const html = fs.readFileSync(file, 'utf8');
    const nav = html.match(/<a\b[^>]*data-nav-key="navJournals"[^>]*>/g) || [];
    for (const link of nav) assert.ok(link.includes('href="journals.html"'), file);
    assert.ok(!html.includes('cafe.html?tab=weekend-hop'), file);
  }
});
test('legacy cafe journal URLs redirect while preserving language, other parameters and hashes', () => {
  const html = fs.readFileSync('cafe.html', 'utf8');
  const redirect = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(match => match[1]).find(script => script.includes('window.location.replace'));
  let target;
  const location = { href: 'https://example.com/taiwan-travel/cafe.html?tab=weekend-hop&lang=ja&ref=nav#article', replace(url) { target = url; } };
  vm.runInNewContext(redirect, { URL, window: { location } });
  assert.equal(target, 'https://example.com/taiwan-travel/journals.html?lang=ja&ref=nav#article');
  target = undefined;
  location.href = 'https://example.com/taiwan-travel/cafe.html?tab=michelin-guide&lang=en';
  vm.runInNewContext(redirect, { URL, window: { location } });
  assert.equal(target, undefined);
});
test('coffee page no longer ships the journal reader or article dictionaries', () => {
  const html = fs.readFileSync('cafe.html', 'utf8');
  for (const token of ['id="article-modal"', 'id="section-weekend-hop"', 'js/weekend_hop_i18n', 'function renderHopCards', 'function openHopArticleById']) assert.ok(!html.includes(token), token);
  assert.ok(html.includes('id="btn-tab-coffee"'));
  assert.ok(html.includes('id="btn-tab-michelin"'));
  assert.ok(html.includes('href="css/cafe-journals.css"'));
});

test('journals interface provides complete single-language labels independently of article fallback', () => {
  let lang = 'de';
  const context = vm.createContext({ getWebLang: () => lang, document: { addEventListener() {} } });
  vm.runInContext(fs.readFileSync('js/journals_i18n.js', 'utf8'), context);
  const dictionaries = vm.runInContext('JOURNALS_UI_I18N', context);
  const keys = Object.keys(dictionaries.en).sort();
  for (const code of ['zh-TW', 'en', 'ja', 'ko', 'es', 'de', 'th']) {
    lang = code;
    assert.deepEqual(Object.keys(dictionaries[code]).sort(), keys, code);
    for (const key of keys) {
      assert.ok(dictionaries[code][key].trim(), `${code}.${key}`);
      assert.equal(vm.runInContext(`journalText(${JSON.stringify(key)})`, context), dictionaries[code][key]);
    }
  }
  lang = 'de';
  assert.equal(vm.runInContext("journalText('read')", context), 'Artikel lesen ➔');
  lang = 'vi';
  assert.equal(vm.runInContext("journalText('read')", context), dictionaries.en.read);
  const script = fs.readFileSync('js/journals.js', 'utf8');
  assert.ok(script.includes('applyJournalUI(modal)'));
  assert.ok(script.includes("const story = place.features || ''"));
  assert.ok(!script.includes('一推開店門'));
});
