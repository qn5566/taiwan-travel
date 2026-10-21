/**
 * 台灣吃喝玩樂網頁版 - 旗艦核心資料庫 (data.js)
 * 涵蓋：
 * 1. Top 1-6 熱門活動景點 (TOP_ACTIVITIES_6) - 膠囊橢圓藥丸拱門形排列
 * 2. 18 大主題專區 (THEMES_DATA)
 * 3. 7 大排行榜全資料集 (RANKINGS_DATA: 手搖20、景點20、包車10、活動10、雨天10、咖啡20、文青20)
 * 4. 瀑布流景點資料集 (ALL_SPOTS_DATA, 涵蓋全台縣市)
 * 5. 全台咖啡名店資料庫 (TAIWAN_CAFES_DATA, 4列網格專用，含插頭/甜點/手沖/寵物友善等特徵)
 * 6. 米其林星級名店與必比登推介 (TAIPEI_MICHELIN_STARS_DATA, BIB_GOURMAND_DATA)
 * 7. 週末探店專欄部落格文章 (BLOG_ARTICLES_DATA, 一排一個文章顯示，含景點詳細資訊盒)
 * 8. 萬家福線上伴手禮名產 (WANJIAFU_PRODUCTS)
 */

// 1. Top 1-6 台灣熱門活動景點 (膠囊藥丸拱門形)
const TOP_ACTIVITIES_6 = [
  {
    "rank": 1,
    "name": "台北 101 觀景台快速通關",
    "enName": "Taipei 101 Observatory",
    "city": "台北市信義區",
    "cityEn": "Taipei City",
    "rate": "4.9★",
    "reviews": "128,490+ Reviews",
    "price": "NT$ 600",
    "origPrice": "NT$ 650",
    "tag": "世界超高速電梯 · 360° 天際線",
    "desc": "37 秒直達 89 樓！漫步雲端俯瞰大台北盆地日落夜景，國際旅客指名必訪第一名。",
    "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop",
    "activityId": "1659-taipei-101-observatory-ticket-taipei",
    "badge": "TOP 1 MUST VISIT"
  },
  {
    "rank": 2,
    "name": "九份老街＆十分天燈一日遊",
    "enName": "Jiufen & Shifen Lantern Tour",
    "city": "新北市瑞芳區",
    "cityEn": "New Taipei City",
    "rate": "4.9★",
    "reviews": "96,240+ Reviews",
    "price": "NT$ 780",
    "origPrice": "NT$ 980",
    "tag": "黃金山城 · 祈福天燈放飛",
    "desc": "宮崎駿神隱少女靈感之源！漫步阿妹茶樓紅燈籠石階，前往十分瀑布放飛心願天燈。",
    "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    "activityId": "1874-jiufen-shifen-day-tour-taipei",
    "badge": "TOP 2 CLASSIC"
  },
  {
    "rank": 3,
    "name": "國立故宮博物院電子門票",
    "enName": "National Palace Museum",
    "city": "台北市士林區",
    "cityEn": "Taipei City",
    "rate": "4.8★",
    "reviews": "74,120+ Reviews",
    "price": "NT$ 350",
    "origPrice": "NT$ 350",
    "tag": "世界四大博物館 · 翠玉白菜",
    "desc": "典藏近七十萬件中華五千年歷代皇家宮廷瑰寶，翠玉白菜與肉形石神乎其技。",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop",
    "activityId": "1093-national-palace-museum-ticket-taipei",
    "badge": "TOP 3 HERITAGE"
  },
  {
    "rank": 4,
    "name": "花蓮太魯閣峽谷＆清水斷崖",
    "enName": "Taroko Gorge & Qingshui Cliff",
    "city": "花蓮縣秀林鄉",
    "cityEn": "Hualien County",
    "rate": "4.9★",
    "reviews": "58,300+ Reviews",
    "price": "NT$ 1,200",
    "origPrice": "NT$ 1,500",
    "tag": "大理石峽谷 · 太平洋絕壁",
    "desc": "仰望聳立千米大理石峽谷壁立千仞，走訪燕子口、九曲洞與太平洋第一道絕美晨曦。",
    "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop",
    "activityId": "1095-taroko-gorge-day-tour-hualien",
    "badge": "TOP 4 WONDER"
  },
  {
    "rank": 5,
    "name": "日月潭遊湖船票＆高空纜車",
    "enName": "Sun Moon Lake Boat & Cable Car",
    "city": "南投縣魚池鄉",
    "cityEn": "Nantou County",
    "rate": "4.8★",
    "reviews": "46,800+ Reviews",
    "price": "NT$ 450",
    "origPrice": "NT$ 600",
    "tag": "CNN最美自行車道 · 水陸空全覽",
    "desc": "乘搭遊艇穿梭水社碼頭與伊達邵，搭乘高空纜車俯瞰米其林三星日月潭湖光山色。",
    "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
    "activityId": "1094-sun-moon-lake-pass-nantou",
    "badge": "TOP 5 SERENITY"
  },
  {
    "rank": 6,
    "name": "墾丁後壁湖浮潛＆水上體驗",
    "enName": "Kenting Snorkeling & Watersports",
    "city": "屏東縣恆春鎮",
    "cityEn": "Pingtung County",
    "rate": "4.9★",
    "reviews": "39,500+ Reviews",
    "price": "NT$ 650",
    "origPrice": "NT$ 800",
    "tag": "熱帶珊瑚礁 · 專業教練隨行",
    "desc": "台灣最美珊瑚礁海洋保護區，穿梭五彩繽紛熱帶魚群與小丑魚共游，南國度假必備。",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
    "activityId": "1090-kenting-day-tour-kaohsiung",
    "badge": "TOP 6 OCEAN"
  }
];

// 2. 18 大主題專區
const THEMES_DATA = [
  {
    "id": "huadong",
    "name": "🏞️ 花東縱谷慢活遊",
    "shortName": "花東縱谷",
    "enName": "East Coast Rift Valley",
    "icon": "🏞️",
    "count": "45 處",
    "desc": "清水斷崖太平洋日出、秀姑巒溪激流泛舟與池上伯朗大道黃金稻浪"
  },
  {
    "id": "islands",
    "name": "🏝️ 離島跳島全攻略",
    "shortName": "離島跳島",
    "enName": "Offshore Islands Hopping",
    "icon": "🏝️",
    "count": "32 處",
    "desc": "澎湖花火節、綠島朝日海底名湯、小琉球綠蠵龜共游與馬祖藍眼淚"
  },
  {
    "id": "festivals",
    "name": "🏮 四季節慶萬年曆",
    "shortName": "四季節慶",
    "enName": "Seasonal Festivals",
    "icon": "🏮",
    "count": "28 場",
    "desc": "平溪天燈節、台南鹽水蜂炮、台北101跨年煙火與新北歡樂耶誕城"
  },
  {
    "id": "hotspring",
    "name": "♨️ 頂級名湯溫泉放鬆",
    "shortName": "溫泉名湯",
    "enName": "Hot Springs & Spa",
    "icon": "♨️",
    "count": "36 間",
    "desc": "北投白磺美人湯、宜蘭礁溪寒沐、台南關子嶺泥漿與谷關奢華溫泉"
  },
  {
    "id": "nightmarket",
    "name": "🍢 舌尖上的深夜食堂",
    "shortName": "深夜夜市",
    "enName": "Night Markets & Street Food",
    "icon": "🍢",
    "count": "50 處",
    "desc": "士林、逢甲、羅東、花園、文化路夜市道地台味小吃排隊名店"
  },
  {
    "id": "cafe",
    "name": "☕ 全台特色咖啡散策",
    "shortName": "特色咖啡",
    "enName": "Specialty Coffee Culture",
    "icon": "☕",
    "count": "180+ 間",
    "desc": "插頭友善、世界烘豆冠軍、老宅植栽與無敵海景景觀名店全覽"
  },
  {
    "id": "michelin",
    "name": "⭐ 米其林星級與必比登",
    "shortName": "米其林指南",
    "enName": "Michelin Stars & Bib Gourmand",
    "icon": "⭐",
    "count": "60+ 家",
    "desc": "頤宮、態芮、logy頂級殿堂與全台排隊必比登街頭巷弄庶民美食"
  },
  {
    "id": "railway",
    "name": "🚂 經典鐵道全景圖鑑",
    "shortName": "經典鐵道",
    "enName": "Heritage Scenic Railways",
    "icon": "🚂",
    "count": "24 條",
    "desc": "阿里山林鐵祝山線、平溪深澳線、集集觀光線與花東縱谷海線火車"
  },
  {
    "id": "camping",
    "name": "⛺ 星空野奢豪華露營",
    "shortName": "星空露營",
    "enName": "Glamping & Outdoor",
    "icon": "⛺",
    "count": "42 營地",
    "desc": "苗栗森林系帳篷、宜蘭海景露營車與生鮮免備料燒烤食材箱直配"
  },
  {
    "id": "trekking",
    "name": "⛰️ 台灣百岳與山林古道",
    "shortName": "百岳古道",
    "enName": "Alpine Peaks & Hiking Trails",
    "icon": "⛰️",
    "count": "55 條",
    "desc": "玉山主峰、合歡山群峰、阿朗壹古道縱走與宜蘭抹茶山踏青步道"
  },
  {
    "id": "nightview",
    "name": "🌃 浪漫百萬夜景私藏",
    "shortName": "百萬夜景",
    "enName": "Million-Dollar Night Views",
    "icon": "🌃",
    "count": "20 處",
    "desc": "象山俯瞰台北101、高雄壽山忠烈祠、台中鰲峰山觀景台天際線"
  },
  {
    "id": "northcoast",
    "name": "🌊 北海岸海蝕地貌秘境",
    "shortName": "北海岸秘境",
    "enName": "North Coast Wonders",
    "icon": "🌊",
    "count": "26 處",
    "desc": "野柳女王頭、陰陽海、鼻頭角步道與石門老梅綠石槽春季限定奇觀"
  },
  {
    "id": "roundtaiwan",
    "name": "🚴 熱血環島縱橫壯遊",
    "shortName": "環島壯遊",
    "enName": "Round-Taiwan Cycling",
    "icon": "🚴",
    "count": "15 路線",
    "desc": "環島1號線、日月潭環潭自行車道與花東雙鐵慢騎山海美景"
  },
  {
    "id": "diving",
    "name": "🤿 潛入太平洋與珊瑚礁",
    "shortName": "海洋潛水",
    "enName": "Diving & Snorkeling",
    "icon": "🤿",
    "count": "18 潛點",
    "desc": "綠島大白沙、小琉球海龜共游、墾丁後壁湖與東北角龍洞灣浮潛"
  },
  {
    "id": "surfing",
    "name": "🏄 追浪熱血浪人天堂",
    "shortName": "衝浪天堂",
    "enName": "Surfing Beaches",
    "icon": "🏄",
    "count": "12 浪點",
    "desc": "宜蘭頭城烏石港、台東金尊漁港、墾丁佳樂水與磯崎海水浴場"
  },
  {
    "id": "templefair",
    "name": "🪅 傳統廟會與民俗藝陣",
    "shortName": "傳統廟會",
    "enName": "Traditional Temple Fairs",
    "icon": "🪅",
    "count": "20 盛典",
    "desc": "大甲鎮瀾宮媽祖遶境、白沙屯粉紅超跑、東港迎王燒王船慶典"
  },
  {
    "id": "events",
    "name": "🎪 國際年度盛事展演",
    "shortName": "國際盛事",
    "enName": "Major Events & Concerts",
    "icon": "🎪",
    "count": "30 場",
    "desc": "大港開唱、國際熱氣球嘉年華、台北電玩展、台灣文博會盛典"
  },
  {
    "id": "rainy",
    "name": "🌧️ 雨天備案室內美學",
    "shortName": "雨天美學",
    "enName": "Rainy Day Cultural Spaces",
    "icon": "🌧️",
    "count": "35 館",
    "desc": "奇美博物館、故宮博物院、海科館、Xpark水族館與各市美術館"
  }
];

// 3. 7 大排行榜全整合集合
const RANKINGS_DATA = {
  drinks: [
  {
    "rank": 1,
    "name": "麻古茶坊 MACU TEA",
    "category": "鮮果茶飲",
    "rate": "4.9★",
    "drinks": [
      "芝芝芒果果粒",
      "楊枝甘露2.0",
      "金萱雙Q"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🥭"
  },
  {
    "rank": 2,
    "name": "得正 Oolong Tea",
    "category": "原茶專門",
    "rate": "4.9★",
    "drinks": [
      "焙烏龍鮮奶茶",
      "春烏龍",
      "芝士奶蓋春烏龍"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🍵"
  },
  {
    "rank": 3,
    "name": "五桐號 WooTea",
    "category": "手作凍飲",
    "rate": "4.8★",
    "drinks": [
      "杏仁凍五桐茶",
      "泰奶霜料",
      "綠茶凍五桐茶"
    ],
    "sugarIce": "半糖微冰",
    "logo": "🍮"
  },
  {
    "rank": 4,
    "name": "迷客夏 Milksha",
    "category": "鮮奶茶系",
    "rate": "4.8★",
    "drinks": [
      "珍珠紅茶拿鐵",
      "大甲芋頭鮮奶",
      "麥茶拿鐵"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🥛"
  },
  {
    "rank": 5,
    "name": "一沐日 A-Mu-Ri",
    "category": "草仔粿粉粿",
    "rate": "4.9★",
    "drinks": [
      "逮丸奶茶 (草仔粿)",
      "油切蕎麥茶",
      "黑糖粉粿奶茶"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🍡"
  },
  {
    "rank": 6,
    "name": "清心福全 Ching-Shin",
    "category": "國民老字號",
    "rate": "4.7★",
    "drinks": [
      "優多綠茶 (多多綠)",
      "烏龍綠茶",
      "隱藏版珍珠蜂蜜鮮奶普洱"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🍋"
  },
  {
    "rank": 7,
    "name": "可不可熟成紅茶 Kebuke",
    "category": "英倫熟成",
    "rate": "4.8★",
    "drinks": [
      "熟成紅茶",
      "白玉歐蕾",
      "胭脂紅茶"
    ],
    "sugarIce": "一分糖微冰",
    "logo": "🫖"
  },
  {
    "rank": 8,
    "name": "龜記茗品 Guiji",
    "category": "古早味果茶",
    "rate": "4.8★",
    "drinks": [
      "紅柚翡翠",
      "蘋果紅萱",
      "三十三紅茶"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🍊"
  },
  {
    "rank": 9,
    "name": "珍煮丹 Truedan",
    "category": "黑糖珍珠",
    "rate": "4.8★",
    "drinks": [
      "黑糖珍珠鮮奶",
      "泰泰鮮奶茶",
      "十份芋芋鮮奶"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🧋"
  },
  {
    "rank": 10,
    "name": "茶湯會 TP-TEA",
    "category": "春水堂家族",
    "rate": "4.7★",
    "drinks": [
      "觀音拿鐵",
      "翡翠檸檬",
      "珍珠觀音拿鐵"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🍃"
  },
  {
    "rank": 11,
    "name": "約翰紅茶公司 John Tea",
    "category": "精品紅茶",
    "rate": "4.9★",
    "drinks": [
      "雨果那堤",
      "曼哈頓紅茶",
      "煮濃那堤"
    ],
    "sugarIce": "半糖少冰",
    "logo": "👑"
  },
  {
    "rank": 12,
    "name": "春水堂 Chun Shui Tang",
    "category": "珍珠奶茶始祖",
    "rate": "4.9★",
    "drinks": [
      "原創珍珠奶茶",
      "黃金香柚茶",
      "功夫麵搭配珍奶"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🏛️"
  },
  {
    "rank": 13,
    "name": "再睡5分鐘 Nap Tea",
    "category": "滴妹創辦",
    "rate": "4.8★",
    "drinks": [
      "棉被午茉綠",
      "日安燕麥奶茶",
      "香芋鮮奶"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🦥"
  },
  {
    "rank": 14,
    "name": "萬波島嶼紅茶 Wanpo",
    "category": "眷村懷舊",
    "rate": "4.7★",
    "drinks": [
      "紅豆粉粿鮮奶",
      "蘭葉那堤",
      "楊枝甘露"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🏝️"
  },
  {
    "rank": 15,
    "name": "天仁茗茶 CHA FOR TEA",
    "category": "頂級原葉",
    "rate": "4.8★",
    "drinks": [
      "913茶王",
      "香橙綠茶",
      "珍珠鮮奶茶"
    ],
    "sugarIce": "無糖微冰",
    "logo": "🌱"
  },
  {
    "rank": 16,
    "name": "大苑子 DaYungs",
    "category": "鮮果產地直送",
    "rate": "4.8★",
    "drinks": [
      "愛文芒果冰沙",
      "柳橙翡翠",
      "芭樂檸檬"
    ],
    "sugarIce": "微糖少冰",
    "logo": "🍓"
  },
  {
    "rank": 17,
    "name": "八曜和茶 Hachiyo",
    "category": "無咖啡因和風",
    "rate": "4.9★",
    "drinks": [
      "八曜和茶",
      "柚香覺醒白茶",
      "和風307"
    ],
    "sugarIce": "無糖少冰",
    "logo": "🌾"
  },
  {
    "rank": 18,
    "name": "烏弄原茶 UNONG",
    "category": "台灣原生茶",
    "rate": "4.8★",
    "drinks": [
      "名間冬片仔",
      "金萱烏龍",
      "桂花凍胭脂紅茶"
    ],
    "sugarIce": "無糖微冰",
    "logo": "🏔️"
  },
  {
    "rank": 19,
    "name": "SOMA 特調飲品",
    "category": "東區精品排隊",
    "rate": "4.9★",
    "drinks": [
      "原味茶歐蕾",
      "精粹高山菁茶",
      "白霜茶歐蕾"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🍸"
  },
  {
    "rank": 20,
    "name": "COMEBUY",
    "category": "現萃茶飲",
    "rate": "4.7★",
    "drinks": [
      "海神現萃茶",
      "蘋果冰茶",
      "雙Q百香綠茶"
    ],
    "sugarIce": "微糖微冰",
    "logo": "🌊"
  }
],
  spots: [
  {
    "rank": 1,
    "name": "台北 101 觀景台",
    "city": "台北市信義區",
    "rate": "4.9★",
    "views": "258 萬次訂閱",
    "desc": "360度俯瞰台北盆地夜景，世界超高速電梯僅 37 秒登頂。",
    "tag": "國際地標",
    "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop",
    "activityId": "1659-taipei-101-observatory-ticket-taipei"
  },
  {
    "rank": 2,
    "name": "九份老街與阿妹茶樓",
    "city": "新北市瑞芳區",
    "rate": "4.9★",
    "views": "242 萬次訂閱",
    "desc": "宮崎駿神隱少女靈感之源，紅燈籠石階與芋圓山城茶香。",
    "tag": "經典山城",
    "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop",
    "activityId": "1874-jiufen-shifen-day-tour-taipei"
  },
  {
    "rank": 3,
    "name": "國立故宮博物院",
    "city": "台北市士林區",
    "rate": "4.8★",
    "views": "210 萬次訂閱",
    "desc": "典藏近七十萬件中華歷代皇家珍寶，翠玉白菜名聞遐邇。",
    "tag": "世界博物館",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop",
    "activityId": "1093-national-palace-museum-ticket-taipei"
  },
  {
    "rank": 4,
    "name": "花蓮太魯閣峽谷燕子口",
    "city": "花蓮縣秀林鄉",
    "rate": "4.9★",
    "views": "198 萬次訂閱",
    "desc": "立霧溪經數百萬年切鑿千米大理石絕壁，世界級地質奇觀。",
    "tag": "大自然鬼斧",
    "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop",
    "activityId": "1095-taroko-gorge-day-tour-hualien"
  },
  {
    "rank": 5,
    "name": "南投日月潭水社碼頭",
    "city": "南投縣魚池鄉",
    "rate": "4.8★",
    "views": "185 萬次訂閱",
    "desc": "CNN評選全球十大最美自行車道，晨曦湖面如詩如畫。",
    "tag": "湖光山色",
    "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
    "activityId": "1094-sun-moon-lake-pass-nantou"
  },
  {
    "rank": 6,
    "name": "嘉義阿里山祝山觀日出",
    "city": "嘉義縣阿里山鄉",
    "rate": "4.9★",
    "views": "172 萬次訂閱",
    "desc": "搭乘百年高山小火車，在雲海翻騰中迎接金色朝陽光芒。",
    "tag": "高山鐵道",
    "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop",
    "activityId": "3150-alishan-day-tour"
  },
  {
    "rank": 7,
    "name": "台南奇美博物館",
    "city": "台南市仁德區",
    "rate": "4.9★",
    "views": "165 萬次訂閱",
    "desc": "希臘神話阿波羅噴泉與巴洛克純白宮殿，典藏頂級小提琴。",
    "tag": "西洋藝術",
    "img": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop",
    "activityId": "3170-chimei-museum-ticket"
  },
  {
    "rank": 8,
    "name": "高雄駁二藝術特區與大港橋",
    "city": "高雄市鹽埕區",
    "rate": "4.8★",
    "views": "158 萬次訂閱",
    "desc": "港邊老倉庫改建文創特區，全台首座旋轉大港橋極具代表性。",
    "tag": "港灣文創",
    "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop",
    "activityId": "3180-pier2-tour"
  },
  {
    "rank": 9,
    "name": "屏東墾丁白沙灣與鵝鑾鼻",
    "city": "屏東縣恆春鎮",
    "rate": "4.8★",
    "views": "150 萬次訂閱",
    "desc": "熱帶蔚藍海灣與純白珊瑚沙灘，台灣最南端白色燈塔守護。",
    "tag": "南國陽光",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
    "activityId": "1090-kenting-day-tour-kaohsiung"
  },
  {
    "rank": 10,
    "name": "南投清境農場青青草原",
    "city": "南投縣仁愛鄉",
    "rate": "4.8★",
    "views": "146 萬次訂閱",
    "desc": "綿延翠綠高山草原，可愛綿羊脫衣秀與中央山脈壯麗連峰。",
    "tag": "小瑞士風情",
    "img": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop",
    "activityId": "3190-cingjing-tour"
  },
  {
    "rank": 11,
    "name": "台中高美濕地夕陽風車",
    "city": "台中市清水區",
    "rate": "4.8★",
    "views": "142 萬次訂閱",
    "desc": "被譽為台灣版天空之鏡！泥灘倒映萬丈夕陽餘暉，浪漫滿分。",
    "tag": "天空之鏡",
    "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
    "activityId": "3200-gaomei-sunset-tour"
  },
  {
    "rank": 12,
    "name": "宜蘭蘭陽博物館",
    "city": "宜蘭縣頭城鎮",
    "rate": "4.8★",
    "views": "138 萬次訂閱",
    "desc": "融入東北角單面山幾何造型建築，烏石港旁生態人文殿堂。",
    "tag": "美學地標",
    "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop",
    "activityId": "3210-lanyang-museum"
  },
  {
    "rank": 13,
    "name": "台東三仙台跨海八拱橋",
    "city": "台東縣成功鎮",
    "rate": "4.8★",
    "views": "132 萬次訂閱",
    "desc": "巨龍般跨越太平洋的八拱紅色拱橋，迎向台灣本島第一道曙光。",
    "tag": "東海岸地標",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
    "activityId": "3220-sansiantai-tour"
  },
  {
    "rank": 14,
    "name": "新北野柳地質公園女王頭",
    "city": "新北市萬里區",
    "rate": "4.7★",
    "views": "129 萬次訂閱",
    "desc": "經數千年海浪與風化雕琢形成的蕈狀岩，尊貴高雅的女王側面。",
    "tag": "世界奇觀",
    "img": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop",
    "activityId": "3230-yehliu-ticket"
  },
  {
    "rank": 15,
    "name": "台南安平古堡與樹屋",
    "city": "台南市安平區",
    "rate": "4.7★",
    "views": "125 萬次訂閱",
    "desc": "荷蘭統治時期熱蘭遮城遺跡，百年老榕樹與紅磚倉庫共生奇景。",
    "tag": "古蹟巡禮",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop",
    "activityId": "3240-anping-tour"
  },
  {
    "rank": 16,
    "name": "澎湖七美雙心石滬",
    "city": "澎湖縣七美鄉",
    "rate": "4.9★",
    "views": "120 萬次訂閱",
    "desc": "湛藍純淨海水中兩顆相扣愛心石滬，先人捕魚智慧與浪漫傳奇。",
    "tag": "浪漫海島",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
    "activityId": "3250-qimei-island"
  },
  {
    "rank": 17,
    "name": "綠島朝日海底溫泉",
    "city": "台東縣綠島鄉",
    "rate": "4.9★",
    "views": "115 萬次訂閱",
    "desc": "全球僅三處罕見的海底鹹水溫泉，拂曉聽海潮聲看旭日東升。",
    "tag": "世界名湯",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop",
    "activityId": "2930-green-island-hotspring"
  },
  {
    "rank": 18,
    "name": "金門得月樓與水頭聚落",
    "city": "金門縣金城鎮",
    "rate": "4.8★",
    "views": "108 萬次訂閱",
    "desc": "閩南傳統合院與南洋僑鄉番仔樓交融，防禦銃樓歷史底蘊深厚。",
    "tag": "僑鄉風華",
    "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop",
    "activityId": "3260-kinmen-tour"
  },
  {
    "rank": 19,
    "name": "新竹司馬庫斯上帝部落",
    "city": "新竹縣尖石鄉",
    "rate": "4.9★",
    "views": "105 萬次訂閱",
    "desc": "深山泰雅族純淨部落，參天千年紅檜巨木群洗滌身心。",
    "tag": "泰雅秘境",
    "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop",
    "activityId": "3270-smangus-tour"
  },
  {
    "rank": 20,
    "name": "台北北投地熱谷溫泉",
    "city": "台北市北投區",
    "rate": "4.8★",
    "views": "102 萬次訂閱",
    "desc": "青磺地熱煙霧繚繞如仙境，英式紅磚和洋折衷浴場古蹟美不勝收。",
    "tag": "市區名湯",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop",
    "activityId": "3280-beitou-hotspring"
  }
],
  charter: [
  {
    "rank": 1,
    "name": "九份老街 · 十分天燈 · 野柳地質經典一日包車",
    "trips": "年預約 4.2 萬趟",
    "desc": "北台灣最熱門路線！專車直達免轉車，穿梭黃金山城與十分瀑布，放天燈祈福。",
    "price": "NT$ 2,800 起",
    "city": "台北 / 新北出發"
  },
  {
    "rank": 2,
    "name": "花蓮太魯閣國家公園 · 清水斷崖峽谷包車專車",
    "trips": "年預約 3.6 萬趟",
    "desc": "專屬在地老司機隨行導覽燕子口、九曲洞、白楊步道水濂洞與蔚藍清水斷崖。",
    "price": "NT$ 3,200 起",
    "city": "花蓮出發"
  },
  {
    "rank": 3,
    "name": "阿里山森林日出 · 奮起湖老街雲海專案包車",
    "trips": "年預約 2.8 萬趟",
    "desc": "免去凌晨排小火車站票奔波，專車直達祝山觀日出、神木群步道與奮起湖便當。",
    "price": "NT$ 3,800 起",
    "city": "嘉義出發"
  },
  {
    "rank": 4,
    "name": "南投日月潭湖景 · 清境農場高空步道連線包車",
    "trips": "年預約 3.1 萬趟",
    "desc": "一日暢遊中台灣兩大國際景點！水社碼頭騎單車＋清境青青草原看綿羊秀。",
    "price": "NT$ 3,500 起",
    "city": "台中出發"
  },
  {
    "rank": 5,
    "name": "屏東墾丁國家公園 · 恆春半島海景包車一日遊",
    "trips": "年預約 2.5 萬趟",
    "desc": "船帆石、鵝鑾鼻燈塔、龍磐公園崩崖與白沙灣，南國陽光海風全覽行程。",
    "price": "NT$ 2,900 起",
    "city": "高雄 / 恆春出發"
  },
  {
    "rank": 6,
    "name": "宜蘭礁溪溫泉 · 抹茶山聖母山莊步道包車",
    "trips": "年預約 1.9 萬趟",
    "desc": "登頂翠綠抹茶山俯瞰蘭陽平原，下山專車送達礁溪享受天然美人湯舒壓。",
    "price": "NT$ 2,600 起",
    "city": "台北 / 宜蘭出發"
  },
  {
    "rank": 7,
    "name": "台南安平古堡 · 國華街美食赤崁樓文化包車",
    "trips": "年預約 2.2 萬趟",
    "desc": "專車輕鬆穿梭台南古都巷弄，大啖牛肉湯、鱔魚意麵，省去高溫步行之苦。",
    "price": "NT$ 2,500 起",
    "city": "台南出發"
  },
  {
    "rank": 8,
    "name": "高雄旗津彩虹教堂 · 駁二藝術特區 · 佛光山專車",
    "trips": "年預約 1.7 萬趟",
    "desc": "港都海陸雙重享受！探訪佛光山大佛莊嚴盛景，傍晚至西子灣看浪漫夕陽。",
    "price": "NT$ 2,800 起",
    "city": "高雄出發"
  },
  {
    "rank": 9,
    "name": "台東池上伯朗大道 · 三仙台跨海大橋專案包車",
    "trips": "年預約 1.5 萬趟",
    "desc": "馳騁縱谷黃金稻浪金城武樹，橫跨海岸山脈欣賞太平洋八拱跨海大橋。",
    "price": "NT$ 3,300 起",
    "city": "台東出發"
  },
  {
    "rank": 10,
    "name": "台北北投名湯 · 陽明山擎天崗小油坑地熱包車",
    "trips": "年預約 2.0 萬趟",
    "desc": "台北後花園舒心一日散策！看小油坑地熱火山冒煙，漫步擎天崗水牛草原。",
    "price": "NT$ 2,400 起",
    "city": "台北出發"
  }
],
  events: [
  {
    "rank": 1,
    "name": "大港開唱 Megaport Festival",
    "loc": "高雄駁二藝術特區",
    "date": "每年 3 月底盛大登場",
    "tag": "台灣最大港邊獨立音樂祭",
    "desc": "十座舞台橫跨高雄港兩岸，結合大港橋旋轉、搖滾樂團與知名藝人跨界開唱。"
  },
  {
    "rank": 2,
    "name": "台灣國際熱氣球嘉年華",
    "loc": "台東鹿野高台",
    "date": "每年 7 - 8 月盛夏",
    "tag": "百萬遊客高空視覺盛宴",
    "desc": "造型各異的巨大熱氣球在鹿野大草原升空，搭配夜間光雕音樂會與無人機大秀震撼全場。"
  },
  {
    "rank": 3,
    "name": "新北歡樂耶誕城",
    "loc": "新北市民廣場與板橋車站",
    "date": "每年 11 月至翌年 1 月",
    "tag": "亞洲十大耶誕慶典",
    "desc": "全台最大 3D 光雕投影秀、璀璨天橋星空光廊與德國傳統耶誕市集，冬季浪漫首選。"
  },
  {
    "rank": 4,
    "name": "台中大甲媽祖遶境進香",
    "loc": "台中大甲鎮瀾宮至新港奉天宮",
    "date": "每年農曆三月 (9天8夜)",
    "tag": "世界三大宗教盛事 (UNESCO)",
    "desc": "跨越四縣市跋涉 340 餘公里，數百萬虔誠信眾徒步隨香，體驗最震撼台灣在地人情味。"
  },
  {
    "rank": 5,
    "name": "貢寮國際海洋音樂祭",
    "loc": "新北貢寮福隆海水浴場",
    "date": "每年盛夏 7 - 8 月",
    "tag": "原創獨立音樂搖籃",
    "desc": "金黃沙灘上的原創音樂狂歡，台灣無數天團崛起的殿堂級海灘音樂節。"
  },
  {
    "rank": 6,
    "name": "台北國際電玩展 (TpGS)",
    "loc": "台北南港展覽館",
    "date": "每年 1 月下旬",
    "tag": "亞太遊戲產業風向球",
    "desc": "全球一線頂尖遊戲大廠最新未上市大作試玩、電競總決賽與獨立遊戲專區。"
  },
  {
    "rank": 7,
    "name": "台南鹽水蜂炮元宵狂歡",
    "loc": "台南鹽水武廟",
    "date": "每年元宵節 (正月十四至十五)",
    "tag": "全球十大最狂熱慶典",
    "desc": "數百萬發蜂炮齊發衝擊，全副武裝戴全罩式安全帽親歷震撼洗禮，驅邪祈福迎財神。"
  },
  {
    "rank": 8,
    "name": "嘉義市國際管樂節",
    "loc": "嘉義市體育場與噴水池圓環",
    "date": "每年 12 月中旬",
    "tag": "管樂之都街頭踩街狂歡",
    "desc": "超過 50 支國內外頂尖管樂行進樂隊走上嘉義街頭踩街吹奏，全城沸騰樂音飛揚。"
  },
  {
    "rank": 9,
    "name": "台灣文博會 Creative Expo",
    "loc": "全台巡迴 (台北/台南/高雄)",
    "date": "每年下半年",
    "tag": "全亞洲最大文創 IP 展",
    "desc": "集結台灣原創插畫、文創設計、手作工藝、獨立設計師與在地文化策展。"
  },
  {
    "rank": 10,
    "name": "平溪國際天燈節",
    "loc": "新北市平溪與十分廣場",
    "date": "每年元宵節前後",
    "tag": "世界第二大夜間節慶 (CNN)",
    "desc": "數千盞寫滿心願的天燈在黑夜中同時冉冉升空，繁星點點宛如銀河落入凡間。"
  }
],
  rainy: [
  {
    "rank": 1,
    "name": "台南 ｜ 奇美博物館",
    "city": "台南市仁德區",
    "indoor": "純白巴洛克宮殿 · 頂級提琴與西洋藝術",
    "desc": "全台館藏最豐富的私人博物館！阿波羅噴泉廣場、羅丹沉思者、世界最大提琴典藏，雨天漫步宮殿半天都不夠。",
    "rate": "4.9★",
    "ticket": "NT$ 200",
    "img": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop"
  },
  {
    "rank": 2,
    "name": "台北 ｜ 國立故宮博物院",
    "city": "台北市士林區",
    "indoor": "世界四大博物館之一 · 70萬件宮廷瑰寶",
    "desc": "外頭風雨大作，室內溫潤沉靜。翠玉白菜、肉形石、毛公鼎與四庫全書，雨天浸淫在五千年浩瀚文明。",
    "rate": "4.8★",
    "ticket": "NT$ 350",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
  },
  {
    "rank": 3,
    "name": "桃園 ｜ Xpark 都會型水生公園",
    "city": "桃園市中壢區",
    "indoor": "日本橫濱八景島海外首館 · 療癒水母缸",
    "desc": "高鐵桃園站步行5分鐘！結合光影音樂科技的沉浸式水族館，雨天看企鵝空中步道、萬隻銀鮫悠游大水槽超療癒。",
    "rate": "4.8★",
    "ticket": "NT$ 550",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop"
  },
  {
    "rank": 4,
    "name": "台北 ｜ 台北 101 觀景台與室內商場",
    "city": "台北市信義區",
    "indoor": "室內高空俯瞰迷霧雲海 · 風阻尼球展示",
    "desc": "雨天的台北101別有一番仙氣！看窗外雲霧翻騰宛如漫步空中仙境，還能近距離欣賞世界最大 660 公噸風阻尼球。",
    "rate": "4.9★",
    "ticket": "NT$ 600",
    "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop"
  },
  {
    "rank": 5,
    "name": "台中 ｜ 臺中國家歌劇院",
    "city": "台中市西屯區",
    "indoor": "伊東豊雄曲牆美學 · 無樑柱建築奇觀",
    "desc": "被國際媒體譽為世界九大新地標！走入洞窟般的美聲涵洞曲牆空間，逛文創聚落、品咖啡、看藝文展覽。",
    "rate": "4.8★",
    "ticket": "免費參觀 (演出另計)",
    "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop"
  },
  {
    "rank": 6,
    "name": "宜蘭 ｜ 蘭陽博物館",
    "city": "宜蘭縣頭城鎮",
    "indoor": "單面山幾何玻璃建築 · 宜蘭山海地質史",
    "desc": "外頭蘭陽平原落雨紛紛，館內傾斜玻璃光影灑落。介紹宜蘭山林、平原與海洋生態，是宜蘭雨天最美避風港。",
    "rate": "4.8★",
    "ticket": "NT$ 100",
    "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop"
  },
  {
    "rank": 7,
    "name": "基隆 ｜ 國立海洋科技博物館 (海科館)",
    "city": "基隆市中正區",
    "indoor": "由火力發電廠改建 · 巨大海洋科學館",
    "desc": "北台灣雨都基隆最強室內景點！互動式深海潛水艇體驗、水產廳摸摸池與 IMAX 巨幕海洋劇場，親子雨天首推。",
    "rate": "4.7★",
    "ticket": "NT$ 200",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop"
  },
  {
    "rank": 8,
    "name": "台北 ｜ 台北市立美術館 (北美館)",
    "city": "台北市中山區",
    "indoor": "白色四方管狀現代美學 · 沉靜當代藝術展",
    "desc": "純白採光天井搭配前衛當代藝術展覽，地下中庭設有藝文書店與優雅咖啡座，下雨天一個人也能沉澱充電。",
    "rate": "4.8★",
    "ticket": "NT$ 30",
    "img": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop"
  },
  {
    "rank": 9,
    "name": "高雄 ｜ 高雄市立美術館與內惟藝術中心",
    "city": "高雄市鼓山區",
    "indoor": "純白弧形山丘建築 · 結合電影院與輕食展演",
    "desc": "輕軌直達內惟站！漫步在無隔閡的開放式純白藝術大廳，聽音響實驗、品嚐在地小農精品咖啡，愜意無比。",
    "rate": "4.8★",
    "ticket": "NT$ 90",
    "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop"
  },
  {
    "rank": 10,
    "name": "台中 ｜ 國立自然科學博物館 (科博館)",
    "city": "台中市北區",
    "indoor": "巨大暴龍恐龍廳 · 太空劇場與植物溫室",
    "desc": "全台老少咸宜經典！會轉頭吼叫的機械暴龍超逼真，還有巨大立體劇場與熱帶雨林高空玻璃溫室，室內探索一整天。",
    "rate": "4.9★",
    "ticket": "NT$ 100",
    "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop"
  }
],
  cafe: [
  {
    "rank": 1,
    "name": "Simple Kaffa 興波咖啡旗艦店",
    "city": "台北市中正區",
    "views": "186 萬次點閱",
    "rate": "4.9★",
    "tag": "世界咖啡大師冠軍",
    "feature": "WBC世界咖啡師大賽冠軍吳則霖創辦，森林系天井木質空間，招牌皺皺蛋糕與手沖單品必點。",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "rank": 2,
    "name": "RUFOUS COFFEE ROASTERS",
    "city": "台北市大安區",
    "views": "154 萬次點閱",
    "rate": "4.9★",
    "tag": "亞洲50大最佳咖啡",
    "feature": "台北老字號自家烘焙傳奇！琥珀色復古木質調吧台，義式濃縮與微酸耶加雪菲層次分明。",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "rank": 3,
    "name": "Fika Fika Cafe",
    "city": "台北市中山區",
    "views": "142 萬次點閱",
    "rate": "4.8★",
    "tag": "北歐烘焙冠軍",
    "feature": "北歐盃咖啡烘焙大賽冠軍！淺焙明亮果酸調性，北歐純白極簡空間，採光極佳適合午後閱讀。",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "rank": 4,
    "name": "CAFE!N 硬咖啡民權旗艦店",
    "city": "台北市中山區",
    "views": "135 萬次點閱",
    "rate": "4.8★",
    "tag": "純白極簡美學",
    "feature": "巨型驚嘆號地標與兩層樓純白採光帷幕，聯名冠軍冠軍黑咖啡與脆皮冠軍麵包，拍照超好看。",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "rank": 5,
    "name": "Heritage Bakery & Cafe",
    "city": "台北市中正區",
    "views": "128 萬次點閱",
    "rate": "4.8★",
    "tag": "美式肉桂捲霸主",
    "feature": "台北排隊肉桂捲與紅心芭樂戚風蛋糕王者！紅磚老屋挑高設計，手沖咖啡與美式烘焙完美結合。",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "rank": 6,
    "name": "Coffee Stopover",
    "city": "台中市西區",
    "views": "124 萬次點閱",
    "rate": "4.9★",
    "tag": "台中手沖天花板",
    "feature": "巷弄職人烘焙聖殿！提供五種萃取方式與數十種自選焙度豆單，咖啡迷朝聖必備站點。",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "rank": 7,
    "name": "目覚め咖啡 mezamashikohi",
    "city": "台中市南屯區",
    "views": "119 萬次點閱",
    "rate": "4.8★",
    "tag": "日式綠意採光",
    "feature": "清水模綠意大庭院，晨曦陽光透過落地窗灑落，提供手作烘焙吐司與細膩單品黑咖啡。",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "rank": 8,
    "name": "StableNice BLDG. 原木老宅",
    "city": "台南市中西區",
    "views": "115 萬次點閱",
    "rate": "4.9★",
    "tag": "五十年老印刷廠",
    "feature": "台南老印刷廠改建！結合精品咖啡、文創選物與半露天天井，老磚老木質感溫潤醇厚。",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "rank": 9,
    "name": "握咖啡 OH! Cafe",
    "city": "高雄市鼓山區",
    "views": "110 萬次點閱",
    "rate": "4.9★",
    "tag": "烘豆大師賴昱權",
    "feature": "世界烘豆大賽冠軍賴昱權創立！金黃烘焙原豆與西子灣海風相伴，特調冰滴咖啡香濃甘甜。",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "rank": 10,
    "name": "昭和浪漫冰室 Cafe & Bar",
    "city": "台北市大安區",
    "views": "106 萬次點閱",
    "rate": "4.8★",
    "tag": "日式復古大人味",
    "feature": "老宅骨董沙發配昭和布丁！入夜後提供威士忌冰滴與特調調酒，氛圍微醺浪漫。",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "rank": 11,
    "name": "Instil Coffee Dimension",
    "city": "台北市大安區",
    "views": "102 萬次點閱",
    "rate": "4.8★",
    "tag": "暗黑極簡實驗室",
    "feature": "地下室沉浸式黑色工業風，專注於義式萃取曲線與氮氣冷萃，科技感十足。",
    "img": "https://images.unsplash.com/photo-1518057111178-44a106bad636?w=600&auto=format&fit=crop"
  },
  {
    "rank": 12,
    "name": "幻猻家珈琲 Pallas Cafe",
    "city": "台北市大同區",
    "views": "98 萬次點閱",
    "rate": "4.8★",
    "tag": "大稻埕焦糖布丁",
    "feature": "迪化街巷弄靜謐老宅，手作方形濃醇焦糖布丁配黑咖啡，安靜療癒適合一個人放空。",
    "img": "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop"
  },
  {
    "rank": 13,
    "name": "孵咖啡洋館",
    "city": "台北市大同區",
    "views": "95 萬次點閱",
    "rate": "4.8★",
    "tag": "昭和喫茶店風情",
    "feature": "紅絲絨椅、彩繪玻璃吊燈與老黑膠唱片，彷彿穿越回日本大正昭和年代享受虹吸咖啡。",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "rank": 14,
    "name": "好丘 Good Cho's 信義店",
    "city": "台北市信義區",
    "views": "92 萬次點閱",
    "rate": "4.7★",
    "tag": "眷村手工貝果",
    "feature": "四四南村眷村木窗老舍，手工自製台灣在地食材貝果，搭配香濃燕麥奶拿鐵看台北101。",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "rank": 15,
    "name": "MKCR 山小孩咖啡",
    "city": "台北市中正區",
    "views": "90 萬次點閱",
    "rate": "4.8★",
    "tag": "北門古蹟窗景第一排",
    "feature": "正對國家一級古蹟北門！純白極簡兩層樓，坐二樓窗邊喝燕麥拿鐵看百年北門歷史交會。",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "rank": 16,
    "name": "森/CASA 咖啡沙龍",
    "city": "台南市南區",
    "views": "88 萬次點閱",
    "rate": "4.9★",
    "tag": "京都開化堂百年茶筒",
    "feature": "丹麥經典名椅與日本京都開化堂百年銅罐，安靜深邃的極致侘寂美學，品味頂級手沖。",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "rank": 17,
    "name": "Coffee Sind",
    "city": "台北市中正區",
    "views": "85 萬次點閱",
    "rate": "4.8★",
    "tag": "多肉植栽秘境",
    "feature": "新生南路巷弄溫室！被上百盆多肉植物環繞的小巧外帶吧，招牌赤崁糖拿鐵與手沖。",
    "img": "https://images.unsplash.com/photo-1469957767090-753257cc5287?w=600&auto=format&fit=crop"
  },
  {
    "rank": 18,
    "name": "Single Origin espresso & roast",
    "city": "台北市大安區",
    "views": "83 萬次點閱",
    "rate": "4.8★",
    "tag": "單一產區極致",
    "feature": "藏身東區巷弄的沉著咖啡館，堅持不使用商業配方豆，提供多產區純粹原始風味探索。",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "rank": 19,
    "name": "木柵路易莎烘豆旗艦館",
    "city": "台北市文山區",
    "views": "80 萬次點閱",
    "rate": "4.7★",
    "tag": "插座辦公天堂",
    "feature": "挑高三層樓工業風烘豆旗艦店，全店插座齊全、採光充沛，是遠距工作者最愛據點。",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "rank": 20,
    "name": "Coffee Lover's Planet",
    "city": "台北市大安區",
    "views": "78 萬次點閱",
    "rate": "4.8★",
    "tag": "UCC 旗艦概念館",
    "feature": "SOGO敦化館挑高圓形環狀吧台！提供法壓、虹吸、手沖、冷萃等多達七種萃取設備體驗。",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  }
],
  walk: [
  {
    "rank": 1,
    "name": "台北赤峰街 ｜ 打鐵老街蛻變文青獨立選物與咖啡小巷",
    "city": "台北市大同區",
    "views": "210 萬篇次閱覽",
    "tag": "復古選物",
    "desc": "昔日汽車零件黑手一條街，如今聚集古著、獨立書店、昭和喫茶與手作飾品，穿梭巷弄驚喜連連。"
  },
  {
    "rank": 2,
    "name": "大稻埕迪化街 ｜ 穿梭百年紅磚巴洛克洋樓與南北貨香",
    "city": "台北市大同區",
    "views": "195 萬篇次閱覽",
    "tag": "老洋樓散策",
    "desc": "中藥香、茶香與布匹織紋交織的老台北繁華港埠，走訪傳統老餅舖、郭雪湖畫中老街與文創天井天井。"
  },
  {
    "rank": 3,
    "name": "台南神農街 ｜ 百年木構街屋下的紅燈籠與深夜微光",
    "city": "台南市中西區",
    "views": "188 萬篇次閱覽",
    "tag": "府城夜景",
    "desc": "五條港全盛期最繁榮古街，木造老屋掛起手繪紅燈籠，漫步其間彷彿走入清代府城古色時光。"
  },
  {
    "rank": 4,
    "name": "台中審計新村 ｜ 舊省府眷舍重生的週末青年文創市集",
    "city": "台中市西區",
    "views": "176 萬篇次閱覽",
    "tag": "青年市集",
    "desc": "兩層樓鵝黃色眷村宿舍群，假日聚集全台最熱門手作甜點、黑膠唱片、復古相機與文創攤位。"
  },
  {
    "rank": 5,
    "name": "高雄鹽埕堀江商場 ｜ 走訪港都老鹽埕舶來品與日式木屋巷",
    "city": "高雄市鹽埕區",
    "views": "162 萬篇次閱覽",
    "tag": "舶來老街町",
    "desc": "美軍協防時代的高雄最潮商圈，隱藏老派西服店、阿婆冰、冬粉王與文青翻修復古居酒屋。"
  },
  {
    "rank": 6,
    "name": "台北青田街 ｜ 漫步昭和日式黑瓦宿舍群與綠蔭大道",
    "city": "台北市大安區",
    "views": "155 萬篇次閱覽",
    "tag": "昭和學人街",
    "desc": "台北最幽靜的文教綠洲，老樟樹遮蔭的老日式宿舍、一號糧倉、青田七六老洋館，茶香怡人。"
  },
  {
    "rank": 7,
    "name": "嘉義檜意森活村 ｜ 漫步全台最大日式官舍檜木建築群",
    "city": "嘉義市東區",
    "views": "148 萬篇次閱覽",
    "tag": "檜木之都",
    "desc": "昔日阿里山林業開發官方宿舍群，保留完整29棟木造日式黑瓦房，滿園散發天然檜木幽香。"
  },
  {
    "rank": 8,
    "name": "新竹湖口老街 ｜ 百年紅磚巴洛克拱圈騎樓與客家米食",
    "city": "新竹縣湖口鄉",
    "views": "140 萬篇次閱覽",
    "tag": "紅磚老巴洛克",
    "desc": "全長三百公尺的極致對稱紅磚立面，品嚐客家牛汶水、客家擂茶與百年天主堂古蹟。"
  },
  {
    "rank": 9,
    "name": "宜蘭中興文創園區 ｜ 巨大煙囪與舊中興紙廠頹廢工業美學",
    "city": "宜蘭縣五結鄉",
    "views": "135 萬篇次閱覽",
    "tag": "工業廢墟文創",
    "desc": "由全台最大造紙廠改建！巨型廢墟鍋爐煙囪、廢棄木料倉庫化身陶藝、金工、染織工坊。"
  },
  {
    "rank": 10,
    "name": "新北淡水重建街 ｜ 踩著石階避開遊客喧囂的真正老淡水",
    "city": "新北市淡水區",
    "views": "130 萬篇次閱覽",
    "tag": "淡水第一街",
    "desc": "淡水真正最早的古街！穿梭石階老步道、香草街屋與淡水木下靜涯故居，俯瞰淡水河觀音山落日。"
  },
  {
    "rank": 11,
    "name": "基隆委託行街區 ｜ 窄巷中的美式舶來品記憶與隱密咖啡館",
    "city": "基隆市仁愛區",
    "views": "125 萬篇次閱覽",
    "tag": "港灣委託行",
    "desc": "基隆港繁華時代外國船員交易地，如今轉型為深夜精釀啤酒吧、手沖咖啡與老唱片行聚集地。"
  },
  {
    "rank": 12,
    "name": "花蓮溝仔尾老洋樓 ｜ 棋盤小巷中的文創聚落與慢城散步",
    "city": "花蓮縣花蓮市",
    "views": "120 萬篇次閱覽",
    "tag": "花蓮慢活",
    "desc": "曾經的繁華紅燈商圈，如今翻修為獨立書店、二手唱片、自烘咖啡廳，充滿舒緩海風步調。"
  },
  {
    "rank": 13,
    "name": "台東鐵花村音樂聚落 ｜ 彩繪熱氣球燈海下的原民清澈歌聲",
    "city": "台東縣台東市",
    "views": "116 萬篇次閱覽",
    "tag": "音樂與燈海",
    "desc": "鐵道倉庫綠草如茵，數百顆彩繪熱氣球燈籠點綴夜空，草地上席地而坐聽原民歌手吉他吟唱。"
  },
  {
    "rank": 14,
    "name": "台北寶藏巖國際藝術村 ｜ 依山而築的歷史聚落與駐村藝術",
    "city": "台北市中正區",
    "views": "112 萬篇次閱覽",
    "tag": "違章聚落美學",
    "desc": "新店溪畔層疊依山起伏的歷史建築聚落，走入迷宮般窄巷探訪駐村藝術家工作坊。"
  },
  {
    "rank": 15,
    "name": "台北四四南村 ｜ 台北最早眷村與現代信義摩天大樓交會",
    "city": "台北市信義區",
    "views": "109 萬篇次閱覽",
    "tag": "眷村與摩天樓",
    "desc": "綠色青草斜坡後就是高聳入雲的台北101，老眷村瓦頂與假日簡單市集交織強烈時空對比。"
  },
  {
    "rank": 16,
    "name": "台中綠光計畫范特喜 ｜ 12棟自來水自修宿舍的美感生活圈",
    "city": "台中市西區",
    "views": "105 萬篇次閱覽",
    "tag": "綠意老眷舍",
    "desc": "中興一巷老屋重生典範，二樓空中綠意步道串聯手作香氛、皮革工坊與植栽咖啡館。"
  },
  {
    "rank": 17,
    "name": "台南蝸牛巷 ｜ 跟隨作家葉石濤筆觸漫遊老台南慢城",
    "city": "台南市中西區",
    "views": "102 萬篇次閱覽",
    "tag": "文學散步路",
    "desc": "這是一個適合人們做夢、幹活、戀愛、結婚，悠然過日子的好地方。循著蝸牛彩繪漫步窄巷。"
  },
  {
    "rank": 18,
    "name": "彰化鹿港老街桂花巷 ｜ 傳統紅磚曲巷與日式藝術村木屋",
    "city": "彰化縣鹿港鎮",
    "views": "98 萬篇次閱覽",
    "tag": "古蹟曲巷",
    "desc": "九曲巷防風防盜、半邊井敦親睦鄰，走入桂花巷藝術村看鹿港國寶級傳統木雕與錫藝大師創作。"
  },
  {
    "rank": 19,
    "name": "屏東勝利星村創意生活園區 ｜ 全台最大將軍官舍群眷村重生",
    "city": "屏東縣屏東市",
    "views": "95 萬篇次閱覽",
    "tag": "將軍眷村",
    "desc": "日治陸軍飛行聯隊將領官舍，擁有寬闊綠意庭院，進駐旗袍體驗、獨立書店、在地特色美食。"
  },
  {
    "rank": 20,
    "name": "澎湖二崁聚落 ｜ 咾咕石砌築的閩南百年合院與傳香杏仁茶",
    "city": "澎湖縣西嶼鄉",
    "views": "92 萬篇次閱覽",
    "tag": "咾咕石古厝",
    "desc": "全台首處傳統聚落保存區，由玄武岩與珊瑚礁石砌成的古厝，必品嚐古法手磨香濃杏仁茶。"
  }
]
};

// 手搖飲與景點向下相容別名
const DRINKS_DATA = RANKINGS_DATA.drinks;
const SPOTS_TOP20_DATA = RANKINGS_DATA.spots;
const CHARTER_TOP10_DATA = RANKINGS_DATA.charter;
const EVENTS_TOP10_DATA = RANKINGS_DATA.events;
const RAINY_TOP10_DATA = RANKINGS_DATA.rainy;
const CAFE_TOP20_DATA = RANKINGS_DATA.cafe;
const WALK_TOP20_DATA = RANKINGS_DATA.walk;

// 4. 全部景點瀑布流資料集 (Masonry Waterfall, 涵蓋全台縣市)
const ALL_SPOTS_DATA = [
  {
    "id": 1,
    "name": "台北 101 高空觀景台",
    "city": "台北市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "2小時",
    "tag": "國際地標",
    "badge": "必去第一名",
    "desc": "37秒直達89樓！360度俯瞰大台北盆地繁榮都會美景，傍晚落日與百萬璀璨夜景令人屏息。",
    "activityId": "1659-taipei-101-observatory-ticket-taipei",
    "aspect": "tall"
  },
  {
    "id": 2,
    "name": "九份老街與阿妹茶樓",
    "city": "新北市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "4小時",
    "tag": "經典山城",
    "badge": "日韓旅客首選",
    "desc": "沿著崎嶇石階漫步，紅燈籠在暮色中逐一點亮，阿妹茶樓品茗眺望基隆山海，吃一碗現煮阿柑姨芋圓。",
    "activityId": "1874-jiufen-shifen-day-tour-taipei",
    "aspect": "wide"
  },
  {
    "id": 3,
    "name": "國立故宮博物院",
    "city": "台北市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "世界博物館",
    "badge": "世界四大名館",
    "desc": "典藏近七十萬件中華五千年歷代皇家宮廷瑰寶，翠玉白菜與肉形石神乎其技，外籍旅人訪台必訪殿堂。",
    "activityId": "1093-national-palace-museum-ticket-taipei",
    "aspect": "square"
  },
  {
    "id": 4,
    "name": "基隆正濱漁港彩虹屋",
    "city": "基隆市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&auto=format&fit=crop",
    "rate": "4.7★",
    "duration": "1.5小時",
    "tag": "彩色漁港",
    "badge": "台版威尼斯",
    "desc": "一整排漆上繽紛馬卡龍色彩的威尼斯風老漁港建築，倒映在波光粼粼的水面，旁邊炭烤吉古拉香氣撲鼻。",
    "activityId": "3290-keelung-tour",
    "aspect": "tall"
  },
  {
    "id": 5,
    "name": "桃園大溪老街巴洛克建築",
    "city": "桃園市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&auto=format&fit=crop",
    "rate": "4.7★",
    "duration": "2.5小時",
    "tag": "巴洛克古蹟",
    "badge": "大溪豆干",
    "desc": "和平老街上洗石子雕花立面融合希臘山牆與中國吉祥圖騰，大啖現滷熱騰騰黑豆干與手工花生糖。",
    "activityId": "3300-daxi-tour",
    "aspect": "wide"
  },
  {
    "id": 6,
    "name": "新竹司馬庫斯上帝部落",
    "city": "新竹縣",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "2天1夜",
    "tag": "深山泰雅",
    "badge": "巨木之鄉",
    "desc": "坐落深山雲霧之中的泰雅族淨土，參天千年紅檜巨木群讓人肅然起敬，夜晚星空璀璨無比。",
    "activityId": "3270-smangus-tour",
    "aspect": "tall"
  },
  {
    "id": 7,
    "name": "苗栗三義勝興車站與斷橋",
    "city": "苗栗縣",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "舊山線鐵道",
    "badge": "鐵道自行車",
    "desc": "西部縱貫鐵路最高點！全木造日式站房，騎乘舊山線鐵道自行車穿越七彩隧道，眺望百年紅磚斷橋。",
    "activityId": "3310-sanyi-railbike",
    "aspect": "square"
  },
  {
    "id": 8,
    "name": "臺中國家歌劇院",
    "city": "台中市",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "2小時",
    "tag": "建築奇蹟",
    "badge": "世界九大新地標",
    "desc": "普立茲克獎得主伊東豊雄震撼力作！無樑柱美聲涵洞曲牆設計，六樓空中花園遠眺七期豪宅繁華天際線。",
    "activityId": "3320-taichung-opera-tour",
    "aspect": "tall"
  },
  {
    "id": 9,
    "name": "台中高美濕地夕陽風車",
    "city": "台中市",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "2小時",
    "tag": "天空之鏡",
    "badge": "CNN推薦絕景",
    "desc": "漫步在長木棧道盡頭，赤腳踩進細軟冰涼的泥灘，看著巨大的發電風車與滿天晚霞倒映水面，美不勝收。",
    "activityId": "3200-gaomei-sunset-tour",
    "aspect": "wide"
  },
  {
    "id": 10,
    "name": "彰化鹿港老街九曲巷",
    "city": "彰化縣",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "百年老街",
    "badge": "鹿港名勝",
    "desc": "一府二鹿三艋舺！九曲巷內冬暖夏涼防強勁海風，半邊井體現敦親睦鄰溫情，天后宮香火萬代鼎盛。",
    "activityId": "3330-lukang-tour",
    "aspect": "square"
  },
  {
    "id": 11,
    "name": "南投日月潭環潭自行車道",
    "city": "南投縣",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "半天",
    "tag": "湖光山色",
    "badge": "全球十大最美車道",
    "desc": "迎著微風騎乘在水上高架自行車道，欣賞水社霸、向山遊客中心純白極簡清水模與碧綠潭水交融仙境。",
    "activityId": "1094-sun-moon-lake-pass-nantou",
    "aspect": "tall"
  },
  {
    "id": 12,
    "name": "南投清境農場青青草原",
    "city": "南投縣",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "高山草原",
    "badge": "台灣小瑞士",
    "desc": "海拔近兩千公尺的青翠高山牧場，成群白綿羊悠閒漫步低頭吃草，走上高空景觀步道遠眺合歡山壯麗雲海。",
    "activityId": "3190-cingjing-tour",
    "aspect": "wide"
  },
  {
    "id": 13,
    "name": "雲林古坑華山咖啡園區",
    "city": "雲林縣",
    "zone": "中部",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop",
    "rate": "4.7★",
    "duration": "2.5小時",
    "tag": "台灣咖啡原鄉",
    "badge": "夜景咖啡首選",
    "desc": "台灣本土咖啡重鎮！坐擁俯瞰嘉南平原的無敵視野，品嚐在地烘焙阿拉比卡咖啡與遠眺七縣市璀璨夜景。",
    "activityId": "3340-gukeng-coffee-tour",
    "aspect": "tall"
  },
  {
    "id": 14,
    "name": "嘉義阿里山森林鐵路與巨木群",
    "city": "嘉義縣",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "全天",
    "tag": "高山巨木",
    "badge": "百年鐵道國寶",
    "desc": "搭乘螺旋登山的紅色小火車穿梭雲霧，漫步在數千年紅檜巨木林蔭棧道中，深呼吸滿滿的天然檜木芬多精。",
    "activityId": "3150-alishan-day-tour",
    "aspect": "tall"
  },
  {
    "id": 15,
    "name": "台南奇美博物館與阿波羅噴泉",
    "city": "台南市",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "3小時",
    "tag": "西洋藝術",
    "badge": "純白巴洛克宮殿",
    "desc": "希臘神話大理石雕像、阿波羅戰車噴泉、世界級小提琴典藏與西洋古典油畫，美得宛如瞬間置身巴黎凡爾賽宮。",
    "activityId": "3170-chimei-museum-ticket",
    "aspect": "wide"
  },
  {
    "id": 16,
    "name": "台南安平古堡與老街樹屋",
    "city": "台南市",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "古都文化",
    "badge": "熱蘭遮城",
    "desc": "見證台灣四百年歷史風雲！百年老榕樹氣根盤根錯節包覆整座倉庫，走逛安平老街大啖蝦捲、蚵仔煎與豆花。",
    "activityId": "3240-anping-tour",
    "aspect": "square"
  },
  {
    "id": 17,
    "name": "高雄駁二藝術特區與大港橋",
    "city": "高雄市",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "港灣文創",
    "badge": "旋轉大港橋",
    "desc": "昔日港邊鹽糖老倉庫蛻變為大型當代藝術展演基地，午後三點全台首座水平旋轉大港橋開合秀更是熱門焦點。",
    "activityId": "3180-pier2-tour",
    "aspect": "tall"
  },
  {
    "id": 18,
    "name": "高雄旗津彩虹教堂與黑沙灘",
    "city": "高雄市",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.7★",
    "duration": "2.5小時",
    "tag": "海島風情",
    "badge": "IG拍照打卡",
    "desc": "搭乘渡輪吹海風只要5分鐘直達！色彩幾何造型水上彩虹教堂，看著大船入港，大口品嚐海產街現撈海鮮。",
    "activityId": "3350-cijin-tour",
    "aspect": "wide"
  },
  {
    "id": 19,
    "name": "屏東墾丁後壁湖浮潛與水上活動",
    "city": "屏東縣",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "3小時",
    "tag": "珊瑚礁海洋",
    "badge": "熱帶魚共游",
    "desc": "台灣海洋保育最完好的珊瑚礁群！穿著浮潛裝備在專業教練引領下，跳入湛藍海水中與成群小丑魚親密互動。",
    "activityId": "1090-kenting-day-tour-kaohsiung",
    "aspect": "square"
  },
  {
    "id": 20,
    "name": "屏東小琉球花瓶岩與海龜共游",
    "city": "屏東縣",
    "zone": "離島",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "全天",
    "tag": "海龜天堂",
    "badge": "99%機率海龜",
    "desc": "全台唯一的珊瑚礁島嶼！海水能見度極高，划著透明 SUP 或浮潛，隨時都能在身邊遇見可愛巨大的野生綠蠵龜。",
    "activityId": "2950-xiaoliuqiu-snorkeling-turtle",
    "aspect": "tall"
  },
  {
    "id": 21,
    "name": "宜蘭礁溪溫泉與湯圍溝公園",
    "city": "宜蘭縣",
    "zone": "東部",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "2.5小時",
    "tag": "美人名湯",
    "badge": "平原碳酸泉",
    "desc": "無色無味的碳酸氫鈉溫泉，泡完肌膚滑嫩細緻！湯圍溝公園內免費露天泡腳池，還有逗趣的溫泉魚咬腳皮體驗。",
    "activityId": "3360-jiaoxi-hotspring",
    "aspect": "wide"
  },
  {
    "id": 22,
    "name": "宜蘭頭城烏石港外澳衝浪",
    "city": "宜蘭縣",
    "zone": "東部",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "衝浪勝地",
    "badge": "龜山島海景",
    "desc": "北台灣最著名的衝浪樂園！綿延平緩的黑色沙灘，遠眺太平洋上浮游的神祕龜山島，新手也能輕鬆體驗乘風破浪。",
    "activityId": "3370-yilan-surfing",
    "aspect": "tall"
  },
  {
    "id": 23,
    "name": "花蓮太魯閣峽谷與燕子口步道",
    "city": "花蓮縣",
    "zone": "東部",
    "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "全天",
    "tag": "世界級峽谷",
    "badge": "國際地理名勝",
    "desc": "大自然歷經數百萬年雕琢的大理石天然地質博物館！抬頭仰望險峻直插雲霄的千米峭壁，立霧溪湍急白浪切鑿深谷。",
    "activityId": "1095-taroko-gorge-day-tour-hualien",
    "aspect": "tall"
  },
  {
    "id": 24,
    "name": "花蓮清水斷崖日出 SUP 立槳",
    "city": "花蓮縣",
    "zone": "東部",
    "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "3小時",
    "tag": "太平洋奇景",
    "badge": "海上看第一道光",
    "desc": "乘著立式划槳划出崇德海灣，在平靜的深藍太平洋洋面上，親眼見證金色旭日從海平面噴薄而出，照亮千米垂直絕壁。",
    "activityId": "3120-qingshui-cliff-kayak",
    "aspect": "wide"
  },
  {
    "id": 25,
    "name": "台東池上伯朗大道金黃稻浪",
    "city": "台東縣",
    "zone": "東部",
    "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "3小時",
    "tag": "天堂之路",
    "badge": "金城武樹",
    "desc": "兩旁完全沒有一根電線桿的純淨翠綠畫布！秋季化身無邊無際的金黃稻浪，租一台四輪電動單車吹著縱谷微風漫遊。",
    "activityId": "3140-chishang-biking-tour",
    "aspect": "square"
  },
  {
    "id": 26,
    "name": "台東鹿野高台熱氣球嘉年華",
    "city": "台東縣",
    "zone": "東部",
    "img": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "3小時",
    "tag": "高空視野",
    "badge": "國際熱氣球",
    "desc": "居高臨下俯瞰卑南溪棋盤式縱谷茶園農田美景！夏季清晨與傍晚百顆巨大熱氣球冉冉升空，體驗飛行傘凌空遨翔自由。",
    "activityId": "2890-taipingshan-day-tour-yilan",
    "aspect": "tall"
  },
  {
    "id": 27,
    "name": "澎湖七美雙心石滬與小台灣",
    "city": "澎湖縣",
    "zone": "離島",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "全天",
    "tag": "玄武岩石滬",
    "badge": "浪漫地標",
    "desc": "利用玄武岩與珊瑚礁在潮間帶堆砌而成的捕魚陷阱，退潮時浮現完美愛心造型，海水湛藍見底，是情侶海誓山盟聖地。",
    "activityId": "3250-qimei-island",
    "aspect": "wide"
  },
  {
    "id": 28,
    "name": "金門翟山坑道與得月樓洋樓",
    "city": "金門縣",
    "zone": "離島",
    "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "戰地歷史",
    "badge": "地下水上步道",
    "desc": "耗費五年純人工在堅硬花崗岩中開鑿出來的軍事水道！步入坑道內天然音響效果絕佳，水面倒映岩壁光影幽靜壯美。",
    "activityId": "3260-kinmen-tour",
    "aspect": "square"
  },
  {
    "id": 29,
    "name": "馬祖北海坑道搖櫓藍眼淚",
    "city": "連江縣",
    "zone": "離島",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "1.5小時",
    "tag": "世界奇景",
    "badge": "夜光星河",
    "desc": "搭乘傳統木製搖櫓船划進全黑的坑道水道中，船槳輕輕撥弄水面，夜光蟲瞬間激起夢幻般的螢光微藍，美得如同阿凡達星球。",
    "activityId": "3050-yushan-trekking-tour",
    "aspect": "tall"
  },
  {
    "id": 30,
    "name": "新北平溪十分瀑布與放天燈",
    "city": "新北市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "3小時",
    "tag": "天燈故鄉",
    "badge": "台灣尼加拉瀑布",
    "desc": "在鐵道中央提筆寫下新年心願，看著彩色天燈冉冉升入藍天！順道走訪落差二十公尺、水氣磅礡奔騰的十分瀑布。",
    "activityId": "1874-jiufen-shifen-day-tour-taipei",
    "aspect": "wide"
  }
];

// 5. 全台縣市精選特色咖啡店資料庫 (含營業中、地址、照片、特徵標籤)
const TAIWAN_CAFES_DATA = [
  {
    "id": "tpe_1",
    "name": "Simple Kaffa 興波咖啡旗艦店",
    "city": "台北市",
    "district": "中正區",
    "address": "台北市中正區忠孝東路二段27號",
    "status": "營業中 (10:00 - 17:00)",
    "features": "WBC世界咖啡大師冠軍吳則霖旗艦館，天井採光原木挑高空間，招牌手沖單品與抹茶捲、皺皺蛋糕。",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "採光超好",
      "適合聊天"
    ],
    "price": "NT$ 200 - 450",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_2",
    "name": "RUFOUS COFFEE ROASTERS",
    "city": "台北市",
    "district": "大安區",
    "address": "台北市大安區復興南路二段339號",
    "status": "營業中 (13:00 - 21:00)",
    "features": "入選亞洲50大最佳咖啡店！老派復古木質調溫暖氛圍，自家烘焙單品手沖與義式特調濃縮極致純厚。",
    "tags": [
      "手沖咖啡",
      "適合聊天",
      "植栽老宅"
    ],
    "price": "NT$ 180 - 300",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_3",
    "name": "Fika Fika Cafe",
    "city": "台北市",
    "district": "中山區",
    "address": "台北市中山區伊通街33號",
    "status": "營業中 (08:00 - 19:00)",
    "features": "北歐盃烘豆大賽雙料冠軍！北歐極簡純白大片玻璃窗，採光極佳，手沖咖啡果香明亮乾淨。",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "採光超好",
      "適合聊天"
    ],
    "price": "NT$ 160 - 280",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_4",
    "name": "CAFE!N 硬咖啡民權旗艦店",
    "city": "台北市",
    "district": "中山區",
    "address": "台北市中山區中山北路二段171號",
    "status": "營業中 (07:30 - 19:30)",
    "features": "純白兩層樓幾何美學地標！兩面挑高落地玻璃採光超好，插座充足，是筆電遠距辦公族的熱門聚點。",
    "tags": [
      "有插頭",
      "採光超好",
      "適合聊天"
    ],
    "price": "NT$ 80 - 200",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_5",
    "name": "Heritage Bakery & Cafe",
    "city": "台北市",
    "district": "中正區",
    "address": "台北市中正區漢口街一段73號之2",
    "status": "營業中 (10:00 - 19:00)",
    "features": "台北美式肉桂捲霸主！紅心芭樂戚風蛋糕令人驚艷，紅磚裸牆復古美式工業空間，採光舒心。",
    "tags": [
      "甜點好吃",
      "有插頭",
      "採光超好",
      "適合聊天"
    ],
    "price": "NT$ 180 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_6",
    "name": "昭和浪漫冰室 Cafe & Bar",
    "city": "台北市",
    "district": "大安區",
    "address": "台北市大安區文昌街47號",
    "status": "營業中 (12:00 - 22:00)",
    "features": "昭和日式復古骨董家具老宅，白天享受大人味大人布丁與冰滴，入夜後搖身一變為調酒酒吧。",
    "tags": [
      "店家可喝酒",
      "甜點好吃",
      "植栽老宅",
      "適合聊天"
    ],
    "price": "NT$ 200 - 450",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_7",
    "name": "幻猻家珈琲 Pallas Cafe",
    "city": "台北市",
    "district": "大同區",
    "address": "台北市大同區迪化街一段14巷14號",
    "status": "營業中 (11:00 - 18:00)",
    "features": "大稻埕巷弄靜謐幽光老宅，方型濃厚焦糖香草布丁遠近馳名，自家烘焙咖啡香氣沉著深邃。",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "price": "NT$ 180 - 300",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_8",
    "name": "光一肆號 (光一咖啡)",
    "city": "台北市",
    "district": "大安區",
    "address": "台北市大安區新生南路三段86號",
    "status": "營業中 (09:00 - 18:30)",
    "features": "台大公館商圈純白日式老木屋玻璃溫室，大面綠樹窗景採光超好，寵物友善空間歡迎帶毛孩一同品嚐輕食。",
    "tags": [
      "寵物友善",
      "採光超好",
      "植栽老宅",
      "適合聊天"
    ],
    "price": "NT$ 150 - 350",
    "rate": "4.7★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_9",
    "name": "MKCR 山小孩咖啡 (北門旗艦)",
    "city": "台北市",
    "district": "中正區",
    "address": "台北市中正區忠孝西路一段126號",
    "status": "營業中 (08:30 - 17:30)",
    "features": "正對國家一級古蹟北門！純白兩層樓無死角窗景，一邊喝冠軍烘焙耶加雪菲、一邊眺望百年古城門。",
    "tags": [
      "手沖咖啡",
      "採光超好",
      "適合聊天"
    ],
    "price": "NT$ 140 - 260",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_10",
    "name": "Coffee Sind 多肉咖啡",
    "city": "台北市",
    "district": "中正區",
    "address": "台北市中正區新生南路一段56巷8號",
    "status": "營業中 (12:00 - 20:00)",
    "features": "被上百盆多肉植栽圍繞的綠意溫室外帶吧，特色赤崁糖拿鐵香濃迷人，毛孩友善且店主熱情。",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "手沖咖啡"
    ],
    "price": "NT$ 120 - 220",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1469957767090-753257cc5287?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_11",
    "name": "木柵路易莎烘豆生活館",
    "city": "台北市",
    "district": "文山區",
    "address": "台北市文山區木柵路三段",
    "status": "營業中 (07:00 - 21:00)",
    "features": "挑高三層樓工業風烘豆旗艦館，全店每個座位幾乎皆配備獨立插座與超快 Wi-Fi，工作讀書聖地。",
    "tags": [
      "有插頭",
      "適合聊天",
      "採光超好"
    ],
    "price": "NT$ 75 - 180",
    "rate": "4.7★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "tpe_12",
    "name": "羊毛與花 ‧ 溫州",
    "city": "台北市",
    "district": "大安區",
    "address": "台北市大安區新生南路三段60巷1號",
    "status": "營業中 (12:00 - 23:00)",
    "features": "台大後門日式民謠風格深夜咖啡，營業至午夜23點，有插頭且寵物友善，提供美味重乳酪與鹹派。",
    "tags": [
      "有插頭",
      "寵物友善",
      "甜點好吃",
      "植栽老宅"
    ],
    "price": "NT$ 150 - 280",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "ntpc_1",
    "name": "散散步 咖啡。旅宿",
    "city": "新北市",
    "district": "瑞芳區",
    "address": "新北市瑞芳區祈堂路172號",
    "status": "營業中 (13:30 - 18:30)",
    "features": "祈堂老街隱世木屋老宅，手沖單品咖啡香伴著金瓜石山嵐雲霧，甜點檸檬塔酸香迷人，安靜治癒身心。",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "price": "NT$ 180 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "ntpc_2",
    "name": "山男咖啡 Yamano Cafe",
    "city": "新北市",
    "district": "新店區",
    "address": "新北市新店區屈尺路",
    "status": "營業中 (11:00 - 18:00)",
    "features": "隱身新店山林半山腰的清水模大採光咖啡館，戶外有綠茵大草坪可帶毛孩奔跑，看著山巒發呆好去處。",
    "tags": [
      "採光超好",
      "寵物友善",
      "小孩友善",
      "適合聊天"
    ],
    "price": "NT$ 160 - 300",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop"
  },
  {
    "id": "ntpc_3",
    "name": "靠北過日子 Q.B.Days",
    "city": "新北市",
    "district": "金山區",
    "address": "新北市金山區海興路174號",
    "status": "營業中 (11:00 - 18:30)",
    "features": "中角灣衝浪基地藍色老屋！三樓露台海景無遮蔽，提供特調黑糖手沖與煎餅，聽海浪放空首選。",
    "tags": [
      "海景景觀",
      "店家可喝酒",
      "適合聊天",
      "採光超好"
    ],
    "price": "NT$ 180 - 350",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop"
  },
  {
    "id": "ntpc_4",
    "name": "天使熱愛的生活・淡水河畔",
    "city": "新北市",
    "district": "淡水區",
    "address": "新北市淡水區中正路233-1號",
    "status": "營業中 (14:00 - 23:00)",
    "features": "淡水河第一排半露天木造老屋，坐二樓吹著淡水河晚風喝冰美式，入夜後提供各國精釀啤酒看觀音山落日。",
    "tags": [
      "海景景觀",
      "店家可喝酒",
      "植栽老宅"
    ],
    "price": "NT$ 130 - 250",
    "rate": "4.7★",
    "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop"
  },
  {
    "id": "kee_1",
    "name": "萬祝號 Wan Zhu Hao",
    "city": "基隆市",
    "district": "中正區",
    "address": "基隆市中正區中正路560號",
    "status": "營業中 (11:00 - 19:00)",
    "features": "五十年前造船零件老行號重生！裸露挑高木樑、金屬鐵件與復古磁磚，招牌胖死我巴斯克蛋糕好吃到流淚。",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "price": "NT$ 140 - 260",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "kee_2",
    "name": "圖們咖啡 tuman café",
    "city": "基隆市",
    "district": "中正區",
    "address": "基隆市中正區中正路551號",
    "status": "營業中 (11:00 - 18:00)",
    "features": "正濱漁港彩色屋第一排窗景！黑色沉穩系空間，看著彩色老漁船倒影喝特調黑咖啡，供應特色吉古拉咖哩飯。",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天"
    ],
    "price": "NT$ 150 - 300",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop"
  },
  {
    "id": "txg_1",
    "name": "Coffee Stopover",
    "city": "台中市",
    "district": "西區",
    "address": "台中市西區民權路217巷24號",
    "status": "營業中 (11:00 - 20:00)",
    "features": "台灣手沖咖啡教父級殿堂！五種專業萃取器具任選，多焙度新鮮烘豆，專業與溫暖兼備。",
    "tags": [
      "手沖咖啡",
      "適合聊天",
      "植栽老宅"
    ],
    "price": "NT$ 140 - 250",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "txg_2",
    "name": "目覚め咖啡 mezamashikohi 三店",
    "city": "台中市",
    "district": "西區",
    "address": "台中市西區精誠七街1號",
    "status": "營業中 (09:00 - 18:00)",
    "features": "日式綠意清水模庭院，晨光透入超大落地窗，大器木長桌有插座，適合專注工作或品味日式烘焙早午餐。",
    "tags": [
      "採光超好",
      "有插頭",
      "植栽老宅",
      "適合聊天"
    ],
    "price": "NT$ 180 - 360",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "txg_3",
    "name": "Hausinc Cafe 忠泰館",
    "city": "台中市",
    "district": "北區",
    "address": "台中市北區忠太西路39號",
    "status": "營業中 (09:00 - 18:00)",
    "features": "連續多年入選全台最棒咖啡館！兩層樓現代工業設計，插頭充裕、綠意窗景，特調微氣泡黑咖啡是一絕。",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "採光超好",
      "甜點好吃"
    ],
    "price": "NT$ 150 - 280",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "txg_4",
    "name": "模範貝果 Mofan Bagels & Cafe",
    "city": "台中市",
    "district": "西區",
    "address": "台中市西區模範街1巷1號",
    "status": "營業中 (11:00 - 18:00)",
    "features": "模範社區老眷舍改建，庭院綠意盎然，寵物超級友善，手工現烤十多種口味貝果香氣四溢。",
    "tags": [
      "寵物友善",
      "甜點好吃",
      "植栽老宅",
      "適合聊天"
    ],
    "price": "NT$ 120 - 240",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "tnn_1",
    "name": "StableNice BLDG. 原木老宅",
    "city": "台南市",
    "district": "中西區",
    "address": "台南市中西區南寧街83巷9號",
    "status": "營業中 (10:00 - 18:00)",
    "features": "原台南五十年老印刷廠！紅磚、木構與天井半露天迴廊，自家烘焙咖啡香氣濃醇，文創選物豐富。",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "適合聊天",
      "採光超好"
    ],
    "price": "NT$ 150 - 280",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "tnn_2",
    "name": "森/CASA 咖啡沙龍",
    "city": "台南市",
    "district": "南區",
    "address": "台南市南區金華路二段321號",
    "status": "營業中 (10:00 - 18:00)",
    "features": "引進丹麥國寶名椅與京都百年開化堂手作銅筒，極致安靜深邃的日本茶道與手沖咖啡沙龍。",
    "tags": [
      "手沖咖啡",
      "植栽老宅"
    ],
    "price": "NT$ 250 - 500",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "tnn_3",
    "name": "Bar Home x 欣欣咖啡",
    "city": "台南市",
    "district": "中西區",
    "address": "台南市中西區中山路23巷1號",
    "status": "營業中 (19:00 - 02:00)",
    "features": "隱身巷弄紅磚古宅，白天是靜謐咖啡館，夜晚搖身一變為亞洲50大傳奇調酒大師主理酒吧，可喝酒微醺。",
    "tags": [
      "店家可喝酒",
      "植栽老宅",
      "適合聊天"
    ],
    "price": "NT$ 250 - 550",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "khh_1",
    "name": "握咖啡 OH! Cafe (西子灣旗艦)",
    "city": "高雄市",
    "district": "鼓山區",
    "address": "高雄市鼓山區濱海二路5號",
    "status": "營業中 (10:00 - 18:00)",
    "features": "WCRC世界咖啡烘豆冠軍賴昱權創立！一邊喝特調冰滴、一邊吹著西子灣海風看渡輪往返，手沖豆目極多。",
    "tags": [
      "手沖咖啡",
      "海景景觀",
      "適合聊天"
    ],
    "price": "NT$ 140 - 280",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "khh_2",
    "name": "Kyoto 喫茶 鳩谷",
    "city": "高雄市",
    "district": "苓雅區",
    "address": "高雄市苓雅區青年二路",
    "status": "營業中 (13:00 - 19:00)",
    "features": "需預約的沉浸式京都町家喫茶！現點現刷宇治抹茶、手作水羊羹與焙茶拿鐵，如置身鴨川之畔。",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "price": "NT$ 220 - 400",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "ila_1",
    "name": "滿山望海 Cafe",
    "city": "宜蘭縣",
    "district": "頭城鎮",
    "address": "宜蘭縣頭城鎮大坑路197號",
    "status": "營業中 (10:00 - 17:30)",
    "features": "頭城海邊第一排峇里島南洋風純白木屋！二樓無窗框全開放海景正對龜山島，聽著浪濤喝手沖咖啡人生至高享受。",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天",
      "小孩友善"
    ],
    "price": "NT$ 200 - 450",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop"
  },
  {
    "id": "hun_1",
    "name": "海崖谷 Hayaku 景觀咖啡",
    "city": "花蓮縣",
    "district": "壽豐鄉",
    "address": "花蓮縣壽豐鄉鹽寮村大坑51-5號",
    "status": "營業中 (09:00 - 19:00)",
    "features": "太平洋海岸懸崖上的度假聖地！擁有露天戶外沙發區、月亮鞦韆與天空之門，視野無邊無際，寵物友善。",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善",
      "適合聊天"
    ],
    "price": "NT$ 200 - 400",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop"
  },
  {
    "id": "ttt_1",
    "name": "薄荷巴黎 Books Cafe",
    "city": "台東縣",
    "district": "台東市",
    "address": "台東市傳廣路234巷11號",
    "status": "營業中 (13:00 - 19:00)",
    "features": "純白法式鄉村綠意庭園！手作法式甜點、酥脆可頌與自家烘豆，採光柔和溫馨，是台東市區最高雅的午後去處。",
    "tags": [
      "甜點好吃",
      "採光超好",
      "植栽老宅",
      "手沖咖啡"
    ],
    "price": "NT$ 160 - 300",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  }
];

// 6. 米其林星級與必比登推介名單
const TAIPEI_MICHELIN_STARS_DATA = [
      // 一、 頂級三星與指標二星 (極致宴客與高端聚餐)
      {
        id: "star-1",
        rank: 1,
        name: "頤宮中餐廳 Le Palais",
        stars: "⭐⭐⭐ 米其林三星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "經典廣東菜",
        city: "台北市大同區",
        address: "台北市大同區承德路一段3號17樓 (君品酒店)",
        price: "NT$2,500 - 8,000",
        rate: "5.0★",
        feature: "蟬聯多年三星的頂級粵菜傳奇，招牌『火焰片皮鴨』皮脆肉嫩脂香四溢，搭配極致手工港點工藝，是海外貴賓與全球饕客訪台必訪殿堂。",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "star-2",
        rank: 2,
        name: "Taïrroir 態芮",
        stars: "⭐⭐⭐ 米其林三星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "時尚當代台灣料理",
        city: "台北市中山區",
        address: "台北市中山區樂群三路299號6樓",
        price: "NT$4,500 - 8,800",
        rate: "5.0★",
        feature: "以法式 Fine Dining 的繁複技巧與精準火候，重新演繹台灣本土風味與家常滋味（如芋泥油封鴨、經典家常湯品意象），展現台灣風土當代藝術之美。",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop"
      },
      {
        id: "star-3",
        rank: 3,
        name: "logy",
        stars: "⭐⭐ 米其林二星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "亞洲當代料理 / 創新法菜",
        city: "台北市大安區",
        address: "台北市大安區安和路一段109巷6號",
        price: "NT$3,800 - 5,500",
        rate: "4.9★",
        feature: "由日籍主廚田原諒悟掌杓，善於結合台灣在地食材、香草與亞洲飲食文化，茶湯與茶碗蒸招牌層次繁複迷人，創造極富層次的獨特風味套餐。",
        img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop"
      },
      {
        id: "star-4",
        rank: 4,
        name: "Molino de Urdániz 渥達尼斯磨坊",
        stars: "⭐⭐ 米其林二星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "當代西班牙料理",
        city: "台北市中山區",
        address: "台北市中山區建國北路一段61號 (慕舍酒店GF)",
        price: "NT$3,200 - 5,000",
        rate: "4.9★",
        feature: "西班牙米其林二星餐廳的海外唯一分店，坐落於慕舍酒店，以自然優雅的分子料理手法呈現西班牙庇里牛斯山谷與台灣海洋風土的和諧共鳴。",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },
      {
        id: "star-5",
        rank: 5,
        name: "L'Atelier de Joël Robuchon 侯布雄法式餐廳",
        stars: "⭐⭐ 米其林二星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "經典當代法國菜",
        city: "台北市信義區",
        address: "台北市信義區松仁路28號5樓 (BELLAVITA寶麗廣塲)",
        price: "NT$3,000 - 7,000",
        rate: "4.9★",
        feature: "世紀名廚侯布雄在台北的招牌黑紅吧台餐廳，經典法式馬鈴薯泥綿密若絲綢、精準熟度的肉類與時令海鮮料理極具世界級水準。",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },
      {
        id: "star-6",
        rank: 6,
        name: "牡丹天婦羅 Mudan",
        stars: "⭐⭐ 米其林二星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "精緻天婦羅割烹",
        city: "台北市大安區",
        address: "台北市大安區四維路52巷17號",
        price: "NT$6,500 - 9,000",
        rate: "4.9★",
        feature: "全台頂級天婦羅標竿！麵衣如薄紗般輕盈酥脆，特選頂級胡麻油與綿籽油，完美封存當令日本與台灣頂級海鮮時蔬的鮮甜汁水。",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop"
      },
      {
        id: "star-7",
        rank: 7,
        name: "RAW",
        stars: "⭐⭐ 米其林二星",
        category: "three_two",
        categoryName: "頂級三星與二星",
        cuisine: "創新料理 / 台灣風土",
        city: "台北市中山區",
        address: "台北市中山區樂群三路301號",
        price: "NT$4,500 - 6,800",
        rate: "4.9★",
        feature: "國際名廚江振誠領軍的先鋒之作，融合台灣飲食歷史脈絡與前衛藝術美學，每季菜單皆具備強大敘事性，引領當代料理思潮。",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop"
      },

      // 二、 在地台味與中式精緻菜 (適合帶外國朋友或長輩聚餐)
      {
        id: "star-8",
        rank: 8,
        name: "山海樓",
        stars: "⭐ 米其林一星 ＆ 綠星",
        category: "taiwan_chinese",
        categoryName: "在地精緻台菜",
        cuisine: "傳統精緻台菜",
        city: "台北市中正區",
        address: "台北市中正區仁愛路二段94號",
        price: "NT$2,000 - 4,500",
        rate: "4.9★",
        feature: "致力於復刻台灣日治時期酒家菜與經典老台菜（如金銀燒豬、山海豪華拼盤），兼顧有機永續小農理念，榮獲米其林綠星肯定。",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "star-9",
        rank: 9,
        name: "米香 MIPON",
        stars: "⭐ 米其林一星",
        category: "taiwan_chinese",
        categoryName: "在地精緻台菜",
        cuisine: "經典台灣料理",
        city: "台北市中山區",
        address: "台北市中山區樂群二路55號3樓 (台北美福大飯店)",
        price: "NT$1,500 - 3,500",
        rate: "4.8★",
        feature: "位於台北美福大飯店，將台灣道地家常菜、酒家宴席料理提煉出五星級飯店的細緻風味與典雅擺盤。",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop"
      },
      {
        id: "star-10",
        rank: 10,
        name: "欣葉 鐘菜",
        stars: "⭐ 米其林一星",
        category: "taiwan_chinese",
        categoryName: "在地精緻台菜",
        cuisine: "經典台灣手路菜",
        city: "台北市中山區",
        address: "台北市中山區樂群二路199號 (台北萬豪酒店中城廣場1樓)",
        price: "NT$1,200 - 3,000",
        rate: "4.8★",
        feature: "欣葉集團高端代表，集結品牌40餘年精華，提供五葉松炒牛肉、紫蘇蚵嗲、季節鯧魚米粉等隱藏版私房大菜。",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },
      {
        id: "star-11",
        rank: 11,
        name: "川雅 CHUAN YA",
        stars: "⭐ 米其林一星",
        category: "taiwan_chinese",
        categoryName: "在地精緻台菜",
        cuisine: "現代川菜 / 官府菜",
        city: "台北市信義區",
        address: "台北市信義區松智路17號46樓 (微風南山)",
        price: "NT$3,000 - 6,000",
        rate: "4.9★",
        feature: "坐落於台北微風南山46高樓層，將川菜的二十四種複合味型以官府菜的典雅精緻呈現（如經典開水白菜），香麻鮮美層次分明。",
        img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop"
      },
      {
        id: "star-12",
        rank: 12,
        name: "請客樓 The Guest House",
        stars: "⭐ 米其林一星",
        category: "taiwan_chinese",
        categoryName: "在地精緻台菜",
        cuisine: "淮揚菜 / 川湘菜",
        city: "台北市中正區",
        address: "台北市中正區忠孝東路一段12號17樓 (台北喜來登大飯店)",
        price: "NT$1,800 - 4,000",
        rate: "4.8★",
        feature: "台北喜來登大飯店老字號名店，以細膩工整的刀工小菜與淮揚、川湘功夫菜見長（如百頁豆腐絲、砂鍋一品雞、剁椒魚頭）。",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },

      // 三、 當代歐陸與當代料理 (文青與約會首選)
      {
        id: "star-13",
        rank: 13,
        name: "Impromptu by Paul Lee",
        stars: "⭐ 米其林一星",
        category: "contemporary",
        categoryName: "當代歐陸無國界",
        cuisine: "當代無國界創新料理",
        city: "台北市中山區",
        address: "台北市中山區中山北路二段39巷3號B1 (台北晶華酒店)",
        price: "NT$3,600 - 5,000",
        rate: "4.8★",
        feature: "設有全開放式吧台，主廚融合美式休閒隨性與法式料理手法，搭餐調酒（Cocktail Pairing）表現極為出色亮眼。",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop"
      },
      {
        id: "star-14",
        rank: 14,
        name: "MUME",
        stars: "⭐ 米其林一星 ＆ 綠星",
        category: "contemporary",
        categoryName: "當代歐陸無國界",
        cuisine: "當代北歐式台灣風土料理",
        city: "台北市大安區",
        address: "台北市大安區四維路28號",
        price: "NT$3,200 - 4,800",
        rate: "4.8★",
        feature: "專注挖掘台灣微型小農與原生食材，運用北歐當代烹飪技法（發酵、醃漬、直火），風格清新前衛並擁抱永續承諾。",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop"
      },
      {
        id: "star-15",
        rank: 15,
        name: "Hosu 好嶼",
        stars: "⭐ 米其林一星 ＆ 綠星",
        category: "contemporary",
        categoryName: "當代歐陸無國界",
        cuisine: "當代台灣風土料理",
        city: "台北市大安區",
        address: "台北市大安區興安街180-2號",
        price: "NT$2,800 - 4,200",
        rate: "4.8★",
        feature: "以台灣山海物產與五大族群飲食記憶為靈感，料理宛如一場島嶼生態漫遊，兼具人文深度與生態友善精神。",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop"
      },
      {
        id: "star-16",
        rank: 16,
        name: "ZEA",
        stars: "⭐ 米其林一星",
        category: "contemporary",
        categoryName: "當代歐陸無國界",
        cuisine: "當代拉丁美洲料理",
        city: "台北市大安區",
        address: "台北市大安區仁愛路四段300巷20弄5號",
        price: "NT$3,500 - 5,200",
        rate: "4.8★",
        feature: "主廚來自阿根廷，將拉丁美洲鮮明奔放的香料與玉米、辣椒等元素與法式精緻手法結合，風格辨識度極高且活力四射。",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },
      {
        id: "star-17",
        rank: 17,
        name: "T+T",
        stars: "⭐ 米其林一星",
        category: "contemporary",
        categoryName: "當代歐陸無國界",
        cuisine: "當代歐法料理 / 亞洲融合",
        city: "台北市松山區",
        address: "台北市松山區敦化北路165巷11號",
        price: "NT$2,600 - 3,800",
        rate: "4.8★",
        feature: "以小巧親切的精緻小館形式呈現，招牌『松露車輪餅』將台灣在地街頭點心與西式奢華食材玩味結合，深受年輕饕客喜愛。",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },

      // 四、 頂級日料、壽司與燒鳥
      {
        id: "star-18",
        rank: 18,
        name: "鮨天本 Sushi Amamoto",
        stars: "⭐ 米其林一星",
        category: "japanese",
        categoryName: "頂級割烹日料",
        cuisine: "江戶前壽司",
        city: "台北市大安區",
        address: "台北市大安區仁愛路四段371號",
        price: "NT$5,000 - 8,000",
        rate: "4.9★",
        feature: "台北極難訂位的傳奇板前江戶前壽司之一，醋飯酸度與魚生熟成掌握精準，招牌壓壽司與烤魚功力驚豔四座。",
        img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop"
      },
      {
        id: "star-19",
        rank: 19,
        name: "野村壽司 Sushi Nomura",
        stars: "⭐ 米其林一星",
        category: "japanese",
        categoryName: "頂級割烹日料",
        cuisine: "經典江戶前壽司",
        city: "台北市大安區",
        address: "台北市大安區仁愛路四段300巷19弄4號",
        price: "NT$4,000 - 7,000",
        rate: "4.8★",
        feature: "野村主廚長年堅持正統江戶前手藝，對水質、米飯溫度與野生漁獲來源極致講究，氣氛沉靜專注。",
        img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop"
      },
      {
        id: "star-20",
        rank: 20,
        name: "斑泊 Ban Bo",
        stars: "⭐ 米其林一星",
        category: "contemporary",
        categoryName: "當代創新料理",
        cuisine: "當代台灣意象創新料理",
        city: "台北市中山區",
        address: "台北市中山區樂群二路265巷38號",
        price: "NT$3,800 - 5,500",
        rate: "4.8★",
        feature: "將台灣近幾十年的日常生活物件、鐵花窗、庶民記憶轉化為盤中藝術，空間靜謐富含當代建築美感。",
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop"
      }
    ];

const BIB_GOURMAND_DATA = [
      // 🏙️ 台北 7 家
      {
        id: "bib-1",
        rank: 1,
        name: "台北 ｜ 阜杭豆漿 (Fu Hang Soy Milk)",
        city: "台北市中正區",
        address: "台北市中正區忠孝東路一段108號2樓 (華山市場)",
        region: "taipei",
        badge: "⭐ 必比登推介",
        dishes: "厚餅夾蛋油條、焦香鹹豆漿、焦糖甜餅",
        desc: "台北超人氣早餐代表！清晨排隊人潮綿延數百米，招牌厚燒餅在缸爐中炭烤出誘人焦香，搭配現炸油條與熱豆漿堪稱絕配。",
        price: "NT$50 - 120",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-2",
        rank: 2,
        name: "台北 ｜ 鼎泰豐 (Din Tai Fung 信義本店)",
        city: "台北市大安區",
        address: "台北市大安區信義路二段194號",
        region: "taipei",
        badge: "⭐ 世界級米其林",
        dishes: "黃金18摺小籠包、排骨蛋炒飯、紅油燃麵",
        desc: "享譽國際的台灣美食名片！薄透麵皮內鎖住鮮甜湯汁，精準18摺工藝入口爆漿，搭配顆粒分明的排骨炒飯令人吮指回味。",
        price: "NT$250 - 600",
        rate: "4.9★",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-3",
        rank: 3,
        name: "台北 ｜ 雙月食品社 (Shuang Yue 青島店)",
        city: "台北市中正區",
        address: "台北市中正區青島東路6-2號",
        region: "taipei",
        badge: "⭐ 必比登推介",
        dishes: "蛤蜊燉雞腿湯、愛恨椒芝麵、吹風滷味",
        desc: "連續多年榮獲必比登推介！嚴選台灣溫體仿土雞腿肉與高山高麗菜，滿滿一大碗蛤蜊鮮甜入味，溫補養生首選。",
        price: "NT$150 - 300",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-4",
        rank: 4,
        name: "台北 ｜ 賣麵炎仔 金泉小吃店",
        city: "台北市大同區",
        address: "台北市大同區安西街106號 (大稻埕)",
        region: "taipei",
        badge: "⭐ 必比登推介",
        dishes: "切仔麵、招牌炸紅燒肉、燙花枝、生腸",
        desc: "大稻埕80年老字號！一碗只要幾十元的切仔麵湯頭醇厚，金黃酥脆的現炸三層紅燒肉肥瘦勻稱，每早座無虛席。",
        price: "NT$60 - 150",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-5",
        rank: 5,
        name: "台北 ｜ 施家鮮肉湯圓",
        city: "台北市大同區",
        address: "台北市大同區延平北路三段58號 (延三夜市)",
        region: "taipei",
        badge: "⭐ 必比登推介",
        dishes: "招牌鮮肉湯圓、香菇肉飯、油豆腐",
        desc: "延三夜市老牌傳奇！軟糯外皮包裹飽滿鮮肉內餡，咬下瞬間肉汁四溢，配上茼蒿與濃郁大骨高湯暖心滿足。",
        price: "NT$60 - 120",
        rate: "4.7★",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-6",
        rank: 6,
        name: "台北 ｜ 欣葉小聚 (Shin Yeh)",
        city: "台北市南港區",
        address: "台北市南港區經貿二路166號中國信託園區A棟1樓",
        region: "taipei",
        badge: "⭐ 必比登推介",
        dishes: "三杯Q彈中卷、青菜炒牛肉、菜脯蛋",
        desc: "欣葉台菜年輕化當代品牌！將經典古早味台菜結合創新現代手法，經典三杯料理鑊氣十足，聚餐首選。",
        price: "NT$350 - 650",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-7",
        rank: 7,
        name: "台北 ｜ 祥記純糖麻糬",
        city: "台北市大同區",
        address: "台北市大同區延平北路三段12號 (延三/大橋頭)",
        region: "taipei",
        badge: "⭐ 必比登推介",
        dishes: "現煮純糖燒麻糬、燒麻糬冰、紅豆湯花生湯",
        desc: "滾燙熱糖水中翻滾的手工白胖麻糬，撈起後裹上滿滿芝麻粉與花生粉，軟糯彈牙香氣撲鼻，甜點控必訪！",
        price: "NT$50 - 80",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },

      // 🌲 台中 4 家
      {
        id: "bib-8",
        rank: 8,
        name: "台中 ｜ 沁園春 (Chin Yuan Chun)",
        city: "台中市中區",
        address: "台中市中區台灣大道一段129號",
        region: "taichung",
        badge: "⭐ 必比登推介",
        dishes: "手工小籠包、無錫肉骨頭、蔥油拌麵",
        desc: "台中一甲子傳奇江浙館！蔣緯國等政要名流常客，手工現桿小籠包湯汁清甜，酥爛入味的無錫排骨入口即化。",
        price: "NT$200 - 450",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-9",
        rank: 9,
        name: "台中 ｜ 滬舍餘味 (Hu She Yu Wei)",
        city: "台中市南屯區",
        address: "台中市南屯區公益路二段537號",
        region: "taichung",
        badge: "⭐ 必比登推介",
        dishes: "爆汁生煎包、翡翠生煎包、小籠湯包、油豆腐細粉",
        desc: "上海中醫世家返台手藝！生煎包底層煎至金黃酥脆，內餡飽滿肉汁滾燙噴濺，被譽為台中生煎包天花板。",
        price: "NT$100 - 200",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-10",
        rank: 10,
        name: "台中 ｜ 范記金之園草袋飯",
        city: "台中市中區",
        address: "台中市中區成功路170號",
        region: "taichung",
        badge: "⭐ 必比登推介",
        dishes: "酥炸排骨草袋飯、香酥雞腿飯、酸菜高湯",
        desc: "40年草袋蒸飯技術保留米飯原香，招牌排骨不裹厚粉外酥內嫩，搭配特製雪裡紅炒辣椒，簡約中見真功夫。",
        price: "NT$140 - 180",
        rate: "4.7★",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-11",
        rank: 11,
        name: "台中 ｜ 羅家古早味",
        city: "台中市南屯區",
        address: "台中市南屯區向上南路一段181號",
        region: "taichung",
        badge: "⭐ 必比登推介",
        dishes: "麻油綜合湯、麻油豬心麵線、福菜滷肉飯",
        desc: "天然北港純麻油文火慢煸老薑，豬心、腰子鮮脆無羶味，湯頭甘醇溫潤，天冷補氣最療癒的古早味。",
        price: "NT$90 - 180",
        rate: "4.7★",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },

      // ☀️ 台南 5 家
      {
        id: "bib-12",
        rank: 12,
        name: "台南 ｜ 阿明豬心冬粉",
        city: "台南市中西區",
        address: "台南市中西區保安路72號",
        region: "tainan",
        badge: "⭐ 必比登推介",
        dishes: "豬心冬粉、麻油腰只、乾拌骨髓、鴨腳翅",
        desc: "台南保安路夜市排隊神店！老闆現切現燙精準掌握火候，豬心鮮脆彈牙毫無腥味，湯頭醇美清甜回甘。",
        price: "NT$60 - 150",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-13",
        rank: 13,
        name: "台南 ｜ 矮仔成蝦仁飯",
        city: "台南市中西區",
        address: "台南市中西區海安路一段66號",
        region: "tainan",
        badge: "⭐ 必比登推介",
        dishes: "火燒蝦蝦仁飯、蒜炒洋蔥、半熟煎鴨蛋",
        desc: "創立於1922年的百年老店！新鮮火燒蝦以大火快炒鎖住海味，柴魚高湯炊煮米飯粒粒吸飽醬汁，蓋上煎鴨蛋是經典吃法。",
        price: "NT$70 - 120",
        rate: "4.7★",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-14",
        rank: 14,
        name: "台南 ｜ 康樂街牛肉湯",
        city: "台南市中西區",
        address: "台南市中西區康樂街325號",
        region: "tainan",
        badge: "⭐ 必比登推介",
        dishes: "現燙本土溫體牛肉湯、肉燥飯、生炒芥蘭牛肉",
        desc: "堅持以牛骨、洋蔥、蘋果法式熬製天然蔬果高湯，每日清晨直送善化溫體牛淋湯即熟，粉嫩鮮甜無與倫比。",
        price: "NT$110 - 200",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-15",
        rank: 15,
        name: "台南 ｜ 葉家小卷米粉",
        city: "台南市中西區",
        address: "台南市中西區國華街三段142號",
        region: "tainan",
        badge: "⭐ 必比登推介",
        dishes: "小卷米粉、小卷湯、小卷蛋",
        desc: "國華街代表美食！選用厚切鮮凍印尼小卷川燙，湯頭僅以小卷原汁與芹菜調味，粗米粉吸飽天然海味甘甜。",
        price: "NT$110 - 130",
        rate: "4.7★",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-16",
        rank: 16,
        name: "台南 ｜ 開元路無名虱目魚肉燥飯",
        city: "台南市北區",
        address: "台南市北區開元路318號",
        region: "tainan",
        badge: "⭐ 必比登推介",
        dishes: "無刺虱目魚肚湯、手工魚皮湯、肥美肉燥飯",
        desc: "台南在地老饕私藏早午餐！每日新鮮現殺虱目魚肚肥厚細緻，裹上薄漿的手工魚皮爽滑脆彈，配一碗膠質肉燥飯超滿足。",
        price: "NT$60 - 150",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop"
      },

      // ⚓ 高雄 4 家
      {
        id: "bib-17",
        rank: 17,
        name: "高雄 ｜ 橋仔頭黃家肉燥飯",
        city: "高雄市橋頭區",
        address: "高雄市橋頭區橋南路106號",
        region: "kaohsiung",
        badge: "⭐ 必比登推介",
        dishes: "手工黑豬切丁肉燥飯、肉羹湯、滷貢丸油豆腐",
        desc: "傳承70年的台灣肉燥飯爭霸冠軍！純手工將溫體豬後腿肉切丁慢火細熬，脂香濃郁入口即化，鹹甜比例完美。",
        price: "NT$40 - 80",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-18",
        rank: 18,
        name: "高雄 ｜ 鴨肉珍 (Duck Zhen)",
        city: "高雄市鹽埕區",
        address: "高雄市鹽埕區五福四路258號",
        region: "kaohsiung",
        badge: "⭐ 必比登推介",
        dishes: "招牌切盤煙燻鴨肉、鴨肉飯、下水湯",
        desc: "鹽埕區65年傳奇老店！煙燻鴨肉汁多肉嫩帶著淡雅甘蔗香，淋上老滷汁的肉燥鴨肉雙拼飯是每桌必點招牌。",
        price: "NT$60 - 150",
        rate: "4.8★",
        img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-19",
        rank: 19,
        name: "高雄 ｜ 湖東牛肉館",
        city: "高雄市湖內區",
        address: "高雄市湖內區中山路一段107號",
        region: "kaohsiung",
        badge: "⭐ 必比登推介",
        dishes: "現切頂級溫體牛肉鍋、牛腩湯、肉燥飯",
        desc: "全台最難訂的頂級溫體牛肉鍋之一！每日直送油花如大理石般細密的現宰溫體牛，輕涮三秒粉紅嫩甜，饕客爭相包車朝聖。",
        price: "NT$350 - 650",
        rate: "4.9★",
        img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&auto=format&fit=crop"
      },
      {
        id: "bib-20",
        rank: 20,
        name: "高雄 ｜ 鄭家切仔麵",
        city: "高雄市鹽埕區",
        address: "高雄市鹽埕區新樂街201巷5號",
        region: "kaohsiung",
        badge: "⭐ 必比登推介",
        dishes: "古早味雞湯切仔麵、手作豬肉切料、生腸",
        desc: "隱身鹽埕窄巷的三代老麵攤！堅持以純雞骨熬煮金黃清亮湯底，搭配脆嫩手作黑白切與特調辣豆瓣醬，純粹懷舊味。",
        price: "NT$60 - 130",
        rate: "4.7★",
        img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop"
      }
    ];

// 7. 週末探店專欄部落格文章 (一排一個文章顯示，含景點詳細資訊盒)
const BLOG_ARTICLES_DATA = [
  {
    "id": "blog-1",
    "title": "台北赤峰街週末漫步散策：躲進老洋房天井裡的冠軍手沖與焦糖布丁",
    "subtitle": "穿梭在打鐵與螺絲聲的記憶裡，尋找屬於當代台北人的靜謐咖啡微光",
    "date": "2026 年 10 月 18 日",
    "author": "HiMyDream 編輯部 · 艾薇",
    "readTime": "6 分鐘閱讀",
    "category": "老宅咖啡散策",
    "heroImg": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop",
    "content": "週末的午後，當陽光斜斜穿透捷運雙連站與中山站之間的窄弄，空氣裡還隱約夾雜著五金機械的鐵鏽氣息，赤峰街早已悄悄換上了文藝的外衣。這裡曾是台北最著名的「打鐵街」，如今卻成為獨立書店、古董雜貨、以及職人咖啡館最美麗的棲息地。\n\n推開木門，撲鼻而來的是深焙咖啡豆與剛出爐肉桂捲的醇甜香氣。老屋的天井保留了半世紀前的磨石子地與綠色植栽，抬頭便能望見一小方藍天。點一杯產自衣索比亞耶加雪菲的日曬手沖，明亮的水蜜桃果酸在舌尖化開，搭配一份苦甜焦糖烤布丁，那種柔嫩滑順的蛋香與焦糖的深邃大人味，瞬間洗去了週間所有緊繃與疲憊。在赤峰街，時間彷彿會慢下腳步，讓旅人學會好好品嚐每一口時光的甘甜。",
    "spotInfo": {
      "name": "赤峰老宅精選 · 浮光書店與天井咖啡沙龍",
      "address": "台北市大同區赤峰街47巷16號2樓",
      "hours": "週一至週日 12:00 - 20:30 (無公休)",
      "signature": "精品手沖耶加雪菲、大人味焦糖濃厚布丁、手作肉桂捲",
      "transport": "捷運雙連站 1 號出口步行約 3 分鐘，或中山站 4 號出口步行 5 分鐘",
      "mapQuery": "台北市大同區赤峰街47巷",
      "bookingUrl": "https://www.google.com/maps/search/?api=1&query=台北市大同區赤峰街47巷"
    }
  },
  {
    "id": "blog-2",
    "title": "金瓜石山城隱世行：在『散散步』品一杯山嵐浸潤的手沖咖啡與海風派",
    "subtitle": "離開九份喧囂老街，沿著祈堂老街石階拾級而上，遇見被群山溫柔環抱的老時光",
    "date": "2026 年 10 月 12 日",
    "author": "HiMyDream 編輯部 · Ken",
    "readTime": "8 分鐘閱讀",
    "category": "山城秘境探店",
    "heroImg": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=1000&auto=format&fit=crop",
    "content": "多數人造訪東北角，總是在九份老街的人潮裡匆匆打卡；然而，只要順著金水公路再往深處走一點，來到祈堂老街，世界頓時安靜了下來。沒有紅燈籠的簇擁與叫賣聲，只有山嵐如絲絹般在無耳茶壺山間飄移。\n\n「散散步」就靜靜佇立在彩虹石階旁。這是一棟由屋主親手花費數年整修的日式木造礦工宿舍。推開木格拉門，老黑膠唱片流淌著舒緩的大提琴樂音。店內只有少少幾張老皮沙發與窗邊吧台，窗外就是金瓜石綿延起伏的青翠山巒。主理人緩緩注水，熱水穿透新鮮研磨的肯亞AA咖啡粉，爆發出濃烈的黑醋栗與莓果香。搭配一塊現烤溫熱的檸檬酸甜磅蛋糕，窗外的山霧時而散開、時而湧起，這才是台灣東北角最動人心魄的靈魂所在。",
    "spotInfo": {
      "name": "散散步 咖啡 ‧ 旅宿 (Coffee & Hostel)",
      "address": "新北市瑞芳區金瓜石祈堂路172號",
      "hours": "每週五至週一 13:30 - 18:30 (週二至週四公休)",
      "signature": "自家烘焙單品肯亞AA手沖、招牌檸檬酸塔、手作焦糖蘋果派",
      "transport": "搭乘基隆客運 1062 或 788 於「金瓜石站 (黃金博物館)」下車，沿祈堂老街步行 6 分鐘",
      "mapQuery": "新北市瑞芳區祈堂路172號",
      "bookingUrl": "https://www.google.com/maps/search/?api=1&query=新北市瑞芳區祈堂路172號"
    }
  },
  {
    "id": "blog-3",
    "title": "台南中西區五十年老印刷廠新生：走進 StableNice BLDG. 原木老宅美學",
    "subtitle": "原木、紅磚與半露天天井，老府城用最年輕的設計語言詮釋咖啡生活",
    "date": "2026 年 10 月 05 日",
    "author": "HiMyDream 編輯部 · 小悠",
    "readTime": "7 分鐘閱讀",
    "category": "府城老屋新生",
    "heroImg": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1000&auto=format&fit=crop",
    "content": "台南的巷弄永遠充滿驚喜。隱身在南寧街巷內的 StableNice BLDG.，前身是陪伴這座城市半個世紀的原木老印刷廠。第三代主理人接手後，沒有抹去歷史的歲月紋理，反而將老印刷鉛字機、斑駁紅磚立面與溫潤厚實的台灣原木結合，打造出一座垂直共生的複合式藝文咖啡空間。\n\n一樓的咖啡吧台選用義大利頂級咖啡機，手沖單品豆單更涵蓋了全台知名客座烘豆師的精選作品。走上二樓，露天天井讓陽光自由傾瀉而下，照亮滿牆的在地獨立刊物與設計選品。喝一口特調的「府城煙燻桂圓冰美式」，桂圓的微甜果乾香氣與濃縮咖啡的苦韻交融，在口腔中迸發出熟悉又新潮的味蕾記憶。在這裡，你喝的不只是一杯咖啡，更是台南老靈魂與現代生活的美好對話。",
    "spotInfo": {
      "name": "StableNice BLDG. 原木老宅咖啡",
      "address": "台南市中西區南寧街83巷9號",
      "hours": "週一至週日 10:00 - 18:00 (週二公休)",
      "signature": "煙燻桂圓冰美式、經典原木配方手沖、半熟起司蛋糕",
      "transport": "台南火車站轉乘公車至「新光三越新天地站」下車，步行約 4 分鐘即抵達",
      "mapQuery": "台南市中西區南寧街83巷9號",
      "bookingUrl": "https://www.google.com/maps/search/?api=1&query=台南市中西區南寧街83巷9號"
    }
  },
  {
    "id": "blog-4",
    "title": "恆春半島紅柴坑懸崖看落日：山男咖啡的 180 度蔚藍海景與白日夢",
    "subtitle": "陽光、海風、大草坪與毛孩共游，在國境之南享受零壓力的慵懶午後",
    "date": "2026 年 09 月 28 日",
    "author": "HiMyDream 編輯部 · 浩子",
    "readTime": "5 分鐘閱讀",
    "category": "南國海景咖啡",
    "heroImg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop",
    "content": "告別墾丁大街的喧囂，順著蜿蜒的西海岸公路爬上紅柴坑後方的小山坡，映入眼簾的是一片純淨的白——白色的清水模建築、純白的遮陽傘，以及前方毫無遮蔽、一路延伸至天際線的深藍色台灣海峽。\n\n「山男咖啡」擁有全恆春半島最迷人的夕陽視角。戶外一大片平整翠綠的草皮上，隨時可以看見旅人帶著自家狗狗奔跑嬉戲，或者乾脆赤腳坐在木棧台上吹海風。點一杯清爽透涼的冰西西里檸檬咖啡，新鮮檸檬汁的酸香搭配細緻綿密的咖啡泡沫，一口下肚瞬間驅散了熱帶半島的燠熱。當傍晚五點半金黃色的落日緩緩沒入海面，整片天空被染成粉紫與金橘交織的晚霞，所有人都靜靜地放下了手機，沉醉在國境之南這份無可取代的浪漫片刻。",
    "spotInfo": {
      "name": "山男咖啡 Yamano Cafe (紅柴坑夕陽景觀)",
      "address": "屏東縣恆春鎮紅柴路2-9號",
      "hours": "週一至週日 11:00 - 18:30 (夕陽時段建議提早入座)",
      "signature": "西西里冰檸檬美式、恆春港口茶拿鐵、手作海鹽生乳酪",
      "transport": "建議自駕或包車前往，由恆春鎮出發約 15 分鐘車程，備有大型免費停車場",
      "mapQuery": "屏東縣恆春鎮紅柴路2-9號",
      "bookingUrl": "https://www.google.com/maps/search/?api=1&query=屏東縣恆春鎮紅柴路2-9號"
    }
  }
];

// 8. 萬家福線上特產伴手禮與營區直配資料 (OneLink E-Commerce)
const WANJIAFU_PRODUCTS = [
  {
    id: "wjf_1",
    name: "台灣經典金牌土鳳梨酥禮盒 (12入)",
    tag: "伴手禮冠軍 · 國際熱銷",
    price: "NT$ 480",
    desc: "嚴選台灣八卦山台農2號土鳳梨，酸甜黃金比例，微熱酥脆外皮濃郁奶香，免提行李直送指定飯店大廳。",
    badge: "HOT SOUVENIR",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop"
  },
  {
    id: "wjf_2",
    name: "日月潭頂級紅玉紅茶 (台茶18號) 精裝茶葉罐",
    tag: "台灣國寶茶 · 淡淡肉桂薄荷香",
    price: "NT$ 650",
    desc: "手採一心二葉頂級紅玉紅茶，茶湯豔紅清澈，入口散發天然薄荷與肉桂香氣，外國旅人指名必買第一名。",
    badge: "TEA MASTER",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop"
  },
  {
    id: "wjf_3",
    name: "台中一甲子太陽餅老字號 (蜂巢純蜜 8入)",
    tag: "多層次酥皮 · 純天然麥芽蜜餡",
    price: "NT$ 360",
    desc: "傳承六十年純手工揉捏百層酥皮，內餡裹著純天然純蜂蜜與濃香麥芽，入口即化唇齒留香。",
    badge: "TRADITIONAL",
    img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=500&auto=format&fit=crop"
  },
  {
    id: "wjf_4",
    name: "露營生鮮免備料！頂級日本A5和牛海陸燒烤箱 (4人份)",
    tag: "營區冷藏直配 · 拆封即烤",
    price: "NT$ 2,880",
    desc: "專為懶人露營打造！日本A5和牛燒烤片、澎湖野生大草蝦、宜蘭櫻桃鴨胸與嚴選蔬菜烤肉串，直送指定營位。",
    badge: "CAMPING FOOD",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop"
  },
  {
    id: "wjf_5",
    name: "牛軋糖原味杏仁果手工軟心糖禮盒",
    tag: "純手工慢火熬糖 · 香濃不黏牙",
    price: "NT$ 320",
    desc: "選用紐西蘭進口天然奶油與低溫慢烤香脆杏仁果，奶香馥郁、軟硬適中絕對不黏牙，節慶送禮首選。",
    badge: "SWEET GIFT",
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&auto=format&fit=crop"
  },
  {
    id: "wjf_6",
    name: "澎湖野生干貝海鮮純手工XO醬 (雙瓶裝)",
    tag: "澎湖直送 · 海味十足拌麵神醬",
    price: "NT$ 720",
    desc: "滿滿野生小卷與干貝絲，佐以蒜酥與朝天椒慢火炒製，炒菜、拌飯拌麵一匙入魂，台灣在地鮮美靈魂滋味。",
    badge: "SEAFOOD SPECIAL",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop"
  }
];
