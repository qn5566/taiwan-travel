#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
patch_mobile_souvenirs.py
Updates TAIWAN_SOUVENIRS_DATA and renderSouvenirsView in app/taiwan_travel_preview.html
with authentic Klook products and tea items (aid=106452), Klook CDN images,
and button '🛍️ 訂購直送飯店 ➔'.
"""

import json
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_HTML_PATH = os.path.join(BASE_DIR, "app", "taiwan_travel_preview.html")

DELIVERY_REDIRECT = "https://onelink.one/s/YoWYV"

# 20 curated souvenir & tea items
curated_souvenirs = [
    {
        "rank": 1,
        "name": "佳德糕餅 原味鳳梨酥",
        "city": "台北市松山區",
        "price": "NT$ 312 起",
        "highlight": "台北最佳伴手禮冠軍！皮薄餡多鬆香不黏牙，外籍旅客指定必買，Klook 官方全台宅配直送飯店及機場領取。",
        "img": "https://res.klook.com/image/upload/activities/tleeetz29fahtcfq9pxx.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/26641-chia-te-bakery-pineapple-cake-souvenir-set-delivery-taipei?aid=106452",
        "tag": "Klook 官方直送",
        "isKlook": True
    },
    {
        "rank": 2,
        "name": "小潘蛋糕坊 招牌鳳凰酥",
        "city": "新北市板橋區",
        "price": "NT$ 377 起",
        "highlight": "板橋巷弄排隊神店！鹹香蛋黃揉合冬瓜鳳梨餡，外皮入口即化濃郁奶香，免排隊直配下榻飯店大廳。",
        "img": "https://res.klook.com/image/upload/activities/lqzrcpabnn4m7rdiuxas.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/23075-pans-cake-pineapple-pastry-souvenir-set-taipei?aid=106452",
        "tag": "Klook 官方直送",
        "isKlook": True
    },
    {
        "rank": 3,
        "name": "糖村 法式經典牛軋糖",
        "city": "台中市西屯區",
        "price": "NT$ 480 起",
        "highlight": "比利時原味天然奶香搭配低溫烘烤加州香脆杏仁粒，米其林推薦全台最美味牛軋糖，全台低溫直送。",
        "img": "https://res.klook.com/image/upload/activities/nu4kgoykhgj7i8xclmsy.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/85580-sugar-and-spice-french-nougat?aid=106452",
        "tag": "Klook 官方直送",
        "isKlook": True
    },
    {
        "rank": 4,
        "name": "海邊走走 經典肉鬆與花生蛋捲",
        "city": "新北市淡水區",
        "price": "NT$ 1,000 起",
        "highlight": "淡水手工厚蛋捲代表！純手工煎烤不加一滴水，灌入濃郁花生醬與後腿豬肉鬆，口感酥脆扎實。",
        "img": "https://res.klook.com/image/upload/activities/mmm1isndzwxjgzgl3b6e.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/89958-hiwalk-egg-rolls-home-delivery-airport-pick-up?aid=106452",
        "tag": "Klook 官方直送",
        "isKlook": True
    },
    {
        "rank": 5,
        "name": "南投和菓森林 原葉紅茶禮盒",
        "city": "南投縣魚池鄉",
        "price": "NT$ 198 起",
        "highlight": "承襲日治皇家製茶技藝，日月潭魚池老茶樹手採原葉，帶有天然薄荷與肉桂香，產地直出。",
        "img": "https://res.klook.com/image/upload/activities/pw7xwggdplhsotlcu5vd.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/58136-hugosum-flower-tea-bag-blessing-bag-black-tea-soap-diy-experience-nantou?aid=106452",
        "tag": "台灣頂級紅茶",
        "isKlook": True
    },
    {
        "rank": 6,
        "name": "阿里山高山茶 漫遊茶禮盒",
        "city": "嘉義縣阿里山鄉",
        "price": "NT$ 450 起",
        "highlight": "海拔1,400米雲霧淬鍊！大阿里山手採高冷烏龍茶，冷香清幽、喉韻深長回甘。",
        "img": "https://res.klook.com/image/upload/activities/rbgezftcckacrmx1ebqo.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/94760-alishan-funpass-chiayi?aid=106452",
        "tag": "阿里山原葉茶",
        "isKlook": True
    },
    {
        "rank": 7,
        "name": "聖瑪莉 一口鳳梨酥經典禮盒",
        "city": "台北市大安區",
        "price": "NT$ 390 起",
        "highlight": "一口一顆剛剛好！外皮酥鬆細膩，冬瓜鳳梨餡甘甜微酸，全台宅配直送飯店及機場領取。",
        "img": "https://res.klook.com/image/upload/activities/ldys70lczlf3dwbhhske.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/23753-sunmerry-pineapple-shortcake-souvenir-set-taipei?aid=106452",
        "tag": "Klook 官方直送",
        "isKlook": True
    },
    {
        "rank": 8,
        "name": "大黑松小倆口 牛軋糖名店禮盒",
        "city": "台北市萬華區",
        "price": "NT$ 320 起",
        "highlight": "台灣一甲子製糖老字號！保留傳統古法製糖，奶香濃郁、飽滿香脆花生仁。",
        "img": "https://res.klook.com/image/upload/activities/meuwbopa8njaexxgdmf9.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/76047-salico-foods-butter-nougat-chestnut-candy-peanut-nougat-nougat-crackers-box-taiwan?aid=106452",
        "tag": "經典老字號",
        "isKlook": True
    },
    {
        "rank": 9,
        "name": "天仁茗茶 喫茶趣原葉茶即享券",
        "city": "全台門市直送",
        "price": "NT$ 100 起",
        "highlight": "華人茶界領導品牌！高山烏龍、凍頂烏龍與金萱茶，原片真空充氮保鮮。",
        "img": "https://res.klook.com/image/upload/activities/rzjcymiy7gwdsnq0zaso.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/69997-cha-for-tea-taiwan?aid=106452",
        "tag": "原葉茶首選",
        "isKlook": True
    },
    {
        "rank": 10,
        "name": "臺灣客家茶文化館 東方美人茶",
        "city": "桃園市龍潭區",
        "price": "NT$ 80 起",
        "highlight": "小綠葉蟬叮咬熟成天然蜂蜜香！琥珀色茶湯散發天然熟果芬芳。",
        "img": "https://res.klook.com/image/upload/activities/utbnaeioioycapgaje1n.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/133613-oriental-beauty-tea-culture-museum-of-taiwan?aid=106452",
        "tag": "特等蜜香紅茶",
        "isKlook": True
    },
    {
        "rank": 11,
        "name": "黑橋牌 香腸與手工肉乾伴手禮",
        "city": "台南市南區",
        "price": "NT$ 495 起",
        "highlight": "台灣肉製品傳奇標竿！優質後腿豬肉獨門醬汁慢火烘烤，厚醇多汁。",
        "img": "https://res.klook.com/image/upload/activities/wyxxzbexnefhatqxiu4s.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/41178-tainan-black-bridge-sausage-museum-keyring-diy?aid=106452",
        "tag": "台南名產",
        "isKlook": True
    },
    {
        "rank": 12,
        "name": "郭元益 懷舊糕餅鳳梨酥禮盒 DIY",
        "city": "台北市士林區",
        "price": "NT$ 640 起",
        "highlight": "百年漢餅第一品牌！傳承五代招牌冰沙餡餅、金獎鳳梨酥與綠豆椪。",
        "img": "https://res.klook.com/image/upload/activities/sxtehhlj2fpuiigkzcff.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/57963-taipei-kuo-yuan-ye-foods-mango-crisp-diy-experience-diy-experience?aid=106452",
        "tag": "百年漢餅",
        "isKlook": True
    },
    {
        "rank": 13,
        "name": "九份吾穀茶糧 客家擂茶原葉茶",
        "city": "新北市瑞芳區",
        "price": "NT$ 499 起",
        "highlight": "台灣五穀雜糧與高山綠茶結合，低溫慢烘保留純淨營養，香醇濃郁。",
        "img": "https://res.klook.com/image/upload/activities/ox6tbtb1c0adsw5wfai7.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/19770-siidcha-teahouse-taipei?aid=106452",
        "tag": "九份文創茶禮",
        "isKlook": True
    },
    {
        "rank": 14,
        "name": "坪林茶業博物館 文山包種茶",
        "city": "新北市坪林區",
        "price": "NT$ 1,600 起",
        "highlight": "翡翠水庫純淨水源灌溉！散發優雅清幽花香，香氣撲鼻、喉韻爽冽甘美。",
        "img": "https://res.klook.com/image/upload/activities/omfmczizkpgrjly5qeic.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/3209-thousand-island-lake-pinglin-tea-plantation-taipei?aid=106452",
        "tag": "清香型包種",
        "isKlook": True
    },
    {
        "rank": 15,
        "name": "九份海悅樓 台灣烏龍茶席餐券",
        "city": "新北市瑞芳區",
        "price": "NT$ 398 起",
        "highlight": "正對阿妹茶樓絕景！品嚐高山烏龍茶佐手工茶點，在山海雲霧中品味台灣茶藝。",
        "img": "https://res.klook.com/image/upload/activities/snjvegkanaybvxxefdo4.jpg",
        "buyUrl": "https://www.klook.com/zh-TW/activity/8569-skyline-teahouse-in-jiufen-voucher-taipei?aid=106452",
        "tag": "山城茶席",
        "isKlook": True
    },
    {
        "rank": 16,
        "name": "微熱山丘 經典土鳳梨酥",
        "city": "南投縣南投市",
        "price": "NT$ 450",
        "highlight": "100% 台灣在地土鳳梨熬煮纖維內餡，搭配天然紐西蘭奶油烘烤香酥外皮。",
        "img": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop",
        "buyUrl": DELIVERY_REDIRECT,
        "tag": "土鳳梨酸甜",
        "isKlook": False
    },
    {
        "rank": 17,
        "name": "陳耀訓·麵包埠 紅土蛋黃酥",
        "city": "台北市松山區",
        "price": "NT$ 980",
        "highlight": "世界麵包冠軍陳耀訓親自監製！22天紅土醃漬鹹蛋黃佐丹麥天然奶油。",
        "img": "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop",
        "buyUrl": DELIVERY_REDIRECT,
        "tag": "秒殺蛋黃酥",
        "isKlook": False
    },
    {
        "rank": 18,
        "name": "阿聰師 大甲芋頭酥創始禮盒",
        "city": "台中市大甲區",
        "price": "NT$ 380",
        "highlight": "大甲芋頭酥創始鼻祖！純手工揉製層層紫色螺旋酥皮，新鮮檳榔心芋泥綿密。",
        "img": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop",
        "buyUrl": DELIVERY_REDIRECT,
        "tag": "大甲芋頭",
        "isKlook": False
    },
    {
        "rank": 19,
        "name": "金門雙龍牌 一條根舒緩貼布",
        "city": "金門縣金城鎮",
        "price": "NT$ 180",
        "highlight": "台灣健行自由行神物！天然草本一條根萃取，溫熱舒緩肩頸緊繃與雙腿酸痛。",
        "img": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&auto=format&fit=crop",
        "buyUrl": DELIVERY_REDIRECT,
        "tag": "旅行必備",
        "isKlook": False
    },
    {
        "rank": 20,
        "name": "京都念慈菴 川貝枇杷膏隨身包",
        "city": "台北市大安區",
        "price": "NT$ 160",
        "highlight": "天然草本古法煉製，潤喉止咳生津潤燥，隨身即開即飲護嗓首選。",
        "img": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=500&auto=format&fit=crop",
        "buyUrl": DELIVERY_REDIRECT,
        "tag": "護嗓喉糖",
        "isKlook": False
    }
]

with open(APP_HTML_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# Replace TAIWAN_SOUVENIRS_DATA in app
old_souvenirs_regex = re.compile(r'const TAIWAN_SOUVENIRS_DATA = \[.*?\];', re.DOTALL)
new_souvenirs_js = "const TAIWAN_SOUVENIRS_DATA = " + json.dumps(curated_souvenirs, ensure_ascii=False, indent=2) + ";"

if old_souvenirs_regex.search(html):
    html = old_souvenirs_regex.sub(new_souvenirs_js, html)
    print("Updated TAIWAN_SOUVENIRS_DATA in app.")

# Replace renderSouvenirsView function in app
old_render_regex = re.compile(r'function renderSouvenirsView\(\) \{.*?\n    function filterSouvenirsView', re.DOTALL)
new_render_souvenirs = """function renderSouvenirsView() {
      const container = document.getElementById("souvenirs-list-container");
      if (!container) return;
      container.innerHTML = TAIWAN_SOUVENIRS_DATA.map(p => {
        const isKlook = p.isKlook || (p.buyUrl && p.buyUrl.includes('klook.com'));
        const btnText = isKlook ? '🛍️ 訂購直送飯店 ➔' : '🛵 訂購外送 ➔';
        const btnStyle = isKlook
          ? 'background:linear-gradient(135deg, #FF5B00 0%, #E04E00 100%);color:#FFF;box-shadow:0 3px 10px rgba(224,78,0,0.25);'
          : 'background:linear-gradient(135deg, #10B981 0%, #059669 100%);color:#FFF;';

        return `
          <div style="background:#FFFFFF;border-radius:18px;border:1px solid #F1F5F9;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.05);display:flex;flex-direction:column;justify-content:space-between;transition:all 0.2s ease;">
            <div>
              <div style="position:relative;height:120px;overflow:hidden;">
                <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;" loading="lazy">
                <span style="position:absolute;top:8px;left:8px;background:${isKlook ? '#FF5B00' : 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)'};color:#FFF;font-size:10px;font-weight:900;padding:2px 8px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.25);">
                  TOP ${p.rank}
                </span>
                ${isKlook ? '<span style="position:absolute;top:8px;right:8px;background:#FFF;color:#FF5B00;font-size:9.5px;font-weight:900;padding:2px 6px;border-radius:6px;box-shadow:0 2px 5px rgba(0,0,0,0.15);">Klook 直送</span>' : ''}
                <span style="position:absolute;bottom:6px;left:6px;background:rgba(15,23,42,0.72);backdrop-filter:blur(4px);color:#FFF;font-size:9.5px;font-weight:700;padding:2px 6px;border-radius:6px;">
                  📍 ${p.city}
                </span>
              </div>
              <div style="padding:10px 10px 8px;">
                <div style="font-size:13px;font-weight:900;color:#0F172A;margin-bottom:3px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;">
                  ${p.name}
                </div>
                <div style="font-size:11px;font-weight:900;color:#DC2626;margin-bottom:5px;">
                  ${p.price}
                </div>
                <div style="font-size:10.5px;color:#64748B;line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;margin-bottom:6px;">
                  ${p.highlight}
                </div>
              </div>
            </div>
            <div style="padding:0 10px 12px;">
              <a href="${p.buyUrl}" target="_blank" rel="noopener noreferrer" style="width:100%;justify-content:center;padding:8px 0;font-size:11.5px;font-weight:900;border-radius:10px;display:flex;align-items:center;gap:4px;text-decoration:none;transition:transform 0.15s;${btnStyle}">
                ${btnText}
              </a>
            </div>
          </div>
        `;
      }).join('');
    }

    function filterSouvenirsView"""

if old_render_regex.search(html):
    html = old_render_regex.sub(new_render_souvenirs, html)
    print("Updated renderSouvenirsView function in app.")

with open(APP_HTML_PATH, "w", encoding="utf-8") as f:
    f.write(html)
print("Updated souvenirs in app/taiwan_travel_preview.html successfully!")

