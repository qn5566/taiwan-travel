// 18 大旗艦深度主題資料庫 (完整 30 景點、1/2/3 日遊規劃)
const THEMES_COMPLETE_DATA = [
  {
    "id": "northcoast",
    "icon": "🌊",
    "shortTitle": "北海岸角",
    "zhTitle": "北海岸角",
    "enTitle": "NORTH COAST PANORAMA",
    "name": "北海岸山海公路巡禮",
    "bannerImg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop",
    "title": "North Coast Ocean Panorama · Where Waves Kiss Mountains",
    "subtitle": "沿著台 2 線蔚藍海岸線，探索野柳奇岩、九份老街茶香與極東岬角日出",
    "deckBg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "📸",
        "title": "野柳蕈狀地質世界",
        "desc": "尋訪女王頭、仙女鞋奇岩與世界級海岸海蝕地形。"
      },
      {
        "icon": "🍵",
        "title": "九份山城阿妹茶樓",
        "desc": "大紅燈籠古階梯漫步，品嚐現捏手工阿柑姨芋圓。"
      },
      {
        "icon": "🚲",
        "title": "深澳鐵道河豚自行車",
        "desc": "依山傍海騎行於海岸線，穿梭夢幻螢光彩繪隧道。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】北海岸角極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "野柳地質公園 ➔ 金山老街鴨肉 ➔ 九份老街阿妹茶樓 ➔ 基隆正濱漁港彩色屋。"
          }
        ]
      },
      {
        "planName": "【2 日遊】北海岸角雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "三芝淺水灣海景咖啡 ➔ 石門洞 ➔ 金山溫泉飯店住宿"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "陰陽海 ➔ 鼻頭角稜谷步道 ➔ 基隆廟口夜市"
          }
        ]
      },
      {
        "planName": "【3 日遊】北海岸角全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "淡水八里水岸 ➔ 白沙灣 ➔ 老梅綠石槽"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "龜吼漁港萬里蟹 ➔ 和平島公園 ➔ 潮境公園"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "深澳鐵道自行車 ➔ 龍洞岬灣步道 ➔ 三貂角燈塔"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "野柳女王頭",
        "en": "北海岸角 Curated Spot",
        "tag": "新北萬里 · 精選地標",
        "desc": "新北萬里・野柳女王頭，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "龜吼漁港",
        "en": "北海岸角 Curated Spot",
        "tag": "新北萬里 · 精選地標",
        "desc": "新北萬里・龜吼漁港，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "金包里老街",
        "en": "北海岸角 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・金包里老街，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "朱銘美術館",
        "en": "北海岸角 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・朱銘美術館，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "神秘海岸一線天",
        "en": "北海岸角 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・神秘海岸一線天，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "磺港黃金足湯",
        "en": "北海岸角 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・磺港黃金足湯，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "白沙灣遊憩區",
        "en": "北海岸角 Curated Spot",
        "tag": "新北石門 · 精選地標",
        "desc": "新北石門・白沙灣遊憩區，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "老梅綠石槽",
        "en": "北海岸角 Curated Spot",
        "tag": "新北石門 · 精選地標",
        "desc": "新北石門・老梅綠石槽，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "富貴角燈塔",
        "en": "北海岸角 Curated Spot",
        "tag": "新北石門 · 精選地標",
        "desc": "新北石門・富貴角燈塔，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "石門海蝕洞",
        "en": "北海岸角 Curated Spot",
        "tag": "新北石門 · 精選地標",
        "desc": "新北石門・石門海蝕洞，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "淺水灣咖啡街",
        "en": "北海岸角 Curated Spot",
        "tag": "新北三芝 · 精選地標",
        "desc": "新北三芝・淺水灣咖啡街，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "芝蘭海上平台",
        "en": "北海岸角 Curated Spot",
        "tag": "新北三芝 · 精選地標",
        "desc": "新北三芝・芝蘭海上平台，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "九份基山街",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・九份基山街，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿妹茶樓",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・阿妹茶樓，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "黃金博物館",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・黃金博物館，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "水湳洞陰陽海",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・水湳洞陰陽海，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "十三層遺址",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・十三層遺址，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "黃金瀑布",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・黃金瀑布，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "鼻頭角稜谷步道",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・鼻頭角稜谷步道，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "深澳鐵道自行車",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・深澳鐵道自行車，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "深澳酋長岩",
        "en": "北海岸角 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・深澳酋長岩，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "三貂角燈塔",
        "en": "北海岸角 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・三貂角燈塔，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "福隆海水浴場",
        "en": "北海岸角 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・福隆海水浴場，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "舊草嶺隧道",
        "en": "北海岸角 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・舊草嶺隧道，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "龍洞岬角攀岩場",
        "en": "北海岸角 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・龍洞岬角攀岩場，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "正濱漁港彩色屋",
        "en": "北海岸角 Curated Spot",
        "tag": "基隆中正 · 精選地標",
        "desc": "基隆中正・正濱漁港彩色屋，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "和平島豆腐岩",
        "en": "北海岸角 Curated Spot",
        "tag": "基隆中正 · 精選地標",
        "desc": "基隆中正・和平島豆腐岩，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "潮境公園掃帚",
        "en": "北海岸角 Curated Spot",
        "tag": "基隆中正 · 精選地標",
        "desc": "基隆中正・潮境公園掃帚，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "八斗子望海車站",
        "en": "北海岸角 Curated Spot",
        "tag": "基隆中正 · 精選地標",
        "desc": "基隆中正・八斗子望海車站，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      },
      {
        "name": "基隆嶼登島巡航",
        "en": "北海岸角 Curated Spot",
        "tag": "基隆外海 · 精選地標",
        "desc": "基隆外海・基隆嶼登島巡航，為台灣北海岸山海公路巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "islands",
    "icon": "🏝️",
    "shortTitle": "離島跳島",
    "zhTitle": "離島跳島",
    "enTitle": "ISLANDS OF TAIWAN",
    "name": "台灣熱門離島跳島漫遊",
    "bannerImg": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=1600&auto=format&fit=crop",
    "title": "Taiwan Island Hopping Odyssey · Pacific Blue & Coral Shores",
    "subtitle": "澎湖雙心石滬、綠島海底溫泉、蘭嶼飛魚拼板舟與小琉球野生綠蠵龜",
    "deckBg": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🐢",
        "title": "小琉球與海龜共游",
        "desc": "全台海龜密度最高海灣，水下超近距離觀察野生綠蠵龜。"
      },
      {
        "icon": "♨️",
        "title": "綠島朝日海底溫泉",
        "desc": "世界僅有三處的稀有天然海底鹹水溫泉，邊泡湯邊迎日出。"
      },
      {
        "icon": "🌊",
        "title": "澎湖奎壁山摩西分海",
        "desc": "退潮時玄武岩礫石步道自海中央顯露，徒步走向赤嶼秘境。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】離島跳島極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "東港搭船 ➔ 小琉球花瓶岩與綠蠵龜共游 ➔ 美人洞 ➔ 落日亭 ➔ 傍晚搭船返程。"
          }
        ]
      },
      {
        "planName": "【2 日遊】離島跳島雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台東搭船至綠島 ➔ 石朗水下郵筒潛水 ➔ 帆船鼻草原 ➔ 朝日溫泉夜間聽濤"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "綠島燈塔 ➔ 大白沙 ➔ 買免稅品搭船"
          }
        ]
      },
      {
        "planName": "【3 日遊】離島跳島全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "抵達澎湖馬公 ➔ 跨海大橋 ➔ 二崁古厝 ➔ 奎壁山摩西分海"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "搭快艇跳島七美雙心石滬 ➔ 小台灣 ➔ 望安綠蠵龜館"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "隘門沙灘水上活動 ➔ 篤行十村文創區"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "二崁聚落保存區",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖西嶼 · 精選地標",
        "desc": "澎湖西嶼・二崁聚落保存區，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "奎壁山摩西分海",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖湖西 · 精選地標",
        "desc": "澎湖湖西・奎壁山摩西分海，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "跨海大橋",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖白沙 · 精選地標",
        "desc": "澎湖白沙・跨海大橋，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "雙心石滬",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖七美 · 精選地標",
        "desc": "澎湖七美・雙心石滬，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "山水沙灘",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖馬公 · 精選地標",
        "desc": "澎湖馬公・山水沙灘，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "篤行十村",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖馬公 · 精選地標",
        "desc": "澎湖馬公・篤行十村，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "風櫃洞聽濤",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖西嶼 · 精選地標",
        "desc": "澎湖西嶼・風櫃洞聽濤，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "大菓葉玄武岩柱",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖西嶼 · 精選地標",
        "desc": "澎湖西嶼・大菓葉玄武岩柱，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "漁翁島燈塔",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖西嶼 · 精選地標",
        "desc": "澎湖西嶼・漁翁島燈塔，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "隘門沙灘",
        "en": "離島跳島 Curated Spot",
        "tag": "澎湖湖西 · 精選地標",
        "desc": "澎湖湖西・隘門沙灘，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "朝日海底溫泉",
        "en": "離島跳島 Curated Spot",
        "tag": "綠島公館 · 精選地標",
        "desc": "綠島公館・朝日海底溫泉，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "石朗水下郵筒",
        "en": "離島跳島 Curated Spot",
        "tag": "綠島南寮 · 精選地標",
        "desc": "綠島南寮・石朗水下郵筒，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "大白沙步道",
        "en": "離島跳島 Curated Spot",
        "tag": "綠島中寮 · 精選地標",
        "desc": "綠島中寮・大白沙步道，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "純白綠島燈塔",
        "en": "離島跳島 Curated Spot",
        "tag": "綠島中寮 · 精選地標",
        "desc": "綠島中寮・純白綠島燈塔，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "帆船鼻大草原",
        "en": "離島跳島 Curated Spot",
        "tag": "綠島溫泉 · 精選地標",
        "desc": "綠島溫泉・帆船鼻大草原，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "牛頭山夕陽",
        "en": "離島跳島 Curated Spot",
        "tag": "綠島公館 · 精選地標",
        "desc": "綠島公館・牛頭山夕陽，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "東清天然秘境",
        "en": "離島跳島 Curated Spot",
        "tag": "蘭嶼東清 · 精選地標",
        "desc": "蘭嶼東清・東清天然秘境，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "東清灣拼板舟",
        "en": "離島跳島 Curated Spot",
        "tag": "蘭嶼東清 · 精選地標",
        "desc": "蘭嶼東清・東清灣拼板舟，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "達悟地下屋",
        "en": "離島跳島 Curated Spot",
        "tag": "蘭嶼野銀 · 精選地標",
        "desc": "蘭嶼野銀・達悟地下屋，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "氣象觀測站",
        "en": "離島跳島 Curated Spot",
        "tag": "蘭嶼紅頭 · 精選地標",
        "desc": "蘭嶼紅頭・氣象觀測站，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "花瓶岩海龜點",
        "en": "離島跳島 Curated Spot",
        "tag": "小琉球白沙 · 精選地標",
        "desc": "小琉球白沙・花瓶岩海龜點，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "美人洞珊瑚礁",
        "en": "離島跳島 Curated Spot",
        "tag": "小琉球琉球 · 精選地標",
        "desc": "小琉球琉球・美人洞珊瑚礁，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "烏鬼洞地質",
        "en": "離島跳島 Curated Spot",
        "tag": "小琉球天福 · 精選地標",
        "desc": "小琉球天福・烏鬼洞地質，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "山豬溝綠廊",
        "en": "離島跳島 Curated Spot",
        "tag": "小琉球杉福 · 精選地標",
        "desc": "小琉球杉福・山豬溝綠廊，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "落日亭晚霞",
        "en": "離島跳島 Curated Spot",
        "tag": "小琉球天福 · 精選地標",
        "desc": "小琉球天福・落日亭晚霞，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "得月樓水頭聚落",
        "en": "離島跳島 Curated Spot",
        "tag": "金門金城 · 精選地標",
        "desc": "金門金城・得月樓水頭聚落，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "陳景蘭洋樓",
        "en": "離島跳島 Curated Spot",
        "tag": "金門金湖 · 精選地標",
        "desc": "金門金湖・陳景蘭洋樓，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "北山播音牆",
        "en": "離島跳島 Curated Spot",
        "tag": "金門金寧 · 精選地標",
        "desc": "金門金寧・北山播音牆，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "芹壁花崗岩石屋",
        "en": "離島跳島 Curated Spot",
        "tag": "馬祖北竿 · 精選地標",
        "desc": "馬祖北竿・芹壁花崗岩石屋，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      },
      {
        "name": "八八酒香坑道",
        "en": "離島跳島 Curated Spot",
        "tag": "馬祖南竿 · 精選地標",
        "desc": "馬祖南竿・八八酒香坑道，為台灣台灣熱門離島跳島漫遊不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "hualien",
    "icon": "🏞️",
    "shortTitle": "花東探索",
    "zhTitle": "花東探索",
    "enTitle": "EAST COAST PACIFIC",
    "name": "花東縱谷與太平洋海岸",
    "bannerImg": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1600&auto=format&fit=crop",
    "title": "The Majestic East Coast · Where Pacific Meets Mountains",
    "subtitle": "縱谷的風、太平洋的浪，世界旅人的純淨避風港",
    "deckBg": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🚙",
        "title": "探險租車自駕縱谷",
        "desc": "花東台 9 線／台 11 線 SUV 自駕指南，花蓮取車台東還。"
      },
      {
        "icon": "🚣",
        "title": "晨曦太平洋立槳",
        "desc": "清水斷崖日出 SUP 泛舟挑戰，飽覽絕美漸層藍色海洋。"
      },
      {
        "icon": "🌾",
        "title": "池上伯朗大道稻浪",
        "desc": "無電線桿翠綠金黃稻田，微風吹拂單車漫步心靈之鄉。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】花東探索極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "花蓮市 ➔ 清水斷崖晨曦立槳 ➔ 太魯閣砂卡礑步道 ➔ 貨櫃星巴克 ➔ 東大門夜市。"
          }
        ]
      },
      {
        "planName": "【2 日遊】花東探索雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "鯉魚潭踩船 ➔ 光復糖廠冰棒 ➔ 瑞穗溫泉飯店黃金湯"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "舞鶴紅茶 ➔ 池上伯朗大道騎單車 ➔ 鐵花村慢市集"
          }
        ]
      },
      {
        "planName": "【3 日遊】花東探索全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "清水斷崖獨木舟 ➔ 牛山呼庭 ➔ 石梯坪海蝕壺穴（宿石梯坪）"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "秀姑巒溪泛舟 ➔ 三仙台跨海步橋 ➔ 都蘭部落巡禮"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "台東黑森林琵琶湖 ➔ 加路蘭裝置藝術 ➔ 多良車站遠眺"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "清水斷崖絕壁",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮秀林 · 精選地標",
        "desc": "花蓮秀林・清水斷崖絕壁，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "太魯閣砂卡礑",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮秀林 · 精選地標",
        "desc": "花蓮秀林・太魯閣砂卡礑，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "長春祠飛瀑",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮秀林 · 精選地標",
        "desc": "花蓮秀林・長春祠飛瀑，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "七星潭礫石灘",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮新城 · 精選地標",
        "desc": "花蓮新城・七星潭礫石灘，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "原野牧場海景",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮新城 · 精選地標",
        "desc": "花蓮新城・原野牧場海景，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "松園別館老松",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮市 · 精選地標",
        "desc": "花蓮市・松園別館老松，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "東大門觀光夜市",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮市 · 精選地標",
        "desc": "花蓮市・東大門觀光夜市，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "洄瀾貨櫃星巴克",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮吉安 · 精選地標",
        "desc": "花蓮吉安・洄瀾貨櫃星巴克，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "慶修院日式真言宗",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮吉安 · 精選地標",
        "desc": "花蓮吉安・慶修院日式真言宗，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "鯉魚潭水岸",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・鯉魚潭水岸，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "山度空間鞦韆",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・山度空間鞦韆，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "海崖谷野餐",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・海崖谷野餐，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "雲山水夢幻落羽松",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・雲山水夢幻落羽松，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "林田山林場聚落",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮鳳林 · 精選地標",
        "desc": "花蓮鳳林・林田山林場聚落，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "觀光糖廠木屋",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮光復 · 精選地標",
        "desc": "花蓮光復・觀光糖廠木屋，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "瑞穗生男黃金溫泉",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮瑞穗 · 精選地標",
        "desc": "花蓮瑞穗・瑞穗生男黃金溫泉，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "秀姑巒溪泛舟中心",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮瑞穗 · 精選地標",
        "desc": "花蓮瑞穗・秀姑巒溪泛舟中心，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "石梯坪單面山壺穴",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮豐濱 · 精選地標",
        "desc": "花蓮豐濱・石梯坪單面山壺穴，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "親不知子海上古道",
        "en": "花東探索 Curated Spot",
        "tag": "花蓮豐濱 · 精選地標",
        "desc": "花蓮豐濱・親不知子海上古道，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "三仙台八拱步橋",
        "en": "花東探索 Curated Spot",
        "tag": "台東成功 · 精選地標",
        "desc": "台東成功・三仙台八拱步橋，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "星龍空中花園",
        "en": "花東探索 Curated Spot",
        "tag": "台東長濱 · 精選地標",
        "desc": "台東長濱・星龍空中花園，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "金尊國際衝浪港",
        "en": "花東探索 Curated Spot",
        "tag": "台東東河 · 精選地標",
        "desc": "台東東河・金尊國際衝浪港，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "新東都蘭糖廠",
        "en": "花東探索 Curated Spot",
        "tag": "台東東河 · 精選地標",
        "desc": "台東東河・新東都蘭糖廠，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "初鹿高坡牧場",
        "en": "花東探索 Curated Spot",
        "tag": "台東卑南 · 精選地標",
        "desc": "台東卑南・初鹿高坡牧場，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "伯朗大道天堂路",
        "en": "花東探索 Curated Spot",
        "tag": "台東池上 · 精選地標",
        "desc": "台東池上・伯朗大道天堂路，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "大坡池蓮花晨霧",
        "en": "花東探索 Curated Spot",
        "tag": "台東池上 · 精選地標",
        "desc": "台東池上・大坡池蓮花晨霧，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "鹿野高台熱氣球",
        "en": "花東探索 Curated Spot",
        "tag": "台東鹿野 · 精選地標",
        "desc": "台東鹿野・鹿野高台熱氣球，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "鐵花村彩繪燈海",
        "en": "花東探索 Curated Spot",
        "tag": "台東市 · 精選地標",
        "desc": "台東市・鐵花村彩繪燈海，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "森林公園琵琶湖",
        "en": "花東探索 Curated Spot",
        "tag": "台東市 · 精選地標",
        "desc": "台東市・森林公園琵琶湖，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      },
      {
        "name": "多良海景車站",
        "en": "花東探索 Curated Spot",
        "tag": "台東太麻里 · 精選地標",
        "desc": "台東太麻里・多良海景車站，為台灣花東縱谷與太平洋海岸不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "festivals",
    "icon": "🏮",
    "shortTitle": "節慶典禮",
    "zhTitle": "節慶典禮",
    "enTitle": "TAIWAN FESTIVALS",
    "name": "台灣全島歲時狂歡與節慶",
    "bannerImg": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&auto=format&fit=crop",
    "title": "Cultural Vibrance & Annual Celebrations · Sacred & Electric",
    "subtitle": "萬盞天燈齊放、鹽水蜂炮洗禮、跨年煙火與迎第一道曙光的島嶼盛典",
    "deckBg": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "✨",
        "title": "平溪萬盞天燈齊放",
        "desc": "在黑夜中同時升起上千盞溫暖天燈，心願隨光芒飛向夜空。"
      },
      {
        "icon": "🎆",
        "title": "鹽水蜂炮震撼狂轟",
        "desc": "世界三大民俗慶典，穿戴全套頭盔防護體驗萬發蜂炮齊發。"
      },
      {
        "icon": "🌅",
        "title": "阿里山第一道曙光",
        "desc": "在祝山觀日平台上見證萬丈金光穿透波瀾壯闊的雲海。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】節慶典禮極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "平溪車站 ➔ 漫步老街挑選天燈 ➔ 傍晚參與千盞天燈齊放盛典 ➔ 搭接駁車返回台北逛夜市。"
          }
        ]
      },
      {
        "planName": "【2 日遊】節慶典禮雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "抵達台南鹽水 ➔ 參觀武廟與穿戴全套防護裝備 ➔ 夜戰萬發鹽水蜂炮"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "漫步月津港燈節水岸 ➔ 品嚐鹽水意麵返程"
          }
        ]
      },
      {
        "planName": "【3 日遊】節慶典禮全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台北 101 跨年搖滾晚會與高空酒吧煙火倒數"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "搭乘觀日專車前往阿里山或花蓮七星潭迎本島第一道曙光"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "走春祈福參拜全台名廟開運"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "十分天燈節廣場",
        "en": "節慶典禮 Curated Spot",
        "tag": "新北平溪 · 精選地標",
        "desc": "新北平溪・十分天燈節廣場，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "101跨年煙火高台",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・101跨年煙火高台，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "武廟蜂炮戰線",
        "en": "節慶典禮 Curated Spot",
        "tag": "台南鹽水 · 精選地標",
        "desc": "台南鹽水・武廟蜂炮戰線，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "月津港水岸燈節",
        "en": "節慶典禮 Curated Spot",
        "tag": "台南鹽水 · 精選地標",
        "desc": "台南鹽水・月津港水岸燈節，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "東隆宮燒王船祭典",
        "en": "節慶典禮 Curated Spot",
        "tag": "屏東東港 · 精選地標",
        "desc": "屏東東港・東隆宮燒王船祭典，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "中港慈裕宮炸邯鄲",
        "en": "節慶典禮 Curated Spot",
        "tag": "苗栗竹南 · 精選地標",
        "desc": "苗栗竹南・中港慈裕宮炸邯鄲，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "玄武堂肉身寒單爺",
        "en": "節慶典禮 Curated Spot",
        "tag": "台東市 · 精選地標",
        "desc": "台東市・玄武堂肉身寒單爺，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "迪化街年貨大街",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北大同 · 精選地標",
        "desc": "台北大同・迪化街年貨大街，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "天津路年貨大街",
        "en": "節慶典禮 Curated Spot",
        "tag": "台中中區 · 精選地標",
        "desc": "台中中區・天津路年貨大街，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "三鳳中街年貨商圈",
        "en": "節慶典禮 Curated Spot",
        "tag": "高雄三民 · 精選地標",
        "desc": "高雄三民・三鳳中街年貨商圈，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "行天宮除夕排隊祈福",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・行天宮除夕排隊祈福，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "艋舺龍山寺點平安燈",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北萬華 · 精選地標",
        "desc": "台北萬華・艋舺龍山寺點平安燈，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "紫南宮求發財金",
        "en": "節慶典禮 Curated Spot",
        "tag": "南投竹山 · 精選地標",
        "desc": "南投竹山・紫南宮求發財金，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "朝天宮春節香火",
        "en": "節慶典禮 Curated Spot",
        "tag": "雲林北港 · 精選地標",
        "desc": "雲林北港・朝天宮春節香火，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "普濟殿萬盞彩繪燈海",
        "en": "節慶典禮 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・普濟殿萬盞彩繪燈海，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "歡樂耶誕城光雕",
        "en": "節慶典禮 Curated Spot",
        "tag": "新北板橋 · 精選地標",
        "desc": "新北板橋・歡樂耶誕城光雕，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "香堤大道聖誕市集",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・香堤大道聖誕市集，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "天母萬聖搞怪嘉年華",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・天母萬聖搞怪嘉年華，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "大佳河濱端午龍舟賽",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・大佳河濱端午龍舟賽，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "慶端陽國際龍舟賽",
        "en": "節慶典禮 Curated Spot",
        "tag": "彰化鹿港 · 精選地標",
        "desc": "彰化鹿港・慶端陽國際龍舟賽，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "運河夜間端午龍舟錦標賽",
        "en": "節慶典禮 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・運河夜間端午龍舟錦標賽，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "愛河端午龍舟拔河",
        "en": "節慶典禮 Curated Spot",
        "tag": "高雄前金 · 精選地標",
        "desc": "高雄前金・愛河端午龍舟拔河，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "總統府國慶光雕展演",
        "en": "節慶典禮 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・總統府國慶光雕展演，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "恆春古城豎孤棚中元搶孤",
        "en": "節慶典禮 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・恆春古城豎孤棚中元搶孤，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "頭城中元搶孤文化節",
        "en": "節慶典禮 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・頭城中元搶孤文化節，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "祝山元旦迎曙光",
        "en": "節慶典禮 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・祝山元旦迎曙光，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "七星潭元旦F16戰機迎曙光",
        "en": "節慶典禮 Curated Spot",
        "tag": "花蓮新城 · 精選地標",
        "desc": "花蓮新城・七星潭元旦F16戰機迎曙光，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "千禧曙光紀念園區",
        "en": "節慶典禮 Curated Spot",
        "tag": "台東太麻里 · 精選地標",
        "desc": "台東太麻里・千禧曙光紀念園區，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "傳統藝術中心走春市集",
        "en": "節慶典禮 Curated Spot",
        "tag": "宜蘭五結 · 精選地標",
        "desc": "宜蘭五結・傳統藝術中心走春市集，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      },
      {
        "name": "勝利星村眷村燈會光影",
        "en": "節慶典禮 Curated Spot",
        "tag": "屏東市 · 精選地標",
        "desc": "屏東市・勝利星村眷村燈會光影，為台灣台灣全島歲時狂歡與節慶不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "parks",
    "icon": "🛝",
    "shortTitle": "共融公園",
    "zhTitle": "共融公園",
    "enTitle": "INCLUSIVE PARKS",
    "name": "全台親子共融特色旗艦公園",
    "bannerImg": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1600&auto=format&fit=crop",
    "title": "Joyful Playgrounds & Nature Parks · Family Adventures",
    "subtitle": "全齡友善無障礙、地景巨獸滑梯、大沙坑與水陸共融樂園",
    "deckBg": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🐒",
        "title": "大都會熊猴森樂園",
        "desc": "全台最大堤坡滑梯樂園，31 座動物滾輪地景滑梯一次玩透。"
      },
      {
        "icon": "💧",
        "title": "大佳河濱海洋戲水",
        "desc": "夏季限定大型鯨魚噴泉、戲水道沙坑，全家消暑首選。"
      },
      {
        "icon": "🌲",
        "title": "新生地球旅行遊戲場",
        "desc": "仿機場塔台大型攀爬網與立體雙滑梯，挑戰敏捷體能。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】共融公園極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "新北大都會公園熊猴森樂園放電 ➔ 斬龍山文化公園考古玩水 ➔ 鶯歌陶瓷老街手拉胚。"
          }
        ]
      },
      {
        "planName": "【2 日遊】共融公園雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台北新生公園地球旅行遊戲場 ➔ 大佳河濱公園海洋戲水區 ➔ 宿台北親子飯店"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "天母棒球主題溜滑梯公園 ➔ 兒童新樂園搭摩天輪"
          }
        ]
      },
      {
        "planName": "【3 日遊】共融公園全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "羅東九號海盜船公園 ➔ 斑比山丘看小鹿"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "苗栗貓裏喵大章魚溜滑梯 ➔ 台中黎新公園環保水資源樂園"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "雲林斗六膨鼠森林公園 ➔ 嘉義民雄早安貓咪公園"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "新北大都會公園熊猴森樂園",
        "en": "共融公園 Curated Spot",
        "tag": "新北三重 · 精選地標",
        "desc": "新北三重・新北大都會公園熊猴森樂園（31座地景滑梯），為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "新生公園地球旅行遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・新生公園地球旅行遊戲場（塔台攀爬網），為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "花博舞蝶共融遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・花博舞蝶共融遊戲場（全台首座全輪椅友善），為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "大佳河濱公園海洋遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・大佳河濱公園海洋遊戲場（大型戲水道沙坑），為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "天母運動公園棒球溜滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・天母運動公園棒球溜滑梯（9米高棒球主題），為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "華山大草原遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・華山大草原遊戲場（煙囪塔滑梯與滑索），為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "玉成公園大鯨魚戲水溜滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "台北南港 · 精選地標",
        "desc": "台北南港・玉成公園大鯨魚戲水溜滑梯，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "大港墘公園森林山訓遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "台北內湖 · 精選地標",
        "desc": "台北內湖・大港墘公園森林山訓遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "湖山六號消防英雄主題公園",
        "en": "共融公園 Curated Spot",
        "tag": "台北內湖 · 精選地標",
        "desc": "台北內湖・湖山六號消防英雄主題公園，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "立農公園森林體健遊具場",
        "en": "共融公園 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・立農公園森林體健遊具場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "陽光運動公園水陸空遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "新北新店 · 精選地標",
        "desc": "新北新店・陽光運動公園水陸空遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "十四張歷史公園穀倉滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "新北新店 · 精選地標",
        "desc": "新北新店・十四張歷史公園穀倉滑梯，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "浮洲恐龍主題兒童遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "新北板橋 · 精選地標",
        "desc": "新北板橋・浮洲恐龍主題兒童遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "四維公園巨獸攀爬鑽籠遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "新北板橋 · 精選地標",
        "desc": "新北板橋・四維公園巨獸攀爬鑽籠遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "汐止星座公園星光橋下太空漫步場",
        "en": "共融公園 Curated Spot",
        "tag": "新北汐止 · 精選地標",
        "desc": "新北汐止・汐止星座公園星光橋下太空漫步場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "水返腳公園茶樹濕式噴水廣場",
        "en": "共融公園 Curated Spot",
        "tag": "新北汐止 · 精選地標",
        "desc": "新北汐止・水返腳公園茶樹濕式噴水廣場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "鳳鳴公兒二機器人溜滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "新北鶯歌 · 精選地標",
        "desc": "新北鶯歌・鳳鳴公兒二機器人溜滑梯，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "斬龍山文化遺址噴泉考古沙坑",
        "en": "共融公園 Curated Spot",
        "tag": "新北土城 · 精選地標",
        "desc": "新北土城・斬龍山文化遺址噴泉考古沙坑，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "商港防災鯨魚地景遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "新北八里 · 精選地標",
        "desc": "新北八里・商港防災鯨魚地景遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "1895乙未保台紀念公園山丘滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "桃園平鎮 · 精選地標",
        "desc": "桃園平鎮・1895乙未保台紀念公園山丘滑梯，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "新竹公園麗池大沙坑與動物園",
        "en": "共融公園 Curated Spot",
        "tag": "新竹市 · 精選地標",
        "desc": "新竹市・新竹公園麗池大沙坑與動物園，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "貓裏喵親子公園八爪大章魚滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "苗栗市 · 精選地標",
        "desc": "苗栗市・貓裏喵親子公園八爪大章魚滑梯，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "黎新公園水循環共融攀爬網",
        "en": "共融公園 Curated Spot",
        "tag": "台中南屯 · 精選地標",
        "desc": "台中南屯・黎新公園水循環共融攀爬網，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "膨鼠森林公園橡果松鼠遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "雲林斗六 · 精選地標",
        "desc": "雲林斗六・膨鼠森林公園橡果松鼠遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "打貓早安公園喵咪地景遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "嘉義民雄 · 精選地標",
        "desc": "嘉義民雄・打貓早安公園喵咪地景遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "港濱歷史公園深海大滾輪滑梯",
        "en": "共融公園 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・港濱歷史公園深海大滾輪滑梯，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "時代公園水陸雙向多元遊戲空間",
        "en": "共融公園 Curated Spot",
        "tag": "高雄前鎮 · 精選地標",
        "desc": "高雄前鎮・時代公園水陸雙向多元遊戲空間，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "屏東縣民公園地坑工業風共融遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "屏東市 · 精選地標",
        "desc": "屏東市・屏東縣民公園地坑工業風共融遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "潮好玩幸福村林蔭共融樂園",
        "en": "共融公園 Curated Spot",
        "tag": "屏東潮州 · 精選地標",
        "desc": "屏東潮州・潮好玩幸福村林蔭共融樂園，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      },
      {
        "name": "九號公園巨型海盜船共融遊戲場",
        "en": "共融公園 Curated Spot",
        "tag": "宜蘭羅東 · 精選地標",
        "desc": "宜蘭羅東・九號公園巨型海盜船共融遊戲場，為台灣全台親子共融特色旗艦公園不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "railway",
    "icon": "🚂",
    "shortTitle": "經典鐵道",
    "zhTitle": "經典鐵道",
    "enTitle": "SCENIC RAILWAYS",
    "name": "百年森鐵與懷舊支線巡禮",
    "bannerImg": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&auto=format&fit=crop",
    "title": "Classic Iron Tracks & Mountain Rails · Nostalgic Taiwan",
    "subtitle": "阿里山森林之字形鐵道、平溪支線、藍皮解憂號與南迴山海列車",
    "deckBg": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🌲",
        "title": "阿里山林鐵本線登山",
        "desc": "體驗之字形折返、螺旋登山鐵道，穿越熱暖溫三帶林相。"
      },
      {
        "icon": "💙",
        "title": "藍皮解憂號復古漫遊",
        "desc": "吹著復古旋轉吊扇，開窗遠眺南迴湛藍太平洋與太平洋風光。"
      },
      {
        "icon": "🏮",
        "title": "平溪菁桐木造終點站",
        "desc": "日治時期黑瓦木造站房，掛滿竹筒祈福，古色古香。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】經典鐵道極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "台北搭台鐵至瑞芳 ➔ 平溪支線猴硐貓村 ➔ 十分老街放天燈 ➔ 菁桐純木造古老車站。"
          }
        ]
      },
      {
        "planName": "【2 日遊】經典鐵道雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "苗栗三義勝興木造車站 ➔ 舊山線鐵道自行車穿越龍騰斷橋 ➔ 宿三義民宿"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "南投集集綠色隧道 ➔ 水里車埕最後火車站木業聚落"
          }
        ]
      },
      {
        "planName": "【3 日遊】經典鐵道全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "嘉義火車站搭乘阿里山森鐵本線 ➔ 之字形折返登山體驗 ➔ 宿阿里山園區"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "祝山觀日出小火車 ➔ 下山搭高鐵至左營轉車至枋寮"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "搭乘藍皮解憂號復古無冷氣列車漫遊南迴鐵路至台東"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "十分車站天燈鐵道",
        "en": "經典鐵道 Curated Spot",
        "tag": "新北平溪 · 精選地標",
        "desc": "新北平溪・十分車站天燈鐵道，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "十分瀑布簾幕奇景",
        "en": "經典鐵道 Curated Spot",
        "tag": "新北平溪 · 精選地標",
        "desc": "新北平溪・十分瀑布簾幕奇景，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "猴硐貓村木構天橋",
        "en": "經典鐵道 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・猴硐貓村木構天橋，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "菁桐木造終點站",
        "en": "經典鐵道 Curated Spot",
        "tag": "新北平溪 · 精選地標",
        "desc": "新北平溪・菁桐木造終點站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "八斗子望海無人月台",
        "en": "經典鐵道 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・八斗子望海無人月台，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "勝興最高海拔老站",
        "en": "經典鐵道 Curated Spot",
        "tag": "苗栗三義 · 精選地標",
        "desc": "苗栗三義・勝興最高海拔老站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "龍騰斷橋殘垣遺跡",
        "en": "經典鐵道 Curated Spot",
        "tag": "苗栗三義 · 精選地標",
        "desc": "苗栗三義・龍騰斷橋殘垣遺跡，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "過港百年七彩紅磚隧道",
        "en": "經典鐵道 Curated Spot",
        "tag": "苗栗後龍 · 精選地標",
        "desc": "苗栗後龍・過港百年七彩紅磚隧道，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "新埔檜木日式海邊老車站",
        "en": "經典鐵道 Curated Spot",
        "tag": "苗栗通霄 · 精選地標",
        "desc": "苗栗通霄・新埔檜木日式海邊老車站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "集集純檜木重建站房",
        "en": "經典鐵道 Curated Spot",
        "tag": "南投集集 · 精選地標",
        "desc": "南投集集・集集純檜木重建站房，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "車埕最後的火車站",
        "en": "經典鐵道 Curated Spot",
        "tag": "南投水里 · 精選地標",
        "desc": "南投水里・車埕最後的火車站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "添興柴燒百年老蛇窯",
        "en": "經典鐵道 Curated Spot",
        "tag": "南投集集 · 精選地標",
        "desc": "南投集集・添興柴燒百年老蛇窯，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "彰化全台唯一動態扇形車庫",
        "en": "經典鐵道 Curated Spot",
        "tag": "彰化市 · 精選地標",
        "desc": "彰化市・彰化全台唯一動態扇形車庫，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿里山森鐵車庫園區蒸汽火車",
        "en": "經典鐵道 Curated Spot",
        "tag": "嘉義市 · 精選地標",
        "desc": "嘉義市・阿里山森鐵車庫園區蒸汽火車，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "祝山海拔最高觀日車站",
        "en": "經典鐵道 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・祝山海拔最高觀日車站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "神木倒伏巨大檜木月台",
        "en": "經典鐵道 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・神木倒伏巨大檜木月台，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "水社寮Ω型馬蹄迴旋軌道",
        "en": "經典鐵道 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・水社寮Ω型馬蹄迴旋軌道，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "奮起湖老街雙主菜便當",
        "en": "經典鐵道 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・奮起湖老街雙主菜便當，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "竹崎蒂芙尼藍純木構站房",
        "en": "經典鐵道 Curated Spot",
        "tag": "嘉義竹崎 · 精選地標",
        "desc": "嘉義竹崎・竹崎蒂芙尼藍純木構站房，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "保安永保安康發源老木站",
        "en": "經典鐵道 Curated Spot",
        "tag": "台南仁德 · 精選地標",
        "desc": "台南仁德・保安永保安康發源老木站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "枋寮藍皮解憂號啟航起點",
        "en": "經典鐵道 Curated Spot",
        "tag": "屏東枋寮 · 精選地標",
        "desc": "屏東枋寮・枋寮藍皮解憂號啟航起點，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "金崙穿越神秘涵洞海邊小站",
        "en": "經典鐵道 Curated Spot",
        "tag": "台東太麻里 · 精選地標",
        "desc": "台東太麻里・金崙穿越神秘涵洞海邊小站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "多良高架紅色鐵道海景",
        "en": "經典鐵道 Curated Spot",
        "tag": "台東太麻里 · 精選地標",
        "desc": "台東太麻里・多良高架紅色鐵道海景，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "鐵道藝術村大草皮舊月台",
        "en": "經典鐵道 Curated Spot",
        "tag": "台東市 · 精選地標",
        "desc": "台東市・鐵道藝術村大草皮舊月台，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "池上現代木構大地穀倉站",
        "en": "經典鐵道 Curated Spot",
        "tag": "台東池上 · 精選地標",
        "desc": "台東池上・池上現代木構大地穀倉站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "富里獲獎金黃大地穀倉站",
        "en": "經典鐵道 Curated Spot",
        "tag": "花蓮富里 · 精選地標",
        "desc": "花蓮富里・富里獲獎金黃大地穀倉站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "太魯閣大理石編織藝術站",
        "en": "經典鐵道 Curated Spot",
        "tag": "花蓮新城 · 精選地標",
        "desc": "花蓮新城・太魯閣大理石編織藝術站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "林業文化園區貯木池蒸汽火車",
        "en": "經典鐵道 Curated Spot",
        "tag": "宜蘭羅東 · 精選地標",
        "desc": "宜蘭羅東・林業文化園區貯木池蒸汽火車，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "冬山巨大瓜棚綠色高架站",
        "en": "經典鐵道 Curated Spot",
        "tag": "宜蘭冬山 · 精選地標",
        "desc": "宜蘭冬山・冬山巨大瓜棚綠色高架站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      },
      {
        "name": "漢本練習曲懸崖海景站",
        "en": "經典鐵道 Curated Spot",
        "tag": "宜蘭蘇澳 · 精選地標",
        "desc": "宜蘭蘇澳・漢本練習曲懸崖海景站，為台灣百年森鐵與懷舊支線巡禮不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "nightmarket",
    "icon": "🍢",
    "shortTitle": "夜市小吃",
    "zhTitle": "夜市小吃",
    "enTitle": "NIGHT MARKETS",
    "name": "熱血夜市饕客美味大搜查",
    "bannerImg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop",
    "title": "Taiwan Street Food & Night Markets · Sizzling Night Life",
    "subtitle": "鑊氣蒸騰的胡椒餅、米其林藥燉排骨、酥脆炸雞排與排隊老店巡禮",
    "deckBg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🥟",
        "title": "饒河福州炭烤胡椒餅",
        "desc": "剛出爐赤肉爆汁胡椒餅，酥脆餅皮外焦內嫩鑊氣十足。"
      },
      {
        "icon": "🍗",
        "title": "士林老字號十全排骨",
        "desc": "甘醇藥膳湯頭滋補溫潤，啃排骨骨髓吮指回味無窮。"
      },
      {
        "icon": "🍧",
        "title": "通化御品元冰火湯圓",
        "desc": "熱騰騰現煮芝麻花生湯圓淋上甜酒釀刨冰，冰火交融。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】夜市小吃極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "捷運雙連站 ➔ 寧夏夜市吃劉芋仔與豬肝榮仔 ➔ 轉戰士林夜市買十全藥燉排骨與生煎包。"
          }
        ]
      },
      {
        "planName": "【2 日遊】夜市小吃雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台北松山饒河夜市胡椒餅 ➔ 通化夜市冰火湯圓與滷味（宿信義區）"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "搭高鐵至台中逢甲夜市吃明倫蛋餅與炭烤大腸包小腸"
          }
        ]
      },
      {
        "planName": "【3 日遊】夜市小吃全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台中一中街商圈小吃馬拉松"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "前往台南花園夜市大排長龍二師兄三杯滷味與現炸大雞排"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "高雄瑞豐夜市天使大雞排 ➔ 六合夜市木瓜牛奶收尾"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "寧夏劉芋仔蛋黃肉鬆芋餅",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北大同 · 精選地標",
        "desc": "台北大同・寧夏劉芋仔蛋黃肉鬆芋餅，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "寧夏豬肝榮仔厚切脆豬肝湯",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北大同 · 精選地標",
        "desc": "台北大同・寧夏豬肝榮仔厚切脆豬肝湯，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "海友十全藥燉排骨甘醇湯",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・海友十全藥燉排骨甘醇湯，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "忠誠號金黃酥脆鮮蚵仔煎",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・忠誠號金黃酥脆鮮蚵仔煎，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "饒河福州世祖炭烤胡椒餅",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北松山 · 精選地標",
        "desc": "台北松山・饒河福州世祖炭烤胡椒餅，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "饒河陳董紅燒藥燉羊肉排骨",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北松山 · 精選地標",
        "desc": "台北松山・饒河陳董紅燒藥燉羊肉排骨，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "臨江御品元熱冷冰火湯圓",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北大安 · 精選地標",
        "desc": "台北大安・臨江御品元熱冷冰火湯圓，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "臨江梁記廣式冷滷鴨翅脆腸",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北大安 · 精選地標",
        "desc": "台北大安・臨江梁記廣式冷滷鴨翅脆腸，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "南機場阿男甘甜清爽麻油雞腿",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・南機場阿男甘甜清爽麻油雞腿，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "南機場山內鮮嫩白斬雞肉飯",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・南機場山內鮮嫩白斬雞肉飯，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "公館雄記蜂蜜芥末九層塔蔥抓餅",
        "en": "夜市小吃 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・公館雄記蜂蜜芥末九層塔蔥抓餅，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "湳雅王記大骨湯麻油雞腿",
        "en": "夜市小吃 Curated Spot",
        "tag": "新北板橋 · 精選地標",
        "desc": "新北板橋・湳雅王記大骨湯麻油雞腿，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "樂華阿爸の芋圓瀑布蔗片冰",
        "en": "夜市小吃 Curated Spot",
        "tag": "新北永和 · 精選地標",
        "desc": "新北永和・樂華阿爸の芋圓瀑布蔗片冰，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "廟口天一香百年肥瘦滷肉飯",
        "en": "夜市小吃 Curated Spot",
        "tag": "基隆仁愛 · 精選地標",
        "desc": "基隆仁愛・廟口天一香百年肥瘦滷肉飯，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "廟口一口吃現烤香腸配蒜頭",
        "en": "夜市小吃 Curated Spot",
        "tag": "基隆仁愛 · 精選地標",
        "desc": "基隆仁愛・廟口一口吃現烤香腸配蒜頭，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "中壢不一樣現炸脆皮營養三明治",
        "en": "夜市小吃 Curated Spot",
        "tag": "桃園中壢 · 精選地標",
        "desc": "桃園中壢・中壢不一樣現炸脆皮營養三明治，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "城隍廟口鴨香油去骨手撕鴨肉飯",
        "en": "夜市小吃 Curated Spot",
        "tag": "新竹東區 · 精選地標",
        "desc": "新竹東區・城隍廟口鴨香油去骨手撕鴨肉飯，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "逢甲明倫特調甜辣醬現淋粉漿蛋餅",
        "en": "夜市小吃 Curated Spot",
        "tag": "台中西屯 · 精選地標",
        "desc": "台中西屯・逢甲明倫特調甜辣醬現淋粉漿蛋餅，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "逢甲官芝霖炭烤黑胡椒大腸包小腸",
        "en": "夜市小吃 Curated Spot",
        "tag": "台中西屯 · 精選地標",
        "desc": "台中西屯・逢甲官芝霖炭烤黑胡椒大腸包小腸，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "中華路陳陵低溫脆炸筍肉肉圓",
        "en": "夜市小吃 Curated Spot",
        "tag": "台中西區 · 精選地標",
        "desc": "台中西區・中華路陳陵低溫脆炸筍肉肉圓，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "一中豐仁酸梅冰配大紅豆牛乳冰",
        "en": "夜市小吃 Curated Spot",
        "tag": "台中北區 · 精選地標",
        "desc": "台中北區・一中豐仁酸梅冰配大紅豆牛乳冰，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "花園二師兄大鍋熱炒三杯米血小鳥蛋",
        "en": "夜市小吃 Curated Spot",
        "tag": "台南北區 · 精選地標",
        "desc": "台南北區・花園二師兄大鍋熱炒三杯米血小鳥蛋，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "花園統大先炸後烤微甜靈魂雞排",
        "en": "夜市小吃 Curated Spot",
        "tag": "台南北區 · 精選地標",
        "desc": "台南北區・花園統大先炸後烤微甜靈魂雞排，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "武聖阿美新鮮現拌甘草梅子芭樂",
        "en": "夜市小吃 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・武聖阿美新鮮現拌甘草梅子芭樂，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "大東延記多孔吸汁臭豆腐泡菜",
        "en": "夜市小吃 Curated Spot",
        "tag": "台南東區 · 精選地標",
        "desc": "台南東區・大東延記多孔吸汁臭豆腐泡菜，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "瑞豐天使超厚切爆汁脆皮大雞排",
        "en": "夜市小吃 Curated Spot",
        "tag": "高雄鼓山 · 精選地標",
        "desc": "高雄鼓山・瑞豐天使超厚切爆汁脆皮大雞排，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "瑞豐方臉師傅吸汁蒜香三杯大黑豆干",
        "en": "夜市小吃 Curated Spot",
        "tag": "高雄鼓山 · 精選地標",
        "desc": "高雄鼓山・瑞豐方臉師傅吸汁蒜香三杯大黑豆干，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "六合鄭老牌純木瓜鮮奶濃醇汁",
        "en": "夜市小吃 Curated Spot",
        "tag": "高雄前金 · 精選地標",
        "desc": "高雄前金・六合鄭老牌純木瓜鮮奶濃醇汁，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿灶伯無腥當歸羊肉片排隊湯",
        "en": "夜市小吃 Curated Spot",
        "tag": "宜蘭羅東 · 精選地標",
        "desc": "宜蘭羅東・阿灶伯無腥當歸羊肉片排隊湯，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      },
      {
        "name": "東大門第一家現刷鹹甜古法烤肉串",
        "en": "夜市小吃 Curated Spot",
        "tag": "花蓮市 · 精選地標",
        "desc": "花蓮市・東大門第一家現刷鹹甜古法烤肉串，為台灣熱血夜市饕客美味大搜查不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "trekking",
    "icon": "⛰️",
    "shortTitle": "百岳登山",
    "zhTitle": "百岳登山",
    "enTitle": "ALPINE TREKKING",
    "name": "全台百岳名山與高山縱走",
    "bannerImg": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&auto=format&fit=crop",
    "title": "Majestic Alpine Trails · Taiwan Top Peaks Over 3000m",
    "subtitle": "玉山主峰全台之巔、合歡群峰雲海公路、雪山黑森林與古道秘境",
    "deckBg": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🏔️",
        "title": "玉山主峰登頂 3952m",
        "desc": "登上東北亞第一高峰，迎晨光俯瞰八通關古道與山巒雲海。"
      },
      {
        "icon": "☁️",
        "title": "合歡山公路雲海群峰",
        "desc": "台灣最容易親近的三千公尺百岳群，四季高山箭竹草原如茵。"
      },
      {
        "icon": "🌲",
        "title": "特富野古道漫步紅檜",
        "desc": "沿著舊鐵道穿梭柳杉與紅檜巨木林，呼吸滿滿高山芬多精。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】百岳登山極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "合歡山石門山步道登上海拔 3237m 百岳 ➔ 順遊合歡尖山 ➔ 清境農場吃雲南擺夷料理。"
          }
        ]
      },
      {
        "planName": "【2 日遊】百岳登山雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "苗栗泰安走入水雲三星 ➔ 泰安溫泉放鬆舒緩腿部肌肉"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "挑戰火炎山大峽谷紅土惡地峭壁步道"
          }
        ]
      },
      {
        "planName": "【3 日遊】百岳登山全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "抵達嘉義阿里山巨木群步道熱身"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "挑戰玉山前峰石瀑考驗"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "特富野古道漫步舊鐵道鐵軌穿梭紅檜森林"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "合歡山石門山百岳",
        "en": "百岳登山 Curated Spot",
        "tag": "花投交界 · 精選地標",
        "desc": "花投交界・合歡山石門山百岳（入門首選3237m），為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "合歡山主峰日落雲海公路",
        "en": "百岳登山 Curated Spot",
        "tag": "花投交界 · 精選地標",
        "desc": "花投交界・合歡山主峰日落雲海公路，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "合歡山東峰杜鵑花海坡",
        "en": "百岳登山 Curated Spot",
        "tag": "花投交界 · 精選地標",
        "desc": "花投交界・合歡山東峰杜鵑花海坡，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "玉山主峰全台之巔",
        "en": "百岳登山 Curated Spot",
        "tag": "南投信義 · 精選地標",
        "desc": "南投信義・玉山主峰全台之巔（3952m），為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "玉山前峰亂石坡難關",
        "en": "百岳登山 Curated Spot",
        "tag": "南投信義 · 精選地標",
        "desc": "南投信義・玉山前峰亂石坡難關，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "雪山東峰哭坡觀景台",
        "en": "百岳登山 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・雪山東峰哭坡觀景台，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "武陵四秀桃山瀑布步道",
        "en": "百岳登山 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・武陵四秀桃山瀑布步道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "火炎山惡地大峽谷步道",
        "en": "百岳登山 Curated Spot",
        "tag": "苗栗三義 · 精選地標",
        "desc": "苗栗三義・火炎山惡地大峽谷步道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "水漾森林枯木倒影秘境",
        "en": "百岳登山 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・水漾森林枯木倒影秘境，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "特富野古道紅檜林舊鐵道",
        "en": "百岳登山 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・特富野古道紅檜林舊鐵道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "眠月線失落高空鐵軌步道",
        "en": "百岳登山 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・眠月線失落高空鐵軌步道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "見晴懷古青苔鐵道迷霧小徑",
        "en": "百岳登山 Curated Spot",
        "tag": "宜蘭大同 · 精選地標",
        "desc": "宜蘭大同・見晴懷古青苔鐵道迷霧小徑，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿朗壹古道原始海岸鵝卵石",
        "en": "百岳登山 Curated Spot",
        "tag": "宜蘭南澳 · 精選地標",
        "desc": "宜蘭南澳・阿朗壹古道原始海岸鵝卵石，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "無耳茶壺山眺望陰陽海",
        "en": "百岳登山 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・無耳茶壺山眺望陰陽海，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "鼻頭角稜谷步道濱海長城",
        "en": "百岳登山 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・鼻頭角稜谷步道濱海長城，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "劍龍稜險峻黃金岩壁攀爬",
        "en": "百岳登山 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・劍龍稜險峻黃金岩壁攀爬，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "七星山主東峰台北最高點",
        "en": "百岳登山 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・七星山主東峰台北最高點，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "陽明山擎天崗大草原環形步道",
        "en": "百岳登山 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・陽明山擎天崗大草原環形步道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "司馬庫斯千年神木群步道",
        "en": "百岳登山 Curated Spot",
        "tag": "新竹尖石 · 精選地標",
        "desc": "新竹尖石・司馬庫斯千年神木群步道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "鎮西堡巨木群原始森林",
        "en": "百岳登山 Curated Spot",
        "tag": "新竹尖石 · 精選地標",
        "desc": "新竹尖石・鎮西堡巨木群原始森林，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "鵝公髻山雲霧柳杉森林",
        "en": "百岳登山 Curated Spot",
        "tag": "新竹五峰 · 精選地標",
        "desc": "新竹五峰・鵝公髻山雲霧柳杉森林，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "加里山台版小富士柳杉林",
        "en": "百岳登山 Curated Spot",
        "tag": "苗栗南莊 · 精選地標",
        "desc": "苗栗南莊・加里山台版小富士柳杉林，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "鳶嘴山險峻天然花崗岩稜線",
        "en": "百岳登山 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・鳶嘴山險峻天然花崗岩稜線，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "忘憂森林水中白枯木綠藻",
        "en": "百岳登山 Curated Spot",
        "tag": "南投竹山 · 精選地標",
        "desc": "南投竹山・忘憂森林水中白枯木綠藻，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿朗壹古道南端南田石",
        "en": "百岳登山 Curated Spot",
        "tag": "屏東牡丹 · 精選地標",
        "desc": "屏東牡丹・阿朗壹古道南端南田石，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "北大武山南台灣屏障喜多麗雲海",
        "en": "百岳登山 Curated Spot",
        "tag": "屏東泰武 · 精選地標",
        "desc": "屏東泰武・北大武山南台灣屏障喜多麗雲海，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "都蘭山阿美族聖山藍海遠眺",
        "en": "百岳登山 Curated Spot",
        "tag": "台東成功 · 精選地標",
        "desc": "台東成功・都蘭山阿美族聖山藍海遠眺，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "錐麓古道大理石垂直大斷崖",
        "en": "百岳登山 Curated Spot",
        "tag": "花蓮秀林 · 精選地標",
        "desc": "花蓮秀林・錐麓古道大理石垂直大斷崖，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "新寮瀑布綠意負離子林道",
        "en": "百岳登山 Curated Spot",
        "tag": "宜蘭冬山 · 精選地標",
        "desc": "宜蘭冬山・新寮瀑布綠意負離子林道，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      },
      {
        "name": "基隆姜子寮山360度環景看台",
        "en": "百岳登山 Curated Spot",
        "tag": "基隆信義 · 精選地標",
        "desc": "基隆信義・基隆姜子寮山360度環景看台，為台灣全台百岳名山與高山縱走不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "camping",
    "icon": "⛺",
    "shortTitle": "秘境露營",
    "zhTitle": "秘境露營",
    "enTitle": "GLAMPING & NATURE",
    "name": "豪華露營星空帳與自然野營",
    "bannerImg": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&auto=format&fit=crop",
    "title": "Glamping Under the Stars · Forests, Oceans & Bonfires",
    "subtitle": "免裝備奢華神殿帳、高海拔雲海露營車與森林圍爐野炊體驗",
    "deckBg": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🌌",
        "title": "星空透明穹頂帳篷",
        "desc": "躺在柔軟大床望向璀璨銀河星空，伴隨蟲鳴鳥叫自然入眠。"
      },
      {
        "icon": "🥩",
        "title": "戶外海陸營火炭烤",
        "desc": "專人直送和牛生鮮食材箱，在營火旁烤棉花糖微醺暢聊。"
      },
      {
        "icon": "🌲",
        "title": "雲海梯田晨曦瑜珈",
        "desc": "千米高海拔梯田晨醒，晨霧繚繞中感受身心徹底放鬆。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】秘境露營極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "陽明山菁山營區免裝備入住 ➔ 戶外野餐手沖咖啡 ➔ 專人準備海陸晚餐 ➔ 溫泉湯屋泡湯看夜景。"
          }
        ]
      },
      {
        "planName": "【2 日遊】秘境露營雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "苗栗卓蘭橘祥豐收神殿帳 ➔ 果園採摘柑橘 ➔ 晚間營火圍爐烤棉花糖"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "營區清晨森呼吸 ➔ 漫步大克山森林步道返程"
          }
        ]
      },
      {
        "planName": "【3 日遊】秘境露營全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "南投日月潭峇嵐杉丘星空透明帳體驗"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "驅車前往阿里山高海拔營地 ➔ 穿越竹林雲海看落日晚霞"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "奮起湖老街吃鐵路便當返程"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "峇嵐杉丘馬車星空帳",
        "en": "秘境露營 Curated Spot",
        "tag": "南投魚池 · 精選地標",
        "desc": "南投魚池・峇嵐杉丘馬車星空帳，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "自然圈農場獨立溫泉包圈",
        "en": "秘境露營 Curated Spot",
        "tag": "苗栗卓蘭 · 精選地標",
        "desc": "苗栗卓蘭・自然圈農場獨立溫泉包圈，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "橘祥豐收果園神殿帳",
        "en": "秘境露營 Curated Spot",
        "tag": "苗栗卓蘭 · 精選地標",
        "desc": "苗栗卓蘭・橘祥豐收果園神殿帳，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "那一村溪畔狩獵帳划船",
        "en": "秘境露營 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・那一村溪畔狩獵帳划船，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "山美學大草皮野炊",
        "en": "秘境露營 Curated Spot",
        "tag": "苗栗大湖 · 精選地標",
        "desc": "苗栗大湖・山美學大草皮野炊，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "朋趣露營車星級管家泳池",
        "en": "秘境露營 Curated Spot",
        "tag": "桃園楊梅 · 精選地標",
        "desc": "桃園楊梅・朋趣露營車星級管家泳池，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "山思雲想千米雲海瑜珈",
        "en": "秘境露營 Curated Spot",
        "tag": "南投竹山 · 精選地標",
        "desc": "南投竹山・山思雲想千米雲海瑜珈，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "愛上喜翁原民獵人射箭",
        "en": "秘境露營 Curated Spot",
        "tag": "新竹五峰 · 精選地標",
        "desc": "新竹五峰・愛上喜翁原民獵人射箭，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "蟬說霧繞泰雅櫻花露營",
        "en": "秘境露營 Curated Spot",
        "tag": "新竹五峰 · 精選地標",
        "desc": "新竹五峰・蟬說霧繞泰雅櫻花露營，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "蟬說山中靜靜酒桶山晚霞",
        "en": "秘境露營 Curated Spot",
        "tag": "台中太平 · 精選地標",
        "desc": "台中太平・蟬說山中靜靜酒桶山晚霞，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "遠雄悅來太平洋第一排露營車",
        "en": "秘境露營 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・遠雄悅來太平洋第一排露營車，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "得天露營車老爺野天熱湯",
        "en": "秘境露營 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・得天露營車老爺野天熱湯，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "陽明山菁山溫泉露營木屋",
        "en": "秘境露營 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・陽明山菁山溫泉露營木屋，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "拉波波村峽谷神殿帳",
        "en": "秘境露營 Curated Spot",
        "tag": "基隆暖暖 · 精選地標",
        "desc": "基隆暖暖・拉波波村峽谷神殿帳，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "海崖谷斷崖拍照打卡帳篷",
        "en": "秘境露營 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・海崖谷斷崖拍照打卡帳篷，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "入樹村星空露天電影院",
        "en": "秘境露營 Curated Spot",
        "tag": "南投魚池 · 精選地標",
        "desc": "南投魚池・入樹村星空露天電影院，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "漫步在雲端梯田雲海帳",
        "en": "秘境露營 Curated Spot",
        "tag": "苗栗泰安 · 精選地標",
        "desc": "苗栗泰安・漫步在雲端梯田雲海帳，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "候鳥羽峰水鳥濕地湖景帳",
        "en": "秘境露營 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・候鳥羽峰水鳥濕地湖景帳，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "迷糊步道深山竹林避暑營區",
        "en": "秘境露營 Curated Spot",
        "tag": "嘉義阿里山 · 精選地標",
        "desc": "嘉義阿里山・迷糊步道深山竹林避暑營區，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "相思園關西萬家燈火夜景地",
        "en": "秘境露營 Curated Spot",
        "tag": "新竹尖石 · 精選地標",
        "desc": "新竹尖石・相思園關西萬家燈火夜景地，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "司馬庫斯高山無光害銀河營區",
        "en": "秘境露營 Curated Spot",
        "tag": "新竹尖石 · 精選地標",
        "desc": "新竹尖石・司馬庫斯高山無光害銀河營區，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "綠舟森林桐花落雪野營",
        "en": "秘境露營 Curated Spot",
        "tag": "苗栗三義 · 精選地標",
        "desc": "苗栗三義・綠舟森林桐花落雪野營，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "武陵農場雪山群峰環繞營位",
        "en": "秘境露營 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・武陵農場雪山群峰環繞營位，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "福壽山海拔2574m最高湖畔木棧",
        "en": "秘境露營 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・福壽山海拔2574m最高湖畔木棧，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "清境卡爾小鎮暗空公園觀星車",
        "en": "秘境露營 Curated Spot",
        "tag": "南投仁愛 · 精選地標",
        "desc": "南投仁愛・清境卡爾小鎮暗空公園觀星車，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "初鹿森活大片平原放風箏",
        "en": "秘境露營 Curated Spot",
        "tag": "台東卑南 · 精選地標",
        "desc": "台東卑南・初鹿森活大片平原放風箏，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "日日旅海太平洋開窗白露營車",
        "en": "秘境露營 Curated Spot",
        "tag": "屏東滿州 · 精選地標",
        "desc": "屏東滿州・日日旅海太平洋開窗白露營車，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "那山那谷南澳溪漂漂河大草原",
        "en": "秘境露營 Curated Spot",
        "tag": "宜蘭南澳 · 精選地標",
        "desc": "宜蘭南澳・那山那谷南澳溪漂漂河大草原，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "八街海龜浮潛車頂露營車",
        "en": "秘境露營 Curated Spot",
        "tag": "屏東琉球 · 精選地標",
        "desc": "屏東琉球・八街海龜浮潛車頂露營車，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      },
      {
        "name": "海邊抱墩抓螃蟹沙灘帳篷",
        "en": "秘境露營 Curated Spot",
        "tag": "澎湖白沙 · 精選地標",
        "desc": "澎湖白沙・海邊抱墩抓螃蟹沙灘帳篷，為台灣豪華露營星空帳與自然野營不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "hotspring",
    "icon": "♨️",
    "shortTitle": "名湯溫泉",
    "zhTitle": "名湯溫泉",
    "enTitle": "RELAX HOT SPRINGS",
    "name": "全台極上溫泉名湯與私湯",
    "bannerImg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop",
    "title": "Natural Thermal Spas · Healing Waters Across the Island",
    "subtitle": "北投白磺牛奶湯、礁溪碳酸氫鈉美人湯與關子嶺黑色泥漿溫泉",
    "deckBg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "♨️",
        "title": "北投日式數寄屋私湯",
        "desc": "傳承加賀屋正宗日式女將服務，品味青磺與白磺名泉洗滌。"
      },
      {
        "icon": "💆",
        "title": "礁溪美人湯一泊二食",
        "desc": "無色無味的弱鹼性碳酸氫鈉泉，潤澤肌膚搭配在地溫泉蔬菜。"
      },
      {
        "icon": "🌋",
        "title": "關子嶺天然泥漿黑湯",
        "desc": "全台唯一黑色泥漿溫泉，富含天然礦物泥，養顏美容極致。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】名湯溫泉極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "捷運北投站 ➔ 新北投地熱谷 ➔ 北投溫泉博物館 ➔ 麗禧溫泉白磺冷熱石池 ➔ 北投市場吃肉羹。"
          }
        ]
      },
      {
        "planName": "【2 日遊】名湯溫泉雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "抵達礁溪 ➔ 湯圍溝溫泉魚去角質 ➔ 寒沐或老爺露天風呂泡湯一泊二食"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "漫步五峰旗瀑布 ➔ 空ㄟ農場俯瞰蘭陽平原夜景返程"
          }
        ]
      },
      {
        "planName": "【3 日遊】名湯溫泉全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台中谷關溫泉巡禮 ➔ 漫步捎來步道吊橋"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "前進台南白河關子嶺 ➔ 浸泡全台唯一黑色泥漿溫泉美肌 ➔ 吃火山甕仔雞"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "探訪水火同源奇景 ➔ 嘉義高鐵返程"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "日勝生加賀屋純日式數寄屋白磺",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・日勝生加賀屋純日式數寄屋白磺，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "麗禧大磺嘴第一道泉冷熱雙池",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・麗禧大磺嘴第一道泉冷熱雙池，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "三二行館私人極簡禪意會所",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・三二行館私人極簡禪意會所，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "北投老爺健康水療客房熱湯",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・北投老爺健康水療客房熱湯，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "地熱谷白煙硫磺手湯體驗",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・地熱谷白煙硫磺手湯體驗，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "陽明山冷水坑免費低溫白湯",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・陽明山冷水坑免費低溫白湯，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "馥蘭朵南勢溪景觀雙人湯屋",
        "en": "名湯溫泉 Curated Spot",
        "tag": "新北烏來 · 精選地標",
        "desc": "新北烏來・馥蘭朵南勢溪景觀雙人湯屋，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "璞石麗緻清水模特色桶型湯屋",
        "en": "名湯溫泉 Curated Spot",
        "tag": "新北烏來 · 精選地標",
        "desc": "新北烏來・璞石麗緻清水模特色桶型湯屋，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "天籟兩千坪湧泉水樂園",
        "en": "名湯溫泉 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・天籟兩千坪湧泉水樂園，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "舊金山總督日治招待所海底溫泉",
        "en": "名湯溫泉 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・舊金山總督日治招待所海底溫泉，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "礁溪老爺蘭陽平原野天風呂",
        "en": "名湯溫泉 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・礁溪老爺蘭陽平原野天風呂，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "寒沐高雅寬敞溫水水療池",
        "en": "名湯溫泉 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・寒沐高雅寬敞溫水水療池，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "呆水溫泉香杉原木靜謐私湯",
        "en": "名湯溫泉 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・呆水溫泉香杉原木靜謐私湯，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "長榮鳳凰千坪慢活大尺寸石池",
        "en": "名湯溫泉 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・長榮鳳凰千坪慢活大尺寸石池，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "湯圍溝戶外免費木亭溫泉魚",
        "en": "名湯溫泉 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・湯圍溝戶外免費木亭溫泉魚，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "鳩之澤森林藍寶石溫泉蛋池",
        "en": "名湯溫泉 Curated Spot",
        "tag": "宜蘭大同 · 精選地標",
        "desc": "宜蘭大同・鳩之澤森林藍寶石溫泉蛋池，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "泰安觀止鐵木共構清水模綠建築",
        "en": "名湯溫泉 Curated Spot",
        "tag": "苗栗泰安 · 精選地標",
        "desc": "苗栗泰安・泰安觀止鐵木共構清水模綠建築，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "日出南洋茅草涼亭滑嫩弱鹼泉",
        "en": "名湯溫泉 Curated Spot",
        "tag": "苗栗泰安 · 精選地標",
        "desc": "苗栗泰安・日出南洋茅草涼亭滑嫩弱鹼泉，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "星野虹夕諾雅谷關樓中樓半露天風呂",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・星野虹夕諾雅谷關樓中樓半露天風呂，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "谷關統一泰雅五行五色湯池",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台中和平 · 精選地標",
        "desc": "台中和平・谷關統一泰雅五行五色湯池，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "東埔帝綸弱鹼性玉山洗滌泉",
        "en": "名湯溫泉 Curated Spot",
        "tag": "南投信義 · 精選地標",
        "desc": "南投信義・東埔帝綸弱鹼性玉山洗滌泉，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "廬山清澈可飲透明優質名湯",
        "en": "名湯溫泉 Curated Spot",
        "tag": "南投仁愛 · 精選地標",
        "desc": "南投仁愛・廬山清澈可飲透明優質名湯，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "關子嶺儷景天然黑色泥漿美肌湯",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台南白河 · 精選地標",
        "desc": "台南白河・關子嶺儷景天然黑色泥漿美肌湯，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "景大中歐莊園泥漿水療面膜",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台南白河 · 精選地標",
        "desc": "台南白河・景大中歐莊園泥漿水療面膜，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "不老溫泉荖濃溪長生滑潤水",
        "en": "名湯溫泉 Curated Spot",
        "tag": "高雄六龜 · 精選地標",
        "desc": "高雄六龜・不老溫泉荖濃溪長生滑潤水，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "四重溪茴香戀戀地中海家庭風呂",
        "en": "名湯溫泉 Curated Spot",
        "tag": "屏東車城 · 精選地標",
        "desc": "屏東車城・四重溪茴香戀戀地中海家庭風呂，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "四重溪公園日式神社鳥居足湯",
        "en": "名湯溫泉 Curated Spot",
        "tag": "屏東車城 · 精選地標",
        "desc": "屏東車城・四重溪公園日式神社鳥居足湯，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "知本老爺天幕星空原民風呂",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台東卑南 · 精選地標",
        "desc": "台東卑南・知本老爺天幕星空原民風呂，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "知本金聯世紀挑高山嵐露天泉",
        "en": "名湯溫泉 Curated Spot",
        "tag": "台東卑南 · 精選地標",
        "desc": "台東卑南・知本金聯世紀挑高山嵐露天泉，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      },
      {
        "name": "紅葉溫泉木構老榻榻米石砌池",
        "en": "名湯溫泉 Curated Spot",
        "tag": "花蓮萬榮 · 精選地標",
        "desc": "花蓮萬榮・紅葉溫泉木構老榻榻米石砌池，為台灣全台極上溫泉名湯與私湯不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "nightview",
    "icon": "🌃",
    "shortTitle": "百萬夜景",
    "zhTitle": "百萬夜景",
    "enTitle": "ROMANTIC NIGHT VIEWS",
    "name": "高空景觀餐廳與浪漫夜色",
    "bannerImg": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1600&auto=format&fit=crop",
    "title": "Panoramic City Lights · Skyline Dining & Rooftop Bars",
    "subtitle": "象山俯瞰台北 101、陽明山草山夜景火鍋、台中望高寮與高雄愛河夜色",
    "deckBg": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🍸",
        "title": "微風南山高空露天酒吧",
        "desc": "緊鄰 101 大樓 48 樓高空，品飲特調雞尾酒俯瞰信義繁華。"
      },
      {
        "icon": "🎠",
        "title": "草山夜未眠情人木馬",
        "desc": "旋轉木馬與景觀鳥巢座位，一邊吃熱騰騰火鍋一邊看盆地燈海。"
      },
      {
        "icon": "🌄",
        "title": "象山六巨石日落夜景",
        "desc": "步行 20 分鐘即可抵達的城市制高點，拍攝絕美金黃夕陽染紅 101。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】百萬夜景極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "傍晚搭象山步道登六巨石拍攝 101 落日晚霞 ➔ 信義區微風南山高空酒吧喝調酒看百萬夜景。"
          }
        ]
      },
      {
        "planName": "【2 日遊】百萬夜景雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台北內湖碧山巖看台北盆地 ➔ 陽明山草山夜未眠吃火鍋看夜景（宿天母商圈）"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "漫步淡水漁人碼頭情人橋吹海風看水岸光雕"
          }
        ]
      },
      {
        "planName": "【3 日遊】百萬夜景全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台北信義區高空酒吧巡禮"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "轉往台中沙鹿黑森林清水模景觀餐廳俯瞰海線燈火 ➔ 望高寮公園"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "高雄壽山忠烈祠 LOVE 觀景台俯瞰愛河與港灣夜色"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "CÉ LA VI 微風南山48樓貼身101",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・CÉ LA VI 微風南山48樓貼身101，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "草山夜未眠鳥巢情人旋轉木馬",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・草山夜未眠鳥巢情人旋轉木馬，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "八卦夜未眠階梯式戶外炭烤座",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・八卦夜未眠階梯式戶外炭烤座，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "萬豪酒店INGES看飛機起降",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・萬豪酒店INGES看飛機起降，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "屋頂上純白峇里島階梯沙發包廂",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・屋頂上純白峇里島階梯沙發包廂，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "莫爾頓牛排戶外露台信義奢華",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・莫爾頓牛排戶外露台信義奢華，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "爛醉咖啡透明星空球型溫室餐酒",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北大安 · 精選地標",
        "desc": "台北大安・爛醉咖啡透明星空球型溫室餐酒，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "碧山巖開漳聖王廟俯瞰盆地",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北內湖 · 精選地標",
        "desc": "台北內湖・碧山巖開漳聖王廟俯瞰盆地，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "象山六巨石登頂俯瞰市中心",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・象山六巨石登頂俯瞰市中心，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "貓空邀月茶坊露天星空泡茶夜景",
        "en": "百萬夜景 Curated Spot",
        "tag": "台北文山 · 精選地標",
        "desc": "台北文山・貓空邀月茶坊露天星空泡茶夜景，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "水碓觀景公園層疊木棧燈火",
        "en": "百萬夜景 Curated Spot",
        "tag": "新北五股 · 精選地標",
        "desc": "新北五股・水碓觀景公園層疊木棧燈火，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "碧潭水岸水舞光雕吊橋倒影",
        "en": "百萬夜景 Curated Spot",
        "tag": "新北新店 · 精選地標",
        "desc": "新北新店・碧潭水岸水舞光雕吊橋倒影，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "空ㄟ農場跑馬古道接駁全景蘭陽燈海",
        "en": "百萬夜景 Curated Spot",
        "tag": "宜蘭礁溪 · 精選地標",
        "desc": "宜蘭礁溪・空ㄟ農場跑馬古道接駁全景蘭陽燈海，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "山頂會館戶外玻璃天空步道",
        "en": "百萬夜景 Curated Spot",
        "tag": "宜蘭員山 · 精選地標",
        "desc": "宜蘭員山・山頂會館戶外玻璃天空步道，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "古山星辰近距離看桃機客機降落",
        "en": "百萬夜景 Curated Spot",
        "tag": "桃園蘆竹 · 精選地標",
        "desc": "桃園蘆竹・古山星辰近距離看桃機客機降落，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "乳姑山平坦茶園遠眺台北101",
        "en": "百萬夜景 Curated Spot",
        "tag": "桃園龍潭 · 精選地標",
        "desc": "桃園龍潭・乳姑山平坦茶園遠眺台北101，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "黑森林幾何清水模海線燈火",
        "en": "百萬夜景 Curated Spot",
        "tag": "台中沙鹿 · 精選地標",
        "desc": "台中沙鹿・黑森林幾何清水模海線燈火，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "望高寮弧形看台全景七期天際線",
        "en": "百萬夜景 Curated Spot",
        "tag": "台中大肚 · 精選地標",
        "desc": "台中大肚・望高寮弧形看台全景七期天際線，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "眺高純白玻璃屋俯瞰大坑萬家燈火",
        "en": "百萬夜景 Curated Spot",
        "tag": "台中北屯 · 精選地標",
        "desc": "台中北屯・眺高純白玻璃屋俯瞰大坑萬家燈火，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "山海戀環山路全景高台",
        "en": "百萬夜景 Curated Spot",
        "tag": "彰化花壇 · 精選地標",
        "desc": "彰化花壇・山海戀環山路全景高台，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "星月天空草泥馬陪看高鐵流光",
        "en": "百萬夜景 Curated Spot",
        "tag": "南投南投 · 精選地標",
        "desc": "南投南投・星月天空草泥馬陪看高鐵流光，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "華山派主角梯田遠眺六輕燈火",
        "en": "百萬夜景 Curated Spot",
        "tag": "雲林古坑 · 精選地標",
        "desc": "雲林古坑・華山派主角梯田遠眺六輕燈火，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "仙地咖啡高海拔微風吹拂",
        "en": "百萬夜景 Curated Spot",
        "tag": "雲林古坑 · 精選地標",
        "desc": "雲林古坑・仙地咖啡高海拔微風吹拂，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "清豐濤月足湯邊泡腳邊看仁義潭",
        "en": "百萬夜景 Curated Spot",
        "tag": "嘉義番路 · 精選地標",
        "desc": "嘉義番路・清豐濤月足湯邊泡腳邊看仁義潭，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "大魚的祝福彩色鑲嵌玻璃夜間點燈",
        "en": "百萬夜景 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・大魚的祝福彩色鑲嵌玻璃夜間點燈，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "Indigo酒店頂樓Pier No.1露天吧",
        "en": "百萬夜景 Curated Spot",
        "tag": "高雄新興 · 精選地標",
        "desc": "高雄新興・Indigo酒店頂樓Pier No.1露天吧，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "壽山忠烈祠LOVE觀景台港灣全景",
        "en": "百萬夜景 Curated Spot",
        "tag": "高雄鼓山 · 精選地標",
        "desc": "高雄鼓山・壽山忠烈祠LOVE觀景台港灣全景，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "柴山大自然海蝕斷崖夕陽漁火",
        "en": "百萬夜景 Curated Spot",
        "tag": "高雄鼓山 · 精選地標",
        "desc": "高雄鼓山・柴山大自然海蝕斷崖夕陽漁火，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "山男咖啡紅柴坑高台星空晚霞",
        "en": "百萬夜景 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・山男咖啡紅柴坑高台星空晚霞，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      },
      {
        "name": "星星部落草坪煤油燈俯瞰棋盤燈火",
        "en": "百萬夜景 Curated Spot",
        "tag": "台東卑南 · 精選地標",
        "desc": "台東卑南・星星部落草坪煤油燈俯瞰棋盤燈火，為台灣高空景觀餐廳與浪漫夜色不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "roadtrip",
    "icon": "🚗",
    "shortTitle": "壯遊環島",
    "zhTitle": "壯遊環島",
    "enTitle": "ROUND TAIWAN ROAD TRIP",
    "name": "台灣極點公路與海線自駕",
    "bannerImg": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&auto=format&fit=crop",
    "title": "Epic Highway Journeys · Coastlines, Mountains & 4 Extremes",
    "subtitle": "四極點燈塔奔馳、公路最高點武嶺 3275m、最美蘇花改與南迴公路",
    "deckBg": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🧭",
        "title": "搜集全台四極點燈塔",
        "desc": "極北富貴角、極東三貂角、極南鵝鑾鼻與極西國聖港燈塔大滿貫。"
      },
      {
        "icon": "🏔️",
        "title": "翻越台灣公路之巔武嶺",
        "desc": "海拔 3275 公尺的公路之王，壯麗合歡山箭竹草原就在車窗兩側。"
      },
      {
        "icon": "🌊",
        "title": "台東金崙高架海景橋",
        "desc": "懸空於太平洋上空的巨型跨海公路，彷彿行駛在蔚藍波浪之上。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】壯遊環島極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "台灣極北出發 ➔ 富貴角燈塔 ➔ 石門肉粽 ➔ 萬里龜吼漁港 ➔ 極東三貂角燈塔（北部雙極點一日奔馳）。"
          }
        ]
      },
      {
        "planName": "【2 日遊】壯遊環島雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台北出發沿台 9 線翻越九彎十八拐 ➔ 抵達花蓮市吃包子與炸彈蔥油餅"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "奔馳花東台 11 線濱海公路 ➔ 直奔台東鐵花村"
          }
        ]
      },
      {
        "planName": "【3 日遊】壯遊環島全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台北出發直奔南投日月潭環潭公路單車騎行"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "翻越台灣公路最高點武嶺（海拔 3275m）➔ 夜宿太魯閣峽谷"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "經蘇花改沿太平洋懸崖景觀公路返程"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "富貴角燈塔",
        "en": "壯遊環島 Curated Spot",
        "tag": "新北石門 · 精選地標",
        "desc": "新北石門・富貴角燈塔（極北點黑白八角燈塔），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "三貂角燈塔",
        "en": "壯遊環島 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・三貂角燈塔（極東點第一道日出），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "鵝鑾鼻燈塔",
        "en": "壯遊環島 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・鵝鑾鼻燈塔（極南點巴士海峽交界），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "國聖港燈塔",
        "en": "壯遊環島 Curated Spot",
        "tag": "台南七股 · 精選地標",
        "desc": "台南七股・國聖港燈塔（極西點七股大沙漠黑鐵塔），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "合歡山武嶺碑",
        "en": "壯遊環島 Curated Spot",
        "tag": "南投仁愛 · 精選地標",
        "desc": "南投仁愛・合歡山武嶺碑（台灣公路最高點3275m），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "日月潭向山遊客中心環湖最美木棧道",
        "en": "壯遊環島 Curated Spot",
        "tag": "南投魚池 · 精選地標",
        "desc": "南投魚池・日月潭向山遊客中心環湖最美木棧道，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "蘇花改太魯閣景觀大道清水斷崖段",
        "en": "壯遊環島 Curated Spot",
        "tag": "花蓮秀林 · 精選地標",
        "desc": "花蓮秀林・蘇花改太魯閣景觀大道清水斷崖段，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "金崙高架橋",
        "en": "壯遊環島 Curated Spot",
        "tag": "台東太麻里 · 精選地標",
        "desc": "台東太麻里・金崙高架橋（全台最美懸空太平洋公路），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "成廣澳文化地景台11線休息站",
        "en": "壯遊環島 Curated Spot",
        "tag": "台東成功 · 精選地標",
        "desc": "台東成功・成廣澳文化地景台11線休息站，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "壽峠鐵馬驛站",
        "en": "壯遊環島 Curated Spot",
        "tag": "屏東牡丹 · 精選地標",
        "desc": "屏東牡丹・壽峠鐵馬驛站（南迴公路最高點打卡），為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "雙流國家森林遊樂區南迴森呼吸",
        "en": "壯遊環島 Curated Spot",
        "tag": "屏東獅子 · 精選地標",
        "desc": "屏東獅子・雙流國家森林遊樂區南迴森呼吸，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "井仔腳瓦盤鹽田棋盤夕陽",
        "en": "壯遊環島 Curated Spot",
        "tag": "台南北門 · 精選地標",
        "desc": "台南北門・井仔腳瓦盤鹽田棋盤夕陽，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "白水湖壽島水上馬桶退潮摩西路",
        "en": "壯遊環島 Curated Spot",
        "tag": "嘉義東石 · 精選地標",
        "desc": "嘉義東石・白水湖壽島水上馬桶退潮摩西路，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "成龍濕地水上竹編裝置藝術",
        "en": "壯遊環島 Curated Spot",
        "tag": "雲林口湖 · 精選地標",
        "desc": "雲林口湖・成龍濕地水上竹編裝置藝術，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "海空步道紅樹林濕地木棧道",
        "en": "壯遊環島 Curated Spot",
        "tag": "彰化芳苑 · 精選地標",
        "desc": "彰化芳苑・海空步道紅樹林濕地木棧道，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "高美濕地風車大道木棧道天空之鏡",
        "en": "壯遊環島 Curated Spot",
        "tag": "台中清水 · 精選地標",
        "desc": "台中清水・高美濕地風車大道木棧道天空之鏡，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "半天寮好望角大風車俯瞰海線鐵道",
        "en": "壯遊環島 Curated Spot",
        "tag": "苗栗後龍 · 精選地標",
        "desc": "苗栗後龍・半天寮好望角大風車俯瞰海線鐵道，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "香山濕地賞蟹步道心形石滬夕陽",
        "en": "壯遊環島 Curated Spot",
        "tag": "新竹香山 · 精選地標",
        "desc": "新竹香山・香山濕地賞蟹步道心形石滬夕陽，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "竹圍漁港彩虹跨海拱橋海鮮",
        "en": "壯遊環島 Curated Spot",
        "tag": "桃園大園 · 精選地標",
        "desc": "桃園大園・竹圍漁港彩虹跨海拱橋海鮮，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "漁人碼頭情人橋淡江夕照",
        "en": "壯遊環島 Curated Spot",
        "tag": "新北淡水 · 精選地標",
        "desc": "新北淡水・漁人碼頭情人橋淡江夕照，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "南方澳觀景台俯瞰內埤情人弧灣",
        "en": "壯遊環島 Curated Spot",
        "tag": "宜蘭蘇澳 · 精選地標",
        "desc": "宜蘭蘇澳・南方澳觀景台俯瞰內埤情人弧灣，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "新社梯田太平洋懸崖黃金稻浪",
        "en": "壯遊環島 Curated Spot",
        "tag": "花蓮豐濱 · 精選地標",
        "desc": "花蓮豐濱・新社梯田太平洋懸崖黃金稻浪，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "金剛大道筆直直通太平洋海天一色",
        "en": "壯遊環島 Curated Spot",
        "tag": "台東長濱 · 精選地標",
        "desc": "台東長濱・金剛大道筆直直通太平洋海天一色，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "武陵綠色隧道樟樹林蔭林道",
        "en": "壯遊環島 Curated Spot",
        "tag": "台東鹿野 · 精選地標",
        "desc": "台東鹿野・武陵綠色隧道樟樹林蔭林道，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "港仔大沙漠九棚沙漠吉普飆沙",
        "en": "壯遊環島 Curated Spot",
        "tag": "屏東滿州 · 精選地標",
        "desc": "屏東滿州・港仔大沙漠九棚沙漠吉普飆沙，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "海口港看海美術館落山風裝置藝術",
        "en": "壯遊環島 Curated Spot",
        "tag": "屏東車城 · 精選地標",
        "desc": "屏東車城・海口港看海美術館落山風裝置藝術，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "永新漁港鑽石水石斑魚故鄉",
        "en": "壯遊環島 Curated Spot",
        "tag": "高雄永安 · 精選地標",
        "desc": "高雄永安・永新漁港鑽石水石斑魚故鄉，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "台江國家公園高腳屋水上純白高蹺",
        "en": "壯遊環島 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・台江國家公園高腳屋水上純白高蹺，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "落日大道直通大海的黃金夕陽坡",
        "en": "壯遊環島 Curated Spot",
        "tag": "苗栗通霄 · 精選地標",
        "desc": "苗栗通霄・落日大道直通大海的黃金夕陽坡，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      },
      {
        "name": "北關海潮公園單面山浪花拍岸",
        "en": "壯遊環島 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・北關海潮公園單面山浪花拍岸，為台灣台灣極點公路與海線自駕不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "diving",
    "icon": "🤿",
    "shortTitle": "湛藍潛水",
    "zhTitle": "湛藍潛水",
    "enTitle": "OCEAN DIVING",
    "name": "世界級能見度海龜與珊瑚海",
    "bannerImg": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&auto=format&fit=crop",
    "title": "Crystal Clear Depths · Sea Turtles, Reefs & Shipwrecks",
    "subtitle": "綠島石朗水下郵筒、小琉球野生綠蠵龜共游、蘭嶼八代灣沉船與墾丁後壁湖",
    "deckBg": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "📬",
        "title": "綠島石朗海底寄明信片",
        "desc": "潛入 11 公尺深的世界最深海底郵筒，投遞特製防水紀念明信片。"
      },
      {
        "icon": "🐢",
        "title": "小琉球潮間帶海龜共游",
        "desc": "全台最穩定遇見野生海龜水域，與海龜並肩浮潛同游珊瑚礁水道。"
      },
      {
        "icon": "🚢",
        "title": "蘭嶼八代灣沉船探險",
        "desc": "沈睡在 30 米深藍黑潮水底的巨大貨輪，世界級的自由潛水聖地。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】湛藍潛水極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "清晨東港搭船至小琉球 ➔ 美人洞自由潛水與野生綠蠵龜共游 ➔ 浮潛拍照 ➔ 搭傍晚船班返回。"
          }
        ]
      },
      {
        "planName": "【2 日遊】湛藍潛水雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "抵達墾丁後壁湖 ➔ 軟珊瑚區與小丑魚生態潛水 ➔ 晚餐吃後壁湖生魚片（宿恆春）"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "出水口餵魚區體驗潛水 ➔ 南灣水上摩托車返程"
          }
        ]
      },
      {
        "planName": "【3 日遊】湛藍潛水全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台東搭船至綠島石朗水下郵筒潛水寄明信片"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "船潛挑戰鋼鐵礁燕魚群與大白沙珊瑚花園"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "帆船鼻草原晨曦 ➔ 買海草酥搭船賦歸"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "石朗水下郵筒",
        "en": "湛藍潛水 Curated Spot",
        "tag": "綠島南寮 · 精選地標",
        "desc": "綠島南寮・石朗水下郵筒（海底寄信世界級能見度），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "鋼鐵礁",
        "en": "湛藍潛水 Curated Spot",
        "tag": "綠島中寮 · 精選地標",
        "desc": "綠島中寮・鋼鐵礁（人工魚礁人工十字架與圓眼燕魚群），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "大白沙浮潛區",
        "en": "湛藍潛水 Curated Spot",
        "tag": "綠島溫泉 · 精選地標",
        "desc": "綠島溫泉・大白沙浮潛區（海底軟珊瑚大花園），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "柴口浮潛區",
        "en": "湛藍潛水 Curated Spot",
        "tag": "綠島公館 · 精選地標",
        "desc": "綠島公館・柴口浮潛區（平坦潮間帶礁岩安全浮潛區），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "小丑島",
        "en": "湛藍潛水 Curated Spot",
        "tag": "綠島公館 · 精選地標",
        "desc": "綠島公館・小丑島（海葵與小丑魚家族棲地），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "八代灣沉船",
        "en": "湛藍潛水 Curated Spot",
        "tag": "蘭嶼椰油 · 精選地標",
        "desc": "蘭嶼椰油・八代灣沉船（深藍黑潮水色壯觀沉船遺跡），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "玉女岩外海花園",
        "en": "湛藍潛水 Curated Spot",
        "tag": "蘭嶼朗島 · 精選地標",
        "desc": "蘭嶼朗島・玉女岩外海花園（水質清澈透光度達30m），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "東清潟湖秘境",
        "en": "湛藍潛水 Curated Spot",
        "tag": "蘭嶼東清 · 精選地標",
        "desc": "蘭嶼東清・東清潟湖秘境（天然避風跳水浮潛池），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "開元港外斷層",
        "en": "湛藍潛水 Curated Spot",
        "tag": "蘭嶼紅頭 · 精選地標",
        "desc": "蘭嶼紅頭・開元港外斷層（深邃垂直大斷崖水下奇景），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "花瓶岩",
        "en": "湛藍潛水 Curated Spot",
        "tag": "小琉球白沙 · 精選地標",
        "desc": "小琉球白沙・花瓶岩（海龜密度最高初學浮潛區），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "美人洞",
        "en": "湛藍潛水 Curated Spot",
        "tag": "小琉球琉球 · 精選地標",
        "desc": "小琉球琉球・美人洞（平緩珊瑚礁水道與海龜共游），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "杉福破船",
        "en": "湛藍潛水 Curated Spot",
        "tag": "小琉球杉福 · 精選地標",
        "desc": "小琉球杉福・杉福破船（沈船探險與花園鰻群），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "厚石群礁",
        "en": "湛藍潛水 Curated Spot",
        "tag": "小琉球天福 · 精選地標",
        "desc": "小琉球天福・厚石群礁（裙礁天然水道與無波浪水域），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "大福西海廢沉豬",
        "en": "湛藍潛水 Curated Spot",
        "tag": "小琉球大福 · 精選地標",
        "desc": "小琉球大福・大福西海廢沉豬（獨特水下人工裝置藝術），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "後壁湖軟珊瑚區",
        "en": "湛藍潛水 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・後壁湖軟珊瑚區（色彩繽紛鹿角珊瑚森林），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "後壁湖出水口",
        "en": "湛藍潛水 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・後壁湖出水口（微溫水流小丑魚餵魚區），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "萬里桐",
        "en": "湛藍潛水 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・萬里桐（天然潮池清澈避風浮潛勝地），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "合界排溝沉船",
        "en": "湛藍潛水 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・合界排溝沉船（進階沉船自由潛水探險點），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "鵝鑾鼻雷打石",
        "en": "湛藍潛水 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・鵝鑾鼻雷打石（裙礁珊瑚斷層大景），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "龍洞四季灣",
        "en": "湛藍潛水 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・龍洞四季灣（北台灣最齊全初階潛水基地），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "龍洞一號看台",
        "en": "湛藍潛水 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・龍洞一號看台（礁石跳水與自由潛水深度水域），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "蝙蝠洞潮差公園",
        "en": "湛藍潛水 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・蝙蝠洞潮差公園（天然海蝕洞地形水下漫步），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "南雅奇岩外海",
        "en": "湛藍潛水 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・南雅奇岩外海（奇特水下海蝕溝與雀鯛生態），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "潮境海洋保育區",
        "en": "湛藍潛水 Curated Spot",
        "tag": "基隆中正 · 精選地標",
        "desc": "基隆中正・潮境海洋保育區（魚群極為豐富花園鰻天堂），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "和平島海水游泳池",
        "en": "湛藍潛水 Curated Spot",
        "tag": "基隆中正 · 精選地標",
        "desc": "基隆中正・和平島海水游泳池（純淨天然無污染封閉海泳區），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "豆腐岬海灣",
        "en": "湛藍潛水 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・豆腐岬海灣（半封閉海灣適合初學浮潛SUP），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "龜山島牛奶海",
        "en": "湛藍潛水 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・龜山島牛奶海（海底火山硫磺噴湧漸層夢幻藍），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "鎖港海底郵筒",
        "en": "湛藍潛水 Curated Spot",
        "tag": "澎湖馬公 · 精選地標",
        "desc": "澎湖馬公・鎖港海底郵筒（海底寄信與浮潛人工魚礁），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "月鯉灣",
        "en": "湛藍潛水 Curated Spot",
        "tag": "澎湖七美 · 精選地標",
        "desc": "澎湖七美・月鯉灣（世界級放射狀紫色鹿角珊瑚海），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      },
      {
        "name": "東吉之眼",
        "en": "湛藍潛水 Curated Spot",
        "tag": "澎湖望安 · 精選地標",
        "desc": "澎湖望安・東吉之眼（澎湖南方四島國家公園透明深藍），為台灣世界級能見度海龜與珊瑚海不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "surfing",
    "icon": "🏄",
    "shortTitle": "熱血衝浪",
    "zhTitle": "熱血衝浪",
    "enTitle": "WAVE SURFING",
    "name": "全台國際級浪點與浪人聚落",
    "bannerImg": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1600&auto=format&fit=crop",
    "title": "Chasing the Pacific Swell · Taiwan Iconic Surf Breaks",
    "subtitle": "宜蘭烏石港新手浪、台東金尊國際長浪賽場與墾丁佳樂水長浪天堂",
    "deckBg": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🏄",
        "title": "烏石港新手一對一教學",
        "desc": "沙底平緩、浪型穩定，專業教練帶領第一次站上浪板追浪。"
      },
      {
        "icon": "🌊",
        "title": "台東金尊漁港長浪挑戰",
        "desc": "世界衝浪巡迴賽指定賽場，卵石浪點產生立體管浪極限狂飆。"
      },
      {
        "icon": "🌴",
        "title": "佳樂水浪人聚落體驗",
        "desc": "長板愛好者聖地，晨曦第一道曙光照耀下享受無限綿延長浪。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】熱血衝浪極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "台北搭客運直達頭城烏石港 ➔ 租浪板與教練教學 ➔ 下午在港邊海景咖啡吃披薩 ➔ 返程。"
          }
        ]
      },
      {
        "planName": "【2 日遊】熱血衝浪雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "宜蘭外澳雙獅沙灘享受穩定浪況 ➔ 晚餐吃頭城現撈海鮮 ➔ 宿衝浪民宿"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "晨曦日出浪 ➔ 礁溪泡溫泉舒緩肌肉"
          }
        ]
      },
      {
        "planName": "【3 日遊】熱血衝浪全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "抵達台東東河金尊漁港 ➔ 體驗國際級長浪衝擊"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "轉戰屏東佳樂水長浪天堂（宿墾丁大街）"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "南灣俱樂部水上體驗 ➔ 左營高鐵返程"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "烏石港北堤",
        "en": "熱血衝浪 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・烏石港北堤（沙底平緩全台最大初學者浪點），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "外澳雙獅沙灘",
        "en": "熱血衝浪 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・外澳雙獅沙灘（礁石沙底混合長浪好推），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "大溪蜜月灣",
        "en": "熱血衝浪 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・大溪蜜月灣（弧形海灣中階短板浪人天堂），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "無尾港衝浪區",
        "en": "熱血衝浪 Curated Spot",
        "tag": "宜蘭蘇澳 · 精選地標",
        "desc": "宜蘭蘇澳・無尾港衝浪區（人潮較少水質清澈的私房浪點），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "金尊漁港",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台東東河 · 精選地標",
        "desc": "台東東河・金尊漁港（台灣國際衝浪公開賽頂級主場），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "東河河口浪點",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台東東河 · 精選地標",
        "desc": "台東東河・東河河口浪點（卵石浪點浪型立體起伏大），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "基翬漁港",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台東成功 · 精選地標",
        "desc": "台東成功・基翬漁港（進階左跑浪管浪狂熱勝地），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "宜灣卡片教堂外海",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台東成功 · 精選地標",
        "desc": "台東成功・宜灣卡片教堂外海（人煙罕至定點浪花長），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "佳樂水漁村公園",
        "en": "熱血衝浪 Curated Spot",
        "tag": "屏東滿州 · 精選地標",
        "desc": "屏東滿州・佳樂水漁村公園（全台長板浪人心中第一聖地），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "南灣海灘",
        "en": "熱血衝浪 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・南灣海灘（夏日微風熱鬧水上摩托車與衝浪區），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "白沙灣浪點",
        "en": "熱血衝浪 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・白沙灣浪點（李安少年Pi取景平靜浪區），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "風吹砂外海",
        "en": "熱血衝浪 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・風吹砂外海（秋冬落山風加持極限快浪點），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "中角灣國際衝浪基地",
        "en": "熱血衝浪 Curated Spot",
        "tag": "新北金山 · 精選地標",
        "desc": "新北金山・中角灣國際衝浪基地（全配備遊客中心沙灘浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "白沙灣西側浪點",
        "en": "熱血衝浪 Curated Spot",
        "tag": "新北石門 · 精選地標",
        "desc": "新北石門・白沙灣西側浪點（夏日西南氣流好推微浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "淺水灣外海",
        "en": "熱血衝浪 Curated Spot",
        "tag": "新北三芝 · 精選地標",
        "desc": "新北三芝・淺水灣外海（浪況溫和適合初學趴板練習），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "福隆雙溪河口",
        "en": "熱血衝浪 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・福隆雙溪河口（沙嘴內外雙浪潮長板短板皆宜），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "旗津海水浴場",
        "en": "熱血衝浪 Curated Spot",
        "tag": "高雄旗津 · 精選地標",
        "desc": "高雄旗津・旗津海水浴場（西南氣流長浪高雄浪人基地），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "南寮漁港沙灘",
        "en": "熱血衝浪 Curated Spot",
        "tag": "高雄彌陀 · 精選地標",
        "desc": "高雄彌陀・南寮漁港沙灘（平緩微浪初學者防坡堤內安全區），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "漁光島月牙灣",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・漁光島月牙灣（防波堤阻擋風浪極為平緩新手SUP浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "黃金海岸沙灘",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台南南區 · 精選地標",
        "desc": "台南南區・黃金海岸沙灘（寬闊海灘夕陽西下長浪拍岸），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "假日之森",
        "en": "熱血衝浪 Curated Spot",
        "tag": "苗栗竹南 · 精選地標",
        "desc": "苗栗竹南・假日之森（全台西海岸風箏衝浪與沙灘浪重鎮），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "大安濱海樂園",
        "en": "熱血衝浪 Curated Spot",
        "tag": "台中大安 · 精選地標",
        "desc": "台中大安・大安濱海樂園（風力強勁風翼水翼衝浪基地），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "南濱化仁海堤",
        "en": "熱血衝浪 Curated Spot",
        "tag": "花蓮吉安 · 精選地標",
        "desc": "花蓮吉安・南濱化仁海堤（花蓮在地浪人私房太平洋點），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "鹽寮海中天外海",
        "en": "熱血衝浪 Curated Spot",
        "tag": "花蓮壽豐 · 精選地標",
        "desc": "花蓮壽豐・鹽寮海中天外海（依山傍海斷崖下的深藍海浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "磯崎海水浴場",
        "en": "熱血衝浪 Curated Spot",
        "tag": "花蓮豐濱 · 精選地標",
        "desc": "花蓮豐濱・磯崎海水浴場（阿美族部落環抱金色沙灘浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "山水沙灘浪點",
        "en": "熱血衝浪 Curated Spot",
        "tag": "澎湖馬公 · 精選地標",
        "desc": "澎湖馬公・山水沙灘浪點（澎湖本島唯一穩定沙灘浪點），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "隘門沙灘外海水面",
        "en": "熱血衝浪 Curated Spot",
        "tag": "澎湖湖西 · 精選地標",
        "desc": "澎湖湖西・隘門沙灘外海水面（長浪衝擊適合水翼衝浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "綠島燈塔海灣",
        "en": "熱血衝浪 Curated Spot",
        "tag": "綠島中寮 · 精選地標",
        "desc": "綠島中寮・綠島燈塔海灣（冬季東北季風來襲罕見高難度浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "成功海灘浪區",
        "en": "熱血衝浪 Curated Spot",
        "tag": "金門金湖 · 精選地標",
        "desc": "金門金湖・成功海灘浪區（退潮沙灘綿延浪花溫柔），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      },
      {
        "name": "津沙聚落沙灘",
        "en": "熱血衝浪 Curated Spot",
        "tag": "馬祖南竿 · 精選地標",
        "desc": "馬祖南竿・津沙聚落沙灘（軍事碉堡前閩東石屋下的海浪），為台灣全台國際級浪點與浪人聚落不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "temple",
    "icon": "🥁",
    "shortTitle": "信仰廟會",
    "zhTitle": "信仰廟會",
    "enTitle": "TEMPLE FAIRS & RELIGION",
    "name": "百年傳統進香陣頭與遶境盛典",
    "bannerImg": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=1600&auto=format&fit=crop",
    "title": "Sacred Faith & Cultural Spectacle · Centuries of Devotion",
    "subtitle": "白沙屯粉紅超跑、大甲媽九天八夜遶境、東港燒王船與艋舺青山王暗訪",
    "deckBg": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🌸",
        "title": "白沙屯媽祖隨香徒步",
        "desc": "體驗無固定路線的神奇進香，感受沿途信眾免費奉茶結緣人情味。"
      },
      {
        "icon": "🚢",
        "title": "東港三年一科迎王燒王船",
        "desc": "見證耗資千萬木造王船在海灘燃燒化吉，壯烈神聖的民俗祭典。"
      },
      {
        "icon": "👺",
        "title": "官將首與陣頭威儀巡境",
        "desc": "新莊地藏庵大眾爺暗訪，面譜彩繪與步伐展現傳統陣頭力與美。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】信仰廟會極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "跟隨「粉紅超跑」白沙屯媽祖徒步進香數公里 ➔ 體驗沿途信徒免費奉茶結緣 ➔ 晚上吃廟口素齋。"
          }
        ]
      },
      {
        "planName": "【2 日遊】信仰廟會雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台中大甲鎮瀾宮參加媽祖起駕萬人盛典 ➔ 煙火照亮不夜城"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "隨香隊伍徒步跨越大度橋進入彰化 ➔ 吃彰化肉圓返程"
          }
        ]
      },
      {
        "planName": "【3 日遊】信仰廟會全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "抵達屏東東港參觀王船木作工藝 ➔ 東港夜市吃旗魚黑輪"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "參與東港迎王祭遷船遶境盛典 ➔ 陣頭神轎集結"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "凌晨見證燒王船祈福送煞壯麗儀式"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "大甲鎮瀾宮媽祖遶境",
        "en": "信仰廟會 Curated Spot",
        "tag": "台中大甲 · 精選地標",
        "desc": "台中大甲・大甲鎮瀾宮媽祖遶境（世界三大宗教盛事之一），為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "白沙屯拱天宮粉紅超跑徒步進香",
        "en": "信仰廟會 Curated Spot",
        "tag": "苗栗通霄 · 精選地標",
        "desc": "苗栗通霄・白沙屯拱天宮粉紅超跑徒步進香，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "東隆宮東港迎王三年一科燒王船",
        "en": "信仰廟會 Curated Spot",
        "tag": "屏東東港 · 精選地標",
        "desc": "屏東東港・東隆宮東港迎王三年一科燒王船，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "武廟元宵萬發蜂炮齊發激戰",
        "en": "信仰廟會 Curated Spot",
        "tag": "台南鹽水 · 精選地標",
        "desc": "台南鹽水・武廟元宵萬發蜂炮齊發激戰，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "朝天宮媽祖出巡炸轎吃炮大堆煙火",
        "en": "信仰廟會 Curated Spot",
        "tag": "雲林北港 · 精選地標",
        "desc": "雲林北港・朝天宮媽祖出巡炸轎吃炮大堆煙火，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "拱範宮開山媽祖國定古蹟出巡",
        "en": "信仰廟會 Curated Spot",
        "tag": "雲林麥寮 · 精選地標",
        "desc": "雲林麥寮・拱範宮開山媽祖國定古蹟出巡，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "大稻埕霞海城隍廟城隍老爺五月十三出巡",
        "en": "信仰廟會 Curated Spot",
        "tag": "台北大同 · 精選地標",
        "desc": "台北大同・大稻埕霞海城隍廟城隍老爺五月十三出巡，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "大龍峒保安宮保生大帝神誕神醫放火獅",
        "en": "信仰廟會 Curated Spot",
        "tag": "台北大同 · 精選地標",
        "desc": "台北大同・大龍峒保安宮保生大帝神誕神醫放火獅，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "艋舺青山宮青山王暗訪靈安尊王夜巡",
        "en": "信仰廟會 Curated Spot",
        "tag": "台北萬華 · 精選地標",
        "desc": "台北萬華・艋舺青山宮青山王暗訪靈安尊王夜巡，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "北投慈后宮北投媽祖遶境",
        "en": "信仰廟會 Curated Spot",
        "tag": "台北北投 · 精選地標",
        "desc": "台北北投・北投慈后宮北投媽祖遶境，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "新莊地藏庵大眾爺暗訪官將首發源",
        "en": "信仰廟會 Curated Spot",
        "tag": "新北新莊 · 精選地標",
        "desc": "新北新莊・新莊地藏庵大眾爺暗訪官將首發源，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "彰化南瑤宮徒步笨港進香潦溪傳奇",
        "en": "信仰廟會 Curated Spot",
        "tag": "彰化市 · 精選地標",
        "desc": "彰化市・彰化南瑤宮徒步笨港進香潦溪傳奇，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "天后宮湄洲媽祖同安寮十二庄請媽祖",
        "en": "信仰廟會 Curated Spot",
        "tag": "彰化鹿港 · 精選地標",
        "desc": "彰化鹿港・天后宮湄洲媽祖同安寮十二庄請媽祖，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "奉天宮開台媽祖元宵遶境",
        "en": "信仰廟會 Curated Spot",
        "tag": "嘉義新港 · 精選地標",
        "desc": "嘉義新港・奉天宮開台媽祖元宵遶境，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "台灣首廟天壇天公生玉皇上帝萬人祝壽",
        "en": "信仰廟會 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・台灣首廟天壇天公生玉皇上帝萬人祝壽，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "祀典大天后宮府城迓媽祖百年神轎",
        "en": "信仰廟會 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・祀典大天后宮府城迓媽祖百年神轎，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "慶安宮西港刈香台灣第一香王醮",
        "en": "信仰廟會 Curated Spot",
        "tag": "台南西港 · 精選地標",
        "desc": "台南西港・慶安宮西港刈香台灣第一香王醮，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "紫竹寺內門宋江陣羅漢門陣頭較勁",
        "en": "信仰廟會 Curated Spot",
        "tag": "高雄內門 · 精選地標",
        "desc": "高雄內門・紫竹寺內門宋江陣羅漢門陣頭較勁，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "恆春福德宮土地公生全國信眾祝壽",
        "en": "信仰廟會 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・恆春福德宮土地公生全國信眾祝壽，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "頭城東嶽廟東嶽大帝暗訪夜巡",
        "en": "信仰廟會 Curated Spot",
        "tag": "宜蘭頭城 · 精選地標",
        "desc": "宜蘭頭城・頭城東嶽廟東嶽大帝暗訪夜巡，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "二結王公廟過炭火跳炭火壯烈古禮",
        "en": "信仰廟會 Curated Spot",
        "tag": "宜蘭五結 · 精選地標",
        "desc": "宜蘭五結・二結王公廟過炭火跳炭火壯烈古禮，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "花蓮聖天宮關聖帝君出巡後山護佑",
        "en": "信仰廟會 Curated Spot",
        "tag": "花蓮市 · 精選地標",
        "desc": "花蓮市・花蓮聖天宮關聖帝君出巡後山護佑，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "玄武堂寒單爺元宵肉身炸寒單",
        "en": "信仰廟會 Curated Spot",
        "tag": "台東市 · 精選地標",
        "desc": "台東市・玄武堂寒單爺元宵肉身炸寒單，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "開台澎湖天后宮元宵乞龜萬斤米包龜",
        "en": "信仰廟會 Curated Spot",
        "tag": "澎湖馬公 · 精選地標",
        "desc": "澎湖馬公・開台澎湖天后宮元宵乞龜萬斤米包龜，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "浯島城隍廟四月十二迎城隍遶境扛輦",
        "en": "信仰廟會 Curated Spot",
        "tag": "金門金城 · 精選地標",
        "desc": "金門金城・浯島城隍廟四月十二迎城隍遶境扛輦，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "馬祖境天后宮媽祖在馬祖昇天祭",
        "en": "信仰廟會 Curated Spot",
        "tag": "馬祖南竿 · 精選地標",
        "desc": "馬祖南竿・馬祖境天后宮媽祖在馬祖昇天祭，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "基隆奠濟宮中元祭百年老大公廟開龕門",
        "en": "信仰廟會 Curated Spot",
        "tag": "基隆仁愛 · 精選地標",
        "desc": "基隆仁愛・基隆奠濟宮中元祭百年老大公廟開龕門，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "三峽長福巖祖師廟正月初六神豬秤重大拜拜",
        "en": "信仰廟會 Curated Spot",
        "tag": "新北三峽 · 精選地標",
        "desc": "新北三峽・三峽長福巖祖師廟正月初六神豬秤重大拜拜，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "普濟堂關聖帝君六月廿四社頭大遶境",
        "en": "信仰廟會 Curated Spot",
        "tag": "桃園大溪 · 精選地標",
        "desc": "桃園大溪・普濟堂關聖帝君六月廿四社頭大遶境，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      },
      {
        "name": "紫南宮土地公借發財金吃丁酒人潮",
        "en": "信仰廟會 Curated Spot",
        "tag": "南投竹山 · 精選地標",
        "desc": "南投竹山・紫南宮土地公借發財金吃丁酒人潮，為台灣百年傳統進香陣頭與遶境盛典不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "baseball",
    "icon": "⚾",
    "shortTitle": "運動賽事",
    "zhTitle": "運動賽事",
    "enTitle": "CPBL & SPORTS",
    "name": "大巨蛋室內冷氣場館與主場熱血",
    "bannerImg": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1600&auto=format&fit=crop",
    "title": "Electric Arena Nights · CPBL Ballparks & Cheering Squads",
    "subtitle": "台北大巨蛋四萬人應援、各球團啦啦隊狂歡與周邊美式運動酒吧",
    "deckBg": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🏟️",
        "title": "台北大巨蛋四萬人狂吼",
        "desc": "全台最大室內空調棒球殿堂，不受風雨影響盡情為球隊熱血應援。"
      },
      {
        "icon": "💃",
        "title": "熱區啦啦隊滿局跳躍",
        "desc": "融入台灣獨特棒球應援文化，全場整齊口號與電光應援棒揮舞。"
      },
      {
        "icon": "🍺",
        "title": "運動酒吧生啤慶功",
        "desc": "賽後前往大巨蛋與東區運動酒吧，投影大螢幕重溫全壘打致勝時刻。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】運動賽事極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "台北大巨蛋入場 ➔ 逛地下街買應援法寶毛巾 ➔ 熱區跟啦啦隊全場跳舞跳滿 9 局 ➔ 東區美式酒吧喝生啤慶功。"
          }
        ]
      },
      {
        "planName": "【2 日遊】運動賽事雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "台北大巨蛋室內冷氣大賽 ➔ 宿松山文創商圈飯店"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "前進新莊棒球場享受戶外環形屏幕悍將熱血吶喊 ➔ 逛新莊夜市"
          }
        ]
      },
      {
        "planName": "【3 日遊】運動賽事全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台北大巨蛋開幕戰"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "搭高鐵至台中洲際球場融入百萬爪迷黃潮 ➔ 逢甲夜市吃炸雞"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "台南市立棒球場見證南霸天統一獅綠橘應援 ➔ 喝文章牛肉湯收尾"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "台北大巨蛋",
        "en": "運動賽事 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・台北大巨蛋（四萬人室內全空調冷氣殿堂），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "天母棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・天母棒球場（味全龍天母異國風戶外草皮），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "新莊棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "新北新莊 · 精選地標",
        "desc": "新北新莊・新莊棒球場（富邦悍將頂級LED升級環形主場），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "樂天桃園棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "桃園中壢 · 精選地標",
        "desc": "桃園中壢・樂天桃園棒球場（全猿主場應援車飛天舞台），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "台中洲際棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "台中北屯 · 精選地標",
        "desc": "台中北屯・台中洲際棒球場（中信兄弟紅線棒球縫線地標球場），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "台南市立棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "台南南區 · 精選地標",
        "desc": "台南南區・台南市立棒球場（統一獅歷史最悠久常設主場），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "澄清湖棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "高雄鳥松 · 精選地標",
        "desc": "高雄鳥松・澄清湖棒球場（台鋼雄鷹湖畔天然草皮大球場），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Copper Spoon 銅勺美式運動餐廳",
        "en": "運動賽事 Curated Spot",
        "tag": "台北松山 · 精選地標",
        "desc": "台北松山・Copper Spoon 銅勺美式運動餐廳（大巨蛋旁大投影生啤），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "THE KEY COMPANY 美式酒吧",
        "en": "運動賽事 Curated Spot",
        "tag": "台北大安 · 精選地標",
        "desc": "台北大安・THE KEY COMPANY 美式酒吧（東區職棒轉播拼盤啤酒），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Brass Monkey 銅猴子",
        "en": "運動賽事 Curated Spot",
        "tag": "台北大安 · 精選地標",
        "desc": "台北大安・Brass Monkey 銅猴子（老牌外籍球迷齊聚狂歡酒吧），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Hooters 信義店",
        "en": "運動賽事 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・Hooters 信義店（直視101夜景辣妹呼拉圈秀烤雞翅），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Dan Ryan's Chicago Grill",
        "en": "運動賽事 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・Dan Ryan's Chicago Grill（芝加哥大份量炭烤豬肋排），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Maybe A Bar 運動主題餐酒",
        "en": "運動賽事 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・Maybe A Bar 運動主題餐酒（多屏幕無死角棒球調酒），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "G+9 鮮啤頂級生啤吧",
        "en": "運動賽事 Curated Spot",
        "tag": "新北板橋 · 精選地標",
        "desc": "新北板橋・G+9 鮮啤頂級生啤吧（二十多款在地鮮榨生啤大屏幕），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "B-side 啤酒運動空間",
        "en": "運動賽事 Curated Spot",
        "tag": "桃園中壢 · 精選地標",
        "desc": "桃園中壢・B-side 啤酒運動空間（各國精釀黑啤炸魚薯條熱播），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "路德威手工啤酒餐廳",
        "en": "運動賽事 Curated Spot",
        "tag": "台中西區 · 精選地標",
        "desc": "台中西區・路德威手工啤酒餐廳（大庭院露天投影幕黑麥啤酒），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "7分SO 美式廚房",
        "en": "運動賽事 Curated Spot",
        "tag": "台中西區 · 精選地標",
        "desc": "台中西區・7分SO 美式廚房（濃厚起司牛肉堡早午餐轉播），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "打烊前 運動餐酒館",
        "en": "運動賽事 Curated Spot",
        "tag": "台中西屯 · 精選地標",
        "desc": "台中西屯・打烊前 運動餐酒館（逢甲商圈大份量炸物簽名牆），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "The Han声 運動音樂餐酒",
        "en": "運動賽事 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・The Han声 運動音樂餐酒（大屏幕轉播賽後球迷聚集），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Willy's Sport Saloon",
        "en": "運動賽事 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・Willy's Sport Saloon（正宗墨西哥烤脆片異國球迷聚落），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "Bottoms Up Saloon",
        "en": "運動賽事 Curated Spot",
        "tag": "高雄左營 · 精選地標",
        "desc": "高雄左營・Bottoms Up Saloon（巨幅投影生啤酒柱飛鏢機），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "燈塔美式酒館 The Lighthouse",
        "en": "運動賽事 Curated Spot",
        "tag": "高雄新興 · 精選地標",
        "desc": "高雄新興・燈塔美式酒館 The Lighthouse（生啤手工披薩超人氣），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "嘉義市立棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "嘉義西區 · 精選地標",
        "desc": "嘉義西區・嘉義市立棒球場（KANO嘉農發源地威震甲子園銅像），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "斗六棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "雲林斗六 · 精選地標",
        "desc": "雲林斗六・斗六棒球場（平坦綠地視野開闊後山巡迴戰），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "德興棒球場",
        "en": "運動賽事 Curated Spot",
        "tag": "花蓮市 · 精選地標",
        "desc": "花蓮市・德興棒球場（中央山脈壯麗背景中職花蓮戰），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "台東棒球村",
        "en": "運動賽事 Curated Spot",
        "tag": "台東市 · 精選地標",
        "desc": "台東市・台東棒球村（孕育無數台灣重砲手的原鄉球場），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "紅九 棒球打擊練習場",
        "en": "運動賽事 Curated Spot",
        "tag": "台北士林 · 精選地標",
        "desc": "台北士林・紅九 棒球打擊練習場（看完球賽親自下場揮棒測速），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "大魯閣打擊練習場新莊館",
        "en": "運動賽事 Curated Spot",
        "tag": "新北新莊 · 精選地標",
        "desc": "新北新莊・大魯閣打擊練習場新莊館（棒球九宮格打擊模擬器），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "大魯閣棒壘球中科館",
        "en": "運動賽事 Curated Spot",
        "tag": "台中北屯 · 精選地標",
        "desc": "台中北屯・大魯閣棒壘球中科館（夜間明亮球道好友實戰切磋），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      },
      {
        "name": "掌門精釀微風松高店",
        "en": "運動賽事 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・掌門精釀微風松高店（露天看台北夜景轉播電視球賽），為台灣大巨蛋室內冷氣場館與主場熱血不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "events",
    "icon": "🎪",
    "shortTitle": "節慶活動",
    "zhTitle": "節慶活動",
    "enTitle": "LIVE & EVENTS",
    "name": "國際藝術節音樂祭與展演嘉年華",
    "bannerImg": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&auto=format&fit=crop",
    "title": "Live Festivals & Creative Arenas · Music, Art & Joy",
    "subtitle": "鹿野高台熱氣球、大港開唱獨立音樂、澎湖海上花火與福隆國際沙雕",
    "deckBg": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "🎈",
        "title": "鹿野高台熱氣球嘉年華",
        "desc": "清晨五點在縱谷大草皮見證數十顆巨型造型熱氣球同步繫留升空。"
      },
      {
        "icon": "🎸",
        "title": "大港開唱海港音樂盛典",
        "desc": "駁二港灣搖滾開唱，各國獨立樂團與重磅歌手狂歡一整週末。"
      },
      {
        "icon": "🎆",
        "title": "澎湖海上國際花火節",
        "desc": "觀音亭彩虹橋上海空雙向璀璨煙火與無人機科技燈光秀。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】節慶活動極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "搭專車直達台東鹿野高台 ➔ 觀看清晨五點熱氣球光雕繫留升空 ➔ 下山吃初鹿牧場鮮奶冰淇淋。"
          }
        ]
      },
      {
        "planName": "【2 日遊】節慶活動雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "前進高雄駁二藝術特區參加大港開唱音樂祭 ➔ 聽團狂歡看夕陽"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "漫步愛河灣流行音樂中心文創市集返程"
          }
        ]
      },
      {
        "planName": "【3 日遊】節慶活動全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台北世貿看國際電玩展/動漫展 ➔ 逛信義商圈"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "轉往南港展覽館大型科技展 ➔ 晚上逛饒河夜市"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "台北流行音樂中心看獨立樂團專場演出"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "鹿野高台台灣國際熱氣球嘉年華",
        "en": "節慶活動 Curated Spot",
        "tag": "台東鹿野 · 精選地標",
        "desc": "台東鹿野・鹿野高台台灣國際熱氣球嘉年華，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "駁二藝術特區大港開唱音樂祭",
        "en": "節慶活動 Curated Spot",
        "tag": "高雄鹽埕 · 精選地標",
        "desc": "高雄鹽埕・駁二藝術特區大港開唱音樂祭，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "福隆海灘貢寮國際海洋音樂祭",
        "en": "節慶活動 Curated Spot",
        "tag": "新北貢寮 · 精選地標",
        "desc": "新北貢寮・福隆海灘貢寮國際海洋音樂祭，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "漁光島浪人祭獨立音樂盛典",
        "en": "節慶活動 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・漁光島浪人祭獨立音樂盛典，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "墾丁春浪音樂節戶外狂歡",
        "en": "節慶活動 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・墾丁春浪音樂節戶外狂歡，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "台北南港展覽館一二館國際大型展會",
        "en": "節慶活動 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・台北南港展覽館一二館國際大型展會，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "台北世貿一館國際動漫/電玩展",
        "en": "節慶活動 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・台北世貿一館國際動漫/電玩展，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "華山1914文創園區四季旗艦展演",
        "en": "節慶活動 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・華山1914文創園區四季旗艦展演，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "松山文創園區文協藝文市集",
        "en": "節慶活動 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・松山文創園區文協藝文市集，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "台北流行音樂中心北流音樂展演館",
        "en": "節慶活動 Curated Spot",
        "tag": "台北南港 · 精選地標",
        "desc": "台北南港・台北流行音樂中心北流音樂展演館，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "高雄流行音樂中心海音館夜間光影",
        "en": "節慶活動 Curated Spot",
        "tag": "高雄鹽埕 · 精選地標",
        "desc": "高雄鹽埕・高雄流行音樂中心海音館夜間光影，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "文心森林公園圓滿戶外劇場爵士音樂節",
        "en": "節慶活動 Curated Spot",
        "tag": "台中南屯 · 精選地標",
        "desc": "台中南屯・文心森林公園圓滿戶外劇場爵士音樂節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "桃園陽光劇場戶外萬人露天音樂會",
        "en": "節慶活動 Curated Spot",
        "tag": "桃園大園 · 精選地標",
        "desc": "桃園大園・桃園陽光劇場戶外萬人露天音樂會，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "文化公園國際管樂節踩街狂歡",
        "en": "節慶活動 Curated Spot",
        "tag": "嘉義市 · 精選地標",
        "desc": "嘉義市・文化公園國際管樂節踩街狂歡，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "東大門廣場夏戀嘉年華巨星演唱會",
        "en": "節慶活動 Curated Spot",
        "tag": "花蓮市 · 精選地標",
        "desc": "花蓮市・東大門廣場夏戀嘉年華巨星演唱會，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "福隆國際沙雕藝術季金色沙雕",
        "en": "節慶活動 Curated Spot",
        "tag": "新北福隆 · 精選地標",
        "desc": "新北福隆・福隆國際沙雕藝術季金色沙雕，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "大溪大禧關公神誕文創慶典",
        "en": "節慶活動 Curated Spot",
        "tag": "桃園大溪 · 精選地標",
        "desc": "桃園大溪・大溪大禧關公神誕文創慶典，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "冬山河親水公園國際童玩藝術節",
        "en": "節慶活動 Curated Spot",
        "tag": "宜蘭五結 · 精選地標",
        "desc": "宜蘭五結・冬山河親水公園國際童玩藝術節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "新竹市立玻璃工藝博物館玻璃藝術節",
        "en": "節慶活動 Curated Spot",
        "tag": "新竹市 · 精選地標",
        "desc": "新竹市・新竹市立玻璃工藝博物館玻璃藝術節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "三義木雕博物館國際木雕藝術節",
        "en": "節慶活動 Curated Spot",
        "tag": "苗栗三義 · 精選地標",
        "desc": "苗栗三義・三義木雕博物館國際木雕藝術節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "草悟道市民廣場台中爵士音樂節",
        "en": "節慶活動 Curated Spot",
        "tag": "台中西區 · 精選地標",
        "desc": "台中西區・草悟道市民廣場台中爵士音樂節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "全美戲院手繪電影海報看板展",
        "en": "節慶活動 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・全美戲院手繪電影海報看板展，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "衛武營戶外劇場國際藝術節",
        "en": "節慶活動 Curated Spot",
        "tag": "高雄苓雅 · 精選地標",
        "desc": "高雄苓雅・衛武營戶外劇場國際藝術節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "海口港落山風藝術季風之雕塑",
        "en": "節慶活動 Curated Spot",
        "tag": "屏東車城 · 精選地標",
        "desc": "屏東車城・海口港落山風藝術季風之雕塑，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "華源海灣南迴藝術季海岸地景",
        "en": "節慶活動 Curated Spot",
        "tag": "台東太麻里 · 精選地標",
        "desc": "台東太麻里・華源海灣南迴藝術季海岸地景，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "石梯坪森川里海濕地藝術季",
        "en": "節慶活動 Curated Spot",
        "tag": "花蓮豐濱 · 精選地標",
        "desc": "花蓮豐濱・石梯坪森川里海濕地藝術季，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "觀音亭澎湖國際海上花火節",
        "en": "節慶活動 Curated Spot",
        "tag": "澎湖馬公 · 精選地標",
        "desc": "澎湖馬公・觀音亭澎湖國際海上花火節，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "沙美老街風獅爺文化季",
        "en": "節慶活動 Curated Spot",
        "tag": "金門金沙 · 精選地標",
        "desc": "金門金沙・沙美老街風獅爺文化季，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "馬祖國際藝術島戰地轉譯地景",
        "en": "節慶活動 Curated Spot",
        "tag": "馬祖南竿 · 精選地標",
        "desc": "馬祖南竿・馬祖國際藝術島戰地轉譯地景，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      },
      {
        "name": "香堤大道戶外品牌快閃嘉年華",
        "en": "節慶活動 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・香堤大道戶外品牌快閃嘉年華，為台灣國際藝術節音樂祭與展演嘉年華不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&auto=format&fit=crop"
      }
    ]
  },
  {
    "id": "film",
    "icon": "🎬",
    "shortTitle": "影視朝聖",
    "zhTitle": "影視朝聖",
    "enTitle": "VIRAL FILM SPOTS",
    "name": "經典電影台劇與國際大片取景地",
    "bannerImg": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&auto=format&fit=crop",
    "title": "Iconic Movie Locations · Relive the Stories Across Taiwan",
    "subtitle": "《想見你》台南老街、《不能說的秘密》淡水琴房、《悲情城市》九份",
    "deckBg": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop",
    "experiences": [
      {
        "icon": "📻",
        "title": "《想見你》32 唱片行小半樓",
        "desc": "造訪鳳南小隊李子維與陳韻如相遇的老屋唱片行，拍照經典留念。"
      },
      {
        "icon": "🎹",
        "title": "《不能說的秘密》淡江中學",
        "desc": "周杰倫電影浪漫八角塔與西班牙拱廊，漫步林蔭大道重溫校園純愛。"
      },
      {
        "icon": "🍵",
        "title": "《悲情城市》九份豎崎路茶樓",
        "desc": "侯孝賢金獅獎代表作，高掛大紅燈籠的山城梯道與懷舊昇平戲院。"
      }
    ],
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/city/taiwan-car-charter/",
      "hotel": "https://tw.trip.com/hotels/",
      "tour": "https://www.klook.com/zh-TW/city/taiwan-attractions/"
    },
    "itineraries": [
      {
        "planName": "【1 日遊】影視朝聖極致精華遊",
        "duration": "1 天快捷精華",
        "days": [
          {
            "day": "一日精華動線",
            "text": "《想見你》台南經典巡禮 ➔ 閒情茗品屋吃鍋燒意麵 ➔ 32唱片行小半樓打卡 ➔ 鳳南高中（鳳和高中） ➔ 漁光島月牙灣看夕陽。"
          }
        ]
      },
      {
        "planName": "【2 日遊】影視朝聖雙城慢活二日遊",
        "duration": "2 天 1 夜深度遊",
        "days": [
          {
            "day": "Day 1 經典啟程",
            "text": "《不能說的秘密》淡江中學西班牙迴廊 ➔ 真理大學牛津學堂 ➔ 淡水老街金色水岸"
          },
          {
            "day": "Day 2 深度慢活",
            "text": "九份老街阿妹茶樓與昇平戲院重溫侯孝賢《悲情城市》"
          }
        ]
      },
      {
        "planName": "【3 日遊】影視朝聖全境大壯遊",
        "duration": "3 天 2 夜全景巡禮",
        "days": [
          {
            "day": "Day 1 極致初探",
            "text": "台北市區《露西》取景（晶華酒店、永樂市場大稻埕）"
          },
          {
            "day": "Day 2 壯遊核心",
            "text": "前進台南體驗《青春18×2》戀愛軌跡（全美戲院、武聖夜市、保安車站）"
          },
          {
            "day": "Day 3 圓滿收官",
            "text": "直奔屏東墾丁白沙灣重現李安奧斯卡名片《少年Pi的奇幻漂流》老虎登陸海灘"
          }
        ]
      }
    ],
    "spots": [
      {
        "name": "小半樓",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・小半樓（《想見你》李子維陳韻如32唱片行），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "閒情茗品屋",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南南區 · 精選地標",
        "desc": "台南南區・閒情茗品屋（《想見你》李子維莫俊傑吃鍋燒意麵），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "鳳和高中",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南柳營 · 精選地標",
        "desc": "台南柳營・鳳和高中（《想見你》鳳南高中校園走廊），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "漁光島月牙灣",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南安平 · 精選地標",
        "desc": "台南安平・漁光島月牙灣（《想見你》三人看夕陽秘密海灘），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "二寮觀日亭",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南左鎮 · 精選地標",
        "desc": "台南左鎮・二寮觀日亭（《想見你》跨年看低海拔雲海日出），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "龍泉冰店",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南麻豆 · 精選地標",
        "desc": "台南麻豆・龍泉冰店（《想見你》莫奶奶百年刨冰店），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "好物Spirit咖啡",
        "en": "影視朝聖 Curated Spot",
        "tag": "台北大安 · 精選地標",
        "desc": "台北大安・好物Spirit咖啡（《想見你》現代時空黃雨萱32咖啡館），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "羅東運動公園落羽松",
        "en": "影視朝聖 Curated Spot",
        "tag": "宜蘭羅東 · 精選地標",
        "desc": "宜蘭羅東・羅東運動公園落羽松（《想見你》李子維談心大樹草皮），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "淡江中學西班牙拱廊",
        "en": "影視朝聖 Curated Spot",
        "tag": "新北淡水 · 精選地標",
        "desc": "新北淡水・淡江中學西班牙拱廊（周杰倫《不能說的秘密》琴房校園），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "真理大學大禮拜堂",
        "en": "影視朝聖 Curated Spot",
        "tag": "新北淡水 · 精選地標",
        "desc": "新北淡水・真理大學大禮拜堂（《不能說的秘密》畢業典禮大教堂），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "淡水老街金色水岸",
        "en": "影視朝聖 Curated Spot",
        "tag": "新北淡水 · 精選地標",
        "desc": "新北淡水・淡水老街金色水岸（《不能說的秘密》葉湘倫單車載路小雨），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "全美戲院",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・全美戲院（許光漢《青春18×2》Jimmy與Ami約會看電影），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "武聖夜市",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南中西 · 精選地標",
        "desc": "台南中西・武聖夜市（《青春18×2》騎機車打香腸射氣球名場面），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "保安車站",
        "en": "影視朝聖 Curated Spot",
        "tag": "台南仁德 · 精選地標",
        "desc": "台南仁德・保安車站（《青春18×2》買車票依依不捨告別月台），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "九份豎崎路茶樓",
        "en": "影視朝聖 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・九份豎崎路茶樓（侯孝賢威尼斯金獅獎《悲情城市》主景），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "昇平戲院",
        "en": "影視朝聖 Curated Spot",
        "tag": "新北瑞芳 · 精選地標",
        "desc": "新北瑞芳・昇平戲院（《悲情城市》梁朝偉與家族聚會老戲院），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "墾丁白沙灣",
        "en": "影視朝聖 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・墾丁白沙灣（李安奧斯卡獎《少年Pi的奇幻漂流》老虎登陸沙灘），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿嘉的家",
        "en": "影視朝聖 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・阿嘉的家（魏德聖《海角七號》男主角寄信紅磚老屋），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "恆春西門古城牆",
        "en": "影視朝聖 Curated Spot",
        "tag": "屏東恆春 · 精選地標",
        "desc": "屏東恆春・恆春西門古城牆（《海角七號》遊覽車卡住過不去古城門），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "友子阿嬤的家",
        "en": "影視朝聖 Curated Spot",
        "tag": "屏東滿州 · 精選地標",
        "desc": "屏東滿州・友子阿嬤的家（《海角七號》茂伯送出最後一封情書老宅），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "台北晶華酒店",
        "en": "影視朝聖 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・台北晶華酒店（盧貝松好萊塢大片《露西》史嘉蕾喬韓森交手場景），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "永樂市場大稻埕商圈",
        "en": "影視朝聖 Curated Spot",
        "tag": "台北大同 · 精選地標",
        "desc": "台北大同・永樂市場大稻埕商圈（《露西》計程車狂飆穿梭南北貨老街），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "台北101高空景觀台",
        "en": "影視朝聖 Curated Spot",
        "tag": "台北信義 · 精選地標",
        "desc": "台北信義・台北101高空景觀台（各大好萊塢電影台灣代表天際線），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "劍南山夜景平台",
        "en": "影視朝聖 Curated Spot",
        "tag": "台北中山 · 精選地標",
        "desc": "台北中山・劍南山夜景平台（林依晨陳柏霖《我可能不會愛你》李大仁喝啤酒看夜景），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "泰安觀止溫泉會館",
        "en": "影視朝聖 Curated Spot",
        "tag": "苗栗泰安 · 精選地標",
        "desc": "苗栗泰安・泰安觀止溫泉會館（《我可能不會愛你》程又青李大仁泡湯談心），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "菁桐車站石底俱樂部",
        "en": "影視朝聖 Curated Spot",
        "tag": "新北平溪 · 精選地標",
        "desc": "新北平溪・菁桐車站石底俱樂部（九把刀《那些年，我們一起追的女孩》放天燈鐵軌），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "精誠中學操場",
        "en": "影視朝聖 Curated Spot",
        "tag": "彰化市 · 精選地標",
        "desc": "彰化市・精誠中學操場（《那些年》柯景騰沈佳宜打賭剃光頭校園），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "阿璋肉圓",
        "en": "影視朝聖 Curated Spot",
        "tag": "彰化市 · 精選地標",
        "desc": "彰化市・阿璋肉圓（《那些年》放學圍坐一起吃肉圓老店），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "牯嶺街小劇場周邊",
        "en": "影視朝聖 Curated Spot",
        "tag": "台北中正 · 精選地標",
        "desc": "台北中正・牯嶺街小劇場周邊（楊德昌影史名作《牯嶺街少年殺人事件》綠蔭街廓），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      },
      {
        "name": "石梯坪單面山海蝕礁",
        "en": "影視朝聖 Curated Spot",
        "tag": "花蓮豐濱 · 精選地標",
        "desc": "花蓮豐濱・石梯坪單面山海蝕礁（馬丁史柯西斯好萊塢史詩《沉默》安德魯加菲爾德登陸懸崖），為台灣經典電影台劇與國際大片取景地不可錯過的指標勝地，體驗迷人山海風貌與在地人文魅力。",
        "img": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&auto=format&fit=crop"
      }
    ]
  }
];
