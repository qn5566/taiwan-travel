// 台灣吃喝玩樂 Seed Data
const TAIWAN_SEED_SPOTS = [
  {
    id: "tw-tainan-beef",
    name: "六千泓佐牛肉湯",
    name_en: "Liuchien Beef Soup Tainan",
    category: "food",
    region: "south",
    city: "台南市中西區",
    subtitle: "早晨現宰溫體牛肉・琥珀色牛大骨濃醇鮮甜高湯",
    badge: "🏆 府城排隊霸主",
    badgeColor: "bg-rose-100 text-rose-800",
    rating: 4.8,
    lat: 22.9902, lng: 120.1945
  },
  {
    id: "tw-fuhang-soy",
    name: "阜杭豆漿",
    name_en: "Fuhang Soy Milk Taipei",
    category: "food",
    region: "north",
    city: "台北市中正區",
    subtitle: "米其林必比登連續推薦・現烤厚燒餅夾蛋油條與鹹豆漿",
    badge: "⭐ 米其林必比登",
    badgeColor: "bg-amber-100 text-amber-900 border border-amber-300",
    rating: 4.7,
    lat: 25.0442, lng: 121.5248
  },
  {
    id: "tw-jiufen-teahouse",
    name: "九份 阿妹茶樓",
    name_en: "A-Mei Teahouse Jiufen",
    category: "cafe",
    region: "north",
    city: "新北市瑞芳區",
    subtitle: "宛如神隱少女奇幻世界・懸崖紅燈籠與無敵海景茶席",
    badge: "🏮 山海第一排",
    badgeColor: "bg-rose-100 text-rose-800",
    rating: 4.7,
    lat: 25.1098, lng: 121.8451
  },
  {
    id: "tw-kenting-cliff-cafe",
    name: "山男咖啡 & 屾尋海景露台",
    name_en: "Mountain & Ocean Cafe Kenting",
    category: "cafe",
    region: "south",
    city: "屏東縣恆春鎮",
    subtitle: "墾丁懸崖夕陽第一排・俯瞰紅柴坑漁港與巴士海峽橘紅晚霞",
    badge: "🌊 絕美海景第一排",
    badgeColor: "bg-sky-100 text-sky-800",
    rating: 4.8,
    lat: 21.9832, lng: 120.7185
  },
  {
    id: "tw-alishan-forest",
    name: "阿里山 巨木群步道 & 祝山觀日",
    name_en: "Alishan Giant Tree Trail & Sunrise",
    category: "spot",
    region: "south",
    city: "嘉義縣阿里山鄉",
    subtitle: "千年紅檜巨木神木群・祝山日出雲海與森林小火車體驗",
    badge: "🌲 台灣國家名所",
    badgeColor: "bg-emerald-100 text-emerald-800",
    rating: 4.9,
    lat: 23.5118, lng: 120.8126
  },
  {
    id: "tw-huashan-market",
    name: "華山 1914 文化創意產業園區",
    name_en: "Huashan 1914 Creative Park",
    category: "market",
    region: "north",
    city: "台北市中正區",
    subtitle: "百年日本酒廠變身文創新地標・每週末手作市集與國際特展",
    badge: "🎪 週末常態市集",
    badgeColor: "bg-purple-100 text-purple-800",
    rating: 4.8,
    lat: 25.0441, lng: 121.5294
  },
  {
    id: "tw-jiaoxi-hotspring",
    name: "宜蘭 礁溪寒沐酒店 溫泉湯屋",
    name_en: "Mu Jiao Xi Hotel Hot Spring Yilan",
    category: "onsen",
    region: "east",
    city: "宜蘭縣礁溪鄉",
    subtitle: "蘭陽平原頂級美人湯・森林綠意環繞私人獨立湯屋與戶外風呂",
    badge: "♨️ 頂級美人湯",
    badgeColor: "bg-sky-100 text-sky-800",
    rating: 4.8,
    lat: 24.8306, lng: 121.7712
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TAIWAN_SEED_SPOTS };
}

