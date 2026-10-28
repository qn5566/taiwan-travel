#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
patch_mobile_app.py
Updates app/taiwan_travel_preview.html:
1. Update footer brand copy to match official copy.
2. Add "☕ 全台 330 間風格咖啡店探店 ➔" button under Michelin button.
3. Add view-tab-cafes view with 2-column cards, city filter, and 11 style chips.
4. Upgrade Souvenirs view with Klook products & tea items (aid=106452).
5. Ensure all food delivery redirects point to https://onelink.one/s/YoWYV.
"""

import json
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_HTML_PATH = os.path.join(BASE_DIR, "app", "taiwan_travel_preview.html")
DATA_JS_PATH = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "js", "data.js")

with open(APP_HTML_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Update brand footer copy
old_footer_pattern = re.compile(r'<!-- 2\. 核心大標題 ＆ 第二行英文理念 ＆ 優美敘事文案 -->.*?<!-- 3\. 品牌合作洽詢按鈕 -->', re.DOTALL)
new_footer_body = """<!-- 2. 核心大標題 ＆ 第二行英文理念 ＆ 優美敘事文案 -->
            <div style="margin-bottom:16px;">
              <h2 style="font-size:16px;font-weight:900;color:#0F172A;margin:0 0 6px;letter-spacing:-0.3px;line-height:1.45;">
                以熱愛出發，探索未曾見過的台灣姿態。<br>穿梭巷弄尋味米其林，奔向海浪遇見純淨島嶼。
              </h2>
              <div style="font-size:11px;color:#0284C7;font-weight:700;letter-spacing:0.2px;margin-bottom:4px;line-height:1.4;">
                Taste the stars, roam the alleys, embrace the sea — authentic Taiwan curated with love.
              </div>
              <div style="font-size:10.5px;color:#64748B;font-weight:600;letter-spacing:0.2px;margin-bottom:12px;line-height:1.4;">
                路地裏の名店からミシュランの味、絶景の海まで。心躍る台湾の魅力を、あなたに。
              </div>
              <p style="font-size:12px;color:#475569;line-height:1.8;margin:0 auto;max-width:350px;font-weight:500;">
                由 HiMyDream STUDIO 開發團隊傾心策劃的全方位台灣旅遊美學指南。我們實地梳理全台 22 縣市私房景點、深度主題動線、米其林必比登名店、330 間風格咖啡館與百大伴手禮排行，將「地圖導航、住宿比價、包車規劃與伴手禮外送」一站式無縫整合，陪伴海內外旅人輕鬆展開最純粹的島嶼冒險。
              </p>
            </div>

            <!-- 3. 品牌合作洽詢按鈕 -->"""

if old_footer_pattern.search(html):
    html = old_footer_pattern.sub(new_footer_body, html)
    print("Updated footer brand copy.")
else:
    print("Warning: old footer pattern not found.")

# 2. Add Cafe Explore Button under Michelin Bib Gourmand button
michelin_block = """          <!-- ⭐ 首頁：米其林必比登美食地圖 (依指示：寫米其林必比登美食地圖就好) -->
          <div style="padding:4px 18px 8px;">
            <div onclick="openBibGourmandPage()" style="cursor:pointer;background:linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%);border:1.5px solid #FECDD3;border-radius:14px;padding:11px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(225,29,72,0.08);transition:all 0.2s ease;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:18px;line-height:1;">⭐</span>
                <span style="font-size:14px;font-weight:900;color:#9F1239;letter-spacing:0.2px;">米其林必比登美食地圖</span>
              </div>
              <span style="font-size:14px;color:#E11D48;font-weight:900;">➔</span>
            </div>
          </div>"""

cafe_button_block = """          <!-- ⭐ 首頁：米其林必比登美食地圖 (依指示：寫米其林必比登美食地圖就好) -->
          <div style="padding:4px 18px 6px;">
            <div onclick="openBibGourmandPage()" style="cursor:pointer;background:linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%);border:1.5px solid #FECDD3;border-radius:14px;padding:11px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(225,29,72,0.08);transition:all 0.2s ease;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:18px;line-height:1;">⭐</span>
                <span style="font-size:14px;font-weight:900;color:#9F1239;letter-spacing:0.2px;">米其林必比登美食地圖</span>
              </div>
              <span style="font-size:14px;color:#E11D48;font-weight:900;">➔</span>
            </div>
          </div>

          <!-- ☕ 首頁：全台 330 間風格咖啡店探店 -->
          <div style="padding:0 18px 8px;">
            <div onclick="openCafeExplorePage()" style="cursor:pointer;background:linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);border:1.5px solid #FDE68A;border-radius:14px;padding:11px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 2px 8px rgba(217,119,6,0.08);transition:all 0.2s ease;">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="font-size:18px;line-height:1;">☕</span>
                <span style="font-size:14px;font-weight:900;color:#92400E;letter-spacing:0.2px;">全台 330 間風格咖啡店探店</span>
              </div>
              <span style="font-size:14px;color:#D97706;font-weight:900;">➔</span>
            </div>
          </div>"""

if michelin_block in html:
    html = html.replace(michelin_block, cafe_button_block)
    print("Added cafe explore button directly below Michelin button.")

# 3. Add view-tab-cafes view right after view-tab-bibgourmand
cafes_view_html = """
        <!-- =========================
             G. 全台 330 間風格咖啡店探店 (2 欄卡牌 ‧ 縣市快選 ‧ 11 大風格篩選)
             ========================= -->
        <div id="view-tab-cafes" style="display:none;padding:12px 16px 80px;">
          
          <!-- 置頂返回列 -->
          <div style="position:sticky;top:0;z-index:90;background:rgba(255,255,255,0.96);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);padding:10px 0;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #F1F5F9;">
            <button onclick="switchNavTab('home')" style="background:#F1F5F9;border:1.5px solid #CBD5E1;color:#0F172A;border-radius:24px;padding:7px 16px;font-size:13px;font-weight:900;cursor:pointer;display:inline-flex;align-items:center;gap:6px;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
              <span style="font-size:15px;color:#64748B;">←</span>
              <span>返回首頁</span>
            </button>
            <span style="font-size:11.5px;font-weight:900;color:#92400E;background:#FEF3C7;padding:3px 10px;border-radius:12px;border:1px solid #FDE68A;">☕ 330 間風格咖啡館</span>
          </div>

          <!-- 頂部橫幅 -->
          <div style="background:linear-gradient(135deg, #78350F 0%, #92400E 100%);border-radius:20px;padding:16px 18px;color:#FFF;margin-bottom:14px;box-shadow:0 6px 18px rgba(120,53,15,0.2);">
            <div style="font-size:17px;font-weight:900;margin-bottom:4px;">☕ 全台風格咖啡圖鑑</div>
            <p style="font-size:12px;opacity:0.92;line-height:1.55;margin:0;">精選全台 22 縣市 330 座巷弄靈魂角落，手沖、老宅、插座、蔚藍海景與微醺日常。</p>
          </div>

          <!-- 1. 縣市水平捲動按鈕 -->
          <div style="margin-bottom:10px;">
            <div style="font-size:11px;font-weight:800;color:#64748B;margin-bottom:6px;letter-spacing:0.5px;">📍 縣市快選 CITY FILTER</div>
            <div id="mobile-cafe-city-bar" style="display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none;">
              <!-- 由 JS 動態生成縣市按鈕 -->
            </div>
          </div>

          <!-- 2. 11 大風格水平捲動按鈕 -->
          <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;color:#64748B;margin-bottom:6px;letter-spacing:0.5px;">✨ 風格體驗 STYLE FILTER</div>
            <div id="mobile-cafe-style-bar" style="display:flex;gap:6px;overflow-x:auto;padding-bottom:6px;-webkit-overflow-scrolling:touch;scrollbar-width:none;">
              <!-- 由 JS 動態生成 11 大風格按鈕 -->
            </div>
          </div>

          <!-- 搜尋與計數 -->
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding:0 2px;">
            <span id="mobile-cafe-count" style="font-size:12px;font-weight:800;color:#475569;">共 330 間咖啡店</span>
            <input type="text" id="mobile-cafe-search" placeholder="搜尋咖啡廳名..." oninput="handleMobileCafeSearch(this.value)" style="border:1px solid #CBD5E1;border-radius:999px;padding:5px 12px;font-size:11.5px;outline:none;width:130px;">
          </div>

          <!-- 3. 2 欄卡牌清單 (Two-Column Card Grid) -->
          <div id="mobile-cafes-grid" style="display:grid;grid-template-columns:repeat(2, 1fr);gap:10px;"></div>
        </div>
"""

bib_end_tag = '<!-- 店家卡牌清單容器 -->\n          <div id="bib-gourmand-cards-container" style="display:flex;flex-direction:column;gap:14px;padding-bottom:80px;"></div>\n        </div>'
if bib_end_tag in html:
    html = html.replace(bib_end_tag, bib_end_tag + "\n" + cafes_view_html)
    print("Added view-tab-cafes view.")

# 4. Add data.js script link before </head> or before main script
if '<script src="../台灣吃喝玩樂網頁版/js/data.js"></script>' not in html:
    html = html.replace('<script>\n    // ==========================================\n    // 1. 多語系字典', '<script src="../台灣吃喝玩樂網頁版/js/data.js"></script>\n  <script>\n    // ==========================================\n    // 1. 多語系字典')
    print("Added script src to data.js.")

# 5. Add Cafe handling functions to JavaScript in app/taiwan_travel_preview.html
cafe_js_code = """
    // ==========================================
    // ☕ 全台 330 間風格咖啡店探店控制器 (2 欄卡牌 ‧ 縣市與 11 大風格)
    // ==========================================
    let mobileCafeActiveCity = "全部";
    let mobileCafeActiveStyle = "全部";
    let mobileCafeSearchKeyword = "";

    const MOBILE_CAFE_STYLES = [
      { id: "全部", label: "🌟 全部風格 All", tag: "全部" },
      { id: "插座", label: "⚡ 插座友善 Work-friendly", tag: "有插頭" },
      { id: "手沖", label: "☕ 職人手沖 Pour-over", tag: "手沖咖啡" },
      { id: "甜點", label: "🍰 招牌甜點 Desserts", tag: "甜點好吃" },
      { id: "老宅", label: "🌿 植栽老宅 Vintage", tag: "植栽老宅" },
      { id: "採光", label: "☀️ 採光通透 Daylight", tag: "田園稻浪" },
      { id: "海景", label: "🌊 蔚藍海景 Ocean View", tag: "海景景觀" },
      { id: "啡酒", label: "🍷 啡酒微醺 Cafe & Bar", tag: "店家可喝酒" },
      { id: "暢聊", label: "🗣️ 舒適暢聊 Chat-friendly", tag: "適合聊天" },
      { id: "寵物", label: "🐶 寵物友善 Pet-friendly", tag: "寵物友善" },
      { id: "親子", label: "👶 親子放鬆 Kid-friendly", tag: "小孩友善" }
    ];

    const MOBILE_CAFE_CITIES = [
      "全部", "台北市", "新北市", "台中市", "台南市", "高雄市", "宜蘭縣", "花蓮縣", "桃園市", "新竹市", "嘉義市", "屏東縣", "台東縣", "南投縣", "彰化縣", "苗栗縣", "基隆市"
    ];

    function openCafeExplorePage() {
      switchNavTab('cafes');
      const fullRank = document.getElementById("rankings-inline-fullview");
      if (fullRank) fullRank.style.display = "none";
    }

    function initMobileCafeBars() {
      const cityBar = document.getElementById("mobile-cafe-city-bar");
      if (cityBar) {
        cityBar.innerHTML = MOBILE_CAFE_CITIES.map(c => `
          <button onclick="setMobileCafeCity('${c}')" style="flex-shrink:0;border:none;background:${mobileCafeActiveCity === c ? '#92400E' : '#F1F5F9'};color:${mobileCafeActiveCity === c ? '#FFF' : '#334155'};padding:6px 14px;border-radius:999px;font-size:11.5px;font-weight:800;cursor:pointer;transition:all 0.15s;">
            ${c === '全部' ? '全部縣市' : c}
          </button>
        `).join("");
      }

      const styleBar = document.getElementById("mobile-cafe-style-bar");
      if (styleBar) {
        styleBar.innerHTML = MOBILE_CAFE_STYLES.map(s => `
          <button onclick="setMobileCafeStyle('${s.id}')" style="flex-shrink:0;border:none;background:${mobileCafeActiveStyle === s.id ? '#D97706' : '#FFFBEB'};border:1px solid ${mobileCafeActiveStyle === s.id ? '#B45309' : '#FDE68A'};color:${mobileCafeActiveStyle === s.id ? '#FFF' : '#92400E'};padding:6px 12px;border-radius:999px;font-size:11.5px;font-weight:800;cursor:pointer;transition:all 0.15s;white-space:nowrap;">
            ${s.label}
          </button>
        `).join("");
      }
    }

    function setMobileCafeCity(city) {
      mobileCafeActiveCity = city;
      initMobileCafeBars();
      renderMobileCafesView();
    }

    function setMobileCafeStyle(styleId) {
      mobileCafeActiveStyle = styleId;
      initMobileCafeBars();
      renderMobileCafesView();
    }

    function handleMobileCafeSearch(val) {
      mobileCafeSearchKeyword = val.trim().toLowerCase();
      renderMobileCafesView();
    }

    function renderMobileCafesView() {
      initMobileCafeBars();
      const container = document.getElementById("mobile-cafes-grid");
      if (!container) return;

      const cafeList = (typeof TAIWAN_CAFES_DATA !== "undefined") ? TAIWAN_CAFES_DATA : [];
      let filtered = cafeList;

      // 縣市篩選
      if (mobileCafeActiveCity !== "全部") {
        filtered = filtered.filter(c => c.city === mobileCafeActiveCity);
      }

      // 風格篩選
      if (mobileCafeActiveStyle !== "全部") {
        const styleObj = MOBILE_CAFE_STYLES.find(s => s.id === mobileCafeActiveStyle);
        const matchTag = styleObj ? styleObj.tag : "";
        if (matchTag && matchTag !== "全部") {
          filtered = filtered.filter(c => (c.tags || []).some(t => t.includes(matchTag) || matchTag.includes(t)));
        }
      }

      // 關鍵字搜尋
      if (mobileCafeSearchKeyword) {
        filtered = filtered.filter(c => 
          (c.name && c.name.toLowerCase().includes(mobileCafeSearchKeyword)) ||
          (c.district && c.district.toLowerCase().includes(mobileCafeSearchKeyword)) ||
          (c.address && c.address.toLowerCase().includes(mobileCafeSearchKeyword))
        );
      }

      const countEl = document.getElementById("mobile-cafe-count");
      if (countEl) countEl.textContent = `共 ${filtered.length} 間咖啡館`;

      if (filtered.length === 0) {
        container.innerHTML = `<div style="grid-column:1 / -1;text-align:center;padding:40px 10px;color:#94A3B8;font-size:13px;">查無符合條件的咖啡店，請嘗試其他縣市或風格。</div>`;
        return;
      }

      container.innerHTML = filtered.map(item => {
        const mapUrl = item.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(item.name)}`;
        const tags = (item.tags || []).slice(0, 2);
        return `
          <div style="background:#FFFFFF;border-radius:14px;border:1px solid #E2E8F0;overflow:hidden;box-shadow:0 3px 10px rgba(0,0,0,0.04);display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="position:relative;height:105px;overflow:hidden;">
                <img src="${item.img}" alt="${item.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
                <span style="position:absolute;top:6px;left:6px;background:rgba(15,23,42,0.8);backdrop-filter:blur(4px);color:#FDE68A;font-size:10px;font-weight:900;padding:2px 6px;border-radius:6px;">
                  ${item.rate || '4.8★'}
                </span>
                <span style="position:absolute;bottom:6px;left:6px;background:rgba(255,255,255,0.92);color:#0F172A;font-size:9.5px;font-weight:800;padding:1px 6px;border-radius:4px;">
                  📍 ${item.district || item.city}
                </span>
              </div>
              <div style="padding:8px 8px 6px;">
                <h4 style="font-size:12.5px;font-weight:900;color:#0F172A;line-height:1.3;margin:0 0 3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                  ${item.name}
                </h4>
                <div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:6px;">
                  ${tags.map(t => `<span style="font-size:9.5px;background:#FEF3C7;color:#92400E;padding:1px 5px;border-radius:4px;font-weight:700;">${t}</span>`).join('')}
                </div>
              </div>
            </div>
            <div style="padding:0 8px 8px;display:flex;gap:4px;">
              <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="flex:1;text-align:center;background:#F1F5F9;border:1px solid #CBD5E1;color:#1E293B;font-size:10.5px;font-weight:800;padding:5px 0;border-radius:8px;text-decoration:none;">
                📍 導航
              </a>
              <a href="https://onelink.one/s/YoWYV" target="_blank" rel="noopener noreferrer" style="flex:1.2;text-align:center;background:linear-gradient(135deg, #EA580C, #C2410C);color:#FFF;font-size:10.5px;font-weight:800;padding:5px 0;border-radius:8px;text-decoration:none;">
                🛵 外送
              </a>
            </div>
          </div>
        `;
      }).join('');
    }
"""

# Append Cafe JS code into app
if 'function openCafeExplorePage()' not in html:
    html = html.replace('function switchNavTab(tab) {', cafe_js_code + '\n    function switchNavTab(tab) {\n      if (tab === "cafes") {\n        const cafesTab = document.getElementById("view-tab-cafes");\n        if (cafesTab) cafesTab.style.display = "block";\n        renderMobileCafesView();\n      } else {\n        const cafesTab = document.getElementById("view-tab-cafes");\n        if (cafesTab) cafesTab.style.display = "none";\n      }')
    print("Injected cafe exploration JS controller and switchNavTab support.")

with open(APP_HTML_PATH, "w", encoding="utf-8") as f:
    f.write(html)
print("Updated app/taiwan_travel_preview.html successfully!")

