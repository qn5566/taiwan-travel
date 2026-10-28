#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
patch_cafe_html.py
Patches cafe.html to:
1. Include <script src="js/weekend_hop_i18n.js"></script>.
2. Add language switcher buttons: [🇹🇼 繁體中文] [🇺🇸 English] [🇯🇵 日本語].
3. Update renderHopThemesNav, renderHopShowcase, renderHopCards, and openHopArticleById
   to use getWeekendHopArticlesByLang(currentHopLang).
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CAFE_HTML_PATH = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "cafe.html")

with open(CAFE_HTML_PATH, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Add weekend_hop_i18n.js script tag if not present
if '<script src="js/weekend_hop_i18n.js"></script>' not in html:
    html = html.replace('<script src="js/data.js"></script>', '<script src="js/data.js"></script>\n  <script src="js/weekend_hop_i18n.js"></script>')
    print("Added weekend_hop_i18n.js script tag.")

# 2. Add language switcher into #section-weekend-hop
old_themes_nav = """    <!-- 主題導航切換區 (精選 4 大文青主題) -->
    <section style="background: #F9F6F0; border-bottom: 1px solid #EADBCE; padding: 22px 0; color: #2D2522; text-align: center;">
      <div class="container">
        <div style="font-size: 11.5px; font-weight: 800; color: #8C5331; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">
          CURATED COLLECTIONS ‧ 4 大慢活主題圖鑑
        </div>
        <div id="hop-themes-nav" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 1060px; margin: 0 auto;">
          <!-- 由 JS 動態生成 4 大主題按鈕 -->
        </div>
      </div>
    </section>"""

new_themes_nav = """    <!-- 週末探店 ‧ 深度慢活採訪實錄 (國際多語系切換中樞) -->
    <section style="background: #F9F6F0; border-bottom: 1px solid #EADBCE; padding: 22px 0; color: #2D2522; text-align: center;">
      <div class="container">
        <div style="font-size: 11.5px; font-weight: 800; color: #8C5331; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px;">
          WEEKEND HOP ‧ 深度慢活採訪實錄 (前後端分離・即時多語切換)
        </div>
        <!-- 語系切換按鈕 -->
        <div style="display: flex; justify-content: center; margin-bottom: 14px;">
          <div style="display: inline-flex; align-items: center; gap: 8px; background: #FFFFFF; padding: 6px 14px; border-radius: 999px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); border: 1.5px solid #EADBCE; flex-wrap: wrap;">
            <span style="font-size: 12px; font-weight: 800; color: #8C5331;">🌐 文章語系 / Language：</span>
            <button id="hop-lang-zh" class="city-pill-btn active" onclick="switchWeekendHopLanguage('zh')" style="padding: 6px 16px; font-size: 12px; font-weight: 800; border-radius: 999px;">🇹🇼 繁體中文 (10篇深度)</button>
            <button id="hop-lang-en" class="city-pill-btn" onclick="switchWeekendHopLanguage('en')" style="padding: 6px 16px; font-size: 12px; font-weight: 800; border-radius: 999px;">🇺🇸 English (10 Articles)</button>
            <button id="hop-lang-ja" class="city-pill-btn" onclick="switchWeekendHopLanguage('ja')" style="padding: 6px 16px; font-size: 12px; font-weight: 800; border-radius: 999px;">🇯🇵 日本語 (10記事)</button>
          </div>
        </div>
        <div id="hop-themes-nav" style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; max-width: 1060px; margin: 0 auto;">
          <!-- 深度文章列表指示標籤 -->
        </div>
      </div>
    </section>"""

if old_themes_nav in html:
    html = html.replace(old_themes_nav, new_themes_nav)
    print("Replaced themes nav header with multilingual switcher.")

# 3. Update the JavaScript functions for Weekend Hop
js_functions = """    /* =========================================================
       5. 週末探店 ‧ 前後端分離多語系渲染 (zh / en / ja)
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
          } else {
            btn.classList.remove('active');
            btn.style.background = '#F8F5F0';
            btn.style.color = '#2D2522';
          }
        }
      });
      renderHopThemesNav();
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
      const navContainer = document.getElementById("hop-themes-nav");
      if (!navContainer) return;
      const articles = getCurrentHopArticles();
      const count = articles.length;
      const labels = {
        zh: `📖 全台 10 篇特派員深度走訪實錄 (精選台灣深度旅行)`,
        en: `📖 10 Curated In-Depth Feature Articles (Taiwan Slow Escapes)`,
        ja: `📖 厳選 10 篇の台湾現地ディープ取材ルポ (台湾スローライフ)`
      };
      navContainer.innerHTML = `
        <div style="background: rgba(140, 83, 49, 0.08); border: 1px solid #EADBCE; border-radius: 999px; padding: 6px 18px; font-size: 13px; font-weight: 800; color: #8C5331;">
          ${labels[currentHopLang] || labels.zh}
        </div>
      `;
    }

    function switchHopTheme(themeId) {
      activeHopThemeId = themeId;
      renderHopThemesNav();
      renderHopCards();
    }

    function renderHopShowcase() {
      const showcaseEl = document.getElementById("hop-latest-popular-showcase");
      if (!showcaseEl) return;

      const articles = getCurrentHopArticles();
      if (!articles || articles.length === 0) {
        showcaseEl.innerHTML = "";
        return;
      }

      const latestArticles = articles.filter(p => p.isLatest);
      const latestArticle = latestArticles[0] || articles[0];
      const moreLatestArticles = latestArticles.slice(1, 6);
      const popularArticles = articles.filter(p => p.isPopular).slice(0, 6);

      const isEn = currentHopLang === 'en';
      const isJa = currentHopLang === 'ja';

      const heroTitle = isEn ? (latestArticle.title || latestArticle.nameEn) : latestArticle.nameZh;
      const heroSubtitle = isEn ? latestArticle.nameZh : (latestArticle.nameEn || latestArticle.subtitle);
      const readBtnText = isEn ? '📖 Read Full Story ➔' : (isJa ? '📖 記事を読む ➔' : '📖 閱讀完整專欄 ➔');
      const latestBadge = isEn ? '✨ LATEST FEATURE · SPECIAL JOURNAL' : '✨ LATEST FEATURE ‧ 最新發佈深度專欄';
      const popTitle = isEn ? '🔥 Popular Reads' : '🔥 熱門閱讀專區 Popular Reads';
      const popBadge = isEn ? 'EDITORIAL PICKS' : '編輯精選 TOP 4';

      const moreLatestHtml = moreLatestArticles.length > 0 ? `
        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.16);">
          <div style="font-size: 11px; font-weight: 800; color: #FDE68A; letter-spacing: 1.2px; margin-bottom: 8px;">
            📚 ${isEn ? 'RECENTLY PUBLISHED' : '近期同步發佈深度專欄 RECENTLY PUBLISHED'}
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${moreLatestArticles.map(item => `
              <div onclick="event.stopPropagation(); openHopArticleById('${item.id}')" style="background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 8px 12px; display: flex; align-items: center; justify-content: space-between; gap: 10px; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.18)'" onmouseout="this.style.background='rgba(255,255,255,0.10)'">
                <img src="${item.img}" alt="${item.nameZh}" loading="lazy" style="width: 44px; height: 44px; border-radius: 8px; object-fit: cover; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.25);">
                <div style="min-width: 0; flex: 1;">
                  <div style="font-size: 11px; color: #BAE6FD; font-weight: 700;">${item.vol || 'Weekend Hop'} · 📍 ${item.city}</div>
                  <div style="font-family: 'Noto Serif TC', serif; font-size: 13.5px; font-weight: 900; color: #FFFFFF; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${isEn ? (item.title || item.nameEn) : item.nameZh}</div>
                </div>
                <span style="font-size: 11.5px; font-weight: 800; color: #FDE68A; white-space: nowrap;">${isEn ? 'Read ➔' : '閱讀 ➔'}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : '';

      const popItemsHtml = popularArticles.map((item, idx) => `
        <div class="hop-popular-item" onclick="openHopArticleById('${item.id}')">
          <div style="position: relative; width: 58px; height: 58px; border-radius: 12px; overflow: hidden; flex-shrink: 0; border: 1px solid #E2E8F0;">
            <img src="${item.img}" alt="${item.nameZh}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
            <span style="position: absolute; top: 3px; left: 3px; background: ${idx === 0 ? '#C85A32' : 'rgba(15,23,42,0.82)'}; color: #FFF; font-family: 'Playfair Display', Georgia, serif; font-weight: 900; font-size: 10px; padding: 1px 5px; border-radius: 5px;">
              0${idx + 1}
            </span>
          </div>
          <div style="flex: 1; min-width: 0;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 3px; flex-wrap: wrap;">
              <span style="font-size: 10.5px; font-weight: 800; color: #8C5331; background: #FEF3C7; padding: 2px 7px; border-radius: 999px;">
                ${item.vol || 'Weekend Hop'}
              </span>
              <span style="font-size: 11px; color: #64748B; font-weight: 600;">
                🔥 ${item.readCount || '28,450 次閱讀'}
              </span>
            </div>
            <h4 style="font-family: 'Noto Serif TC', serif; font-size: 14px; font-weight: 800; color: #0F172A; line-height: 1.35; margin: 0 0 4px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${isEn ? (item.title || item.nameEn) : item.nameZh}
            </h4>
            <div style="font-size: 11.5px; color: #94A3B8; display: flex; align-items: center; justify-content: space-between;">
              <span>📍 ${item.city}</span>
              <span style="color: #C85A32; font-weight: 800;">${readBtnText}</span>
            </div>
          </div>
        </div>
      `).join("");

      showcaseEl.innerHTML = `
        <div class="hop-showcase-grid">
          <div class="hop-latest-hero-card" onclick="openHopArticleById('${latestArticle.id}')">
            <div>
              <div style="position: relative; width: 100%; height: 190px; border-radius: 16px; overflow: hidden; margin-bottom: 16px; border: 1px solid rgba(255,255,255,0.2);">
                <img src="${latestArticle.img}" alt="${latestArticle.nameZh}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
                <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.45) 0%, transparent 45%, rgba(15,23,42,0.75) 100%);"></div>
                <div style="position: absolute; top: 12px; left: 12px; right: 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                  <span style="background: #C85A32; color: #FFFFFF; font-size: 11px; font-weight: 900; letter-spacing: 1.2px; padding: 5px 12px; border-radius: 999px; text-transform: uppercase; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
                    ${latestBadge}
                  </span>
                  <span style="background: rgba(15,23,42,0.75); backdrop-filter: blur(6px); color: #BAE6FD; font-size: 11.5px; font-weight: 700; padding: 4px 10px; border-radius: 999px;">
                    📅 ${latestArticle.publishDate || '2026.10'} · ⏱️ ${latestArticle.readTime || '8 MIN READ'}
                  </span>
                </div>
                <div style="position: absolute; bottom: 10px; left: 14px; font-size: 12px; color: #FDE68A; font-weight: 800; letter-spacing: 0.8px;">
                  ${latestArticle.vol || 'Weekend Hop Vol. 10'} ｜ ${latestArticle.city}
                </div>
              </div>

              <h2 style="font-family: 'Noto Serif TC', serif; font-size: 24px; font-weight: 900; color: #FFFFFF; line-height: 1.38; margin: 0 0 8px 0;">
                ${heroTitle}
              </h2>
              <div style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: 14px; color: #E0F2FE; line-height: 1.45; margin-bottom: 14px;">
                ${heroSubtitle}
              </div>

              <p style="font-size: 13.8px; color: rgba(255, 255, 255, 0.88); line-height: 1.78; margin-bottom: 18px;">
                ${latestArticle.features}
              </p>
            </div>

            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; border-top: 1px solid rgba(255, 255, 255, 0.16); padding-top: 16px;">
                <div style="font-size: 12px; color: #BAE6FD; font-weight: 700;">
                  📍 ${latestArticle.city} · ${latestArticle.district} ｜ 🔥 ${latestArticle.readCount || '41,200 次閱讀'}
                </div>
                <span style="background: #FFFFFF; color: #0F4C81; font-size: 13px; font-weight: 900; padding: 9px 18px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(0,0,0,0.18);">
                  ${readBtnText}
                </span>
              </div>
              ${moreLatestHtml}
            </div>
          </div>

          <div class="hop-popular-list-card">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px; margin-bottom: 10px;">
                <div>
                  <span style="font-size: 11px; font-weight: 900; color: #C85A32; letter-spacing: 1.5px; text-transform: uppercase;">
                    MOST READ JOURNAL
                  </span>
                  <h3 style="font-family: 'Noto Serif TC', serif; font-size: 19px; font-weight: 900; color: #0F172A; margin: 2px 0 0 0;">
                    ${popTitle}
                  </h3>
                </div>
                <span style="font-size: 11.5px; color: #64748B; font-weight: 700;">${popBadge}</span>
              </div>

              <div>
                ${popItemsHtml}
              </div>
            </div>

            <div style="background: #FAF6F0; border-radius: 12px; padding: 10px 14px; margin-top: 10px; font-size: 12px; color: #5C5047; display: flex; align-items: center; justify-content: space-between;">
              <span>💡 ${isEn ? 'Click any card to read full article & guide' : '點擊任一專欄即可展開完整雙語長篇報導與交通指南'}</span>
              <span style="font-weight: 800; color: #8C5331;">Weekend Hop</span>
            </div>
          </div>
        </div>
      `;
    }

    function renderHopCards() {
      const container = document.getElementById("weekend-hop-cards-container");
      if (!container) return;

      renderHopShowcase();

      const articles = getCurrentHopArticles();
      const isEn = currentHopLang === 'en';
      const isJa = currentHopLang === 'ja';

      let html = `<div class="hop-editorial-grid">`;

      articles.forEach(place => {
        const titleZh = isEn ? (place.title || place.nameEn) : place.nameZh;
        const titleEn = isEn ? place.nameZh : (place.nameEn || place.subtitle);
        const tags = place.tags || [];
        const tagsPills = tags.map(t => `<span class="theme-tag-chip" style="background: #F8F5F0; border: 1px solid #E6DEC8; color: #1E293B; font-size: 11px; font-weight: 700;">${t}</span>`).join("");
        const mapUrl = place.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(place.nameZh)}`;
        const affUrl = place.affiliateUrl || mapUrl;
        const fullBtnText = isEn ? '📖 Read Full Story ➔' : (isJa ? '📖 記事を読む ➔' : '📖 閱讀完整專欄 ➔');
        const affBtnText = isEn ? '🎟️ Book on Klook ➔' : (isJa ? '🎟️ Klookで予約 ➔' : (place.affiliateLabel || '🎟️ 立即預訂 ➔'));
        const locLabel = isEn ? '📍 Location:' : '📍 地點：';
        const copyText = isEn ? '📋 Copy' : '📋 複製';

        html += `
          <article class="hop-editorial-card">
            <div>
              <div class="hop-card-cover-wrap" onclick="openHopArticleById('${place.id}')">
                <img src="${place.img}" alt="${place.nameZh}" loading="lazy" class="hop-card-cover">
                <div class="hop-card-overlay"></div>
                <div style="position: absolute; top: 14px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                  <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                    ${place.isLatest ? `<span style="background: #C85A32; color: #FFF; font-size: 11px; font-weight: 900; padding: 5px 10px; border-radius: 9999px; letter-spacing: 0.5px;">✨ NEW</span>` : ''}
                    ${place.isPopular ? `<span style="background: #D97706; color: #FFF; font-size: 11px; font-weight: 900; padding: 5px 10px; border-radius: 9999px;">🔥 TOP</span>` : ''}
                    <span style="background: rgba(255,255,255,0.92); color: #0F4C81; font-size: 11px; font-weight: 800; padding: 5px 10px; border-radius: 9999px;">
                      ✍️ ${isEn ? 'Editorial' : '編輯親訪'}
                    </span>
                  </div>
                </div>
                <div style="position: absolute; bottom: 12px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; color: #FFF; font-size: 11.5px; font-weight: 700;">
                  <span>${place.vol || 'Weekend Hop'}</span>
                  <span style="background: rgba(254, 243, 199, 0.95); color: #92400E; padding: 2px 9px; border-radius: 6px; font-weight: 900;">
                    ${place.rating || '★ 4.9'} · ${isEn ? 'In-depth' : place.reviews}
                  </span>
                </div>
              </div>

              <div class="hop-card-content" style="padding-bottom: 0;">
                <div>
                  <h3 class="hop-title-zh" onclick="openHopArticleById('${place.id}')" style="cursor: pointer;">
                    ${titleZh}
                  </h3>
                  <div class="hop-title-en">
                    ${titleEn}
                  </div>

                  <div style="font-size: 12px; color: #4A6B53; font-weight: 700; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
                    <span>🕒</span>
                    <span>${place.hours}</span>
                  </div>

                  <p class="hop-excerpt">
                    ${place.features}
                  </p>

                  ${place.authorQuote ? `
                    <div class="hop-quote-box">
                      ${place.authorQuote}
                    </div>
                  ` : ''}

                  <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
                    ${tagsPills}
                  </div>
                </div>
              </div>
            </div>

            <div style="padding: 0 30px 26px;">
              <div style="background: #FAF8F5; border: 1px solid #E6DEC8; border-radius: 12px; padding: 10px 14px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; gap: 10px;">
                <div style="font-size: 12px; color: #475569; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  ${locLabel} <strong>${place.city}</strong> · ${isEn ? (place.addressEn || place.addressZh) : place.addressZh}
                </div>
                <button class="copy-btn" onclick="copyAddress('${(place.addressZh || '').replace(/'/g, "\\'")}')">
                  ${copyText}
                </button>
              </div>

              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button onclick="openHopArticleById('${place.id}')" class="btn-action" style="flex: 1.4; background: linear-gradient(135deg, #0F4C81 0%, #1E293B 100%); color: #FFF; border: none; padding: 11px 16px; font-size: 13px; font-weight: 800; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 6px 16px rgba(15, 76, 129, 0.2);">
                  ${fullBtnText}
                </button>
                <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding: 11px 14px; font-size: 12px; border-radius: 12px; text-decoration: none;">
                  📍 Map
                </a>
                <a href="${affUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-book" style="padding: 11px 14px; font-size: 12px; border-radius: 12px; text-decoration: none;">
                  ${affBtnText}
                </a>
              </div>
            </div>
          </article>
        `;
      });

      html += `</div>`;
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
        themeName: "週末探店 ‧ 深度慢活採訪實錄"
      });
    }"""

# Replace in cafe.html between "/* =========================================================\n       5. 週末探店" and "function openArticleModal"
pattern = re.compile(r'/\* =========================================================\s*5\. 週末探店.*?\n\s*function openArticleModal', re.DOTALL)
if pattern.search(html):
    html = pattern.sub(js_functions + "\n\n    function openArticleModal", html)
    print("Replaced Weekend Hop rendering JS functions with i18n support.")
else:
    print("Warning: regex pattern did not match for Weekend Hop JS functions.")

with open(CAFE_HTML_PATH, "w", encoding="utf-8") as f:
    f.write(html)
print("Updated cafe.html successfully!")

