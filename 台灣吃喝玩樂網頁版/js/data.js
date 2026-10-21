/**
 * 台灣吃喝玩樂網頁版 - 核心資料庫 (THEMES, DRINKS, SPOTS, CITIES)
 */

// 1. 16 大主題專區資料 (含分類群組、亮點精選景點與專屬行程)
const THEMES_DATA = [
  { 
    id: "islands", 
    name: "🏝️ 離島跳島全攻略", 
    shortName: "離島",
    shortEn: "ISLANDS",
    categoryGroup: "海島水上",
    title: "航向湛藍秘境：台灣離島，跳島行程",
    location: "澎湖 · 綠島 · 蘭嶼 · 小琉球 · 馬祖",
    rate: "4.9", 
    temp: "26°C", 
    duration: "3~5 天",
    desc: "碧海、火山玄武岩與星空下的純淨島嶼。包含澎湖花火節、綠島朝日海底溫泉、蘭嶼原鄉飛魚季、小琉球海龜共游與馬祖藍眼淚，享有一站式船票、機票與包車租車指南。",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop", 
    badge: "HOT",
    hasFlight: true,
    subSpots: [
      { name: "澎湖七美雙心石滬與浮潛", desc: "浪漫火山玄武岩先民智慧石滬，跳島一日巡航。", activityId: "1090-kenting-day-tour-kaohsiung", city: "澎湖縣七美鄉" },
      { name: "綠島朝日海底溫泉日出", desc: "全球僅三處罕見海底鹹水溫泉，晨曦聽海浪泡湯。", activityId: "2930-green-island-hotspring", city: "台東縣綠島鄉" },
      { name: "小琉球花瓶岩海龜共游", desc: "珊瑚礁浮潛能見度極高，99%機率與野生綠蠵龜共游。", activityId: "2950-xiaoliuqiu-snorkeling-turtle", city: "屏東縣琉球鄉" },
      { name: "馬祖北海坑道搖櫓藍眼淚", desc: "暗夜水道中搖櫓激起微光藍眼淚，夢幻水上星河奇景。", activityId: "3050-yushan-trekking-tour", city: "連江縣南竿鄉" }
    ]
  },
  { 
    id: "huadong", 
    name: "🏞️ 花東外國人友善縱谷", 
    shortName: "花東",
    shortEn: "EAST COAST",
    categoryGroup: "山林冒險",
    title: "縱谷的風、太平洋的浪：世界旅人的避風港",
    location: "花蓮 · 台東 · 太平洋海岸線",
    rate: "4.9", 
    temp: "23°C", 
    duration: "3~4 天",
    desc: "清水斷崖太平洋壯闊日出 SUP、秀姑巒溪激流泛舟冒險，漫步池上伯朗大道稻浪與鹿野高台俯瞰縱谷，配備雙語專業包車司機導覽。",
    img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1000&auto=format&fit=crop", 
    badge: "MUST",
    hasFlight: false,
    subSpots: [
      { name: "花蓮清水斷崖日出 SUP", desc: "千公尺斷崖垂直聳立於太平洋，拂曉划向第一道曙光。", activityId: "3120-qingshui-cliff-kayak", city: "花蓮縣秀林鄉" },
      { name: "秀姑巒溪激流泛舟挑戰", desc: "台灣最知名激流峽谷泛舟，穿越奇岩怪石與激流白浪。", activityId: "1095-taroko-gorge-day-tour-hualien", city: "花蓮縣瑞穗鄉" },
      { name: "台東池上伯朗大道金色稻浪", desc: "無電線桿純淨天堂路，騎乘單車巡禮金城武樹。", activityId: "3140-chishang-biking-tour", city: "台東縣池上鄉" },
      { name: "台東鹿野高台飛行傘俯瞰", desc: "鳥瞰花東縱谷棋盤式田野與卑南溪，國際熱氣球盛地。", activityId: "2890-taipingshan-day-tour-yilan", city: "台東縣鹿野鄉" }
    ]
  },
  { 
    id: "festivals", 
    name: "🏮 四季節慶萬年曆", 
    shortName: "節慶",
    shortEn: "FESTIVALS",
    categoryGroup: "節慶文化",
    title: "聚在一起的溫度：台灣四季節慶全覽",
    location: "全台 · 平溪 · 鹽水 · 跨年",
    rate: "4.8", 
    temp: "20°C", 
    duration: "時令慶典",
    desc: "平溪萬盞祈願天燈升空、台南鹽水蜂炮震撼洗禮、大甲媽祖世界級徒步遶境與台北101燦爛煙火。附萬家福節慶年菜伴手禮免排隊直送服務。",
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1000&auto=format&fit=crop", 
    badge: "SPECIAL",
    hasFlight: false,
    subSpots: [
      { name: "平溪十分瀑布天燈節", desc: "元宵夜萬盞暖黃天燈冉冉升起，國際CNN推薦此生必訪。", activityId: "1874-jiufen-shifen-day-tour-taipei", city: "新北市平溪區" },
      { name: "台南鹽水蜂炮震撼洗禮", desc: "百萬發蜂炮齊發消災解厄，世界十大狂熱節慶盛典。", activityId: "2410-tainan-historic-sites-pass", city: "台南市鹽水區" },
      { name: "台北 101 元旦跨年煙火", desc: "高空倒數璀璨煙火燈光秀，信義商圈高空餐酒狂歡。", activityId: "1659-taipei-101-observation-deck-ticket-taipei", city: "台北市信義區" },
      { name: "新北歡樂耶誕城光雕魔幻", desc: "市府3D巨型投影秀與百萬璀璨星空光廊天橋打卡。", activityId: "3160-christmasland-tour", city: "新北市板橋區" }
    ]
  },
  { 
    id: "hotspring", 
    name: "♨️ 頂級名湯溫泉放鬆", 
    shortName: "溫泉",
    shortEn: "HOT SPRINGS",
    categoryGroup: "休閒名湯",
    title: "山林氤氳白磺泉：全台四大名湯私房境",
    location: "北投 · 礁溪 · 谷關 · 關子嶺 · 烏來",
    rate: "4.9", 
    temp: "40°C 湯溫", 
    duration: "放鬆療癒",
    desc: "北投百年日式白磺硫磺名湯、礁溪美人湯平原水色、谷關日式溫泉渡假村與關子嶺世界罕見泥漿溫泉，洗滌身心疲憊的暖心之選。",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&auto=format&fit=crop", 
    badge: "RELAX",
    hasFlight: false,
    subSpots: [
      { name: "北投日勝生加賀屋白磺名湯", desc: "純正日式數寄屋建築美學，細緻管家款待與天然白磺泉。", activityId: "2120-beitou-hotspring-taipei", city: "台北市北投區" },
      { name: "宜蘭礁溪寒沐溫泉酒店", desc: "無色無味頂級碳酸氫鈉泉，溫潤美人湯舒緩全身肌肉疲勞。", activityId: "2199-national-center-for-traditional-arts-yilan", city: "宜蘭縣礁溪鄉" },
      { name: "台南關子嶺泥漿溫泉巡禮", desc: "全台唯一黑色泥漿名湯，富含天然礦物質滑潤養顏肌膚。", activityId: "2855-chimei-museum-ticket-tainan", city: "台南市白河區" },
      { name: "台中谷關虹夕諾雅奢華溫泉", desc: "星野集團打造山林深處溫泉秘境，樓中樓客房半露天溫泉池。", activityId: "2390-taichung-opera-house-tour", city: "台中市和平區" }
    ]
  },
  { 
    id: "nightmarket", 
    name: "🍢 舌尖上的深夜食堂", 
    shortName: "夜市",
    shortEn: "NIGHT MARKETS",
    categoryGroup: "節慶文化",
    title: "煙火氣裡的百味：全台夜市美食爭霸",
    location: "台北士林 · 台中逢甲 · 嘉義文化路 · 台南花園",
    rate: "4.9", 
    temp: "24°C", 
    duration: "每晚 18:00+",
    desc: "米其林必比登推薦夜市小吃巡禮！地瓜球、鹽酥雞、大腸包小腸與黑糖珍珠鮮奶的極致味蕾饗宴，在地煙火氣的夜間靈魂。",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1000&auto=format&fit=crop", 
    badge: "FOODIE",
    hasFlight: false,
    subSpots: [
      { name: "台北士林夜市排隊美食街", desc: "豪大大雞排、大餅包小餅、藥膳排骨與米其林生煎包。", activityId: "2150-shilin-night-market-tour", city: "台北市士林區" },
      { name: "台中逢甲夜市創新美食殿堂", desc: "全台手搖與創新小吃發源地，明倫蛋餅與日船章魚小丸子。", activityId: "2080-gaomei-wetlands-day-tour-taichung", city: "台中市西屯區" },
      { name: "嘉義文化路夜市林聰明沙鍋魚頭", desc: "老饕必吃傳承三代濃郁沙鍋魚頭與御香屋葡萄柚綠茶。", activityId: "1628-alishan-forest-railway-day-tour-chiayi", city: "嘉義市東區" },
      { name: "台南花園夜市旗海飄揚大巡禮", desc: "南部最大夜市，二師兄滷味、延記臭豆腐與統大碳烤香雞排。", activityId: "2410-tainan-historic-sites-pass", city: "台南市北區" }
    ]
  },
  { 
    id: "railway", 
    name: "🚂 經典鐵道全景圖鑑", 
    shortName: "鐵道",
    shortEn: "RAILWAYS",
    categoryGroup: "山林冒險",
    title: "車窗外的移動風景：台灣鐵道風華圖鑑",
    location: "阿里山森鐵 · 平溪線 · 集集 · 藍皮解憂號",
    rate: "4.8", 
    temp: "22°C", 
    duration: "1~2 天",
    desc: "搭乘阿里山紅色復古蒸汽森鐵穿梭高山雲霧、平溪支線放天燈漫遊、鳴日號奢華五星美饌移動列車，體驗慢速旅行的極致浪漫。",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1000&auto=format&fit=crop", 
    badge: "SCENIC",
    hasFlight: false,
    subSpots: [
      { name: "阿里山林業鐵路祝山日出線", desc: "攀升二千米高山獨立山螺旋鐵道，拂曉抵達全台最高車站。", activityId: "1628-alishan-forest-railway-day-tour-chiayi", city: "嘉義縣阿里山鄉" },
      { name: "平溪支線鐵道懷舊小火車", desc: "菁桐日式木造站房、平溪老街與十分鐵道漫步一日遊。", activityId: "1874-jiufen-shifen-day-tour-taipei", city: "新北市平溪區" },
      { name: "南迴藍皮解憂號復古觀光列車", desc: "開窗吹太平洋海風、綠皮座椅復古吊扇，穿梭南台灣山海。", activityId: "1090-kenting-day-tour-kaohsiung", city: "屏東縣枋寮鄉" },
      { name: "舊山線鐵道自行車 Rail Bike", desc: "踩著電動鐵道自行車穿越龍騰斷橋與勝興百年隧道。", activityId: "2080-gaomei-wetlands-day-tour-taichung", city: "苗栗縣三義鄉" }
    ]
  },
  { 
    id: "baseball", 
    name: "⚾ 體育賽事應援盛會", 
    shortName: "棒球賽事",
    shortEn: "BASEBALL",
    categoryGroup: "都會運動",
    title: "熱血體育賽事：職棒經典與台北大巨蛋巡禮",
    location: "台北大巨蛋 · 台中洲際 · 台南 · 新莊棒球場",
    rate: "4.9", 
    temp: "24°C", 
    duration: "週末賽事",
    desc: "朝聖台北大巨蛋頂級冷氣場館、台中洲際中信兄弟百萬象迷震撼應援、台南統一獅南霸天傳統與狂熱啦啦隊世界級應援文化體驗。",
    img: "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=1000&auto=format&fit=crop", 
    badge: "CPBL",
    hasFlight: false,
    subSpots: [
      { name: "台北大巨蛋室內觀賽殿堂", desc: "四萬人恆溫空調頂級球場，地下美食街散場捷運直達。", activityId: "1659-taipei-101-observation-deck-ticket-taipei", city: "台北市信義區" },
      { name: "台中洲際棒球場中信兄弟主場", desc: "滿場黃潮象迷應援震撼戰歌，狂熱球場外圍夜市美食。", activityId: "2390-taichung-opera-house-tour", city: "台中市北屯區" },
      { name: "台南市立棒球場統一獅南霸天", desc: "最地道熱血台南主場，飄香大腸包小腸與球迷人情味。", activityId: "2410-tainan-historic-sites-pass", city: "台南市南區" },
      { name: "樂天桃園棒球場全猿主場應援", desc: "引領全台灣球場音樂應援潮流，世界級啦啦隊熱力互動。", activityId: "2210-tamsui-sunset-tour-taipei", city: "桃園市中壢區" }
    ]
  },
  { 
    id: "camping", 
    name: "⛺ 星空野奢豪華露營", 
    shortName: "露營",
    shortEn: "CAMPING",
    categoryGroup: "休閒名湯",
    title: "躺看滿天星斗：免裝備豪華露營 Glamping",
    location: "苗栗泰安 · 新竹尖石 · 宜蘭礁溪 · 南投魚池",
    rate: "4.8", 
    temp: "19°C", 
    duration: "2天1夜",
    desc: "露營空手免備料！專屬星空景觀帳篷、營地生鮮直送頂級烤肉火鍋箱（萬家福直配），早晨在翻騰雲海與鳥鳴蟲叫中悠然甦醒。",
    img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1000&auto=format&fit=crop", 
    badge: "GLAMP",
    hasFlight: false,
    subSpots: [
      { name: "南投峇嵐杉丘星空透明球帳", desc: "無死角星空穹頂帳篷、專人現烤和牛燒烤晚餐與手沖咖啡。", activityId: "2381-sun-moon-lake-shuishe-nantou", city: "南投縣魚池鄉" },
      { name: "苗栗橘祥豐收露營渡假村", desc: "落羽松林間豪華神殿帳、四季採果體驗與柴燒壁爐。", activityId: "2080-gaomei-wetlands-day-tour-taichung", city: "苗栗縣大湖鄉" },
      { name: "新竹尖石相思園高海拔雲海", desc: "海拔千米制高點觀景台，飽覽壯麗翻騰雲海與滿天銀河。", activityId: "2210-tamsui-sunset-tour-taipei", city: "新竹縣尖石鄉" },
      { name: "宜蘭礁溪那一村奢華帳篷", desc: "青山綠水天然湖畔渡假，帳篷內配備獨立衛浴與冷暖空調。", activityId: "2199-national-center-for-traditional-arts-yilan", city: "宜蘭縣礁溪鄉" }
    ]
  },
  { 
    id: "diving", 
    name: "🤿 潛入太平洋與珊瑚礁", 
    shortName: "潛水",
    shortEn: "DIVING",
    categoryGroup: "海島水上",
    title: "遇見海龜與軟珊瑚：台灣世界級潛水聖地",
    location: "小琉球 · 綠島石朗 · 墾丁後壁湖 · 蘭嶼八代灣",
    rate: "4.9", 
    temp: "27°C 水溫", 
    duration: "2~3 天",
    desc: "小琉球近距離伴游野生綠蠵龜、綠島水下世界級 30 米玻璃海能見度與海底十字架沉船探險，體驗零重力的湛藍深潛。",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1000&auto=format&fit=crop", 
    badge: "OCEAN",
    hasFlight: false,
    subSpots: [
      { name: "綠島石朗海底郵筒與鋼鐵礁", desc: "全球最深海底郵筒寄出防水明信片，30米純淨玻璃海。", activityId: "2930-green-island-hotspring", city: "台東縣綠島鄉" },
      { name: "小琉球美人洞海龜生態保護區", desc: "野生綠蠵龜常駐棲息地，水下與海龜同框合影率達99%。", activityId: "2950-xiaoliuqiu-snorkeling-turtle", city: "屏東縣琉球鄉" },
      { name: "蘭嶼八代灣沉船探險潛點", desc: "巨型萬噸貨輪沉沒蔚藍深海，成為壯麗海洋魚類生態礁。", activityId: "1090-kenting-day-tour-kaohsiung", city: "台東縣蘭嶼鄉" },
      { name: "墾丁後壁湖玫瑰珊瑚花園", desc: "保育區內綿延數百米彩色軟珊瑚群與小丑魚共舞。", activityId: "1090-kenting-day-tour-kaohsiung", city: "屏東縣恆春鎮" }
    ]
  },
  { 
    id: "trekking", 
    name: "⛰️ 台灣百岳與山林古道", 
    shortName: "登山",
    shortEn: "TREKKING",
    categoryGroup: "山林冒險",
    title: "漫步雲海之上：台灣山林奇蹟探訪",
    location: "合歡山 · 阿里山 · 玉山 · 太魯閣錐麓",
    rate: "4.9", 
    temp: "15°C", 
    duration: "2~4 天",
    desc: "合歡山新手友善百岳群峰日出、阿里山特富野神木古道與太魯閣錐麓大理石絕壁斷崖，擁抱高山雲海與古老檜木森林浴。",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000&auto=format&fit=crop", 
    badge: "ALPINE",
    hasFlight: false,
    subSpots: [
      { name: "合歡山石門山新手友善百岳", desc: "海拔3,237米，步道親民半小時登頂，俯瞰中央山脈脊樑。", activityId: "2180-cingjing-farm-day-tour-taichung", city: "南投縣仁愛鄉" },
      { name: "太魯閣錐麓古道千仞斷崖", desc: "行走於寬僅一公尺大理石懸崖步道，俯瞰立霧溪萬丈深谷。", activityId: "1095-taroko-gorge-day-tour-hualien", city: "花蓮縣秀林鄉" },
      { name: "阿里山特富野古道林鐵行腳", desc: "漫步於舊時運材鐵軌道與參天柳杉林間，天然負離子浴。", activityId: "1628-alishan-forest-railway-day-tour-chiayi", city: "嘉義縣阿里山鄉" },
      { name: "玉山主峰海拔3952m攻頂", desc: "東北亞最高峰，台灣人一生必做三件事之一登頂圓夢。", activityId: "3050-yushan-trekking-tour", city: "南投縣信義鄉" }
    ]
  },
  { 
    id: "nightview", 
    name: "🌃 浪漫百萬夜景私藏", 
    shortName: "夜景",
    shortEn: "NIGHT VIEWS",
    categoryGroup: "休閒名湯",
    title: "星光與城市的低語：全台浪漫夜景地圖",
    location: "台北象山 · 台中望高寮 · 高雄壽山 · 陽明山",
    rate: "4.8", 
    temp: "21°C", 
    duration: "夜間浪漫",
    desc: "象山六巨石俯瞰台北101璀璨天際線、台中望高寮百萬夜景景觀平台與高雄壽山情人觀景台港都夕照，情侶微醺約會必訪。",
    img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=1000&auto=format&fit=crop", 
    badge: "ROMANTIC",
    hasFlight: false,
    subSpots: [
      { name: "台北象山六巨石眺望 101", desc: "捷運站直達，登頂20分鐘擁抱全台灣最奢華信義區繁華夜景。", activityId: "2160-elephant-mountain-night-tour", city: "台北市信義區" },
      { name: "陽明山草山夜未眠景觀餐酒", desc: "半山腰旋轉木馬與露天觀景座，品嚐調酒俯瞰大台北盆地。", activityId: "2120-beitou-hotspring-taipei", city: "台北市士林區" },
      { name: "台中望高寮夜景公園", desc: "媲美函館的璀璨都會夜景，白天地形壯麗、夜晚萬家燈火。", activityId: "2080-gaomei-wetlands-day-tour-taichung", city: "台中市南屯區" },
      { name: "高雄壽山情人觀景台LOVE地標", desc: "港都港灣夕陽染紅海面，入夜遠眺高雄流行音樂中心點燈。", activityId: "2280-pier-2-art-center-kaohsiung", city: "高雄市鼓山區" }
    ]
  },
  { 
    id: "northcoast", 
    name: "🌊 北海岸海蝕地貌秘境", 
    shortName: "北海岸",
    shortEn: "NORTH COAST",
    categoryGroup: "海島水上",
    title: "奇岩怪石與蔚藍灣岬：北海岸秘境巡航",
    location: "基隆嶼 · 萬里野柳 · 鼻頭角步道 · 陰陽海",
    rate: "4.8", 
    temp: "23°C", 
    duration: "1~2 天",
    desc: "野柳女王頭海蝕地質奇觀、基隆嶼包船繞島登頂燈塔俯瞰台灣龍珠、鼻頭角台版小長城與潮境公園飛天掃帚，絕美蔚藍海景公路。",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000&auto=format&fit=crop", 
    badge: "COASTAL",
    hasFlight: false,
    subSpots: [
      { name: "野柳地質公園女王頭蕈狀岩", desc: "世界級地質奇蹟，漫步海邊欣賞大自然雕琢的雅致側影。", activityId: "1089-yehliu-geopark-ticket-taipei", city: "新北市萬里區" },
      { name: "基隆嶼包船登島與攻頂燈塔", desc: "搭船出海登上黑鯨美譽火山島，登頂三百公尺燈塔眺望大洋。", activityId: "2940-keelung-islet-boat-tour", city: "基隆市中正區" },
      { name: "鼻頭角步道台版萬里長城", desc: "山脊上的蜿蜒木棧道，兩側全為深邃無邊的碧藍太平洋。", activityId: "2230-bitoujiao-cape-tour", city: "新北市瑞芳區" },
      { name: "金瓜石水湳洞十三層與陰陽海", desc: "龐大礦業遺址天空之城，出海口金黃與湛藍漸層海面交織。", activityId: "1874-jiufen-shifen-day-tour-taipei", city: "新北市瑞芳區" }
    ]
  },
  { 
    id: "roundtaiwan", 
    name: "🚴 熱血環島縱橫壯遊", 
    shortName: "環島",
    shortEn: "ROUND TAIWAN",
    categoryGroup: "都會運動",
    title: "一生必走一次的旅程：台灣環島縱橫壯遊",
    location: "台 1 線 · 台 9 線 · 台灣四極點燈塔",
    rate: "4.9", 
    temp: "25°C", 
    duration: "7~9 天",
    desc: "打卡四極點燈塔、穿越蘇花公路壯闊海景。機車、公路車或自駕SUV環島，用速度刻寫專屬於你的青春與勇氣故事。",
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1000&auto=format&fit=crop", 
    badge: "ROADTRIP",
    hasFlight: false,
    subSpots: [
      { name: "極東點三貂角燈塔", desc: "台灣第一道晨曦灑落之地，白色雪白教堂建築與燈塔相映。", activityId: "2230-bitoujiao-cape-tour", city: "新北市貢寮區" },
      { name: "極南點鵝鑾鼻燈塔與巴士海峽", desc: "全台光力最強武裝燈塔，標誌台灣最南端的蔚藍地標。", activityId: "1090-kenting-day-tour-kaohsiung", city: "屏東縣恆春鎮" },
      { name: "蘇花改清水斷崖海景公路", desc: "世界級懸崖公路巡禮，奔馳在山壁與太平洋之間。", activityId: "1095-taroko-gorge-day-tour-hualien", city: "花蓮縣秀林鄉" },
      { name: "台東太麻里曙光紀念公園", desc: "跨年迎千禧年第一道光芒的聖地，太平洋平線一覽無遺。", activityId: "3140-chishang-biking-tour", city: "台東縣太麻里鄉" }
    ]
  },
  { 
    id: "surfing", 
    name: "🏄 追浪熱血浪人天堂", 
    shortName: "衝浪",
    shortEn: "SURFING",
    categoryGroup: "海島水上",
    title: "等待起浪的瞬間：全台頂級浪點攻略",
    location: "宜蘭烏石港 · 墾丁佳樂水 · 台東東河 · 台南漁光島",
    rate: "4.7", 
    temp: "26°C", 
    duration: "週末追浪",
    desc: "頭城烏石港新手友善沙灘浪、恆春佳樂水長浪天堂與台東金尊國際衝浪公開賽浪點，享受太平洋海風與浪花拍打的極致自由。",
    img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000&auto=format&fit=crop", 
    badge: "WAVE",
    hasFlight: false,
    subSpots: [
      { name: "宜蘭頭城烏石港北堤浪點", desc: "新手一對一教練體驗聖殿，細緻黑沙灘與龜山島同框逐浪。", activityId: "3070-wushi-harbor-surfing", city: "宜蘭縣頭城鎮" },
      { name: "屏東恆春佳樂水長板天堂", desc: "河口定點起浪浪形優美，長板浪人終年駐點的熱帶海灣。", activityId: "1090-kenting-day-tour-kaohsiung", city: "屏東縣滿州鄉" },
      { name: "台東金尊國際衝浪公開賽浪點", desc: "世界衝浪聯盟WSL認證頂級賽場，冬季東北季風捲起狂暴好浪。", activityId: "3140-chishang-biking-tour", city: "台東縣東河鄉" },
      { name: "台南漁光島月牙灣浪點", desc: "日落最美浪點，在金色夕陽餘暉倒影下悠閒划水等浪。", activityId: "2410-tainan-historic-sites-pass", city: "台南市安平區" }
    ]
  },
  { 
    id: "templefair", 
    name: "🪅 傳統廟會與民俗藝陣", 
    shortName: "廟會",
    shortEn: "TEMPLE FAIRS",
    categoryGroup: "節慶文化",
    title: "神明出巡的震撼：台灣民俗信仰文化",
    location: "大甲鎮瀾宮 · 白沙屯 · 東港東隆宮 · 台南普濟殿",
    rate: "4.9", 
    temp: "24°C", 
    duration: "年度慶典",
    desc: "名列世界三大宗教盛事大甲媽祖遶境、白沙屯粉紅超跑神奇進香路線與東港東隆宮三年一科王船祭燒王船盛典，體驗最純粹的民間信仰力量。",
    img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=1000&auto=format&fit=crop", 
    badge: "CULTURE",
    hasFlight: false,
    subSpots: [
      { name: "大甲鎮瀾宮媽祖九天八夜遶境", desc: "世界三大宗教盛事之一，萬民鑽轎底、報馬仔與煙火陣頭。", activityId: "3090-dajia-mazu-pilgrimage", city: "台中市大甲區" },
      { name: "白沙屯拱天宮粉紅超跑進香", desc: "無固定行進路線全憑媽祖旨意，虔誠香燈腳徒步長征。", activityId: "2080-gaomei-wetlands-day-tour-taichung", city: "苗栗縣通霄鎮" },
      { name: "屏東東港東隆宮迎王平安祭典", desc: "三年一科國家無形文化資產，深夜海濱燒王船祈福震撼世界。", activityId: "1090-kenting-day-tour-kaohsiung", city: "屏東縣東港鎮" },
      { name: "台南普濟殿千盞手繪花燈海", desc: "春節傳統廟埕掛滿千盞學童手繪燈籠，浪漫懷舊老城夜景。", activityId: "2410-tainan-historic-sites-pass", city: "台南市中西區" }
    ]
  },
  { 
    id: "events", 
    name: "🎪 國際年度盛事", 
    shortName: "大型活動",
    shortEn: "EVENTS",
    categoryGroup: "都會運動",
    title: "音樂、藝術與狂歡：台灣年度指標展演",
    location: "新北貢寮 · 台東鹿野 · 台北燈會 · 高雄大港開唱",
    rate: "4.8", 
    temp: "25°C", 
    duration: "季節限定",
    desc: "台東鹿野熱氣球嘉年華、貢寮海洋音樂祭與全台台灣燈會光影盛宴，匯聚國內外頂尖展演與狂歡熱潮。",
    img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1000&auto=format&fit=crop", 
    badge: "ANNUAL",
    hasFlight: false,
    subSpots: [
      { name: "台東台灣國際熱氣球嘉年華", desc: "鹿野高台清晨繫留體驗，數十顆造型球齊聚與夜間光雕音樂會。", activityId: "3140-chishang-biking-tour", city: "台東縣鹿野鄉" },
      { name: "新北貢寮國際海洋音樂祭", desc: "夏日福隆黃金沙灘搖滾狂歡，海風、浪花與獨立樂團盛會。", activityId: "2230-bitoujiao-cape-tour", city: "新北市貢寮區" },
      { name: "高雄大港開唱 Megaport Festival", desc: "港都駁二海風舞台，全台灣最熱血春季獨立音樂祭。", activityId: "2280-pier-2-art-center-kaohsiung", city: "高雄市鹽埕區" },
      { name: "全台台灣燈會主燈光影展", desc: "元宵年度輪辦國家級燈會，巨型生肖主燈與無人機光雕秀。", activityId: "1659-taipei-101-observation-deck-ticket-taipei", city: "全台輪辦" }
    ]
  }
];

// 2. 台灣手搖飲料 TOP 20 (含老饕黃金甜度冰量、分類標籤與特色推薦)
const DRINKS_DATA = [
  { rank: 1, name: "50嵐 50LAN", logo: "🟡", category: "經典國民", tag: "國民珍奶・絕對零踩雷", drinks: ["1號四季春珍波椰", "波霸奶茶", "冰淇淋紅茶"], sugarIce: "微糖 (3分) / 微冰", rate: "4.9★", votes: "15.8萬票", desc: "台灣最普及且品質最穩定的老字號！1號四季春珍波椰（椰果＋大小波霸）酸甜耐嚼，國民記憶首選。" },
  { rank: 2, name: "麻古茶坊 MACU", logo: "🥭", category: "果茶芝芝", tag: "新鮮水果果肉 · 芝芝甜點系始祖", drinks: ["芝芝芒果果粒", "楊枝甘露", "柳橙果粒茶"], sugarIce: "微糖 / 微冰 (果肉甜度足)", rate: "4.9★", votes: "14.9萬票", desc: "甜點系飲品天花板！濃郁紐西蘭芝士奶蓋搭配整杯滿滿現切當季鮮芒果肉與綠茶凍，層次感極致豐富。" },
  { rank: 3, name: "先喝道 TaoTao Tea", logo: "🌹", category: "英倫花茶", tag: "古典玫瑰園旗下 · 英式宮廷花草拿鐵", drinks: ["英式玫瑰鮮奶拿鐵", "四季春蜜桃茶", "英式伯爵茶拿鐵"], sugarIce: "半糖 (5分) / 少冰", rate: "4.9★", votes: "14.3萬票", desc: "以貴族下午茶為基底，精選英國產區玫瑰原葉與濃郁鮮乳調和，典雅花香在口中久久不散。" },
  { rank: 4, name: "得正 Oolong Tea", logo: "🟦", category: "文青純茶", tag: "青年文青純茶 · 烏龍焙火專門", drinks: ["焙烏龍奶茶（加茶凍）", "檸檬春烏龍", "春烏龍"], sugarIce: "微糖 (3分) / 微冰", rate: "4.9★", votes: "13.9萬票", desc: "主打三種不同烘焙程度的精緻烏龍茶，搭配獨家手工焙烏龍茶凍，茶感濃厚回甘，年輕族群回購率冠軍。" },
  { rank: 5, name: "CoCo都可 CoCo", logo: "🧋", category: "經典國民", tag: "經典手搖先鋒 · 百香雙響炮酸甜國民必喝", drinks: ["百香雙響炮", "奶茶三兄弟", "檸檬冬瓜露"], sugarIce: "半糖 / 少冰", rate: "4.8★", votes: "13.5萬票", desc: "酸爽百香果汁融入大顆黑珍珠與椰果，夏天沁涼消暑第一名，全球拓點數萬家的台灣手搖代表。" },
  { rank: 6, name: "大茗本位製茶堂 DaMing", logo: "🥑", category: "果茶芝芝", tag: "酪梨奶蓋天花板 · 烤糖玉露青茶香回甘", drinks: ["酪梨奶蓋紅玉", "蘋果玉露青", "烤糖蕎麥奶茶"], sugarIce: "微糖 / 微冰", rate: "4.9★", votes: "13.1萬票", desc: "將新鮮酪梨融入綿密奶蓋，帶有一絲堅果香氣與滑順口感，搭配嚴選紅玉紅茶，驚豔無數手搖控。" },
  { rank: 7, name: "茶之魔手 Magic Tea", logo: "👑", category: "經典國民", tag: "南霸天手搖傳奇 · 平價大杯解渴首選", drinks: ["山楂烏龍", "藍莓凍奶茶", "青梅綠茶"], sugarIce: "一分糖 / 微冰", rate: "4.8★", votes: "12.8萬票", desc: "台灣南部人心中神級品牌！擁有自營茶園，山楂酸甜生津開胃，大杯容量與超平實價格征服全台灣。" },
  { rank: 8, name: "顏太煮奶茶 Yan Tai Zhu", logo: "👑", category: "厚奶加料", tag: "復古宮廷厚奶茶 · 手工加料豐富度霸主", drinks: ["三喜厚奶茶", "荔枝甘露", "太煮厚奶茶"], sugarIce: "微糖 / 微冰", rate: "4.8★", votes: "12.4萬票", desc: "滿杯都是料！手工仙草、布丁、粉圓、芋圓三喜組合，搭配香濃厚奶茶，喝一杯直接飽足一餐。" },
  { rank: 9, name: "老賴茶棧 Like Tea", logo: "🪵", category: "老字號傳承", tag: "台中第二市場一甲子傳承 · 古早味豆香紅茶", drinks: ["老賴紅茶", "豆香紅茶", "太后牛乳"], sugarIce: "半糖 / 碎冰", rate: "4.8★", votes: "12.0萬票", desc: "發源自台中第二市場一甲子老字號，嚴選天然炒糖與決明子香氣紅茶，加入自磨非基改豆漿的豆香紅茶絕配。" },
  { rank: 10, name: "喫茶趣ToGo Cha FOR TEA", logo: "🍵", category: "文青純茶", tag: "天仁茗茶極上原葉鮮萃 · 913茶王回甘無敵", drinks: ["913茶王", "珍珠鮮奶茶", "綠茶冰淇淋"], sugarIce: "無糖 / 微冰 (享受甘甜)", rate: "4.9★", votes: "11.7萬票", desc: "天仁茗茶旗下手搖品牌，913茶王以台灣高山烏龍揉入花旗參，入口甘醇生津，是長輩與茶藝愛好者一致首選。" },
  { rank: 11, name: "一沐日 1MUJI", logo: "🍃", category: "厚奶加料", tag: "在地古早味神級配料 · 招牌草仔粿粉圓", drinks: ["逮丸奶茶（草仔粿）", "油切蕎麥茶", "粉粿黑糖奶茶"], sugarIce: "無糖 (配料自帶甜) / 微冰", rate: "4.8★", votes: "11.2萬票", desc: "全台首創將台灣傳統點心「草仔粿」揉入奶茶的創始者！淡淡艾草香配上Q彈口感，造成全台搶購狂潮。" },
  { rank: 12, name: "迷客夏 Milksha", logo: "🥛", category: "厚奶加料", tag: "自家綠光牧場鮮奶 · 純天然手作白玉珍珠", drinks: ["珍珠紅茶拿鐵", "大甲芋頭鮮奶", "決明大麥拿鐵"], sugarIce: "微糖 / 微冰", rate: "4.8★", votes: "10.8萬票", desc: "牧場鮮奶專門品牌，不加防腐劑的手作白玉珍珠，裹著蜜香蜂蜜糖水，搭配大甲大頭芋泥打成的鮮奶滑順溫潤。" },
  { rank: 13, name: "可不可熟成紅茶 KEBUKE", logo: "🍷", category: "文青純茶", tag: "英倫老洋樓英氣 · 熟成濃茶重奶控首選", drinks: ["熟成歐蕾（加白玉）", "胭脂紅茶", "白玉歐蕾"], sugarIce: "微糖 / 微冰", rate: "4.8★", votes: "10.5萬票", desc: "經後熟成工藝的斯里蘭卡紅茶，帶有成熟果香，加入高比例牛乳調配成熟成歐蕾，茶韻深邃不膩口。" },
  { rank: 14, name: "清心福全 Ching Shin", logo: "❤️", category: "經典國民", tag: "全台分店數第一霸主 · 國民必點多多綠", drinks: ["優多綠茶（多多綠）", "烏龍綠茶", "隱藏版珍蜜普洱"], sugarIce: "微糖 / 少冰", rate: "4.7★", votes: "10.1萬票", desc: "分店數量冠絕全台！經典多多綠茶酸甜解膩，還有專屬特調保麗龍保冰杯傳統，全台灣人從小喝到大的日常夥伴。" },
  { rank: 15, name: "龜記茗品 GUIJI", logo: "🐢", category: "果茶芝芝", tag: "古早味紅柚果香翡翠 · 老饕回甘首選", drinks: ["紅柚翡翠", "蘋果紅萱", "三十三茶王"], sugarIce: "半糖 (5分) / 少冰", rate: "4.8★", votes: "9.8萬票", desc: "整杯滿滿現剝紅葡萄柚果肉，搭配清爽翡翠綠茶，入口微酸微甜又爆汁，是果茶愛好者每年夏季必喝。" },
  { rank: 16, name: "約翰紅茶公司 John Tea", logo: "🎩", category: "英倫花茶", tag: "英倫莊園產區生乳那堤 · 紅茶狂熱者聖殿", drinks: ["煮濃那堤", "雨果那堤", "生乳紅茶"], sugarIce: "半糖 / 少冰", rate: "4.9★", votes: "9.5萬票", desc: "標榜產區紅茶專門店，煮濃那堤加入六甲莊園生乳，重乳重茶香濃郁到極致，排隊名店代表。" },
  { rank: 17, name: "春水堂 Chun Shui Tang", logo: "🏮", category: "老字號傳承", tag: "世界珍珠奶茶發祥地 · 人文雅致國宴茶館", drinks: ["原創珍珠奶茶", "鐵觀音拿鐵", "香醇功夫麵"], sugarIce: "半糖 / 正常冰 (經典風味)", rate: "4.8★", votes: "9.2萬票", desc: "1983年於台中創立的世界珍珠奶茶發源地！遵循古法細火慢熬的小粉圓，細緻綿密奶泡，國宴級茶館體驗。" },
  { rank: 18, name: "萬波島嶼紅茶 Wanpo", logo: "🏝️", category: "老字號傳承", tag: "眷村復古暖心記憶 · 紅豆粉粿甜品入茶", drinks: ["紅豆粉粿鮮奶", "金萱珍波粉", "蘭葉那堤"], sugarIce: "微糖 / 微冰", rate: "4.7★", votes: "8.9萬票", desc: "台中眷村回憶手搖，將阿嬤古早味紅豆粉粿甜品創新融入鮮奶，復古木質調包裝深受海內外喜愛。" },
  { rank: 19, name: "五桐號 WooTea", logo: "🪵", category: "厚奶加料", tag: "手工綿密杏仁凍 · 文青插畫聯名潮流", drinks: ["杏仁凍五桐茶", "最完美手沖泰奶", "綠茶凍五桐茶"], sugarIce: "微糖 / 微冰", rate: "4.7★", votes: "8.6萬票", desc: "獨家特調五種茶葉複方五桐茶，搭配手作Q彈溫潤杏仁凍與茶凍，與知名插畫家聯名杯身更引爆社群狂熱。" },
  { rank: 20, name: "茶湯會 TP-TEA", logo: "🧋", category: "文青純茶", tag: "春水堂家族極品茶道 · 炭焙鐵觀音專門", drinks: ["鐵觀音拿鐵", "觀音雙Q奶茶", "翡翠檸檬"], sugarIce: "半糖 / 少冰", rate: "4.7★", votes: "8.3萬票", desc: "傳承春水堂專業茶道精神，招牌炭焙鐵觀音帶有獨特焙火焦糖香氣，搭配香濃奶香，餘韻悠長回味無窮。" }
];

// 3. 台灣百萬必訪景點 TOP 20 (含分類、年度人次、亮點簡介與評分)
const SPOTS_TOP20_DATA = [
  { rank: 1, name: "台北 101 觀景台", city: "台北市", category: "都會地標", visitors: "360 萬人次/年", rate: "4.9★", highlight: "世界最高綠建築、89樓超高速電梯、660噸黃金阻尼器", img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop", activityId: "1659-taipei-101-observation-deck-ticket-taipei" },
  { rank: 2, name: "國立故宮博物院", city: "台北市", category: "文化歷史", visitors: "280 萬人次/年", rate: "4.9★", highlight: "翠玉白菜、肉形石、毛公鼎，七千年中華文化宮廷國寶薈萃", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop", activityId: "2112-national-palace-museum-ticket-taipei" },
  { rank: 3, name: "日月潭國家風景區", city: "南投縣", category: "自然山海", visitors: "320 萬人次/年", rate: "4.8★", highlight: "CNN全球最美十大環湖自行車道、伊達邵逐鹿傳說、湖畔晨霧", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop", activityId: "2381-sun-moon-lake-shuishe-nantou" },
  { rank: 4, name: "九份山城老街", city: "新北市", category: "文化歷史", visitors: "260 萬人次/年", rate: "4.9★", highlight: "神隱少女復古紅燈籠長階、阿柑姨芋圓、茶樓俯瞰基隆嶼夜景", img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop", activityId: "1874-jiufen-shifen-day-tour-taipei" },
  { rank: 5, name: "墾丁國家公園", city: "屏東縣", category: "自然山海", visitors: "250 萬人次/年", rate: "4.8★", highlight: "南台灣熱帶海濱、鵝鑾鼻燈塔、龍磐崩崖無光害銀河星空", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop", activityId: "1090-kenting-day-tour-kaohsiung" },
  { rank: 6, name: "阿里山森林遊樂區", city: "嘉義縣", category: "自然山海", visitors: "220 萬人次/年", rate: "4.9★", highlight: "祝山日出金黃雲海、百年高山蒸汽森鐵、神木古道森林浴", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop", activityId: "1628-alishan-forest-railway-day-tour-chiayi" },
  { rank: 7, name: "野柳地質公園", city: "新北市", category: "自然山海", visitors: "210 萬人次/年", rate: "4.8★", highlight: "舉世聞名女王頭、仙女鞋、蕈狀岩，海蝕風化大自然奇蹟", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", activityId: "1089-yehliu-geopark-ticket-taipei" },
  { rank: 8, name: "太魯閣國家公園", city: "花蓮縣", category: "自然山海", visitors: "200 萬人次/年", rate: "4.9★", highlight: "千公尺大理石立霧溪深邃峽谷、燕子口壺穴、清水斷崖絕壁", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", activityId: "1095-taroko-gorge-day-tour-hualien" },
  { rank: 9, name: "高雄駁二藝術特區", city: "高雄市", category: "都會地標", visitors: "230 萬人次/年", rate: "4.8★", highlight: "大港橋旋轉秀、港都海風倉庫展覽、輕軌穿梭文創聚落", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop", activityId: "2280-pier-2-art-center-kaohsiung" },
  { rank: 10, name: "台南奇美博物館", city: "台南市", category: "文化歷史", visitors: "190 萬人次/年", rate: "4.9★", highlight: "純白希臘古典宮殿、阿波羅噴泉廣場、全球最頂級名琴典藏", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop", activityId: "2855-chimei-museum-ticket-tainan" },
  { rank: 11, name: "淡水老街與漁人碼頭", city: "新北市", category: "文化歷史", visitors: "240 萬人次/年", rate: "4.7★", highlight: "阿給與魚酥、情人橋夕陽剪影、紅毛城百年古蹟巡禮", img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop", activityId: "2210-tamsui-sunset-tour-taipei" },
  { rank: 12, name: "清境農場青青草原", city: "南投縣", category: "休閒主題", visitors: "180 萬人次/年", rate: "4.8★", highlight: "海拔1,750米高山小瑞士、紐西蘭綿羊秀、無敵山巒天空步道", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop", activityId: "2180-cingjing-farm-day-tour-taichung" },
  { rank: 13, name: "台中高美濕地", city: "台中市", category: "自然山海", visitors: "170 萬人次/年", rate: "4.9★", highlight: "退潮時天空之鏡倒影、十七座巨型風車與落日晚霞浪漫木棧道", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop", activityId: "2080-gaomei-wetlands-day-tour-taichung" },
  { rank: 14, name: "台中國家歌劇院", city: "台中市", category: "都會地標", visitors: "165 萬人次/年", rate: "4.8★", highlight: "伊東豊雄曲牆美聲涵洞建築奇蹟、空中花園與水池倒影", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop", activityId: "2390-taichung-opera-house-tour" },
  { rank: 15, name: "台南赤崁樓與安平古堡", city: "台南市", category: "文化歷史", visitors: "160 萬人次/年", rate: "4.7★", highlight: "台灣400年熱蘭遮城古磚、普羅民遮城碑碣、安平老街小吃", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop", activityId: "2410-tainan-historic-sites-pass" },
  { rank: 16, name: "宜蘭傳藝中心", city: "宜蘭縣", category: "文化歷史", visitors: "150 萬人次/年", rate: "4.8★", highlight: "傳統紅磚街屋水榭、捏麵人布袋戲傳藝、搭畫舫遊冬山河", img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=600&auto=format&fit=crop", activityId: "2199-national-center-for-traditional-arts-yilan" },
  { rank: 17, name: "太平山見晴懷古步道", city: "宜蘭縣", category: "自然山海", visitors: "140 萬人次/年", rate: "4.9★", highlight: "CNN評選全球最美28條步道、雲霧繚繞中的青苔舊鐵道與檜木林", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop", activityId: "2890-taipingshan-day-tour-yilan" },
  { rank: 18, name: "蘭陽博物館", city: "宜蘭縣", category: "都會地標", visitors: "130 萬人次/年", rate: "4.8★", highlight: "北關海蝕單面山傾斜建築美學、烏石港濕地水鳥生態", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", activityId: "2770-lanyang-museum-ticket-yilan" },
  { rank: 19, name: "高雄義大世界", city: "高雄市", category: "休閒主題", visitors: "145 萬人次/年", rate: "4.7★", highlight: "希臘愛琴海情境主題樂園、亞洲最大摩天輪、Outlet購物廣場", img: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600&auto=format&fit=crop", activityId: "1690-e-da-theme-park-ticket-kaohsiung" },
  { rank: 20, name: "小琉球花瓶岩浮潛", city: "屏東縣", category: "自然山海", visitors: "125 萬人次/年", rate: "4.9★", highlight: "珊瑚礁海岸地標、99%機率海龜共游、清澈水下珊瑚世界", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop", activityId: "2950-xiaoliuqiu-snorkeling-turtle" }
];

// 4. 5 大區域與 22 縣市對照表
const REGIONS_DATA = {
  "北部": ["台北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"],
  "中部": ["台中市", "苗栗縣", "彰化縣", "南投縣", "雲林縣"],
  "南部": ["高雄市", "台南市", "嘉義市", "嘉義縣", "屏東縣"],
  "東部": ["花蓮縣", "台東縣"],
  "離島": ["澎湖縣", "金門縣", "連江縣(馬祖)"]
};

// 5. 全台 30 大精選景點庫 (供 22 縣市分區檢索與篩選)
const ALL_SPOTS_DATA = [
  { id: 1, name: "墾丁龍磐崩崖秘境", city: "屏東縣", zone: "南部", img: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop", rate: "4.8★", duration: "半日遊", temp: "26°C", desc: "全台最壯麗石灰岩崩崖地形，俯瞰浩瀚太平洋與夜間無光害璀璨銀河。", activityId: "1090-kenting-day-tour-kaohsiung" },
  { id: 2, name: "九份山城豎崎路老街", city: "新北市", zone: "北部", img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop", rate: "4.9★", duration: "一日遊", temp: "21°C", desc: "如夢似幻的神隱少女紅燈籠梯道，品嚐阿柑姨芋圓與百年茶樓俯瞰基隆嶼。", activityId: "1874-jiufen-shifen-day-tour-taipei" },
  { id: 3, name: "太魯閣燕子口巨石峽谷", city: "花蓮縣", zone: "東部", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", rate: "4.9★", duration: "一日遊", temp: "22°C", desc: "立霧溪千萬年雕琢的大理石絕壁與壺穴地形，世界頂級地質奇觀。", activityId: "1095-taroko-gorge-day-tour-hualien" },
  { id: 4, name: "阿里山特富野古道神木", city: "嘉義縣", zone: "南部", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop", rate: "4.8★", duration: "一日遊", temp: "15°C", desc: "舊鐵道與柳杉林環抱的古道，晨曦破曉時分追逐祝山金黃雲海。", activityId: "1628-alishan-forest-railway-day-tour-chiayi" },
  { id: 5, name: "日月潭水社碼頭晨霧", city: "南投縣", zone: "中部", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop", rate: "4.7★", duration: "一日遊", temp: "23°C", desc: "全球十大最美環湖自行車道，向山眺望湖光山色與阿婆茶葉蛋芳香。", activityId: "2381-sun-moon-lake-shuishe-nantou" },
  { id: 6, name: "清境農場青青草原天空步道", city: "南投縣", zone: "中部", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop", rate: "4.8★", duration: "一日遊", temp: "18°C", desc: "高山小瑞士綿羊脫毛秀與漫步海拔 1,750 米高架景觀步道。", activityId: "2180-cingjing-farm-day-tour-taichung" },
  { id: 7, name: "台中高美濕地風車夕陽", city: "台中市", zone: "中部", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop", rate: "4.9★", duration: "半日遊", temp: "25°C", desc: "退潮時如天空之鏡般的絕美倒影，十七座風車在晚霞中浪漫佇立。", activityId: "2080-gaomei-wetlands-day-tour-taichung" },
  { id: 8, name: "台北 101 秘境觀景台", city: "台北市", zone: "北部", img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop", rate: "4.9★", duration: "2小時", temp: "24°C", desc: "登上超高速電梯至 89 樓俯瞰台北夜空，近距離觀賞重達 660 噸的阻尼器風阻球。", activityId: "1659-taipei-101-observation-deck-ticket-taipei" },
  { id: 9, name: "高雄駁二大港橋海灣特區", city: "高雄市", zone: "南部", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop", rate: "4.7★", duration: "一日遊", temp: "28°C", desc: "全台首座旋轉大港橋、輕軌穿梭倉庫文創展覽與哈瑪星鐵道園區。", activityId: "2280-pier-2-art-center-kaohsiung" },
  { id: 10, name: "野柳地質公園女王頭", city: "新北市", zone: "北部", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", rate: "4.8★", duration: "半日遊", temp: "22°C", desc: "大自然風化與海蝕奇蹟，形如優雅女王側影的世界級地質景點。", activityId: "1089-yehliu-geopark-ticket-taipei" },
  { id: 11, name: "台南奇美博物館西洋宮殿", city: "台南市", zone: "南部", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop", rate: "4.9★", duration: "半日遊", temp: "27°C", desc: "阿波羅噴泉與純白希臘神話宮殿，典藏頂級小提琴名琴與西洋名畫。", activityId: "2855-chimei-museum-ticket-tainan" },
  { id: 12, name: "宜蘭見晴懷古步道檜木鐵道", city: "宜蘭縣", zone: "北部", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop", rate: "4.9★", duration: "一日遊", temp: "14°C", desc: "CNN 評選全球最美 28 條步道，煙霧迷濛中的百年高空運材鐵軌。", activityId: "2890-taipingshan-day-tour-yilan" },
  { id: 13, name: "澎湖奎壁山摩西分海踏浪", city: "澎湖縣", zone: "離島", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop", rate: "4.8★", duration: "半日遊", temp: "28°C", desc: "退潮時海水奇蹟般向兩側退去，露出 S 型玄武岩礫石步道通往赤嶼。", activityId: "1090-kenting-day-tour-kaohsiung" },
  { id: 14, name: "綠島朝日海底溫泉", city: "台東縣", zone: "東部", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop", rate: "4.9★", duration: "半日遊", temp: "27°C", desc: "全世界僅三處罕見的海底鹹水溫泉，邊泡露天湯泉邊迎接太平洋第一道曙光。", activityId: "2930-green-island-hotspring" },
  { id: 15, name: "基隆嶼包船登島與陰陽海", city: "基隆市", zone: "北部", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&auto=format&fit=crop", rate: "4.8★", duration: "半日遊", temp: "23°C", desc: "搭船出海登上黑鯨美譽的基隆嶼，攻頂燈塔並眺望金黃漸層的陰陽海奇景。", activityId: "2940-keelung-islet-boat-tour" },
  { id: 16, name: "台北北投溫泉地熱谷", city: "台北市", zone: "北部", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop", rate: "4.7★", duration: "半日遊", temp: "24°C", desc: "硫磺煙霧裊裊如仙境的地熱谷，搭配百年綠建築北投圖書館與日式泡湯體驗。", activityId: "2120-beitou-hotspring-taipei" },
  { id: 17, name: "南投峇嵐杉丘奢華星空帳篷", city: "南投縣", zone: "中部", img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop", rate: "4.9★", duration: "二日遊", temp: "20°C", desc: "免裝備懶人露營首選，透明星空帳、專人現烤頂級和牛晚宴與晨間山林瑜伽。", activityId: "2381-sun-moon-lake-shuishe-nantou" },
  { id: 18, name: "台北大巨蛋棒球應援特區", city: "台北市", zone: "北部", img: "https://images.unsplash.com/photo-1508344928928-7165b67de128?w=600&auto=format&fit=crop", rate: "4.9★", duration: "3小時", temp: "22°C", desc: "四萬人頂級室內恆溫大巨蛋，體驗撼動人心的台灣職棒熱血應援加油歌。", activityId: "1659-taipei-101-observation-deck-ticket-taipei" },
  { id: 19, name: "平溪十分瀑布與放天燈", city: "新北市", zone: "北部", img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&auto=format&fit=crop", rate: "4.8★", duration: "一日遊", temp: "22°C", desc: "台版尼加拉瀑布之稱的十分大瀑布，並在鐵軌中央寫下心願冉冉升起祈福天燈。", activityId: "1874-jiufen-shifen-day-tour-taipei" },
  { id: 20, name: "台北士林夜市美食地下街", city: "台北市", zone: "北部", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop", rate: "4.7★", duration: "2小時", temp: "25°C", desc: "全台名氣最響亮夜市，品嚐大餅包小餅、豪大大雞排、士林大香腸與米其林生煎包。", activityId: "2150-shilin-night-market-tour" },
  { id: 21, name: "台北象山六巨石百萬夜景", city: "台北市", zone: "北部", img: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=600&auto=format&fit=crop", rate: "4.9★", duration: "2小時", temp: "23°C", desc: "攀登 20 分鐘步道即可零死角擁抱台北 101 高樓與璀璨萬家燈火的繁華夜景。", activityId: "2160-elephant-mountain-night-tour" },
  { id: 22, name: "東北角鼻頭角稜谷步道", city: "新北市", zone: "北部", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", rate: "4.8★", duration: "半日遊", temp: "21°C", desc: "有台版萬里長城美稱，行走在山巒稜線上，左右兩側皆為浩瀚蔚藍太平洋。", activityId: "2230-bitoujiao-cape-tour" },
  { id: 23, name: "玉山主峰台灣最高屋脊", city: "南投縣", zone: "中部", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop", rate: "5.0★", duration: "二日遊", temp: "8°C", desc: "海拔 3,952 米東北亞第一高峰，登頂眺望群山萬壑與雲海翻騰的壯闊台灣驕傲。", activityId: "3050-yushan-trekking-tour" },
  { id: 24, name: "宜蘭頭城烏石港衝浪浪點", city: "宜蘭縣", zone: "北部", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&auto=format&fit=crop", rate: "4.7★", duration: "半日遊", temp: "26°C", desc: "初學者浪人天堂，平緩細緻的黑沙灘搭配一對一專業教練，遠眺龜山島逐浪。", activityId: "3070-wushi-harbor-surfing" },
  { id: 25, name: "大甲鎮瀾宮媽祖遶境祈福", city: "台中市", zone: "中部", img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=600&auto=format&fit=crop", rate: "5.0★", duration: "一日遊", temp: "26°C", desc: "被譽為全球三大宗教盛事之一，萬人簇擁鑽轎底、傳統八家將與煙火陣頭震撼。", activityId: "3090-dajia-mazu-pilgrimage" },
  { id: 26, name: "小琉球與野生海龜共游", city: "屏東縣", zone: "南部", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop", rate: "4.9★", duration: "一日遊", temp: "28°C", desc: "台灣唯一不受東北季風影響珊瑚礁島，清澈見底的海水中與巨大綠蠵龜近距離共游。", activityId: "2950-xiaoliuqiu-snorkeling-turtle" },
  { id: 27, name: "台南安平古堡與赤崁樓", city: "台南市", zone: "南部", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop", rate: "4.7★", duration: "一日遊", temp: "28°C", desc: "四百年台灣歷史原點熱蘭遮城，紅磚古牆間品嚐安平蝦捲、豆花與溫體牛肉湯。", activityId: "2410-tainan-historic-sites-pass" },
  { id: 28, name: "花蓮清水斷崖獨木舟日出", city: "花蓮縣", zone: "東部", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", rate: "4.9★", duration: "半日遊", temp: "25°C", desc: "清晨划著獨木舟航行在深邃太平洋上，仰望高聳入雲的千公尺垂直斷崖迎曙光。", activityId: "3120-qingshui-cliff-kayak" },
  { id: 29, name: "台東池上伯朗大道金城武樹", city: "台東縣", zone: "東部", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&auto=format&fit=crop", rate: "4.8★", duration: "一日遊", temp: "25°C", desc: "廣闊無垠的翠綠金色稻浪，沒有任何一支電線桿的純淨天堂路，騎乘單車迎風前行。", activityId: "3140-chishang-biking-tour" },
  { id: 30, name: "新北歡樂耶誕城光雕魔幻", city: "新北市", zone: "北部", img: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop", rate: "4.9★", duration: "2小時", temp: "18°C", desc: "全台冬季最大盛事，市府大樓 3D 巨型光雕秀、夢幻天橋星空光廊與德國耶誕市集。", activityId: "3160-christmasland-tour" }
];

// 6. 萬家福線上特產伴手禮與營區直配資料 (OneLink E-Commerce)
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
