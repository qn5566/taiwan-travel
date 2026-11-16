/** Run from repository root: node --test scripts/test_category_ui.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const languages = ['zh-TW', 'en', 'ja', 'ko', 'es', 'de', 'th'];
function setup(lang = 'zh-TW') {
  const nodes = new Map(['hero-main-title', 'hero-sub-desc'].map(id => [id, { textContent: '', dataset: {} }]));
  const context = { URLSearchParams, window: { location: { search: `?lang=${lang}` } }, getWebLang: () => lang,
    TAIWAN_CAFES_DATA: [{ id: 1, name: '中文咖啡館', city: '台北市', tags: ['有插頭', '手沖咖啡'] }],
    document: { readyState: 'loading', addEventListener() {}, querySelectorAll() { return []; }, getElementById(id) { return nodes.get(id); } }
  };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync('js/category_i18n.js', 'utf8'), context);
  return { context, nodes, ui: vm.runInContext('CategoryUI', context), copy: vm.runInContext('CATEGORY_I18N', context) };
}

test('coffee hero matches the supplied zh/en/ja/ko copy exactly', () => {
  const expected = {
    'zh-TW': ['全台風格咖啡圖鑑', '330 座藏身巷弄與山海間的風格咖啡空間。'],
    en: ['Taiwan Coffee Spaces', '330 curated roasters, hideaways & coastal cafes.'],
    ja: ['台湾カフェ図鑑', '路地裏から海辺まで、厳選された330の珈琲空間。'],
    ko: ['대만 카페 도감', '골목과 바다 사이에 숨겨진 330곳의 감성 카페.']
  };
  for (const [lang, pair] of Object.entries(expected)) {
    const { ui, nodes } = setup(lang);
    ui.applyCafeHero('coffee-map');
    assert.equal(nodes.get('hero-main-title').textContent, pair[0]);
    assert.equal(nodes.get('hero-sub-desc').textContent, pair[1]);
  }
});

test('every supported language has complete short hero and filter labels', () => {
  const { copy } = setup();
  for (const lang of languages) {
    const entry = copy[lang];
    for (const page of ['coffee', 'michelin', 'journals', 'themes', 'spots', 'rankings', 'souvenirs']) {
      assert.ok(entry[page].title && entry[page].subtitle, `${lang}/${page}`);
      assert.ok(!/[<>\n]/.test(entry[page].title + entry[page].subtitle));
    }
    for (const group of ['features', 'regions', 'michelinFilters', 'scenarios', 'themeLabels', 'topicLabels', 'cities', 'subcategories']) {
      assert.equal(Object.keys(entry[group]).join(','), Object.keys(copy.en[group]).join(','), `${lang}/${group}`);
      assert.ok(Object.values(entry[group]).every(value => typeof value === 'string' && value.trim()));
    }
  }
});

test('switching cafe tabs preserves one title and one subtitle in the selected language', () => {
  for (const lang of languages) {
    const { ui, nodes } = setup(lang);
    for (const [tab, key] of [['coffee-map', 'coffee'], ['michelin-guide', 'michelin'], ['weekend-hop', 'journals'], ['coffee-map', 'coffee']]) {
      ui.applyCafeHero(tab);
      assert.equal(nodes.get('hero-main-title').textContent, ui.t(`${key}.title`));
      assert.equal(nodes.get('hero-sub-desc').textContent, ui.t(`${key}.subtitle`));
    }
  }
});

test('translated cafe data retains stable city and feature filter keys', () => {
  const { ui } = setup('en');
  const records = ui.normalizeCafes([{ id: 1, name: 'English cafe', city: 'Taipei City', tags: ['Power outlets', 'Pour-over'] }]);
  assert.equal(records[0].name, 'English cafe');
  assert.equal(records[0].city, 'Taipei City');
  assert.equal(records[0].filterCity, '台北市');
  assert.equal(records[0].filterTags.join(','), '有插頭,手沖咖啡');
  assert.equal(ui.feature('有插頭'), 'Work-friendly');
});

test('category pages all load the shared module and coffee has no duplicate English hero', () => {
  for (const page of ['cafe.html', 'themes.html', 'spots.html', 'ranking.html', 'souvenir.html']) {
    const html = fs.readFileSync(page, 'utf8');
    assert.equal((html.match(/src="js\/category_i18n.js" defer/g) || []).length, 1);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
  }
  const cafe = fs.readFileSync('cafe.html', 'utf8');
  assert.ok(!cafe.includes('hero-en-title'));
  assert.ok(!cafe.includes('LIFESTYLE VIBES'));
  assert.ok(!cafe.includes('REGIONAL SPACES'));
  assert.ok(!cafe.includes('heroDesc.innerHTML'));
});
