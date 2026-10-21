// 8 大旗艦深度主題資料庫 (完整 30 景點、1/2/3 日遊規劃)
const THEMES_COMPLETE_DATA = [
  {
    "id": "hualien",
    "icon": "🏞️",
    "shortTitle": "花東探索",
    "zhTitle": "花東探索",
    "enTitle": "HUALIEN & TAITUNG EXPLORER",
    "name": "花東縱谷與海岸",
    "bannerImg": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1600&auto=format&fit=crop",
    "title": "The Majestic East Coast · Where Pacific Meets Mountains",
    "subtitle": "縱谷的風、太平洋的浪，世界旅人的純淨避風港",
    "deckBg": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🚙",
        "title": "探險租車自駕",
        "desc": "花東台 9 線／台 11 線 SUV 自駕指南，花蓮取車台東還。"
      },
      {
        "icon": "🚣",
        "title": "晨曦太平洋立槳",
        "desc": "清水斷崖日出 SUP 泛舟挑戰，飽覽絕美漸層藍色海洋。"
      },
      {
        "icon": "🌿",
        "title": "東海岸原民巡禮",
        "desc": "石梯坪海蝕壺穴、都蘭部落慢活、三仙台第一道曙光。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E8%8A%B1%E8%93%AE%26aid%3D8133101",
      "tour": "https://www.klook.com/zh-TW/activity/765-taroko-gorge-day-tour-hualien/?aid=123436"
    },
    "itineraries": [
      {
        "planName": "1 日日出山海輕旅行",
        "days": [
          {
            "day": "全日行程",
            "text": "清水斷崖迎晨光 SUP ➔ 太魯閣砂卡礑步道 ➔ 洄瀾貨櫃星巴克 ➔ 東大門夜市。"
          }
        ]
      },
      {
        "planName": "2 日縱谷稻浪與溫泉",
        "days": [
          {
            "day": "Day 1",
            "text": "花蓮出發 ➔ 鯉魚潭環湖 ➔ 光復糖廠吃冰 ➔ 瑞穗溫泉飯店泡湯一泊二食。"
          },
          {
            "day": "Day 2",
            "text": "舞鶴台地品蜜香紅茶 ➔ 池上伯朗大道騎單車 ➔ 鐵花村慢市集。"
          }
        ]
      },
      {
        "planName": "3 日太平洋海線極限大壯遊",
        "days": [
          {
            "day": "Day 1",
            "text": "花蓮清水斷崖獨木舟 ➔ 牛山呼庭 ➔ 石梯坪海蝕壺穴（夜宿海景民宿）。"
          },
          {
            "day": "Day 2",
            "text": "秀姑巒溪激流泛舟 ➔ 三仙台跨海步橋 ➔ 都蘭部落手作體驗。"
          },
          {
            "day": "Day 3",
            "text": "台東森林公園琵琶湖 ➔ 加路蘭海岸裝置藝術 ➔ 多良車站遠眺太平洋。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "花蓮秀林・清水斷崖",
        "en": "清水斷崖",
        "tag": "花蓮秀林",
        "desc": "垂直絕壁直插太平洋，日出立槳 SUP 聖地。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮秀林・砂卡礑步道",
        "en": "砂卡礑步道",
        "tag": "花蓮秀林",
        "desc": "太魯閣清澈碧綠溪水與大理石皺褶岩層。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮秀林・長春祠",
        "en": "長春祠",
        "tag": "花蓮秀林",
        "desc": "湧泉飛瀑自唐式廟宇下方奔流而出。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮新城・七星潭風景區",
        "en": "七星潭風景區",
        "tag": "花蓮新城",
        "desc": "圓弧形礫石海灣，聽浪踏石的最佳去處。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮新城・原野牧場",
        "en": "原野牧場",
        "tag": "花蓮新城",
        "desc": "太平洋第一排海景羊奶咖啡館。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮市・松園別館",
        "en": "松園別館",
        "tag": "花蓮市",
        "desc": "日治時期軍事指揮所，高聳百年老松環繞。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮市・東大門國際觀光夜市",
        "en": "東大門國際觀光夜市",
        "tag": "花蓮市",
        "desc": "四大夜市整合，原民美食與強滾滾鑊氣。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮吉安・洄瀾貨櫃星巴克",
        "en": "洄瀾貨櫃星巴克",
        "tag": "花蓮吉安",
        "desc": "白色貨櫃交錯堆疊的代表性建築打卡點。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮吉安・慶修院",
        "en": "慶修院",
        "tag": "花蓮吉安",
        "desc": "台灣保存最完整的日式真言宗神社古蹟。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮壽豐・鯉魚潭水岸",
        "en": "鯉魚潭水岸",
        "tag": "花蓮壽豐",
        "desc": "踩天鵝船遊湖、品嚐現炸活跳蝦與湖畔步道。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮壽豐・山度空間",
        "en": "山度空間",
        "tag": "花蓮壽豐",
        "desc": "望向太平洋的透明泡泡鞦韆與海景露台。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮壽豐・海崖谷 Hayaku",
        "en": "海崖谷 Hayaku",
        "tag": "花蓮壽豐",
        "desc": "懸崖上的奢華野餐與海景露營咖啡。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮壽豐・雲山水夢幻湖",
        "en": "雲山水夢幻湖",
        "tag": "花蓮壽豐",
        "desc": "落羽松倒映在Tiffany藍夢幻湖面，如詩如畫。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮鳳林・林田山林業文化園區",
        "en": "林田山林業文化園區",
        "tag": "花蓮鳳林",
        "desc": "昔日「小摩天嶺」之稱的日式木構林場聚落。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮光復・花蓮觀光糖廠",
        "en": "花蓮觀光糖廠",
        "tag": "花蓮光復",
        "desc": "日式木造宿舍群、品嚐經典古早味糖廠冰棒。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮瑞穗・瑞穗溫泉園區",
        "en": "瑞穗溫泉園區",
        "tag": "花蓮瑞穗",
        "desc": "台灣唯一的富鐵「黃金生男之湯」名湯。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮瑞穗・秀姑巒溪泛舟中心",
        "en": "秀姑巒溪泛舟中心",
        "tag": "花蓮瑞穗",
        "desc": "激流穿梭峽谷，全台最刺激的泛舟起點。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮豐濱・石梯坪單面山",
        "en": "石梯坪單面山",
        "tag": "花蓮豐濱",
        "desc": "世界級火山岩海蝕平台，壺穴潮間帶生態豐富。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮豐濱・親不知子海上古道",
        "en": "親不知子海上古道",
        "tag": "花蓮豐濱",
        "desc": "懸掛於斷崖絕壁之上的玻璃天空步道。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東成功・三仙台八拱橋",
        "en": "三仙台八拱橋",
        "tag": "台東成功",
        "desc": "波浪狀紅色八拱跨海大橋，迎台灣本島第一道曙光。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東長濱・星龍花園",
        "en": "星龍花園",
        "tag": "台東長濱",
        "desc": "長濱制高點空中花園，俯瞰 180 度壯闊弧形海岸。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東東河・金尊漁港",
        "en": "金尊漁港",
        "tag": "台東東河",
        "desc": "台灣國際衝浪公開賽指定海灣，浪人必訪長浪點。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東東河・都蘭部落新東糖廠",
        "en": "都蘭部落新東糖廠",
        "tag": "台東東河",
        "desc": "漂流木藝術品、原民文化咖啡與音樂聚落。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東卑南・初鹿牧場",
        "en": "初鹿牧場",
        "tag": "台東卑南",
        "desc": "全台最大坡地牧場，品嚐香濃鮮奶霜淇淋。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東池上・伯朗大道天堂路",
        "en": "伯朗大道天堂路",
        "tag": "台東池上",
        "desc": "無電線桿的筆直翠綠/金黃稻浪，金城武樹下騎行。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東池上・大坡池風景區",
        "en": "大坡池風景區",
        "tag": "台東池上",
        "desc": "晨間迷霧倒映荷花池畔，平緩自行車道圍繞。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東鹿野・鹿野高台",
        "en": "鹿野高台",
        "tag": "台東鹿野",
        "desc": "台灣國際熱氣球嘉年華主場，俯瞰花東縱谷平原。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東市・鐵花新聚落（鐵花村）",
        "en": "鐵花新聚落（鐵花村）",
        "tag": "台東市",
        "desc": "彩繪熱氣球燈海、台東文創慢市集與音樂現場。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東市・台東森林公園（琵琶湖）",
        "en": "台東森林公園（琵琶湖）",
        "tag": "台東市",
        "desc": "防風黑森林深處的天然湧泉湖，水草清晰可見。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東太麻里・多良車站",
        "en": "多良車站",
        "tag": "台東太麻里",
        "desc": "鮮紅欄杆緊鄰湛藍太平洋，全台最美火車站景觀。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "northcoast",
    "icon": "🌊",
    "shortTitle": "北海岸角",
    "zhTitle": "北海岸角",
    "enTitle": "NORTH COAST PANORAMA",
    "name": "北海岸與東北角",
    "bannerImg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop",
    "title": "North Coast & Northeast Heritage",
    "subtitle": "山城紅燈籠 ‧ 奇岩怪石海岸 ‧ 太平洋極東角壯遊",
    "deckBg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🚗",
        "title": "經典黃金包車",
        "desc": "九份老街 ➔ 金瓜石十三層遺址 ➔ 陰陽海 ➔ 鼻頭角步道。"
      },
      {
        "icon": "🗿",
        "title": "地質奇觀巡禮",
        "desc": "野柳地質公園女王頭 ➔ 金山老街鴨肉 ➔ 石門洞海蝕拱門。"
      },
      {
        "icon": "📸",
        "title": "網美打卡秘境",
        "desc": "基隆正濱漁港彩色屋 ➔ 潮境公園飛天掃帚 ➔ 象鼻岩海景。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E4%B9%9D%E4%BB%BD%26aid%3D8133101",
      "tour": "https://www.klook.com/zh-TW/activity/1301-jiufen-shifen-yehhliu-day-tour-taipei/?aid=123436"
    },
    "itineraries": [
      {
        "planName": "1 日經典地質與山城",
        "days": [
          {
            "day": "全日行程",
            "text": "野柳地質公園 ➔ 金山老街鴨肉 ➔ 九份老街阿妹茶樓 ➔ 基隆正濱漁港彩色屋。"
          }
        ]
      },
      {
        "planName": "2 日溫泉海蝕慢活遊",
        "days": [
          {
            "day": "Day 1",
            "text": "三芝淺水灣海景咖啡 ➔ 富貴角燈塔 ➔ 石門洞 ➔ 金山溫泉酒店泡湯住宿。"
          },
          {
            "day": "Day 2",
            "text": "金瓜石陰陽海 ➔ 十三層遺址 ➔ 鼻頭角步道 ➔ 廟口夜市美食收尾。"
          }
        ]
      },
      {
        "planName": "3 日極東壯遊與鐵道秘境",
        "days": [
          {
            "day": "Day 1",
            "text": "淡水八里水岸 ➔ 淺水灣 ➔ 白沙灣 ➔ 老梅綠石槽（夜宿北海岸海景旅宿）。"
          },
          {
            "day": "Day 2",
            "text": "野柳 ➔ 萬里龜吼漁港萬里蟹 ➔ 基隆和平島地質公園 ➔ 八斗子望海車站。"
          },
          {
            "day": "Day 3",
            "text": "深澳鐵道自行車 ➔ 象鼻岩 ➔ 潮境公園 ➔ 三貂角燈塔（台灣極東點）。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "新北萬里・野柳地質公園",
        "en": "野柳地質公園",
        "tag": "新北萬里",
        "desc": "世界級蕈狀岩女王頭與仙女鞋奇岩。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北萬里・龜吼漁港",
        "en": "龜吼漁港",
        "tag": "新北萬里",
        "desc": "秋季品嚐現撈清蒸萬里蟹與生猛海鮮名港。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北金山・金包里老街",
        "en": "金包里老街",
        "tag": "新北金山",
        "desc": "廣安宮前自己端盤子的金山廟口鴨肉與芋圓。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北金山・朱銘美術館",
        "en": "朱銘美術館",
        "tag": "新北金山",
        "desc": "坐落山海間的戶外藝術園區，太極系列雕塑磅礡震撼。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北金山・水尾漁港神秘海岸",
        "en": "水尾漁港神秘海岸",
        "tag": "新北金山",
        "desc": "穿越一線天海蝕洞，通往燭臺雙嶼的海濱秘境。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北金山・磺港溫泉公共浴室",
        "en": "磺港溫泉公共浴室",
        "tag": "新北金山",
        "desc": "免費享受金褐色天然鐵泉黃金足湯。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北石門・白沙灣水上遊憩區",
        "en": "白沙灣水上遊憩區",
        "tag": "新北石門",
        "desc": "綿延一公里的細緻貝殼白沙，夏日戲水天堂。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北石門・老梅綠石槽",
        "en": "老梅綠石槽",
        "tag": "新北石門",
        "desc": "春季限定（3-5月）大片翠綠海藻覆蓋火山礁岩。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北石門・富貴角燈塔",
        "en": "富貴角燈塔",
        "tag": "新北石門",
        "desc": "台灣本島最北端黑白相間八角形燈塔。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北石門・石門洞",
        "en": "石門洞",
        "tag": "新北石門",
        "desc": "海蝕拱門奇觀，潮間帶拾貝與夕陽剪影熱點。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北三芝・淺水灣海景咖啡街",
        "en": "淺水灣海景咖啡街",
        "tag": "新北三芝",
        "desc": "一整排棕櫚樹峇里島風情露天咖啡館。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北三芝・芝蘭公園海上觀景平台",
        "en": "芝蘭公園海上觀景平台",
        "tag": "新北三芝",
        "desc": "伸入蔚藍海洋的 57 公尺水藍色波浪長廊。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・九份老街（基山街）",
        "en": "九份老街（基山街）",
        "tag": "新北瑞芳",
        "desc": "穿梭大紅燈籠梯道、品嚐阿柑姨芋圓與草仔粿。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・阿妹茶樓",
        "en": "阿妹茶樓",
        "tag": "新北瑞芳",
        "desc": "宮崎駿動畫靈感傳奇茶樓，品茶遠眺山海夜景。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・金瓜石黃金博物館",
        "en": "金瓜石黃金博物館",
        "tag": "新北瑞芳",
        "desc": "觸摸 220 公斤純金磚、深入本山五坑坑道體驗。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・水湳洞陰陽海",
        "en": "水湳洞陰陽海",
        "tag": "新北瑞芳",
        "desc": "金黃礦水注入蔚藍大海形成的雙色漸層海灣。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・十三層遺址",
        "en": "十三層遺址",
        "tag": "新北瑞芳",
        "desc": "昔日選煉廠遺址，夜間點燈宛如「天空之城龐貝」。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・黃金瀑布",
        "en": "黃金瀑布",
        "tag": "新北瑞芳",
        "desc": "酸性金屬礦質造就金橘色岩壁的奔騰水幕。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・鼻頭角稜谷步道",
        "en": "鼻頭角稜谷步道",
        "tag": "新北瑞芳",
        "desc": "台版海邊萬里長城，360 度俯瞰太平洋浪花。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・深澳鐵道自行車 Rail Bike",
        "en": "深澳鐵道自行車 Rail Bike",
        "tag": "新北瑞芳",
        "desc": "沿著海岸線騎乘可愛河豚自行車穿梭螢光光雕隧道。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・深澳岬角（酋長岩）",
        "en": "深澳岬角（酋長岩）",
        "tag": "新北瑞芳",
        "desc": "大自然鬼斧神工雕琢的原住民酋長側面巨石。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北貢寮・三貂角燈塔",
        "en": "三貂角燈塔",
        "tag": "新北貢寮",
        "desc": "台灣極東第一道曙光照耀處，希臘純白浪漫地標。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北貢寮・福隆海水浴場",
        "en": "福隆海水浴場",
        "tag": "新北貢寮",
        "desc": "金色細沙沙灘，每年夏季舉辦國際沙雕藝術節。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北貢寮・舊草嶺隧道自行車道",
        "en": "舊草嶺隧道自行車道",
        "tag": "新北貢寮",
        "desc": "穿越百年紅磚鐵道隧道，出隧道豁然開朗見龜山島。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北貢寮・龍洞灣岬步道",
        "en": "龍洞灣岬步道",
        "tag": "新北貢寮",
        "desc": "串聯斷崖海灣，是攀岩愛好者與浮潛聖地。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆中正・正濱漁港彩色屋",
        "en": "正濱漁港彩色屋",
        "tag": "基隆中正",
        "desc": "十六棟繽紛水岸彩繪建築，台版威尼斯打卡點。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆中正・和平島地質公園",
        "en": "和平島地質公園",
        "tag": "基隆中正",
        "desc": "千萬年豆腐岩與蕈狀石，純天然無污染海泳池。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆中正・潮境公園",
        "en": "潮境公園",
        "tag": "基隆中正",
        "desc": "飛天掃帚裝置藝術與鸚鵡螺溜滑梯，遠眺九份山城。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆中正・八斗子望海車站",
        "en": "八斗子望海車站",
        "tag": "基隆中正",
        "desc": "號稱「北台灣多良」，月台走下階梯就是蔚藍大海。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆中正・基隆嶼登島繞島",
        "en": "基隆嶼登島繞島",
        "tag": "基隆中正",
        "desc": "搭乘遊艇出海登島，挑戰直攻黑水溝燈塔。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "islands",
    "icon": "🏝️",
    "shortTitle": "離島跳島",
    "zhTitle": "離島跳島",
    "enTitle": "ISLANDS OF TAIWAN",
    "name": "離島跳島秘境",
    "bannerImg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop",
    "title": "Pacific Jewels · Islands of Taiwan",
    "subtitle": "七美雙心石滬 ‧ 綠島海底溫泉日出 ‧ 小琉球野生海龜共游",
    "deckBg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🚢",
        "title": "船票快速出票",
        "desc": "嘉義布袋-澎湖、台東富岡-綠島蘭嶼、屏東東港-小琉球。"
      },
      {
        "icon": "✈️",
        "title": "跳島國內機票",
        "desc": "松山/台中/高雄直飛澎湖、金門、馬祖，即時票價查詢。"
      },
      {
        "icon": "🐢",
        "title": "野生海龜共游",
        "desc": "小琉球透明獨木舟與浮潛，遇見野生海龜機率高達 99%。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/activity/1328-penghu-ferry-ticket/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E6%BE%8E%E6%B9%96%26aid%3D8133101",
      "tour": "https://www.klook.com/zh-TW/activity/1328-penghu-ferry-ticket/?aid=123436"
    },
    "itineraries": [
      {
        "planName": "1 日小琉球海龜浮潛一日快閃",
        "days": [
          {
            "day": "全日行程",
            "text": "東港搭船 ➔ 租機車環島 ➔ 花瓶岩與綠蠵龜共游 ➔ 烏鬼洞 ➔ 搭傍晚船班返程。"
          }
        ]
      },
      {
        "planName": "2 日綠島海景溫泉極限漫遊",
        "days": [
          {
            "day": "Day 1",
            "text": "富岡漁港搭船 ➔ 石朗潛水體驗 ➔ 牛頭山夕陽 ➔ 朝日溫泉夜間聽濤泡湯。"
          },
          {
            "day": "Day 2",
            "text": "大白沙海景步道 ➔ 帆船鼻大草原 ➔ 綠島燈塔 ➔ 綠島免稅店搭船。"
          }
        ]
      },
      {
        "planName": "3 日澎湖本島＋七美經典跳島遊",
        "days": [
          {
            "day": "Day 1",
            "text": "馬公機場/港口 ➔ 跨海大橋 ➔ 二崁古厝聚落 ➔ 奎壁山摩西分海。"
          },
          {
            "day": "Day 2",
            "text": "搭遊艇前往七美島 ➔ 雙心石滬 ➔ 小台灣 ➔ 望安綠蠵龜保育館。"
          },
          {
            "day": "Day 3",
            "text": "隘門沙灘水上活動八合一 ➔ 中央老街買黑糖糕 ➔ 篤行十村文創園區。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "澎湖西嶼・二崁聚落保存區",
        "en": "二崁聚落保存區",
        "tag": "澎湖西嶼",
        "desc": "完整閩南咕咾石老宅群，品嚐杏仁茶與海膽生煎包。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖湖西・奎壁山摩西分海",
        "en": "奎壁山摩西分海",
        "tag": "澎湖湖西",
        "desc": "退潮時海水向兩側退去，浮現鵝卵石步道通往赤嶼。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖白沙・澎湖跨海大橋",
        "en": "澎湖跨海大橋",
        "tag": "澎湖白沙",
        "desc": "橫跨吼門水道的壯闊拱門橋樑，澎湖地標象徵。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖七美・雙心石滬",
        "en": "雙心石滬",
        "tag": "澎湖七美",
        "desc": "以玄武岩疊砌的心形捕魚石滬，蔚藍海面上的永恆浪漫。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖馬公・山水沙灘",
        "en": "山水沙灘",
        "tag": "澎湖馬公",
        "desc": "金色細沙與翠綠仙人掌群，衝浪與戲水聖地。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖馬公・篤行十村眷村文創區",
        "en": "篤行十村眷村文創區",
        "tag": "澎湖馬公",
        "desc": "全台最古老眷村，潘安邦與張雨生故居。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖西嶼・風櫃洞聽濤",
        "en": "風櫃洞聽濤",
        "tag": "澎湖西嶼",
        "desc": "海水灌入玄武岩海蝕洞發出的呼嘯風箱巨響。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖西嶼・大菓葉玄武岩柱",
        "en": "大菓葉玄武岩柱",
        "tag": "澎湖西嶼",
        "desc": "雨後窪地倒映整片整齊宏偉的土黃色柱狀玄武岩。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖西嶼・漁翁島燈塔",
        "en": "漁翁島燈塔",
        "tag": "澎湖西嶼",
        "desc": "台灣最古老的現代化燈塔，賞夕陽絕佳斷崖高地。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖湖西・隘門沙灘",
        "en": "隘門沙灘",
        "tag": "澎湖湖西",
        "desc": "綿延珊瑚碎屑沙灘，透明獨木舟與水上摩托車基地。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東綠島・朝日溫泉",
        "en": "朝日溫泉",
        "tag": "台東綠島",
        "desc": "世界罕見的三大海水溫泉之一，露天潮間帶泡湯看日出。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東綠島・石朗潛水區",
        "en": "石朗潛水區",
        "tag": "台東綠島",
        "desc": "海底郵筒寄明信片，世界級海底花園與小丑魚共游。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東綠島・大白沙浮潛區",
        "en": "大白沙浮潛區",
        "tag": "台東綠島",
        "desc": "延伸入深藍大海的白色水泥木棧步道，退潮宛如天梯。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東綠島・綠島燈塔",
        "en": "綠島燈塔",
        "tag": "台東綠島",
        "desc": "純白塔身配上綠島烏油油火山岩，春季遍地盛開野百合。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東綠島・帆船鼻大草原",
        "en": "帆船鼻大草原",
        "tag": "台東綠島",
        "desc": "平坦如茵的高台草原，夜晚觀賞銀河星空最佳坐標。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東綠島・牛頭山草原",
        "en": "牛頭山草原",
        "tag": "台東綠島",
        "desc": "山形宛如老牛伏臥海中，俯瞰 360 度海天無際日落。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東蘭嶼・東清秘境",
        "en": "東清秘境",
        "tag": "台東蘭嶼",
        "desc": "天然海水形成的綠寶石潟湖海蝕洞，跳水浮潛秘境。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東蘭嶼・東清灣日出拼板舟",
        "en": "東清灣日出拼板舟",
        "tag": "台東蘭嶼",
        "desc": "傳統紅白黑紋飾達悟族拼板舟並列海灘迎晨曦。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東蘭嶼・野銀地下屋聚落",
        "en": "野銀地下屋聚落",
        "tag": "台東蘭嶼",
        "desc": "達悟族順應島嶼強風氣候建造的傳統半地下家屋。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東蘭嶼・氣象觀測站",
        "en": "氣象觀測站",
        "tag": "台東蘭嶼",
        "desc": "蘭嶼全島制高點，遠眺東西兩側完全不同的藍海風貌。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東小琉球・花瓶岩",
        "en": "花瓶岩",
        "tag": "屏東小琉球",
        "desc": "珊瑚礁海岸地標，清晨黃昏常有綠蠵龜在周邊啃食海草。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東小琉球・美人洞風景區",
        "en": "美人洞風景區",
        "tag": "屏東小琉球",
        "desc": "曲折迷離的珊瑚礁洞穴步道，沿途多處天然觀海亭。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東小琉球・烏鬼洞",
        "en": "烏鬼洞",
        "tag": "屏東小琉球",
        "desc": "天然石灰岩迷宮地貌，傳說色彩濃厚的臨海步道。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東小琉球・山豬溝生態步道",
        "en": "山豬溝生態步道",
        "tag": "屏東小琉球",
        "desc": "被巨大雀榕氣根與蕨類植物包圍的侏儸紀綠色隧道。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東小琉球・落日亭",
        "en": "落日亭",
        "tag": "屏東小琉球",
        "desc": "全島最美落日觀景台，眼前是完全無遮蔽的台灣海峽夕陽。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "金門金城・得月樓水頭聚落",
        "en": "得月樓水頭聚落",
        "tag": "金門金城",
        "desc": "華麗精緻的僑鄉洋樓建築與防禦銃樓。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "金門金湖・陳景蘭洋樓",
        "en": "陳景蘭洋樓",
        "tag": "金門金湖",
        "desc": "金門規模最大純白雙層西洋拱門洋樓，正對料羅灣海景。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "金門金寧・北山播音牆",
        "en": "北山播音牆",
        "tag": "金門金寧",
        "desc": "四十餘只巨型擴音喇叭矗立的冷戰歷史聲音地標。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "馬祖北竿・芹壁聚落",
        "en": "芹壁聚落",
        "tag": "馬祖北竿",
        "desc": "依山傍海花崗石壓瓦石屋，號稱「馬祖地中海」。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "馬祖南竿・八八坑道",
        "en": "八八坑道",
        "tag": "馬祖南竿",
        "desc": "長年恆溫的高粱酒窖，坑口兩側陶甕排列，空氣中飄散酒香。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "baseball",
    "icon": "⚾",
    "shortTitle": "棒球賽事",
    "zhTitle": "運動賽事",
    "enTitle": "CPBL & SPORTS BARS",
    "name": "運動賽事與大巨蛋",
    "bannerImg": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=1600&auto=format&fit=crop",
    "title": "CPBL Baseball & Sports Arena",
    "subtitle": "走進台灣棒球應援狂潮 ‧ 啦啦隊熱區跳舞 ‧ 大巨蛋舒適觀賽",
    "deckBg": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🏟️",
        "title": "台北大巨蛋專區",
        "desc": "4 萬人全室內冷氣空調，捷運直通，全台規格最高球場。"
      },
      {
        "icon": "💃",
        "title": "女孩應援熱區",
        "desc": "應援曲齊唱、啦啦隊熱區熱舞，體驗風靡全球的台式棒球激情。"
      },
      {
        "icon": "🚐",
        "title": "外縣市看球專車",
        "desc": "台中洲際、新莊、桃園、澄清湖球場接駁直達。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E5%A4%A7%E5%B7%A8%E8%9B%8B%26aid%3D8133101",
      "tour": "https://www.klook.com/zh-TW/activity/1659-taipei-101-observatory-ticket-taipei/?aid=123436"
    },
    "itineraries": [
      {
        "planName": "1 日大巨蛋狂歡看球日",
        "days": [
          {
            "day": "全日行程",
            "text": "國父紀念館站取票 ➔ 大巨蛋地下美食街 ➔ 熱區啦啦隊應援賽事 ➔ 賽後信義區運動酒吧暢飲。"
          }
        ]
      },
      {
        "planName": "2 日北台灣雙主場熱血遊",
        "days": [
          {
            "day": "Day 1",
            "text": "台北大巨蛋室內賽事 ➔ 賽後居酒屋吃串燒喝生啤 ➔ 入住松山文創商圈飯店。"
          },
          {
            "day": "Day 2",
            "text": "新莊棒球場富邦悍將主場觀戰 ➔ 感受戶外球場熱血吶喊 ➔ 新莊夜市外帶宵夜。"
          }
        ]
      },
      {
        "planName": "3 日中南部主場朝聖大連線",
        "days": [
          {
            "day": "Day 1",
            "text": "搭高鐵直達台中洲際棒球場 ➔ 中信兄弟應援趴 ➔ 逢甲夜市吃炸雞。"
          },
          {
            "day": "Day 2",
            "text": "前進台南市立棒球場 ➔ 感受歷史最悠久的統一獅傳統應援 ➔ 賽後喝文章牛肉湯。"
          },
          {
            "day": "Day 3",
            "text": "高雄澄清湖球場或職棒周邊巡禮 ➔ 高雄港運動餐酒館聚餐返程。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "台北信義・台北大巨蛋 (Taipei Dome)",
        "en": "台北大巨蛋 (Taipei Dome)",
        "tag": "台北信義",
        "desc": "全天候冷氣室內球場，容納四萬人，中職焦點大賽主場。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北士林・天母棒球場",
        "en": "天母棒球場",
        "tag": "台北士林",
        "desc": "味全龍主場，鄰近天母異國商圈，戶外人工草皮視野開闊。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北新莊・新莊棒球場",
        "en": "新莊棒球場",
        "tag": "新北新莊",
        "desc": "富邦悍將主場，斥資升級之環形 LED 屏幕與熱血悍將應援台。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "桃園中壢・樂天桃園棒球場",
        "en": "樂天桃園棒球場",
        "tag": "桃園中壢",
        "desc": "樂天桃猿主場，引進全猿主場應援、環狀美食街與飛天跑車秀。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中北屯・台中洲際棒球場",
        "en": "台中洲際棒球場",
        "tag": "台中北屯",
        "desc": "中信兄弟主場，紅線棒球縫線拱門造型地標與棒球故事館。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南南區・台南市立棒球場",
        "en": "台南市立棒球場",
        "tag": "台南南區",
        "desc": "統一獅本色大本營，全台歷史最悠久的職棒常設球場。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄鳥松・澄清湖棒球場",
        "en": "澄清湖棒球場",
        "tag": "高雄鳥松",
        "desc": "台鋼雄鷹主場，湖畔天然草皮大球場，視野開闊。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北松山・Copper Spoon 銅勺美式運動餐廳",
        "en": "Copper Spoon 銅勺美式運動餐廳",
        "tag": "台北松山",
        "desc": "大巨蛋旁超大投影螢幕，供應生啤、漢堡與水牛城辣雞翅。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北大安・THE KEY COMPANY 運動美式酒吧",
        "en": "THE KEY COMPANY 運動美式酒吧",
        "tag": "台北大安",
        "desc": "東區轉播各大職棒賽事、經典美式拼盤與精釀啤酒。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北大安・Brass Monkey 銅猴子",
        "en": "Brass Monkey 銅猴子",
        "tag": "台北大安",
        "desc": "台北老牌外國人最愛運動酒吧，棒球賽期間全場外籍球迷狂歡。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北信義・Hooters 運動餐廳（信義店）",
        "en": "Hooters 運動餐廳（信義店）",
        "tag": "台北信義",
        "desc": "正對台北 101 高空夜景，招牌辣妹呼拉圈秀與現烤雞翅。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北信義・Dan Ryan's Chicago Grill",
        "en": "Dan Ryan's Chicago Grill",
        "tag": "台北信義",
        "desc": "道地芝加哥大份量碳烤豬肋排與棒球直播大螢幕。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北中山・Maybe A Bar 運動主題餐酒",
        "en": "Maybe A Bar 運動主題餐酒",
        "tag": "台北中山",
        "desc": "提供多螢幕賽事零死角轉播與特調棒球雞尾酒。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北板橋・G+9 鮮啤頂級生啤運動吧",
        "en": "G+9 鮮啤頂級生啤運動吧",
        "tag": "新北板橋",
        "desc": "二十多款台灣在地新鮮鮮榨生啤酒，觀賽氣氛熱絡。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "桃園中壢・B-side 啤酒與運動空間",
        "en": "B-side 啤酒與運動空間",
        "tag": "桃園中壢",
        "desc": "球賽當日滿座，提供各國精釀黑啤與炸魚薯條。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中西區・路德威手工啤酒餐廳",
        "en": "路德威手工啤酒餐廳",
        "tag": "台中西區",
        "desc": "大庭院露天投影幕看球賽，黑麥德式手工啤酒。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中西區・7分SO 美式廚房",
        "en": "7分SO 美式廚房",
        "tag": "台中西區",
        "desc": "道地美式早午餐與球賽轉播，濃郁牛肉起司堡。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中西屯・打烊前 運動餐酒館",
        "en": "打烊前 運動餐酒館",
        "tag": "台中西屯",
        "desc": "近逢甲商圈，大份量炸物拼盤與球員簽名紀念牆。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南中西・The Han声 運動音樂餐酒館",
        "en": "The Han声 運動音樂餐酒館",
        "tag": "台南中西",
        "desc": "多視角轉播大螢幕、調酒選擇豐富，賽後常有球迷聚會。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南中西・Willy's Sport Saloon",
        "en": "Willy's Sport Saloon",
        "tag": "台南中西",
        "desc": "外籍旅客與本土棒球迷聚集地，正宗墨西哥烤脆片。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄左營・Bottoms Up Saloon",
        "en": "Bottoms Up Saloon",
        "tag": "高雄左營",
        "desc": "巨幅投影轉播職棒大賽，提供生啤酒柱與飛鏢機。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄新興・燈塔美式酒館 The Lighthouse",
        "en": "燈塔美式酒館 The Lighthouse",
        "tag": "高雄新興",
        "desc": "高雄最受歡迎的運動酒吧之一，各國生啤與披薩俱佳。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義西區・嘉義市立棒球場",
        "en": "嘉義市立棒球場",
        "tag": "嘉義西區",
        "desc": "KANO 嘉農棒球發源地，球場前矗立巨大「威震甲子園」青銅雕像。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮市・花蓮縣立德興棒球場",
        "en": "花蓮縣立德興棒球場",
        "tag": "花蓮市",
        "desc": "每年中職花蓮後山巡迴戰，背倚中央山脈壯麗山景。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東市・台東棒球村",
        "en": "台東棒球村",
        "tag": "台東市",
        "desc": "孕育台灣無數職棒重砲原鄉球場，太平洋風迎面吹拂。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北士林・紅九 棒球打擊練習場",
        "en": "紅九 棒球打擊練習場",
        "tag": "台北士林",
        "desc": "看球熱血後親自下場揮棒，測速投球機與打擊球道。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北大莊・大魯閣打擊練習場（新莊館）",
        "en": "大魯閣打擊練習場（新莊館）",
        "tag": "新北大莊",
        "desc": "配備投球機、棒球九宮格與打擊測速模擬器。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中北屯・大魯閣棒壘球打擊場（中科館）",
        "en": "大魯閣棒壘球打擊場（中科館）",
        "tag": "台中北屯",
        "desc": "夜間明亮球道，適合三五好友看球前後實戰練習。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北信義・掌門精釀啤酒（微風松高店）",
        "en": "掌門精釀啤酒（微風松高店）",
        "tag": "台北信義",
        "desc": "露天露台欣賞信義夜景，點一杯自釀台啤看電視球賽。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北中正・KANO 棒球故事文創展示區",
        "en": "KANO 棒球故事文創展示區",
        "tag": "台北中正",
        "desc": "重現 1931 年嘉農進軍甲子園歷史照片與復古球衣展示。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "camping",
    "icon": "⛺",
    "shortTitle": "秘境露營",
    "zhTitle": "秘境露營",
    "enTitle": "CAMPING & GLAMPING",
    "name": "秘境露營野炊",
    "bannerImg": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop",
    "title": "Glamping & Wild Forest Escapes",
    "subtitle": "免裝備奢華星空帳 ‧ 阿里山雲海日出 ‧ 和牛海鮮直配營位",
    "deckBg": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🥩",
        "title": "食材箱一鍵直配",
        "desc": "頂級和牛海鮮食材箱直送營區前台，免洗免切輕鬆野炊。"
      },
      {
        "icon": "⛺",
        "title": "免搭帳 Glamping",
        "desc": "透明球型帳、美式露營車，冷暖氣獨立衛浴，拎包即住。"
      },
      {
        "icon": "🚐",
        "title": "露營裝備包車接送",
        "desc": "大空間專車接送往返山區營地，免去山路開車負擔。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E5%8D%97%E6%8A%95%E9%9C%B2%E7%87%9F%26aid%3D8133101",
      "tour": "https://aftck.com/track/clicks/1489/c627c2bc980522defc82ec23d62e9d47266c4cdf2aabebf50368bb13234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1"
    },
    "itineraries": [
      {
        "planName": "1 日免裝備奢華輕露營",
        "days": [
          {
            "day": "全日行程",
            "text": "午後抵達營區 ➔ 享用下午茶野餐 ➔ 夜間專人生火海陸 BBQ ➔ 仰望滿天星斗入睡。"
          }
        ]
      },
      {
        "planName": "2 日雲海森林森呼吸之旅",
        "days": [
          {
            "day": "Day 1",
            "text": "苗栗泰安採草莓 ➔ 抵達高海拔營區 ➔ 欣賞翻騰雲瀑 ➔ 營火圍爐烤棉花糖。"
          },
          {
            "day": "Day 2",
            "text": "晨光手沖咖啡 ➔ 漫步山林步道吸收芬多精 ➔ 下山泡泰安溫泉返程。"
          }
        ]
      },
      {
        "planName": "3 日阿里山與日月潭山湖雙拼露營",
        "days": [
          {
            "day": "Day 1",
            "text": "南投魚池峇嵐杉丘星空帳 ➔ 日月潭划獨木舟 ➔ 湖畔營地一泊三食。"
          },
          {
            "day": "Day 2",
            "text": "驅車前往阿里山高海拔營地 ➔ 穿越迷糊步道竹林 ➔ 營火野炊欣賞壯闊晚霞。"
          },
          {
            "day": "Day 3",
            "text": "早起觀賞祝山晨曦 ➔ 奮起湖老街吃鐵路便當 ➔ 滿載山林能量賦歸。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "南投魚池・峇嵐杉丘 BALAN HILL",
        "en": "峇嵐杉丘 BALAN HILL",
        "tag": "南投魚池",
        "desc": "日月潭旁奢華馬車帳與星空透明帳，附獨立衛浴與冷暖空調。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗卓蘭・自然圈農場 Lofas Farm",
        "en": "自然圈農場 Lofas Farm",
        "tag": "苗栗卓蘭",
        "desc": "獨立野奢包圈，每圈自帶天然碳酸氫鈉熱湯風呂與食農採集。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗卓蘭・橘祥豐收 Glamping",
        "en": "橘祥豐收 Glamping",
        "tag": "苗栗卓蘭",
        "desc": "柑橘果園環抱，免搭帳神殿帳篷，專人準備豐盛海陸 BBQ。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・那一村 Nayi Villa",
        "en": "那一村 Nayi Villa",
        "tag": "宜蘭礁溪",
        "desc": "坐落山谷溪畔奢華狩獵帳，帳內自帶洗手間，可在溪畔划船釣魚。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗大湖・山美學 Kids Village",
        "en": "山美學 Kids Village",
        "tag": "苗栗大湖",
        "desc": "免裝備懶人首選，享受湖畔大草皮、營火野炊與繁星晚宴。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "桃園楊梅・朋趣 Bon Chill",
        "en": "朋趣 Bon Chill",
        "tag": "桃園楊梅",
        "desc": "天成飯店集團操刀奢華露營車，結合高爾夫球場綠地與泳池調酒。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投竹山・山思雲想 Camping",
        "en": "山思雲想 Camping",
        "tag": "南投竹山",
        "desc": "海拔千公尺雲海環繞，提供職人竹編手作體驗與森林瑜珈。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "新竹五峰・愛上喜翁",
        "en": "愛上喜翁",
        "tag": "新竹五峰",
        "desc": "海拔 1180 公尺坐看雲瀑翻騰，提供原民獵人射箭文化與松露烤雞盛宴。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新竹五峰・蟬說",
        "en": "蟬說",
        "tag": "新竹五峰",
        "desc": "霧繞：泰雅部落秘境露營，櫻花季粉紅花海包圍，融入泰雅編織文化體驗。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中太平・蟬說",
        "en": "蟬說",
        "tag": "台中太平",
        "desc": "山中靜靜：酒桶山腰梯田景觀，俯瞰台中市區晚霞，附贈日落下午茶與 Buffet。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮壽豐・遠雄悅來 海景露營車",
        "en": "遠雄悅來 海景露營車",
        "tag": "花蓮壽豐",
        "desc": "太平洋第一排露營車，眺望蔚藍海景日出，共享星級飯店泳池。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・礁溪老爺得天露營車",
        "en": "礁溪老爺得天露營車",
        "tag": "宜蘭礁溪",
        "desc": "結合五星級酒店野天溫泉設施，專屬管家於營位前炭烤晚餐。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北士林・陽明山菁山露營區",
        "en": "陽明山菁山露營區",
        "tag": "台北士林",
        "desc": "陽明山國家公園綠蔭圍繞，提供天然白磺泉湯屋與林間木屋營位。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆暖暖・拉波波村 LAPOPO",
        "en": "拉波波村 LAPOPO",
        "tag": "基隆暖暖",
        "desc": "緊鄰暖東峽谷溪流步道，帳內冷暖空調，峽谷生態極為豐富。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮壽豐・海崖谷 Hayaku Glamping",
        "en": "海崖谷 Hayaku Glamping",
        "tag": "花蓮壽豐",
        "desc": "太平洋斷崖海景帳篷，日式極簡裝置拍照打卡，夜晚聽濤入眠。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投魚池・入樹。村",
        "en": "入樹。村",
        "tag": "南投魚池",
        "desc": "森林系星空電影院、原民火烤乳豬晚宴與大草皮羽球同樂。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗泰安・漫步在雲端露營區",
        "en": "漫步在雲端露營區",
        "tag": "苗栗泰安",
        "desc": "坐落泰安溫泉區上方，秋冬雲海覆蓋如仙境，夜晚銀河清晰可見。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・候鳥羽峰露營所",
        "en": "候鳥羽峰露營所",
        "tag": "宜蘭礁溪",
        "desc": "水鳥保護區旁魚塭濕地湖景帳篷，晨光水面倒影如鏡，環境靜謐。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義阿里山・迷糊步道露營區",
        "en": "迷糊步道露營區",
        "tag": "嘉義阿里山",
        "desc": "高海拔竹林環抱，清晨聆聽鳥語蟲鳴，夏季清涼避暑勝地。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "新竹尖石・相思園景觀露營區",
        "en": "相思園景觀露營區",
        "tag": "新竹尖石",
        "desc": "眺望新竹夜景制高點，前無遮蔽俯瞰關西竹東萬家燈火。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "新竹尖石・司馬庫斯部落營地",
        "en": "司馬庫斯部落營地",
        "tag": "新竹尖石",
        "desc": "上帝的部落深處，夜晚仰望完全無光害的璀璨高山銀河。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗三義・綠舟森林露營區",
        "en": "綠舟森林露營區",
        "tag": "苗栗三義",
        "desc": "鄰近勝興車站，油桐花季雪白落花鋪滿營位，環境浪漫。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中和平・武陵農場露營區",
        "en": "武陵農場露營區",
        "tag": "台中和平",
        "desc": "高海拔雪山群峰環繞，四季花海盛開，秋賞楓紅春賞櫻。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中和平・福壽山農場營地",
        "en": "福壽山農場營地",
        "tag": "台中和平",
        "desc": "台灣海拔最高的露營區（2574m），湖畔木棧板與高山星空。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投仁愛・清境卡爾小鎮",
        "en": "清境卡爾小鎮",
        "tag": "南投仁愛",
        "desc": "合歡山腳下的觀星露營車，坐擁無光害暗空公園星光。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東卑南・初鹿森活露營區",
        "en": "初鹿森活露營區",
        "tag": "台東卑南",
        "desc": "鄰近初鹿牧場，大片平緩綠草皮，適合親子野放風箏與奔跑。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東滿州・日日旅海露營車",
        "en": "日日旅海露營車",
        "tag": "屏東滿州",
        "desc": "滿州鄉太平洋岸純白露營車，開窗即是湛藍海浪與大片綠草。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭南澳・那山那谷露營區",
        "en": "那山那谷露營區",
        "tag": "宜蘭南澳",
        "desc": "南澳南溪旁大草原，提供天然溪流漂漂河活動與野溪探險。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東琉球・八街海景露營車",
        "en": "八街海景露營車",
        "tag": "屏東琉球",
        "desc": "步行至海邊即可浮潛看綠蠵龜，在露營車頂甲板吹溫暖海風。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "澎湖白沙・澎湖海邊露營地",
        "en": "澎湖海邊露營地",
        "tag": "澎湖白沙",
        "desc": "澎湖本島臨海沙灘營地，夜晚退潮時體驗潮間帶抱墩抓螃蟹。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "hotspring",
    "icon": "♨️",
    "shortTitle": "名湯溫泉",
    "zhTitle": "名湯溫泉",
    "enTitle": "TAIWAN HOT SPRING MAP",
    "name": "名湯溫泉地圖",
    "bannerImg": "https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&auto=format&fit=crop",
    "title": "Taiwan Hot Springs Sanctuary",
    "subtitle": "北投白磺牛奶泉 ‧ 礁溪碳酸氫鈉美人湯 ‧ 烏來溪谷秘境湯屋",
    "deckBg": "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "♨️",
        "title": "頂級湯屋優惠券",
        "desc": "北投加賀屋、麗禧、礁溪老爺溫泉票券線上即享特惠。"
      },
      {
        "icon": "🏨",
        "title": "一泊二食早鳥比價",
        "desc": "Booking / Trip 溫泉度假飯店即時空房查詢與會席料理。"
      },
      {
        "icon": "🚐",
        "title": "山區溫泉包車直達",
        "desc": "陽明山、烏來、苗栗泰安山區專車接駁，免去轉車負擔。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E5%8C%97%E6%8A%95%26aid%3D8133101",
      "tour": "https://www.klook.com/zh-TW/activity/1874-jiufen-shifen-day-tour-taipei/?aid=123436"
    },
    "itineraries": [
      {
        "planName": "1 日北投捷運名湯輕散步",
        "days": [
          {
            "day": "全日行程",
            "text": "捷運北投站 ➔ 新北投溫泉博物館 ➔ 地熱谷白煙漫步 ➔ 頂級白磺泉雙人湯屋 ➔ 北投市場吃肉羹。"
          }
        ]
      },
      {
        "planName": "2 日礁溪美人湯與夜市漫遊",
        "days": [
          {
            "day": "Day 1",
            "text": "搭客運抵達礁溪 ➔ 湯圍溝公園享受溫泉魚咬腳 ➔ 入住溫泉飯店一泊二食私人石池泡湯。"
          },
          {
            "day": "Day 2",
            "text": "五峰旗瀑布健行 ➔ 礁溪溫泉空ㄟ農場看夜景 ➔ 羅東夜市吃蔥油餅搭車返程。"
          }
        ]
      },
      {
        "planName": "3 日中南部深度奇湯體驗之旅",
        "days": [
          {
            "day": "Day 1",
            "text": "台中高鐵集合 ➔ 谷關溫泉風景區 ➔ 漫步捎來步道 ➔ 享受碳酸氫鈉泉水療 SPA。"
          },
          {
            "day": "Day 2",
            "text": "前往台南白河關子嶺 ➔ 體驗全台唯一的黑色泥漿溫泉美肌 ➔ 晚餐吃火山甕仔雞。"
          },
          {
            "day": "Day 3",
            "text": "水火同源奇觀 ➔ 順遊後壁無米樂老街 ➔ 嘉義高鐵返程。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "台北北投・日勝生加賀屋國際溫泉飯店",
        "en": "日勝生加賀屋國際溫泉飯店",
        "tag": "台北北投",
        "desc": "純正日式數寄屋造建築，管家奉茶細膩款待與白磺原湯。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北北投・北投麗禧溫泉酒店",
        "en": "北投麗禧溫泉酒店",
        "tag": "台北北投",
        "desc": "坐擁北投大磺嘴第一道泉源，隱密度高，房內自帶冷熱雙石池。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北北投・三二行館 Villa 32",
        "en": "三二行館 Villa 32",
        "tag": "台北北投",
        "desc": "頂級私人會所風格溫泉，極簡禪風庭園，僅接待少數貴賓。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北北投・北投老爺酒店",
        "en": "北投老爺酒店",
        "tag": "台北北投",
        "desc": "結合健康水療、法式精緻餐飲與客房白磺熱湯。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北北投・地熱谷景觀園區",
        "en": "地熱谷景觀園區",
        "tag": "台北北投",
        "desc": "硫磺煙霧裊裊如仙境，設有極具溫度的手湯體驗水道。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北士林・陽明山冷水坑公共溫泉",
        "en": "陽明山冷水坑公共溫泉",
        "tag": "台北士林",
        "desc": "免費天然弱酸性碳酸氫鹽泉，全台少見的 40℃ 低溫白湯。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北烏來・馥蘭朵烏來渡假酒店",
        "en": "馥蘭朵烏來渡假酒店",
        "tag": "新北烏來",
        "desc": "倚傍碧綠南勢溪畔，結合藝文生活儀式與無死角溪景雙人湯屋。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北烏來・璞石麗緻溫泉會館",
        "en": "璞石麗緻溫泉會館",
        "tag": "新北烏來",
        "desc": "極簡清水模設計，提供桶型、鍋型等特色主題景觀個人湯屋。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北金山・陽明山天籟渡假酒店",
        "en": "陽明山天籟渡假酒店",
        "tag": "新北金山",
        "desc": "佔地兩千坪戶外湧泉水樂園，背倚陽明山群峰，適合親子泡湯。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北金山・舊金山總督溫泉",
        "en": "舊金山總督溫泉",
        "tag": "新北金山",
        "desc": "日治時期總督招待所改建，頂樓可一邊泡海底溫泉一邊眺望海景。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・礁溪老爺酒店",
        "en": "礁溪老爺酒店",
        "tag": "宜蘭礁溪",
        "desc": "俯瞰蘭陽平原無敵百萬夜景，野天活水露天風呂景觀極佳。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・礁溪寒沐酒店",
        "en": "礁溪寒沐酒店",
        "tag": "宜蘭礁溪",
        "desc": "寒舍集團操刀，藝術收藏豐富，露天溫泉池寬敞高雅。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・呆水溫泉 Sui Spring",
        "en": "呆水溫泉 Sui Spring",
        "tag": "宜蘭礁溪",
        "desc": "會員制頂級私密風湯宿，清水模與香杉原木空間靜謐奢華。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・長榮鳳凰酒店（礁溪）",
        "en": "長榮鳳凰酒店（礁溪）",
        "tag": "宜蘭礁溪",
        "desc": "千坪慢活 SPA 水療設施，房內自帶大尺寸泡湯石池與溫泉小鴨。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭礁溪・湯圍溝溫泉公園",
        "en": "湯圍溝溫泉公園",
        "tag": "宜蘭礁溪",
        "desc": "水岸日式檜木涼亭，提供熱鬧的戶外溫泉魚去角質泡腳池。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭大同・鳩之澤溫泉",
        "en": "鳩之澤溫泉",
        "tag": "宜蘭大同",
        "desc": "太平山森林深處的淡藍色寶石溫泉，自備竹簍煮溫泉蛋與甜玉米。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗泰安・泰安觀止溫泉會館",
        "en": "泰安觀止溫泉會館",
        "tag": "苗栗泰安",
        "desc": "清水模與鐵木共構綠建築，緊鄰汶水溪畔，宛如森林中的藝術品。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗泰安・日出溫泉渡假飯店",
        "en": "日出溫泉渡假飯店",
        "tag": "苗栗泰安",
        "desc": "峇里島南洋茅草涼亭風情，弱鹼性碳酸泉質滑嫩洗後不乾澀。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中和平・虹夕諾雅 谷關",
        "en": "虹夕諾雅 谷關",
        "tag": "台中和平",
        "desc": "日本星野集團頂級奢華度假村，水之庭園與每房專屬半露天樓中樓風呂。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中和平・谷關統一渡假村",
        "en": "谷關統一渡假村",
        "tag": "台中和平",
        "desc": "融入泰雅編織元素，設有五行五色湯池與草原野溪風呂。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投信義・東埔帝綸溫泉大飯店",
        "en": "東埔帝綸溫泉大飯店",
        "tag": "南投信義",
        "desc": "玉山腳下無色無味的弱鹼性碳酸泉，登山客下山舒緩放鬆第一站。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投仁愛・廬山溫泉露天湯區",
        "en": "廬山溫泉露天湯區",
        "tag": "南投仁愛",
        "desc": "昔日「天下第一泉」之稱，泉質清澈透明，可飲可浴。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南白河・關子嶺儷景溫泉會館",
        "en": "關子嶺儷景溫泉會館",
        "tag": "台南白河",
        "desc": "全台罕見天然泥漿溫泉，富含天然礦物質泥，洗後肌膚細緻滑嫩。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南白河・景大渡假莊園",
        "en": "景大渡假莊園",
        "tag": "台南白河",
        "desc": "佔地八百坪中歐鄉村風莊園，擁有二十餘種泥漿水療三溫暖與面膜設施。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄六龜・不老溫泉渡假村",
        "en": "不老溫泉渡假村",
        "tag": "高雄六龜",
        "desc": "六龜荖濃溪支流名湯，傳說泉水洗後長生不老、皮膚柔潤光滑。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東車城・四重溪茴香戀戀溫泉會館",
        "en": "四重溪茴香戀戀溫泉會館",
        "tag": "屏東車城",
        "desc": "地中海純白風情，附設多元水療 SPA 與露天家庭風呂。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東車城・四重溪溫泉公園",
        "en": "四重溪溫泉公園",
        "tag": "屏東車城",
        "desc": "冬季舉辦極光日式燈海季，設有免費足湯與日式神社鳥居地景。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東卑南・知本老爺酒店",
        "en": "知本老爺酒店",
        "tag": "台東卑南",
        "desc": "藏身知本森林遊樂區旁，原民圖騰特色天幕風呂群與露天星空風呂。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東卑南・知本金聯世紀酒店",
        "en": "知本金聯世紀酒店",
        "tag": "台東卑南",
        "desc": "現代極簡風格，挑高中庭採光極佳，頂樓設有眺望翠綠山嵐露天溫泉。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮萬榮・紅葉溫泉旅社",
        "en": "紅葉溫泉旅社",
        "tag": "花蓮萬榮",
        "desc": "花東縱谷日治時期木構老旅社，保留懷舊日式榻榻米與傳統石砌浴池。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "nightmarket",
    "icon": "🍢",
    "shortTitle": "夜市小吃",
    "zhTitle": "夜市小吃",
    "enTitle": "NIGHT MARKETS & STREET FOOD",
    "name": "台灣夜市文化",
    "bannerImg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop",
    "title": "Night Markets · The Heartbeat of Taiwan",
    "subtitle": "台北 5 大必去夜市 ‧ 米其林必比登老攤巡禮 ‧ 越夜越美味",
    "deckBg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🍢",
        "title": "經典必吃對照",
        "desc": "胡椒餅、滷肉飯、地瓜球、蚵仔煎、大餅包小餅一網打盡。"
      },
      {
        "icon": "💊",
        "title": "大餐消化救星",
        "desc": "保健好物消化酵素與益生菌，暴飲暴食零負擔。"
      },
      {
        "icon": "🚕",
        "title": "深夜包車回飯店",
        "desc": "逛到深夜 12 點免擠末班捷運，專車直達飯店門口。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E5%AF%A7%E5%A4%8F%26aid%3D8133101",
      "tour": "https://afftkr.site/track/clicks/2498/c627c2bc900729d8fd9cab248d219d46266e5b9633e0e4f00e68a44125095ff88635aca3163d8e?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82"
    },
    "itineraries": [
      {
        "planName": "1 日台北必比登老牌夜市連線",
        "days": [
          {
            "day": "全日行程",
            "text": "雙連站出發 ➔ 寧夏夜市千歲宴吃劉芋仔 ➔ 轉戰士林夜市買十全排骨 ➔ 豪大大雞排收尾。"
          }
        ]
      },
      {
        "planName": "2 日雙城夜市美食狂吃馬拉松",
        "days": [
          {
            "day": "Day 1",
            "text": "台北饒河街夜市胡椒餅 ➔ 臨江街夜市吃冰火湯圓與梁記滷味 ➔ 入住信義商圈飯店。"
          },
          {
            "day": "Day 2",
            "text": "搭高鐵至台中 ➔ 逢甲夜市吃明倫蛋餅與大腸包小腸 ➔ 喝一杯綠豆沙牛奶。"
          }
        ]
      },
      {
        "planName": "3 日南台灣排隊夜市制霸之旅",
        "days": [
          {
            "day": "Day 1",
            "text": "台中一中街商圈小吃 ➔ 豐仁冰 ➔ 一中豪大雞排。"
          },
          {
            "day": "Day 2",
            "text": "前往台南花園夜市（週四/六/日） ➔ 大啖二師兄滷味與炭烤大雞排 ➔ 喝現煮冬瓜檸檬。"
          },
          {
            "day": "Day 3",
            "text": "高雄瑞豐夜市品嚐天使大雞排與蒜香豆干 ➔ 順遊六合夜市品嚐海產粥與木瓜牛奶。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "台北大同・寧夏夜市「劉芋仔蛋黃芋餅」",
        "en": "寧夏夜市「劉芋仔蛋黃芋餅」",
        "tag": "台北大同",
        "desc": "米其林必比登推介，現包現炸香濃甲仙芋泥與鹹蛋黃。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北大同・寧夏夜市「豬肝榮仔」",
        "en": "寧夏夜市「豬肝榮仔」",
        "tag": "台北大同",
        "desc": "厚切脆嫩無腥味豬肝，湯頭甘醇鮮甜。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北士林・士林夜市「海友十全排骨」",
        "en": "士林夜市「海友十全排骨」",
        "tag": "台北士林",
        "desc": "數十年老字號秘方，湯頭濃郁甘潤不燥熱。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北士林・士林夜市「忠誠號蚵仔煎」",
        "en": "士林夜市「忠誠號蚵仔煎」",
        "tag": "台北士林",
        "desc": "邊緣煎至金黃酥脆，飽滿鮮蚵與特調甜辣醬汁。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北松山・饒河街夜市「福州世祖胡椒餅」",
        "en": "饒河街夜市「福州世祖胡椒餅」",
        "tag": "台北松山",
        "desc": "排隊人龍不斷，炭火古法壁烤，外皮焦脆爆肉汁。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北松山・饒河街夜市「陳董藥燉排骨」",
        "en": "饒河街夜市「陳董藥燉排骨」",
        "tag": "台北松山",
        "desc": "骨肉輕輕一撥即骨肉分離，紅燒藥膳湯頭回甘。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北大安・臨江街夜市「御品元冰火湯圓」",
        "en": "臨江街夜市「御品元冰火湯圓」",
        "tag": "台北大安",
        "desc": "熱騰騰手工芝麻花生湯圓鋪在剉冰上，淋上特製桂花蜜。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北大安・臨江街夜市「梁記滷味」",
        "en": "臨江街夜市「梁記滷味」",
        "tag": "台北大安",
        "desc": "米其林推介廣式冷滷，鴨翅、豆干、脆腸鹹香入味。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北中正・南機場夜市「阿男麻油雞」",
        "en": "南機場夜市「阿男麻油雞」",
        "tag": "台北中正",
        "desc": "湯頭清甜不油膩，溫體土雞腿肉鮮甜軟嫩扎實。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北中正・南機場夜市「山內雞肉」",
        "en": "南機場夜市「山內雞肉」",
        "tag": "台北中正",
        "desc": "肉質多汁Q彈附蔥油，淋上特調醬油膏，白飯殺手。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台北中正・公館夜市「雄記蔥抓餅」",
        "en": "公館夜市「雄記蔥抓餅」",
        "tag": "台北中正",
        "desc": "外皮煎至層層酥脆膨鬆，蜂蜜芥末配九層塔起司。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北板橋・湳雅夜市「王記好吃麻油雞」",
        "en": "湳雅夜市「王記好吃麻油雞」",
        "tag": "新北板橋",
        "desc": "整碗大雞腿霸氣突出碗公，冬季排隊進補首選。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北永和・樂華夜市「阿爸の芋圓」",
        "en": "樂華夜市「阿爸の芋圓」",
        "tag": "新北永和",
        "desc": "獨創蔗片冰基底，鋪滿芋泥瀑布、白玉湯圓與芋圓。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆仁愛・基隆廟口夜市「天一香肉羹順」",
        "en": "基隆廟口夜市「天一香肉羹順」",
        "tag": "基隆仁愛",
        "desc": "百年老店，手切肥瘦勻稱滷肉飯配上清甜肉羹。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "基隆仁愛・基隆廟口夜市「一口吃金牌香腸」",
        "en": "基隆廟口夜市「一口吃金牌香腸」",
        "tag": "基隆仁愛",
        "desc": "炭火現烤多汁小香腸，附贈無限自取新鮮生大蒜。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "桃園中壢・中壢觀光夜市「溫記不一樣三明治」",
        "en": "中壢觀光夜市「溫記不一樣三明治」",
        "tag": "桃園中壢",
        "desc": "現炸酥脆長條麵包夾入滷蛋、小黃瓜與美乃滋。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新竹東區・城隍廟夜市「廟口鴨香飯」",
        "en": "城隍廟夜市「廟口鴨香飯」",
        "tag": "新竹東區",
        "desc": "白飯淋上甘甜鴨油醬汁，鋪滿去骨手撕燻鴨肉。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中西屯・逢甲夜市「明倫蛋餅」",
        "en": "逢甲夜市「明倫蛋餅」",
        "tag": "台中西屯",
        "desc": "現淋薄漿麵糊煎製，微甜軟嫩餅皮裹滿青蔥與獨門甜辣醬。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中西屯・逢甲夜市「官芝霖大腸包小腸」",
        "en": "逢甲夜市「官芝霖大腸包小腸」",
        "tag": "台中西屯",
        "desc": "炭烤糯米腸夾入飽滿香腸、酸菜與蒜碎，份量十足。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中西區・中華路夜市「陳陵肉圓」",
        "en": "中華路夜市「陳陵肉圓」",
        "tag": "台中西區",
        "desc": "低溫油炸Q彈外皮，包裹筍丁與扎實後腿肉餡。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "台中北區・一中街商圈「一中豐仁冰」",
        "en": "一中街商圈「一中豐仁冰」",
        "tag": "台中北區",
        "desc": "酸甜酸梅冰沙鋪上大紅豆，再挖上一球手工牛奶冰淇淋。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南北區・花園夜市「二師兄古早味滷味」",
        "en": "花園夜市「二師兄古早味滷味」",
        "tag": "台南北區",
        "desc": "現場大鍋熱炒翻滾，三杯米血與鳥蛋甜鹹入味超牽絲。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南北區・花園夜市「統大炭烤雞排」",
        "en": "花園夜市「統大炭烤雞排」",
        "tag": "台南北區",
        "desc": "先炸後烤鎖住豐富肉汁，刷上台南靈魂微甜烤肉醬。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南中西・武聖夜市「阿美芭樂」",
        "en": "武聖夜市「阿美芭樂」",
        "tag": "台南中西",
        "desc": "新鮮芭樂現切現拌特調甘草粉與梅子汁，清脆爽口。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南東區・大東夜市「延記臭豆腐」",
        "en": "大東夜市「延記臭豆腐」",
        "tag": "台南東區",
        "desc": "外皮炸至金黃酥脆，豆腐孔隙吸滿蒜汁與清脆台式泡菜。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄鼓山・瑞豐夜市「天使大雞排」",
        "en": "瑞豐夜市「天使大雞排」",
        "tag": "高雄鼓山",
        "desc": "超厚切多汁裹粉脆皮，一口咬下肉汁奔流。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄鼓山・瑞豐夜市「方臉師傅蒜香豆干」",
        "en": "瑞豐夜市「方臉師傅蒜香豆干」",
        "tag": "高雄鼓山",
        "desc": "大黑豆干孔隙吸滿濃郁蒜香醬汁與新鮮蔥花。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "高雄前金・六合夜市「鄭老牌木瓜牛奶」",
        "en": "六合夜市「鄭老牌木瓜牛奶」",
        "tag": "高雄前金",
        "desc": "不加一滴水，屏東新鮮木瓜與高牧鮮乳現打濃純香。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭羅東・羅東夜市「阿灶伯當歸羊肉湯」",
        "en": "羅東夜市「阿灶伯當歸羊肉湯」",
        "tag": "宜蘭羅東",
        "desc": "滿滿薄切羊肉片不帶腥味，沾辣豆瓣醬配當歸清湯。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮市・東大門夜市「第一家烤肉串」",
        "en": "東大門夜市「第一家烤肉串」",
        "tag": "花蓮市",
        "desc": "點餐號碼牌常破百，特製鹹甜古早味烤肉醬汁炭烤。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "railway",
    "icon": "🚂",
    "shortTitle": "經典鐵道",
    "zhTitle": "經典鐵道",
    "enTitle": "RAILWAY JOURNEYS",
    "name": "經典鐵道巡禮",
    "bannerImg": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=1600&auto=format&fit=crop",
    "title": "Railway Journeys · Heritage Across Mountains & Seas",
    "subtitle": "阿里山登山小火車 ‧ 復古藍皮解憂號 ‧ 平溪深澳山海支線",
    "deckBg": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🚅",
        "title": "高鐵外籍 85 折聯票",
        "desc": "Klook 台灣高鐵外國人專用周遊券，南北 90 分鐘直達生活圈。"
      },
      {
        "icon": "🚂",
        "title": "阿里山蒸汽林鐵",
        "desc": "搭乘世遺等級登山小火車穿梭古老神木群與祝山金色日出。"
      },
      {
        "icon": "🚲",
        "title": "深澳鐵道自行車",
        "desc": "踩著可愛河豚自行車穿過七彩光雕隧道，俯瞰太平洋壯麗海景。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D%E9%98%BF%E9%87%8C%E5%B1%B1%26aid%3D8133101",
      "tour": "https://www.klook.com/zh-TW/activity/1684-alishan-day-tour-chiayi/?aid=123436"
    },
    "itineraries": [
      {
        "planName": "1 日平溪山城放天燈鐵道遊",
        "days": [
          {
            "day": "全日行程",
            "text": "台北搭台鐵至瑞芳轉平溪線 ➔ 猴硐貓村散步 ➔ 十分瀑布 ➔ 十分老街鐵軌放天燈 ➔ 菁桐木造老車站。"
          }
        ]
      },
      {
        "planName": "2 日舊山線與集集綠意山林行",
        "days": [
          {
            "day": "Day 1",
            "text": "搭高鐵抵達苗栗 ➔ 舊山線鐵道自行車 Rail Bike 穿越魚藤坪斷橋 ➔ 勝興車站喝擂茶 ➔ 入住苗栗文青民宿。"
          },
          {
            "day": "Day 2",
            "text": "轉往南投集集支線 ➔ 漫步集集綠色隧道 ➔ 車埕老街參觀林班道木業體驗 ➔ 賦歸。"
          }
        ]
      },
      {
        "planName": "3 日世界級阿里山森鐵與南迴解憂行",
        "days": [
          {
            "day": "Day 1",
            "text": "嘉義車站搭乘阿里山林鐵本線火車 ➔ 體驗世界遺產級折返式登山小火車 ➔ 宿阿里山園區。"
          },
          {
            "day": "Day 2",
            "text": "祝山觀日出小火車 ➔ 漫步巨木群步道 ➔ 下山搭高鐵至左營 ➔ 夜宿屏東枋寮。"
          },
          {
            "day": "Day 3",
            "text": "搭乘全台唯一無冷氣復古「藍皮解憂號」 ➔ 穿梭南迴鐵路蔚藍太平洋海岸 ➔ 抵達台東。"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "新北平溪・十分車站",
        "en": "十分車站",
        "tag": "新北平溪",
        "desc": "火車門前過的經典老街，在鐵道中央點燃寫滿心願的祈福天燈。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北平溪・十分瀑布風景區",
        "en": "十分瀑布風景區",
        "tag": "新北平溪",
        "desc": "台版尼加拉瀑布，簾幕型瀑布水氣磅礡，偶現彩虹。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・猴硐車站（貓村）",
        "en": "猴硐車站（貓村）",
        "tag": "新北瑞芳",
        "desc": "CNN 評選世界六大賞貓景點，人貓共存的木構山城小鎮。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北平溪・菁桐車站",
        "en": "菁桐車站",
        "tag": "新北平溪",
        "desc": "平溪支線終點站，保留日治時期純木造古老站房與掛滿祈願竹筒。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "新北瑞芳・八斗子車站",
        "en": "八斗子車站",
        "tag": "新北瑞芳",
        "desc": "深澳支線望海秘境，月台走下階梯即是一望無際的深藍太平洋。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗三義・勝興車站",
        "en": "勝興車站",
        "tag": "苗栗三義",
        "desc": "西部縱貫鐵路最高點（海拔 402m），日式虎斑木造站房。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗三義・魚藤坪斷橋（龍騰斷橋）",
        "en": "魚藤坪斷橋（龍騰斷橋）",
        "tag": "苗栗三義",
        "desc": "關刀山大地震遺留的紅磚拱形橋墩遺跡，鐵道自行車高空俯瞰。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗後龍・後龍過港隧道",
        "en": "後龍過港隧道",
        "tag": "苗栗後龍",
        "desc": "日治時期紅磚鐵路隧道，設有金黃七彩投射燈的百年時光長廊。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "苗栗通霄・新埔車站",
        "en": "新埔車站",
        "tag": "苗栗通霄",
        "desc": "海線僅存的五座日式檜木木造老車站之一，出站步行兩分鐘抵達沙灘。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投集集・集集車站",
        "en": "集集車站",
        "tag": "南投集集",
        "desc": "921 大地震後原貌重建之檜木車站，純樸南投小鎮核心象徵。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投水里・車埕車站",
        "en": "車埕車站",
        "tag": "南投水里",
        "desc": "最後的火車站，依山傍水，木造站房與巨大蓄木池倒映山景。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "南投集集・添興窯陶藝村",
        "en": "添興窯陶藝村",
        "tag": "南投集集",
        "desc": "集集綠色隧道旁歷史最悠久的柴燒老蛇窯，體驗手拉胚 DIY。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "彰化市・彰化扇形車庫",
        "en": "彰化扇形車庫",
        "tag": "彰化市",
        "desc": "全台唯一保存的動態蒸汽火車頭旅館，十二股軌道輻射如扇。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義市・阿里山森林鐵路車庫園區",
        "en": "阿里山森林鐵路車庫園區",
        "tag": "嘉義市",
        "desc": "退役蒸汽火車頭、檜木車廂陳列，鐵道迷露天博物館。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義阿里山・祝山車站",
        "en": "祝山車站",
        "tag": "嘉義阿里山",
        "desc": "全台海拔最高的火車站（2451m），祝山觀日平台迎接金黃朝陽。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義阿里山・神木車站",
        "en": "神木車站",
        "tag": "嘉義阿里山",
        "desc": "被參天古木包圍的木構月台，紅檜神木倒伏遺跡就在身旁。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義阿里山・水社寮車站",
        "en": "水社寮車站",
        "tag": "嘉義阿里山",
        "desc": "鐵路呈「Ω」字形特殊迴旋進站，也是台灣蝙蝠生態保育重鎮。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義阿里山・奮起湖車站",
        "en": "奮起湖車站",
        "tag": "嘉義阿里山",
        "desc": "森鐵中繼大站，品嚐雙主菜鐵路木盒便當與百年老街草仔粿。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "嘉義竹崎・竹崎車站",
        "en": "竹崎車站",
        "tag": "嘉義竹崎",
        "desc": "平地進入高山鐵路爬坡起點站，優雅湖水綠純木造建築。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "台南仁德・保安車站",
        "en": "保安車站",
        "tag": "台南仁德",
        "desc": "白色檜木老車站，「永保安康」紀念車票發源地，文青必訪。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "屏東枋寮・枋寮車站（藍皮起點）",
        "en": "枋寮車站（藍皮起點）",
        "tag": "屏東枋寮",
        "desc": "南迴鐵路起點，老台鐵藍皮解憂號觀光列車的起錨之所。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東太麻里・金崙車站",
        "en": "金崙車站",
        "tag": "台東太麻里",
        "desc": "下車穿越神秘涵洞即可見湛藍海灘，排灣族部落天然溫泉聚集。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東太麻里・多良車站遺址",
        "en": "多良車站遺址",
        "tag": "台東太麻里",
        "desc": "全台公認最美高架鐵道景觀，鮮紅欄杆外就是太平洋波濤。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東市・台東舊火車站（台東鐵道藝術村）",
        "en": "台東舊火車站（台東鐵道藝術村）",
        "tag": "台東市",
        "desc": "昔日台東總站改建，退役鐵軌保留成大草皮與文創市集。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop"
      },
      {
        "name": "台東池上・池上車站",
        "en": "池上車站",
        "tag": "台東池上",
        "desc": "穀倉造型挑高木結構站房，月台即可聞到淡淡的純淨稻米香。",
        "img": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮富里・富里車站",
        "en": "富里車站",
        "tag": "花蓮富里",
        "desc": "榮獲香港建築師學會大獎的極簡金黃「大地穀倉」車站。",
        "img": "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=800&auto=format&fit=crop"
      },
      {
        "name": "花蓮新城・新城（太魯閣）車站",
        "en": "新城（太魯閣）車站",
        "tag": "花蓮新城",
        "desc": "峽谷意象清水模站房，內部懸掛世界級大理石編織藝術裝置。",
        "img": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭羅東・羅東林業文化園區",
        "en": "羅東林業文化園區",
        "tag": "宜蘭羅東",
        "desc": "昔日太平山伐木林鐵貯木池、老蒸汽火車頭與檜木日式宿舍。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭冬山・冬山車站",
        "en": "冬山車站",
        "tag": "宜蘭冬山",
        "desc": "全台首座瓜棚造型高架景觀車站，橋下設有彩色人工草皮滑梯。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&auto=format&fit=crop"
      },
      {
        "name": "宜蘭蘇澳・漢本車站",
        "en": "漢本車站",
        "tag": "宜蘭蘇澳",
        "desc": "蘇花鐵路緊鄰懸崖之站，電影《練習曲》知名取景地，聆聽海風輕拂。",
        "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop"
      }
    ]
  }
];
