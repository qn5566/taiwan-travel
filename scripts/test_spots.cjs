/** Run from repository root: node --test scripts/test_spots.cjs */
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function setup() {
  const chinese = [
    { id: 1, name: '台北測試景點', city: '臺北市', zone: '北部', address: '台北市測試路一號', activityId: '123-example' },
    { id: 2, name: '嘉義市測試景點', city: '嘉義市', zone: '南部' },
    { id: 3, name: '嘉義縣測試景點', city: '嘉義縣', zone: '南部' },
    { id: 4, name: '小琉球測試景點', city: '屏東縣', zone: '離島' }
  ];
  const translated = chinese.map(spot => ({ ...spot, name: `Translated ${spot.id}`, city: ['Taipei City', 'Chiayi City', 'Chiayi County', 'Pingtung County'][spot.id - 1], zone: 'Translated region', address: '' }));
  const context = { URL, URLSearchParams, AbortController, setTimeout, clearTimeout,
    console: { warn() {} }, document: { addEventListener() {} },
    location: { search: '' }, localStorage: { getItem() { return null; } },
    ALL_SPOTS_DATA: structuredClone(chinese),
    fetch: async url => ({ ok: true, json: async () => structuredClone(url.includes('/en/') ? translated : chinese) })
  };
  context.window = context;
  vm.createContext(context);
  for (const file of ['js/affiliate.js', 'js/spots.js', 'js/content_loader.js']) {
    vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  }
  return { context, chinese, translated, explorer: vm.runInContext('SpotExplorer', context) };
}

test('city list includes all 22 cities in the requested priority and distinguishes counties', () => {
  const { explorer } = setup();
  assert.equal(explorer.getCities().length, 23);
  assert.equal(new Set(explorer.getCities().map(city => city.key)).size, 23);
  assert.equal(explorer.getCities().slice(0, 5).map(city => city.key).join(','), '全部,台北市,桃園市,花蓮縣,台南市');
  assert.equal(explorer.matchesCity({ city: '嘉義縣' }, '嘉義市'), false);
  assert.equal(explorer.matchesCity({ city: '臺北市' }, '台北市'), true);
});

test('localized records retain Chinese driver information and the offshore region', async () => {
  const { context, explorer, chinese } = setup();
  assert.equal(await vm.runInContext('loadSpotsContent("en")', context), true);
  const spot = context.ALL_SPOTS_DATA[0];
  assert.equal(spot.name, 'Translated 1');
  assert.equal(spot.city, '台北市');
  assert.equal(spot.nameZh, chinese[0].name);
  assert.equal(spot.addressZh, chinese[0].address);
  assert.equal(explorer.matchesRegion(context.ALL_SPOTS_DATA[3], 'islands'), true);
});

test('spot links use the specified attribution and retain product destinations', () => {
  const { explorer } = setup();
  const urls = explorer.links({ name: 'A place', nameZh: '中文景點', city: '台北市', ticketUrl: 'https://www.klook.com/zh-TW/activity/999/?aid=old&foo=bar' });
  const tour = new URL(urls.tour), hotel = new URL(urls.hotel);
  assert.equal(tour.pathname, '/zh-TW/activity/999/');
  assert.equal(tour.searchParams.get('aid'), '123436');
  assert.equal(tour.searchParams.get('foo'), 'bar');
  assert.equal(hotel.searchParams.get('Allianceid'), '9507030');
  assert.equal(hotel.searchParams.get('SID'), '325761227');
  assert.equal(new URL(urls.dining).hostname, 'affckr.site');
  assert.ok(new URL(urls.map).searchParams.get('query').includes('中文景點'));
  assert.equal(new URL(explorer.links({ name: 'No ticket', city: '台北市' }).tour).pathname, '/zh-TW/search/result/');
});

test('backend wrappers, malformed payloads and network failure retain a usable fallback', async () => {
  const { context, explorer, translated } = setup();
  assert.equal(explorer.normalize({ spots: translated }).length, 4);
  assert.equal(explorer.normalize({ data: 'not an array' }).length, 0);
  assert.equal(explorer.normalize([null, { name: 'Missing city' }]).length, 0);
  context.fetch = async () => { throw Error('offline'); };
  assert.equal(await vm.runInContext('loadSpotsContent("en")', context), false);
  assert.equal(context.ALL_SPOTS_DATA.length, 4);
  context.fetch = async () => ({ ok: true, json: async () => ({ error: 'bad data' }) });
  assert.equal(await vm.runInContext('loadSpotsContent("zh-TW")', context), false);
  assert.equal(context.ALL_SPOTS_DATA.length, 4);
});

test('an older language response cannot overwrite newer spot data', async () => {
  const { context, chinese, translated } = setup();
  const pending = [];
  context.fetchContentJson = (file, lang) => new Promise(resolve => pending.push({ lang, resolve }));
  const oldRequest = vm.runInContext('loadSpotsContent("zh-TW")', context);
  const newRequest = vm.runInContext('loadSpotsContent("en")', context);
  pending[1].resolve(translated);
  pending[2].resolve(chinese);
  await newRequest;
  pending[0].resolve(chinese);
  assert.equal(await oldRequest, false);
  assert.equal(context.ALL_SPOTS_DATA[0].name, 'Translated 1');
});

test('backend identifiers cannot inject markup into card buttons', () => {
  const { explorer } = setup();
  const html = explorer.actions({ id: '\"><img src=x onerror=alert(1)>', name: 'Test', city: '台北市' });
  assert.ok(!html.includes('<img'));
  assert.ok(html.includes('&quot;&gt;&lt;img'));
  const safeTour = explorer.links({ name: 'Test', city: '台北市', ticketUrl: 'javascript:alert(1)' }).tour;
  assert.equal(new URL(safeTour).hostname, 'www.klook.com');
});
