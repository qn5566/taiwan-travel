/** County names come only from ActivityEvent/info.json -> regions.
 * Bundled snapshot of the same source (2026-11-17) keeps labels usable offline.
 */
const CityRegions = (() => {
  const snapshot = {
  "zh": [
    "臺北市",
    "基隆市",
    "新北市",
    "桃園市",
    "新竹市",
    "新竹縣",
    "苗栗縣",
    "臺中市",
    "彰化縣",
    "南投縣",
    "雲林縣",
    "嘉義市",
    "嘉義縣",
    "臺南市",
    "高雄市",
    "屏東縣",
    "宜蘭縣",
    "花蓮縣",
    "臺東縣",
    "澎湖縣",
    "金門縣",
    "連江縣"
  ],
  "en": [
    "Taipei City",
    "Keelung City",
    "New Taipei City",
    "Taoyuan City",
    "Hsinchu City",
    "Hsinchu County",
    "Miaoli County",
    "Taichung City",
    "Changhua County",
    "Nantou County",
    "Yunlin County",
    "Chiayi City",
    "Chiayi County",
    "Tainan City",
    "Kaohsiung City",
    "Pingtung County",
    "Yilan County",
    "Hualien County",
    "Taitung County",
    "Penghu County",
    "Kinmen County",
    "Lienchiang County"
  ],
  "ja": [
    "タイペイ市",
    "キールン市",
    "ニュータイペイ市",
    "タオユエン市",
    "シンチュー市",
    "シンチュー県",
    "ミャオリー県",
    "タイチュウ市",
    "チャンホワ県",
    "ナントウ県",
    "ユンリン県",
    "チャーイー市",
    "チャーイー県",
    "タイナン市",
    "カオシュン市",
    "ピントン県",
    "イーラン県",
    "ホワリエン県",
    "タイトウ県",
    "ポンフー県",
    "キンメン県",
    "レンチアン県"
  ],
  "ko": [
    "타이베이시",
    "지룽시",
    "신베이시",
    "타오위안시",
    "신주시",
    "신주현",
    "먀오리현",
    "타이중시",
    "장화현",
    "난터우현",
    "윈린현",
    "자이시",
    "자이현",
    "타이난시",
    "가오슝시",
    "핑둥현",
    "이란현",
    "화롄현",
    "타이둥현",
    "펑후현",
    "진먼현",
    "롄장현"
  ],
  "th": [
    "เมืองไทเป",
    "เมืองจีหลง",
    "เมืองนิวไทเป",
    "เมืองเถาหยวน",
    "เมืองซินจู๋",
    "เขตซินจู๋",
    "เขตเหมียวลี่",
    "เมืองไถจง",
    "เขตจางฮว่า",
    "เขตหนานโถว",
    "เขตหยุนหลิน",
    "เมืองเจียอี้",
    "เขตเจียอี้",
    "เมืองไถหนาน",
    "เมืองเกาสง",
    "เขตผิงตง",
    "เขตอี๋หลาน",
    "เขตฮวาเหลียน",
    "เขตไถตง",
    "เขตเผิงหู",
    "เขตจินเหมิน",
    "เขตเหลียนเจียง"
  ],
  "vi": [
    "thành phố Đài Bắc",
    "thành phố Cơ Long",
    "thành phố Tân Bắc",
    "thành phố Đào Viên",
    "thành phố Tân Trúc",
    "huyện Tân Trúc",
    "huyện Miêu Lật",
    "thành phố Đài Trung",
    "huyện Chương Hóa",
    "huyện Nam Đầu",
    "huyện Vân Lâm",
    "thành phố Gia Nghĩa",
    "huyện Gia Nghĩa",
    "thành phố Đài Nam",
    "thành phố Cao Hùng",
    "huyện Bình Đông",
    "huyện Nghi Lan",
    "huyện Hoa Liên",
    "huyện Đài Đông",
    "huyện Bành Hồ",
    "huyện Kim Môn",
    "huyện Liên Giang"
  ],
  "ms": [
    "Bandar Taipei",
    "Bandar Keelung",
    "Bandar New Taipei",
    "Bandar Taoyuan",
    "Bandar Hsinchu",
    "Wilayah Hsinchu",
    "Wilayah Miaoli",
    "Bandar Taichung",
    "Wilayah Changhua",
    "Wilayah Nantou",
    "Wilayah Yunlin",
    "Bandar Chiayi",
    "Wilayah Chiayi",
    "Bandar Tainan",
    "Bandar Kaohsiung",
    "Wilayah Pingtung",
    "Wilayah Yilan",
    "Wilayah Hualien",
    "Wilayah Taitung",
    "Wilayah Penghu",
    "Wilayah Kinmen",
    "Wilayah Lienchiang"
  ],
  "fil": [
    "Lungsod ng Taipei",
    "Lungsod ng Keelung",
    "Lungsod ng New Taipei",
    "Lungsod ng Taoyuan",
    "Lungsod ng Hsinchu",
    "Probinsya ng Hsinchu",
    "Probinsya ng Miaoli",
    "Lungsod ng Taichung",
    "Probinsya ng Changhua",
    "Probinsya ng Nantou",
    "Probinsya ng Yunlin",
    "Lungsod ng Chiayi",
    "Probinsya ng Chiayi",
    "Lungsod ng Tainan",
    "Lungsod ng Kaohsiung",
    "Probinsya ng Pingtung",
    "Probinsya ng Yilan",
    "Probinsya ng Hualien",
    "Probinsya ng Taitung",
    "Probinsya ng Penghu",
    "Probinsya ng Kinmen",
    "Probinsya ng Lienchiang"
  ],
  "hi": [
    "ताइपे शहर",
    "कीलुंग शहर",
    "न्यू ताइपे शहर",
    "ताओयुआन शहर",
    "सिनचु शहर",
    "सिनचु काउंटी",
    "मियाओली काउंटी",
    "ताइचुंग शहर",
    "चांगहुआ काउंटी",
    "नांटोउ काउंटी",
    "युनलिन काउंटी",
    "चियाई शहर",
    "चियाई काउंटी",
    "ताइनान शहर",
    "काऊशुंग शहर",
    "पिंगतुंग काउंटी",
    "यिलान काउंटी",
    "हुआलियेन काउंटी",
    "ताइतुंग काउंटी",
    "पेंगहु काउंटी",
    "किनमेन काउंटी",
    "लिएनचियांग काउंटी"
  ],
  "id": [
    "Kota Taipei",
    "Kota Keelung",
    "Kota Taipei Baru",
    "Kota Taoyuan",
    "Kota Hsinchu",
    "Wilayah Hsinchu",
    "Wilayah Miaoli",
    "Kota Taichung",
    "Wilayah Changhua",
    "Wilayah Nantou",
    "Wilayah Yunlin",
    "Kota Chiayi",
    "Wilayah Chiayi",
    "Kota Tainan",
    "Kota Kaohsiung",
    "Wilayah Pingtung",
    "Wilayah Yilan",
    "Wilayah Hualien",
    "Wilayah Taitung",
    "Wilayah Penghu",
    "Wilayah Kinmen",
    "Wilayah Lienchiang"
  ],
  "es": [
    "Taipéi",
    "Keelung",
    "Nuevo Taipéi",
    "Taoyuan",
    "Hsinchu",
    "Condado de Hsinchu",
    "Condado de Miaoli",
    "Taichung",
    "Condado de Changhua",
    "Condado de Nantou",
    "Condado de Yunlin",
    "Chiayi",
    "Condado de Chiayi",
    "Tainan",
    "Kaohsiung",
    "Condado de Pingtung",
    "Condado de Yilan",
    "Condado de Hualien",
    "Condado de Taitung",
    "Condado de Penghu",
    "Condado de Kinmen",
    "Condado de Lienchiang"
  ]
};
  const normalize = value => String(value || '').trim().replace(/臺/g, '台');
  let regions = snapshot;
  let pending;
  let zhCityToIndex = new Map();
  function install(info) {
    const candidate = info?.regions;
    if (!candidate || !Array.isArray(candidate.zh) || candidate.zh.length !== 22
      || new Set(candidate.zh.map(normalize)).size !== 22) return false;
    if (!Object.values(candidate).every(names => Array.isArray(names) && names.length === 22
      && names.every(name => typeof name === 'string' && name.trim()))) return false;
    regions = Object.fromEntries(Object.entries(candidate).map(([lang, names]) => [lang, names.slice()]));
    zhCityToIndex = new Map(regions.zh.map((name, index) => [name, index]));
    return true;
  }
  install({ regions: snapshot });
  function indexOf(name) {
    const key = normalize(name);
    if (zhCityToIndex.has(String(name || '').trim())) return zhCityToIndex.get(String(name || '').trim());
    for (const names of Object.values(regions)) {
      const index = names.findIndex(value => normalize(value).toLocaleLowerCase() === key.toLocaleLowerCase());
      if (index !== -1) return index;
    }
    return undefined;
  }
  function canonicalName(name) {
    const index = indexOf(name);
    return index === undefined ? String(name || '') : regions.zh[index];
  }
  function localizedName(name, lang = 'zh') {
    const index = indexOf(name);
    if (index === undefined) return String(name || '');
    return regions[lang === 'zh-TW' ? 'zh' : lang]?.[index] || regions.zh[index];
  }
  async function load() {
    if (!pending) pending = (async () => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 10000);
      const finishLoading = window.SiteLoading?.begin();
      try {
        const response = await fetch(window.CITY_INFO_URL || 'https://raw.githubusercontent.com/qn5566/ActivityEvent/main/info.json', { signal: controller.signal });
        if (!response.ok) throw Error('HTTP ' + response.status);
        return install(await response.json());
      } catch (_) { return false; }
      finally { clearTimeout(timer); finishLoading?.(); }
    })();
    return pending;
  }
  return { load, install, indexOf, canonicalName, localizedName,
    get regions() { return structuredClone(regions); },
    get zhCityToIndex() { return new Map(zhCityToIndex); } };
})();
