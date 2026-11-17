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
    structuredClone, console: { warn() {} }, document: { addEventListener() {} },
    location: { search: '' }, localStorage: { getItem() { return null; } },
    ALL_SPOTS_DATA: structuredClone(chinese),
    fetch: async url => ({ ok: true, json: async () => structuredClone(url.includes('/en/') ? translated : chinese) })
  };
  context.window = context;
  vm.createContext(context);
  for (const file of ['js/city_regions.js', 'js/affiliate.js', 'js/spots.js', 'js/content_loader.js']) {
    vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
  }
  const cityRegions = vm.runInContext('CityRegions', context);
  const regions = structuredClone(cityRegions.regions);
  const attractions = { Language: 'zh-TW', Attractions: regions.zh.map((city, index) => ({
    AttractionID: `attraction_${index}`, AttractionName: `景點${index}`,
    Description: '景點介紹', PostalAddress: { City: city, Town: '測試區', StreetAddress: '測試路一號' },
    PositionLat: 25, PositionLon: 121, Images: [{ URL: 'https://example.com/image.jpg' }]
  })) };
  const urls = [];
  context.fetch = async url => {
    urls.push(url);
    const lang = url.match(/\/data\/([^/]+)\//)?.[1] || 'zh';
    const payload = structuredClone(attractions);
    if (lang !== 'zh') {
      payload.Language = lang;
      payload.Attractions.forEach((spot, index) => {
        spot.AttractionName = `${lang} 景點${index}`;
        spot.Description = `${lang} description`;
        spot.PostalAddress = { City: regions[lang]?.[index] || regions.en[index], Town: 'Translated district', StreetAddress: 'Translated address' };
      });
    }
    return { ok: true, json: async () => url.endsWith('info.json') ? { regions } : payload };
  };
  return { context, chinese, translated, attractions, regions, urls, cityRegions, explorer: vm.runInContext('SpotExplorer', context) };
}

test('city list includes all 22 cities in the requested priority and distinguishes counties', () => {
  const { explorer } = setup();
  assert.equal(explorer.getCities().length, 23);
  assert.equal(new Set(explorer.getCities().map(city => city.key)).size, 23);
  assert.equal(explorer.getCities().slice(0, 5).map(city => city.key).join(','), '全部,台北市,桃園市,花蓮縣,台南市');
  assert.equal(explorer.matchesCity({ city: '嘉義縣' }, '嘉義市'), false);
  assert.equal(explorer.matchesCity({ city: '臺北市' }, '台北市'), true);
});

test('Attractions use PostalAddress.City, map all 22 counties, and retain coordinates, images and driver addresses', async () => {
  const { context, explorer, attractions, urls } = setup();
  // Conflicting legacy city fields must never override PostalAddress.City.
  attractions.Attractions[0].city = '高雄市';
  assert.equal(await vm.runInContext('loadSpotsContent("ja")', context), true);
  assert.equal(context.ALL_SPOTS_DATA.length, 22);
  const spot = context.ALL_SPOTS_DATA[0];
  assert.equal(spot.id, 'attraction_0');
  assert.equal(spot.city, '台北市');
  assert.equal(spot.name, 'ja 景點0');
  assert.equal(spot.desc, 'ja description');
  assert.equal(spot.nameZh, '景點0');
  assert.equal(spot.addressZh, '臺北市測試區測試路一號');
  assert.equal(spot.img, 'https://example.com/image.jpg');
  assert.ok(new URL(explorer.links(spot).map).searchParams.get('query').includes('25,121'));
  assert.equal(Object.keys(context.SPOTS_BY_CITY).length, 22);
  assert.ok(Object.values(context.SPOTS_BY_CITY).every(items => items.length === 1));
  assert.ok(urls.includes('https://raw.githubusercontent.com/qn5566/ActivityEvent/main/data/zh/AttractionList.json'));
  assert.ok(urls.includes('https://raw.githubusercontent.com/qn5566/ActivityEvent/main/info.json'));
  assert.ok(!urls.some(url => url.endsWith('spots.json')));
  await vm.runInContext('loadSpotsContent("en")', context);
  assert.equal(urls.filter(url => url.endsWith('AttractionList.json')).length, 3);
  await vm.runInContext('loadSpotsContent("en")', context);
  assert.equal(urls.filter(url => url.endsWith('AttractionList.json')).length, 3);
});

test('info.json index alignment is the sole source of city labels for 11 languages', async () => {
  const { cityRegions, regions } = setup();
  assert.equal(Object.keys(regions).length, 11);
  assert.equal(cityRegions.zhCityToIndex.get('臺北市'), 0);
  for (const [lang, names] of Object.entries(regions)) for (let index = 0; index < 22; index++) {
    assert.equal(cityRegions.localizedName(regions.zh[index], lang), names[index]);
    assert.equal(cityRegions.localizedName(regions.zh[index].replace(/臺/g, '台'), lang), names[index]);
  }
  assert.equal(cityRegions.localizedName('台北市', 'de'), '臺北市');
  assert.equal(cityRegions.localizedName('未定縣市', 'en'), '未定縣市');
  assert.equal(cityRegions.canonicalName('Taipei City'), '臺北市');
  assert.equal(cityRegions.install({ regions: { zh: ['wrong'] } }), false);
  assert.equal(cityRegions.localizedName('臺北市', 'ja'), regions.ja[0]);
  const changed = structuredClone(regions);
  changed.ja[0] = 'APIによる台北';
  assert.equal(cityRegions.install({ regions: changed }), true);
  assert.equal(cityRegions.localizedName('台北市', 'ja'), 'APIによる台北');
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

test('an older attraction response cannot overwrite newer data', async () => {
  const { context, attractions } = setup();
  const pending = [];
  context.fetchAttractions = () => new Promise(resolve => pending.push(resolve));
  const oldRequest = vm.runInContext('loadSpotsContent("zh-TW")', context);
  const newRequest = vm.runInContext('loadSpotsContent("en")', context);
  const newer = structuredClone(attractions);
  newer.Attractions[0].AttractionName = '新版景點';
  pending[1](newer);
  pending[2](attractions);
  await newRequest;
  pending[0](attractions);
  assert.equal(await oldRequest, false);
  assert.equal(context.ALL_SPOTS_DATA[0].name, '新版景點');
});

test('image field variants and missing optional fields do not drop attractions', () => {
  const { explorer } = setup();
  const spots = explorer.normalize({ Attractions: [
    { AttractionID: 'a', AttractionName: '名稱', PostalAddress: { City: '宜蘭縣' }, Images: [{ ImageURL: 'https://example.com/a.jpg' }] },
    { AttractionID: 'b', AttractionName: '無圖片', PostalAddress: { City: '嘉義縣' } }
  ] }, []);
  assert.equal(spots.length, 2);
  assert.equal(spots[0].img, 'https://example.com/a.jpg');
  assert.equal(spots[1].img, 'assets/spot-placeholder.svg');
  assert.equal(spots[1].addressZh, '嘉義縣');
});

test('backend identifiers cannot inject markup into card buttons', () => {
  const { explorer } = setup();
  const html = explorer.actions({ id: '\"><img src=x onerror=alert(1)>', name: 'Test', city: '台北市' });
  assert.ok(!html.includes('<img'));
  assert.ok(html.includes('&quot;&gt;&lt;img'));
  const safeTour = explorer.links({ name: 'Test', city: '台北市', ticketUrl: 'javascript:alert(1)' }).tour;
  assert.equal(new URL(safeTour).hostname, 'www.klook.com');
});


test('URL language selects the Korean endpoint while keeping Chinese driver names and all county groups', async () => {
  const { context, urls } = setup();
  context.location.search = '?lang=ko';
  assert.equal(await vm.runInContext('loadSpotsContent()', context), true);
  assert.ok(urls.some(url => url.includes('/data/ko/AttractionList.json')));
  assert.equal(context.ALL_SPOTS_DATA[0].name, 'ko 景點0');
  assert.equal(context.ALL_SPOTS_DATA[0].desc, 'ko description');
  assert.equal(context.ALL_SPOTS_DATA[0].nameZh, '景點0');
  assert.equal(context.ALL_SPOTS_DATA[0].addressZh, '臺北市測試區測試路一號');
  assert.equal(context.ALL_SPOTS_DATA[0].city, '台北市');
  assert.equal(Object.keys(context.SPOTS_BY_CITY).length, 22);
  assert.ok(Object.values(context.SPOTS_BY_CITY).every(items => items.length === 1));
});

test('missing language endpoints or missing translated IDs fall back to Chinese records', async () => {
  for (const mode of ['missing-file', 'missing-ids']) {
    const { context, attractions, regions } = setup();
    context.fetch = async url => {
      if (url.endsWith('info.json')) return { ok: true, json: async () => ({ regions }) };
      if (url.includes('/data/ko/')) {
        if (mode === 'missing-file') return { ok: false, status: 404 };
        return { ok: true, json: async () => ({ Language: 'ko', Attractions: [{ ...attractions.Attractions[0], AttractionName: '한국 카페', PostalAddress: { City: 'unknown translated city' } }] }) };
      }
      return { ok: true, json: async () => attractions };
    };
    assert.equal(await vm.runInContext('loadSpotsContent("ko")', context), mode === 'missing-ids');
    assert.equal(context.ALL_SPOTS_DATA.length, 22);
    assert.equal(context.ALL_SPOTS_DATA[0].name, mode === 'missing-ids' ? '한국 카페' : '景點0');
    assert.equal(context.ALL_SPOTS_DATA[1].name, '景點1');
    assert.equal(context.ALL_SPOTS_DATA[0].city, '台北市');
    assert.equal(Object.keys(context.SPOTS_BY_CITY).length, 22);
  }
});
