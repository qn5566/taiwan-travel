// 8 大核心旗艦深度主題資料庫 (整併 18 大零散分類，提供 1/2/3 日遊行程與精選卡牌瀑布流)
const THEMES_COMPLETE_DATA = [
  {
    "id": "northcoast",
    "icon": "🌊",
    "shortTitle": "北海岸",
    "zhTitle": "北海岸・山海鐵道與山城",
    "enTitle": "NORTH COAST & JIUFEN",
    "name": "北海岸山海公路巡禮",
    "bannerImg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop",
    "title": "North Coast Ocean Panorama · Where Waves Kiss Mountains",
    "subtitle": "沿著台 2 線蔚藍海岸線，探索野柳奇岩、九份老街茶香、深澳鐵道與極東岬角日出",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/1874-jiufen-shifen-day-tour-taipei/?aid=123436"
    },
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
    "itineraries": [
      {
        "planName": "【1 日輕旅】經典山海一日遊",
        "duration": "1 日經典",
        "days": [
          {
            "day": "精華動線",
            "text": "野柳地質公園（女王頭）➔ 金山老街鴨肉 ➔ 九份阿妹茶樓 ➔ 正濱漁港彩色屋。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】溫泉海蝕慢活行",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "淺水灣海景咖啡 ➔ 富貴角燈塔（極北點）➔ 老梅石槽 ➔ 夜宿金山溫泉旅館。"
          },
          {
            "day": "Day 2",
            "text": "金山獅頭山公園 ➔ 龜吼漁港萬里蟹 ➔ 潮境公園飛天掃帚 ➔ 基隆廟口夜市。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】東北角鐵道與極東壯遊",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "淡水紅毛城 ➔ 滬尾藝文休閒園區 ➔ 石門洞 ➔ 白沙灣海景民宿。"
          },
          {
            "day": "Day 2",
            "text": "深澳鐵道自行車 ➔ 陰陽海與十三層遺址 ➔ 鼻頭角稜谷步道 ➔ 夜宿九份山城。"
          },
          {
            "day": "Day 3",
            "text": "平溪十分放天燈 ➔ 猴硐貓村 ➔ 福隆便當 ➔ 三貂角燈塔（極東點）。"
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
      }
    ]
  },
  {
    "id": "islands",
    "icon": "🏝️",
    "shortTitle": "離島跳島",
    "zhTitle": "離島跳島・海龜共游與藍海",
    "enTitle": "TAIWAN ISLAND HOPPING",
    "name": "台灣熱門離島跳島漫遊",
    "bannerImg": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&auto=format&fit=crop",
    "title": "Island Hopping Sanctuary · Sea Turtles, Coral Reefs & Milky Ways",
    "subtitle": "東港碼頭乘浪出海！小琉球與海龜共游、綠島世界級蔚藍潛點、澎湖玄武岩與雙心石滬",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/904-penghu-day-tour-magong/?aid=123436"
    },
    "experiences": [
      {
        "icon": "🐢",
        "title": "小琉球與海龜共游",
        "desc": "近距離在清澈海水與保育類野生綠蠵龜同游。"
      },
      {
        "icon": "♨️",
        "title": "綠島朝日海底溫泉",
        "desc": "全球僅三處罕見海水溫泉，晨迎太平洋第一道曙光。"
      },
      {
        "icon": "🌊",
        "title": "奎壁山摩西分海",
        "desc": "隨潮汐退去踏上礫石步道走向赤嶼的奇幻體驗。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】跳島輕快體驗（小琉球／基隆嶼）",
        "duration": "1 日跳島",
        "days": [
          {
            "day": "精華動線",
            "text": "東港碼頭搭船 ➔ 花瓶岩浮潛尋海龜 ➔ 烏鬼洞地質探秘 ➔ 麻花捲伴手禮 ➔ 傍晚返航。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】綠島世界級蔚藍潛水行",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "富岡漁港搭船 ➔ 綠島燈塔 ➔ 大白沙浮潛 ➔ 朝日溫泉夜間泡湯觀星。"
          },
          {
            "day": "Day 2",
            "text": "石朗潛水區體驗水下郵筒 ➔ 牛頭山草原 ➔ 綠島監獄巡禮 ➔ 搭船返程。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】澎湖本島與七美外島深度壯遊",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "抵達馬公 ➔ 篤行十村 ➔ 奎壁山摩西分海 ➔ 山水沙灘夕陽 ➔ 馬公市區海鮮小吃。"
          },
          {
            "day": "Day 2",
            "text": "南海碼頭搭船 ➔ 七美雙心石滬 ➔ 小台灣 ➔ 望安中社古厝與天台山。"
          },
          {
            "day": "Day 3",
            "text": "澎湖跨海大橋 ➔ 通樑古榕 ➔ 二崁傳統聚落 ➔ 大菓葉柱狀玄武岩 ➔ 伴手禮黑糖糕。"
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
      }
    ]
  },
  {
    "id": "hualien",
    "icon": "🏞️",
    "shortTitle": "花東探索",
    "zhTitle": "花東探索・峽谷稻浪與太平洋",
    "enTitle": "EAST COAST & TAROKO",
    "name": "花東縱谷與太平洋海岸",
    "bannerImg": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop",
    "title": "Pacific Coast & Emerald Rift Valley · Nature's Grand Theater",
    "subtitle": "馳騁台 9 與台 11 線，穿梭清水斷崖碧海藍天、池上稻浪、金尊衝浪與多良太平洋海景",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/1874-jiufen-shifen-day-tour-taipei/?aid=123436"
    },
    "experiences": [
      {
        "icon": "🚣",
        "title": "清水斷崖日出 SUP",
        "desc": "晨曦破曉划立槳於大平洋，仰望千仞絕壁。"
      },
      {
        "icon": "🌾",
        "title": "池上伯朗大道單車",
        "desc": "金黃稻浪中迎風騎乘，在金城武樹下喝杯冷泡茶。"
      },
      {
        "icon": "🏄",
        "title": "台東金尊浪人海岸",
        "desc": "國際衝浪巡迴賽常駐點，太平洋磅礴長浪震撼視界。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】太平洋山海精華一日遊",
        "duration": "1 日精華",
        "days": [
          {
            "day": "精華動線",
            "text": "清水斷崖觀景台 ➔ 太魯閣砂卡礑步道 ➔ 花蓮貨櫃星巴克 ➔ 東大門夜市。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】海線浪人與部落漫遊行",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "花蓮出發 ➔ 芭崎瞭望台 ➔ 石梯坪海蝕壺穴 ➔ 台東金尊海景咖啡（觀衝浪）➔ 宿都蘭。"
          },
          {
            "day": "Day 2",
            "text": "東河橋 ➔ 金尊漁港衝浪體驗 ➔ 都蘭糖廠文創園區 ➔ 加路蘭裝置藝術 ➔ 鐵花村慢市集。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】縱谷稻浪與溫泉冒險之旅",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "花蓮車站租車/包車 ➔ 鯉魚潭 ➔ 光復糖廠 ➔ 瑞穗溫泉飯店泡湯一泊二食。"
          },
          {
            "day": "Day 2",
            "text": "秀姑巒溪泛舟 ➔ 舞鶴蜜香紅茶 ➔ 池上伯朗大道騎單車 ➔ 宿池上稻浪民宿。"
          },
          {
            "day": "Day 3",
            "text": "鹿野高台熱氣球 ➔ 初鹿牧場 ➔ 台東森林公園琵琶湖 ➔ 多良車站遠眺太平洋返程。"
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
      }
    ]
  },
  {
    "id": "outdoor",
    "icon": "⛰️",
    "shortTitle": "山林戶外",
    "zhTitle": "山林戶外・高山百岳與星空露營",
    "enTitle": "OUTDOOR & PEAKS",
    "name": "全台百岳名山與野奢露營",
    "bannerImg": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700&auto=format&fit=crop",
    "title": "Alpine Wilderness & Glamping Escapes · Walk Above the Clouds",
    "subtitle": "合歡山群峰輕鬆入手、阿里山檜木巨木群森呼吸、高海拔星空露營車與嘉明湖天使的眼淚",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/904-penghu-day-tour-magong/?aid=123436"
    },
    "experiences": [
      {
        "icon": "⛺",
        "title": "免裝備野奢露營",
        "desc": "無痛入住球型星空帳與露營車，享有私人柴燒烤肉。"
      },
      {
        "icon": "🏔️",
        "title": "合歡山金黃大草原",
        "desc": "全台最高公路直達，徒步半小時登上人生第一座百岳。"
      },
      {
        "icon": "🌲",
        "title": "特富野古道鐵道森呼吸",
        "desc": "漫步舊鐵道與柳杉林，深吸芬多精洗滌身心靈。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】合歡群峰百岳親炙一日行",
        "duration": "1 日輕健行",
        "days": [
          {
            "day": "精華動線",
            "text": "清境農場出發 ➔ 武嶺公路最高點 ➔ 石門山百岳健行（輕鬆登頂）➔ 松雪樓午餐 ➔ 傍晚返程。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】森林野奢露營與星空之夜",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "苗栗南庄野奢露營區 Check-in ➔ 森林下午茶與柴燒野炊 ➔ 夜間觀星與露天營火。"
          },
          {
            "day": "Day 2",
            "text": "加里山仙度瑞拉步道 ➔ 南庄百年老街桂花巷 ➔ 採買手作茶點返程。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】天使眼淚嘉明湖高山縱走",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "向陽國家森林遊樂區出發 ➔ 巨木步道適應高度 ➔ 夜宿向陽山屋。"
          },
          {
            "day": "Day 2",
            "text": "稜線迎日出 ➔ 嘉明湖避難山屋 ➔ 探訪夢幻湛藍嘉明湖 ➔ 宿山屋。"
          },
          {
            "day": "Day 3",
            "text": "三叉山百岳登頂 ➔ 向陽山登頂 ➔ 下山返程慶功宴。"
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
      }
    ]
  },
  {
    "id": "hotspring",
    "icon": "♨️",
    "shortTitle": "溫泉舒活",
    "zhTitle": "溫泉舒活・名湯療癒與親子公園",
    "enTitle": "HOT SPRINGS & RETREAT",
    "name": "全台極上溫泉名湯與度假散策",
    "bannerImg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop",
    "title": "Mineral Healing Waters & Family Parkland · Total Body & Soul Reset",
    "subtitle": "北投日式青磺名湯、礁溪美人碳酸泉、關子嶺黑泥漿溫泉與全齡友善親子放電綠野",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/904-penghu-day-tour-magong/?aid=123436"
    },
    "experiences": [
      {
        "icon": "♨️",
        "title": "北投百年日式溫泉館",
        "desc": "置身檜木桶湯屋，享受天然青磺白磺泉質舒緩疲憊。"
      },
      {
        "icon": "🍵",
        "title": "礁溪溫泉拉麵足湯",
        "desc": "一邊享用熱騰騰地獄拉麵，雙腳一邊泡在溫熱美人足湯。"
      },
      {
        "icon": "🛝",
        "title": "新北大都會熊猴森樂園",
        "desc": "全台最長堤坡滾輪滑梯，全家歡樂放電首選。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】北投地熱谷與名湯一日行",
        "duration": "1 日舒壓",
        "days": [
          {
            "day": "精華動線",
            "text": "新北投綠建築圖書館 ➔ 北投溫泉博物館 ➔ 地熱谷白煙景觀 ➔ 加賀屋/日勝生雙人湯屋。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】宜蘭礁溪溫泉與親子森林漫活",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "礁溪溫泉公園足湯 ➔ 湯圍溝溫泉街美食 ➔ 宿礁溪頂級私湯飯店（一泊二食）。"
          },
          {
            "day": "Day 2",
            "text": "羅東運動公園落羽松 ➔ 林場文化園區 ➔ 奕順軒奶凍捲伴手禮返程。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】南台灣罕見泥漿溫泉與茂林探秘",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "台南白河關子嶺 ➔ 體驗全台唯一泥漿溫泉 ➔ 水火同源奇觀 ➔ 宿關子嶺溫泉會館。"
          },
          {
            "day": "Day 2",
            "text": "高雄六龜寶來溫泉美人湯 ➔ 荖濃溪畔觀景 ➔ 不老溫泉夜間聽濤觀星。"
          },
          {
            "day": "Day 3",
            "text": "茂林國家風景區賞紫斑蝶 ➔ 多納部落石板屋文化 ➔ 屏東市區返程。"
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
      }
    ]
  },
  {
    "id": "nightmarket",
    "icon": "🍢",
    "shortTitle": "市井煙火",
    "zhTitle": "市井煙火・夜市必比登與百萬夜景",
    "enTitle": "NIGHT MARKETS & SKYLINE",
    "name": "全台指標夜市美味與高空夜景",
    "bannerImg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop",
    "title": "Sizzling Street Bites & Million-Dollar Views · Taiwan's Night Beat",
    "subtitle": "晚上 9 點後的精采夜生活！排隊搶吃米其林必比登胡椒餅、炸雞排，上山遠眺台北 101 與全島璀璨星河",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/904-penghu-day-tour-magong/?aid=123436"
    },
    "experiences": [
      {
        "icon": "🥩",
        "title": "米其林必比登小吃巡禮",
        "desc": "大啖士林炭烤雞排、饒河街胡椒餅與寧夏夜市蛋黃芋餅。"
      },
      {
        "icon": "🍸",
        "title": "微風南山高空露天酒吧",
        "desc": "信義區 48 樓近身貼近台北 101，俯瞰全城琉璃光海。"
      },
      {
        "icon": "🎡",
        "title": "陽明山草山夜未眠",
        "desc": "旋轉木馬與景觀玻璃露台，品味特調雞尾酒佐百萬夜景。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】台北必比登夜市與陽明山夜色",
        "duration": "1 日微醺夜生活",
        "days": [
          {
            "day": "精華動線",
            "text": "寧夏夜市/士林夜市大快朵頤 ➔ 驅車直上陽明山屋頂上/草山夜未眠 ➔ 俯瞰台北盆地百萬夜景。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】基隆港海味夜市與台中天際線",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "基隆廟口夜市鼎邊趺與一口吃香腸 ➔ 太平青鳥看大船入港夜景 ➔ 宿基隆港景飯店。"
          },
          {
            "day": "Day 2",
            "text": "台中逢甲夜市吃必比登美食 ➔ 望高寮夜景公園俯瞰台中盆地七彩璀璨天際線。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】全台三大都會夜市與星空景觀巡禮",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "台北饒河街夜市胡椒餅 ➔ 象山六巨石俯瞰 101 璀璨夜景 ➔ 信義區酒吧小酌。"
          },
          {
            "day": "Day 2",
            "text": "台南花園夜市/大東夜市狂嗑牛肉湯與棺材板 ➔ 安平港浪漫遊艇夜景 ➔ 宿海安路老宅。"
          },
          {
            "day": "Day 3",
            "text": "高雄瑞豐/六合夜市品海鮮粥 ➔ 壽山情人觀景台遠眺高雄港貨櫃燈火 ➔ 駁二大港橋。"
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
      }
    ]
  },
  {
    "id": "culture",
    "icon": "🏮",
    "shortTitle": "節慶文化",
    "zhTitle": "節慶文化・歲時盛典與信仰民俗",
    "enTitle": "CULTURE & FESTIVALS",
    "name": "台灣歲時節慶典禮與影視朝聖",
    "bannerImg": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=700&auto=format&fit=crop",
    "title": "Sacred Rituals, Lantern Festivals & Cinematic Trails",
    "subtitle": "平溪千盞天燈冉冉升空、大甲媽祖進香萬人空巷、大稻埕百年月老與金馬電影取景地深度漫步",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/904-penghu-day-tour-magong/?aid=123436"
    },
    "experiences": [
      {
        "icon": "🏮",
        "title": "十分天燈祈福冉冉升空",
        "desc": "鐵道旁毛筆親題心願，目送溫暖天燈飄向山巒雲端。"
      },
      {
        "icon": "🥁",
        "title": "大甲鎮瀾宮百年進香",
        "desc": "名列世界三大宗教盛事，親歷鞭炮鑼鼓震天的台灣人情味。"
      },
      {
        "icon": "🎬",
        "title": "電影《悲情城市》九份老街",
        "desc": "踏查侯孝賢導演經典光影場景，重溫老台灣時代風華。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】大稻埕百年紅磚與城隍月老行",
        "duration": "1 日人文散策",
        "days": [
          {
            "day": "精華動線",
            "text": "迪化街南北貨紅磚洋樓巡禮 ➔ 台北霞海城隍廟參拜月老 ➔ 永樂市場古早味油飯 ➔ 大稻埕碼頭夕陽。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】平溪祈福天燈與鹿港古街探秘",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "十分老街鐵道放祈福天燈 ➔ 十分壯觀瀑布 ➔ 宿九份老街景觀民宿看夜景。"
          },
          {
            "day": "Day 2",
            "text": "彰化鹿港老街天后宮 ➔ 九曲巷與摸乳巷 ➔ 品嚐百年肉包與麵線糊返程。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】全台三大宗教進香與民俗盛典",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "大甲鎮瀾宮參拜媽祖 ➔ 北港朝天宮體驗香火鼎盛 ➔ 麻油香與日發新港飴。"
          },
          {
            "day": "Day 2",
            "text": "台南古都孔廟文化園區 ➔ 赤崁樓夜間光雕 ➔ 安平開台天后宮巡禮。"
          },
          {
            "day": "Day 3",
            "text": "鹽水武廟體驗蜂炮歷史館 ➔ 探訪百年常民信仰文化之美返程。"
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
      }
    ]
  },
  {
    "id": "roadtrip",
    "icon": "🚗",
    "shortTitle": "公路環島",
    "zhTitle": "公路環島・極點壯遊與看球巡迴",
    "enTitle": "GRAND ROADTRIP & SPORTS",
    "name": "台灣極點公路壯遊與看球巡迴",
    "bannerImg": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&auto=format&fit=crop",
    "deckBg": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop",
    "title": "Grand Island Circuit & Stadium Passions · Chase Horizons",
    "subtitle": "自駕台灣四極點公路：極北富貴角、極東三貂角、極南鵝鑾鼻、極西國聖燈塔，巡迴各大城市球場熱血應援！",
    "bookingCta": {
      "charter": "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
      "hotel": "https://tw.trip.com/hotels/?Allianceid=9507030&SID=325761227",
      "tour": "https://www.klook.com/zh-TW/activity/904-penghu-day-tour-magong/?aid=123436"
    },
    "experiences": [
      {
        "icon": "⚾",
        "title": "台北大巨蛋室內主場熱血",
        "desc": "四萬人齊聲吶喊應援，震撼聲浪體驗全台頂級球場設施。"
      },
      {
        "icon": "🌊",
        "title": "蘇花改絕美斷崖公路奔馳",
        "desc": "穿越險峻懸崖隧道，右倚中央山脈、左擁無垠太平洋。"
      },
      {
        "icon": "🏁",
        "title": "台灣四極點燈塔制霸",
        "desc": "蒐集富貴角、三貂角、鵝鑾鼻、國聖燈塔壯遊印記。"
      }
    ],
    "itineraries": [
      {
        "planName": "【1 日輕旅】大巨蛋看球與都會公路行",
        "duration": "1 日熱血看球",
        "days": [
          {
            "day": "精華動線",
            "text": "信義區商圈聚餐 ➔ 台北大巨蛋/天母棒球場熱血應援看球 ➔ 賽後居酒屋慶功微醺。"
          }
        ]
      },
      {
        "planName": "【2 日漫遊】蘇花海岸公路與花東看球行",
        "duration": "2 天 1 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "台北出發經蘇花改 ➔ 崇德盈遠眺太平洋 ➔ 抵達花蓮德興棒球場看球 ➔ 東大門夜市。"
          },
          {
            "day": "Day 2",
            "text": "台 9 線縱谷公路奔馳 ➔ 多良車站遠眺 ➔ 屏東大鵬灣看海賽道返程。"
          }
        ]
      },
      {
        "planName": "【3 日縱走】極致四極點環島與球場壯遊",
        "duration": "3 天 2 夜",
        "days": [
          {
            "day": "Day 1",
            "text": "西部國道南下 ➔ 台中洲際棒球場體驗黃衫軍主場 ➔ 逢甲夜市品小吃。"
          },
          {
            "day": "Day 2",
            "text": "台南亞太棒球中心 ➔ 高雄澄清湖棒球場看台鋼雄鷹 ➔ 墾丁極南點鵝鑾鼻觀星。"
          },
          {
            "day": "Day 3",
            "text": "南迴公路台東太麻里曙光 ➔ 東海岸金尊浪人咖啡 ➔ 花蓮蘇花返程完成環島。"
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
      }
    ]
  }
];
