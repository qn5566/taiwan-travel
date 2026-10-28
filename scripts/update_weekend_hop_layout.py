#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
update_weekend_hop_layout.py
1. Fixes TOP_ACTIVITIES_6 in data.js to use high-res official Klook CDN images
   with local fallback, fixing broken images for "台灣一日遊行程推薦".
2. Updates app.js renderTrendingSection with onerror fallback.
3. In cafe.html:
   - Replaces the lopsided showcase with a perfectly balanced 2-column grid (兩個一排左右平衡).
   - Links language toggle to load Chinese, English, and Japanese articles.
"""

import json
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS_PATH = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "js", "data.js")
APP_JS_PATH = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "js", "app.js")
CAFE_HTML_PATH = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "cafe.html")

# 1. Update TOP_ACTIVITIES_6 in data.js with robust high-res CDN images
top_6_activities = [
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
        "img": "https://res.klook.com/image/upload/activities/blrsgduhafoom0ktfitu.jpg",
        "localImg": "assets/shifen_lantern_tour.png",
        "activityId": "9909-popular-sightseeing-charter-tour-taipei",
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
        "img": "https://res.klook.com/image/upload/activities/dhedvuh7p4giwb5rbzpc.jpg",
        "localImg": "assets/taroko_gorge_tour.jpg",
        "activityId": "30704-taroko-private-charter-car",
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
        "img": "https://res.klook.com/image/upload/activities/xaqfhkhyjp787li8wq7p.jpg",
        "localImg": "assets/sun_moon_lake_tour.png",
        "activityId": "88853-private-sightseeing-charter-trip-taichung",
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
        "img": "https://res.klook.com/image/upload/activities/s0g7warervu2v5rlgw4f.jpg",
        "localImg": "assets/alishan_train_tour.jpg",
        "activityId": "86344-alishan-day-tour-from-taichung-chiayi-kaohsiung",
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
        "img": "https://res.klook.com/image/upload/activities/obwvdccul5xv1yxh71fx.jpg",
        "localImg": "assets/tainan_sicao_tour.jpg",
        "activityId": "14548-popular-sightseeing-private-car-charter-kaohsiung-tainan",
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
        "img": "https://res.klook.com/image/upload/activities/mrhtawkorlt4gc71o9fr.jpg",
        "localImg": "assets/kenting_coastal_tour.jpg",
        "activityId": "14560-popular-sightseeing-private-car-charter-kaohsiung-kenting",
        "badge": "TOP 6 COASTAL"
    }
]

with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
    data_text = f.read()

# Replace TOP_ACTIVITIES_6
top6_regex = re.compile(r'const TOP_ACTIVITIES_6 = \[.*?\];', re.DOTALL)
new_top6_js = "const TOP_ACTIVITIES_6 = " + json.dumps(top_6_activities, ensure_ascii=False, indent=2) + ";"
data_text = top6_regex.sub(new_top6_js, data_text)

with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
    f.write(data_text)
print("Updated TOP_ACTIVITIES_6 in data.js with robust CDN images.")

# 2. Update app.js renderTrendingSection with onerror fallback
with open(APP_JS_PATH, "r", encoding="utf-8") as f:
    app_text = f.read()

old_trending_func = """function renderTrendingSection() {
  const container = document.getElementById("trending-capsule-row");
  if (!container || typeof TOP_ACTIVITIES_6 === "undefined") return;

  const isEn = (currentLang === "en");

  container.innerHTML = TOP_ACTIVITIES_6.map(item => {
    const klookUrl = AFFILIATE_HUB.getTourUrl(item.activityId);
    const title = (isEn && item.enName) ? item.enName : item.name;
    const ctaText = isEn ? "Book ➔" : "預定去 ➔";
    return `
      <div class="pill-card-item" onclick="window.open('${klookUrl}', '_blank')" title="${title}" style="cursor: pointer;">
        <div class="pill-window">
          <img src="${item.img}" alt="${title}" loading="lazy">
          <div class="pill-window-overlay"></div>
        </div>
        <div class="pill-info-block">
          <div class="pill-title" style="cursor: pointer; margin-bottom: 8px;">${title}</div>
          <span class="pill-klook-cta" style="cursor: pointer;">${ctaText}</span>
        </div>
      </div>
    `;
  }).join("");
}"""

new_trending_func = """function renderTrendingSection() {
  const container = document.getElementById("trending-capsule-row");
  if (!container || typeof TOP_ACTIVITIES_6 === "undefined") return;

  const isEn = (currentLang === "en");

  container.innerHTML = TOP_ACTIVITIES_6.map(item => {
    const klookUrl = (typeof AFFILIATE_HUB !== "undefined" && AFFILIATE_HUB.getTourUrl) 
      ? AFFILIATE_HUB.getTourUrl(item.activityId) 
      : `https://www.klook.com/zh-TW/activity/${item.activityId}/?aid=106452`;
    const title = (isEn && item.enName) ? item.enName : item.name;
    const ctaText = isEn ? "Book ➔" : "預定去 ➔";
    const fallbackImg = item.localImg || item.img;
    return `
      <div class="pill-card-item" onclick="window.open('${klookUrl}', '_blank')" title="${title}" style="cursor: pointer;">
        <div class="pill-window">
          <img src="${item.img}" alt="${title}" loading="lazy" onerror="this.onerror=null;this.src='${fallbackImg}';">
          <div class="pill-window-overlay"></div>
        </div>
        <div class="pill-info-block">
          <div class="pill-title" style="cursor: pointer; margin-bottom: 8px;">${title}</div>
          <span class="pill-klook-cta" style="cursor: pointer;">${ctaText}</span>
        </div>
      </div>
    `;
  }).join("");
}"""

if old_trending_func in app_text:
    app_text = app_text.replace(old_trending_func, new_trending_func)
    with open(APP_JS_PATH, "w", encoding="utf-8") as f:
        f.write(app_text)
    print("Updated renderTrendingSection in app.js with onerror resilience.")

# 3. In cafe.html, implement the balanced 2-column layout (兩個一排左右平衡)
with open(CAFE_HTML_PATH, "r", encoding="utf-8") as f:
    cafe_html = f.read()

# Replace Weekend Hop rendering in cafe.html
new_hop_rendering = """    /* =========================================================
       5. 週末探店 ‧ 前後端分離多語系渲染 (兩個一排 ‧ 左右對稱平衡)
       ========================================================= */
    let currentHopLang = 'zh';

    function switchWeekendHopLanguage(lang) {
      currentHopLang = lang;
      ['zh', 'en', 'ja'].forEach(l => {
        const btn = document.getElementById('hop-lang-' + l);
        if (btn) {
          if (l === lang) {
            btn.classList.add('active');
            btn.style.background = '#8C5331';
            btn.style.color = '#FFFFFF';
            btn.style.borderColor = '#8C5331';
          } else {
            btn.classList.remove('active');
            btn.style.background = '#FFFFFF';
            btn.style.color = '#475569';
            btn.style.borderColor = '#E2E8F0';
          }
        }
      });
      renderHopCards();
    }

    function getCurrentHopArticles() {
      if (typeof WEEKEND_HOP_I18N !== "undefined" && WEEKEND_HOP_I18N[currentHopLang]) {
        return WEEKEND_HOP_I18N[currentHopLang];
      }
      if (typeof WEEKEND_HOP_8_THEMES !== "undefined" && WEEKEND_HOP_8_THEMES[0] && WEEKEND_HOP_8_THEMES[0].places) {
        return WEEKEND_HOP_8_THEMES[0].places;
      }
      return [];
    }

    function renderHopThemesNav() {
      // 左右平衡排版，不再需要多餘導航列
    }

    function switchHopTheme(themeId) {
      renderHopCards();
    }

    function renderHopCards() {
      const showcaseEl = document.getElementById("hop-latest-popular-showcase");
      if (showcaseEl) showcaseEl.innerHTML = ""; // 移除舊版左右不對稱 Showcase

      const container = document.getElementById("weekend-hop-cards-container");
      if (!container) return;

      const articles = getCurrentHopArticles();
      const isEn = currentHopLang === 'en';
      const isJa = currentHopLang === 'ja';

      // 兩個一排：左右對稱平衡的響應式網格 (Balanced 2-Column Grid)
      let html = `
        <div style="max-width: 1200px; margin: 0 auto;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; padding-bottom: 14px; border-bottom: 2px solid #EADBCE; flex-wrap: wrap; gap: 10px;">
            <div>
              <div style="font-size: 11px; font-weight: 900; color: #C85A32; letter-spacing: 2px; text-transform: uppercase;">
                ${isEn ? 'CURATED EDITORIAL STORIES' : '週末探店 ‧ 深度慢活採訪實錄'}
              </div>
              <h2 style="font-family: 'Noto Serif TC', serif; font-size: 22px; font-weight: 900; color: #1E293B; margin: 4px 0 0;">
                ${isEn ? '10 In-Depth Feature Articles' : '10 篇特派員深度走訪專欄 (兩個一排 · 雙欄平衡圖鑑)'}
              </h2>
            </div>
            <div style="font-size: 12.5px; color: #64748B; font-weight: 700;">
              ${isEn ? 'Showing 10 Curated Journals' : '全台 10 篇採訪實錄'}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px;">
      `;

      articles.forEach((place, index) => {
        const titleZh = isEn ? (place.title || place.nameEn) : place.nameZh;
        const titleEn = isEn ? place.nameZh : (place.nameEn || place.subtitle);
        const tags = (place.tags || []).slice(0, 3);
        const tagsPills = tags.map(t => `<span style="background: #F8F5F0; border: 1px solid #E6DEC8; color: #1E293B; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px;">${t}</span>`).join("");
        const mapUrl = place.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(place.nameZh)}`;
        const affUrl = place.affiliateUrl || mapUrl;
        const fullBtnText = isEn ? '📖 Read Full Story ➔' : (isJa ? '📖 記事を読む ➔' : '📖 閱讀完整專欄 ➔');
        const affBtnText = isEn ? '🎟️ Book on Klook ➔' : (isJa ? '🎟️ Klookで予約 ➔' : '🎟️ Klook 預訂 ➔');
        const locLabel = isEn ? '📍 Location:' : '📍 地點：';
        const copyText = isEn ? '📋 Copy' : '📋 複製';

        html += `
          <article class="hop-editorial-card" style="background: #FFFFFF; border-radius: 20px; border: 1.5px solid #EADBCE; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.04); display: flex; flex-direction: column; justify-content: space-between; transition: all 0.25s ease;">
            <div>
              <div class="hop-card-cover-wrap" onclick="openHopArticleById('${place.id}')" style="position: relative; height: 230px; overflow: hidden; cursor: pointer;">
                <img src="${place.img}" alt="${place.nameZh}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.4) 0%, transparent 45%, rgba(15,23,42,0.7) 100%);"></div>
                
                <div style="position: absolute; top: 12px; left: 14px; right: 14px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px;">
                  <span style="background: #C85A32; color: #FFF; font-size: 10.5px; font-weight: 900; padding: 4px 10px; border-radius: 9999px;">
                    ${place.vol || ('Weekend Hop Vol. ' + (10 - index))}
                  </span>
                  <span style="background: rgba(15,23,42,0.75); backdrop-filter: blur(4px); color: #BAE6FD; font-size: 11px; font-weight: 700; padding: 3px 8px; border-radius: 6px;">
                    📅 ${place.publishDate || '2026.10'} · ⏱️ ${place.readTime || '10 MIN'}
                  </span>
                </div>

                <div style="position: absolute; bottom: 10px; left: 14px; right: 14px; display: flex; justify-content: space-between; align-items: center; color: #FFF; font-size: 12px; font-weight: 800;">
                  <span style="color: #FDE68A;">📍 ${place.city} · ${place.district || ''}</span>
                  <span style="background: rgba(254, 243, 199, 0.95); color: #92400E; padding: 2px 8px; border-radius: 6px; font-size: 11px; font-weight: 900;">
                    ${place.rating || '★ 4.9'}
                  </span>
                </div>
              </div>

              <div style="padding: 18px 20px 12px;">
                <h3 onclick="openHopArticleById('${place.id}')" style="cursor: pointer; font-family: 'Noto Serif TC', serif; font-size: 17px; font-weight: 900; color: #0F172A; line-height: 1.4; margin: 0 0 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 48px;">
                  ${titleZh}
                </h3>
                <div style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: 12.5px; color: #64748B; margin-bottom: 10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  ${titleEn}
                </div>

                <p style="font-size: 13px; color: #475569; line-height: 1.65; margin: 0 0 12px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 64px;">
                  ${place.features}
                </p>

                <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
                  ${tagsPills}
                </div>
              </div>
            </div>

            <div style="padding: 0 20px 18px;">
              <div style="background: #FAF8F5; border: 1px solid #E6DEC8; border-radius: 10px; padding: 8px 12px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                <div style="font-size: 11.5px; color: #475569; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;">
                  ${locLabel} ${isEn ? (place.addressEn || place.addressZh) : place.addressZh}
                </div>
                <button class="copy-btn" onclick="copyAddress('${(place.addressZh || '').replace(/'/g, "\\\\'")}')" style="border: 1px solid #CBD5E1; background: #FFF; border-radius: 6px; padding: 3px 8px; font-size: 11px; font-weight: 800; cursor: pointer;">
                  ${copyText}
                </button>
              </div>

              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button onclick="openHopArticleById('${place.id}')" style="flex: 1.4; background: linear-gradient(135deg, #0F4C81 0%, #1E293B 100%); color: #FFF; border: none; padding: 10px 14px; font-size: 12.5px; font-weight: 800; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 4px 12px rgba(15, 76, 129, 0.2);">
                  ${fullBtnText}
                </button>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="padding: 10px 12px; font-size: 11.5px; font-weight: 800; border-radius: 10px; text-decoration: none; background: #F1F5F9; border: 1px solid #CBD5E1; color: #1E293B; display: inline-flex; align-items: center;">
                  📍 Map
                </a>
                <a href="${affUrl}" target="_blank" rel="noopener noreferrer" style="padding: 10px 12px; font-size: 11.5px; font-weight: 800; border-radius: 10px; text-decoration: none; background: linear-gradient(135deg, #FF5B00 0%, #E04E00 100%); color: #FFF; display: inline-flex; align-items: center; box-shadow: 0 3px 10px rgba(224, 78, 0, 0.25);">
                  ${affBtnText}
                </a>
              </div>
            </div>
          </article>
        `;
      });

      html += `
          </div>
        </div>
      `;
      container.innerHTML = html;
    }

    function openHopArticleById(placeId) {
      const articles = getCurrentHopArticles();
      let foundPlace = articles.find(p => p.id === placeId);
      if (!foundPlace && typeof WEEKEND_HOP_I18N !== "undefined") {
        for (const l in WEEKEND_HOP_I18N) {
          foundPlace = WEEKEND_HOP_I18N[l].find(p => p.id === placeId);
          if (foundPlace) break;
        }
      }
      if (!foundPlace && typeof WEEKEND_HOP_8_THEMES !== "undefined" && WEEKEND_HOP_8_THEMES[0]) {
        foundPlace = (WEEKEND_HOP_8_THEMES[0].places || []).find(p => p.id === placeId);
      }
      if (!foundPlace) return;

      renderArticleModalContent({
        ...foundPlace,
        themeName: currentHopLang === 'en' ? 'Weekend Hop · Special Journal' : '週末探店 ‧ 深度慢活採訪實錄'
      });
    }"""

# Pattern to replace in cafe.html
pattern = re.compile(r'/\* =========================================================\s*5\. 週末探店.*?\n\s*function openArticleModal', re.DOTALL)
if pattern.search(cafe_html):
    cafe_html = pattern.sub(new_hop_rendering + "\n\n    function openArticleModal", cafe_html)
    with open(CAFE_HTML_PATH, "w", encoding="utf-8") as f:
        f.write(cafe_html)
    print("Updated cafe.html with balanced 2-column layout!")
else:
    print("Warning: could not find Weekend Hop function pattern in cafe.html")
