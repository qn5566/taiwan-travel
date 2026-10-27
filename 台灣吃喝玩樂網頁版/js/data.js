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
    "name": "野柳＆九份老街＆十分天燈一日遊",
    "enName": "Yehliu, Jiufen & Shifen Day Tour",
    "city": "新北市瑞芳區",
    "cityEn": "New Taipei City",
    "rate": "4.9★",
    "reviews": "158,200+ Reviews",
    "price": "NT$ 699",
    "origPrice": "NT$ 980",
    "tag": "Klook 全網熱銷 No.1 · 經典必訪",
    "desc": "外籍旅客指名度冠軍！專車漫步野柳女王頭、九份紅燈籠山城阿妹茶樓、放飛十分祈福天燈。",
    "img": "assets/shifen_lantern_tour.png",
    "activityId": "1301-jiufen-shifen-yehhliu-day-tour-taipei",
    "badge": "TOP 1 BESTSELLER"
  },
  {
    "rank": 2,
    "name": "花蓮太魯閣峽谷＆清水斷崖一日遊",
    "enName": "Taroko Gorge & Qingshui Cliff Tour",
    "city": "花蓮縣秀林鄉",
    "cityEn": "Hualien County",
    "rate": "4.9★",
    "reviews": "82,400+ Reviews",
    "price": "NT$ 1,180",
    "origPrice": "NT$ 1,500",
    "tag": "世界級大理石大峽谷 · 太平洋絕壁",
    "desc": "造訪震撼壯麗的燕子口、九曲洞、長春祠與垂直聳立於太平洋之上的清水斷崖壯觀景致。",
    "img": "assets/taroko_gorge_tour.jpg",
    "activityId": "765-taroko-gorge-day-tour-hualien",
    "badge": "TOP 2 WONDER"
  },
  {
    "rank": 3,
    "name": "日月潭＆清境高空步道＆高美濕地一日遊",
    "enName": "Sun Moon Lake, Cingjing & Gaomei Tour",
    "city": "台中 / 南投",
    "cityEn": "Taichung & Nantou",
    "rate": "4.8★",
    "reviews": "64,500+ Reviews",
    "price": "NT$ 1,350",
    "origPrice": "NT$ 1,800",
    "tag": "高山草原 · 湖光山色 · 百萬夕陽",
    "desc": "一次網羅中部三大名勝！乘搭日月潭遊艇、漫步清境綿羊群，傍晚於高美濕地欣賞夢幻風車夕陽。",
    "img": "assets/sun_moon_lake_tour.png",
    "activityId": "13214-sun-moon-lake-cingjing-taichung",
    "badge": "TOP 3 HIGHLIGHT"
  },
  {
    "rank": 4,
    "name": "阿里山森林鐵路小火車＆巨木群一日遊",
    "enName": "Alishan Forest Railway & Giant Trees Tour",
    "city": "嘉義縣阿里山鄉",
    "cityEn": "Chiayi County",
    "rate": "4.9★",
    "reviews": "51,300+ Reviews",
    "price": "NT$ 1,480",
    "origPrice": "NT$ 1,980",
    "tag": "世界遺產登山鐵道 · 千年紅檜神木",
    "desc": "穿梭雲海仙境！搭乘百年歷史小火車、森呼吸兩千多年巨木群棧道與姊妹潭自然秘境。",
    "img": "assets/alishan_train_tour.jpg",
    "activityId": "1684-alishan-day-tour-chiayi",
    "badge": "TOP 4 HERITAGE"
  },
  {
    "rank": 5,
    "name": "台南歷史古都＆四草綠色隧道包車一日遊",
    "enName": "Tainan Heritage & Sicao Green Tunnel Tour",
    "city": "台南市安南區",
    "cityEn": "Tainan City",
    "rate": "4.8★",
    "reviews": "43,700+ Reviews",
    "price": "NT$ 1,250",
    "origPrice": "NT$ 1,600",
    "tag": "台灣袖珍亞馬遜 · 府城美食散策",
    "desc": "乘膠筏穿梭絕美紅樹林綠色隧道，探訪安平古堡、赤崁樓與國華街排隊牛肉湯美食之旅。",
    "img": "assets/tainan_sicao_tour.jpg",
    "activityId": "12423-tainan-day-tour-kaohsiung",
    "badge": "TOP 5 CULTURE"
  },
  {
    "rank": 6,
    "name": "墾丁國家公園＆鵝鑾鼻最南點包車一日遊",
    "enName": "Kenting National Park Coastal Tour",
    "city": "屏東縣恆春鎮",
    "cityEn": "Pingtung County",
    "rate": "4.8★",
    "reviews": "38,900+ Reviews",
    "price": "NT$ 1,100",
    "origPrice": "NT$ 1,400",
    "tag": "熱帶國境之南 · 珊瑚礁海岸奇景",
    "desc": "高雄直達國境之南！遊歷船帆石、砂島貝殼砂、鵝鑾鼻純白燈塔與龍磐公園浩瀚太平洋大草原。",
    "img": "assets/kenting_coastal_tour.jpg",
    "activityId": "2112-kenting-day-tour-kaohsiung",
    "badge": "TOP 6 COASTAL"
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
      "logo": "🥭",
      "img": "https://images.unsplash.com/photo-1558857563-b37cf5a452ef?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "芝芝芒果果粒",
      "desc": "人氣首選：芝芝芒果果粒。推薦甜度冰塊：微糖微冰。"
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
      "logo": "🍵",
      "img": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "焙烏龍鮮奶茶",
      "desc": "人氣首選：焙烏龍鮮奶茶。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🍮",
      "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "杏仁凍五桐茶",
      "desc": "人氣首選：杏仁凍五桐茶。推薦甜度冰塊：半糖微冰。"
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
      "logo": "🥛",
      "img": "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "珍珠紅茶拿鐵",
      "desc": "人氣首選：珍珠紅茶拿鐵。推薦甜度冰塊：微糖微冰。"
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
      "logo": "🍡",
      "img": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "逮丸奶茶 (草仔粿)",
      "desc": "人氣首選：逮丸奶茶 (草仔粿)。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🍋",
      "img": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "優多綠茶 (多多綠)",
      "desc": "人氣首選：優多綠茶 (多多綠)。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🫖",
      "img": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "熟成紅茶",
      "desc": "人氣首選：熟成紅茶。推薦甜度冰塊：一分糖微冰。"
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
      "logo": "🍊",
      "img": "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "紅柚翡翠",
      "desc": "人氣首選：紅柚翡翠。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🧋",
      "img": "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "黑糖珍珠鮮奶",
      "desc": "人氣首選：黑糖珍珠鮮奶。推薦甜度冰塊：微糖微冰。"
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
      "logo": "🍃",
      "img": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "觀音拿鐵",
      "desc": "人氣首選：觀音拿鐵。推薦甜度冰塊：微糖微冰。"
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
      "logo": "👑",
      "img": "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "雨果那堤",
      "desc": "人氣首選：雨果那堤。推薦甜度冰塊：半糖少冰。"
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
      "logo": "🏛️",
      "img": "https://images.unsplash.com/photo-1558857563-b37cf5a452ef?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "原創珍珠奶茶",
      "desc": "人氣首選：原創珍珠奶茶。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🦥",
      "img": "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "棉被午茉綠",
      "desc": "人氣首選：棉被午茉綠。推薦甜度冰塊：微糖微冰。"
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
      "logo": "🏝️",
      "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "紅豆粉粿鮮奶",
      "desc": "人氣首選：紅豆粉粿鮮奶。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🌱",
      "img": "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "913茶王",
      "desc": "人氣首選：913茶王。推薦甜度冰塊：無糖微冰。"
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
      "logo": "🍓",
      "img": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "愛文芒果冰沙",
      "desc": "人氣首選：愛文芒果冰沙。推薦甜度冰塊：微糖少冰。"
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
      "logo": "🌾",
      "img": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "八曜和茶",
      "desc": "人氣首選：八曜和茶。推薦甜度冰塊：無糖少冰。"
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
      "logo": "🏔️",
      "img": "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "名間冬片仔",
      "desc": "人氣首選：名間冬片仔。推薦甜度冰塊：無糖微冰。"
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
      "logo": "🍸",
      "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "原味茶歐蕾",
      "desc": "人氣首選：原味茶歐蕾。推薦甜度冰塊：微糖微冰。"
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
      "logo": "🌊",
      "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&auto=format&fit=crop",
      "city": "全台各門市",
      "signature": "海神現萃茶",
      "desc": "人氣首選：海神現萃茶。推薦甜度冰塊：微糖微冰。"
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
      "city": "台北 / 新北出發",
      "img": "assets/shifen_lantern_tour.png",
      "rate": "4.9★"
    },
    {
      "rank": 2,
      "name": "花蓮太魯閣國家公園 · 清水斷崖峽谷包車專車",
      "trips": "年預約 3.6 萬趟",
      "desc": "專屬在地老司機隨行導覽燕子口、九曲洞、白楊步道水濂洞與蔚藍清水斷崖。",
      "price": "NT$ 3,200 起",
      "city": "花蓮出發",
      "img": "assets/taroko_gorge_tour.jpg",
      "rate": "4.9★"
    },
    {
      "rank": 3,
      "name": "阿里山森林日出 · 奮起湖老街雲海專案包車",
      "trips": "年預約 2.8 萬趟",
      "desc": "免去凌晨排小火車站票奔波，專車直達祝山觀日出、神木群步道與奮起湖便當。",
      "price": "NT$ 3,800 起",
      "city": "嘉義出發",
      "img": "assets/alishan_train_tour.jpg",
      "rate": "4.9★"
    },
    {
      "rank": 4,
      "name": "南投日月潭湖景 · 清境農場高空步道連線包車",
      "trips": "年預約 3.1 萬趟",
      "desc": "一日暢遊中台灣兩大國際景點！水社碼頭騎單車＋清境青青草原看綿羊秀。",
      "price": "NT$ 3,500 起",
      "city": "台中出發",
      "img": "assets/sun_moon_lake_tour.png",
      "rate": "4.9★"
    },
    {
      "rank": 5,
      "name": "屏東墾丁國家公園 · 恆春半島海景包車一日遊",
      "trips": "年預約 2.5 萬趟",
      "desc": "船帆石、鵝鑾鼻燈塔、龍磐公園崩崖與白沙灣，南國陽光海風全覽行程。",
      "price": "NT$ 2,900 起",
      "city": "高雄 / 恆春出發",
      "img": "assets/kenting_coastal_tour.jpg",
      "rate": "4.9★"
    },
    {
      "rank": 6,
      "name": "宜蘭礁溪溫泉 · 抹茶山聖母山莊步道包車",
      "trips": "年預約 1.9 萬趟",
      "desc": "登頂翠綠抹茶山俯瞰蘭陽平原，下山專車送達礁溪享受天然美人湯舒壓。",
      "price": "NT$ 2,600 起",
      "city": "台北 / 宜蘭出發",
      "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 7,
      "name": "台南安平古堡 · 國華街美食赤崁樓文化包車",
      "trips": "年預約 2.2 萬趟",
      "desc": "專車輕鬆穿梭台南古都巷弄，大啖牛肉湯、鱔魚意麵，省去高溫步行之苦。",
      "price": "NT$ 2,500 起",
      "city": "台南出發",
      "img": "assets/tainan_sicao_tour.jpg",
      "rate": "4.9★"
    },
    {
      "rank": 8,
      "name": "高雄旗津彩虹教堂 · 駁二藝術特區 · 佛光山專車",
      "trips": "年預約 1.7 萬趟",
      "desc": "港都海陸雙重享受！探訪佛光山大佛莊嚴盛景，傍晚至西子灣看浪漫夕陽。",
      "price": "NT$ 2,800 起",
      "city": "高雄出發",
      "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 9,
      "name": "台東池上伯朗大道 · 三仙台跨海大橋專案包車",
      "trips": "年預約 1.5 萬趟",
      "desc": "馳騁縱谷黃金稻浪金城武樹，橫跨海岸山脈欣賞太平洋八拱跨海大橋。",
      "price": "NT$ 3,300 起",
      "city": "台東出發",
      "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 10,
      "name": "台北北投名湯 · 陽明山擎天崗小油坑地熱包車",
      "trips": "年預約 2.0 萬趟",
      "desc": "台北後花園舒心一日散策！看小油坑地熱火山冒煙，漫步擎天崗水牛草原。",
      "price": "NT$ 2,400 起",
      "city": "台北出發",
      "img": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    }
  ],
  events: [
    {
      "rank": 1,
      "name": "大港開唱 Megaport Festival",
      "loc": "高雄駁二藝術特區",
      "date": "每年 3 月底盛大登場",
      "tag": "台灣最大港邊獨立音樂祭",
      "desc": "十座舞台橫跨高雄港兩岸，結合大港橋旋轉、搖滾樂團與知名藝人跨界開唱。",
      "img": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "高雄駁二藝術特區",
      "price": "每年 3 月底盛大登場"
    },
    {
      "rank": 2,
      "name": "台灣國際熱氣球嘉年華",
      "loc": "台東鹿野高台",
      "date": "每年 7 - 8 月盛夏",
      "tag": "百萬遊客高空視覺盛宴",
      "desc": "造型各異的巨大熱氣球在鹿野大草原升空，搭配夜間光雕音樂會與無人機大秀震撼全場。",
      "img": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "台東鹿野高台",
      "price": "每年 7 - 8 月盛夏"
    },
    {
      "rank": 3,
      "name": "新北歡樂耶誕城",
      "loc": "新北市民廣場與板橋車站",
      "date": "每年 11 月至翌年 1 月",
      "tag": "亞洲十大耶誕慶典",
      "desc": "全台最大 3D 光雕投影秀、璀璨天橋星空光廊與德國傳統耶誕市集，冬季浪漫首選。",
      "img": "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "新北市民廣場與板橋車站",
      "price": "每年 11 月至翌年 1 月"
    },
    {
      "rank": 4,
      "name": "台中大甲媽祖遶境進香",
      "loc": "台中大甲鎮瀾宮至新港奉天宮",
      "date": "每年農曆三月 (9天8夜)",
      "tag": "世界三大宗教盛事 (UNESCO)",
      "desc": "跨越四縣市跋涉 340 餘公里，數百萬虔誠信眾徒步隨香，體驗最震撼台灣在地人情味。",
      "img": "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "台中大甲鎮瀾宮至新港奉天宮",
      "price": "每年農曆三月 (9天8夜)"
    },
    {
      "rank": 5,
      "name": "貢寮國際海洋音樂祭",
      "loc": "新北貢寮福隆海水浴場",
      "date": "每年盛夏 7 - 8 月",
      "tag": "原創獨立音樂搖籃",
      "desc": "金黃沙灘上的原創音樂狂歡，台灣無數天團崛起的殿堂級海灘音樂節。",
      "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "新北貢寮福隆海水浴場",
      "price": "每年盛夏 7 - 8 月"
    },
    {
      "rank": 6,
      "name": "台北國際電玩展 (TpGS)",
      "loc": "台北南港展覽館",
      "date": "每年 1 月下旬",
      "tag": "亞太遊戲產業風向球",
      "desc": "全球一線頂尖遊戲大廠最新未上市大作試玩、電競總決賽與獨立遊戲專區。",
      "img": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "台北南港展覽館",
      "price": "每年 1 月下旬"
    },
    {
      "rank": 7,
      "name": "台南鹽水蜂炮元宵狂歡",
      "loc": "台南鹽水武廟",
      "date": "每年元宵節 (正月十四至十五)",
      "tag": "全球十大最狂熱慶典",
      "desc": "數百萬發蜂炮齊發衝擊，全副武裝戴全罩式安全帽親歷震撼洗禮，驅邪祈福迎財神。",
      "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "台南鹽水武廟",
      "price": "每年元宵節 (正月十四至十五)"
    },
    {
      "rank": 8,
      "name": "嘉義市國際管樂節",
      "loc": "嘉義市體育場與噴水池圓環",
      "date": "每年 12 月中旬",
      "tag": "管樂之都街頭踩街狂歡",
      "desc": "超過 50 支國內外頂尖管樂行進樂隊走上嘉義街頭踩街吹奏，全城沸騰樂音飛揚。",
      "img": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "嘉義市體育場與噴水池圓環",
      "price": "每年 12 月中旬"
    },
    {
      "rank": 9,
      "name": "台灣文博會 Creative Expo",
      "loc": "全台巡迴 (台北/台南/高雄)",
      "date": "每年下半年",
      "tag": "全亞洲最大文創 IP 展",
      "desc": "集結台灣原創插畫、文創設計、手作工藝、獨立設計師與在地文化策展。",
      "img": "https://images.unsplash.com/photo-1508997449629-303059a039c0?w=600&auto=format&fit=crop",
      "rate": "4.9★",
      "city": "全台巡迴 (台北/台南/高雄)",
      "price": "每年下半年"
    },
    {
      "rank": 10,
      "name": "平溪國際天燈節",
      "loc": "新北市平溪與十分廣場",
      "date": "每年元宵節前後",
      "tag": "世界第二大夜間節慶 (CNN)",
      "desc": "數千盞寫滿心願的天燈在黑夜中同時冉冉升空，繁星點點宛如銀河落入凡間。",
      "img": "assets/shifen_lantern_tour.png",
      "rate": "4.9★",
      "city": "新北市平溪與十分廣場",
      "price": "每年元宵節前後"
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
      "name": "AKA café (大稻埕古宅秘境)",
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
      "desc": "昔日汽車零件黑手一條街，如今聚集古著、獨立書店、昭和喫茶與手作飾品，穿梭巷弄驚喜連連。",
      "img": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 2,
      "name": "大稻埕迪化街 ｜ 穿梭百年紅磚巴洛克洋樓與南北貨香",
      "city": "台北市大同區",
      "views": "195 萬篇次閱覽",
      "tag": "老洋樓散策",
      "desc": "中藥香、茶香與布匹織紋交織的老台北繁華港埠，走訪傳統老餅舖、郭雪湖畫中老街與文創天井天井。",
      "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 3,
      "name": "台南神農街 ｜ 百年木構街屋下的紅燈籠與深夜微光",
      "city": "台南市中西區",
      "views": "188 萬篇次閱覽",
      "tag": "府城夜景",
      "desc": "五條港全盛期最繁榮古街，木造老屋掛起手繪紅燈籠，漫步其間彷彿走入清代府城古色時光。",
      "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 4,
      "name": "台中審計新村 ｜ 舊省府眷舍重生的週末青年文創市集",
      "city": "台中市西區",
      "views": "176 萬篇次閱覽",
      "tag": "青年市集",
      "desc": "兩層樓鵝黃色眷村宿舍群，假日聚集全台最熱門手作甜點、黑膠唱片、復古相機與文創攤位。",
      "img": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 5,
      "name": "高雄鹽埕堀江商場 ｜ 走訪港都老鹽埕舶來品與日式木屋巷",
      "city": "高雄市鹽埕區",
      "views": "162 萬篇次閱覽",
      "tag": "舶來老街町",
      "desc": "美軍協防時代的高雄最潮商圈，隱藏老派西服店、阿婆冰、冬粉王與文青翻修復古居酒屋。",
      "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 6,
      "name": "台北青田街 ｜ 漫步昭和日式黑瓦宿舍群與綠蔭大道",
      "city": "台北市大安區",
      "views": "155 萬篇次閱覽",
      "tag": "昭和學人街",
      "desc": "台北最幽靜的文教綠洲，老樟樹遮蔭的老日式宿舍、一號糧倉、青田七六老洋館，茶香怡人。",
      "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 7,
      "name": "嘉義檜意森活村 ｜ 漫步全台最大日式官舍檜木建築群",
      "city": "嘉義市東區",
      "views": "148 萬篇次閱覽",
      "tag": "檜木之都",
      "desc": "昔日阿里山林業開發官方宿舍群，保留完整29棟木造日式黑瓦房，滿園散發天然檜木幽香。",
      "img": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 8,
      "name": "新竹湖口老街 ｜ 百年紅磚巴洛克拱圈騎樓與客家米食",
      "city": "新竹縣湖口鄉",
      "views": "140 萬篇次閱覽",
      "tag": "紅磚老巴洛克",
      "desc": "全長三百公尺的極致對稱紅磚立面，品嚐客家牛汶水、客家擂茶與百年天主堂古蹟。",
      "img": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 9,
      "name": "宜蘭中興文創園區 ｜ 巨大煙囪與舊中興紙廠頹廢工業美學",
      "city": "宜蘭縣五結鄉",
      "views": "135 萬篇次閱覽",
      "tag": "工業廢墟文創",
      "desc": "由全台最大造紙廠改建！巨型廢墟鍋爐煙囪、廢棄木料倉庫化身陶藝、金工、染織工坊。",
      "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 10,
      "name": "新北淡水重建街 ｜ 踩著石階避開遊客喧囂的真正老淡水",
      "city": "新北市淡水區",
      "views": "130 萬篇次閱覽",
      "tag": "淡水第一街",
      "desc": "淡水真正最早的古街！穿梭石階老步道、香草街屋與淡水木下靜涯故居，俯瞰淡水河觀音山落日。",
      "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 11,
      "name": "基隆委託行街區 ｜ 窄巷中的美式舶來品記憶與隱密咖啡館",
      "city": "基隆市仁愛區",
      "views": "125 萬篇次閱覽",
      "tag": "港灣委託行",
      "desc": "基隆港繁華時代外國船員交易地，如今轉型為深夜精釀啤酒吧、手沖咖啡與老唱片行聚集地。",
      "img": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 12,
      "name": "花蓮溝仔尾老洋樓 ｜ 棋盤小巷中的文創聚落與慢城散步",
      "city": "花蓮縣花蓮市",
      "views": "120 萬篇次閱覽",
      "tag": "花蓮慢活",
      "desc": "曾經的繁華紅燈商圈，如今翻修為獨立書店、二手唱片、自烘咖啡廳，充滿舒緩海風步調。",
      "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 13,
      "name": "台東鐵花村音樂聚落 ｜ 彩繪熱氣球燈海下的原民清澈歌聲",
      "city": "台東縣台東市",
      "views": "116 萬篇次閱覽",
      "tag": "音樂與燈海",
      "desc": "鐵道倉庫綠草如茵，數百顆彩繪熱氣球燈籠點綴夜空，草地上席地而坐聽原民歌手吉他吟唱。",
      "img": "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 14,
      "name": "台北寶藏巖國際藝術村 ｜ 依山而築的歷史聚落與駐村藝術",
      "city": "台北市中正區",
      "views": "112 萬篇次閱覽",
      "tag": "違章聚落美學",
      "desc": "新店溪畔層疊依山起伏的歷史建築聚落，走入迷宮般窄巷探訪駐村藝術家工作坊。",
      "img": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 15,
      "name": "台北四四南村 ｜ 台北最早眷村與現代信義摩天大樓交會",
      "city": "台北市信義區",
      "views": "109 萬篇次閱覽",
      "tag": "眷村與摩天樓",
      "desc": "綠色青草斜坡後就是高聳入雲的台北101，老眷村瓦頂與假日簡單市集交織強烈時空對比。",
      "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 16,
      "name": "台中綠光計畫范特喜 ｜ 12棟自來水自修宿舍的美感生活圈",
      "city": "台中市西區",
      "views": "105 萬篇次閱覽",
      "tag": "綠意老眷舍",
      "desc": "中興一巷老屋重生典範，二樓空中綠意步道串聯手作香氛、皮革工坊與植栽咖啡館。",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 17,
      "name": "台南蝸牛巷 ｜ 跟隨作家葉石濤筆觸漫遊老台南慢城",
      "city": "台南市中西區",
      "views": "102 萬篇次閱覽",
      "tag": "文學散步路",
      "desc": "這是一個適合人們做夢、幹活、戀愛、結婚，悠然過日子的好地方。循著蝸牛彩繪漫步窄巷。",
      "img": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 18,
      "name": "彰化鹿港老街桂花巷 ｜ 傳統紅磚曲巷與日式藝術村木屋",
      "city": "彰化縣鹿港鎮",
      "views": "98 萬篇次閱覽",
      "tag": "古蹟曲巷",
      "desc": "九曲巷防風防盜、半邊井敦親睦鄰，走入桂花巷藝術村看鹿港國寶級傳統木雕與錫藝大師創作。",
      "img": "https://images.unsplash.com/photo-1558857563-b37cf5a452ef?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 19,
      "name": "屏東勝利星村創意生活園區 ｜ 全台最大將軍官舍群眷村重生",
      "city": "屏東縣屏東市",
      "views": "95 萬篇次閱覽",
      "tag": "將軍眷村",
      "desc": "日治陸軍飛行聯隊將領官舍，擁有寬闊綠意庭院，進駐旗袍體驗、獨立書店、在地特色美食。",
      "img": "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    },
    {
      "rank": 20,
      "name": "澎湖二崁聚落 ｜ 咾咕石砌築的閩南百年合院與傳香杏仁茶",
      "city": "澎湖縣西嶼鄉",
      "views": "92 萬篇次閱覽",
      "tag": "咾咕石古厝",
      "desc": "全台首處傳統聚落保存區，由玄武岩與珊瑚礁石砌成的古厝，必品嚐古法手磨香濃杏仁茶。",
      "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",
      "rate": "4.9★"
    }
  ],
  family: [
    {
      "rank": 1,
      "name": "台北市立動物園 (木柵動物園)",
      "city": "台北市文山區",
      "rate": "4.9★",
      "tag": "亞洲最大動物園 · 親子首選",
      "desc": "亞洲規模最大動物園！穿梭大貓熊館、企鵝館、非洲動物區與熱帶雨林區，搭乘園區小火車樂趣無窮。",
      "ticket": "全票 NT$ 100",
      "price": "全票 NT$ 100",
      "img": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop"
    },
    {
      "rank": 2,
      "name": "國立海洋生物博物館 (屏東海生館)",
      "city": "屏東縣車城鄉",
      "rate": "4.9★",
      "tag": "世界級巨型水族館 · 夜宿海生館",
      "desc": "漫步84公尺海底隧道、欣賞白鯨曼妙泳姿與巨大海藻森林，夜宿企鵝館更是小朋友一生必體驗的夢幻奇遇。",
      "ticket": "全票 NT$ 450",
      "price": "全票 NT$ 450",
      "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 3,
      "name": "國立自然科學博物館 (台中科博館)",
      "city": "台中市北區",
      "rate": "4.9★",
      "tag": "動態暴龍恐龍館 · 立體太空劇場",
      "desc": "超人氣會動會吼叫的巨型暴龍、澎湃立體太空劇場、熱帶雨林溫室，寓教於樂的最佳科學探索天地。",
      "ticket": "展示場 NT$ 100",
      "price": "門票 NT$ 100",
      "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop"
    },
    {
      "rank": 4,
      "name": "台北市兒童新樂園",
      "city": "台北市士林區",
      "rate": "4.8★",
      "tag": "都會童話遊樂園 · 摩天輪旋轉木馬",
      "desc": "海底總動員摩天輪、波力摩天輪、銀河號單軌列車、碰碰車與海盜船，捷運直達超平價歡樂天堂。",
      "ticket": "門票 NT$ 30",
      "price": "入園 NT$ 30",
      "img": "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=600&auto=format&fit=crop"
    },
    {
      "rank": 5,
      "name": "六福村主題遊樂園",
      "city": "新竹縣關西鎮",
      "rate": "4.8★",
      "tag": "野生動物王國 · 刺激極限設施",
      "desc": "搭乘蒸汽火車近距離觀賞犀牛與長頸鹿，挑戰笑傲飛鷹、大怒神與火山歷險，水陸雙拼嗨翻夏天。",
      "ticket": "全票 NT$ 1,199",
      "price": "全票 NT$ 1,199",
      "img": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 6,
      "name": "花蓮遠雄海洋公園",
      "city": "花蓮縣壽豐鄉",
      "rate": "4.9★",
      "tag": "無敵太平洋海景 · 海豚海獅嘉年華",
      "desc": "座落東海岸無敵海景山丘！觀賞聰明海豚飛躍、海獅搞笑秀、水晶城堡奇幻大秀與高空纜車。",
      "ticket": "全票 NT$ 990",
      "price": "全票 NT$ 990",
      "img": "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&auto=format&fit=crop"
    },
    {
      "rank": 7,
      "name": "台中麗寶樂園渡假區 (探索世界)",
      "city": "台中市后里區",
      "rate": "4.8★",
      "tag": "全台最大天空之夢摩天輪 · 賽車場",
      "desc": "全台最大摩天輪「天空之夢」、全球唯一斷軌雲霄飛車「搶救地心」，結合Outlet購物與國際賽車場。",
      "ticket": "探索世界 NT$ 899",
      "price": "全票 NT$ 899",
      "img": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop"
    },
    {
      "rank": 8,
      "name": "雲林劍湖山世界主題樂園",
      "city": "雲林縣古坑鄉",
      "rate": "4.7★",
      "tag": "摩天輪巨蛋 · 擎天飛梭超刺激",
      "desc": "中台灣經典主題樂園！巨大百米彩虹摩天輪、飛天潛艇G5、咕咕飛車，闔家出遊放電好去處。",
      "ticket": "全票 NT$ 899",
      "price": "全票 NT$ 899",
      "img": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 9,
      "name": "高雄義大遊樂世界",
      "city": "高雄市大樹區",
      "rate": "4.8★",
      "tag": "希臘愛琴海情境 · 亞洲最大室內樂園",
      "desc": "純白聖托里尼山城浪漫造景，擁有全台最大室內主題樂園，不懼烈日風雨輕鬆暢玩。",
      "ticket": "全票 NT$ 899",
      "price": "全票 NT$ 899",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 10,
      "name": "基隆國立海洋科技博物館 (海科館)",
      "city": "基隆市中正區",
      "rate": "4.8★",
      "tag": "潮境智能海洋館 · 沉浸式互動",
      "desc": "由舊發電廠改建的海洋殿堂！包含兒童廳巨型溜滑梯、潮境智能海洋館與海龜復育池。",
      "ticket": "主題館 NT$ 200",
      "price": "門票 NT$ 200",
      "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 11,
      "name": "宜蘭傳藝園區 (國立傳統藝術中心)",
      "city": "宜蘭縣五結鄉",
      "rate": "4.9★",
      "tag": "懷舊老街童玩 · 手作DIY體驗",
      "desc": "走進民藝紅磚老街，親手體驗糖葫蘆、捏麵人、藍染與陶藝手拉胚，欣賞精彩踩街遊行表演。",
      "ticket": "普通票 NT$ 150",
      "price": "門票 NT$ 150",
      "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop"
    },
    {
      "rank": 12,
      "name": "新北大都會公園 (熊猴森樂園)",
      "city": "新北市三重區",
      "rate": "4.9★",
      "tag": "全台最大堤坡滑梯 · 31座共融遊具",
      "desc": "全台最狂免費戶外樂園！以台灣原生動物為主題，31座各式滾輪滑梯與超過100組共融遊具免費暢玩。",
      "ticket": "免費入園",
      "price": "免費暢玩",
      "img": "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=600&auto=format&fit=crop"
    },
    {
      "rank": 13,
      "name": "桃園小人國主題樂園",
      "city": "桃園市龍潭區",
      "rate": "4.7★",
      "tag": "世界微縮建築 · 幼童友好遊樂園",
      "desc": "按比例縮小的世界名勝古蹟、迷你台灣鐵路模型、多樣專為幼兒園與小學生打造的溫和遊樂設施。",
      "ticket": "特惠票 NT$ 550",
      "price": "特惠票 NT$ 550",
      "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop"
    },
    {
      "rank": 14,
      "name": "苗栗飛牛牧場",
      "city": "苗栗縣通霄鎮",
      "rate": "4.8★",
      "tag": "高山青青草原 · 餵牛喝奶露營",
      "desc": "宛如瑞士的廣袤高坡大草原！小朋友親手餵小牛喝奶、擠牛奶體驗，品嚐純天然濃醇香牛奶布丁。",
      "ticket": "全票 NT$ 280",
      "price": "全票 NT$ 280",
      "img": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop"
    },
    {
      "rank": 15,
      "name": "嘉義三隻小豬觀光農場",
      "city": "嘉義縣民雄鄉",
      "rate": "4.8★",
      "tag": "巨大粉紅豬造景 · 近距離餵水豚",
      "desc": "童話風巨型蘑菇屋與三隻小豬屋，園區飼養狐獴、水豚、草泥馬、迷你馬，還有巨大溜滑梯沙坑。",
      "ticket": "全票 NT$ 100",
      "price": "門票 NT$ 100",
      "img": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop"
    },
    {
      "rank": 16,
      "name": "高雄壽山動物園",
      "city": "高雄市鼓山區",
      "rate": "4.8★",
      "tag": "高空天空步道 · 親水廣場水豚山丘",
      "desc": "全新改建升級！漫步空中綠蔭步道俯瞰動物生活，近距離探訪水豚家族與黑熊生活空間。",
      "ticket": "全票 NT$ 40",
      "price": "全票 NT$ 40",
      "img": "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=600&auto=format&fit=crop"
    },
    {
      "rank": 17,
      "name": "宜蘭張美阿嬤農場",
      "city": "宜蘭縣三星鄉",
      "rate": "4.9★",
      "tag": "呆萌水豚君泡湯 · 日式庭園和服",
      "desc": "全台最夯可愛動物農場！穿日式浴衣餵食笑笑羊、袋鼠與水豚君，品嚐手作蔥油餅與雞蛋糕。",
      "ticket": "全票 NT$ 200",
      "price": "門票 NT$ 200",
      "img": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&auto=format&fit=crop"
    },
    {
      "rank": 18,
      "name": "彰化百果山探索樂園",
      "city": "彰化縣員林市",
      "rate": "4.7★",
      "tag": "台版侏儸紀公園 · 實體比例會動恐龍",
      "desc": "全台最大恐龍主題樂園！園區內藏著超過40隻擬真會吼叫的巨型恐龍，結合恐龍軌道車與旋轉恐龍。",
      "ticket": "全票 NT$ 350",
      "price": "門票 NT$ 350",
      "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop"
    },
    {
      "rank": 19,
      "name": "台南市立圖書館新總館 (童樂島)",
      "city": "台南市永康區",
      "rate": "4.9★",
      "tag": "最美森林圖書館 · 兒童五感探索室",
      "desc": "獲得多項建築大獎！地下室設有巨大兒童探索專區、立體童書牆、影音播映室，戶外兼具親水遊戲場。",
      "ticket": "免費入館",
      "price": "免費入館",
      "img": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop"
    },
    {
      "rank": 20,
      "name": "台南左鎮化石園區",
      "city": "台南市左鎮區",
      "rate": "4.8★",
      "tag": "全台最大化石主題館 · 遠古猛獁象",
      "desc": "全台唯一化石主題博物館！展出猛獁象、早坂中國犀、劍齒象等百萬年前台灣古生物化石。",
      "ticket": "全票 NT$ 100",
      "price": "門票 NT$ 100",
      "img": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop"
    }
  ],
  mall: [
    {
      "rank": 1,
      "name": "台北 101 購物中心 (Taipei 101 Mall)",
      "city": "台北市信義區",
      "rate": "4.9★",
      "tag": "國際頂級精品旗艦 · 都會摩天核心",
      "desc": "匯聚全球頂尖奢華精品旗艦店、挑高採光中庭與米其林星級餐廳，地下美食街更是國內外伴手禮與美食首選。",
      "features": "4樓都會廣場 · 89樓觀景台連通",
      "price": "信義商圈核心",
      "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop"
    },
    {
      "rank": 2,
      "name": "新光三越 台北信義新天地 (A4/A8/A9/A11)",
      "city": "台北市信義區",
      "rate": "4.8★",
      "tag": "全台百貨店王聚落 · 空橋漫步購物街",
      "desc": "由空橋緊密相連的四大主題館，涵蓋潮流男女裝、親子娛樂、頂級美食餐廳與各國快閃店，信義區不敗心臟地帶。",
      "features": "香堤大道戶外街頭藝人 · 節慶市集",
      "price": "空橋串聯四館",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 3,
      "name": "遠東 SOGO 台北復興館 (BR4)",
      "city": "台北市大安區",
      "rate": "4.8★",
      "tag": "忠孝復興雙捷運交會 · 國際奢華殿堂",
      "desc": "捷運忠孝復興站直達！擁有國際一線精品、和風日式庭園餐廳、頂級超市與全台坪效最高專櫃。",
      "features": "挑高中庭自然採光 · 頂級貴賓廳",
      "price": "雙捷運直達",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 4,
      "name": "台中大遠百 Top City",
      "city": "台中市西屯區",
      "rate": "4.8★",
      "tag": "全台中七期旗艦地標 · 威尼斯運河威秀",
      "desc": "結合威尼斯水都浪漫造景與台灣老街懷舊主題美食街，匯聚國際一級精品大牌，中台灣購物首選指標。",
      "features": "威尼斯風情美食街 · 奢華國際大牌",
      "price": "七期旗艦地標",
      "img": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop"
    },
    {
      "rank": 5,
      "name": "新光三越 台中中港店",
      "city": "台中市西屯區",
      "rate": "4.9★",
      "tag": "連續十餘年全台單店業績冠軍 · 全方位百貨",
      "desc": "全台單店業績最高傳奇百貨！超齊全美妝保養、排隊名店餐廳、大型展演廳與頂級影城，人潮絡繹不絕。",
      "features": "全台最狂美妝大道 · 超人氣排隊名店",
      "price": "全台業績冠軍店",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 6,
      "name": "高雄漢神巨蛋購物廣場 (Hanshin Arena)",
      "city": "高雄市左營區",
      "rate": "4.8★",
      "tag": "南台灣百貨霸主 · 緊鄰高雄巨蛋體育館",
      "desc": "南台灣流行時尚龍頭！B1美食街匯集全台頂級排隊甜點，結合巨蛋演唱會經濟，逛街餐飲熱鬧非凡。",
      "features": "巨蛋聯通 · 南台灣最強排隊美饌",
      "price": "南台灣百貨龍頭",
      "img": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop"
    },
    {
      "rank": 7,
      "name": "新竹遠東巨城購物中心 (Big City)",
      "city": "新竹市東區",
      "rate": "4.8★",
      "tag": "桃竹苗全方位生活娛樂中心 · 滑冰場保齡球",
      "desc": "竹科家庭週末必去地標！擁有舊金山叮叮車造景、極凍冰宮滑冰場、湯姆熊與大魯閣保齡球館，一站式搞定吃喝玩樂。",
      "features": "舊金山漁人碼頭風情 · 挑高溜冰場",
      "price": "桃竹苗最大休閒",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop"
    },
    {
      "rank": 8,
      "name": "台北微風南山 (Breeze Nanshan)",
      "city": "台北市信義區",
      "rate": "4.8★",
      "tag": "日本atre商場進駐 · 高空星空景觀餐廳",
      "desc": "結合日系精緻流行商場atre、亞洲最大精品超市與高樓層百萬星空景觀酒吧，引領摩登潮流品味生活。",
      "features": "高空星空景觀酒吧 · 日系流行品牌",
      "price": "日系微風美學",
      "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop"
    },
    {
      "rank": 9,
      "name": "台南南紡購物中心 (T.S. Mall)",
      "city": "台南市東區",
      "rate": "4.7★",
      "tag": "府城最大購物商場 · 佔地廣闊綠意公園",
      "desc": "台南最大購物聚落！一期與二期雙館串聯，包含威秀影城、賓士KTV、日系雜貨大廠與萬坪戶外時代公園。",
      "features": "萬坪時代綠意公園 · 親子放電娛樂",
      "price": "台南東區購物中心",
      "img": "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=600&auto=format&fit=crop"
    },
    {
      "rank": 10,
      "name": "高雄義享天地 (E-Sky Land)",
      "city": "高雄市鼓山區",
      "rate": "4.8★",
      "tag": "結合萬豪酒店 · 3D裸眼巨型螢幕",
      "desc": "北高雄全新旗艦巨作！戶外配備震撼3D巨型曲面LED，引進大量南台灣首發美食品牌與精品旗艦店。",
      "features": "萬豪酒店直通 · 3D巨型曲面屏幕",
      "price": "萬豪酒店直通",
      "img": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop"
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
const FAMILY_TOP20_DATA = RANKINGS_DATA.family;
const MALL_TOP10_DATA = RANKINGS_DATA.mall;

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
  },
  {
    "id": 31,
    "name": "新竹都城隍廟與東門市場",
    "city": "新竹市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "2.5小時",
    "tag": "百年老城",
    "badge": "風城美食聚落",
    "desc": "全台位階最高的都城隍廟！廟口聚集百年郭家潤餅、鴨肉許與炊粉貢丸，步行即可串聯年輕文青進駐的東門市場深夜食堂。",
    "activityId": "3270-smangus-tour",
    "aspect": "square"
  },
  {
    "id": 32,
    "name": "新竹南寮漁港與魚鱗天梯",
    "city": "新竹市",
    "zone": "北部",
    "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "rate": "4.7★",
    "duration": "2小時",
    "tag": "海岸地景",
    "badge": "十七公里海岸線",
    "desc": "純白魚鱗造型消波塊層層延伸入海，騎乘十七公里海岸線單車吹海風、在波光市集品嚐現烤海味並欣賞台灣海峽絕美落日。",
    "activityId": "3270-smangus-tour",
    "aspect": "wide"
  },
  {
    "id": 33,
    "name": "嘉義檜意森活村與北門驛",
    "city": "嘉義市",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop",
    "rate": "4.8★",
    "duration": "2.5小時",
    "tag": "日式木造群",
    "badge": "台版小京都",
    "desc": "全台灣最大的日式官舍建築群！29棟百年阿里山檜木日式町屋完整保存，提供和服體驗、福義軒蛋捲伴手禮與阿里山林鐵起點巡禮。",
    "activityId": "3150-alishan-day-tour",
    "aspect": "tall"
  },
  {
    "id": 34,
    "name": "嘉義文化路夜市與噴水圓環",
    "city": "嘉義市",
    "zone": "南部",
    "img": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&auto=format&fit=crop",
    "rate": "4.9★",
    "duration": "2小時",
    "tag": "美食不夜城",
    "badge": "火雞肉飯聖地",
    "desc": "Netflix《世界小吃》跨海專訪！匯集林聰明沙鍋魚頭、阿宏師火雞肉飯、御香屋葡萄柚綠茶與方塊酥，體驗最道地的諸羅城魅力。",
    "activityId": "3150-alishan-day-tour",
    "aspect": "wide"
  }
];

// 5. 全台縣市精選特色咖啡店資料庫 (含營業中、地址、照片、特徵標籤)
const TAIWAN_CAFES_DATA = [
  {
    "id": "cafe_1",
    "name": "興波咖啡 旗艦店",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "中正區",
    "address": "台北市中正區忠孝東路二段27號",
    "phone": "(02) 3322-1888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=興波咖啡+旗艦店&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "台北市中正區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_2",
    "name": "森高砂咖啡館",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大同區",
    "address": "台北市大同區延平北路二段1號",
    "phone": "(02) 2555-8680",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=森高砂咖啡館+大稻埕&authuser=1",
    "tags": [
      "手沖咖啡",
      "植栽老宅",
      "適合聊天"
    ],
    "tagEmojis": [
      "☕",
      "🌿",
      "🗣️"
    ],
    "features": "台北市大同區人氣口碑咖啡名店，主打手沖咖啡、植栽老宅、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_3",
    "name": "休習日 Z Day Cafe",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大安區",
    "address": "台北市大安區樂業街41巷2號",
    "phone": "(02) 2378-0602",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=休習日+Z+Day+Cafe&authuser=1",
    "tags": [
      "有插頭",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🔌",
      "🍰",
      "☕"
    ],
    "features": "台北市大安區人氣口碑咖啡名店，主打有插頭、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_4",
    "name": "鬧咖啡 NOW coffee",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "中正區",
    "address": "台北市中正區延平南路58號",
    "phone": "(02) 2361-3160",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=鬧咖啡+NOW+coffee&authuser=1",
    "tags": [
      "有插頭",
      "植栽老宅",
      "店家可喝酒"
    ],
    "tagEmojis": [
      "🔌",
      "🌿",
      "🍷"
    ],
    "features": "台北市中正區人氣口碑咖啡名店，主打有插頭、植栽老宅、店家可喝酒。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_5",
    "name": "翌日咖啡店",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大安區",
    "address": "台北市大安區潮州街176號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=翌日咖啡店&authuser=1",
    "tags": [
      "店家可喝酒",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🍷",
      "🍰",
      "🌿"
    ],
    "features": "台北市大安區人氣口碑咖啡名店，主打店家可喝酒、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_6",
    "name": "Coffee Syndicate",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "松山區",
    "address": "台北市松山區富錦街429巷2號",
    "phone": "(02) 2767-2775",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Coffee+Syndicate+富錦街&authuser=1",
    "tags": [
      "採光超好",
      "寵物友善",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🐶",
      "☕"
    ],
    "features": "台北市松山區人氣口碑咖啡名店，主打採光超好、寵物友善、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_7",
    "name": "Woolloomooloo",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "信義區",
    "address": "台北市信義區信義路四段379號",
    "phone": "(02) 2704-7798",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Woolloomooloo+信義&authuser=1",
    "tags": [
      "店家可喝酒",
      "小孩友善",
      "適合聊天"
    ],
    "tagEmojis": [
      "🍷",
      "👶",
      "🗣️"
    ],
    "features": "台北市信義區人氣口碑咖啡名店，主打店家可喝酒、小孩友善、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_8",
    "name": "光景 Scene Select",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "松山區",
    "address": "台北市松山區健康路11-1號",
    "phone": "(02) 2716-0263",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=光景+Scene+Select&authuser=1",
    "tags": [
      "採光超好",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "☕"
    ],
    "features": "台北市松山區人氣口碑咖啡名店，主打採光超好、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_9",
    "name": "AKA café",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大同區",
    "address": "台北市大同區貴德街49號",
    "phone": "(02) 2558-8702",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=AKA+cafe+台北",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "大稻埕百年巴洛克古宅秘境！融合日式庭院枯山水與經典手沖精品咖啡，環境靜謐優雅，在地旅人首推預約制老宅美學。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_10",
    "name": "弄宅咖啡 Alley cafe",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "松山區",
    "address": "台北市松山區民生東路五段137巷4弄2號",
    "phone": "(02) 2767-8859",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=弄宅咖啡&authuser=1",
    "tags": [
      "寵物友善",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🐶",
      "🌿",
      "🍰"
    ],
    "features": "台北市松山區人氣口碑咖啡名店，主打寵物友善、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_11",
    "name": "COFFEE LAW 敦南概念店",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大安區",
    "address": "台北市大安區忠孝東路四段181巷40弄15號",
    "phone": "(02) 2775-3800",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=COFFEE+LAW+敦南概念店&authuser=1",
    "tags": [
      "採光超好",
      "有插頭",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🔌",
      "☕"
    ],
    "features": "台北市大安區人氣口碑咖啡名店，主打採光超好、有插頭、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_12",
    "name": "Congrats Café",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大安區",
    "address": "台北市大安區文昌街47號2樓",
    "phone": "(02) 2700-6639",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Congrats+Cafe&authuser=1",
    "tags": [
      "有插頭",
      "店家可喝酒",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🔌",
      "🍷",
      "🌿"
    ],
    "features": "台北市大安區人氣口碑咖啡名店，主打有插頭、店家可喝酒、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_13",
    "name": "秘氏咖啡",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "大安區",
    "address": "台北市大安區浦城街4號",
    "phone": "(02) 8369-1012",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=秘氏咖啡+台北&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "台北市大安區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_14",
    "name": "小廢墟咖啡 Ruin Coffee Roasters",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "文山區",
    "address": "台北市文山區木柵路三段242號",
    "phone": "(02) 2234-0024",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=小廢墟咖啡&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "店家可喝酒"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍷"
    ],
    "features": "台北市文山區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、店家可喝酒。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_15",
    "name": "象山日光珈琲",
    "city": "台北市",
    "city_en": "Taipei",
    "district": "信義區",
    "address": "台北市信義區信義路五段150巷22弄65號",
    "phone": "(02) 2720-9708",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=象山日光珈琲&authuser=1",
    "tags": [
      "採光超好",
      "手沖咖啡",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "☕",
      "🐶"
    ],
    "features": "台北市信義區人氣口碑咖啡名店，主打採光超好、手沖咖啡、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_16",
    "name": "我們在海邊",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "三芝區",
    "address": "新北市三芝區後厝里北勢子12-1號",
    "phone": "0972-273-988",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=我們在海邊+三芝",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "北海岸全台最火紅無敵海景落地窗咖啡廳！雙層挑高工業風直面蔚藍太平洋海浪，特製手作溫熱巴斯克與極品冷萃咖啡。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_17",
    "name": "金山跳石沒有名字的咖啡店",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "金山區",
    "address": "新北市金山區永興里跳石4號",
    "phone": "(02) 2408-1952",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=金山跳石沒有名字的咖啡店",
    "tags": [
      "海景景觀",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "🍰",
      "🐶"
    ],
    "features": "淡金公路最美跳石海景第一排！黃色小木屋眺望北海岸無垠海景，吹海風品啜手沖拿鐵與手作磅蛋糕。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_18",
    "name": "洋荳子咖啡館",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "金山區",
    "address": "新北市金山區阿里荖33-3號",
    "phone": "(02) 2408-2455",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=洋荳子咖啡館&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🗣️"
    ],
    "features": "新北市金山區人氣口碑咖啡名店，主打海景景觀、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_19",
    "name": "散散步咖啡旅宿",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "瑞芳區",
    "address": "新北市瑞芳區祈堂路172號",
    "phone": "0981-885-939",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=散散步咖啡+金瓜石&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "新北市瑞芳區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_20",
    "name": "Cafe Hytte",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "瑞芳區",
    "address": "新北市瑞芳區魚寮路113號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Cafe+Hytte+三貂嶺&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🐶"
    ],
    "features": "新北市瑞芳區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_21",
    "name": "山海明珠",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "八里區",
    "address": "新北市八里區荖阡坑路20號",
    "phone": "0988-928-192",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=山海明珠+八里&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🗣️"
    ],
    "features": "新北市八里區人氣口碑咖啡名店，主打海景景觀、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_22",
    "name": "墨憩精品咖啡",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "板橋區",
    "address": "新北市板橋區陽明街23巷8號",
    "phone": "(02) 2250-0276",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=墨憩精品咖啡&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "新北市板橋區人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_23",
    "name": "Merci café",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "板橋區",
    "address": "新北市板橋區新民街7巷17號",
    "phone": "(02) 8953-3906",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Merci+cafe+板橋&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🐶"
    ],
    "features": "新北市板橋區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_24",
    "name": "旭舊咖啡",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "板橋區",
    "address": "新北市板橋區中山路一段216巷1號",
    "phone": "(02) 2962-9599",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=旭舊咖啡+板橋",
    "tags": [
      "採光超好",
      "植栽老宅",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "🐶"
    ],
    "features": "新北板橋眷村老宅庭院咖啡！古董老家具與懷舊戶外綠意庭院，招牌焦糖布丁與慢磨手沖咖啡極受年輕族群喜愛。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_25",
    "name": "安克黑咖啡 Ancre café",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "淡水區",
    "address": "新北市淡水區中正路233-3號2樓",
    "phone": "(02) 2626-0336",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=安克黑咖啡+淡水",
    "tags": [
      "海景景觀",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "🍰",
      "👶"
    ],
    "features": "淡水金色水岸河景第一排歐風咖啡館！超可愛招牌錨印拉花拿鐵與現烤甜甜圈鬆餅，落日黃昏夕陽美不勝收。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_26",
    "name": "一坪金林",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "新店區",
    "address": "新北市新店區屈尺路161號",
    "phone": "0975-231-155",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=一坪金林&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "新北市新店區人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_27",
    "name": "綠河 Green River Roastery",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "新店區",
    "address": "新北市新店區環河路100號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=綠河+Green+River+Roastery&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "新北市新店區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_28",
    "name": "九份食不厭",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "瑞芳區",
    "address": "新北市瑞芳區金光路221號",
    "phone": "0911-827-844",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=食不厭+金瓜石&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "🗣️"
    ],
    "features": "新北市瑞芳區人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_29",
    "name": "野事草店 Wild Herbs",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "瑞芳區",
    "address": "新北市瑞芳區輕便路147號",
    "phone": "(02) 2363-6268",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=野事草店&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "新北市瑞芳區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_30",
    "name": "天使熱愛的生活",
    "city": "新北市",
    "city_en": "New Taipei",
    "district": "淡水區",
    "address": "新北市淡水區中正路233-1號",
    "phone": "(02) 8631-2928",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=天使熱愛的生活&authuser=1",
    "tags": [
      "海景景觀",
      "店家可喝酒",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "🍷",
      "☕"
    ],
    "features": "新北市淡水區人氣口碑咖啡名店，主打海景景觀、店家可喝酒、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_31",
    "name": "魚刺人雞蛋糕 咖啡館 基隆店",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中正區",
    "address": "基隆市中正區中正路545號",
    "phone": "(02) 2462-0262",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=魚刺人雞蛋糕+正濱漁港&authuser=1",
    "tags": [
      "海景景觀",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "🍰",
      "👶"
    ],
    "features": "基隆市中正區人氣口碑咖啡名店，主打海景景觀、甜點好吃、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_32",
    "name": "圖們咖啡 tuman café",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中正區",
    "address": "基隆市中正區中正路551號",
    "phone": "(02) 2462-8727",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=圖們咖啡+tuman+cafe&authuser=1",
    "tags": [
      "海景景觀",
      "手沖咖啡",
      "店家可喝酒"
    ],
    "tagEmojis": [
      "🌊",
      "☕",
      "🍷"
    ],
    "features": "基隆市中正區人氣口碑咖啡名店，主打海景景觀、手沖咖啡、店家可喝酒。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_33",
    "name": "萬祝號",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中正區",
    "address": "基隆市中正區中正路560號",
    "phone": "(02) 2462-6867",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=萬祝號&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "基隆市中正區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_34",
    "name": "夏隆咖啡館",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "信義區",
    "address": "基隆市信義區義六路38號",
    "phone": "(02) 2426-6649",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=夏隆咖啡館&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "基隆市信義區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_35",
    "name": "丸角自轉生活咖啡",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "仁愛區",
    "address": "基隆市仁愛區孝二路28號",
    "phone": "(02) 2427-3028",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=丸角自轉生活咖啡&authuser=1",
    "tags": [
      "手沖咖啡",
      "有插頭",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🔌",
      "🌿"
    ],
    "features": "基隆市仁愛區人氣口碑咖啡名店，主打手沖咖啡、有插頭、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_36",
    "name": "安樓咖啡 ENZO Cafe",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "仁愛區",
    "address": "基隆市仁愛區蜓愛路三段67號",
    "phone": "(02) 2425-0220",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=安樓咖啡&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "基隆市仁愛區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_37",
    "name": "喜舍咖啡館",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "仁愛區",
    "address": "基隆市仁愛區愛二路54巷2號",
    "phone": "(02) 2425-2882",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=喜舍咖啡館+基隆&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "基隆市仁愛區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_38",
    "name": "金派甜點",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "仁愛區",
    "address": "基隆市仁愛區愛三路75號2樓",
    "phone": "(02) 2428-2479",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=金派甜點&authuser=1",
    "tags": [
      "甜點好吃",
      "寵物友善",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "🐶",
      "☀️"
    ],
    "features": "基隆市仁愛區人氣口碑咖啡名店，主打甜點好吃、寵物友善、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_39",
    "name": "Eddie's cafe Et Tiramisu",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "仁愛區",
    "address": "基隆市仁愛區華四街25號",
    "phone": "0989-840-785",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Eddie's+cafe+Et+Tiramisu&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "🌿"
    ],
    "features": "基隆市仁愛區人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_40",
    "name": "海那邊 冰品咖啡",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中正區",
    "address": "基隆市中正區中正路529號",
    "phone": "(02) 2462-0538",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=海那邊+正濱漁港&authuser=1",
    "tags": [
      "海景景觀",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "🍰",
      "🐶"
    ],
    "features": "基隆市中正區人氣口碑咖啡名店，主打海景景觀、甜點好吃、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_41",
    "name": "喫茶開門",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中正區",
    "address": "基隆市中正區中正路393巷38號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=喫茶開門&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "基隆市中正區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_42",
    "name": "FLOW CAFE",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "仁愛區",
    "address": "基隆市仁愛區仁三路53號2樓",
    "phone": "(02) 2428-3880",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=FLOW+CAFE+基隆&authuser=1",
    "tags": [
      "採光超好",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "🔌"
    ],
    "features": "基隆市仁愛區人氣口碑咖啡名店，主打採光超好、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_43",
    "name": "若竹咖啡",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "信義區",
    "address": "基隆市信義區東信路35-5號",
    "phone": "(02) 2466-8800",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=若竹咖啡+基隆&authuser=1",
    "tags": [
      "手沖咖啡",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🌿",
      "🍰"
    ],
    "features": "基隆市信義區人氣口碑咖啡名店，主打手沖咖啡、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_44",
    "name": "聚川居咖啡",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中山區",
    "address": "基隆市中山區中山二路51巷132號",
    "phone": "0933-241-118",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=聚川居咖啡&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "基隆市中山區人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_45",
    "name": "太平青鳥書店咖啡",
    "city": "基隆市",
    "city_en": "Keelung",
    "district": "中山區",
    "address": "基隆市中山區中山一路189巷135號",
    "phone": "(02) 2427-6323",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=太平青鳥&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🌿"
    ],
    "features": "基隆市中山區人氣口碑咖啡名店，主打海景景觀、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_46",
    "name": "阜山聚落（Chubby Doo）",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區經國二路83號",
    "phone": "0905-650-884",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%98%9C%E5%B1%B1%E8%81%9A%E8%90%BD&authuser=1",
    "tags": [
      "採光超好",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "👶"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打採光超好、甜點好吃、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_47",
    "name": "我們。 They keep company",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "中壢區",
    "address": "桃園市中壢區環東路288號",
    "phone": "0988-123-456",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%88%91%E5%80%91+They+keep+company&authuser=1",
    "tags": [
      "寵物友善",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🐶",
      "🍰",
      "☀️"
    ],
    "features": "桃園市中壢區人氣口碑咖啡名店，主打寵物友善、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_48",
    "name": "Table2 Coffee Roaster",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "中壢區",
    "address": "桃園市中壢區興平路163號",
    "phone": "(03) 435-8793",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Table2+Coffee+Roaster&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "桃園市中壢區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_49",
    "name": "理性&感性 cafe",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "平鎮區",
    "address": "桃園市平鎮區育達路67號",
    "phone": "0963-420-692",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%90%86%E6%80%A7&%E6%84%9F%E6%80%A7cafe&authuser=1",
    "tags": [
      "甜點好吃",
      "寵物友善",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "🐶",
      "☀️"
    ],
    "features": "桃園市平鎮區人氣口碑咖啡名店，主打甜點好吃、寵物友善、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_50",
    "name": "Re-Title Cafe",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "中壢區",
    "address": "桃園市中壢區愛國路60號",
    "phone": "(03) 425-7661",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Re-Title+Cafe&authuser=1",
    "tags": [
      "有插頭",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "🌿",
      "🍰"
    ],
    "features": "桃園市中壢區人氣口碑咖啡名店，主打有插頭、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_51",
    "name": "七步咖啡",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區宏昌六街152號",
    "phone": "(03) 220-0080",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%B8%83%E6%AD%A5%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "有插頭",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🔌",
      "🍰"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打手沖咖啡、有插頭、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_52",
    "name": "走走咖啡",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區大興十一街61號",
    "phone": "(03) 357-5221",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%B5%B0%E8%B5%B0%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_53",
    "name": "隱半島咖啡",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "大溪區",
    "address": "桃園市大溪區康莊路三段651巷56號",
    "phone": "0989-567-890",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9A%B1%E5%8D%8A%E5%B3%B6%E5%92%96%E5%95%A1+%E5%A4%A7%E6%BA%AA&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "桃園市大溪區人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_54",
    "name": "秋波名曲珈琲",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "大園區",
    "address": "桃園市大園區致祥三街36號",
    "phone": "(03) 381-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A7%8B%E6%B3%A2%E5%90%8D%E6%9B%B2%E7%8F%88%E7%90%B2+%E6%A1%83%E5%9C%92&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "店家可喝酒"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🍷"
    ],
    "features": "桃園市大園區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、店家可喝酒。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_55",
    "name": "草漯沙丘海景咖啡",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "觀音區",
    "address": "桃園市觀音區忠孝路1076巷",
    "phone": "0932-111-222",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8D%89%E6%BC%AF%E6%B2%99%E4%B8%98%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "桃園市觀音區人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_56",
    "name": "燊咖啡 Shen cafe",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區新埔六街138號",
    "phone": "(03) 346-9988",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%87%8A%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_57",
    "name": "OVER THERE 景觀咖啡",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區水岸街2-1號",
    "phone": "(03) 316-2299",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=OVER+THERE+%E6%B0%B4%E5%B2%B8&authuser=1",
    "tags": [
      "採光超好",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🐶",
      "👶"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打採光超好、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_58",
    "name": "古山星辰景觀咖啡",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "蘆竹區",
    "address": "桃園市蘆竹區小古山路15號",
    "phone": "(03) 324-2589",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8F%A4%E5%B1%B1%E6%98%9F%E8%BE%B0%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "👶"
    ],
    "features": "桃園市蘆竹區人氣口碑咖啡名店，主打採光超好、店家可喝酒、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_59",
    "name": "鹿點咖啡 Luna桃園店",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區成功路三段175號",
    "phone": "(03) 331-0156",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B9%BF%E9%BB%9E%E5%92%96%E5%95%A1Luna&authuser=1",
    "tags": [
      "甜點好吃",
      "植栽老宅",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "🌿",
      "☀️"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打甜點好吃、植栽老宅、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_60",
    "name": "Jo's Corner Cafe",
    "city": "桃園市",
    "city_en": "Taoyuan",
    "district": "桃園區",
    "address": "桃園市桃園區國強一街135號",
    "phone": "(03) 379-0888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Jos+Corner+Cafe&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "桃園市桃園區人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_61",
    "name": "微生 Float Dept.",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區民權路111巷58號",
    "phone": "(03) 531-8810",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%AE%E7%94%9F+Float+Dept&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_62",
    "name": "暗室微光",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區勝利路97號",
    "phone": "(03) 525-2090",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9A%97%E5%AE%A4%E5%BE%AE%E5%85%89&authuser=1",
    "tags": [
      "有插頭",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🔌",
      "🌿",
      "☕"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打有插頭、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_63",
    "name": "續日 CAFE",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區南大路149號",
    "phone": "(03) 561-0000",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%BA%8C%E6%97%A5+CAFE&authuser=1",
    "tags": [
      "有插頭",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🔌",
      "🍰",
      "☕"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打有插頭、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_64",
    "name": "一想一響 ReEcho Coffee",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區民生路58巷8號",
    "phone": "(03) 533-6651",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%B8%80%E6%83%B3%E4%B8%80%E9%9F%BF+ReEcho+Coffee&authuser=1",
    "tags": [
      "採光超好",
      "手沖咖啡",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☀️",
      "☕",
      "🌿"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打採光超好、手沖咖啡、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_65",
    "name": "吉十咖啡",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "北區",
    "address": "新竹市北區中華路三段56號",
    "phone": "(03) 523-2288",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%90%89%E5%8D%81%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "有插頭"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "🔌"
    ],
    "features": "新竹市北區人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_66",
    "name": "江山藝改所",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區興達街1號",
    "phone": "(03) 526-6456",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B1%9F%E5%B1%B1%E8%97%9D%E6%94%B9%E6%89%80&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "☕"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_67",
    "name": "墨咖啡 INK COFFEE",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區林森路180號",
    "phone": "(03) 522-0608",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%A2%A8%E5%92%96%E5%95%A1+%E6%96%B0%E7%AB%B9&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_68",
    "name": "FOX.CONE coffee bakes",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區南門街12號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=FOX+CONE+coffee&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "☀️"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_69",
    "name": "哭哭咖啡 kukukohi",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區文興路一段1號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%93%AD%E5%93%AD%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_70",
    "name": "階段甜點",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "北區",
    "address": "新竹市北區長安街89號",
    "phone": "(03) 527-8869",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9A%8E%E6%AE%B5%E7%94%9C%E9%BB%9E&authuser=1",
    "tags": [
      "甜點好吃",
      "植栽老宅",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "🌿",
      "☀️"
    ],
    "features": "新竹市北區人氣口碑咖啡名店，主打甜點好吃、植栽老宅、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_71",
    "name": "井町心靈咖啡",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "北區",
    "address": "新竹市北區大同路135號",
    "phone": "(03) 525-3186",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%BA%95%E7%94%BA%E5%BF%83%E9%9D%88%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "小孩友善",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "👶",
      "🗣️"
    ],
    "features": "新竹市北區人氣口碑咖啡名店，主打植栽老宅、小孩友善、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_72",
    "name": "種甜甜點咖啡",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區民族路66巷4號",
    "phone": "(03) 562-1004",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A8%AE%E7%94%9C&authuser=1",
    "tags": [
      "甜點好吃",
      "植栽老宅",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "🌿",
      "☀️"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打甜點好吃、植栽老宅、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_73",
    "name": "影咖啡 Inn Caffe",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區金山二十三街89號",
    "phone": "(03) 668-6922",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BD%B1%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "有插頭"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "🔌"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_74",
    "name": "Hidden Off",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "北區",
    "address": "新竹市北區西門街135號",
    "phone": "(03) 528-1110",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Hidden+Off&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "🌿"
    ],
    "features": "新竹市北區人氣口碑咖啡名店，主打甜點好吃、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_75",
    "name": "謐謐 The Secret",
    "city": "新竹市",
    "city_en": "Hsinchu City",
    "district": "東區",
    "address": "新竹市東區中央路310號",
    "phone": "(03) 533-7977",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%AC%90%E8%AC%90+The+Secret&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "🗣️"
    ],
    "features": "新竹市東區人氣口碑咖啡名店，主打甜點好吃、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_76",
    "name": "厚食聚落 咖啡聚落",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹北市",
    "address": "新竹縣竹北市光明六路東二段95-5號",
    "phone": "(03) 550-6289",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8E%9A%E9%A3%9F%E8%81%9A%E8%90%BD&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "新竹縣竹北市人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_77",
    "name": "日見森嵐",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "尖石鄉",
    "address": "新竹縣尖石鄉七鄰45號",
    "phone": "0978-081-877",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E8%A6%8B%E6%A3%AE%E5%B5%90&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "👶"
    ],
    "features": "新竹縣尖石鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_78",
    "name": "綠色小徑 green trail",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "芎林鄉",
    "address": "新竹縣芎林鄉華龍村五鄰187號",
    "phone": "(03) 593-5765",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%B6%A0%E8%89%B2%E5%B0%8F%E5%BE%91&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "👶"
    ],
    "features": "新竹縣芎林鄉人氣口碑咖啡名店，主打植栽老宅、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_79",
    "name": "哭哭咖啡 概念店",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹北市",
    "address": "新竹縣竹北市文興路二段140號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%93%AD%E5%93%AD%E5%92%96%E5%95%A1+%E7%AB%B9%E5%8C%97&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "新竹縣竹北市人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_80",
    "name": "喜木咖啡",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹北市",
    "address": "新竹縣竹北市鳳岡路二段422號",
    "phone": "(03) 556-0799",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%96%9C%E6%9C%A8%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "田園稻浪",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🌾",
      "👶"
    ],
    "features": "新竹縣竹北市人氣口碑咖啡名店，主打採光超好、田園稻浪、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_81",
    "name": "大山北月",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "橫山鄉",
    "address": "新竹縣橫山鄉大山背80號",
    "phone": "(03) 593-6439",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%A4%A7%E5%B1%B1%E5%8C%97%E6%9C%88&authuser=1",
    "tags": [
      "植栽老宅",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "👶",
      "🐶"
    ],
    "features": "新竹縣橫山鄉人氣口碑咖啡名店，主打植栽老宅、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_82",
    "name": "山丘上景觀咖啡館",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "湖口鄉",
    "address": "新竹縣湖口鄉湖新路980巷",
    "phone": "(03) 569-0588",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E4%B8%98%E4%B8%8A%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "👶"
    ],
    "features": "新竹縣湖口鄉人氣口碑咖啡名店，主打採光超好、店家可喝酒、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_83",
    "name": "六號花園",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "尖石鄉",
    "address": "新竹縣尖石鄉新樂村拉號部落",
    "phone": "0932-178-177",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%85%AD%E8%99%9F%E8%8A%B1%E5%9C%92&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "新竹縣尖石鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_84",
    "name": "半畝院子",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹北市",
    "address": "新竹縣竹北市光明六路東二段381號",
    "phone": "(03) 668-5700",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8D%8A%E7%95%9D%E9%99%A2%E5%AD%90&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "新竹縣竹北市人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_85",
    "name": "Bisou Bisou 珈琲",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹北市",
    "address": "新竹縣竹北市嘉豐五路二段18號",
    "phone": "(03) 667-0682",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Bisou+Bisou+%E7%AB%B9%E5%8C%97&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "☀️"
    ],
    "features": "新竹縣竹北市人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_86",
    "name": "紅瓦紫藤",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹北市",
    "address": "新竹縣竹北市文興路一段123號",
    "phone": "(03) 658-8188",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%B4%85%E7%93%A6%E7%B4%AB%E8%97%A4&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "新竹縣竹北市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_87",
    "name": "SRC 北埔莊園咖啡",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "北埔鄉",
    "address": "新竹縣北埔鄉水磜子4鄰50號",
    "phone": "0972-021-341",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=SRC%E5%8C%97%E5%9F%94%E8%8E%8A%E5%9C%92&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "新竹縣北埔鄉人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_88",
    "name": "藍月莊園",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "關西鎮",
    "address": "新竹縣關西鎮石光里7鄰328-1號",
    "phone": "(03) 587-1600",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%97%8D%E6%9C%88%E8%8E%8A%E5%9C%92&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "👶"
    ],
    "features": "新竹縣關西鎮人氣口碑咖啡名店，主打植栽老宅、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_89",
    "name": "上山喝咖啡",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "橫山鄉",
    "address": "新竹縣橫山鄉大山背1鄰",
    "phone": "0912-345-678",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%B8%8A%E5%B1%B1%E5%96%9D%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "新竹縣橫山鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_90",
    "name": "溫室咖啡 Greenhouse",
    "city": "新竹縣",
    "city_en": "Hsinchu County",
    "district": "竹東鎮",
    "address": "新竹縣竹東鎮中興路四段",
    "phone": "(03) 582-8888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%BA%AB%E5%AE%A4%E5%92%96%E5%95%A1+%E7%AB%B9%E6%9D%B1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "新竹縣竹東鎮人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_91",
    "name": "山那邊·綠葉方舟",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "三義鄉",
    "address": "苗栗縣三義鄉勝興村綠舟路1號",
    "phone": "(03) 787-5868",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%B6%A0%E8%91%89%E6%96%B9%E8%88%9F&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "👶"
    ],
    "features": "苗栗縣三義鄉人氣口碑咖啡名店，主打植栽老宅、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_92",
    "name": "漫步雲端森林廚房咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "三義鄉",
    "address": "苗栗縣三義鄉雙潭村崩山下22號",
    "phone": "(03) 787-9085",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%BC%AB%E6%AD%A5%E9%9B%B2%E7%AB%AF%E6%A3%AE%E6%9E%97%E5%BB%9A%E6%88%BF&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "👶"
    ],
    "features": "苗栗縣三義鄉人氣口碑咖啡名店，主打植栽老宅、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_93",
    "name": "蘇維拉莊園 咖啡廳",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "南庄鄉",
    "address": "苗栗縣南庄鄉田美村16鄰四灣92號",
    "phone": "(03) 782-3328",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%98%87%E7%B6%AD%E6%8B%89%E8%8E%8A%E5%9C%92&authuser=1",
    "tags": [
      "植栽老宅",
      "小孩友善",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "👶",
      "☀️"
    ],
    "features": "苗栗縣南庄鄉人氣口碑咖啡名店，主打植栽老宅、小孩友善、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_94",
    "name": "Per gram coffee",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "苗栗市",
    "address": "苗栗縣苗栗市中山路747號",
    "phone": "(03) 735-6011",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Per+gram+coffee&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "苗栗縣苗栗市人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_95",
    "name": "重成商號（我們 Our）",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "後龍鎮",
    "address": "苗栗縣後龍鎮海埔路56-1號",
    "phone": "(03) 743-2179",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%87%8D%E6%88%90%E5%95%86%E8%99%9F&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "苗栗縣後龍鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_96",
    "name": "轉角相遇咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "南庄鄉",
    "address": "苗栗縣南庄鄉中正路58號",
    "phone": "(03) 782-1522",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%BD%89%E8%A7%92%E7%9B%B8%E9%81%87%E5%92%96%E5%95%A1+%E5%8D%97%E5%BA%84&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "苗栗縣南庄鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_97",
    "name": "日新島 水漾咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "頭屋鄉",
    "address": "苗栗縣頭屋鄉明德村明德路54-6號",
    "phone": "(03) 725-5789",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E6%96%B0%E5%B3%B6%E6%B0%B4%E6%BC%BE%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "👶"
    ],
    "features": "苗栗縣頭屋鄉人氣口碑咖啡名店，主打植栽老宅、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_98",
    "name": "窩 coffee",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "公館鄉",
    "address": "苗栗縣公館鄉福星村館義路",
    "phone": "0966-658-808",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%AA%A9coffee+%E5%85%AC%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "苗栗縣公館鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_99",
    "name": "老官道咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "大湖鄉",
    "address": "苗栗縣大湖鄉新開村五鄰台3線141公里",
    "phone": "0932-579-178",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%80%81%E5%AE%98%E9%81%93%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "👶"
    ],
    "features": "苗栗縣大湖鄉人氣口碑咖啡名店，主打植栽老宅、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_100",
    "name": "橙香森林景觀咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "頭屋鄉",
    "address": "苗栗縣頭屋鄉明德路6號",
    "phone": "(03) 725-2013",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A9%99%E9%A6%99%E6%A3%AE%E6%9E%97&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "苗栗縣頭屋鄉人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_101",
    "name": "鹿角 CAFE",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "三義鄉",
    "address": "苗栗縣三義鄉西湖村雙湖21號",
    "phone": "0981-008-698",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B9%BF%E8%A7%92CAFE+%E4%B8%89%E7%BE%A9&authuser=1",
    "tags": [
      "植栽老宅",
      "寵物友善",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "🐶",
      "🍰"
    ],
    "features": "苗栗縣三義鄉人氣口碑咖啡名店，主打植栽老宅、寵物友善、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_102",
    "name": "天空之城 鳥VS.人咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "大湖鄉",
    "address": "苗栗縣大湖鄉新開村十份33號",
    "phone": "(03) 795-1815",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E+%E8%8B%97%E6%A0%97&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "苗栗縣大湖鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_103",
    "name": "山度空間 森林咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "泰安鄉",
    "address": "苗栗縣泰安鄉清安村洗水坑",
    "phone": "0910-123-999",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B3%B0%E5%AE%89%E6%A3%AE%E6%9E%97%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "苗栗縣泰安鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_104",
    "name": "隨心園咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "竹南鎮",
    "address": "苗栗縣竹南鎮博愛街120號",
    "phone": "(03) 746-8888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9A%A8%E5%BF%83%E5%9C%92%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "苗栗縣竹南鎮人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_105",
    "name": "自然風情景觀咖啡",
    "city": "苗栗縣",
    "city_en": "Miaoli",
    "district": "卓蘭鎮",
    "address": "苗栗縣卓蘭鎮西坪里西坪134之7號",
    "phone": "(04) 2589-8080",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%87%AA%E7%84%B6%E9%A2%A8%E6%83%85%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🐶",
      "👶"
    ],
    "features": "苗栗縣卓蘭鎮人氣口碑咖啡名店，主打採光超好、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_106",
    "name": "吃茶三千 台灣概念店",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "南屯區",
    "address": "台中市南屯區大英街360號",
    "phone": "(04) 2328-5536",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%90%83%E8%8C%B6%E4%B8%89%E5%8D%83&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "台中市南屯區人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_107",
    "name": "Solidbean Coffee Roasters",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西區",
    "address": "台中市西區精誠三街28號",
    "phone": "(04) 2320-0863",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Solidbean+Coffee&authuser=1",
    "tags": [
      "採光超好",
      "手沖咖啡",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "☕",
      "🐶"
    ],
    "features": "台中市西區人氣口碑咖啡名店，主打採光超好、手沖咖啡、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_108",
    "name": "Hausinc Comfort",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "北區",
    "address": "台中市北區忠太西路39號",
    "phone": "(04) 2208-5855",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Hausinc+Comfort&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "台中市北區人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_109",
    "name": "Modism Café 摩德年代",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "北區",
    "address": "台中市北區大德街73號",
    "phone": "(04) 2207-2557",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%91%A9%E5%BE%B7%E5%B9%B4%E4%BB%A3&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "🍰"
    ],
    "features": "台中市北區人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_110",
    "name": "留白計畫 blank plan",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西區",
    "address": "台中市西區五權西四街45號",
    "phone": "(04) 2375-5005",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%95%99%E7%99%BD%E8%A8%88%E7%95%AB&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "台中市西區人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_111",
    "name": "Coffee Stopover",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西區",
    "address": "台中市西區民權路217巷24號",
    "phone": "(04) 2305-5388",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Coffee+Stopover&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "台中市西區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_112",
    "name": "窩柢咖啡公寓",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西屯區",
    "address": "台中市西屯區杏林路27號",
    "phone": "(04) 2708-6808",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%AA%A9%E6%9F%A2%E5%92%96%E5%95%A1%E5%85%AC%E5%AF%93&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🔌"
    ],
    "features": "台中市西屯區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_113",
    "name": "目覺咖啡 mezamashikohi 三店",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西區",
    "address": "台中市西區精誠七街1號",
    "phone": "(04) 2329-2566",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%9B%AE%E8%A6%BA%E5%92%96%E5%95%A1%E4%B8%89%E5%BA%97&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "🍰"
    ],
    "features": "台中市西區人氣口碑咖啡名店，主打採光超好、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_114",
    "name": "Bakki Handmade",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西區",
    "address": "台中市西區五權西六街136巷6-1號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Bakki+Handmade&authuser=1",
    "tags": [
      "甜點好吃",
      "植栽老宅",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "🌿",
      "☀️"
    ],
    "features": "台中市西區人氣口碑咖啡名店，主打甜點好吃、植栽老宅、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_115",
    "name": "細水焙煎所",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西區",
    "address": "台中市西區公正路231號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%B4%B0%E6%B0%B4%E7%84%99%E7%85%8E%E6%89%80&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "台中市西區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_116",
    "name": "樂樂書屋 LELE BOOKS STORE",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "西屯區",
    "address": "台中市西屯區玉成路6號",
    "phone": "(04) 2358-2083",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A8%82%E6%A8%82%E6%9B%B8%E5%B1%8B&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "台中市西屯區人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_117",
    "name": "Fleet Street 艦隊街咖啡",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "中區",
    "address": "台中市中區民族路24號",
    "phone": "(04) 2224-0368",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Fleet+Street+%E5%8F%B0%E4%B8%AD&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "台中市中區人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_118",
    "name": "黑森林景觀咖啡",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "沙鹿區",
    "address": "台中市沙鹿區都會園路2233巷200號",
    "phone": "(04) 2631-9258",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%BB%91%E6%A3%AE%E6%9E%97%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "🗣️"
    ],
    "features": "台中市沙鹿區人氣口碑咖啡名店，主打採光超好、店家可喝酒、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_119",
    "name": "TU PANG 地坊餐廳咖啡",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "南屯區",
    "address": "台中市南屯區文心南五路一段323-1號",
    "phone": "(04) 2471-3796",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%9C%B0%E5%9D%8A%E9%A4%90%E5%BB%B3&authuser=1",
    "tags": [
      "店家可喝酒",
      "甜點好吃",
      "適合聊天"
    ],
    "tagEmojis": [
      "🍷",
      "🍰",
      "🗣️"
    ],
    "features": "台中市南屯區人氣口碑咖啡名店，主打店家可喝酒、甜點好吃、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_120",
    "name": "YOLO MOMENT 新美式舒食",
    "city": "台中市",
    "city_en": "Taichung",
    "district": "南屯區",
    "address": "台中市南屯區惠中路二段36號",
    "phone": "(04) 2258-8868",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=YOLO+MOMENT+%E5%8F%B0%E4%B8%AD&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "台中市南屯區人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_121",
    "name": "右舍咖啡 vicinocafe",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "員林市",
    "address": "彰化縣員林市萬年路三段67號",
    "phone": "(04) 836-8438",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8F%B3%E8%88%8D%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "彰化縣員林市人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_122",
    "name": "Stable Fly 穩定飛行模式",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "彰化市",
    "address": "彰化縣彰化市永樂街44巷2號",
    "phone": "(04) 722-0663",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=穩定飛行模式+彰化",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "彰化永樂街四層樓復古老屋選物咖啡館！天井採光與老物陳列，手沖特調咖啡與手作甜點深受文青喜愛。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_123",
    "name": "透明空氣 toumei kuuki",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "員林市",
    "address": "彰化縣員林市員集路二段277巷195號",
    "phone": "0900-588-888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=透明空氣+員林",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "彰化超人氣日式枯山水禪風預約制咖啡美學館！純白極簡與大片田園景觀窗，提供精緻和風茶點與精品手沖咖啡。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_124",
    "name": "瘦子咖啡 Skinny Cafe",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "彰化市",
    "address": "彰化縣彰化市光復道22-1號",
    "phone": "(04) 723-2046",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%98%A6%E5%AD%90%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "彰化縣彰化市人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_125",
    "name": "小食糖 sugar bistro",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "鹿港鎮",
    "address": "彰化縣鹿港鎮中山路448號",
    "phone": "(04) 777-6668",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E9%A3%9F%E7%B3%96+%E9%B9%BF%E6%B8%AF&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🐶"
    ],
    "features": "彰化縣鹿港鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_126",
    "name": "咖啡烟",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "彰化市",
    "address": "彰化縣彰化市永樂街199號",
    "phone": "(04) 722-4994",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%92%96%E5%95%A1%E7%83%9F&authuser=1",
    "tags": [
      "店家可喝酒",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🍷",
      "🌿",
      "🍰"
    ],
    "features": "彰化縣彰化市人氣口碑咖啡名店，主打店家可喝酒、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_127",
    "name": "日日喃喃",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "員林市",
    "address": "彰化縣員林市新生路214號",
    "phone": "(04) 833-8883",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E6%97%A5%E5%96%83%E5%96%83&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "🐶"
    ],
    "features": "彰化縣員林市人氣口碑咖啡名店，主打甜點好吃、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_128",
    "name": "Subi coffee&bakery",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "員林市",
    "address": "彰化縣員林市中山路二段131巷28號",
    "phone": "(04) 837-2312",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Subi+coffee&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "彰化縣員林市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_129",
    "name": "鹿港 煮駐咖啡",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "鹿港鎮",
    "address": "彰化縣鹿港鎮成功路88號",
    "phone": "0933-456-789",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%85%AE%E9%A7%90%E5%92%96%E5%95%A1+%E9%B9%BF%E6%B8%AF&authuser=1",
    "tags": [
      "手沖咖啡",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🌿",
      "🍰"
    ],
    "features": "彰化縣鹿港鎮人氣口碑咖啡名店，主打手沖咖啡、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_130",
    "name": "銀宮阿法咖啡",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "彰化市",
    "address": "彰化縣彰化市太平街63號",
    "phone": "(04) 728-8888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%8A%80%E5%AE%AE%E9%98%BF%E6%B3%95%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "彰化縣彰化市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_131",
    "name": "孩堤咖啡",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "鹿港鎮",
    "address": "彰化縣鹿港鎮景興街18號",
    "phone": "(04) 777-9629",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%AD%A9%E5%A0%A4%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "👶"
    ],
    "features": "彰化縣鹿港鎮人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_132",
    "name": "喜喜茶室",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "員林市",
    "address": "彰化縣員林市中山路二段48號",
    "phone": "(04) 836-8777",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%96%9C%E5%96%9C%E8%8C%B6%E5%AE%A4&authuser=1",
    "tags": [
      "植栽老宅",
      "適合聊天",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "🗣️",
      "🍰"
    ],
    "features": "彰化縣員林市人氣口碑咖啡名店，主打植栽老宅、適合聊天、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_133",
    "name": "山海戀景觀咖啡",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "花壇鄉",
    "address": "彰化縣花壇鄉環山路",
    "phone": "0932-111-333",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E6%B5%B7%E6%88%80%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1+%E8%8A%B1%E5%A3%87&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "🗣️"
    ],
    "features": "彰化縣花壇鄉人氣口碑咖啡名店，主打採光超好、店家可喝酒、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_134",
    "name": "小巷七貳 ALLEY 72",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "鹿港鎮",
    "address": "彰化縣鹿港鎮後車巷72號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E5%B7%B7%E4%B8%83%E8%B2%B3&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "彰化縣鹿港鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_135",
    "name": "Attic 小閣樓",
    "city": "彰化縣",
    "city_en": "Changhua",
    "district": "員林市",
    "address": "彰化縣員林市惠來街108號",
    "phone": "(04) 837-0979",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Attic%E5%B0%8F%E9%96%A3%E6%A8%93&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "🍰"
    ],
    "features": "彰化縣員林市人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_136",
    "name": "蠻荒咖啡 Desolate Coffee",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "魚池鄉",
    "address": "南投縣魚池鄉文化巷41號",
    "phone": "0972-489-704",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%A0%BB%E8%8D%92%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "☕"
    ],
    "features": "南投縣魚池鄉人氣口碑咖啡名店，主打採光超好、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_137",
    "name": "鹿篙咖啡莊園",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "魚池鄉",
    "address": "南投縣魚池鄉香茶巷31-6號",
    "phone": "(04) 9289-5520",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B9%BF%E7%AF%99%E5%92%96%E5%95%A1%E8%8E%8A%E5%9C%92&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "☕"
    ],
    "features": "南投縣魚池鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_138",
    "name": "隱茶 STEAM",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "水里鄉",
    "address": "南投縣水里鄉民權路101-3號",
    "phone": "(04) 9277-6471",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9A%B1%E8%8C%B6STEAM&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "南投縣水里鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_139",
    "name": "喝喝茶 Hohocha",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "魚池鄉",
    "address": "南投縣魚池鄉魚池街443-36號",
    "phone": "(04) 9289-5899",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%96%9D%E5%96%9D%E8%8C%B6&authuser=1",
    "tags": [
      "植栽老宅",
      "小孩友善",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "👶",
      "🍰"
    ],
    "features": "南投縣魚池鄉人氣口碑咖啡名店，主打植栽老宅、小孩友善、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_140",
    "name": "蒙塔妮手作甜點",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "仁愛鄉",
    "address": "南投縣仁愛鄉大同村壽亭巷20-1號",
    "phone": "0983-180-965",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%92%99%E5%A1%94%E5%A6%AE%E6%89%8B%E4%BD%9C%E7%94%9C%E9%BB%9E&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "🌿"
    ],
    "features": "南投縣仁愛鄉人氣口碑咖啡名店，主打甜點好吃、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_141",
    "name": "先得月 Tea & Cafe",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "魚池鄉",
    "address": "南投縣魚池鄉中興路106-1號",
    "phone": "(04) 9285-5022",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%85%88%E5%BE%97%E6%9C%88+%E6%97%A5%E6%9C%88%E6%BD%AD&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "☕"
    ],
    "features": "南投縣魚池鄉人氣口碑咖啡名店，主打海景景觀、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_142",
    "name": "山男咖啡 Nantou",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "埔里鎮",
    "address": "南投縣埔里鎮中山路三段",
    "phone": "0988-123-999",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%9F%94%E9%87%8C%E5%B1%B1%E7%94%B7%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "南投縣埔里鎮人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_143",
    "name": "微光森林 咖啡烘焙",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "南投市",
    "address": "南投縣南投市八卦路703巷32號",
    "phone": "(04) 9229-2899",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%AE%E5%85%89%E6%A3%AE%E6%9E%97&authuser=1",
    "tags": [
      "植栽老宅",
      "小孩友善",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "👶",
      "🍰"
    ],
    "features": "南投縣南投市人氣口碑咖啡名店，主打植栽老宅、小孩友善、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_144",
    "name": "烏布雨林 峇里島主題咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "魚池鄉",
    "address": "南投縣魚池鄉慶隆巷59-6號",
    "phone": "(04) 9288-0800",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%83%8F%E5%B8%83%E9%9B%A8%E6%9E%97&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🗣️"
    ],
    "features": "南投縣魚池鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_145",
    "name": "築樂 日式庭園咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "埔里鎮",
    "address": "南投縣埔里鎮桃米路12-11號",
    "phone": "(04) 9291-2677",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%AF%89%E6%A8%82+%E5%9F%94%E9%87%8C&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "👶"
    ],
    "features": "南投縣埔里鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_146",
    "name": "土角厝水上庭園咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "埔里鎮",
    "address": "南投縣埔里鎮水上巷2號",
    "phone": "(04) 9291-2201",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%9C%9F%E8%A7%92%E5%8E%9D%E6%B0%B4%E4%B8%8A%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "小孩友善",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "👶",
      "🗣️"
    ],
    "features": "南投縣埔里鎮人氣口碑咖啡名店，主打植栽老宅、小孩友善、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_147",
    "name": "南投赤腳精靈 柴燒景觀咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "南投市",
    "address": "南投縣南投市八卦路1-1號",
    "phone": "(04) 9223-3666",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%B5%A4%E8%85%B3%E7%B2%BE%E9%9D%88&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "南投縣南投市人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_148",
    "name": "黑爵士民宿咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "魚池鄉",
    "address": "南投縣魚池鄉瓊文巷36-5號",
    "phone": "0988-328-178",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%BB%91%E7%88%B5%E5%A3%AB%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🐶"
    ],
    "features": "南投縣魚池鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_149",
    "name": "Feeling18 18度C巧克力工坊 義式咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "埔里鎮",
    "address": "南投縣埔里鎮慈恩街20號",
    "phone": "(049) 298-4863",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Feeling18+18度C巧克力工坊",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "南投埔里指標級人氣名店！以極品黑巧克力、手作義式冰淇淋與職人手沖咖啡聞名，設有舒適戶外咖啡休憩園區。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_150",
    "name": "茶二指故事館 景觀咖啡",
    "city": "南投縣",
    "city_en": "Nantou",
    "district": "名間鄉",
    "address": "南投縣名間鄉埔中巷32-1號",
    "phone": "(04) 9258-3126",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8C%B6%E4%BA%8C%E6%8C%87&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "南投縣名間鄉人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_151",
    "name": "凹凸咖啡館",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "斗六市",
    "address": "雲林縣斗六市雲中街9巷12號",
    "phone": "(05) 533-9610",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%87%B9%E5%87%B8%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "雲林縣斗六市人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_152",
    "name": "巴登咖啡 總店",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉荷苞村荷苞34號",
    "phone": "(05) 526-4905",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B7%B4%E7%99%BB%E5%92%96%E5%95%A1%E7%B8%BD%E5%BA%97&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🗣️"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_153",
    "name": "56號藍色公路咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉桃源路1-13號",
    "phone": "(05) 590-1440",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=56%E8%99%9F%E8%97%8D%E8%89%B2%E5%85%AC%E8%B7%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🐶",
      "👶"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打採光超好、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_154",
    "name": "鴻豆王國 台灣黑咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "斗六市",
    "address": "雲林縣斗六市仁義路3-10號",
    "phone": "(05) 537-8759",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B4%BB%E8%B1%86%E7%8E%8B%E5%9C%8B&authuser=1",
    "tags": [
      "手沖咖啡",
      "有插頭",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🔌",
      "🍰"
    ],
    "features": "雲林縣斗六市人氣口碑咖啡名店，主打手沖咖啡、有插頭、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_155",
    "name": "後院 houyuan",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "虎尾鎮",
    "address": "雲林縣虎尾鎮忠孝路2號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%8C%E9%99%A2+houyuan&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "🍰"
    ],
    "features": "雲林縣虎尾鎮人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_156",
    "name": "Mishka Coffee & Antique",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "虎尾鎮",
    "address": "雲林縣虎尾鎮光明路111號",
    "phone": "(05) 632-6800",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Mishka+Coffee&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "雲林縣虎尾鎮人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_157",
    "name": "華山派主角景觀咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉華山村112號",
    "phone": "(05) 590-0288",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8F%AF%E5%B1%B1%E6%B4%BE%E4%B8%BB%E8%A7%92%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "🗣️"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打採光超好、店家可喝酒、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_158",
    "name": "仙地咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉桃源路1-2號",
    "phone": "(05) 590-1989",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%BB%99%E5%9C%B0%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "🗣️"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打採光超好、店家可喝酒、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_159",
    "name": "日作咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "斗六市",
    "address": "雲林縣斗六市慶生路112號",
    "phone": "(05) 533-3111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E4%BD%9C%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "雲林縣斗六市人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_160",
    "name": "虎珍堂 菓寮門市咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "虎尾鎮",
    "address": "雲林縣虎尾鎮中山路13號",
    "phone": "(05) 632-3663",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%99%8E%E7%8F%8D%E5%A0%82%E8%8F%93%E5%AF%AE%E5%BA%97&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "雲林縣虎尾鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_161",
    "name": "永光故事屋 微冊咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉文昌路58-4號",
    "phone": "0970-230-067",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B0%B8%E5%85%89%E6%95%85%E4%BA%8B%E5%B1%8B&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "👶"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_162",
    "name": "阿嬤的私房菜景觀咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉華山村78-5號",
    "phone": "(05) 590-0493",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%98%BF%E5%AC%A4%E7%9A%84%E7%A7%81%E6%88%BF%E8%8F%9C+%E5%8F%A4%E5%9D%91&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🗣️"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打採光超好、小孩友善、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_163",
    "name": "保生堂 漢方咖啡館",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "北港鎮",
    "address": "雲林縣北港鎮中山路61號",
    "phone": "(05) 783-0707",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8C%97%E6%B8%AF%E4%BF%9D%E7%94%9F%E5%A0%82&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "雲林縣北港鎮人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_164",
    "name": "芒果咖啡館 莿桐總店",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "莿桐鄉",
    "address": "雲林縣莿桐鄉中山路114號",
    "phone": "(05) 584-1987",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8A%92%E6%9E%9C%E5%92%96%E5%95%A1+%E8%8E%BF%E6%A1%90&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "雲林縣莿桐鄉人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_165",
    "name": "桂林映象會館 泰風咖啡",
    "city": "雲林縣",
    "city_en": "Yunlin",
    "district": "古坑鄉",
    "address": "雲林縣古坑鄉景水1之20號",
    "phone": "(05) 590-1280",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A1%82%E6%9E%97%E6%98%A0%E8%B1%A1%E6%9C%83%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "雲林縣古坑鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_166",
    "name": "霜空珈琲",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "西區",
    "address": "嘉義市西區國華街132號",
    "phone": "(05) 225-5507",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9C%9C%E7%A9%BA%E7%8F%88%E7%90%B2&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "嘉義市西區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_167",
    "name": "木更 Mugeneration",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區成仁街189號",
    "phone": "(05) 223-2288",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9C%A8%E6%9B%B4+Mugeneration&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_168",
    "name": "Morikoohii 森 咖啡",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區共和路199巷1號",
    "phone": "(05) 276-1601",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Morikoohii+%E6%A3%AE%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_169",
    "name": "秘氏咖啡 嘉義店",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "西區",
    "address": "嘉義市西區延平街288號",
    "phone": "0935-393-853",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A7%98%E6%B0%8F%E5%92%96%E5%95%A1+%E5%98%89%E7%BE%A9&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "嘉義市西區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_170",
    "name": "自由が丘 Jiyugaoka",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區忠孝路186號",
    "phone": "(05) 271-6069",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%87%AA%E7%94%B1%E3%81%8C%E4%B8%98+%E5%98%89%E7%BE%A9&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_171",
    "name": "弓時間 Arrowing Time",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區安和街60號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BC%93%E6%99%82%E9%96%93+%E5%98%89%E7%BE%A9&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_172",
    "name": "Daisy的雜貨店",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區維新路73號",
    "phone": "(05) 277-0893",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Daisy%E7%9A%84%E9%9B%9C%E8%B2%A8%E5%BA%97&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_173",
    "name": "玖咖啡",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區興隆街8號",
    "phone": "(05) 216-2626",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%8E%96%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☀️",
      "☕",
      "🍰"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打採光超好、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_174",
    "name": "SUPiIIDO 咖啡",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區共和路411號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=SUPiIIDO+%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "☀️"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_175",
    "name": "老院子 1951",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區成仁街201號",
    "phone": "(05) 227-1951",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%80%81%E9%99%A2%E5%AD%901951&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🐶"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_176",
    "name": "往前咖啡店",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區興中街205號",
    "phone": "(05) 222-6900",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%80%E5%89%8D%E5%92%96%E5%95%A1%E5%BA%97&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_177",
    "name": "傲漫手感焙烘咖啡",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區公明路102-1號",
    "phone": "(05) 276-8999",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%82%B2%E6%BC%AB%E6%89%8B%E6%84%9F%E7%84%99%E7%83%98%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "採光超好"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "☀️"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_178",
    "name": "Bless 淺山房咖啡",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區林森東路",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Bless+%E6%B7%BA%E5%B1%B1%E6%88%BF&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "☀️"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_179",
    "name": "迦南地咖啡",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "西區",
    "address": "嘉義市西區大溪路386號",
    "phone": "(05) 237-7788",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%BF%A6%E5%8D%97%E5%9C%B0%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "嘉義市西區人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_180",
    "name": "Mimico Cafe 秘密客咖啡館",
    "city": "嘉義市",
    "city_en": "Chiayi City",
    "district": "東區",
    "address": "嘉義市東區興中街200號",
    "phone": "(05) 275-5866",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A7%98%E5%AF%86%E5%AE%A2%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "有插頭",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "🌿",
      "🍰"
    ],
    "features": "嘉義市東區人氣口碑咖啡名店，主打有插頭、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_181",
    "name": "阿將的家 23咖啡館",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "阿里山鄉",
    "address": "嘉義縣阿里山鄉樂野村四鄰129-6號",
    "phone": "0933-683-420",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%98%BF%E5%B0%87%E7%9A%84%E5%AE%B623%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "嘉義縣阿里山鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_182",
    "name": "山角鐵茶屋",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "梅山鄉",
    "address": "嘉義縣梅山鄉樟樹湖27號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E8%A7%92%E9%90%B5%E8%8C%B6%E5%B1%8B&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "嘉義縣梅山鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_183",
    "name": "空氣圖書館 Air Library",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "梅山鄉",
    "address": "嘉義縣梅山鄉太平村下坑仔2號",
    "phone": "(05) 257-2366",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A9%BA%E6%B0%A3%E5%9C%96%E6%9B%B8%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "嘉義縣梅山鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_184",
    "name": "游芭藜 Zou系列鄒族景觀咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "阿里山鄉",
    "address": "嘉義縣阿里山鄉山美村1鄰8之1號",
    "phone": "0988-238-907",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B8%B8%E8%8A%AD%E8%97%9C&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "嘉義縣阿里山鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_185",
    "name": "清豐濤月景觀足湯咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "番路鄉",
    "address": "嘉義縣番路鄉凸湖5-1號",
    "phone": "(05) 259-3133",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B8%85%E8%B1%90%E6%BF%A4%E6%9C%88&authuser=1",
    "tags": [
      "採光超好",
      "店家可喝酒",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "🍷",
      "🗣️"
    ],
    "features": "嘉義縣番路鄉人氣口碑咖啡名店，主打採光超好、店家可喝酒、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_186",
    "name": "生力農場 景觀咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "番路鄉",
    "address": "嘉義縣番路鄉公田村9鄰隙頂22號",
    "phone": "(05) 258-6785",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%94%9F%E5%8A%9B%E8%BE%B2%E5%A0%B4&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "☕"
    ],
    "features": "嘉義縣番路鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_187",
    "name": "鄒築園 阿里山咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "樂野村",
    "address": "嘉義縣阿里山鄉樂野村二鄰71號",
    "phone": "(05) 256-1118",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%84%92%E7%AF%89%E5%9C%92&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "嘉義縣樂野村人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_188",
    "name": "山坡咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "中埔鄉",
    "address": "嘉義縣中埔鄉同仁村同仁42-6號",
    "phone": "0928-333-888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E5%9D%A1%E5%92%96%E5%95%A1+%E4%B8%AD%E5%9F%94&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "嘉義縣中埔鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_189",
    "name": "文峰遊客中心 若蘭市集咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "竹崎鄉",
    "address": "嘉義縣竹崎鄉文峰村大坑20號",
    "phone": "0937-658-111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8B%A5%E8%98%AD%E5%B8%82%E9%9B%86%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "👶"
    ],
    "features": "嘉義縣竹崎鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_190",
    "name": "雲瀑谷咖啡館",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "番路鄉",
    "address": "嘉義縣番路鄉公田村隙頂63號",
    "phone": "0910-835-968",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9B%B2%E7%80%91%E8%B0%B7%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "☕"
    ],
    "features": "嘉義縣番路鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_191",
    "name": "一品咖啡莊園",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "梅山鄉",
    "address": "嘉義縣梅山鄉瑞峰村生毛樹",
    "phone": "(05) 250-1111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%B8%80%E5%93%81%E5%92%96%E5%95%A1%E8%8E%8A%E5%9C%92&authuser=1",
    "tags": [
      "手沖咖啡",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🌿",
      "🍰"
    ],
    "features": "嘉義縣梅山鄉人氣口碑咖啡名店，主打手沖咖啡、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_192",
    "name": "霧裡村 Tea & Cafe",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "梅山鄉",
    "address": "嘉義縣梅山鄉太和村",
    "phone": "0912-999-555",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9C%A7%E8%A3%A1%E6%9D%91&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "☕"
    ],
    "features": "嘉義縣梅山鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_193",
    "name": "綠盈牧場 景觀咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "中埔鄉",
    "address": "嘉義縣中埔鄉鹽館村4鄰2-3號",
    "phone": "(05) 253-8505",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%B6%A0%E7%9B%88%E7%89%A7%E5%A0%B4&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "嘉義縣中埔鄉人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_194",
    "name": "佐登妮絲城堡 景觀咖啡",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "大林鎮",
    "address": "嘉義縣大林鎮大埔美園區三路11號",
    "phone": "(04) 2291-7296",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%BD%90%E7%99%BB%E5%A6%AE%E7%B5%B2%E5%9F%8E%E5%A0%A1&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🗣️"
    ],
    "features": "嘉義縣大林鎮人氣口碑咖啡名店，主打採光超好、小孩友善、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_195",
    "name": "老楊方城市 咖啡館",
    "city": "嘉義縣",
    "city_en": "Chiayi County",
    "district": "大林鎮",
    "address": "嘉義縣大林鎮大埔美園區五路3號",
    "phone": "(05) 295-0520",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%80%81%E6%A5%8A%E6%96%B9%E5%9F%8E%E5%B8%82&authuser=1",
    "tags": [
      "小孩友善",
      "甜點好吃",
      "適合聊天"
    ],
    "tagEmojis": [
      "👶",
      "🍰",
      "🗣️"
    ],
    "features": "嘉義縣大林鎮人氣口碑咖啡名店，主打小孩友善、甜點好吃、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_196",
    "name": "窄門咖啡 Narrow Door Cafe",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區南門路67號2樓",
    "phone": "(06) 221-0508",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%AA%84%E9%96%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_197",
    "name": "秘氏咖啡 台南店",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區國華街三段123-160號",
    "phone": "0935-393-853",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A7%98%E6%B0%8F%E5%92%96%E5%95%A1+%E5%8F%B0%E5%8D%97&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_198",
    "name": "甘單咖啡",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區民權路二段4巷13號",
    "phone": "(06) 222-5919",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%94%98%E5%96%AE%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🐶"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_199",
    "name": "StableNice BLDG. 原味咖啡",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區南寧街83巷9號",
    "phone": "(06) 214-7060",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=StableNice+BLDG&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "☕"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打採光超好、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_200",
    "name": "Kadoya 喫茶店",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "東區",
    "address": "台南市東區樹林街一段36號",
    "phone": "(06) 200-3434",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Kadoya%E5%96%AB%E8%8C%B6%E5%BA%97&authuser=1",
    "tags": [
      "甜點好吃",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🍰",
      "🌿",
      "☕"
    ],
    "features": "台南市東區人氣口碑咖啡名店，主打甜點好吃、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_201",
    "name": "漫茶／漫咖啡 旭峯號",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區中山路79巷6號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%AD%E5%B3%AF%E8%99%9F&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_202",
    "name": "Barista Ray Coffee",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區友愛街22號",
    "phone": "0916-513-746",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Barista+Ray+Coffee&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "☀️"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_203",
    "name": "沼澤 marsh",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區西己路75巷7號2樓",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B2%BC%E6%BE%A4marsh&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "🌿"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打甜點好吃、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_204",
    "name": "窟仔kula 咖啡酒吧",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區忠義路二段158巷13號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%AA%9F%E4%BB%94kula&authuser=1",
    "tags": [
      "店家可喝酒",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🍷",
      "🌿",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打店家可喝酒、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_205",
    "name": "PARIPARI apt. 咖啡",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區忠義路二段158巷9號",
    "phone": "(06) 221-3200",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=PARIPARI+apt&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_206",
    "name": "Room A 深夜圖書咖啡",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區康樂街21號3樓",
    "phone": "(06) 220-9797",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Room+A+%E5%8F%B0%E5%8D%97&authuser=1",
    "tags": [
      "有插頭",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☀️",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打有插頭、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_207",
    "name": "錫鼓 Tin Drum",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區開山路35巷39巷",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%8C%AB%E9%BC%93TinDrum&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "台南市中西區人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_208",
    "name": "深藍咖啡館 旗艦店",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "安平區",
    "address": "台南市安平區建平路335號",
    "phone": "(06) 293-3338",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B7%B1%E8%97%8D%E5%92%96%E5%95%A1%E9%A4%A8%E6%97%97%E8%89%A6%E5%BA%97&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "👶"
    ],
    "features": "台南市安平區人氣口碑咖啡名店，主打甜點好吃、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_209",
    "name": "木溪 Merci Kitchen 司康咖啡",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "中西區",
    "address": "台南市中西區郡緯街7號",
    "phone": "(06) 222-8672",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=木溪+Merci+Kitchen+台南",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "台南老宅英式優雅司康專門咖啡館！每日出爐多種現烤手工司康與頂級果醬，搭配精選高山紅茶與手沖精品咖啡。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_210",
    "name": "島夫手沖咖啡",
    "city": "台南市",
    "city_en": "Tainan",
    "district": "北區",
    "address": "台南市北區自強街",
    "phone": "0988-123-321",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B3%B6%E5%A4%AB%E6%89%8B%E6%B2%96%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🌿",
      "🍰"
    ],
    "features": "台南市北區人氣口碑咖啡名店，主打手沖咖啡、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_211",
    "name": "隄諾諾咖啡 Tsubasa Coffee",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鼓山區",
    "address": "高雄市鼓山區蓬萊路99號（棧貳庫）",
    "phone": "(07) 531-8568",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A3%A7%E8%B2%B3%E5%BA%AB%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "高雄市鼓山區人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_212",
    "name": "書店喫茶 一二三亭",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鼓山區",
    "address": "高雄市鼓山區鼓元街4號2樓",
    "phone": "(07) 531-0330",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9B%B8%E5%BA%97%E5%96%AB%E8%8C%B6%E4%B8%80%E4%BA%8C%E4%B8%89%E4%BA%AD&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "高雄市鼓山區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_213",
    "name": "海山醬 景觀咖啡",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "旗津區",
    "address": "高雄市旗津區旗津三路900號",
    "phone": "0938-123-789",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%97%E6%B4%A5%E6%B5%B7%E6%99%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "高雄市旗津區人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_214",
    "name": "若生 靜巷咖啡",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "前鎮區",
    "address": "高雄市前鎮區桂林街58巷8號",
    "phone": "(07) 334-5678",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8B%A5%E7%94%9F%E9%9D%9C%E5%B7%B7&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "高雄市前鎮區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_215",
    "name": "銀座聚場 House & Cafe",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鹽埕區",
    "address": "高雄市鹽埕區五福四路260巷8號",
    "phone": "(07) 521-5360",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%8A%80%E5%BA%A7%E8%81%9A%E5%A0%B4&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "高雄市鹽埕區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_216",
    "name": "早頓小室",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鼓山區",
    "address": "高雄市鼓山區安榮街142號",
    "phone": "(07) 555-5555",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A9%E9%A0%93%E5%B0%8F%E5%AE%A4&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "高雄市鼓山區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_217",
    "name": "Shoreline Coffee & Roaster 燈塔咖啡",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "旗津區",
    "address": "高雄市旗津區旗下巷34號",
    "phone": "0913-907-793",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Shoreline+Coffee+旗後燈塔",
    "tags": [
      "有插頭",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🔌",
      "☀️",
      "👶"
    ],
    "features": "高雄旗後燈塔頂部純白海景第一排咖啡！坐擁360度高雄港與大船出入無敵夕陽景觀，手沖淺焙單品與特調冷萃極具口碑。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_218",
    "name": "神諭咖啡 Oracle Coffee",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "新興區",
    "address": "高雄市新興區大同一路103號",
    "phone": "(07) 282-6668",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A5%9E%E8%AB%AD%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "高雄市新興區人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_219",
    "name": "二和珍日式老屋咖啡",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鹽埕區",
    "address": "高雄市鹽埕區新樂街",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B9%BD%E5%9F%95%E8%80%81%E5%B1%8B%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "高雄市鹽埕區人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_220",
    "name": "山男咖啡 高雄分號",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鼓山區",
    "address": "高雄市鼓山區柴山大路",
    "phone": "0988-555-123",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9F%B4%E5%B1%B1%E5%B1%B1%E7%94%B7%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "高雄市鼓山區人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_221",
    "name": "海岸咖啡 大自然",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "鼓山區",
    "address": "高雄市鼓山區柴山大路103號",
    "phone": "0910-891-888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9F%B4%E5%B1%B1%E6%B5%B7%E5%B2%B8%E5%92%96%E5%95%A1%E5%A4%A7%E8%87%AA%E7%84%B6&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "高雄市鼓山區人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_222",
    "name": "遙遙相望 Yangone cafe",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "新興區",
    "address": "高雄市新興區中正三路38-1號",
    "phone": "(07) 236-0838",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%81%99%E9%81%99%E7%9B%B8%E6%9C%9B&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "高雄市新興區人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_223",
    "name": "Kyoto 宇治抹茶珈琲",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "苓雅區",
    "address": "高雄市苓雅區自強三路",
    "phone": "(07) 269-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%AB%98%E9%9B%84%E5%AE%87%E6%B2%BB%E6%8A%B9%E8%8C%B6&authuser=1",
    "tags": [
      "甜點好吃",
      "手沖咖啡",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🍰",
      "☕",
      "🌿"
    ],
    "features": "高雄市苓雅區人氣口碑咖啡名店，主打甜點好吃、手沖咖啡、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_224",
    "name": "萊咖啡 Light Cafe",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "左營區",
    "address": "高雄市左營區博愛二路",
    "phone": "(07) 556-9999",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%90%8A%E5%92%96%E5%95%A1+%E5%B7%A6%E7%87%9F&authuser=1",
    "tags": [
      "有插頭",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🔌",
      "☀️",
      "🗣️"
    ],
    "features": "高雄市左營區人氣口碑咖啡名店，主打有插頭、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_225",
    "name": "步道咖啡 Cafe Strada",
    "city": "高雄市",
    "city_en": "Kaohsiung",
    "district": "苓雅區",
    "address": "高雄市苓雅區中正二路67號",
    "phone": "(07) 223-1881",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%AD%A5%E9%81%93%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "☕"
    ],
    "features": "高雄市苓雅區人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_226",
    "name": "山男咖啡 山海一線",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮紅柴坑2-9號",
    "phone": "0905-640-911",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E7%94%B7%E5%92%96%E5%95%A1+%E6%81%86%E6%98%A5&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_227",
    "name": "日日旅海 Ocean Cafe",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "滿州鄉",
    "address": "屏東縣滿州鄉興海路33號",
    "phone": "0933-216-019",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E6%97%A5%E6%97%85%E6%B5%B7&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "屏東縣滿州鄉人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_228",
    "name": "海龜咖啡 SeaTurtle Cafe",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮萬里路18-3號",
    "phone": "0988-341-555",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B5%B7%E9%BE%9C%E5%92%96%E5%95%A1+%E8%90%AC%E9%87%8C%E6%A1%90&authuser=1",
    "tags": [
      "海景景觀",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "🍰",
      "🐶"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打海景景觀、甜點好吃、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_229",
    "name": "肥春號 Fatchun Cafe",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮糠林南路15號",
    "phone": "(08) 889-9855",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%82%A5%E6%98%A5%E8%99%9F&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_230",
    "name": "波波廚房 Kitchen & Cafe",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮光明路88號",
    "phone": "(08) 889-6575",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B3%A2%E6%B3%A2%E5%BB%9A%E6%88%BF&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "👶"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_231",
    "name": "樹夏飲事",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮恆西路12-21號",
    "phone": "0928-568-099",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A8%B9%E5%A4%8F%E9%A3%B2%E4%BA%8B&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🐶"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打植栽老宅、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_232",
    "name": "伯虎在旗樓",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮中山路48號2樓",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%BC%AF%E8%99%8E%E5%9C%A8%E6%97%97%E6%A8%93&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_233",
    "name": "Under Star Lab 草地星空咖啡",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "滿州鄉",
    "address": "屏東縣滿州鄉滿州村",
    "phone": "0910-123-456",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8D%89%E5%9C%B0%E6%98%9F%E7%A9%BA%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🐶",
      "👶"
    ],
    "features": "屏東縣滿州鄉人氣口碑咖啡名店，主打採光超好、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_234",
    "name": "美菊咖啡麵包",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "屏東市",
    "address": "屏東縣屏東市公園路66號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%BE%8E%E8%8F%8A%E5%92%96%E5%95%A1%E9%BA%B5%E5%8C%85&authuser=1",
    "tags": [
      "採光超好",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "🌿"
    ],
    "features": "屏東縣屏東市人氣口碑咖啡名店，主打採光超好、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_235",
    "name": "驛前大安森林咖啡",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "竹田鄉",
    "address": "屏東縣竹田鄉豐明路",
    "phone": "(08) 771-2345",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%AB%B9%E7%94%B0%E9%A9%9B%E5%89%8D%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "屏東縣竹田鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_236",
    "name": "南風微醺 餐酒咖啡",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮恆南路",
    "phone": "(08) 888-2233",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8D%97%E9%A2%A8%E5%BE%AE%E9%86%BA+%E6%81%86%E6%98%A5&authuser=1",
    "tags": [
      "店家可喝酒",
      "甜點好吃",
      "適合聊天"
    ],
    "tagEmojis": [
      "🍷",
      "🍰",
      "🗣️"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打店家可喝酒、甜點好吃、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_237",
    "name": "水明漾活蝦景觀咖啡",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "里港鄉",
    "address": "屏東縣里港鄉里嶺路2-10號",
    "phone": "0917-159-088",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B0%B4%E6%98%8E%E6%BC%BE%E6%B4%BB%E8%9D%A6%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "屏東縣里港鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_238",
    "name": "小灣海景露天酒吧咖啡",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "恆春鎮",
    "address": "屏東縣恆春鎮墾丁路6號",
    "phone": "(08) 886-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E7%81%A3%E6%B5%B7%E6%99%AF%E9%9C%B2%E5%A4%A9%E9%85%92%E5%90%A7&authuser=1",
    "tags": [
      "海景景觀",
      "店家可喝酒",
      "採光超好"
    ],
    "tagEmojis": [
      "🌊",
      "🍷",
      "☀️"
    ],
    "features": "屏東縣恆春鎮人氣口碑咖啡名店，主打海景景觀、店家可喝酒、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_239",
    "name": "春日廚房 咖啡",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "春日鄉",
    "address": "屏東縣春日鄉春日村",
    "phone": "(08) 878-3798",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%98%A5%E6%97%A5%E5%BB%9A%E6%88%BF&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "屏東縣春日鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_240",
    "name": "勝利星村 康定拾八",
    "city": "屏東縣",
    "city_en": "Pingtung",
    "district": "屏東市",
    "address": "屏東縣屏東市康定街18號",
    "phone": "(08) 766-6882",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BA%B7%E5%AE%9A%E6%8B%BE%E5%85%AB+%E5%8B%9D%E5%88%A9%E6%98%9F%E6%9D%91&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "屏東縣屏東市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_241",
    "name": "滿山望海",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "頭城鎮",
    "address": "宜蘭縣頭城鎮大坑路197號",
    "phone": "(03) 977-6788",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%BB%BF%E5%B1%B1%E6%9C%9B%E6%B5%B7&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🍰"
    ],
    "features": "宜蘭縣頭城鎮人氣口碑咖啡名店，主打海景景觀、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_242",
    "name": "黑宅咖啡 BLACK HOUSE",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "頭城鎮",
    "address": "宜蘭縣頭城鎮三和路616巷235弄47號",
    "phone": "(03) 988-7966",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%BB%91%E5%AE%85%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "田園稻浪",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🌾",
      "☕"
    ],
    "features": "宜蘭縣頭城鎮人氣口碑咖啡名店，主打採光超好、田園稻浪、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_243",
    "name": "灆咖啡 Seaview Coffee",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "頭城鎮",
    "address": "宜蘭縣頭城鎮協天路636巷6-2號",
    "phone": "(03) 977-6966",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%81%86%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "宜蘭縣頭城鎮人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_244",
    "name": "日光私廚 景觀咖啡",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "冬山鄉",
    "address": "宜蘭縣冬山鄉寶福路372號",
    "phone": "(03) 959-5685",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E5%85%89%E7%A7%81%E5%BB%9A&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🐶"
    ],
    "features": "宜蘭縣冬山鄉人氣口碑咖啡名店，主打採光超好、小孩友善、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_245",
    "name": "小溪邊咖啡",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "頭城鎮",
    "address": "宜蘭縣頭城鎮頂埔路一段178巷22號",
    "phone": "0966-512-585",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E6%BA%AA%E9%82%8A%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🐶"
    ],
    "features": "宜蘭縣頭城鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_246",
    "name": "蒔花咖啡 Daily Blossom",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "礁溪鄉",
    "address": "宜蘭縣礁溪鄉淇武蘭路3-35號",
    "phone": "(03) 988-7228",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%92%94%E8%8A%B1%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "🌿"
    ],
    "features": "宜蘭縣礁溪鄉人氣口碑咖啡名店，主打採光超好、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_247",
    "name": "定邦咖啡",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "礁溪鄉",
    "address": "宜蘭縣礁溪鄉白鵝村白鵝路35號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%AE%9A%E9%82%A6%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "宜蘭縣礁溪鄉人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_248",
    "name": "微酵食堂 咖啡",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "宜蘭市",
    "address": "宜蘭縣宜蘭市神農路一段",
    "phone": "(03) 932-1111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%AE%E9%85%B5%E9%A3%9F%E5%A0%82&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "宜蘭縣宜蘭市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_249",
    "name": "光宅 238",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "員山鄉",
    "address": "宜蘭縣員山鄉溪洲路140巷32號",
    "phone": "(03) 922-1238",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%85%89%E5%AE%85238&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "宜蘭縣員山鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_250",
    "name": "逗走複合創意空間 咖啡",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "礁溪鄉",
    "address": "宜蘭縣礁溪鄉漳福路53號",
    "phone": "(03) 928-8816",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%80%97%E8%B5%B0%E8%A4%87%E5%90%88%E5%89%B5%E6%84%8F%E7%A9%BA%E9%96%93&authuser=1",
    "tags": [
      "採光超好",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🐶",
      "👶"
    ],
    "features": "宜蘭縣礁溪鄉人氣口碑咖啡名店，主打採光超好、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_251",
    "name": "與潮珈琲",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "南澳鄉",
    "address": "宜蘭縣南澳鄉蘇花路二段",
    "phone": "0988-123-555",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%88%87%E6%BD%AE%E7%8F%88%E7%90%B2+%E5%8D%97%E6%BE%B3&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "宜蘭縣南澳鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_252",
    "name": "九號咖啡 外澳館",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "頭城鎮",
    "address": "宜蘭縣頭城鎮濱海路二段6號",
    "phone": "(03) 978-9799",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%B9%9D%E8%99%9F%E5%92%96%E5%95%A1%E5%A4%96%E6%BE%B3%E9%A4%A8&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "宜蘭縣頭城鎮人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_253",
    "name": "美美子みみこ 羅東文化工場店",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "羅東鎮",
    "address": "宜蘭縣羅東鎮純精路一段96號",
    "phone": "(03) 955-0008",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%BE%8E%E7%BE%8E%E5%AD%90%E7%BE%85%E6%9D%B1&authuser=1",
    "tags": [
      "甜點好吃",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🍰",
      "☀️",
      "👶"
    ],
    "features": "宜蘭縣羅東鎮人氣口碑咖啡名店，主打甜點好吃、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_254",
    "name": "鳴草咖啡自家烘焙館",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "宜蘭市",
    "address": "宜蘭縣宜蘭市碧霞街20-1號",
    "phone": "0913-017-331",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B3%B4%E8%8D%89%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "宜蘭縣宜蘭市人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_255",
    "name": "CAFÉ SLOW SO",
    "city": "宜蘭縣",
    "city_en": "Yilan",
    "district": "蘇澳鎮",
    "address": "宜蘭縣蘇澳鎮蘇東中路",
    "phone": "(03) 995-1122",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=CAFESLOWSO&authuser=1",
    "tags": [
      "海景景觀",
      "手沖咖啡",
      "採光超好"
    ],
    "tagEmojis": [
      "🌊",
      "☕",
      "☀️"
    ],
    "features": "宜蘭縣蘇澳鎮人氣口碑咖啡名店，主打海景景觀、手沖咖啡、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_256",
    "name": "原野牧場 太平洋海景咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "新城鄉",
    "address": "花蓮縣新城鄉大漢村七星街9號",
    "phone": "(03) 822-6035",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8E%9F%E9%87%8E%E7%89%A7%E5%A0%B4&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🍰"
    ],
    "features": "花蓮縣新城鄉人氣口碑咖啡名店，主打海景景觀、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_257",
    "name": "海崖谷 Hayaku 景觀咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "壽豐鄉",
    "address": "花蓮縣壽豐鄉鹽寮村大坑51-5號",
    "phone": "(03) 867-1314",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B5%B7%E5%B4%96%E8%B0%B7&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "花蓮縣壽豐鄉人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_258",
    "name": "山度空間",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "壽豐鄉",
    "address": "花蓮縣壽豐鄉鹽寮村大坑57號",
    "phone": "0963-033-021",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E5%BA%A6%E7%A9%BA%E9%96%93+%E8%8A%B1%E8%93%AE&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "花蓮縣壽豐鄉人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_259",
    "name": "森山舍 morning mountain",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市林政街8-1號",
    "phone": "(03) 835-1987",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A3%AE%E5%B1%B1%E8%88%8D&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "花蓮縣花蓮市人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_260",
    "name": "Gioconda 珈琲館",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市林榮街58巷1號",
    "phone": "0988-234-758",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%8F%88%E7%90%B2%E9%A4%A8Gioconda&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "植栽老宅"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🌿"
    ],
    "features": "花蓮縣花蓮市人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_261",
    "name": "晤子咖啡 Ngchus cafe",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市建中街11號",
    "phone": "(03) 833-4378",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%99%A4%E5%AD%90%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "寵物友善",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🐶",
      "🍰",
      "☕"
    ],
    "features": "花蓮縣花蓮市人氣口碑咖啡名店，主打寵物友善、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_262",
    "name": "項鍊海岸工作室 咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "豐濱鄉",
    "address": "花蓮縣豐濱鄉石梯坪53-1號",
    "phone": "0916-547-580",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%A0%85%E9%8D%8A%E6%B5%B7%E5%B2%B8%E5%B7%A5%E4%BD%9C%E5%AE%A4&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🌿"
    ],
    "features": "花蓮縣豐濱鄉人氣口碑咖啡名店，主打海景景觀、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_263",
    "name": "實心豆豆 手作烘焙咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市和平路",
    "phone": "(03) 835-0000",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%AF%A6%E5%BF%83%E8%B1%86%E8%B1%86&authuser=1",
    "tags": [
      "手沖咖啡",
      "甜點好吃",
      "有插頭"
    ],
    "tagEmojis": [
      "☕",
      "🍰",
      "🔌"
    ],
    "features": "花蓮縣花蓮市人氣口碑咖啡名店，主打手沖咖啡、甜點好吃、有插頭。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_264",
    "name": "半寓咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市成功街316號",
    "phone": "0911-763-747",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8D%8A%E5%AF%93%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "花蓮縣花蓮市人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_265",
    "name": "浪慢咖啡 (Waves Cafe)",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "壽豐鄉",
    "address": "花蓮縣壽豐鄉鹽寮村大橋24-1號",
    "phone": "0918-616-911",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=浪慢咖啡+花蓮",
    "tags": [
      "海景景觀",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "🍰",
      "👶"
    ],
    "features": "花蓮鹽寮海岸公路第一排浪漫海景咖啡！設有無敵太平洋望海鞦韆與戶外階梯看海座席，聽濤吹海風極致放鬆。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_266",
    "name": "昭和58 喫茶店",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市成功街306號",
    "phone": "(03) 835-7371",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%98%AD%E5%92%8C58&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☕"
    ],
    "features": "花蓮縣花蓮市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_267",
    "name": "珈琲花 c floral style",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "花蓮市",
    "address": "花蓮縣花蓮市忠孝街79號",
    "phone": "(03) 832-5172",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=珈琲花+花蓮",
    "tags": [
      "採光超好",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "☀️",
      "🍰",
      "☕"
    ],
    "features": "花蓮舊城區日式木造乾燥花老屋咖啡！溫暖木質調與療癒店貓，提供深焙職人手沖與招牌焦糖肉桂捲。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_268",
    "name": "花蓮星巴克 洄瀾貨櫃門市",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "吉安鄉",
    "address": "花蓮縣吉安鄉南濱路一段505號",
    "phone": "(03) 842-0014",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8A%B1%E8%93%AE%E6%B4%84%E7%80%BE%E8%B2%A8%E6%AB%83%E6%98%9F%E5%B7%B4%E5%85%8B&authuser=1",
    "tags": [
      "採光超好",
      "有插頭",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🔌",
      "👶"
    ],
    "features": "花蓮縣吉安鄉人氣口碑咖啡名店，主打採光超好、有插頭、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_269",
    "name": "砂卡礑山月村 景觀咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "秀林鄉",
    "address": "花蓮縣秀林鄉富世村231-1號",
    "phone": "(03) 861-0111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%A0%82%E5%8D%A1%E7%A4%91%E5%B1%B1%E6%9C%88%E6%9D%91%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🗣️"
    ],
    "features": "花蓮縣秀林鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_270",
    "name": "梯田山森林咖啡",
    "city": "花蓮縣",
    "city_en": "Hualien",
    "district": "壽豐鄉",
    "address": "花蓮縣壽豐鄉豐山村山邊路二段",
    "phone": "0960-508-595",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A2%AF%E7%94%B0%E5%B1%B1%E6%A3%AE%E6%9E%97%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "店家可喝酒"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍷"
    ],
    "features": "花蓮縣壽豐鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、店家可喝酒。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_271",
    "name": "小魚兒的家 海景咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "卑南鄉",
    "address": "台東縣卑南鄉富山村杉原32號",
    "phone": "0913-916-875",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E9%AD%9A%E5%85%92%E7%9A%84%E5%AE%B6&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "台東縣卑南鄉人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_272",
    "name": "逐浪海景咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "卑南鄉",
    "address": "台東縣卑南鄉富山村杉原24號",
    "phone": "(08) 928-1158",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%80%90%E6%B5%AA%E6%B5%B7%E6%99%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "台東縣卑南鄉人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_273",
    "name": "可可娜咖啡 Coconut Cafe",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "卑南鄉",
    "address": "台東縣卑南鄉杉原22號",
    "phone": "(08) 928-1192",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8F%AF%E5%8F%AF%E5%A8%9C%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "台東縣卑南鄉人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_274",
    "name": "恩娜比亞咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "卑南鄉",
    "address": "台東縣卑南鄉美農村斑隘",
    "phone": "0932-662-899",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%81%A9%E5%A8%9C%E6%AF%94%E4%BA%9E%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "寵物友善"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "🐶"
    ],
    "features": "台東縣卑南鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_275",
    "name": "金尊漁港 衝浪海景咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "東河鄉",
    "address": "台東縣東河鄉金尊路",
    "phone": "(08) 989-6441",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%87%91%E5%B0%8A%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "☕"
    ],
    "features": "台東縣東河鄉人氣口碑咖啡名店，主打海景景觀、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_276",
    "name": "薄荷巴黎 Books Cafe",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "台東市",
    "address": "台東縣台東市傳廣路234巷11號",
    "phone": "(08) 935-1772",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%96%84%E8%8D%B7%E5%B7%B4%E9%BB%8EBooksCafe&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "台東縣台東市人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_277",
    "name": "出山咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "太麻里鄉",
    "address": "台東縣太麻里鄉大溪路",
    "phone": "0988-123-111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%87%BA%E5%B1%B1%E5%92%96%E5%95%A1+%E5%8F%B0%E6%9D%B1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "☕"
    ],
    "features": "台東縣太麻里鄉人氣口碑咖啡名店，主打海景景觀、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_278",
    "name": "都蘭海角咖啡 Dulan Cape Cafe",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "東河鄉",
    "address": "台東縣東河鄉都蘭村舊部路47號",
    "phone": "0903-262-923",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%83%BD%E8%98%AD%E6%B5%B7%E8%A7%92%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "寵物友善",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "🐶",
      "👶"
    ],
    "features": "台東縣東河鄉人氣口碑咖啡名店，主打海景景觀、寵物友善、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_279",
    "name": "草民 Tsao Min",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "台東市",
    "address": "台東縣台東市強國街256巷23號",
    "phone": "(08) 934-3157",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8D%89%E6%B0%91TsaoMin&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "台東縣台東市人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_280",
    "name": "Bike De Koffie 米貝果手沖咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "池上鄉",
    "address": "台東縣池上鄉鐵花路14號",
    "phone": "0980-868-945",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Bike+De+Koffie+池上",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "有插頭"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🔌"
    ],
    "features": "池上火車站旁老屋改裝人氣手作咖啡！嚴選池上好米研發外酥內Q的米貝果，佐在地紅烏龍手沖與精品美式。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_281",
    "name": "星龍花園 景觀咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "長濱鄉",
    "address": "台東縣長濱鄉樟原村118-20號",
    "phone": "0983-638-180",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%98%9F%E9%BE%8D%E8%8A%B1%E5%9C%92&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🌿"
    ],
    "features": "台東縣長濱鄉人氣口碑咖啡名店，主打海景景觀、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_282",
    "name": "幸福綠灣海景咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "成功鎮",
    "address": "台東縣成功鎮芝田路",
    "phone": "0912-345-890",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B9%B8%E7%A6%8F%E7%B6%A0%E7%81%A3%E6%B5%B7%E6%99%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "台東縣成功鎮人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_283",
    "name": "大武山生態館 景觀咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "太麻里鄉",
    "address": "台東縣太麻里鄉大王村",
    "phone": "(08) 978-0975",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%A4%A7%E6%AD%A6%E5%B1%B1%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "☕"
    ],
    "features": "台東縣太麻里鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_284",
    "name": "墾墨咖啡 Community Cafe",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "台東市",
    "address": "台東縣台東市更生路1208號",
    "phone": "(08) 922-7998",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%A2%BE%E5%A2%A8%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "有插頭",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🔌",
      "🍰",
      "☕"
    ],
    "features": "台東縣台東市人氣口碑咖啡名店，主打有插頭、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_285",
    "name": "山角頂咖啡",
    "city": "台東縣",
    "city_en": "Taitung",
    "district": "鹿野鄉",
    "address": "台東縣鹿野鄉高台路",
    "phone": "0932-111-456",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%B9%BF%E9%87%8E%E5%B1%B1%E8%A7%92%E9%A0%82%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "採光超好",
      "植栽老宅",
      "小孩友善"
    ],
    "tagEmojis": [
      "☀️",
      "🌿",
      "👶"
    ],
    "features": "台東縣鹿野鄉人氣口碑咖啡名店，主打採光超好、植栽老宅、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_286",
    "name": "及林春咖啡館 GillyPrimavera",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "湖西鄉",
    "address": "澎湖縣湖西鄉林投村1-3號（隘門沙灘旁）",
    "phone": "(06) 992-3639",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8F%8A%E6%9E%97%E6%98%A5%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "澎湖縣湖西鄉人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_287",
    "name": "白灣景觀餐廳 咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "湖西鄉",
    "address": "澎湖縣湖西鄉白坑村林投13-5號",
    "phone": "(06) 992-0036",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%99%BD%E7%81%A3%E6%99%AF%E8%A7%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "澎湖縣湖西鄉人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_288",
    "name": "吹吹風精品咖啡 碼頭旗艦店",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市臨海路6-1號2樓",
    "phone": "(06) 927-5868",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%90%B9%E5%90%B9%E9%A2%A8%E7%B2%BE%E5%93%81%E5%92%96%E5%95%A1+%E7%A2%BC%E9%A0%AD%E6%97%97%E8%89%A6%E5%BA%97&authuser=1",
    "tags": [
      "海景景觀",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "☕",
      "🍰"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打海景景觀、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_289",
    "name": "蒙地卡羅咖啡館",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市民生路17-4號",
    "phone": "(06) 926-7877",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%92%99%E5%9C%B0%E5%8D%A1%E7%BE%85%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_290",
    "name": "二崁一號陳家仙人掌果汁咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "西嶼鄉",
    "address": "澎湖縣西嶼鄉二崁村1號",
    "phone": "0933-695-806",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%BA%8C%E5%B4%81%E4%B8%80%E8%99%9F%E9%99%B3%E5%AE%B6&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "澎湖縣西嶼鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_291",
    "name": "半日閑下午茶 景觀咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "白沙鄉",
    "address": "澎湖縣白沙鄉鎮海村71號",
    "phone": "(06) 993-1366",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8D%8A%E6%97%A5%E9%96%91%E4%B8%8B%E5%8D%88%E8%8C%B6&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "澎湖縣白沙鄉人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_292",
    "name": "牧羊人咖啡館",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "西嶼鄉",
    "address": "澎湖縣西嶼鄉二崁村12號",
    "phone": "(06) 998-3565",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E7%89%A7%E7%BE%8A%E4%BA%BA%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "澎湖縣西嶼鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_293",
    "name": "巴里峇里海景露天咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市山水里",
    "phone": "0932-999-888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B1%B1%E6%B0%B4%E6%B2%99%E7%81%98%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_294",
    "name": "澎湖老街 麗洋手作蛋糕咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市中央街6號",
    "phone": "(06) 926-7707",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%BA%97%E6%B4%8B%E6%89%8B%E4%BD%9C%E8%9B%8B%E7%B3%95&authuser=1",
    "tags": [
      "甜點好吃",
      "植栽老宅",
      "小孩友善"
    ],
    "tagEmojis": [
      "🍰",
      "🌿",
      "👶"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打甜點好吃、植栽老宅、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_295",
    "name": "原豆工坊 自家烘焙咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市三多路",
    "phone": "(06) 926-0000",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%BE%8E%E6%B9%96%E5%8E%9F%E8%B1%86%E5%B7%A5%E5%9D%8A&authuser=1",
    "tags": [
      "手沖咖啡",
      "有插頭",
      "甜點好吃"
    ],
    "tagEmojis": [
      "☕",
      "🔌",
      "🍰"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打手沖咖啡、有插頭、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_296",
    "name": "漁翁島燈塔 海景咖啡站",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "西嶼鄉",
    "address": "澎湖縣西嶼鄉外垵村195號",
    "phone": "(06) 998-1766",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%BC%81%E7%BF%81%E5%B3%B6%E7%87%88%E5%A1%94&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "☕"
    ],
    "features": "澎湖縣西嶼鄉人氣口碑咖啡名店，主打海景景觀、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_297",
    "name": "小門嶼 鯨魚洞海景仙人掌咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "西嶼鄉",
    "address": "澎湖縣西嶼鄉小門村11號",
    "phone": "(06) 998-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E9%96%80%E9%AF%A8%E9%AD%9A%E6%B4%9E%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🍰"
    ],
    "features": "澎湖縣西嶼鄉人氣口碑咖啡名店，主打海景景觀、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_298",
    "name": "七美 芳子海景咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "七美鄉",
    "address": "澎湖縣七美鄉南港村",
    "phone": "0932-111-222",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E4%B8%83%E7%BE%8E%E6%B5%B7%E6%99%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🗣️"
    ],
    "features": "澎湖縣七美鄉人氣口碑咖啡名店，主打海景景觀、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_299",
    "name": "蒔花微風 景觀咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市鎖港里",
    "phone": "(06) 995-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%8E%96%E6%B8%AF%E6%B5%B7%E6%99%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_300",
    "name": "風櫃洞 幽浮聽濤咖啡",
    "city": "澎湖縣",
    "city_en": "Penghu",
    "district": "馬公市",
    "address": "澎湖縣馬公市風櫃里",
    "phone": "0988-777-666",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%A2%A8%E6%AB%83%E6%B4%9E%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🗣️"
    ],
    "features": "澎湖縣馬公市人氣口碑咖啡名店，主打海景景觀、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_301",
    "name": "愜意甜點工作室 咖啡",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金沙鎮",
    "address": "金門縣金沙鎮后浦頭60號",
    "phone": "(08) 235-3585",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%84%9C%E6%84%8F%E7%94%9C%E9%BB%9E%E5%B7%A5%E4%BD%9C%E5%AE%A4&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "採光超好"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "☀️"
    ],
    "features": "金門縣金沙鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、採光超好。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_302",
    "name": "古崗樓 湖景咖啡",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金城鎮",
    "address": "金門縣金城鎮古崗村",
    "phone": "(08) 231-3100",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8F%A4%E5%B4%97%E6%A8%93%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "金門縣金城鎮人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_303",
    "name": "Lin+Coffee",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金城鎮",
    "address": "金門縣金城鎮民生路43號",
    "phone": "(08) 232-2281",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=Lin+Coffee+%E9%87%91%E9%96%80&authuser=1",
    "tags": [
      "有插頭",
      "甜點好吃",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🔌",
      "🍰",
      "☕"
    ],
    "features": "金門縣金城鎮人氣口碑咖啡名店，主打有插頭、甜點好吃、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_304",
    "name": "小島商號",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金城鎮",
    "address": "金門縣金城鎮中興路85號",
    "phone": "(08) 232-8814",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%B0%8F%E5%B3%B6%E5%95%86%E8%99%9F+%E9%87%91%E9%96%80&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🐶"
    ],
    "features": "金門縣金城鎮人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_305",
    "name": "黑屋咖啡 海景第一排",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金湖鎮",
    "address": "金門縣金湖鎮下湖60號",
    "phone": "(08) 233-0851",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%BB%91%E5%B1%8B%E5%92%96%E5%95%A1+%E9%87%91%E9%96%80&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🍰"
    ],
    "features": "金門縣金湖鎮人氣口碑咖啡名店，主打海景景觀、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_306",
    "name": "膩珈琲 Ni Cafe",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金湖鎮",
    "address": "金門縣金湖鎮山外里山外108號",
    "phone": "暫無提供",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%86%A9%E7%8F%88%E7%90%B2&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "金門縣金湖鎮人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_307",
    "name": "隨憶 古厝咖啡",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金寧鄉",
    "address": "金門縣金寧鄉北山村",
    "phone": "0988-123-987",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%87%91%E9%96%80%E5%8C%97%E5%B1%B1%E5%8F%A4%E5%8E%9D%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "金門縣金寧鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_308",
    "name": "微風海戀 露天咖啡",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金寧鄉",
    "address": "金門縣金寧鄉后湖村",
    "phone": "(08) 232-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%AE%E9%A2%A8%E6%B5%B7%E6%88%80%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "寵物友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🐶"
    ],
    "features": "金門縣金寧鄉人氣口碑咖啡名店，主打海景景觀、採光超好、寵物友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_309",
    "name": "阿公ㄟ豆花 咖啡古厝",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金城鎮",
    "address": "金門縣金城鎮模範街",
    "phone": "(08) 232-5888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%A8%A1%E7%AF%84%E8%A1%97%E5%8F%A4%E5%8E%9D%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "👶"
    ],
    "features": "金門縣金城鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_310",
    "name": "浯日咖啡 Our Day",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金湖鎮",
    "address": "金門縣金湖鎮復興西路",
    "phone": "(08) 233-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B5%AF%E6%97%A5%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "有插頭",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🔌",
      "☕",
      "🍰"
    ],
    "features": "金門縣金湖鎮人氣口碑咖啡名店，主打有插頭、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_311",
    "name": "談天樓 眷村咖啡茶點",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金湖鎮",
    "address": "金門縣金湖鎮復興路3號",
    "phone": "(08) 233-2766",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%AB%87%E5%A4%A9%E6%A8%93+%E9%87%91%E9%96%80&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🗣️"
    ],
    "features": "金門縣金湖鎮人氣口碑咖啡名店，主打植栽老宅、甜點好吃、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_312",
    "name": "烈嶼（小金門） 嘉年華冰菓咖啡館",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "烈嶼鄉",
    "address": "金門縣烈嶼鄉西路19-1號",
    "phone": "(08) 236-3123",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%98%89%E5%B9%B4%E8%8F%AF%E5%86%B0%E8%8F%93%E5%AE%A4&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "👶"
    ],
    "features": "金門縣烈嶼鄉人氣口碑咖啡名店，主打植栽老宅、甜點好吃、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_313",
    "name": "水頭得月樓 僑鄉文化咖啡",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金城鎮",
    "address": "金門縣金城鎮前水頭44號",
    "phone": "(08) 232-1100",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%BE%97%E6%9C%88%E6%A8%93%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "👶"
    ],
    "features": "金門縣金城鎮人氣口碑咖啡名店，主打植栽老宅、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_314",
    "name": "良金牧場 音樂咖啡概念館",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金湖鎮",
    "address": "金門縣金湖鎮漁村160號",
    "phone": "(08) 233-5886",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%89%AF%E9%87%91%E7%89%A7%E5%A0%B4&authuser=1",
    "tags": [
      "採光超好",
      "小孩友善",
      "適合聊天"
    ],
    "tagEmojis": [
      "☀️",
      "👶",
      "🗣️"
    ],
    "features": "金門縣金湖鎮人氣口碑咖啡名店，主打採光超好、小孩友善、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_315",
    "name": "風獅爺主題咖啡館",
    "city": "金門縣",
    "city_en": "Kinmen",
    "district": "金沙鎮",
    "address": "金門縣金沙鎮沙美老街",
    "phone": "(08) 235-1234",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B2%99%E7%BE%8E%E8%80%81%E8%A1%97%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☀️",
      "🍰"
    ],
    "features": "金門縣金沙鎮人氣口碑咖啡名店，主打植栽老宅、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_316",
    "name": "刺鳥咖啡書店",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉復興村222號（12據點）",
    "phone": "(08) 362-5170",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%88%BA%E9%B3%A5%E5%92%96%E5%95%A1%E6%9B%B8%E5%BA%97&authuser=1",
    "tags": [
      "海景景觀",
      "植栽老宅",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "🌿",
      "☕"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打海景景觀、植栽老宅、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_317",
    "name": "西尾半島物產店 咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉四維村21號",
    "phone": "(08) 362-3480",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%A5%BF%E5%B0%BE%E5%8D%8A%E5%B3%B6%E7%89%A9%E7%94%A2%E5%BA%97&authuser=1",
    "tags": [
      "海景景觀",
      "植栽老宅",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "🌿",
      "🍰"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打海景景觀、植栽老宅、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_318",
    "name": "夫人的咖啡館",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉四維村夫人村40-1號",
    "phone": "(08) 362-5138",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%A4%AB%E4%BA%BA%E7%9A%84%E5%92%96%E5%95%A1%E9%A4%A8&authuser=1",
    "tags": [
      "海景景觀",
      "植栽老宅",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "🌿",
      "🗣️"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打海景景觀、植栽老宅、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_319",
    "name": "芹壁 鏡沃小吃咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "北竿鄉",
    "address": "連江縣北竿鄉芹壁村75號",
    "phone": "(08) 365-5558",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%8F%A1%E6%B2%83%E5%B0%8F%E5%90%83+%E8%8A%B9%E5%A3%81&authuser=1",
    "tags": [
      "海景景觀",
      "植栽老宅",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "🌿",
      "🗣️"
    ],
    "features": "連江縣北竿鄉人氣口碑咖啡名店，主打海景景觀、植栽老宅、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_320",
    "name": "家適咖啡民宿 Just coffee",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "北竿鄉",
    "address": "連江縣北竿鄉芹壁村56號",
    "phone": "(08) 365-6669",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%AE%B6%E9%81%A9%E5%92%96%E5%95%A1+%E8%8A%B9%E5%A3%81&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🍰"
    ],
    "features": "連江縣北竿鄉人氣口碑咖啡名店，主打海景景觀、採光超好、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_321",
    "name": "日光春和 Dayspring 咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉仁愛村1-1號",
    "phone": "(08) 362-6612",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%97%A5%E5%85%89%E6%98%A5%E5%92%8C&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "植栽老宅"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🌿"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打海景景觀、採光超好、植栽老宅。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_322",
    "name": "小港境 咖啡小館",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉津沙村",
    "phone": "0932-111-789",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B4%A5%E6%B2%99%E8%81%9A%E8%90%BD%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "手沖咖啡",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌿",
      "☕",
      "🍰"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打植栽老宅、手沖咖啡、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_323",
    "name": "東莒 找茶 複合式咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "莒光鄉",
    "address": "連江縣莒光鄉大坪村1號",
    "phone": "(08) 368-8009",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9D%B1%E8%8E%92%E6%89%BE%E8%8C%B6&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🗣️"
    ],
    "features": "連江縣莒光鄉人氣口碑咖啡名店，主打植栽老宅、甜點好吃、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_324",
    "name": "東引 國利豆花 咖啡小站",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "東引鄉",
    "address": "連江縣東引鄉中柳村",
    "phone": "(08) 367-6142",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9D%B1%E5%BC%95%E5%9C%8B%E5%88%A9%E8%B1%86%E8%8A%B1&authuser=1",
    "tags": [
      "植栽老宅",
      "甜點好吃",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌿",
      "🍰",
      "🗣️"
    ],
    "features": "連江縣東引鄉人氣口碑咖啡名店，主打植栽老宅、甜點好吃、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_325",
    "name": "北竿 芹沃咖啡烘焙館",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "北竿鄉",
    "address": "連江縣北竿鄉芹壁村53-8號",
    "phone": "(08) 365-6099",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E8%8A%B9%E6%B2%83%E5%92%96%E5%95%A1%E7%83%98%E7%84%99%E9%A4%A8&authuser=1",
    "tags": [
      "海景景觀",
      "店家可喝酒",
      "甜點好吃"
    ],
    "tagEmojis": [
      "🌊",
      "🍷",
      "🍰"
    ],
    "features": "連江縣北竿鄉人氣口碑咖啡名店，主打海景景觀、店家可喝酒、甜點好吃。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_326",
    "name": "東引 安九宿咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "東引鄉",
    "address": "連江縣東引鄉樂華村",
    "phone": "0988-234-567",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9D%B1%E5%BC%95%E5%AE%89%E4%B9%9D%E5%AE%BF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "☕"
    ],
    "features": "連江縣東引鄉人氣口碑咖啡名店，主打海景景觀、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_327",
    "name": "津沙客棧 老酒咖啡館",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉津沙村61號",
    "phone": "(08) 362-2111",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%B4%A5%E6%B2%99%E8%80%81%E9%85%92%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "植栽老宅",
      "店家可喝酒",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌿",
      "🍷",
      "☕"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打植栽老宅、店家可喝酒、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_328",
    "name": "南竿 雲津茶坊 景觀咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "南竿鄉",
    "address": "連江縣南竿鄉四維村",
    "phone": "(08) 362-5888",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E9%9B%B2%E6%B4%A5%E8%8C%B6%E5%9D%8A&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "手沖咖啡"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "☕"
    ],
    "features": "連江縣南竿鄉人氣口碑咖啡名店，主打海景景觀、採光超好、手沖咖啡。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_329",
    "name": "北竿 鮮美海景咖啡",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "北竿鄉",
    "address": "連江縣北竿鄉塘岐村",
    "phone": "(08) 365-5123",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E5%8C%97%E7%AB%BF%E6%B5%B7%E6%99%AF%E5%92%96%E5%95%A1&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "小孩友善"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "👶"
    ],
    "features": "連江縣北竿鄉人氣口碑咖啡名店，主打海景景觀、採光超好、小孩友善。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.9★",
    "img": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop"
  },
  {
    "id": "cafe_330",
    "name": "東莒 船老大 咖啡雅座",
    "city": "連江縣",
    "city_en": "Matsu - 馬祖",
    "district": "莒光鄉",
    "address": "連江縣莒光鄉大坪村72號",
    "phone": "(08) 368-8022",
    "status": "營業中",
    "mapUrl": "https://maps.google.com/?q=%E6%9D%B1%E8%8E%92%E8%88%B9%E8%80%81%E5%A4%A7&authuser=1",
    "tags": [
      "海景景觀",
      "採光超好",
      "適合聊天"
    ],
    "tagEmojis": [
      "🌊",
      "☀️",
      "🗣️"
    ],
    "features": "連江縣莒光鄉人氣口碑咖啡名店，主打海景景觀、採光超好、適合聊天。氛圍優雅舒適，深受在地旅人好評。",
    "price": "NT$ 120 - 320",
    "rate": "4.8★",
    "img": "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop"
  }
];

// 5.1 全台特色維度 Top 20 口碑名店庫
const CAFE_FEATURE_TOP20 = {
  "🔌 有插頭 (Power Plugs)": [
    "台北休習日",
    "台北鬧咖啡",
    "台北Congrats Café",
    "新北墨憩",
    "基隆丸角",
    "桃園Table2",
    "桃園七步",
    "新竹續日",
    "新竹暗室微光",
    "新竹墨咖啡",
    "台中Hausinc",
    "台中Fleet Street",
    "彰化瘦子",
    "雲林鴻豆王國",
    "嘉義往前",
    "台南Room A",
    "高雄Now & Then",
    "花蓮實心豆豆",
    "台東墾墨",
    "金門Lin+Coffee"
  ],
  "🍰 甜點好吃 (Desserts)": [],
  "☕ 手沖咖啡 (Pour-over)": [
    "台北興波",
    "台北森高砂",
    "台北光景",
    "新北Cafe Hytte",
    "基隆夏隆",
    "新竹一想一響",
    "苗栗Per gram",
    "台中Coffee Stopover",
    "台中細水",
    "南投鹿篙咖啡",
    "雲林巴登",
    "嘉義鄒築園",
    "嘉義弓時間",
    "台南甘單",
    "台南島夫",
    "高雄神諭",
    "屏東春日廚房",
    "花蓮Gioconda",
    "台東Bike De Koffie",
    "澎湖吹吹風"
  ],
  "🗣️ 適合聊天 (Chat-friendly)": [
    "台北Woolloomooloo",
    "新北洋荳子",
    "新北山海明珠",
    "桃園古山星辰",
    "新竹山丘上",
    "苗栗自然風情",
    "台中黑森林",
    "台中地坊",
    "彰化山海戀",
    "南投烏布雨林",
    "南投赤腳精靈",
    "雲林仙地",
    "雲林華山派主角",
    "嘉義清豐濤月",
    "台南深藍旗艦店",
    "高雄萊咖啡",
    "花蓮砂卡礑山月村",
    "澎湖風櫃幽浮",
    "金門談天樓",
    "馬祖鏡沃小吃"
  ],
  "🍷 店家可喝酒 (Cafe & Bar)": [
    "台北翌日咖啡",
    "台北Congrats",
    "台北小廢墟",
    "新北食不厭",
    "新北天使熱愛的生活",
    "基隆圖們",
    "桃園秋波名曲",
    "新竹江山藝改所",
    "台中摩德年代",
    "台中黑森林",
    "彰化咖啡烟",
    "雲林後院",
    "嘉義清豐濤月",
    "台南窟仔kula",
    "高雄步道咖啡",
    "屏東波波廚房",
    "屏東小灣露天酒吧",
    "花蓮梯田山",
    "馬祖北竿芹沃",
    "馬祖津沙老酒咖啡"
  ],
  "🐶 寵物友善 (Pet-friendly)": [
    "台北Coffee Syndicate",
    "台北弄宅",
    "新北我們在海邊",
    "桃園我們。They keep company",
    "新竹綠色小徑",
    "苗栗綠葉方舟",
    "苗栗窩coffee",
    "台中Solidbean",
    "南投老官道",
    "雲林凹凸",
    "嘉義老院子1951",
    "台南甘單",
    "屏東山男咖啡",
    "屏東肥春號",
    "宜蘭灆咖啡",
    "宜蘭逗走",
    "花蓮晤子",
    "台東逐浪",
    "台東都蘭海角",
    "金門小島商號"
  ],
  "👶 小孩友善 (Kid-friendly)": [
    "台北Woolloomooloo",
    "新北白日夢",
    "基隆魚刺人",
    "桃園阜山聚落",
    "新竹大山北月",
    "苗栗蘇維拉莊園",
    "苗栗橙香森林",
    "台中樂樂書屋",
    "南投喝喝茶",
    "南投築樂",
    "雲林56號藍色公路",
    "嘉義佐登妮絲城堡",
    "高雄棧貳庫",
    "屏東水明漾",
    "宜蘭日光私廚",
    "宜蘭九號咖啡",
    "花蓮海崖谷",
    "台東小魚兒的家",
    "澎湖及林春",
    "金門古崗樓"
  ],
  "☀️ 採光超好 (Daylight)": [
    "台北COFFEE LAW",
    "新北山海明珠",
    "基隆太平青鳥",
    "桃園OVER THERE",
    "新竹一想一響",
    "苗栗Per gram",
    "台中留白計畫",
    "彰化右舍",
    "南投蠻荒咖啡",
    "雲林56號公路",
    "嘉義玖咖啡",
    "台南StableNice",
    "高雄遙遙相望",
    "屏東樹夏飲事",
    "宜蘭滿山望海",
    "宜蘭蒔花",
    "花蓮森山舍",
    "台東可可娜",
    "澎湖白灣",
    "金門黑屋咖啡"
  ],
  "🌿 植栽老宅 (Vintage)": [
    "台北興波",
    "台北秘氏",
    "基隆萬祝號",
    "基隆安樓",
    "桃園Re-Title",
    "新竹微生",
    "新竹續日",
    "苗栗重成商號",
    "台中窩柢公寓",
    "彰化穩定飛行模式",
    "彰化炎生",
    "雲林後院",
    "嘉義霜空",
    "嘉義森咖啡",
    "台南窄門",
    "台南旭峯號",
    "高雄銀座聚場",
    "屏東肥春號",
    "花蓮半寓",
    "金門北山古厝"
  ],
  "🌊 海景景觀 (Ocean View)": [
    "新北白日夢",
    "新北我們在海邊",
    "新北洋荳子",
    "新北天使熱愛的生活",
    "基隆圖們咖啡",
    "基隆海那邊",
    "桃園草漯沙丘",
    "高雄旗津海山醬",
    "高雄柴山大自然",
    "屏東日日旅海",
    "屏東海龜咖啡",
    "宜蘭滿山望海",
    "宜蘭灆咖啡",
    "花蓮原野牧場",
    "花蓮海崖谷",
    "台東小魚兒的家",
    "台東逐浪",
    "澎湖及林春",
    "馬祖刺鳥書店",
    "馬祖家適咖啡"
  ]
};

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
        img: "assets/michelin_le_palais.png"
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
        img: "assets/michelin_tairroir.png"
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
        img: "assets/michelin_logy.png"
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
        img: "assets/michelin_molino.png"
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
        img: "assets/michelin_robuchon.png"
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

// 7.0 週末探店 8 大主題特色店家圖鑑 (含外國人友善雙語與分潤)
const WEEKEND_HOP_8_THEMES = [
  {
    "id": "theme_deep_travel",
    "number": "01",
    "name": "🗺️ 台灣深度旅行",
    "nameEn": "Taiwan Deep Travel & Slow Escapes",
    "audience": "山海鐵道漫遊、親子森呼吸、秘境建築與文化慢旅",
    "tags": [
      "🚂 百年森林鐵道",
      "🌲 高山雲海茶席",
      "🌊 海岸私房秘境",
      "🎨 建築美學體驗"
    ],
    "affiliateIntro": "Klook 包車自由行 ＋ Trip.com 景觀旅宿 ＋ 奧丁丁在地茶席體驗",
    "places": [
      {
        "id": "hop_deep_taipei_04",
        "vol": "Weekend Hop Vol. 04",
        "isFeatureArticle": true,
        "isLatest": true,
        "isPopular": true,
        "readCount": "38,620 次閱讀",
        "publishDate": "2026.10.27",
        "readTime": "9 MIN READ",
        "nameZh": "巷弄脈搏與天際線交響：台北三天兩夜私房地圖，走進老宅咖啡、動漫科技與年味市集",
        "nameEn": "Taipei Symphony: A Curated 72-Hour Guide to Heritage Lanes, Modern Sights & Culinary Craft",
        "rating": "★ 4.9",
        "reviews": "深度特輯 · 編輯親訪",
        "hours": "72 小時島都慢活指南（大稻埕迪化街 · 中山赤峰街 · 華山1914與三創園區）",
        "city": "台北市",
        "district": "大同區 · 中山區 · 中正區 · 信義區",
        "addressZh": "台北市大同區迪化街一段／中山區赤峰街／中正區八德路一段1號（華山1914與三創生活園區）",
        "addressEn": "Dihua St. (Dadaocheng) / Chifeng St. (Zhongshan) / Huashan 1914 & Syntrend Creative Park, Taipei City",
        "tags": [
          "🏮 大稻埕迪化街年味",
          "☕ 赤峰街老宅昭和布丁",
          "🎮 華山展演與三創公仔",
          "🥟 米其林與必比登5選",
          "🍸 亞洲50大酒吧Bar Mood"
        ],
        "features": "深入台北慢活日常：迪化街年味試吃焦香烏魚子、赤峰街科技業回憶探店昭和布丁與脆皮甜甜圈、忠孝新生華山 1914 展演與三創生活園區動漫公仔扭蛋。完整收錄台北必吃美饌 5 選（鼎泰豐／小王煮瓜／阜杭豆漿／金蓬萊台菜／施家鮮肉湯圓）、冠軍手沖興波咖啡、ASW 洋樓茶館與亞洲 50 大酒吧 Bar Mood。",
        "authorQuote": "「只要一走進農曆年前的迪化街，那種屬於台灣傳統節慶的熱烈喧囂便會撲面而來；而在赤峰街與華山三創，不用特別趕行程，就能輕鬆花上一整天沉浸在自己的慢活世界裡。」",
        "mapUrl": "https://maps.google.com/?q=大稻埕迪化街",
        "affiliateLabel": "🏙️ 預訂台北101與故宮門票 ➔",
        "affiliateUrl": "https://www.klook.com/?aid=123436",
        "img": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1000&auto=format&fit=crop",
        "fullHtmlArticle": "<div class=\"hop-longform-article\">\n  <!-- 頂部主題徽章與中英文大標題 -->\n  <div class=\"journal-badge\">Weekend Hop Vol. 04 ｜ 台灣深度旅行 · 慢活採訪實錄</div>\n  <h1 class=\"article-title\">巷弄脈搏與天際線交響：台北三天兩夜私房地圖，走進老宅咖啡、動漫科技與年味市集</h1>\n  <div class=\"article-subtitle-en\">Taipei Symphony: A Curated 72-Hour Guide to Heritage Lanes, Modern Sights &amp; Culinary Craft</div>\n\n  <!-- 旅人真實心得隨筆（作者個人視角，已校對潤飾錯字） -->\n  <div class=\"personal-reflection-box\" style=\"background:#FFFBF7;border-color:#FED7AA;border-left-color:#E05A47;\">\n    <div class=\"reflection-header\" style=\"color:#E05A47;\">\n      <span>✍️</span> <strong>旅人手記：年味、科技業回憶與放假探店的台北日常</strong>\n    </div>\n    <div class=\"reflection-content\">\n      <p>\n        許多外國朋友認識台北，多半是從台北 101 的跨年煙火、士林夜市的大雞排或故宮的世界級國寶開始的。但若是問我這座城市最不可取代的靈魂在哪裡，我會毫不猶豫地指向那幾條充滿生活痕跡的舊街區與文創聚落。\n      </p>\n      <p>\n        大稻埕與迪化街，是我每年過年前一定會報到的地方。老實說，現在台北市區的過年氣氛越來越淡，但只要一走進農曆年前的迪化街，那種屬於台灣傳統節慶的熱烈喧囂便會撲面而來。整條街擠得水洩不通卻熱鬧非凡，兩旁的店家與攤販都會毫不手軟、熱情無比地招呼大家試吃、喝熱湯；烤得焦香撲鼻的烏魚子、整包整袋抱著買的年節糖果，還有越嚼越甘甜的現烤魷魚絲，每一樣都讓人停不下嘴。那種人情交織的市井鑊氣與節慶溫度，真的是值得向全世界驕傲推薦的「台灣之光」。\n      </p>\n      <p>\n        而赤峰街與中山雙連文創街區，對我來說更是一段特別親切的人生記憶——這裡是我以前在科技業上班天天打卡的地方。那時候即便每天都在這裡穿梭，下班或路過時依然忍不住探頭看看又開了哪間迷人的新店舖。甚至有時會特地請一個平日下午的特休假，只為了避開假日人潮，悠悠閒閒地在赤峰街排隊買剛出爐的脆皮甜甜圈、找一間氣氛舒服的日料小店，或躲進老宅咖啡館喝手沖。這一帶的巷弄很窄、店家空間也都很迷你，坐著用餐雖然稍嫌擁擠，但每一處角落都極具巧思、拍照超級出片。現在的捷運中山站周邊已經成了年輕世代最愛的商圈，雖然物價變高了，但各具美感的風格咖啡館依然一間一間開，永遠充滿蓬勃的生命力。\n      </p>\n      <p>\n        我也非常喜歡在休假時搭捷運到忠孝新生站。以前放假我幾乎都在華山 1914 文創園區度過——找一間安靜的咖啡店坐坐、逛逛獨立設計展覽或市集活動；散步完再順著步道晃進三創生活園區，看看最新的科技產品、轉幾個剛到貨的日系扭蛋、細細欣賞整層櫥窗的動漫公仔。不用特別趕行程，光是在忠孝新生這一帶就能輕鬆花上一整天，徹底沉浸在屬於自己的慢活世界裡。\n      </p>\n    </div>\n  </div>\n\n  <!-- 台北專屬活動、票券與分潤通道 (Transit & Tickets Hub) -->\n  <h2 class=\"section-header\"><span>🎟️</span> 探索島都：熱門門票、捷運直達、餐廳預訂與飯店預約樞紐</h2>\n  <div class=\"tickets-hub-grid\">\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🏙️</div>\n        <div class=\"ticket-title\">台北 101 高空觀景台門票</div>\n        <div class=\"ticket-desc\">直達 89 樓俯瞰台北百萬落日天際線 / 電子票掃碼秒速入場</div>\n      </div>\n      <div class=\"ticket-action-btn coral\">Klook 官方預約 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🏛️</div>\n        <div class=\"ticket-title\">國立故宮博物院免排隊門票</div>\n        <div class=\"ticket-desc\">近距離欣賞翠玉白菜與肉形石 / 國際旅客專屬快速通道</div>\n      </div>\n      <div class=\"ticket-action-btn teal\">線上免排隊訂票 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚗</div>\n        <div class=\"ticket-title\">台北市區 ＋ 九份平溪專車包車</div>\n        <div class=\"ticket-desc\">下雨天免轉乘困擾 / 飯店直達迪化街・故宮・陽明山夜景</div>\n      </div>\n      <div class=\"ticket-action-btn\">預約包車直達 ➔</div>\n    </a>\n\n    <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🍽️</div>\n        <div class=\"ticket-title\">台北米其林餐券 &amp; 景觀訂位</div>\n        <div class=\"ticket-desc\">鼎泰豐外帶套餐 / 陽明山景觀餐廳 / 東區餐酒館搶位通道</div>\n      </div>\n      <div class=\"ticket-action-btn amber\">線上訂餐搶位 ➔</div>\n    </a>\n\n    <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🏨</div>\n        <div class=\"ticket-title\">信義・大安設計飯店比價</div>\n        <div class=\"ticket-desc\">緊鄰捷運站出口 / 步行直達夜市與赤峰街優質旅宿</div>\n      </div>\n      <div class=\"ticket-action-btn teal\">Trip.com 訂房 ➔</div>\n    </a>\n\n    <a href=\"https://linkgo.one/s/qYLKx\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🛵</div>\n        <div class=\"ticket-title\">佳德鳳梨酥與宵夜外送直達</div>\n        <div class=\"ticket-desc\">免大排長龍！Uber Eats 最快 35 分鐘火速送到飯店大廳</div>\n      </div>\n      <div class=\"ticket-action-btn coral\">開啟 Uber Eats ➔</div>\n    </a>\n  </div>\n\n  <!-- 第一章：城市紋理 -->\n  <h2 class=\"section-header\"><span>🏛️</span> 城市紋理：歷史牌樓、文創綠帶與數位潮流的交錯對話</h2>\n  <p class=\"article-body-p\">\n    72 小時漫遊台北，最迷人的方式是順著城市的時間軸體驗三種截然不同的生活維度：\n  </p>\n  <p class=\"article-body-p\">\n    <strong>大稻埕（大同區）</strong>保留了百年前茶葉與布匹貿易的繁華光景，巴洛克式立面騎樓下，乾貨、烏魚子與中藥香隨風撲鼻；漫步至<strong>赤峰街（中山區）</strong>，老打鐵鋪與汽修五金行蛻變為全台密度最高的風格咖啡館與古著選物店；而搭乘捷運至<strong>忠孝新生站</strong>，日治酒廠改建的華山 1914 紅磚倉庫與緊鄰的三創生活園區隔街相望，動漫模型、一番賞扭蛋與科技產品展演，展現了台北蓬勃的多元包容力。\n  </p>\n\n  <!-- 第二章：台北經典美饌 5 選 -->\n  <h2 class=\"section-header\"><span>🥟</span> 舌尖鑊氣：台北必訪經典美饌 5 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">享譽國際 ｜ 黃金 18 摺</span>\n        <h3 class=\"place-name\">鼎泰豐（信義旗艦店）</h3>\n        <p class=\"place-location\">📍 大安區信義路二段 277 號（捷運東門站）</p>\n        <p class=\"place-detail\">薄透麵皮包裹豐沛鮮甜高湯，小籠包咬開瞬間爆汁；排骨蛋炒飯米粒金黃分明、透著豬油蔥花香氣，細緻極致的服務讓海內外旅客指名必訪。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=鼎泰豐信義旗艦店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">米其林必比登 ｜ 黑金肉燥</span>\n        <h3 class=\"place-name\">小王煮瓜</h3>\n        <p class=\"place-location\">📍 萬華區華西街 17 之 4 號（華西街夜市內）</p>\n        <p class=\"place-detail\">萬華傳奇「黑金滷肉飯」。手切豬肉丁慢火煨燉至深沉油亮，膠質黏嘴而不膩；配上一碗鹹香清甜的古早味瓜仔肉排骨湯，滿是老台北的情懷滋味。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=小王煮瓜\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">清晨排隊 ｜ 炭烤厚燒餅</span>\n        <h3 class=\"place-name\">阜杭豆漿</h3>\n        <p class=\"place-location\">📍 中正區忠孝東路一段 108 號 2 樓（捷運善導寺站）</p>\n        <p class=\"place-detail\">全台指標性傳統台式早餐。炭火老麵厚燒餅夾油條外脆內軟、蔥香四溢，搭配灑上蝦米、脆油條碎與辣油的香濃鹹豆漿，早起排隊也甘之如飴。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=阜杭豆漿\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">米其林一星 ｜ 正宗北投酒家菜</span>\n        <h3 class=\"place-name\">金蓬萊遵古台菜</h3>\n        <p class=\"place-location\">📍 士林區天母東路 101 號</p>\n        <p class=\"place-detail\">傳承三代的酒家菜代表。招牌「特製排骨酥」醃製入味、油炸至極致金黃酥脆，骨肉輕易分離且肉汁四溢；白片放山雞鮮甜滑嫩，家庭盛宴必點。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn reserve\">🍽️ 餐廳訂位代訂</a>\n        <a href=\"https://maps.google.com/?q=金蓬萊遵古台菜\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">延三夜市老字號 ｜ 必比登推介</span>\n        <h3 class=\"place-name\">施家鮮肉湯圓</h3>\n        <p class=\"place-location\">📍 大同區延平北路三段 58 號（延三夜市）</p>\n        <p class=\"place-detail\">純糯米水磨手工揉皮，口感軟糯 Q 彈；內餡黑豬肉鮮甜多汁，胡椒油蔥香氣撲鼻，搭配大骨茼蒿湯底，是台北冬夜最療癒暖胃的庶民美食。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=施家鮮肉湯圓\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第三章：老宅茶館、冠軍咖啡與微醺酒吧 4 選 -->\n  <h2 class=\"section-header\"><span>☕</span> 巷弄慢飲：特色茶空間、冠軍手沖與亞洲 50 大酒吧 4 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge tea\">世界咖啡師大賽 WBC 冠軍</span>\n        <h3 class=\"place-name\">Simple Kaffa 興波咖啡（旗艦館）</h3>\n        <p class=\"place-location\">📍 中正區忠孝東路二段 27 號（近華山 1914）</p>\n        <p class=\"place-detail\">由世界咖啡冠軍吳則霖創立。挑高復古天井空間陳設典雅，招牌手沖水洗藝伎風味純淨層次分明，搭配綿密香濃的「原味地瓜生乳捲」，朝聖首選。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=Simple+Kaffa+旗艦店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge tea\">大稻埕古典洋樓茶館</span>\n        <h3 class=\"place-name\">ASW Tea House</h3>\n        <p class=\"place-location\">📍 大同區迪化街一段 34 號 2 樓（屈臣氏大藥房）</p>\n        <p class=\"place-detail\">深色英倫古典木質裝潢，窗欞正對迪化街百年街景。嚴選台灣在地單一莊園台茶 18 號紅玉紅茶，佐以溫熱現烤手作司康，享受靜謐優雅的午後時光。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=ASW+Tea+House\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">赤峰街日系選物與甜點</span>\n        <h3 class=\"place-name\">小器生活空間（赤峰店）</h3>\n        <p class=\"place-location\">📍 大同區赤峰街 29 號（捷運中山站）</p>\n        <p class=\"place-detail\">結合細緻日系器皿展售與慢活咖啡空間。提供純手工焦糖昭和布丁與冰滴單品手沖，在科技與文青老宅巷弄中，提供一處安頓心靈的小巧綠洲。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=小器生活赤峰店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge bar\">連年榮獲 ｜ 亞洲 50 大酒吧</span>\n        <h3 class=\"place-name\">Bar Mood 吧沐</h3>\n        <p class=\"place-location\">📍 大安區敦化南路一段 160 巷 53 號（忠孝復興站）</p>\n        <p class=\"place-detail\">台北代表性頂級調酒殿堂。擅長將台灣高山原片茶、當季果物與草本辛香料揉合頂級基酒，前半段為純白立飲區、推開隱藏門則是沉穩優雅的私密沙龍。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn reserve\">🍸 線上訂座預約</a>\n        <a href=\"https://maps.google.com/?q=Bar+Mood+Taipei\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第四章：深度 3 天 2 夜行程規劃表 -->\n  <h2 class=\"section-header\"><span>🗓️</span> 島都步調：台北 3 天 2 夜經典慢活排程表</h2>\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>天數與主題</th>\n          <th>時間動線</th>\n          <th>深度體驗行程內容</th>\n          <th>推薦餐食與交通串接</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>Day 1：年味大稻埕與赤峰街慢步</strong></td>\n          <td>10:00 抵達台北（飯店寄放行李）<br>➔ 11:00 走進大稻埕迪化街<br>➔ 13:30 ASW Tea House 品茶<br>➔ 15:30 漫步赤峰街文創甜點<br>➔ 18:30 寧夏夜市千歲宴小吃</td>\n          <td>穿梭迪化街採買試吃南北貨魷魚絲、烏魚子，欣賞巴洛克老洋樓建築；午後轉戰赤峰街走訪文青古著小店與排隊甜甜圈；傍晚沿線形公園漫步至寧夏夜市大啖劉芋仔蛋黃芋餅與豬肝湯。</td>\n          <td>午餐：大稻埕民樂旗魚米粉<br>點心：赤峰街脆皮甜甜圈 / 昭和布丁<br>晚餐：寧夏夜市必比登小吃巡禮<br>交通：捷運松山新店線 ＋ 悠閒步行</td>\n        </tr>\n        <tr>\n          <td><strong>Day 2：華山展演、三創公仔與高空落日</strong></td>\n          <td>08:30 阜杭豆漿厚燒餅蛋<br>➔ 10:00 華山 1914 看展漫步<br>➔ 13:00 三創生活園區扭蛋公仔<br>➔ 16:00 四四南村眷村拍照<br>➔ 17:30 台北 101 高空落日<br>➔ 20:30 東區 Bar Mood 微醺</td>\n          <td>享用炭火老麵厚燒餅早餐；上午在華山紅磚老倉庫看當代特展、逛獨立文創市集；午後散步至三創看最新科技產品、轉日系扭蛋買公仔；傍晚至信義區看台北 101 落日天際線，夜間在亞洲 50 大酒吧品啜台灣茶酒。</td>\n          <td>早餐：阜杭豆漿炭烤厚燒餅配鹹豆漿<br>午餐：興波咖啡旗艦館輕食手沖<br>晚餐：鼎泰豐小籠包信義旗艦店<br>宵夜：Bar Mood 精緻茶酒特調<br>住宿：<a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#0F4C81;font-weight:700;\">信義/大安精品飯店比價</a></td>\n        </tr>\n        <tr>\n          <td><strong>Day 3：故宮國寶巡禮、北投名湯與賦歸</strong></td>\n          <td>09:30 國立故宮博物院<br>➔ 13:00 士林天母金蓬萊台菜<br>➔ 15:00 捷運直達北投地熱谷<br>➔ 16:00 日式獨立湯屋泡白磺泉<br>➔ 18:30 伴手禮飯店代收提取賦歸</td>\n          <td>上午在故宮空調展館欣賞世界級典藏國寶；中午專車前往天母享用正宗酒家菜排骨酥；午後前往北投漫步青磺地熱谷，享受日式隱密溫泉舒緩身心；提領直配飯店代收的佳德鳳梨酥，輕鬆前往機場或高鐵站賦歸。</td>\n          <td>午餐：金蓬萊遵古台菜招牌排骨酥<br>下午茶：北投日式煎茶和菓子<br>伴手禮：佳德鳳梨酥 / 快車肉乾<br>交通：<a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#E05A47;font-weight:700;\">預約市區包車直達北投與機場</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 第五章：外國旅客專屬重點指南 (English Traveler Essentials) -->\n  <section class=\"english-tips-section\">\n    <div class=\"english-tips-header\">\n      <span style=\"font-size:24px;\">🌐</span>\n      <h3 class=\"english-tips-title\">Taipei Traveler Essentials: Quick Practical Tips</h3>\n    </div>\n    <div class=\"tips-grid\">\n      <div class=\"tip-item\">\n        <h4>1. Seamless Public Transit &amp; EasyCard</h4>\n        <p>Taipei MRT is spotless, efficient, and fully bilingual. Pick up an <strong>EasyCard (悠遊卡)</strong> at the airport or any convenience store. It works for the metro, buses, YouBike 2.0, and even payments at small shops.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>2. Dihua Street &amp; Chifeng Lane Exploration</h4>\n        <p>Walk through Dihua Street for authentic dried fruits, Taiwanese tea, and Lunar New Year vibes. Just 15 minutes away, Chifeng Street offers the city&#39;s coolest micro-cafes, Japanese vintage boutiques, and retro pudding shops.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>3. Night Market Etiquette &amp; Timing</h4>\n        <p>Visit Ningxia or Raohe Night Market around <strong>5:30 PM to 6:30 PM</strong> to beat peak lines. Most street stalls only accept cash (TWD), so keep small bills and coins handy while feasting on pepper buns and oyster omelets.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>4. Souvenir Hotel Delivery Hack</h4>\n        <p>Skip the grueling 1-hour queue at Chia Te Bakery. Use online souvenir delivery services to have fresh pineapple cakes and nougats delivered directly to your hotel front desk before checkout.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- 底部行動呼籲區 -->\n  <div class=\"article-footer-cta\">\n    <h3>展開你的台北都會與巷弄漫活之旅</h3>\n    <p>告別排隊與轉乘勞頓，提前鎖定包車、故宮快速通關門票、米其林餐廳與質感旅宿。</p>\n    <div class=\"cta-button-group\">\n      <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn primary\">🚗 預約台北專車一日包車</a>\n      <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🍽️ 線上預約人氣餐廳訂位</a>\n      <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🏨 查詢台北捷運周邊飯店空房</a>\n    </div>\n  </div>\n</div>"
      },
      {
        "id": "hop_deep_kaohsiung_03",
        "vol": "Weekend Hop Vol. 03",
        "isFeatureArticle": true,
        "isLatest": true,
        "isPopular": true,
        "readCount": "34,890 次閱讀",
        "publishDate": "2026.10.27",
        "readTime": "10 MIN READ",
        "nameZh": "大港崛起與海洋靈魂：從重工業碼頭到文化水岸，高雄港都經濟脈動與藝文慢遊錄",
        "nameEn": "Tides of Transformation: The Economic Renaissance, Port Architecture & Cultural Pulse of Kaohsiung",
        "rating": "★ 4.9",
        "reviews": "深度特輯 · 編輯親訪",
        "hours": "水岸輕軌全線串聯 · 大港橋每日 15:00 水平旋轉（週末加開 19:00）",
        "city": "高雄市",
        "district": "鹽埕區 · 前鎮區 · 旗津 · 大鵬灣",
        "addressZh": "高雄市鹽埕區大勇路1號（駁二藝術特區／大港橋／高雄流行音樂中心）",
        "addressEn": "No. 1, Dayong Rd., Yancheng Dist., Kaohsiung City (Pier-2 Art Center & Great Harbor Bridge)",
        "tags": [
          "🌊 亞洲新灣區大港橋",
          "🧋 鹽埕厚奶茶三傳奇",
          "⭐ 米其林一星殿堂",
          "🦆 在地私藏5大鴨肉",
          "🎢 SKM Park 親子樂園"
        ],
        "features": "深入高雄港都蛻變：從重工業拆船碼頭到亞洲新灣區、水岸輕軌、駁二大港橋旋轉、SKM Park 草衙道親子樂園與大鵬灣兜風漫遊。完整收錄高雄三大必喝厚奶茶（樺達／双妃／老江）、米其林一星餐廳 3 選（雋 GEN／承 Sho／Haili）、在地老饕私藏 5 大鴨肉名店（鴨肉珍／鴨肉本／正昌／七賢／極品當歸鴨）與 4 間挑高海景咖啡館。",
        "authorQuote": "「高雄的餐廳和咖啡店空間非常開闊、挑高大氣，推嬰兒車完全不顯擁擠；而最讓人難以割捨的始終是『人』——只要踏上這片被陽光曬得暖洋洋的土地，緊繃壓力就會瞬間煙消雲散。」",
        "mapUrl": "https://maps.google.com/?q=駁二藝術特區大港橋",
        "affiliateLabel": "🚗 預約高雄與大鵬灣包車 ➔",
        "affiliateUrl": "https://www.klook.com/?aid=123436",
        "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=1000&auto=format&fit=crop",
        "fullHtmlArticle": "<div class=\"hop-longform-article\">\n  <!-- 頂部主題徽章與中英文大標題 -->\n  <div class=\"journal-badge\">Weekend Hop Vol. 03 ｜ 台灣深度旅行 · 慢活採訪實錄</div>\n  <h1 class=\"article-title\">大港崛起與海洋靈魂：從重工業碼頭到文化水岸，高雄港都經濟脈動與藝文慢遊錄</h1>\n  <div class=\"article-subtitle-en\">Tides of Transformation: The Economic Renaissance, Port Architecture &amp; Cultural Pulse of Kaohsiung</div>\n\n  <!-- 旅人真實心得隨筆（作者個人視角，已校對潤飾錯字） -->\n  <div class=\"personal-reflection-box\" style=\"background:#FFFDF9;border-color:#FED7AA;border-left-color:#E05A47;\">\n    <div class=\"reflection-header\" style=\"color:#E05A47;\">\n      <span>✍️</span> <strong>旅人手記：從青春看展到親子慢騎，在南台灣的熱情裡徹底放鬆</strong>\n    </div>\n    <div class=\"reflection-content\">\n      <p>\n        以前還是學生的時候，來到高雄總是充滿了年輕的探索欲——迫不及待想鑽進熱鬧的商圈逛街、看各種大型藝術展覽，或者搭著渡輪直奔旗津海邊吹風踏浪。\n      </p>\n      <p>\n        但這幾年隨著身分的轉變，我越來越著迷於高雄現在的模樣。每次造訪，最喜歡牽著家人的手去駁二藝術特區漫步，或是繞到幾座新百貨周邊，租幾台單車沿著開闊平緩的林蔭與港灣步道悠閒騎行。特別是夏天帶著孩子來，高雄經常會規劃許多免費開放的消暑水上樂園與親水設施，安全、乾淨又貼心，是能讓孩子盡情放電、大人安心放空的親子天堂！\n      </p>\n      <p>\n        很多人問我來高雄是不是都在逛夜市？其實我反而很少去夜市。因為高雄的豔陽非常熱情、氣溫高，帶著長輩和小朋友，我們每次來幾乎都是專挑特色餐廳和風格咖啡館。高雄的餐廳和咖啡店都有一個讓人無比羨慕的特點——<strong>「空間非常開闊、挑高大氣、座位寬敞舒暢」</strong>，推嬰兒車進去完全不顯擁擠，冷氣涼爽舒服，親子友善程度極高！更棒的是，這裡的高星級飯店與特色旅宿 CP 值極高，價格比北部平實許多，加上綿密的捷運與輕軌路網，帶著大包小包出門完全不用煩惱交通。\n      </p>\n      <p>\n        每次安排高雄行程，我們家一定會留一整天帶孩子去 SKM Park Outlets（草衙道）玩戶外主題親子樂園，傍晚再去西子灣看落日晚霞；有時自己開車或包車往南延伸，大鵬灣周邊開闊的潟湖公路與海天一色，沿著海岸線兜風、騎單車，那種遼闊的視野讓人整顆心都被打開了。\n      </p>\n      <p>\n        但高雄最讓人難以割捨的，始終是「人」。這裡的人民發自內心熱情、溫暖、不拘小節，無論是問路時店家親切的招呼，還是飯店與司機臉上的笑容，只要踏上這片被陽光曬得暖洋洋的土地，旅途的疲憊與平時累積的緊繃壓力就會瞬間煙消雲散。在高雄，心情能立刻完成切換，你會忍不住深深愛上這座城市的人、事、物，以及南部最純粹的真摯熱情。\n      </p>\n    </div>\n  </div>\n\n  <!-- 高雄專屬活動、票券與分潤通道 (Transit & Dining Hub) -->\n  <h2 class=\"section-header\"><span>🎟️</span> 玩轉港都：景點票券、餐廳預訂、包車與飯店預約樞紐</h2>\n  <div class=\"tickets-hub-grid\">\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚗</div>\n        <div class=\"ticket-title\">高雄市區 ＋ 大鵬灣包車一日遊</div>\n        <div class=\"ticket-desc\">左營高鐵站接駁 / 駁二・西子灣・大鵬灣客製自由行 / 避開豔陽</div>\n      </div>\n      <div class=\"ticket-action-btn coral\">Klook 官方預約 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🎢</div>\n        <div class=\"ticket-title\">SKM Park 草衙道鈴鹿賽道票券</div>\n        <div class=\"ticket-desc\">全台唯一日本授權鈴鹿卡丁車 / 旋轉木馬與親子遊樂暢遊套票</div>\n      </div>\n      <div class=\"ticket-action-btn amber\">線上優惠訂票 ➔</div>\n    </a>\n\n    <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🍽️</div>\n        <div class=\"ticket-title\">高雄名店訂餐搶位 &amp; 餐券</div>\n        <div class=\"ticket-desc\">碳佐麻里 / 老新台菜 / 星級 Buffet / 景觀餐酒館專屬訂位通道</div>\n      </div>\n      <div class=\"ticket-action-btn\">線上訂餐搶位 ➔</div>\n    </a>\n\n    <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🏨</div>\n        <div class=\"ticket-title\">愛河灣與港景星級飯店比價</div>\n        <div class=\"ticket-desc\">高 CP 值大空間旅宿 / 萬豪・洲際・承億酒店即時訂房</div>\n      </div>\n      <div class=\"ticket-action-btn teal\">Trip.com 訂房 ➔</div>\n    </a>\n\n    <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚄</div>\n        <div class=\"ticket-title\">台灣高鐵 85 折 / 外籍周遊券</div>\n        <div class=\"ticket-desc\">台北至左營最快 94 分鐘 / 外籍旅客高鐵無限搭乘專屬通行證</div>\n      </div>\n      <div class=\"ticket-action-btn\">高鐵聯票預訂 ➔</div>\n    </a>\n\n    <a href=\"https://linkgo.one/s/qYLKx\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🛵</div>\n        <div class=\"ticket-title\">高雄在地伴手禮外送直達</div>\n        <div class=\"ticket-desc\">不想出門排隊？Uber Eats 最快 30 分鐘火速送到飯店大廳</div>\n      </div>\n      <div class=\"ticket-action-btn coral\">開啟 Uber Eats ➔</div>\n    </a>\n  </div>\n\n  <!-- 第一章：城市轉身與水岸輕軌 -->\n  <h2 class=\"section-header\"><span>🌊</span> 城市紋理：重工業鋼鐵之都如何轉身為海洋藝文水岸？</h2>\n  <p class=\"article-body-p\">\n    過去的「打狗港」以拆船業、重工業與吞吐全台半數貨櫃的硬頸形象立足世界。過去沿海高聳的厚重圍牆與管制區把市民與海洋阻隔開來；如今圍牆全面推倒，臨港舊鐵道搖身一變成為全台首條環狀水岸輕軌，將旅人輕巧無縫地送往<strong>高雄流行音樂中心</strong>、<strong>港埠旅運中心</strong>與<strong>大港橋</strong>。\n  </p>\n  <p class=\"article-body-p\">\n    日治時期用來儲放砂糖與魚粉的港邊老倉庫，如今常駐著原創設計品牌、獨立書店與音樂展演空間。每天下午三點，全亞洲最長的水平旋轉橋——「大港橋」在水面上緩緩旋轉 90 度，完成了整座城市最具儀式感的港灣慢活景致。\n  </p>\n\n  <!-- 第二章：港都三大奶茶名店 -->\n  <h2 class=\"section-header\"><span>🧋</span> 濃乳茶韻：高雄厚奶茶傳奇 3 選（奶茶一條街與炭焙經典）</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge tea\">台灣紅茶牛乳鼻祖</span>\n        <h3 class=\"place-name\">樺達奶茶（鹽埕總店）</h3>\n        <p class=\"place-location\">📍 鹽埕區新樂街 99 號（近捷運鹽埕埔站）</p>\n        <p class=\"place-detail\">創立於 1982 年的鹽埕新樂街傳奇。堅持不加冰塊、不稀釋茶湯濃度，使用在地光泉鮮乳。推薦必喝招牌「樺達奶茶（正常甜）」與茶香甘醇的「美容奶茶（普洱紅茶鮮乳）」。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=樺達奶茶總店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge tea\">新樂街免費加珍珠</span>\n        <h3 class=\"place-name\">双妃奶茶</h3>\n        <p class=\"place-location\">📍 鹽埕區新樂街 173 號</p>\n        <p class=\"place-detail\">新樂街另一大實力派排隊老鋪。最大亮點是「免費加珍珠」，微甜彈牙的手工小粉圓搭配濃郁的厚鮮奶茶，甜度溫潤順口，咀嚼控旅人的第一指名。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=双妃奶茶\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge tea\">飄香七十載炭焙焦香</span>\n        <h3 class=\"place-name\">老江紅茶牛奶（南台總店）</h3>\n        <p class=\"place-location\">📍 新興區南台路 51 號（捷運美麗島站）</p>\n        <p class=\"place-detail\">自 1953 年創立的元祖宵夜早餐。靈魂在於古法炭焙紅茶，撞入整瓶正宗高牧鮮乳，散發獨特的微苦焦香與熟成厚韻；配上一份現煎半熟流心火腿蛋吐司，是深夜絕配。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=老江紅茶牛奶總店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第三章：米其林星級餐廳 3 選 -->\n  <h2 class=\"section-header\"><span>⭐</span> 當代星級殿堂：高雄米其林一星美饌 3 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">米其林一星 ｜ 當代極致粵菜</span>\n        <h3 class=\"place-name\">雋 GEN</h3>\n        <p class=\"place-location\">📍 前鎮區復興四路 8 號</p>\n        <p class=\"place-detail\">由粵菜傳奇名廚陳泰榮擔任廚藝總監。重現經典古法「金錢雞」與功夫「鮑汁焗花膠」，將繁複老火候與刀工以現代手法優雅呈獻，空間低調奢華，宴客首選。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn reserve\">🍽️ 線上預約訂位</a>\n        <a href=\"https://maps.google.com/?q=雋GEN\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">米其林一星 ｜ 東京 Den 姐妹店</span>\n        <h3 class=\"place-name\">承 Sho</h3>\n        <p class=\"place-location\">📍 前鎮區中華五路 806 號</p>\n        <p class=\"place-detail\">日本東京二星名店海外首家分店。主廚藤本祥一將日式懷石的精髓揉合台灣在地山海食材，招牌旬野菜沙拉結合數十種台灣時蔬，板前料理充滿節奏感與驚喜。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn reserve\">🍽️ 線上預約訂位</a>\n        <a href=\"https://maps.google.com/?q=承Sho\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge michelin\">米其林一星 ｜ 法式當代海味</span>\n        <h3 class=\"place-name\">Haili</h3>\n        <p class=\"place-location\">📍 前金區成功一路 264-1 號 2 樓</p>\n        <p class=\"place-detail\">主廚康仁維以正統法餐醬汁工藝，巧妙融合台灣街頭小吃與海港現撈漁獲。菜單層次優雅且充滿記憶共鳴，僅供應預約制晚間套餐，極受當代老饕好評。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn reserve\">🍽️ 線上預約訂位</a>\n        <a href=\"https://maps.google.com/?q=Haili餐廳\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第四章：在地人私藏鴨肉 5 選 -->\n  <h2 class=\"section-header\"><span>🦆</span> 庶民鑊氣：高雄在地老饕私藏鴨肉名店 5 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge duck\">米其林必比登推介</span>\n        <h3 class=\"place-name\">鴨肉珍</h3>\n        <p class=\"place-location\">📍 鹽埕區五福四路 258 號</p>\n        <p class=\"place-detail\">逾六十年傳奇老字號。煙燻鴨肉皮薄滑嫩、帶著高雅紅糖煙燻香；鋪滿手工切丁肥瘦滷肉燥的鴨肉飯，再配上一碗鮮脆甘甜的綜合下水湯，是高雄最無可取代的美味。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=鴨肉珍\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge duck\">老饕指名分流首選</span>\n        <h3 class=\"place-name\">鴨肉本（二哥的店）</h3>\n        <p class=\"place-location\">📍 鹽埕區富野路 107 號</p>\n        <p class=\"place-detail\">原鴨肉珍家族二哥自立門戶。鴨肉骨香肉厚、多汁不柴，獨門特調甘草甜麵醬是一絕；其鴨血糕軟糯紮實，帶有淡淡中藥清香，是在地人最愛的口袋名單。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=鴨肉本二哥的店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge duck\">武廟商圈金黃油蔥香</span>\n        <h3 class=\"place-name\">正昌鴨肉飯</h3>\n        <p class=\"place-location\">📍 苓雅區武廟路 37 號</p>\n        <p class=\"place-detail\">被封為「高雄第一名鴨肉飯」。將去骨煙燻鴨肉撕成條狀鋪滿整碗白飯，淋上金黃香濃的純鴨油與爆香紅蔥頭醬汁，每粒米飯都裹滿了濃郁鹹香，排隊人潮絡繹不絕。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=正昌鴨肉飯\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge duck\">1937年創立元祖滋味</span>\n        <h3 class=\"place-name\">七賢鴨肉飯</h3>\n        <p class=\"place-location\">📍 前金區七賢二路 220 號</p>\n        <p class=\"place-detail\">飄香近九十載的老店。白切鴨肉鮮嫩多汁，保留原肉清甜；鴨肉飯鋪上細嫩鴨肉絲佐以薑絲解膩，搭配一碗用鴨骨大火慢熬成乳白色的當歸鴨湯，溫潤滋補。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=七賢鴨肉飯\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge duck\">北高雄深夜暖胃首選</span>\n        <h3 class=\"place-name\">極品當歸鴨</h3>\n        <p class=\"place-location\">📍 左營區重愛路 430 號（高鐵站旁）</p>\n        <p class=\"place-detail\">以深色濃郁的「當歸鴨肉麵線」聞名，中藥當歸香氣撲鼻卻不苦澀；配上一盤「炙烤煙燻鴨後腿」與外酥內 Q 的乾煎米血，是入夜後高鐵周邊最具人氣的宵夜名店。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=極品當歸鴨\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第五章：特色挑高海景咖啡館 4 選 -->\n  <h2 class=\"section-header\"><span>☕</span> 港景與挑高空間：特色咖啡館 4 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">駁二鋼構工業風早午餐</span>\n        <h3 class=\"place-name\">NOW &amp; THEN by nybc</h3>\n        <p class=\"place-location\">📍 鹽埕區大義街 2 號（駁二大義倉庫）</p>\n        <p class=\"place-detail\">挑高紅磚鋼構倉庫工業風，空間極其寬敞舒適，推嬰兒車入內完全無阻礙。主打自家烘焙單品手沖咖啡、全日澳式早午餐與焦糖法式吐司，是逛展後的最佳休憩點。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=NOW+AND+THEN+駁二\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">老造船廠水岸第一排</span>\n        <h3 class=\"place-name\">海岸線咖啡（旗津店）</h3>\n        <p class=\"place-location\">📍 旗津區中洲三路 397 號（中洲輪渡站旁）</p>\n        <p class=\"place-detail\">老造船廠與漁村聚落改建，面向停泊漁船的水岸第一排。必點手沖單品咖啡與西西里檸檬氣泡，靜看舢舨穿梭港灣，享受遠離市區喧囂的純樸海風。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=海岸線咖啡旗津店\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">歐風歌劇院挑高圖書館</span>\n        <h3 class=\"place-name\">卡啡那 CAFFAINA（文化探索館）</h3>\n        <p class=\"place-location\">📍 苓雅區五福一路 67 號（近文化中心）</p>\n        <p class=\"place-detail\">宛如歐洲大劇院般的超大型兩層樓空間。採光通透明亮、座位寬敞氣派，提供超過數十款現做手工法式甜點與舒芙蕾，是高溫避暑、長輩與親子家族下午茶聚會首選。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=卡啡那文化探索館\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">正對大港橋最佳視野</span>\n        <h3 class=\"place-name\">高流珊瑚礁群景觀咖啡</h3>\n        <p class=\"place-location\">📍 鹽埕區愛河灣旁（高流園區）</p>\n        <p class=\"place-detail\">正對大港橋與港埠旅運中心。午後在斜陽餘暉下品嚐一杯冰滴冷萃，三點整可直擊大港橋旋轉全貌，夜晚則能飽覽愛河灣水岸音樂燈光秀。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=高雄流行音樂中心\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第六章：深度 3 天 2 夜行程規劃表 -->\n  <h2 class=\"section-header\"><span>🗓️</span> 港都節奏：高雄 3 天 2 夜經典慢活排程表</h2>\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>天數與主題</th>\n          <th>時間動線</th>\n          <th>深度體驗行程內容</th>\n          <th>推薦餐食與交通串接</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>Day 1：港灣新生與藝文水岸</strong></td>\n          <td>10:30 左營高鐵站<br>➔ 11:30 鹽埕老街吃鴨肉珍<br>➔ 13:30 駁二大義倉庫散步<br>➔ 15:00 觀賞大港橋旋轉<br>➔ 16:30 輕軌直達高流看夕陽<br>➔ 18:30 入住愛河灣飯店</td>\n          <td>搭乘高鐵抵達後直奔鹽埕品嚐必比登小吃；午後漫步駁二看當代展覽，看大港橋水平旋轉；傍晚搭乘平穩輕軌在愛河灣迎著海風看落日，入夜欣賞高流外牆光影秀。</td>\n          <td>午餐：鴨肉珍鴨肉飯與下水湯<br>下午茶：樺達奶茶總店＋NOW &amp; THEN<br>晚餐：老新台菜無菜單料理<br>交通：高雄捷運 ＋ 水岸輕軌無縫轉乘</td>\n        </tr>\n        <tr>\n          <td><strong>Day 2：親子樂園狂歡與西子灣晚霞</strong></td>\n          <td>09:30 SKM Park（草衙道）<br>➔ 14:30 渡輪前往旗津<br>➔ 16:30 旗後燈塔遠眺港灣<br>➔ 18:00 西子灣落日觀景<br>➔ 19:30 旗艦景觀餐廳晚餐</td>\n          <td>上午直奔草衙道暢玩鈴鹿賽道與戶外親子樂園；午後搭渡輪去旗津散步吃現烤小卷、外帶波士頓派；傍晚登上燈塔遠眺大港海景與西子灣金黃夕照；晚間在冷氣充足的旗艦餐廳享受豐盛晚餐。</td>\n          <td>早餐：老江紅茶牛奶火腿蛋吐司<br>午餐：草衙道商場特色美食<br>點心：正家興手工波士頓派<br>晚餐：<a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#0F4C81;font-weight:700;\">碳佐麻里時代旗艦店 (線上訂餐)</a><br>住宿：<a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#0F4C81;font-weight:700;\">港景五星級飯店比價</a></td>\n        </tr>\n        <tr>\n          <td><strong>Day 3：大鵬灣跨海漫騎與南部溫暖賦歸</strong></td>\n          <td>09:30 專車出發往大鵬灣<br>➔ 10:30 大鵬灣單車環灣漫遊<br>➔ 13:00 東港華僑市場海鮮<br>➔ 15:30 返回市區買伴手禮<br>➔ 17:00 左營高鐵站賦歸</td>\n          <td>專車南下至大鵬灣國家風景區，沿著開闊潟湖公路騎單車吹海風；中午在東港華僑市場品嚐現切生魚片與海產小吃；午後返回市區採買老字號漢餅伴手禮，帶著滿滿熱情回憶賦歸。</td>\n          <td>午餐：東港華僑市場現撈海鮮代煮<br>下午茶：卡啡那法式甜點<br>伴手禮：舊振南百年漢餅禮盒<br>交通：<a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#E05A47;font-weight:700;\">預約全日包車直達大鵬灣</a></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 第七章：外國旅客專屬重點指南 (English Traveler Essentials) -->\n  <section class=\"english-tips-section\">\n    <div class=\"english-tips-header\">\n      <span style=\"font-size:24px;\">🌐</span>\n      <h3 class=\"english-tips-title\">Kaohsiung Traveler Essentials: Quick Practical Tips</h3>\n    </div>\n    <div class=\"tips-grid\">\n      <div class=\"tip-item\">\n        <h4>1. Waterfront Light Rail &amp; Great Harbor Bridge</h4>\n        <p>Kaohsiung Circular Light Rail (LRT) is the most scenic way to explore the port. Don&#39;t miss the <strong>Great Harbor Bridge rotation ceremony daily at 3:00 PM</strong> (with an extra 7:00 PM session on weekends).</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>2. High-Tech Public Transit</h4>\n        <p>You can tap in and out of the MRT, LRT, and Cijin Ferry using international contactless credit cards (Visa/Mastercard) or EasyCard/iPASS. Ferry rides from Gushan to Cijin take only 5 minutes!</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>3. Local Culinary Heritage</h4>\n        <p>Kaohsiung is famous for its <strong>Smoked Duck Meat</strong> (served with savory minced pork rice) and <strong>Rich Milk Tea</strong> originating from Xinle Street. Try Michelin-selected duck rice at Ya Rou Zhen in Yancheng.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>4. Climate &amp; Spacious Dining Culture</h4>\n        <p>Southern Taiwan enjoys abundant sunshine year-round. Midday temperatures can be intense—take advantage of Kaohsiung’s notoriously spacious, air-conditioned flagship cafes and restaurants between 12:00 PM and 3:30 PM.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- 底部行動呼籲區 -->\n  <div class=\"article-footer-cta\">\n    <h3>展開你的南台灣大港漫活時光</h3>\n    <p>告別烈日排隊與轉乘煩惱，提前鎖定包車、草衙道賽道門票、星級餐廳與港景旅宿。</p>\n    <div class=\"cta-button-group\">\n      <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn primary\">🚗 預約高雄 ＋ 大鵬灣專車包車</a>\n      <a href=\"https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&amp;subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🍽️ 線上預訂人氣餐廳與餐券</a>\n      <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🏨 查詢愛河灣飯店即時房價</a>\n    </div>\n  </div>\n</div>"
      },
      {
        "id": "hop_deep_sunmoonlake_02",
        "vol": "Weekend Hop Vol. 02",
        "isFeatureArticle": true,
        "isLatest": true,
        "isPopular": true,
        "readCount": "31,280 次閱讀",
        "publishDate": "2026.10.27",
        "readTime": "9 MIN READ",
        "nameZh": "水波微瀾的藍色隱居：日月潭環湖公車、全球最美單車道與邵族文化深度長旅",
        "nameEn": "Serenity in Azure: A Discerning Guide to Sun Moon Lake’s Waterside Architecture, Cycling Soul & Thao Heritage",
        "rating": "★ 4.9",
        "reviews": "深度特輯 · 編輯親訪",
        "hours": "四季皆宜 · 3 天 2 夜慢活指南（水上單車道推薦清晨 06:30–08:30 騎行）",
        "city": "南投縣",
        "district": "魚池鄉 · 日月潭 · 車埕",
        "addressZh": "南投縣魚池鄉中山路599號（向山行政暨遊客中心／水社碼頭／伊達邵老街）",
        "addressEn": "No. 599, Zhongshan Rd., Yuchih Township, Nantou County (Xiangshan Visitor Center & Sun Moon Lake)",
        "tags": [
          "🚲 全球十大最美單車道",
          "🏄 晨曦 SUP 立槳",
          "🍵 台茶18號紅玉",
          "🍢 伊達邵手工麻糬",
          "🗓️ 3天2夜排程"
        ],
        "features": "收錄旅人深度露營與晨騎真實心境、向山清水模水上單車道評測、水陸空 3 種視角（綠能渡輪／高空纜車／貓囒山步道）全覽評比、5 大湖岸風土美食（金盆阿嬤茶葉蛋／杜太太手工麻糬／邵族刺蔥料理／湖妹草仔粿／涵碧樓東方餐廳）與 4 間台茶 18 號湖景咖啡茶席，附外國旅客全英文指南與 3 天 2 夜排程。",
        "authorQuote": "「這裡的秋天美得不可思議，滿山層疊著金黃與暖褐色的樹葉，湖畔倒映著秋色，整座山谷就像是一幅靜止的油畫；午後斜陽靜靜灑在微瀾的水面上，波光粼粼如碎鑽般閃耀。」",
        "mapUrl": "https://maps.google.com/?q=日月潭向山遊客中心",
        "affiliateLabel": "🚡 預訂日月潭纜車與遊湖船票 ➔",
        "affiliateUrl": "https://www.klook.com/?aid=123436",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop",
        "fullHtmlArticle": "<div class=\"hop-longform-article\">\n  <!-- 頂部主題徽章與中英文大標題 -->\n  <div class=\"journal-badge\">Weekend Hop Vol. 02 ｜ 台灣深度旅行 · 慢活採訪實錄</div>\n  <h1 class=\"article-title\">水波微瀾的藍色隱居：日月潭環湖公車、全球最美單車道與邵族文化深度長旅</h1>\n  <div class=\"article-subtitle-en\">Serenity in Azure: A Discerning Guide to Sun Moon Lake’s Waterside Architecture, Cycling Soul &amp; Thao Heritage</div>\n\n  <!-- 旅人真實心得隨筆（融合露營、健行、秋景油畫與家庭回憶，已校對潤飾錯字） -->\n  <div class=\"personal-reflection-box\">\n    <div class=\"reflection-header\">\n      <span>✍️</span> <strong>旅人手記：走進水沙連的晨昏、露營與山水仙境</strong>\n    </div>\n    <div class=\"reflection-content\">\n      <p>\n        日月潭是台灣最美的地方之一，也是許多外國旅客初次造訪台灣指名必來的第一站。如果只有一天的短暫時間，其實從台中包車過來非常方便，換上一雙舒服的健行鞋，就能悠閒地走上一整圈環湖步道。\n      </p>\n      <p>\n        這裡的環湖步道是我自己非常喜歡的運動健行地點，沿途兩旁有鬱鬱蔥蔥的植被景觀，身旁則是一汪清澈碧綠的深潭，耳邊不時傳來單車輕巧滑過的鏈條聲，身心瞬間就能感到徹底放鬆。如果有帶小朋友同行，也非常適合直接把腳踏車帶來，讓孩子在平緩的水上自行車道上自在騎行。\n      </p>\n      <p>\n        在我的回憶裡，「露營」絕對是能最深切體會日月潭之美的方式。這裡的秋天美得不可思議，滿山層疊著金黃與暖褐色的樹葉，湖畔倒映著秋色，整座山谷就像是一幅靜止的油畫。最難忘的是在營區露天煮飯的時光——鍋裡冒著熱氣，眼前是湖畔漫步的人群與微風，午後斜陽靜靜灑在微瀾的水面上，波光粼粼如碎鑽般閃耀。飯後牽著家人的手去步道散步、聊天，那種與世無爭的平靜美景，真的讓人永生難忘。\n      </p>\n      <p>\n        台灣最得天獨厚的一點就是四季氣候溫和，日月潭即使在冬天湖水也從不結冰，一年四季無論何時來走走都讓人感到無比舒心。這裡不僅非常適合度假放鬆，也是絕佳的戶外運動場域——除了健行與單車，平靜的潭面更是體驗 SUP 立槳、獨木舟的絕佳水域，每年甚至還會舉辦震撼全台的「萬人泳渡日月潭」國際盛事！\n      </p>\n      <p>\n        每當暮色四合、白天的遊客漸漸散去，晚上的日月潭美得宛如仙境一般，四周無比靜謐，仰頭就是毫無光害的璀璨星空。散步到旁邊的美食老街，這裡的小吃是我心中少數覺得「不會全台灣都賣得千篇一律」的特色街區。現蒸現搗的手工麻糬口感軟糯彈牙，用在地紅茶浸煮的茶葉蛋香氣格外濃郁入味，充滿了在地的風土個性。不過也要特別提醒大家，因為湖邊水氣與濕氣很重，到了夜晚氣溫驟降時會特別濕冷，夜間散步一定要隨身備好防風保暖外套。\n      </p>\n    </div>\n  </div>\n\n  <!-- 活動、票券預約與交通分潤樞紐 (Tickets & Transit Hub) -->\n  <h2 class=\"section-header\"><span>🎟️</span> 玩轉日月潭：活動體驗、票券與直達交通預約樞紐</h2>\n  <div class=\"tickets-hub-grid\">\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚡</div>\n        <div class=\"ticket-title\">日月潭高空纜車門票</div>\n        <div class=\"ticket-desc\">水晶透明車廂 / 俯瞰碧綠湖景 / 快速電子票掃碼入閘</div>\n      </div>\n      <div class=\"ticket-action-btn teal\">Klook 立即訂票 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🏄</div>\n        <div class=\"ticket-title\">日出晨曦 SUP 立槳體驗</div>\n        <div class=\"ticket-desc\">專業教練隨行 / 包含單眼跟拍照片 / 月牙灣平靜水域</div>\n      </div>\n      <div class=\"ticket-action-btn amber\">預約水上 SUP ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚢</div>\n        <div class=\"ticket-title\">綠能遊湖一日乘船券</div>\n        <div class=\"ticket-desc\">水社 ➔ 玄光寺 ➔ 伊達邵當日無限次搭乘 / 無柴油味</div>\n      </div>\n      <div class=\"ticket-action-btn\">線上訂船票 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚲</div>\n        <div class=\"ticket-title\">水上單車 / 電輔車租借</div>\n        <div class=\"ticket-desc\">捷安特車款 / 水社碼頭取車 / 輕鬆挑戰全球十大最美車道</div>\n      </div>\n      <div class=\"ticket-action-btn teal\">預訂自行車 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🛵</div>\n        <div class=\"ticket-title\">水社 / 車埕機車租借</div>\n        <div class=\"ticket-desc\">自由穿梭環湖公路與頭社活盆地 / 隨附安全帽與手機架</div>\n      </div>\n      <div class=\"ticket-action-btn coral\">預約租機車 ➔</div>\n    </a>\n\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🚗</div>\n        <div class=\"ticket-title\">台中高鐵直達包車接送</div>\n        <div class=\"ticket-desc\">高鐵站直達湖畔飯店 / 免轉台灣好行排隊 / 支援多點停留</div>\n      </div>\n      <div class=\"ticket-action-btn\">包車自由行 ➔</div>\n    </a>\n\n    <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🏨</div>\n        <div class=\"ticket-title\">湖景第一排飯店比價</div>\n        <div class=\"ticket-desc\">涵碧樓 / 雲品溫泉酒店 / 伊達邵文青民宿即時訂房</div>\n      </div>\n      <div class=\"ticket-action-btn amber\">Trip.com 訂房 ➔</div>\n    </a>\n\n    <a href=\"https://linkgo.one/s/qYLKx\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"ticket-card\">\n      <div>\n        <div class=\"ticket-icon\">🛵</div>\n        <div class=\"ticket-title\">飯店宵夜外送直達</div>\n        <div class=\"ticket-desc\">晚上不想出門吹風？Uber Eats 宵夜熱騰騰送到前台</div>\n      </div>\n      <div class=\"ticket-action-btn\">開啟 Uber Eats ➔</div>\n    </a>\n  </div>\n\n  <!-- 第一章：CNN 最美單車道與向山清水模 -->\n  <h2 class=\"section-header\"><span>🚲</span> 湖水、光影與水社壩：CNN 驚豔的全球水上騎行路徑</h2>\n  <p class=\"article-body-p\">\n    日月潭環湖自行車道曾獲 CNN 評選為「全球十大最美自行車道」之一。全長約 30 公里，其中精華中的精華，是從<strong>水社遊客中心至向山遊客中心</strong>這段約 3.4 公里的水上自行車道。清晨 06:30 到 08:00 是這段湖岸最純粹的時刻，湖面平靜如鏡，薄霧輕籠湖心拉魯島。\n  </p>\n  <p class=\"article-body-p\">\n    騎行行經<strong>水社壩木棧道</strong>時，無護欄木棧板讓碧綠潭水直接映入眼簾；抵達終點由日本建築大師團紀彥設計的<strong>向山行政暨遊客中心</strong>，無飾面清水模線條如雙手環抱湖水，兩棟建築拉出長達 34 公尺的無柱挑空跨距，中庭無邊際水池倒映著天空與湖光，是沉澱心靈的最佳中繼站。\n  </p>\n\n  <!-- 第二章：水陸空三大視角評比表格 -->\n  <h2 class=\"section-header\"><span>🧭</span> 水陸空 3 種視角看日月潭：渡輪、纜車與步道全覽評比</h2>\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>探索視角</th>\n          <th>交通工具與動線</th>\n          <th>核心視覺看點與亮點</th>\n          <th>避坑叮嚀與最佳時段</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>水上平視（波光倒影）</strong></td>\n          <td>水社 ➔ 玄光寺 ➔ 伊達邵班船</td>\n          <td>乘風破浪行經湖心拉魯島，近距離欣賞水社大山倒映在碧綠湖水中的壯麗全景。</td>\n          <td>建議選搭合格無柴油味的綠能電動船；避開 11:00–14:00 團客排隊高峰。</td>\n        </tr>\n        <tr>\n          <td><strong>高空鳥瞰（湖海山色）</strong></td>\n          <td>日月潭纜車（伊達邵 ➔ 九族文化村）</td>\n          <td>跨越海拔 1,044 公尺卜吉山脊，以「上帝視角」鳥瞰綠寶石般的湖灣與連綿山嶺。</td>\n          <td>水晶透明車廂視野絕佳但需多排隊 15 分鐘；若遇大風雷雨可能暫停行駛。</td>\n        </tr>\n        <tr>\n          <td><strong>山林俯瞰（微觀慢行）</strong></td>\n          <td>貓囒山步道（起點鄰近水社碼頭）</td>\n          <td>穿梭在百年阿薩姆茶園與紅葉錫蘭橄欖樹林間，登頂氣象站遠眺雪山山脈。</td>\n          <td>全長約 2.8 公里，步道平緩好走，清晨晨光灑落茶園時為絕佳拍攝時段。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 第三章：特色美食、老街夜市小吃卡牌矩陣 -->\n  <h2 class=\"section-header\"><span>🍢</span> 湖岸慢嚐：日月潭道地風土料理、排隊小吃與老街麻糬 5 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge snack\">伊達邵老街排隊名攤</span>\n        <h3 class=\"place-name\">阿婆茶葉蛋（金盆阿嬤）</h3>\n        <p class=\"place-location\">📍 玄光碼頭平台（或伊達邵分攤）</p>\n        <p class=\"place-detail\">選用在地台茶 18 號紅玉紅茶葉，加入野生香菇慢火燉煮數十小時。蛋殼輕敲碎裂入味，蛋白 Q 彈、蛋黃濕潤濃郁，散發高雅菇香與茶香。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=玄光碼頭金盆阿嬤茶葉蛋\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge snack\">傳統手工軟糯甜點</span>\n        <h3 class=\"place-name\">伊達邵手工現打麻糬（杜太太）</h3>\n        <p class=\"place-location\">📍 魚池鄉伊達邵老街義勇街</p>\n        <p class=\"place-detail\">每日以純糯米現蒸現搗製，口感軟糯不黏牙，帶著溫熱米香。裹上現磨無糖花生粉與香濃黑芝麻，甜度溫和，是環湖健行時極受歡迎的能量補給。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=伊達邵老街+手工麻糬\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">邵族傳統原鄉香料</span>\n        <h3 class=\"place-name\">邵族傳統風味餐：支部山產</h3>\n        <p class=\"place-location\">📍 魚池鄉伊達邵老街義勇街</p>\n        <p class=\"place-detail\">以邵族靈魂香料「刺蔥（Tana）」入菜，刺蔥煎蛋外酥內嫩；搭配清蒸潭魚（奇力魚與總統魚）、石板烤山豬肉與竹筒小米飯，展現純粹的山林風味。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=伊達邵支部山產\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge snack\">純天然草本米食</span>\n        <h3 class=\"place-name\">湖妹手作草仔粿</h3>\n        <p class=\"place-location\">📍 魚池鄉伊達邵老街</p>\n        <p class=\"place-detail\">純手工糯米揉製，外皮加入新鮮艾草，蒸透後散發濃郁草本香氣。內餡包覆大火爆炒的菜脯米、香菇與黑豬肉丁，鹹香軟糯、層次分明。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=湖妹手作草仔粿\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">湖畔第一排奢華款待</span>\n        <h3 class=\"place-name\">涵碧樓東方餐廳</h3>\n        <p class=\"place-location\">📍 魚池鄉中興路 142 號（涵碧半島）</p>\n        <p class=\"place-detail\">坐擁日月潭絕美水岸第一排。主廚將阿薩姆茶湯慢火煨入排骨，成就招牌「涵碧紅茶無錫排骨」，肉質軟爛甘甜，佐以窗外晨昏光影，是極致的味覺饗宴。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=涵碧樓東方餐廳\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第四章：特色咖啡館與必喝紅茶茶席卡牌 -->\n  <h2 class=\"section-header\"><span>☕</span> 湖景咖啡與台茶 18 號：茶園老宅、無邊框水波 4 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge tea\">紅玉產地現沖冠軍茶席</span>\n        <h3 class=\"place-name\">朝霧茶莊・TEA18 朝霧紅茶</h3>\n        <p class=\"place-location\">📍 魚池鄉水社村中山路 218 號</p>\n        <p class=\"place-detail\">戶外木棧露天座位正對綠意。招牌現沖冷萃「台茶 18 號紅玉紅茶」，散發天然肉桂香與薄荷尾韻，搭配手工阿薩姆紅茶冰淇淋，是午後最清涼的茶席享受。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=TEA18朝霧紅茶\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">穿透玻璃極簡美學</span>\n        <h3 class=\"place-name\">蠻荒咖啡 Desolate Coffee</h3>\n        <p class=\"place-location\">📍 魚池鄉中明村文化巷 41 號（台 21 線旁）</p>\n        <p class=\"place-detail\">建築以大片穿透玻璃與原木線條交織，是前往湖畔的經典公路地標。必點耶加雪菲單品手沖與義式烤生乳酪蛋糕，空間採光通透明亮。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=蠻荒咖啡\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">碼頭第一排無遮蔽水岸</span>\n        <h3 class=\"place-name\">先得月 Tea Bar</h3>\n        <p class=\"place-location\">📍 魚池鄉中山路 199 號（承億文旅頂樓）</p>\n        <p class=\"place-detail\">緊鄰朝霧碼頭第一排，毫無遮蔽的水岸景觀。主打日月潭頂級紅玉單株手沖茶、小農厚奶茶與法式焦糖千層，靜坐看湖面波光、遠離嘈雜人潮。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=先得月TeaBar\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">日式侘寂老屋榻榻米</span>\n        <h3 class=\"place-name\">湖の怪物 咖啡</h3>\n        <p class=\"place-location\">📍 魚池鄉頭社村平和巷 78 號</p>\n        <p class=\"place-detail\">日式傳統木造老屋與榻榻米座席。招牌為童趣造型的手工「日式烤紅龜粿」（紅豆、花生、芋頭三種口味）佐日本宇治抹茶，環境靜謐如置身京都小鎮。</p>\n      </div>\n      <div class=\"place-btn-row\">\n        <a href=\"https://maps.google.com/?q=湖の怪物咖啡\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ Google Maps 導航</a>\n      </div>\n    </div>\n  </div>\n\n  <!-- 第五章：深度 3 天 2 夜行程規劃表 -->\n  <h2 class=\"section-header\"><span>🗓️</span> 慢水沙連：日月潭 3 天 2 夜經典深度排程表</h2>\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>天數與主題</th>\n          <th>時間動線</th>\n          <th>深度體驗行程內容</th>\n          <th>推薦餐食與交通串接</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>Day 1：抵達與湖西光影</strong></td>\n          <td>10:00 台中高鐵站<br>➔ 11:30 蠻荒咖啡<br>➔ 14:00 水社碼頭<br>➔ 15:30 貓囒山茶園步道<br>➔ 18:00 入住水社飯店</td>\n          <td>專車接駁抵達魚池山麓，在通透玻璃屋喝手沖；下午至水社辦理入住，漫步貓囒山茶園步道欣賞夕照；入夜後漫步水社親水棧道，享受無人潮時的寧靜湖景。</td>\n          <td>午餐：蠻荒咖啡輕食甜點<br>晚餐：水社在地野菇原鄉料理<br>交通：<a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#0E5A77;font-weight:700;\">預約台中高鐵直達包車</a></td>\n        </tr>\n        <tr>\n          <td><strong>Day 2：水上晨騎與原鄉靈魂</strong></td>\n          <td>06:30 水社水上自行車道<br>➔ 09:00 向山遊客中心<br>➔ 11:00 綠能船航向伊達邵<br>➔ 14:00 高空纜車<br>➔ 16:30 伊達邵部落散策</td>\n          <td>清晨騎乘單車穿梭向山水上路段；在清水模光影中喝咖啡；午前搭綠能遊艇前往伊達邵，搭高空纜車俯瞰湖景；傍晚逛老街吃手工現打麻糬與香菇茶葉蛋。</td>\n          <td>早餐：向山湖畔咖啡早餐<br>午餐：邵族刺蔥山豬肉風味餐<br>點心：杜太太手工現做麻糬<br>住宿：<a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#0E5A77;font-weight:700;\">伊達邵碼頭湖畔民宿比價</a></td>\n        </tr>\n        <tr>\n          <td><strong>Day 3：頭社活盆地與鐵道木業</strong></td>\n          <td>09:30 頭社水庫步道<br>➔ 11:00 湖の怪物日式茶點<br>➔ 13:30 車埕鐵道木業小鎮<br>➔ 16:30 返回台中高鐵站</td>\n          <td>走訪全台罕見的「頭社泥炭土活盆地」，體驗踩在如水床般彈跳的地表；走訪車埕老火車站、木業展示館與貯木池，感受昔日林業繁華後賦歸。</td>\n          <td>午餐：阿日細麵在地家常麵<br>點心：湖の怪物烤紅龜粿<br>交通：包車接駁至車埕並轉往高鐵</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 第六章：專為外國旅客設計的全英文重點指南 (English Traveler Essentials) -->\n  <section class=\"english-tips-section\">\n    <div class=\"english-tips-header\">\n      <span style=\"font-size:24px;\">🌐</span>\n      <h3 class=\"english-tips-title\">Sun Moon Lake Traveler Essentials: Quick Practical Tips</h3>\n    </div>\n    <div class=\"tips-grid\">\n      <div class=\"tip-item\">\n        <h4>1. Best Time for Cycling &amp; Photos</h4>\n        <p>The Xiangshan Water Bikeway is best enjoyed between <strong>06:30 AM and 08:30 AM</strong> before tour crowds and shuttle boats start. The morning mist over Lalu Island provides magical lighting.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>2. Electric Ferry Tickets (Shuishe &amp; Ita Thao)</h4>\n        <p>Avoid street vendors selling non-official tickets at piers. Book your <strong>Day-Pass Electric Ferry Ticket</strong> online in advance for unlimited hops between Shuishe, Xuanguang, and Ita Thao.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>3. Local Tea &amp; Food Culture</h4>\n        <p>Sun Moon Lake is world-renowned for its <strong>Taiwan Tea No. 18 (Ruby Black Tea)</strong>, notable for subtle notes of cinnamon and mint. Pair it with warm handmade mochi or herbal tea eggs in Ita Thao.</p>\n      </div>\n\n      <div class=\"tip-item\">\n        <h4>4. Weather &amp; Night Temperature Drop</h4>\n        <p>Due to high basin humidity, temperatures drop significantly after sunset (often 4–6°C cooler than Taichung City). Always pack a lightweight windproof and water-resistant jacket.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- 底部行動呼籲區 -->\n  <div class=\"article-footer-cta\">\n    <h3>展開你的水沙連藍色隱居之旅</h3>\n    <p>告別公路轉乘勞頓與排隊等候，提前鎖定包車、高空纜車、水上 SUP 與湖景旅宿。</p>\n    <div class=\"cta-button-group\">\n      <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn primary\">🚗 預約台中高鐵至日月潭包車</a>\n      <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🚡 預訂高空纜車與船票聯票</a>\n      <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🏨 查詢湖景飯店即時空房</a>\n    </div>\n  </div>\n</div>"
      },
      {
        "id": "hop_deep_alishan_01",
        "vol": "Weekend Hop Vol. 01",
        "isFeatureArticle": true,
        "isLatest": true,
        "isPopular": true,
        "readCount": "28,450 次閱讀",
        "publishDate": "2026.10.27",
        "readTime": "8 MIN READ",
        "nameZh": "雲海之巔的慢速呼吸：阿里山林業鐵路全線通車，與山麓聚落茶香避世指南",
        "nameEn": "The Mist, The Rails, The Mountain Soul: Complete Alishan Forest Railway & Foothill Retreat Guide",
        "rating": "★ 4.9",
        "reviews": "深度特輯 · 編輯親訪",
        "hours": "全線通車 · 3 天 2 夜慢活指南（林鐵建議乘車前 14 天 06:00 預訂）",
        "city": "嘉義縣",
        "district": "阿里山鄉 · 竹崎 · 梅山",
        "addressZh": "嘉義縣阿里山鄉中正村59號（阿里山國家森林遊樂區／奮起湖／石棹茶區）",
        "addressEn": "No. 59, Zhongzheng Vil., Alishan Township, Chiayi County (Alishan Forest Recreation Area)",
        "tags": [
          "🚂 林鐵全線通車",
          "🌲 千年紅檜神木",
          "☕ 山麓秘境咖啡",
          "🌅 小笠原山日出",
          "🗓️ 3天2夜排程"
        ],
        "features": "來過無數次阿里山的真情告白：從單身追曙光到帶著孩子露營淨化心靈。完整收錄阿里山林鐵全線通車歷史與四大螺旋工法、紅檜巨木科學樹齡、5 大必吃山味（奮起湖雅湖便當／Hana 廚房／山賓石頭火鍋／游芭絲鄒宴／阿嬤草仔粿）、3 間雲海咖啡莊園，以及小笠原山追日出評比與 3 天 2 夜慢活排程表。",
        "authorQuote": "「雨中的阿里山宛如走進宮崎駿動畫般的夢幻森林仙境，耳邊伴隨著清脆的鳥鳴，呼吸著滿滿濕潤新鮮的空氣，心裡平時累積的煩躁與雜念瞬間全被洗滌一空。」",
        "mapUrl": "https://maps.google.com/?q=阿里山國家森林遊樂區",
        "affiliateLabel": "🚗 預約阿里山包車與住宿 ➔",
        "affiliateUrl": "https://www.klook.com/?aid=123436",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=1000&auto=format&fit=crop",
        "fullHtmlArticle": "<div class=\"hop-longform-article\">\n  <!-- 頂部徽章與中英雙語標題 -->\n  <div class=\"journal-badge\">Weekend Hop Vol. 01 ｜ 台灣深度旅行 · 慢活採訪實錄</div>\n  <h1 class=\"article-title\">雲海之巔的慢速呼吸：阿里山林業鐵路全線通車，與山麓聚落茶香避世指南</h1>\n  <div class=\"article-subtitle-en\">The Mist, The Rails, The Mountain Soul: Complete Alishan Forest Railway &amp; Foothill Retreat Guide</div>\n\n  <!-- 作者真實心境文案（已校對潤飾錯字） -->\n  <div class=\"personal-story-box\">\n    <div class=\"personal-story-header\">\n      <span>✍️</span> <strong>旅人手記：來過無數次阿里山，每一次都有新的領悟</strong>\n    </div>\n    <div class=\"personal-story-content\">\n      <p>\n        來過阿里山很多次，從單身一人、到結伴同行、再到現在牽著孩子的手，每次上山玩的感受都全然不同。以前年輕時來到阿里山，總是一股腦為了追逐破曉日出，覺得新的一年看見第一道曙光照亮山頭，就是一個充滿力量的美好開始。\n      </p>\n      <p>\n        如今有了家庭，我更喜歡帶著孩子們到阿里山露營，真切地沉浸在森林的芬多精與大自然裡。每次開車上來，老實說都會覺得阿里山的山路真的很有挑戰性，而且每次造訪的路況景致都在變；但也正因為穿梭在層層疊疊的林道間，不管是自己開車或是預約包車，都能讓人更深切地感受到大自然的壯闊與奧妙。\n      </p>\n      <p>\n        山上的天氣變化極快。我記得有一次二月上山，夜裡超級冷，但當晚出去散步時，夜空晴空萬里，星光透澈乾淨得像灑滿鑽石；原本滿心期待隔天能迎來燦爛曙光，天亮時迎來的卻是綿綿細雨。那天我們穿著雨衣漫步在阿里山步道上，雖然地上的雨水帶著濕冷，但雨中的阿里山卻美得令人屏息——那是一種宛如走進「宮崎駿動畫」般的夢幻森林仙境，耳邊伴隨著清脆的鳥鳴，呼吸著滿滿濕潤新鮮的空氣。在園區完全禁止車輛通行的步道裡，只有難得的寧靜，心裡平時累積的煩躁與雜念瞬間全被洗滌一空。這也是為什麼，我每年都渴望回到這裡好好「淨化」一次自己。\n      </p>\n      <p>\n        除了高山露營與茶園漫步，我們每次來一定會品嚐山裡的野菜與原民柴燒美味；帶著孩子到奮起湖走走也是保留節目，這裡有小朋友最著迷的古老小火車，還有許多免費又悠閒的景點。手牽著手走在平交道鐵軌旁，看著小火車穿梭而過，空氣中飄散著老建築特有的檜木芳香；午後再帶孩子一起遠眺翻騰的阿里山雲海——那真的是全台灣最壯觀的景致，彷彿整個人輕柔躺在雲朵之巔。強烈建議大家一定要找一家舒適的景觀民宿或飯店住上一晚，晚上走出來散散步、聽聽大自然的風聲蟲鳴，仰望無光害的透澈星空，這才是阿里山最真實的靈魂。\n      </p>\n    </div>\n  </div>\n\n  <!-- 快速預約樞紐與分潤通道 -->\n  <div class=\"hub-grid\">\n    <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hub-card\">\n      <div>\n        <div class=\"hub-card-icon\">🚗</div>\n        <div class=\"hub-card-title\">嘉義阿里山包車直達</div>\n        <div class=\"hub-card-desc\">高鐵站接駁 / 免開難走山路 / 隨停二延平雲海</div>\n      </div>\n      <div class=\"hub-card-btn coral\">Klook 官方預約 ➔</div>\n    </a>\n\n    <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hub-card\">\n      <div>\n        <div class=\"hub-card-icon\">🏨</div>\n        <div class=\"hub-card-title\">園區與石棹茶園旅宿</div>\n        <div class=\"hub-card-desc\">阿里山賓館 / 森林閣 / 雲海景觀民宿即時比價</div>\n      </div>\n      <div class=\"hub-card-btn\">Trip.com 訂房 ➔</div>\n    </a>\n\n    <a href=\"https://linkgo.one/s/ikCjF\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hub-card\">\n      <div>\n        <div class=\"hub-card-icon\">🍵</div>\n        <div class=\"hub-card-title\">茶山小農手作茶席</div>\n        <div class=\"hub-card-desc\">走入石棹茶之道，由茶師親授手作工夫茶席</div>\n      </div>\n      <div class=\"hub-card-btn amber\">奧丁丁在地預約 ➔</div>\n    </a>\n\n    <a href=\"https://linkgo.one/s/qYLKx\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"hub-card\">\n      <div>\n        <div class=\"hub-card-icon\">🛵</div>\n        <div class=\"hub-card-title\">市區伴手禮外送直達</div>\n        <div class=\"hub-card-desc\">下榻飯店免排隊！Uber Eats 火速外送</div>\n      </div>\n      <div class=\"hub-card-btn\">開啟 Uber Eats ➔</div>\n    </a>\n  </div>\n\n  <!-- 第一章：百年林鐵歷史與螺旋工法 -->\n  <h2 class=\"section-header\"><span>🚂</span> 百年林鐵全線通車：歷史、四大螺旋工法與票務解密</h2>\n  <p class=\"article-body-p\">\n    阿里山林業鐵路始建於 1912 年（日治時期明治 45 年），全長 71.4 公里。它不只是全台唯一的登山窄軌鐵道，更因應嚴苛高山地形匯聚了世界四大鐵道工法：<strong>獨立山螺旋登山線</strong>（繞山三圈爬升）、<strong>之字形折返（Switchback）</strong>、<strong>特殊 Shay 蒸汽機車直立汽缸</strong>，以及在短短幾十公里內由熱帶龍眼竹林一路垂直攀升至溫帶紅檜巨木林。\n  </p>\n\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>鐵路支線 / 區間</th>\n          <th>行駛海拔與路段</th>\n          <th>核心視覺看點</th>\n          <th>購票秘技與注意事項</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>林鐵本線（全線重啟）</strong></td>\n          <td>30m ➔ 2,216m<br>(嘉義車站 ➔ 阿里山車站)</td>\n          <td>穿越 49 座隧道、獨立山螺旋線、樟腦寮折返線</td>\n          <td>乘車日前 14 天上午 06:00 準時於林鐵官網搶票；每日直達班次限量。</td>\n        </tr>\n        <tr>\n          <td><strong>祝山觀日支線</strong></td>\n          <td>2,216m ➔ 2,451m<br>(阿里山車站 ➔ 祝山車站)</td>\n          <td>全台海拔最高鐵路車站，破曉時分直擊玉山群峰金黃晨曦</td>\n          <td>每日 13:00–16:00 於阿里山車站現場預售隔日車票；發車時間依日出調整。</td>\n        </tr>\n        <tr>\n          <td><strong>神木森林支線</strong></td>\n          <td>2,216m ➔ 2,138m<br>(阿里山車站 ➔ 神木車站)</td>\n          <td>古樸全檜木車廂穿梭於巨木綠蔭與青苔林道之間</td>\n          <td>班次密集（約 30 分鐘一班），可現場刷悠遊卡入閘，推薦單程搭車、單程健行。</td>\n        </tr>\n        <tr>\n          <td><strong>沼平賞櫻支線</strong></td>\n          <td>2,216m ➔ 2,274m<br>(阿里山車站 ➔ 沼平車站)</td>\n          <td>櫻花鐵道核心地標、直達阿里山閣飯店與姊妹潭步道口</td>\n          <td>春季櫻花季極熱門，平日適合隨到隨搭漫步沼平公園。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 第二章：神木年齡科學考證與森林生態 -->\n  <h2 class=\"section-header\"><span>🌲</span> 森林裡住著幾歲的樹？巨木科學樹齡與高山生態</h2>\n  <p class=\"article-body-p\">\n    過去旅遊書籍常標註神木有「兩千歲、三千歲」，近年林務局（林業及自然保育署）與學術研究團隊以專業生長錐鑽取樹芯，並結合 DNA 遺傳檢測，證實了多數紅檜神木其實是「多株幼苗根系聚合生長」而成的複合巨木，進而公布了科學嚴謹的真實年齡：\n  </p>\n\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>巨木名稱 / 編號</th>\n          <th>樹種</th>\n          <th>科學檢定年齡</th>\n          <th>過去預估年齡</th>\n          <th>步道位置與參觀重點</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>巨木群 2 號巨木</strong></td>\n          <td>紅檜</td>\n          <td><strong>約 1,515 歲</strong>（全園最高齡）</td>\n          <td>無科學紀錄</td>\n          <td>巨木群棧道第一期，樹幹胸圍達 12.3 公尺，蒼勁挺拔。</td>\n        </tr>\n        <tr>\n          <td><strong>香林神木（光武檜）</strong></td>\n          <td>紅檜</td>\n          <td><strong>約 626 歲</strong></td>\n          <td>原誤估 2,300 歲</td>\n          <td>慈雲寺旁受鎮宮上方，由兩株紅檜融合，是園區第二代神木代表。</td>\n        </tr>\n        <tr>\n          <td><strong>水山巨木</strong></td>\n          <td>紅檜</td>\n          <td><strong>約 1,081 歲</strong></td>\n          <td>原預估 1,200 歲</td>\n          <td>沿水山廢棄舊鐵道漫步 1.6 公里，遊客稀少，被譽為最靜謐的神木。</td>\n        </tr>\n        <tr>\n          <td><strong>千歲檜</strong></td>\n          <td>紅檜</td>\n          <td><strong>約 821 歲</strong></td>\n          <td>原誤估 2,000 歲</td>\n          <td>巨木棧道必經，雙叉分枝如高舉雙手向天祈福，姿態極具張力。</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 第三章：特色美食 5 選卡牌 -->\n  <h2 class=\"section-header\"><span>🍱</span> 山味漫嚐：阿里山經典特色美饌 5 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">老街傳奇便當</span>\n        <h3 class=\"place-name\">奮起湖雅湖鐵路便當</h3>\n        <p class=\"place-location\">📍 竹崎鄉奮起湖老街口</p>\n        <p class=\"place-detail\">古法木盒盛裝，甘蔗慢滷厚排骨與無骨雞腿雙主菜，佐以高山鮮脆龍鬚菜與茶葉蛋，米飯粒粒分明透著古早柴火香。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=奮起湖雅湖鐵路便當\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">鄒族 × 南非柴燒</span>\n        <h3 class=\"place-name\">Hana 廚房（來吉部落）</h3>\n        <p class=\"place-location\">📍 阿里山鄉來吉部落 2 樓</p>\n        <p class=\"place-detail\">由南非女孩與鄒族青年共創的深山餐廳。自製柴燒天然酵母披薩、香烤山豬肉佐迷迭香生菜沙拉，景觀面向壯麗懸崖。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=Hana廚房\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">高海拔暖胃首選</span>\n        <h3 class=\"place-name\">山賓餐廳（石頭火鍋）</h3>\n        <p class=\"place-location\">📍 阿里山森林園區商圈</p>\n        <p class=\"place-detail\">氣溫驟降時的救贖！傳統黑鐵鍋以麻油扁魚爆香高湯，加入堆成小山的高山甘甜高麗菜與排骨酥，是登山客夜間必排熱門名店。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=阿里山山賓餐廳\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">山美露天炭火</span>\n        <h3 class=\"place-name\">游芭絲鄒宴餐廳（YUPASU）</h3>\n        <p class=\"place-location\">📍 阿里山鄉山美村（近達娜伊谷）</p>\n        <p class=\"place-detail\">原木大圓烤盤懸掛煙燻香腸與脆皮山豬肉，搭配清爽的山芹菜煎蛋與竹筒小米飯，露天座位正對深谷綠意。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=游芭絲鄒宴餐廳\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">半世紀純米手工</span>\n        <h3 class=\"place-name\">街仔尾阿嬤草仔粿</h3>\n        <p class=\"place-location\">📍 奮起湖老街下腳處 7 號</p>\n        <p class=\"place-detail\">每日以純鼠麴草慢揉糯米外皮，內餡填滿爆炒高山轎篙筍丁、蝦米與絞肉。出蒸籠時草香四溢，是絕佳健行登山乾糧。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=街仔尾阿嬤草仔粿\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n  </div>\n\n  <!-- 第四章：特色咖啡館卡牌 -->\n  <h2 class=\"section-header\"><span>☕</span> 雲海畔的咖啡香：台 18 線與山麓咖啡莊園 3 選</h2>\n  <div class=\"card-matrix\">\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">全國烘焙冠亞軍</span>\n        <h3 class=\"place-name\">璟隆咖啡莊園</h3>\n        <p class=\"place-location\">📍 番路鄉隙頂（台 18 線 55K 處）</p>\n        <p class=\"place-detail\">正對象山茶園壯闊視野。招牌 SL34 日曬單品手沖，散發明亮深色莓果與蜜餞酸甜；搭配手作焦糖昭和布丁，是在隙頂等候雲海的最佳落腳點。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=璟隆咖啡莊園\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">部落童話石砌聚落</span>\n        <h3 class=\"place-name\">阿將的家 23 咖啡館</h3>\n        <p class=\"place-location\">📍 阿里山鄉樂野村（海拔 1,200m）</p>\n        <p class=\"place-detail\">鄒族夫婦耗時多年以天然石塊與廢棄檜木堆疊而成。環境如宮崎駿動畫場景，手沖藝伎咖啡甘甜細膩，附現烤酥脆小米鬆餅。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=阿將的家23咖啡館\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n\n    <div class=\"place-card\">\n      <div>\n        <span class=\"place-badge\">無邊框茶田畫卷</span>\n        <h3 class=\"place-name\">霧裡村 喫茶會所</h3>\n        <p class=\"place-location\">📍 梅山鄉太和村（近樟樹湖）</p>\n        <p class=\"place-detail\">三面超大落地玻璃正對層疊起伏的階梯茶園。提供自家產高山金萱冷泡茶、精品熱手沖與茶香戚風蛋糕，雲霧翻湧時如置身仙境。</p>\n      </div>\n      <a href=\"https://maps.google.com/?q=霧裡村喫茶會所\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"place-footer-btn\">🗺️ 開啟 Google Maps 導航</a>\n    </div>\n  </div>\n\n  <!-- 第五章：追日出全攻略比較 -->\n  <h2 class=\"section-header\"><span>🌅</span> 追日出全攻略：小笠原山 360 度環景 vs 祝山觀景台</h2>\n  <div class=\"compare-container\">\n    <div class=\"compare-card\">\n      <h3 class=\"compare-title\">祝山觀景台（站前經典）</h3>\n      <p class=\"compare-desc\">\n        • <strong>步行時間</strong>：祝山火車站出站後步行 1 分鐘即達。<br>\n        • <strong>優勢</strong>：出站極快、現場有公廁與熱飲茶葉蛋攤販，適合長輩或同行幼童。<br>\n        • <strong>劣勢</strong>：人潮極度密集，拍照易受前排人群與右側樹冠遮擋，晨光視野角度約 180 度。\n      </p>\n    </div>\n\n    <div class=\"compare-card highlight\">\n      <h3 class=\"compare-title\">⭐ 小笠原山觀景台（推薦首選）</h3>\n      <p class=\"compare-desc\">\n        • <strong>步行時間</strong>：祝山出站後沿木棧道緩步上行約 12–15 分鐘。<br>\n        • <strong>優勢</strong>：坐擁 <strong>360 度全開闊無死角環景</strong>！正對玉山主峰，晨光破曉時金芒灑落山脊，幸運時能在草坡旁巧遇國寶帝雉覓食。<br>\n        • <strong>劣勢</strong>：清晨氣溫僅 6–10°C，木棧道稍有晨露微滑，需備妥防風保暖帽與抓地運動鞋。\n      </p>\n    </div>\n  </div>\n\n  <!-- 第六章：深度 3 天 2 夜行程規劃表 -->\n  <h2 class=\"section-header\"><span>🗓️</span> 慢活節奏：阿里山 3 天 2 夜經典排程表</h2>\n  <div class=\"table-container\">\n    <table class=\"curated-table\">\n      <thead>\n        <tr>\n          <th>天數</th>\n          <th>時間動線</th>\n          <th>深度體驗行程內容</th>\n          <th>推薦餐食與交通串接</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td><strong>Day 1</strong></td>\n          <td>09:00 嘉義市出發<br>➔ 11:30 奮起湖老街<br>➔ 15:00 阿里山園區</td>\n          <td>搭乘林鐵本線螺旋攀升；抵達奮起湖漫步檜木老街、走訪杉林步道；下午入園進駐飯店，傍晚於慈雲寺觀景台欣賞落日晚霞與壯麗雲瀑。</td>\n          <td>午餐：奮起湖鐵路便當<br>晚餐：山賓餐廳石頭火鍋<br>交通：<a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#C85A32;font-weight:700;\">預約高鐵包車接送</a></td>\n        </tr>\n        <tr>\n          <td><strong>Day 2</strong></td>\n          <td>04:30 祝山觀日火車<br>➔ 06:00 小笠原山日出<br>➔ 09:00 巨木群步道<br>➔ 14:30 樂野部落</td>\n          <td>搭乘祝山線小火車迎接玉山晨曦；沿松針步道漫步回沼平公園；踏上巨木群棧道拜訪 1,515 歲的 2 號巨木與神木車站；午後專車前往樂野「阿將的家」品啜手沖藝伎。</td>\n          <td>早餐：祝山熱薑茶與包子<br>下午茶：阿將的家手沖咖啡<br>晚餐：游芭絲鄒宴餐廳炭烤<br>住宿：<a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:#0F4C81;font-weight:700;\">石棹雲海民宿比價</a></td>\n        </tr>\n        <tr>\n          <td><strong>Day 3</strong></td>\n          <td>09:30 石棹茶之道<br>➔ 11:30 隙頂咖啡午茶<br>➔ 14:00 二延平步道<br>➔ 16:30 嘉義高鐵站</td>\n          <td>沿著石棹茶園階梯步道漫步，感受雲霧隨風拂過茶樹葉梢；中午至璟隆咖啡莊園品嚐單品與昭和布丁；短暫停留二延平步道俯瞰公路大景，舒緩賦歸。</td>\n          <td>午餐：茶鄉家常無菜單<br>點心：璟隆咖啡莊園手作甜點<br>交通：預約專車直達嘉義高鐵站</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <!-- 底部行動呼籲區 -->\n  <div class=\"article-footer-cta\">\n    <h3>規劃你的阿里山慢旅記憶</h3>\n    <p>告別走馬看花與山路轉乘困擾，透過經認證的管道提前鎖定專屬包車、高山旅宿與茶席體驗。</p>\n    <div class=\"cta-button-group\">\n      <a href=\"https://www.klook.com/?aid=123436\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn primary\">🚗 預約嘉義高鐵包車自由行</a>\n      <a href=\"https://www.trip.com/?Allianceid=9507030&amp;SID=325761227&amp;trip_sub3=D20272275\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🏨 查詢阿里山與石棹飯店空房</a>\n      <a href=\"https://linkgo.one/s/qYLKx\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"cta-btn secondary\">🛵 Uber Eats 美食外送到飯店</a>\n    </div>\n  </div>\n</div>"
      },
      {
        "id": "hop_7_1",
        "nameZh": "鼻頭角稜谷步道",
        "nameEn": "Bitou Cape Trail New Taipei",
        "rating": "★ 4.8",
        "reviews": "6,800 則評價",
        "hours": "全天開放 (建議日間行走)",
        "city": "新北市",
        "district": "瑞芳區",
        "addressZh": "新北市瑞芳區鼻頭路",
        "addressEn": "Bitou Rd., Ruifang Dist., New Taipei City",
        "tags": [
          "🌊 台版小萬里長城",
          "🌅 360 度海景山稜",
          "🚗 鼻頭漁港停車"
        ],
        "features": "被美譽為「台版萬里長城」的絕美海稜步道！依傍著太平洋陡峭山稜線蜿蜒起伏，一側是湛藍深邃的大海，另一側是翠綠山脈，木棧道盡頭更有迷彩聽濤咖啡館。",
        "mapUrl": "https://maps.google.com/?q=鼻頭角稜谷步道",
        "affiliateLabel": "🚗 預約九份東北角一日包車 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E4%B9%9D%E4%BB%BD%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
        "isPopular": true,
        "readCount": "17,640 次閱讀"
      },
      {
        "id": "hop_7_2",
        "nameZh": "火炎山自然保留區",
        "nameEn": "Huoyan Mountain Grand Canyon Miaoli",
        "rating": "★ 4.7",
        "reviews": "5,400 則評價",
        "hours": "全天開放 (環狀步道約 3.5 小時)",
        "city": "苗栗縣",
        "district": "三義鄉／苑裡鎮交界",
        "addressZh": "苗栗縣三義鄉／苑裡鎮交界（台13線旁步道口）",
        "addressEn": "Sanyi Township / Yuanli Township Border, Miaoli County",
        "tags": [
          "🌾 台版美國大峽谷",
          "🌅 壯觀赭紅惡地",
          "🚗 台13線停車場"
        ],
        "features": "震撼全網的「台版美國大峽谷」！礫岩地層經長期風化雨蝕，形成尖銳如筍的赭紅絕壁峽谷，落日時分在夕陽映照下有如熊熊燃燒的火燄山，地質景觀無比壯麗。",
        "mapUrl": "https://maps.google.com/?q=火炎山登山步道",
        "affiliateLabel": "🚗 Trip.com 全台租車自駕比價 ➔",
        "affiliateUrl": "https://trip.com?Allianceid=9507030&SID=325761227&trip_sub1=CarRental",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_7_3",
        "nameZh": "高美濕地木棧道",
        "nameEn": "Gaomei Wetlands Boardwalk Taichung",
        "rating": "★ 4.8",
        "reviews": "18,900 則評價",
        "hours": "09:00 - 18:30 (依漲退潮開放)",
        "city": "台中市",
        "district": "清水區",
        "addressZh": "台中市清水區美堤街",
        "addressEn": "Meiti St., Qingshui Dist., Taichung City",
        "tags": [
          "🌅 全台最美落日倒影",
          "🌾 巨大白色風車陣",
          "🦀 生態泥灘天空之鏡"
        ],
        "features": "世界級天空之鏡日落景觀！延伸數百公尺的木棧道直達泥灘心臟地帶，一排潔白風車與夕陽金黃餘暉倒映在如鏡水面，彈塗魚與招潮蟹在腳下穿梭。",
        "mapUrl": "https://maps.google.com/?q=高美濕地木棧道",
        "affiliateLabel": "🎟️ Klook 台中高美半日遊 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/activity/13214-gaomei-wetland-taichung/?aid=123436",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_7_4",
        "nameZh": "清水斷崖 坂下海灣",
        "nameEn": "Qingshui Cliff Sakashita Bay Hualien",
        "rating": "★ 4.9",
        "reviews": "9,800 則評價",
        "hours": "全天開放 (蘇花公路旁)",
        "city": "花蓮縣",
        "district": "秀林鄉",
        "addressZh": "花蓮縣秀林鄉蘇花公路（崇德隧道北口旁）",
        "addressEn": "Suhua Highway, Xiulin Township, Hualien County",
        "tags": [
          "🌊 千米絕壁直插深藍",
          "🌅 日出立槳 SUP",
          "🚗 觀景平台附車位"
        ],
        "features": "台灣八大奇景之首！千公尺高拔的大理石絕壁直插入深邃太平洋，海水因深度呈現翡翠綠至琉璃藍的夢幻漸層，晨曦時分在海面上划立式划槳（SUP）更是畢生難忘體驗。",
        "mapUrl": "https://maps.google.com/?q=清水斷崖",
        "affiliateLabel": "🎟️ Klook 清水斷崖 SUP 日出團 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E6%B8%85%E6%B0%B4%E6%96%B7%E5%B4%96&aid=123436",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_7_5",
        "nameZh": "太麻里多良車站",
        "nameEn": "Duoliang Station Taitung",
        "rating": "★ 4.7",
        "reviews": "8,200 則評價",
        "hours": "07:00 - 18:00 (清潔費入園)",
        "city": "台東縣",
        "district": "太麻里鄉",
        "addressZh": "台東縣太麻里鄉瀧溪路8-1號",
        "addressEn": "No. 8-1, Longxi Rd., Taimali Township, Taitung County",
        "tags": [
          "🌊 全台最美靠海車站",
          "🛤️ 鮮紅鐵道欄杆",
          "🚗 南迴公路旁"
        ],
        "features": "被旅人公認為「全台灣最美靠海車站」！鮮紅色鐵欄杆座落懸崖高台，當紅色柴油火車從隧道穿出呼嘯而過，背後是無邊無際的太平洋蔚藍波濤，構圖如日系動漫般詩意浪漫。",
        "mapUrl": "https://maps.google.com/?q=多良車站",
        "affiliateLabel": "🚗 預訂台東花東海岸包車 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E6%9D%B1%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_8_1",
        "nameZh": "國立故宮博物院",
        "nameEn": "National Palace Museum Taipei",
        "rating": "★ 4.8",
        "reviews": "36,000 則評價",
        "hours": "09:00 - 17:00 (週一公休)",
        "city": "台北市",
        "district": "士林區",
        "addressZh": "台北市士林區至善路二段221號",
        "addressEn": "No. 221, Sec. 2, Zhishan Rd., Shilin Dist., Taipei City",
        "tags": [
          "🎨 世界級歷史珍藏",
          "🌐 多語系語音導覽",
          "👶 親子無障礙友善",
          "🌧️ 全天候恆溫空調"
        ],
        "features": "世界四大博物館之一！珍藏近七十萬件中華歷代宮廷皇家稀世珍寶，翠玉白菜、肉形石、毛公鼎鎮館之寶必看，全館恆溫空調無障礙環境，雨天首選文化殿堂。",
        "mapUrl": "https://maps.google.com/?q=國立故宮博物院",
        "affiliateLabel": "🎟️ Klook 故宮門票快速通關 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/activity/1659-national-palace-museum-taipei/?aid=123436",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_8_2",
        "nameZh": "新北市立十三行博物館",
        "nameEn": "Shihsanhang Museum of Archaeology",
        "rating": "★ 4.7",
        "reviews": "7,800 則評價",
        "hours": "09:30 - 17:00 (首週一休館)",
        "city": "新北市",
        "district": "八里區",
        "addressZh": "新北市八里區博物館路200號",
        "addressEn": "No. 200, Bowuguan Rd., Bali Dist., New Taipei City",
        "tags": [
          "🎨 考古歷史互動",
          "👶 親子室內沙坑放電",
          "📐 傾斜清水模打卡"
        ],
        "features": "北台灣第一座考古數位博物館！建築象徵海島山稜與鐵甲船，標誌性傾斜八角的清水模樓梯是極致打卡點，常設鐵器時代互動出土體驗，深受親子家庭喜愛。",
        "mapUrl": "https://maps.google.com/?q=十三行博物館",
        "affiliateLabel": "🎟️ Klook 預訂十三行優惠門票 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8D%81%E4%B8%89%E8%A1%8C%E5%8D%9A%E7%89%A9%E9%A4%A8&aid=123436",
        "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_8_3",
        "nameZh": "奇美博物館",
        "nameEn": "Chimei Museum Tainan",
        "rating": "★ 4.9",
        "reviews": "31,000 則評價",
        "hours": "09:30 - 17:30 (週三公休)",
        "city": "台南市",
        "district": "仁德區",
        "addressZh": "台南市仁德區文華路二段66號",
        "addressEn": "No. 66, Sec. 2, Wenhua Rd., Rende Dist., Tainan City",
        "tags": [
          "🎨 羅馬圓頂古典殿堂",
          "👶 親子動物標本廳",
          "🌐 世界級名琴珍藏"
        ],
        "features": "媲美歐洲凡爾賽宮的壯闊白色宮殿！館內藏有全球數量最多的名貴史特拉底瓦里小提琴、逼真如生的全球哺乳動物標本大廳、以及文藝復興至十九世紀西洋雕塑油畫。",
        "mapUrl": "https://maps.google.com/?q=奇美博物館",
        "affiliateLabel": "🎟️ Klook 奇美博物館門票即買即用 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/activity/7901-chimei-museum-ticket-tainan/?aid=123436",
        "img": "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_8_4",
        "nameZh": "台南市美術館 2 館",
        "nameEn": "Tainan Art Museum Building 2",
        "rating": "★ 4.7",
        "reviews": "14,500 則評價",
        "hours": "10:00 - 18:00 (週一休館 / 週六延長至 21:00)",
        "city": "台南市",
        "district": "中西區",
        "addressZh": "台南市中西區忠義路二段1號",
        "addressEn": "No. 1, Sec. 2, Zhongyi Rd., West Central Dist., Tainan City",
        "tags": [
          "🎨 當代藝術展演",
          "🌿 鳳凰花碎形天頂",
          "☕ 頂樓景觀咖啡館"
        ],
        "features": "由普立茲克建築獎得主坂茂操刀設計！純白五角形建築堆疊交錯，碎形幾何遮蔭屋頂將南台灣陽光幻化為如樹蔭灑落的柔和光影，雨天更添一份詩意。",
        "mapUrl": "https://maps.google.com/?q=台南市美術館2館",
        "affiliateLabel": "🎟️ Klook 台南市美術館雙館聯票 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/activity/27702-tainan-art-museum-ticket/?aid=123436",
        "img": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_8_5",
        "nameZh": "衛武營國家藝術文化中心",
        "nameEn": "National Kaohsiung Center for the Arts (Weiwuying)",
        "rating": "★ 4.9",
        "reviews": "16,800 則評價",
        "hours": "11:00 - 21:00 (全天開放走廊)",
        "city": "高雄市",
        "district": "鳳山區",
        "addressZh": "高雄市鳳山區三多一路1號",
        "addressEn": "No. 1, Sanduo 1st Rd., Fengshan Dist., Kaohsiung City",
        "tags": [
          "🎨 全球最大單一屋頂劇院",
          "🏭 前衛流線建築",
          "👶 親子樹冠大廳"
        ],
        "features": "全球最大單一屋頂表演藝術中心！荷蘭建築團隊以老榕樹群盤根錯節為靈感，白色波浪曲面鋼構震撼壯麗，室內樹冠大廳無樑柱流動穿梭，雨天漫步無比愜意舒適。",
        "mapUrl": "https://maps.google.com/?q=衛武營國家藝術文化中心",
        "affiliateLabel": "🚄 預訂台灣高鐵聯票直達高雄 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E9%AB%98%E9%90%B5&aid=123436",
        "img": "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "theme_tea_select",
    "number": "02",
    "name": "🍵 台灣茶館與慢活選物",
    "nameEn": "Taiwanese Tea Houses & Indie Bookstores",
    "audience": "老宅品茗、榻榻米茶空間、獨立書店與生活器物選品",
    "tags": [
      "🍵 現泡台灣高山茶",
      "🌿 古蹟日式茶屋",
      "📚 獨立書店沙龍",
      "🏺 職人陶藝選物"
    ],
    "affiliateIntro": "奧丁丁採茶手作茶席 ＋ Klook 茶道體驗 ＋ 在地文創伴手禮",
    "places": [
      {
        "id": "hop_1_1",
        "nameZh": "紫藤廬",
        "nameEn": "Wistaria Tea House Taipei",
        "rating": "★ 4.8",
        "reviews": "1,240 則評價",
        "hours": "營業至 18:00 (週一至週日)",
        "city": "台北市",
        "district": "大安區",
        "addressZh": "台北市大安區新生南路三段16號",
        "addressEn": "No. 16, Sec. 3, Xinsheng S. Rd., Da'an Dist., Taipei City",
        "tags": [
          "🌿 日式榻榻米",
          "🍵 現泡壺茶",
          "🌐 雙語茶道",
          "🥧 精緻茶點"
        ],
        "features": "台北市定古蹟人文茶館！保留日治時期木構庭園與紫藤花架，提供雙語茶道解說與極致台灣高山手沖壺茶。",
        "mapUrl": "https://maps.google.com/?q=紫藤廬+Wistaria+Tea+House",
        "affiliateLabel": "🍵 預約茶道體驗 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E7%B4%AB%E8%97%A4%E5%BB%AC&aid=123436",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop",
        "isPopular": true,
        "readCount": "19,820 次閱讀"
      },
      {
        "id": "hop_1_2",
        "nameZh": "九份阿妹茶樓",
        "nameEn": "A-MEI Tea House Jiufen",
        "rating": "★ 4.7",
        "reviews": "3,890 則評價",
        "hours": "營業至 22:00 (夜景絕美)",
        "city": "新北市",
        "district": "瑞芳區",
        "addressZh": "新北市瑞芳區市下巷20號",
        "addressEn": "No. 20, Shixia Ln., Ruifang Dist., New Taipei City",
        "tags": [
          "🪟 山海景觀",
          "🍵 現泡壺茶",
          "🥧 精緻茶點",
          "🏮 經典紅燈籠"
        ],
        "features": "九份豎崎路標誌性木造茶樓！紅燈籠映襯山海雲霧，坐擁無敵太平洋海景，附茶藝師現場手把手沖茶教學與黑糖麻糬點心盒。",
        "mapUrl": "https://maps.google.com/?q=九份阿妹茶樓",
        "affiliateLabel": "🎟️ Klook 預訂阿妹茶樓品茗 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/activity/8741-amei-tea-house-jiufen-taipei/?aid=123436",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop",
        "isPopular": true,
        "readCount": "22,150 次閱讀"
      },
      {
        "id": "hop_1_3",
        "nameZh": "青立方 Green Cube",
        "nameEn": "Green Cube Cafe & Tea Xindian",
        "rating": "★ 4.6",
        "reviews": "980 則評價",
        "hours": "營業至 18:00 (週三公休)",
        "city": "新北市",
        "district": "新店區",
        "addressZh": "新北市新店區銀河路98號",
        "addressEn": "No. 98, Yinhe Rd., Xindian Dist., New Taipei City",
        "tags": [
          "🪟 山海景觀",
          "🌿 森林系老磚",
          "🥧 精緻茶點",
          "🚗 附停車場"
        ],
        "features": "新店銀河洞旁的「紅磚版天空之城」！高聳圓拱紅磚懸空迴廊被翠綠山林環抱，品茗冷泡蜜香紅茶與特製千層鬆餅。",
        "mapUrl": "https://maps.google.com/?q=青立方+Green+Cube",
        "affiliateLabel": "🚗 預約包車直達新店山城 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E5%8C%97%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_1_4",
        "nameZh": "無為草堂人文茶館",
        "nameEn": "Wuwei Caotang Tea House Taichung",
        "rating": "★ 4.7",
        "reviews": "2,150 則評價",
        "hours": "營業至 21:30 (全日品茗供餐)",
        "city": "台中市",
        "district": "南屯區",
        "addressZh": "台中市南屯區公益路二段106號",
        "addressEn": "No. 106, Sec. 2, Gongyi Rd., Nantun Dist., Taichung City",
        "tags": [
          "🌿 日式榻榻米",
          "🍵 現泡壺茶",
          "🪟 水上迴廊",
          "🥧 精緻茶點"
        ],
        "features": "米其林綠色指南推薦！隱身台中繁華公益路的水上江南園林，錦鯉在迴廊木椅下優游，啜飲凍頂烏龍沉澱心靈。",
        "mapUrl": "https://maps.google.com/?q=無為草堂人文茶館",
        "affiliateLabel": "🍽️ 線上預付訂位 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E7%84%A1%E7%82%BA%E8%8D%89%E5%A0%82&aid=123436",
        "img": "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_1_5",
        "nameZh": "遊山茶訪 茶文化館",
        "nameEn": "Yoshantea Culture House Nantou",
        "rating": "★ 4.9",
        "reviews": "1,670 則評價",
        "hours": "營業至 17:30 (全年無休)",
        "city": "南投縣",
        "district": "竹山鎮",
        "addressZh": "南投縣竹山鎮延平路19號",
        "addressEn": "No. 19, Yanping Rd., Zhushan Township, Nantou County",
        "tags": [
          "🌐 雙語茶道",
          "🍵 國際品茗認證",
          "🥧 精緻茶點",
          "🚗 附停車場"
        ],
        "features": "台灣茶界頂級美學殿堂！由傳統老茶廠蛻變為世界級品茗展館，專人雙語解說台灣六大茶系，親手揉茶與焙茶感官體驗。",
        "mapUrl": "https://maps.google.com/?q=遊山茶訪+茶文化館",
        "affiliateLabel": "🍵 奧丁丁採茶手作預約 ➔",
        "affiliateUrl": "https://affckr.site/track/clicks/6826/c627c2bc9b0428dbf18eec23d62e9d47266c4cdf2aabebf20f62b413234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1&subid_3=%E5%AD%B8%E8%8B%B1%E6%96%87%EF%BC%A1%EF%BC%B0%EF%BC%B0",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_1_6",
        "nameZh": "奉茶 來坐",
        "nameEn": "Fengcha Tea House Tainan",
        "rating": "★ 4.6",
        "reviews": "1,420 則評價",
        "hours": "營業至 21:00 (週一公休)",
        "city": "台南市",
        "district": "中西區",
        "addressZh": "台南市中西區公園路8號",
        "addressEn": "No. 8, Gongyuan Rd., West Central Dist., Tainan City",
        "tags": [
          "🌿 府城老時光",
          "🍵 現泡壺茶",
          "🥧 經典茶食",
          "🚶 赤嵌樓旁"
        ],
        "features": "台南茶藝宗師葉東泰創立！將府城文學與歷史揉入茶湯，古樸紅磚老木桌，搭配黑糖蜜餞與烏龍冬瓜，深刻體會台南慢活哲學。",
        "mapUrl": "https://maps.google.com/?q=奉茶+來坐",
        "affiliateLabel": "🏨 Trip.com 查台南古都住宿 ➔",
        "affiliateUrl": "https://trip.com?Allianceid=9507030&SID=325761227&trip_sub1=TainanHotel",
        "img": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_4_1",
        "nameZh": "地衣荒物 Earthing Way",
        "nameEn": "Earthing Way Dadaocheng",
        "rating": "★ 4.8",
        "reviews": "890 則評價",
        "hours": "10:30 - 19:30 (大稻埕老街)",
        "city": "台北市",
        "district": "大同區",
        "addressZh": "台北市大同區民樂街34號",
        "addressEn": "No. 34, Minle St., Datong Dist., Taipei City",
        "tags": [
          "🏺 台灣原生工藝",
          "👜 自然植物染手作",
          "🌿 質樸美學選物"
        ],
        "features": "座落迪化街旁民樂街的深邃美學老屋！蒐羅台灣在地陶藝、竹編、銅器、苧麻編織與原住民手工藝，讓每一件生活器皿都蘊含著土地的呼吸與觸感。",
        "mapUrl": "https://maps.google.com/?q=地衣荒物+Earthing+Way",
        "affiliateLabel": "🏺 affclkr 質感選物導購 ➔",
        "affiliateUrl": "https://affckr.site/track/clicks/6826/c627c2bc9b0428dbf18eec23d62e9d47266c4cdf2aabebf20f62b413234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",
        "img": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_4_2",
        "nameZh": "小器生活空間",
        "nameEn": "Xiao Qi Living Chifeng",
        "rating": "★ 4.7",
        "reviews": "1,120 則評價",
        "hours": "12:00 - 20:00 (赤峰街商圈)",
        "city": "台北市",
        "district": "大同區",
        "addressZh": "台北市大同區赤峰街29號",
        "addressEn": "No. 29, Chifeng St., Datong Dist., Taipei City",
        "tags": [
          "🏺 日台生活食器",
          "☕ 選物兼美學",
          "🚶 捷運中山站"
        ],
        "features": "赤峰街文青聚落靈魂地標！純白淨透玻璃櫥窗展示日台職人手作陶碗、玻璃杯皿、木質餐具與手染圍裙，將餐桌上的微小時光轉化為藝術儀式感。",
        "mapUrl": "https://maps.google.com/?q=小器生活空間+赤峰街",
        "affiliateLabel": "🚶 中山赤峰街散步指南 ➔",
        "affiliateUrl": "ranking.html?cat=walk",
        "img": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_4_3",
        "nameZh": "朋丁 Pon Ding",
        "nameEn": "Pon Ding Art Space & Bookstore",
        "rating": "★ 4.8",
        "reviews": "1,340 則評價",
        "hours": "12:00 - 19:00 (週一公休)",
        "city": "台北市",
        "district": "中山區",
        "addressZh": "台北市中山區中山北路一段53巷6號",
        "addressEn": "No. 6, Lane 53, Sec. 1, Zhongshan N. Rd., Zhongshan Dist., Taipei City",
        "tags": [
          "📚 獨立藝術雜誌",
          "☕ 三層樓藝廊咖啡",
          "🚶 近台北車站"
        ],
        "features": "由三層老公寓改造的獨立藝術空間！一樓陳列來自世界各地的獨立出版刊物、小誌（Zine）與精品咖啡，二三樓為當代新銳藝術展演與講座空間。",
        "mapUrl": "https://maps.google.com/?q=朋丁+Pon+Ding",
        "affiliateLabel": "☕ 探索全台風格咖啡店 ➔",
        "affiliateUrl": "cafe.html",
        "img": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_4_4",
        "nameZh": "綠光計畫范特喜文創聚落",
        "nameEn": "Fantasy Green Ray Taichung",
        "rating": "★ 4.6",
        "reviews": "5,600 則評價",
        "hours": "10:00 - 18:00 (中興一巷)",
        "city": "台中市",
        "district": "西區",
        "addressZh": "台中市西區中興一巷2號-26號",
        "addressEn": "No. 2-26, Zhongxing 1st Ln., West Dist., Taichung City",
        "tags": [
          "🏺 手作原創皮革",
          "🌿 老宿舍綠植爬藤",
          "☕ 獨立小店聚落"
        ],
        "features": "自來水公司老眷村宿舍再生聚落！保留老紅磚牆與二樓空中綠意步道，匯聚金工飾品、手造皮件、插畫布包與特色小甜點店，充滿慢活生活氣息。",
        "mapUrl": "https://maps.google.com/?q=綠光計畫范特喜文創聚落",
        "affiliateLabel": "🚗 預訂台中包車漫遊 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E4%B8%AD%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_4_5",
        "nameZh": "聚珍臺灣",
        "nameEn": "GJ Taiwan Bookstore Tainan",
        "rating": "★ 4.9",
        "reviews": "980 則評價",
        "hours": "11:00 - 19:00 (林百貨旁)",
        "city": "台南市",
        "district": "中西區",
        "addressZh": "台南市中西區青年路（台南林百貨周邊）",
        "addressEn": "Qingnian Rd., West Central Dist., Tainan City",
        "tags": [
          "📚 台灣文史典藏",
          "🏺 古地圖復刻",
          "🚶 林百貨周邊"
        ],
        "features": "外國旅人深度認識台灣歷史的最佳窗口！專注於台灣老照片、日治時期地圖復刻、文史書籍與文創商品，讓旅人在紙頁墨香中穿梭台灣古今風貌。",
        "mapUrl": "https://maps.google.com/?q=聚珍臺灣+台南",
        "affiliateLabel": "🏨 訂台南特色文青旅宿 ➔",
        "affiliateUrl": "https://affone.me/s/bQeO4",
        "img": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "theme_local_flavors",
    "number": "03",
    "name": "🍢 經典台味與夜市早餐",
    "nameEn": "Authentic Taiwan Breakfast & Night Markets",
    "audience": "炭烤燒餅豆漿、百年老市場早午餐、米其林必比登夜市圖鑑",
    "tags": [
      "🥖 炭香古早味早餐",
      "🥣 手工鹹豆漿油條",
      "🍢 必比登夜市名攤",
      "🍧 古法冰品甜湯"
    ],
    "affiliateIntro": "Klook 夜市美食通票 ＋ Uber Eats 飯店外送直達",
    "places": [
      {
        "id": "hop_3_1",
        "nameZh": "阜杭豆漿",
        "nameEn": "Fu Hang Soy Milk Taipei",
        "rating": "★ 4.6",
        "reviews": "14,800 則評價",
        "hours": "05:30 - 12:30 (週一公休 / 米其林必比登)",
        "city": "台北市",
        "district": "中正區",
        "addressZh": "台北市中正區忠孝東路一段108號2樓（華山市場）",
        "addressEn": "2F, Huashan Market, No. 108, Sec. 1, Zhongxiao E. Rd., Zhongzheng Dist., Taipei City",
        "tags": [
          "🥖 厚燒餅夾蛋夾油條",
          "🥣 焦香鹹豆漿",
          "⏰ 05:30 開門",
          "🚶 捷運善導寺站"
        ],
        "features": "連年榮獲米其林必比登推介的台灣早餐頂流！古法炭烤厚燒餅外酥內軟、帶淡淡蔥花鹹香，招牌鹹豆漿凝結如嫩豆腐花佐現炸老油條與香辣油。",
        "mapUrl": "https://maps.google.com/?q=阜杭豆漿",
        "affiliateLabel": "🎟️ Klook 阜杭免排隊直送 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E9%98%9C%E6%9D%AD%E8%B1%86%E6%BC%BF&aid=123436",
        "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_3_2",
        "nameZh": "鼎元豆漿",
        "nameEn": "Ding Yuan Soy Milk Taipei",
        "rating": "★ 4.5",
        "reviews": "4,120 則評價",
        "hours": "04:30 - 11:30 (日本觀光客指名)",
        "city": "台北市",
        "district": "中正區",
        "addressZh": "台北市中正區金華街30-1號",
        "addressEn": "No. 30-1, Jinhua St., Zhongzheng Dist., Taipei City",
        "tags": [
          "🥟 爆汁小籠湯包",
          "🥖 蟹殼黃燒餅",
          "🌐 日英語友善",
          "🚶 近中正紀念堂"
        ],
        "features": "日本各大旅遊書強烈推薦的中正區老字號！現包現蒸小籠湯包皮薄餡多、湯汁濃郁，蟹殼黃與甜酥餅層次豐富，服務人員具外語點餐友善經驗。",
        "mapUrl": "https://maps.google.com/?q=鼎元豆漿",
        "affiliateLabel": "🚗 台北市區半日包車 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E5%8C%97%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_3_3",
        "nameZh": "天津苟不理湯包（信義街無名湯包）",
        "nameEn": "Gou Bu Li Soup Dumplings Taichung",
        "rating": "★ 4.6",
        "reviews": "6,300 則評價",
        "hours": "05:30 - 11:30 (週一公休)",
        "city": "台中市",
        "district": "東區",
        "addressZh": "台中市東區信義街63號",
        "addressEn": "No. 63, Xinyi St., East Dist., Taichung City",
        "tags": [
          "🥟 巨型爆漿湯包",
          "🍳 蔥花荷包蛋",
          "🥣 自助豆漿紅茶暢飲"
        ],
        "features": "台中在地排隊超人氣大湯包！每顆湯包飽滿如肉包，手桿厚麵皮吸飽肉汁，咬開瞬間鮮甜湯汁爆噴，店內自助式裝豆漿、紅茶更是極致爽快。",
        "mapUrl": "https://maps.google.com/?q=天津苟不理湯包",
        "affiliateLabel": "🚗 預訂台中市區接送包車 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E4%B8%AD%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_3_4",
        "nameZh": "六千泓佐牛肉湯",
        "nameEn": "Liu Qian Beef Soup Tainan",
        "rating": "★ 4.7",
        "reviews": "4,780 則評價",
        "hours": "05:00 - 賣完為止 (通常 08:30 售罄)",
        "city": "台南市",
        "district": "中西區",
        "addressZh": "台南市中西區海安路一段63號",
        "addressEn": "No. 63, Sec. 1, Hai'an Rd., West Central Dist., Tainan City",
        "tags": [
          "🥣 晨光第一鍋原湯",
          "🥩 現切溫體牛",
          "⏰ 清晨 5 點開賣"
        ],
        "features": "台南最熱血的清晨朝聖排隊儀式！凌晨 4 點便有旅人拿號碼牌，只為喝上一口「第一鍋」最清澈純粹的牛骨牛髓精華原湯，肉質軟嫩如絲。",
        "mapUrl": "https://maps.google.com/?q=六千泓佐牛肉湯",
        "affiliateLabel": "🏨 訂海安路散步飯店 ➔",
        "affiliateUrl": "https://affone.me/s/bQeO4",
        "img": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_3_5",
        "nameZh": "興隆居",
        "nameEn": "Xing Long Ju Kaohsiung",
        "rating": "★ 4.5",
        "reviews": "7,800 則評價",
        "hours": "04:30 - 11:30 (週一公休)",
        "city": "高雄市",
        "district": "前金區",
        "addressZh": "高雄市前金區六合二路186號",
        "addressEn": "No. 186, Liuhe 2nd Rd., Qianjin Dist., Kaohsiung City",
        "tags": [
          "🥟 多汁高麗菜湯包",
          "🥖 炭火燒餅油條",
          "🚶 近市議會站"
        ],
        "features": "飄香近七十年的港都傳統早餐王者！現包現蒸多汁大湯包，內餡裹滿脆甜梨山高麗菜與鮮豬肉末，咬下湯汁四溢，炭烤老麵脆燒餅配杏仁茶更是絕配。",
        "mapUrl": "https://maps.google.com/?q=興隆居",
        "affiliateLabel": "🚄 預訂台灣高鐵 75 折車票 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E9%AB%98%E9%90%B5&aid=123436",
        "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_5_1",
        "nameZh": "寧夏夜市「劉芋仔蛋黃芋餅」",
        "nameEn": "Liu Yu Zi Fried Taro Balls Ningxia",
        "rating": "★ 4.6",
        "reviews": "3,400 則評價",
        "hours": "17:30 - 24:00 (必比登排隊王)",
        "city": "台北市",
        "district": "大同區",
        "addressZh": "台北市大同區寧夏路（攤位 091）",
        "addressEn": "Stall 091, Ningxia Rd., Datong Dist., Taipei City",
        "tags": [
          "🌟 必比登推介",
          "🍧 酥炸香芋肉鬆",
          "🚶 捷運雙連站"
        ],
        "features": "連續多年入選米其林必比登！現包現炸高雄甲仙檳榔心芋泥，包裹鹹香黑豬肉脯與整顆流油鹹蛋黃，外皮金黃薄脆、內餡軟糯甘甜噴香。",
        "mapUrl": "https://maps.google.com/?q=劉芋仔蛋黃芋餅",
        "affiliateLabel": "🎟️ Klook 寧夏夜市美食券 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%AF%A7%E5%A4%8F%E5%A4%9C%E5%B8%82&aid=123436",
        "img": "assets/ranking_taro_ball.png"
      },
      {
        "id": "hop_5_2",
        "nameZh": "士林夜市「海友十全排骨」",
        "nameEn": "Hai You Ribs Shilin Night Market",
        "rating": "★ 4.5",
        "reviews": "4,100 則評價",
        "hours": "14:30 - 23:30 (週四公休)",
        "city": "台北市",
        "district": "士林區",
        "addressZh": "台北市士林區大東路49號",
        "addressEn": "No. 49, Dadong Rd., Shilin Dist., Taipei City",
        "tags": [
          "🌟 必比登推介",
          "🥩 十全溫補排骨",
          "🚶 捷運劍潭站"
        ],
        "features": "傳承四十餘年的藥膳燉排骨老店！以熟地、當歸、枸杞等十餘種名貴中藥慢火慢燉，湯頭濃黑甘醇溫潤不燥，排骨肉質軟嫩一抿即骨肉分離。",
        "mapUrl": "https://maps.google.com/?q=海友十全排骨",
        "affiliateLabel": "💊 買酵素保護腸胃好隊友 ➔",
        "affiliateUrl": "https://affckr.site/track/clicks/5891/c627c2bc9b0428dbf188ec23d62e9d47266c4cdf2aabebf10f69b313234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",
        "img": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_5_3",
        "nameZh": "逢甲夜市「明倫蛋餅」",
        "nameEn": "Minglun Egg Pancake Fengjia",
        "rating": "★ 4.6",
        "reviews": "5,200 則評價",
        "hours": "15:00 - 01:00 AM (逢甲福星路口)",
        "city": "台中市",
        "district": "西屯區",
        "addressZh": "台中市西屯區福星路546號",
        "addressEn": "No. 546, Fuxing Rd., Xitun Dist., Taichung City",
        "tags": [
          "🍳 傳統粉漿餅皮",
          "🥤 特製甜辣醬",
          "🚶 逢甲商圈核心"
        ],
        "features": "源自彰化員林民國 67 年的老名攤！堅持傳統粉漿現淋煎烤，餅皮薄Q帶淡淡甜香，打入新鮮蔥花蛋後抹上靈魂甜辣醬，熱氣騰騰捲起咬下無比過癮。",
        "mapUrl": "https://maps.google.com/?q=明倫蛋餅+逢甲",
        "affiliateLabel": "🏨 訂逢甲夜市周邊住宿 ➔",
        "affiliateUrl": "https://affone.me/s/bQeO4",
        "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_5_4",
        "nameZh": "花園夜市「二師兄古早味滷味」",
        "nameEn": "Er Shi Xiong Braised Dishes Tainan",
        "rating": "★ 4.7",
        "reviews": "6,100 則評價",
        "hours": "每週四、六、日 17:30 - 24:00",
        "city": "台南市",
        "district": "北區",
        "addressZh": "台南市北區海安路三段（花園夜市內）",
        "addressEn": "Sec. 3, Hai'an Rd., North Dist., Tainan City",
        "tags": [
          "🥩 現場大鍋三杯翻炒",
          "🧋 蜜汁七里香",
          "⏰ 夜市限定"
        ],
        "features": "花園夜市現場最壯觀的烹調盛景！數口大鍋現場慢火翻炒三杯黑糖米血、原汁小鳥蛋、蜜汁七里香與雞翅，濃油赤醬香氣飄散數十米，排隊人潮綿延。",
        "mapUrl": "https://maps.google.com/?q=二師兄古早味滷味",
        "affiliateLabel": "🚗 台南夜市包車直達 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E5%8D%97%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_5_5",
        "nameZh": "瑞豐夜市「天使大雞排」",
        "nameEn": "Angel Chicken Chop Ruifeng",
        "rating": "★ 4.7",
        "reviews": "4,300 則評價",
        "hours": "18:00 - 00:30 (週一三公休)",
        "city": "高雄市",
        "district": "鼓山區",
        "addressZh": "高雄市鼓山區裕誠路（瑞豐夜市內）",
        "addressEn": "Yucheng Rd., Gushan Dist., Kaohsiung City",
        "tags": [
          "🥩 厚切多汁脆皮",
          "🚶 捷運巨蛋站",
          "🌟 港都排隊傳奇"
        ],
        "features": "南台灣排隊巨型雞排指標！厚度超過 2 公分溫體雞胸肉，裹上特調酥脆漿粉高溫鎖汁，撕開瞬間熱氣白煙與鮮甜雞汁直流，酥脆椒鹽風味令人吮指回味。",
        "mapUrl": "https://maps.google.com/?q=天使大雞排+瑞豐夜市",
        "affiliateLabel": "🏨 訂高雄巨蛋周邊飯店 ➔",
        "affiliateUrl": "https://trip.com?Allianceid=9507030&SID=325761227&trip_sub1=KaohsiungHotel",
        "img": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "theme_night_sweets",
    "number": "04",
    "name": "🌙 深夜微醺與手作甜點",
    "nameEn": "Late-Night Diners & Artisanal Sweets",
    "audience": "亞洲 50 大酒吧、日式老宅居酒屋、法式千層與大人味深夜咖啡",
    "tags": [
      "🍸 台灣茶酒特調",
      "🍢 炭火串燒居酒屋",
      "🍰 法式手作烘焙",
      "🍮 深夜大人味布丁"
    ],
    "affiliateIntro": "Klook 微醺酒吧通行證 ＋ 人氣甜點禮盒外送",
    "places": [
      {
        "id": "hop_2_1",
        "nameZh": "Bar Mood 吧沐",
        "nameEn": "Bar Mood Taipei",
        "rating": "★ 4.8",
        "reviews": "1,240 則評價",
        "hours": "營業至 01:00 AM (週五週六至 02:00)",
        "city": "台北市",
        "district": "大安區",
        "addressZh": "台北市大安區敦化南路一段160巷53號",
        "addressEn": "No. 53, Lane 160, Sec. 1, Dunhua S. Rd., Da'an Dist., Taipei City",
        "tags": [
          "🍸 亞洲 50 大",
          "🚶 捷運忠孝復興",
          "🏮 秘境調酒",
          "🍲 下酒精緻料理"
        ],
        "features": "亞洲 50 大最佳酒吧！外觀是極簡白色大理石高腳立飲區，推開隱藏機關門後是奢華沉穩的植物花藝調酒吧，將台灣在地的桂花、洛神花、紅玉紅茶幻化成極致感官雞尾酒。",
        "mapUrl": "https://maps.google.com/?q=Bar+Mood+吧沐",
        "affiliateLabel": "🍽️ 線上預付訂位 ➔",
        "affiliateUrl": "https://affckr.site/track/clicks/5891/c627c2bc9b0428dbf188ec23d62e9d47266c4cdf2aabebf10f69b313234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",
        "img": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_2_2",
        "nameZh": "阿財虱目魚肚",
        "nameEn": "Ah-Cai Milkfish Taipei",
        "rating": "★ 4.4",
        "reviews": "2,840 則評價",
        "hours": "營業至 05:00 AM (深夜排隊傳奇)",
        "city": "台北市",
        "district": "萬華區",
        "addressZh": "台北市萬華區內江街122號",
        "addressEn": "No. 122, Neijiang St., Wanhua Dist., Taipei City",
        "tags": [
          "🍲 深夜牛肉湯與魚肚",
          "🚶 西門捷運站",
          "⏰ 深夜 10 點開門"
        ],
        "features": "西門町深夜排隊神話！晚上 10 點剛開鐵門便湧現人潮，現煎金黃焦脆肥美無刺虱目魚肚、黑金滷肉飯佐半熟煎蛋、三杯中卷鑊氣沖天。",
        "mapUrl": "https://maps.google.com/?q=阿財虱目魚肚",
        "affiliateLabel": "🚕 55688 深夜叫車直達 ➔",
        "affiliateUrl": "https://www.55688.com.tw/",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_2_3",
        "nameZh": "爛泥 ooo bar",
        "nameEn": "Mud ooo Bar Taichung",
        "rating": "★ 4.8",
        "reviews": "620 則評價",
        "hours": "營業至 02:00 AM (週二公休)",
        "city": "台中市",
        "district": "西區",
        "addressZh": "台中市西區公正路210巷",
        "addressEn": "Lane 210, Gongzheng Rd., West Dist., Taichung City",
        "tags": [
          "🏮 秘境天井老屋",
          "🍸 客製調酒",
          "🚶 近勤美綠園道"
        ],
        "features": "隱身西區安靜巷弄的低調天井老屋酒吧！無固定制式酒單，調酒師依旅人當下情緒調製風味層次豐富的專屬特調，氣氛沉靜浪漫。",
        "mapUrl": "https://maps.google.com/?q=爛泥+ooo+bar+台中",
        "affiliateLabel": "🍽️ 線上訂位預訂 ➔",
        "affiliateUrl": "https://affckr.site/track/clicks/5891/c627c2bc9b0428dbf188ec23d62e9d47266c4cdf2aabebf10f69b313234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",
        "img": "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_2_4",
        "nameZh": "Bar T.C.R.C. 前科累累俱樂部",
        "nameEn": "Bar T.C.R.C. Tainan",
        "rating": "★ 4.9",
        "reviews": "2,460 則評價",
        "hours": "營業至 02:00 AM (週日公休)",
        "city": "台南市",
        "district": "中西區",
        "addressZh": "台南市中西區新美街117號",
        "addressEn": "No. 117, Xinmei St., West Central Dist., Tainan City",
        "tags": [
          "🍸 亞洲 50 大",
          "🏮 老街古厝",
          "🍢 結合在地滷味"
        ],
        "features": "名列亞洲 50 大酒吧殿堂的古都傳奇！座落台南百年米街（新美街）老平房，老屋檜木樑柱與復古沙發，客製調酒果香奔放，更可點隔壁阿汎香腸熟肉搭配。",
        "mapUrl": "https://maps.google.com/?q=Bar+TCRC+台南",
        "affiliateLabel": "🏨 訂台南市區住宿（走路回飯店）➔",
        "affiliateUrl": "https://affone.me/s/bQeO4",
        "img": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_2_5",
        "nameZh": "文章牛肉湯",
        "nameEn": "Wen Zhang Beef Soup Tainan",
        "rating": "★ 4.6",
        "reviews": "8,900 則評價",
        "hours": "營業至 02:00 AM (安平旗艦店)",
        "city": "台南市",
        "district": "安平區",
        "addressZh": "台南市安平區安平路300號",
        "addressEn": "No. 300, Anping Rd., Anping Dist., Tainan City",
        "tags": [
          "🍲 深夜溫體牛",
          "🥩 鮮甜現沖",
          "⏰ 開到凌晨兩點"
        ],
        "features": "夜貓族與外國老饕台南宵夜首選！採用善化肉品市場當日現宰直送溫體牛，滾燙牛骨蔬果高湯瞬間澆淋在粉紅薄切牛肉片上，軟嫩鮮甜一試難忘。",
        "mapUrl": "https://maps.google.com/?q=文章牛肉湯",
        "affiliateLabel": "🚗 台南市區包車一日遊 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E5%8D%97%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_2_6",
        "nameZh": "上善若水 Good Water",
        "nameEn": "Good Water Cocktail Bar Kaohsiung",
        "rating": "★ 4.8",
        "reviews": "920 則評價",
        "hours": "營業至 03:00 AM (無酒單客製化)",
        "city": "高雄市",
        "district": "苓雅區",
        "addressZh": "高雄市苓雅區青年二路166號",
        "addressEn": "No. 166, Qingnian 2nd Rd., Lingya Dist., Kaohsiung City",
        "tags": [
          "🍸 無酒單客製化",
          "🍢 專業下酒餐點",
          "🚶 光榮碼頭旁"
        ],
        "features": "高雄最具溫度的經典無酒單雞尾酒吧！調酒師依酸甜、果香、茶韻、烈度客製調配，空間溫暖木質調，深夜亦提供美味手工水餃與自製煙燻鴨胸。",
        "mapUrl": "https://maps.google.com/?q=上善若水+高雄",
        "affiliateLabel": "🚕 55688 高雄叫車直達 ➔",
        "affiliateUrl": "https://www.55688.com.tw/",
        "img": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_6_1",
        "nameZh": "法朋烘焙甜點坊 Le Ruban",
        "nameEn": "Le Ruban Pâtisserie Taipei",
        "rating": "★ 4.7",
        "reviews": "3,900 則評價",
        "hours": "11:30 - 19:30 (台北甜點名門)",
        "city": "台北市",
        "district": "大安區",
        "addressZh": "台北市大安區仁愛路四段300巷20弄11號",
        "addressEn": "No. 11, Aly. 20, Ln. 300, Sec. 4, Ren'ai Rd., Da'an Dist., Taipei City",
        "tags": [
          "🧁 台灣老欉香緹",
          "🍋 老奶奶檸檬蛋糕",
          "🚶 近信義安和站"
        ],
        "features": "台灣法式烘焙甜點天花板！名廚李依錫以日本生乳奶油融合在地季節鮮果（愛文芒果、大湖草莓、水蜜桃），招牌老奶奶檸檬蛋糕清香酸甜，長年排隊不輟。",
        "mapUrl": "https://maps.google.com/?q=法朋烘焙甜點坊",
        "affiliateLabel": "🛵 Uber Eats 甜點直送飯店 ➔",
        "affiliateUrl": "https://www.ubereats.com/tw/search?q=%E6%B3%95%E6%9C%8B%E7%83%98%E7%84%99%E7%94%9C%E9%BB%9E%E5%9D%8A",
        "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_6_2",
        "nameZh": "Heritage Bakery & Cafe",
        "nameEn": "Heritage Bakery Taipei",
        "rating": "★ 4.6",
        "reviews": "2,100 則評價",
        "hours": "10:00 - 19:00 (週一公休)",
        "city": "台北市",
        "district": "中正區",
        "addressZh": "台北市中正區漢口街一段73-2號",
        "addressEn": "No. 73-2, Sec. 1, Hankou St., Zhongzheng Dist., Taipei City",
        "tags": [
          "🌰 濃郁核桃肉桂捲",
          "🥭 紅心芭樂戚風",
          "☕ 美式復古老屋"
        ],
        "features": "台北相機街老屋改建的美式烘焙名所！招牌美式厚核桃肉桂捲香濃多汁，獨創紅心芭樂戚風蛋糕散發自然水果清甜，天井紅磚採光絕佳。",
        "mapUrl": "https://maps.google.com/?q=Heritage+Bakery+Cafe",
        "affiliateLabel": "🍽️ 線上預約下午茶 ➔",
        "affiliateUrl": "https://affckr.site/track/clicks/5891/c627c2bc9b0428dbf188ec23d62e9d47266c4cdf2aabebf10f69b313234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",
        "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_6_3",
        "nameZh": "CJSJ 法式甜點概念店",
        "nameEn": "CJSJ Pâtisserie Taichung",
        "rating": "★ 4.7",
        "reviews": "3,200 則評價",
        "hours": "12:00 - 18:30 (週一公休)",
        "city": "台中市",
        "district": "西區",
        "addressZh": "台中市西區向上路一段79巷72號",
        "addressEn": "No. 72, Ln. 79, Sec. 1, Xiangshang Rd., West Dist., Taichung City",
        "tags": [
          "🧁 米其林三星甜點主廚",
          "🥐 藝術級法式盤飾",
          "🚶 近草悟道"
        ],
        "features": "米其林三星餐廳甜點主廚操刀的藝術級甜點店！宛如珠寶陳列的幾何造型盤飾點心，酸甜果泥與酥脆塔殼在舌尖完美層次平衡，外型如雕塑般精緻震撼。",
        "mapUrl": "https://maps.google.com/?q=CJSJ+法式甜點概念店",
        "affiliateLabel": "🚗 預訂台中市區包車漫遊 ➔",
        "affiliateUrl": "https://www.klook.com/zh-TW/search/result/?query=%E5%8F%B0%E4%B8%AD%E5%8C%85%E8%BB%8A&aid=123436",
        "img": "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_6_4",
        "nameZh": "木更 Mugeneration",
        "nameEn": "Mugeneration Chiayi",
        "rating": "★ 4.8",
        "reviews": "1,560 則評價",
        "hours": "10:00 - 18:00 (週三週四公休)",
        "city": "嘉義市",
        "district": "東區",
        "addressZh": "嘉義市東區成仁街189號",
        "addressEn": "No. 189, Chengren St., East Dist., Chiayi City",
        "tags": [
          "🍮 焦糖慢火烤布丁",
          "🧁 蜂巢瑪德蓮",
          "🌿 清水模極簡空間"
        ],
        "features": "嘉義最美清水模美學咖啡甜品館！建築師主理的洗鍊線條與綠意庭院，招牌焦糖苦甜烤布丁絲滑濃醇，現烤蜂巢鮮奶油瑪德蓮外脆內綿柔。",
        "mapUrl": "https://maps.google.com/?q=木更+Mugeneration",
        "affiliateLabel": "☕ 查看全台咖啡名店全覽 ➔",
        "affiliateUrl": "cafe.html",
        "img": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop"
      },
      {
        "id": "hop_6_5",
        "nameZh": "深藍咖啡館 旗艦店",
        "nameEn": "Deep Blue Cafe Flagship Tainan",
        "rating": "★ 4.6",
        "reviews": "3,400 則評價",
        "hours": "10:00 - 19:00 (週三公休)",
        "city": "台南市",
        "district": "安平區",
        "addressZh": "台南市安平區建平路335號",
        "addressEn": "No. 335, Jianping Rd., Anping Dist., Tainan City",
        "tags": [
          "🧁 千層蛋糕愛馬仕",
          "👶 親子空間寬敞",
          "🚗 專屬停車場"
        ],
        "features": "被譽為台灣「千層蛋糕界的愛馬仕」！安平旗艦店由毛森江清水模建築團隊打造，薄如蟬翼的數十層蛋皮夾著微甜馬達加斯加香草生乳餡，細膩工藝無可挑剔。",
        "mapUrl": "https://maps.google.com/?q=深藍咖啡館+旗艦店",
        "affiliateLabel": "🏨 訂安平港邊海景旅宿 ➔",
        "affiliateUrl": "https://affone.me/s/bQeO4",
        "img": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop"
      }
    ]
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
