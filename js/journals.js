/** Standalone journals page: localized article list and full article reader. */
let currentHopLang = 'zh';

const HOP_LANG_LABELS = {
  zh: { title: "深度慢活採訪實錄", subtitle: "以熱愛出發，實地踩點山海與人文動線。不只是旅行，更是與島嶼呼吸的生活提案。" },
  en: { title: "The Definitive Island Journals ‧ 72-Hour Expeditions", subtitle: "From sacred alpine canopies to deep Pacific swells — authentic Taiwan curated with heartfelt slow living." },
  ja: { title: "【台湾漫遊】深度慢活取材実録", subtitle: "歴史ある問屋街からエメラルドグリーンの海岸線まで、現地編集部が厳選した台湾極上ガイド。" },
  ko: { title: "심층 생활 취재 기록", subtitle: "산과 바다, 사람의 이야기를 직접 발로 뛰며 전하는 대만 여행 가이드." },
  vi: { title: "Ký sự khám phá địa phương", subtitle: "Tự mình khám phá núi non, biển cả và nhịp sống con người Đài Loan." },
  th: { title: "บันทึกการท่องเที่ยวเชิงลึก", subtitle: "ออกเดินสำรวจภูเขา ทะเล และวิถีชีวิตผู้คนไต้หวันด้วยตนเอง" },
  id: { title: "Jurnal Eksplorasi Lokal", subtitle: "Menjelajahi pegunungan, laut, dan kehidupan masyarakat Taiwan secara langsung." },
  ms: { title: "Jurnal Penerokaan Setempat", subtitle: "Meneroka gunung, laut, dan kehidupan masyarakat Taiwan secara langsung." },
  fil: { title: "Journal ng Lokal na Paggalugad", subtitle: "Tuklasin ang bundok, dagat, at buhay ng mga tao sa Taiwan." },
  hi: { title: "गहन स्थानीय अन्वेषण", subtitle: "ताइवान के पहाड़, समुद्र और यहाँ के लोगों की जीवनशैली को करीब से खोजें।" },
  es: { title: "Crónicas de exploración local", subtitle: "Descubre montañas, mar y la vida de la gente de Taiwán de primera mano." }
};

function switchWeekendHopLanguage(lang, syncGlobal = true) {
  currentHopLang = lang;
  const label = HOP_LANG_LABELS[lang] || HOP_LANG_LABELS.zh;

  if (syncGlobal) {
    // 同步頂部簡潔下拉選單 (單一頂部語言切換)
    const globalSelect = document.getElementById('global-lang-select');
    if (globalSelect) {
      const targetValue = lang === 'zh' ? 'zh-TW' : lang;
      if (globalSelect.querySelector(`option[value="${targetValue}"]`)) {
        globalSelect.value = targetValue;
      } else {
        globalSelect.value = 'zh-TW';
      }
    }
    localStorage.setItem('taiwan_travel_lang', lang === 'zh' ? 'zh-TW' : lang);
    if (typeof updateSiteNavigation === "function") updateSiteNavigation(lang === "zh" ? "zh-TW" : lang);
  }

  // 更新頂部標題與副標
  const titleEl = document.getElementById('hop-section-title');
  const subtitleEl = document.getElementById('hop-section-subtitle');
  if (titleEl) titleEl.textContent = label.title;
  if (subtitleEl) subtitleEl.textContent = label.subtitle;

  // 更新語系按鈕樣式
  const buttons = document.querySelectorAll(".hop-lang-tab-btn");
  buttons.forEach(btn => {
    const onclick = btn.getAttribute("onclick") || "";
    const matches = onclick.includes(`'${lang}'`);
    btn.classList.toggle("active", matches);
    btn.style.background = matches ? "linear-gradient(135deg, #A85A32 0%, #7C361A 100%)" : "transparent";
    btn.style.color = matches ? "#FFFFFF" : "#475569";
    btn.style.boxShadow = matches ? "0 3px 10px rgba(124, 54, 26, 0.25)" : "none";
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



function renderHopCards() {
  const showcaseEl = document.getElementById("hop-latest-popular-showcase");
  const container = document.getElementById("weekend-hop-cards-container");
  if (container) container.innerHTML = ""; // 移除舊版雙欄

  if (!showcaseEl) return;

  const rawArticles = getCurrentHopArticles();
  const isEn = currentHopLang === 'en';
  const isJa = currentHopLang === 'ja';

  if (!rawArticles || rawArticles.length === 0) {
    showcaseEl.replaceChildren();
    if (typeof JournalReports !== 'undefined') JournalReports.renderEmpty(showcaseEl, 'articles');
    return;
  }

  // 不做分類，直接全部呈現 10 篇完整篇章
  const filtered = rawArticles;

  const featureArticle = rawArticles.find(a => a.isFeatureArticle || a.isLatest) || rawArticles[0];
  const popularArticles = rawArticles.filter(a => a.id !== featureArticle.id).slice(0, 4);

  const featTitle = isJa ? (featureArticle.title || featureArticle.nameZh) : (isEn ? (featureArticle.title || featureArticle.nameZh) : featureArticle.nameZh);
  const featSub = isJa ? (featureArticle.subtitle || featureArticle.nameEn) : (isEn ? (featureArticle.subtitle || featureArticle.nameEn) : featureArticle.nameEn);
  const readMoreBtnText = journalText('full');

  let html = `
    <div style="max-width: 1220px; margin: 0 auto 48px auto;">

      <!-- ==========================================
           1. 頂部左右 50%/50% 平衡展示區 (Showcase Grid)
           ========================================== -->
      <div class="hop-showcase-grid" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 26px; margin-bottom: 44px;">

        <!-- 左側 50%：✨ 最新發佈特寫大卡牌 -->
        <div style="background: linear-gradient(135deg, #1E293B 0%, #0F4C81 100%); border-radius: 26px; padding: 32px; color: #FFFFFF; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 0 12px 36px rgba(15, 76, 129, 0.16); position: relative; overflow: hidden; border: 1.5px solid rgba(255,255,255,0.12);">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
              <span style="background: linear-gradient(135deg, #C85A32 0%, #A85A32 100%); color: #FFF; font-size: 11px; font-weight: 900; padding: 5px 14px; border-radius: 999px; letter-spacing: 1px; box-shadow: 0 3px 8px rgba(200,90,50,0.3);">
                ✨ ${journalText('latest')} ｜ ${featureArticle.vol || 'Vol. 10'}
              </span>
              <span style="background: rgba(255,255,255,0.16); backdrop-filter: blur(8px); color: #BAE6FD; font-size: 11.5px; font-weight: 800; padding: 4px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2);">
                ⏱️ ${journalReadTime(featureArticle.readTime)}
              </span>
            </div>

            <div style="height: 230px; border-radius: 18px; overflow: hidden; margin-bottom: 20px; cursor: pointer; position: relative;" onclick="openHopArticleById('${featureArticle.id}')">
              <img src="${featureArticle.img}" alt="${featTitle}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
              <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(15,23,42,0.7) 100%);"></div>
              <div style="position: absolute; bottom: 12px; left: 14px; color: #FDE68A; font-size: 12.5px; font-weight: 800;">
                📍 ${featureArticle.city} · ${featureArticle.district || ''}
              </div>
            </div>

            <h3 onclick="openHopArticleById('${featureArticle.id}')" style="cursor: pointer; font-family: 'Noto Serif TC', serif; font-size: 23px; font-weight: 900; color: #FFFFFF; line-height: 1.38; margin: 0 0 8px 0;">
              ${featTitle}
            </h3>
            <div style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: 14px; color: #FDE68A; margin-bottom: 14px;">
              ${featSub}
            </div>
            <p style="font-size: 14px; color: #E2E8F0; line-height: 1.8; margin: 0 0 16px 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
              ${featureArticle.features}
            </p>
          </div>

          <div style="display: flex; gap: 10px; align-items: center; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.18); padding-top: 18px;">
            <span style="font-size: 12.5px; color: #94A3B8; font-weight: 700;">★ 4.9 · ${featureArticle.reviews || journalText('feature')}</span>
            <button onclick="openHopArticleById('${featureArticle.id}')" style="background: #FFFFFF; color: #0F4C81; border: none; padding: 11px 22px; font-size: 13.5px; font-weight: 900; border-radius: 999px; cursor: pointer; box-shadow: 0 4px 16px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              ${readMoreBtnText}
            </button>
          </div>
        </div>

        <!-- 右側 50%：🔥 熱門閱讀專區 TOP 4 -->
        <div style="background: #FFFFFF; border: 1.5px solid #EADBCE; border-radius: 26px; padding: 28px 30px; box-shadow: 0 6px 24px rgba(45,37,34,0.05); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 2px solid #F1EBE4;">
              <div style="font-size: 15px; font-weight: 900; color: #1E293B; display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 18px;">🔥</span>
                <span style="letter-spacing: 0.5px;">${journalText('popular')}</span>
              </div>
              <span style="font-size: 11.5px; color: #8C5331; font-weight: 800; background: #FEF3C7; padding: 4px 10px; border-radius: 6px;">
                ${journalText('picks')}
              </span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
  `;

  popularArticles.forEach((item, pIdx) => {
    const pTitle = isJa ? (item.title || item.nameZh) : (isEn ? (item.title || item.nameZh) : item.nameZh);
    html += `
      <div onclick="openHopArticleById('${item.id}')" style="cursor: pointer; display: flex; gap: 16px; align-items: center; padding: 12px 14px; border-radius: 16px; background: #FAF8F5; border: 1.5px solid #EADBCE; transition: all 0.25s ease;" onmouseover="this.style.background='#FFFFFF'; this.style.borderColor='#C85A32'; this.style.transform='translateX(4px)'" onmouseout="this.style.background='#FAF8F5'; this.style.borderColor='#EADBCE'; this.style.transform='translateX(0)'">
        <div style="width: 78px; height: 78px; border-radius: 12px; overflow: hidden; flex-shrink: 0; position: relative;">
          <img src="${item.img}" alt="${pTitle}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="flex: 1; min-width: 0;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <span style="font-size: 10.5px; font-weight: 900; color: #C85A32; background: #FFEDD5; padding: 2px 8px; border-radius: 5px;">
              ${item.vol || ('Vol. ' + (9 - pIdx))}
            </span>
            <span style="font-size: 11px; color: #64748B; font-weight: 800;">
              ⏱️ ${item.readTime || '10 MIN'}
            </span>
          </div>
          <h4 style="font-family: 'Noto Serif TC', serif; font-size: 14.5px; font-weight: 800; color: #1E293B; line-height: 1.45; margin: 0 0 3px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
            ${pTitle}
          </h4>
          <div style="font-size: 12px; color: #64748B; font-weight: 600;">
            📍 ${item.city} · ${item.district || ''}
          </div>
        </div>
      </div>
    `;
  });

  html += `
            </div>
          </div>

          <div style="margin-top: 18px; padding-top: 14px; border-top: 1px dashed #E2D7CB; text-align: center;">
            <div style="font-size: 12.5px; color: #8C5331; font-weight: 800; letter-spacing: 0.5px;">
              ${journalText('explore')}
            </div>
          </div>
        </div>

      </div>

      <!-- ==========================================
           2. 下方文章放大！(大卡牌 ‧ 雙欄平衡雜誌排版)
           ========================================== -->
      <div style="margin-top: 50px;">

        <!-- 放大後的雙欄文章卡牌網格 (Large Editorial Cards Grid) -->
        <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 30px;">
  `;

  filtered.forEach((art, idx) => {
    const artTitle = isJa ? (art.title || art.nameZh) : (isEn ? (art.title || art.nameZh) : art.nameZh);
    const artSub = isJa ? (art.subtitle || art.nameEn) : (isEn ? (art.subtitle || art.nameEn) : (art.nameEn || art.subtitle));
    const mapUrl = art.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(art.nameZh)}`;
    const affUrl = art.affiliateUrl || mapUrl;
    const fullBtnText = journalText('read');
    const affBtnText = journalText('charter');
    const locLabel = journalText('location');
    const copyText = journalText('copy');
    const tags = (art.tags || []).slice(0, 3);
    const tagsHtml = tags.map(t => `<span style="background: #F9F6F0; border: 1px solid #EADBCE; color: #2D2522; font-size: 11.5px; font-weight: 700; padding: 3px 9px; border-radius: 6px;">${t}</span>`).join('');

    html += `
      <article class="hop-editorial-card" style="background: #FFFFFF; border-radius: 22px; border: 1.5px solid #EADBCE; overflow: hidden; box-shadow: 0 8px 24px rgba(45, 37, 34, 0.05); display: flex; flex-direction: column; justify-content: space-between; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='#C85A32'; this.style.boxShadow='0 18px 36px rgba(140, 83, 49, 0.12)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='#EADBCE'; this.style.boxShadow='0 8px 24px rgba(45, 37, 34, 0.05)'">

        <div>
          <!-- 放大版封面大圖 (高度 240px) -->
          <div onclick="openHopArticleById('${art.id}')" style="position: relative; height: 240px; overflow: hidden; cursor: pointer; background: #0F172A;">
            <img src="${art.img}" alt="${artTitle}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;" onmouseover="this.style.transform='scale(1.06)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(15,23,42,0.4) 0%, transparent 45%, rgba(15,23,42,0.78) 100%);"></div>

            <!-- 頂部標籤：Vol. 與 閱讀時間 (無日期) -->
            <div style="position: absolute; top: 14px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <span style="background: linear-gradient(135deg, #C85A32 0%, #A85A32 100%); color: #FFF; font-size: 11px; font-weight: 900; padding: 4px 12px; border-radius: 999px; box-shadow: 0 3px 8px rgba(0,0,0,0.25);">
                ${art.vol || ('Vol. ' + (10 - idx))}
              </span>
              <span style="background: rgba(15,23,42,0.75); backdrop-filter: blur(6px); border: 1px solid rgba(255,255,255,0.2); color: #BAE6FD; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 8px;">
                ⏱️ ${art.readTime || '10 MIN READ'}
              </span>
            </div>

            <!-- 底部縣市與評分 -->
            <div style="position: absolute; bottom: 12px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; color: #FFF;">
              <span style="color: #FDE68A; font-size: 13px; font-weight: 800; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                📍 ${art.city} · ${art.district || ''}
              </span>
              <span style="background: rgba(254, 243, 199, 0.95); color: #92400E; padding: 3px 9px; border-radius: 6px; font-size: 11.5px; font-weight: 900;">
                ${art.rating || '★ 4.9'}
              </span>
            </div>
          </div>

          <!-- 卡片內文主體 -->
          <div style="padding: 22px 24px 14px;">
            <h3 onclick="openHopArticleById('${art.id}')" style="cursor: pointer; font-family: 'Noto Serif TC', serif; font-size: 19px; font-weight: 900; color: #1E293B; line-height: 1.42; margin: 0 0 6px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; min-height: 54px;">
              ${artTitle}
            </h3>
            <div style="font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: 13px; color: #8C5331; margin-bottom: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">
              ${artSub}
            </div>

            <p style="font-size: 13.5px; color: #475569; line-height: 1.75; margin: 0 0 14px 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 70px;">
              ${art.features}
            </p>

            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px;">
              ${tagsHtml}
            </div>
          </div>
        </div>

        <!-- 卡片底部行動欄 -->
        <div style="padding: 0 24px 22px;">
          <div style="background: #FAF8F5; border: 1px solid #E6DEC8; border-radius: 10px; padding: 8px 12px; margin-bottom: 14px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
            <div style="font-size: 12px; color: #475569; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;">
              ${locLabel} ${isEn ? (art.addressEn || art.addressZh) : art.addressZh}
            </div>
            <button class="copy-btn" onclick="copyAddress('${(art.addressZh || '').replace(/'/g, "'")}')" style="border: 1px solid #CBD5E1; background: #FFF; border-radius: 6px; padding: 3px 8px; font-size: 11px; font-weight: 800; cursor: pointer;">
              ${copyText}
            </button>
          </div>

          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <a href="${isEn && art.slug ? `blog/en/${art.slug}.html` : '#'}" onclick="event.preventDefault(); openHopArticleById('${art.id}')" style="background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%); color: #FFFFFF; font-size: 12.5px; font-weight: 800; padding: 9px 18px; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              ${fullBtnText}
            </a>
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" style="padding: 11px 14px; font-size: 12px; font-weight: 800; border-radius: 12px; text-decoration: none; background: #F1F5F9; border: 1px solid #CBD5E1; color: #1E293B; display: inline-flex; align-items: center;">
              ${journalText('map')}
            </a>
            <a href="${affUrl}" target="_blank" rel="noopener noreferrer" style="padding: 11px 16px; font-size: 12px; font-weight: 800; border-radius: 12px; text-decoration: none; background: linear-gradient(135deg, #D97706 0%, #C04A2A 100%); color: #FFF; display: inline-flex; align-items: center; box-shadow: 0 4px 12px rgba(192, 74, 42, 0.25); transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              ${affBtnText} ➔
            </a>
          </div>
        </div>

      </article>
    `;
  });

  html += `
        </div>
      </div>

    </div>
  `;

  showcaseEl.innerHTML = html;
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
    themeName: journalText('journal')
  });
}

function openArticleModal(encodedJson) {
  const place = JSON.parse(decodeURIComponent(encodedJson));
  renderArticleModalContent(place);
}

/* 專欄內餐廳、茶店、美食、咖啡卡牌專屬照片與特色餐點圖鑑 */
const PLACE_PHOTO_SPOTLIGHT_MAP = {
  // Vol. 09 新竹篇 (21 家)
  "沒有名字的甜點專賣": { img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop", type: "🍰 香山海岸甜點", dish: "🍰 農田小徑老宅・焦糖鹽之花生乳捲與巴斯克乳酪" },
  "LUAU・柴寮披薩": { img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop", type: "🍕 精靈木構柴燒", dish: "🍕 龍眼木炭火窯烤薄脆手工披薩・燉牛肉海鮮濃湯" },
  "海角咖啡（南寮海岸驛站）": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "🌊 巨大風車第一排", dish: "☕ 17公里海岸綠色隧道・西西里氣泡咖啡看金色夕陽" },
  "日見森嵐": { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop", type: "📸 懸空透明天空步道", dish: "☁️ 正對油羅溪谷雲霧繚繞・香醇冰滴咖啡與手作鬆餅" },
  "六號花園": { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&auto=format&fit=crop", type: "🌿 森林紅磚溫室", dish: "🍗 原生竹林歐風小屋・迷迭香烤雞腿排與草本司康" },
  "上山喝咖啡": { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "⛰️ 無欄杆露天山景", dish: "🍃 大山背逃學步道・水洗耶加雪菲手沖配檸檬磅蛋糕" },
  "彼刻義式餐酒館（Piccola Enoteca）": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "⭐ 義大利紅蝦評鑑", dish: "🥩 招牌跳進嘴裡肉排・手桿義大利麵佐頂級橄欖油" },
  "Piccolo Angolo 唯星法式料理": { img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=700&auto=format&fit=crop", type: "⭐ 當代極致法餐", dish: "🍷 國際星級主廚團隊・高山時蔬、黑松露與澎湖鮮魚" },
  "新竹國賓大飯店・八方燴": { img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&auto=format&fit=crop", type: "🏛️ 挑高千坪中庭", dish: "🥩 12樓挑高中庭自然光・爐烤頂級牛排與現煎生食干貝" },
  "廟口鴨香飯": { img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop", type: "🦆 城隍廟排隊王", dish: "🥚 金黃純鴨油手撕煙燻鴨肉・半熟流心荷包蛋胡椒香" },
  "北門炸粿": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🧄 傳承百年四代", dish: "🥢 米漿現點現炸薄脆外皮・招牌蒜頭肉與鮮蚵仔嗲" },
  "西市汕頭館（總店）": { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop", type: "🍲 炭火沙茶牛肉爐", dish: "🥩 獨門自炒沙茶醬・牛骨高湯涮溫體黃牛與沙茶炒麵" },
  "原夜市鴨肉麵": { img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=700&auto=format&fit=crop", type: "🍜 靈魂煙燻琥珀湯", dish: "🦆 大鼎爆炒油麵吸飽鑊氣・招牌炒鴨血與煙燻鴨肉切盤" },
  "老段純真牛肉麵": { img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=700&auto=format&fit=crop", type: "🥩 眷村四川麻辣", dish: "🍜 牛大骨牛油慢火翻炒・半筋半肉牛腱肉與手工刀削麵" },
  "葉大鵬 傳統手工潤餅": { img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&auto=format&fit=crop", type: "🌯 百年老攤手工潤餅", dish: "🌯 現擦香Q薄餅皮・滿滿蔬菜、酥脆蛋酥與現磨花生粉" },
  "東門市場": { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop", type: "🏮 百年菜市霓虹", dish: "🏮 老市場深夜轉身・日式居酒屋、泰式料理與精釀啤酒" },
  "新竹中央市場（西門公有市場）": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🥟 傳奇糯米水餃", dish: "🥣 純手工糯米揉製鹹湯圓・大骨清湯海量茼蒿與油蔥酥" },
  "竹蓮市場": { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop", type: "🏬 示範現代化早市", dish: "🥟 全空調冷氣熟食大廳・客家大湯圓、紅燒肉與古早米粉" },
  "會來尖石溫泉渡假村": { img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop", type: "♨️ 尖石峇里島溫泉", dish: "🌊 油羅溪畔碳酸氫鈉美人湯・巨石露天風呂與水上滑梯" },
  "天然谷溫泉會館": { img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&auto=format&fit=crop", type: "🏞️ 錦屏峽谷天然原湯", dish: "🐟 峽谷天然純淨原湯・清幽戶外池與現烤高山鱒魚" },
  "司馬庫斯部落露營區 & 神木群": { img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&auto=format&fit=crop", type: "🌲 上帝的部落神木", dish: "🌌 海拔1500公尺泰雅聖境・2500年巨木群與無光害銀河" },

  // Vol. 08 宜蘭篇 (33 家)
  "黑宅 Black House": { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&auto=format&fit=crop", type: "🍳 稻田黑色穀倉", dish: "🥐 法國長棍佐蕈菇嫩蛋・爐烤牛小排早午餐與自家烘豆" },
  "日光私廚 景觀餐廳": { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&auto=format&fit=crop", type: "🌿 綠建築私廚", dish: "🥗 小農無毒蔬果・低溫舒肥雞胸早午餐盤與大草皮" },
  "初陽早午餐": { img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700&auto=format&fit=crop", type: "🥞 羅東人氣晨食", dish: "🥓 手作酥皮千層三星蔥培根蛋餅・花生熔岩厚牛堡" },
  "光宅": { img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop", type: "🏡 日式老宅庭院", dish: "🍵 黑麥軟法烤時蔬早午餐・招牌流心抹茶小戚風蛋糕" },
  "好森咖啡 x 註書店": { img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=700&auto=format&fit=crop", type: "📚 獨立書店慢食", dish: "🥖 有機豆腐與慢烤歐包輕食盤・無麩質純素友善書香空間" },
  "正好鮮肉小籠湯包": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🥟 爆汁三星蔥", dish: "🥟 現桿薄皮包裹滿滿三星蔥花溫體豬・輕咬爆出甘甜蔥湯" },
  "蘭城晶英酒店（Silks Place Yilan）": { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&auto=format&fit=crop", type: "🏎️ 親子飯店王者", dish: "🏎️ 客房走廊兒童電動賽車道・芬朵奇堡巨型氣墊溜滑梯" },
  "礁溪寒沐酒店（Mu Jiao Xi Hotel）": { img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop", type: "♨️ 寒舍美學湯泉", dish: "♨️ 房內獨立美人湯池・樂未央兒童攀爬網與戶外溫水泳池" },
  "綠舞國際觀光飯店": { img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=700&auto=format&fit=crop", type: "👘 日式庭園水豚", dish: "🌿 浴衣漫步日式小橋流水・近距離餵食水豚、柯爾鴨與羊駝" },
  "礁溪老爺酒店（Hotel Royal Chiaohsi）": { img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&auto=format&fit=crop", type: "🏞️ 無邊際野天風呂", dish: "🏞️ 五峰旗山腰俯瞰蘭陽平原・無邊際溫泉泳池與推桿高爾夫" },
  "川湯春天旗艦館": { img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=700&auto=format&fit=crop", type: "🎠 卡茲童樂園", dish: "🚗 緊鄰礁溪火車站・卡丁車賽道、互動球池與石砌大湯屋" },
  "宜蘭悅川酒店（The Walden Hotel）": { img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&auto=format&fit=crop", type: "🚂 繪本童玩飯店", dish: "🚂 綠野仙蹤童玩館電動小火車、碰碰車與滿牆童書繪本" },
  "礁溪長榮鳳凰酒店": { img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop", type: "🌊 千坪慢活SPA", dish: "🦆 兒童水上溜滑梯池・百隻黃色小鴨溫泉池與空中溫水泳池" },
  "川湯春天旗艦館（SPA 溫泉露天水樂園）": { img: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=700&auto=format&fit=crop", type: "🎢 兩層樓滑水道", dish: "🌊 兩層樓弧形溫泉旋轉滑水道・六福湯與精油氣泡按摩池" },
  "中天溫泉渡假飯店": { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&auto=format&fit=crop", type: "🏛️ 巴洛克水療池", dish: "💦 晴天泉水療樂園兒童戲水滑梯・超音波水療床與景觀湯池" },
  "柯氏蔥油餅": { img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&auto=format&fit=crop", type: "🫓 礁溪排隊地標", dish: "🥚 1970年老麵糰半煎半炸・外酥膨鬆內爆三星蔥香加蛋" },
  "白水豆花（礁溪創始店）": { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop", type: "🍨 雪山湧泉豆花", dish: "🥜 純淨雪山泉水鹽滷豆花・現刨麥芽花生糖碎佐鮮採香菜" },
  "北門蒜味肉羹（阿娘給的）": { img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop", type: "🥣 傳承半世紀", dish: "🧄 海量爆香大蒜末濃醇羹湯・手切豬胛心肉裹薄漿肉羹" },
  "饗宴鐵板燒": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "🍽️ 無菜單鐵板燒鼻祖", dish: "🐟 當日進港野生紅喉魚、活黑鮑與帕瑪森起司包裹海膽魚卵" },
  "宜蘭渡小月餐廳": { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop", type: "🏮 國宴級手路菜", dish: "🍲 國寶名廚掌杓・金黃酥嫩招牌糕渣、西魯肉與手作棗餅" },
  "野餐 Pic-Nic 原木炭烤": { img: "https://images.unsplash.com/photo-1558030006-450675393462?w=700&auto=format&fit=crop", type: "🔥 原木柴燒私廚", dish: "🦆 龍眼木與相思木大火炭烤櫻桃鴨腿・隱世森林預約制饗宴" },
  "G90 Bar（老宅微醺沙龍）": { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop", type: "🍸 紅磚老宅酒吧", dish: "🍊 日治磚造老屋・宜蘭金棗蜜餞、溫泉番茄與冬山茶特調" },
  "麥 Mai 居酒屋餐酒": { img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=700&auto=format&fit=crop", type: "🍢 日系炭烤餐酒", dish: "🍺 現流生魚片與明太子雞肉串・日本地酒與在地小農精釀" },
  "The Hangout 浪人吧": { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop", type: "🏖️ 烏石港海灘吧", dish: "🍹 衝浪板露天木棧道・熱帶萊姆朗姆莫希托與墨西哥塔可" },
  "蕃薯衝浪俱樂部": { img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&auto=format&fit=crop", type: "🏄 烏石港老字號", dish: "🌊 國家級教練1對1新手起乘教學・長短板租借與完善淋浴" },
  "極酷衝浪俱樂部（G-Cool Surf）": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "📸 雙獅海灘跟拍", dish: "🏄 專業水下高清衝浪跟拍・防磨衣浪板租賃與浪人青旅" },
  "喬治衝浪店（George Surf）": { img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&auto=format&fit=crop", type: "🤙 美式手工削板", dish: "🏄 店主手工削製經典單鰭長板・進階短板指導與器材交流" },
  "滿山望海": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "🌊 外澳第一排", dish: "🏝️ 峇里島風無窗框正對龜山島・冰萃單品配巴斯克乳酪蛋糕" },
  "灆咖啡 Seaview Coffee": { img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&auto=format&fit=crop", type: "🐾 海景玻璃屋", dish: "🌊 大坑濱海單車道純白玻璃屋・手作披薩、果昔與毛孩看海座" },
  "九號咖啡（外澳館）": { img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&auto=format&fit=crop", type: "🏖️ 鮮黃沙灘地標", dish: "🧇 外澳沙灘入口附沖沙池・挑高落地窗看衝浪配現烤鬆餅" },
  "格上租車（宜蘭 / 礁溪站前門市）": { img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop", type: "🚗 宜蘭礁溪雙據點", dish: "🚗 出火車站即達・五人座至八人座休旅車況新穎附全險" },
  "和運租車（宜蘭站前門市）": { img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&auto=format&fit=crop", type: "🚙 甲租乙還高彈性", dish: "🚙 支援宜蘭取車、台北或花蓮還車・跨縣市山海自駕首選" },
  "胖草 / 宜蘭站前機車租賃": { img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=700&auto=format&fit=crop", type: "🛵 站前2分鐘取車", dish: "🛵 125cc與Gogoro電動車・隨車贈安全帽內襯、手機架與雨衣" },

  // Vol. 07 花蓮篇 (15 家)
  "海崖谷 HAYAKU": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "🌊 懸崖海景", dish: "🌊 太平洋階梯露台與野奢帳篷・西西里咖啡配莓果鬆餅" },
  "山度空間": { img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&auto=format&fit=crop", type: "📸 泡泡鞦韆", dish: "🫧 透明玻璃圓形海景鞦韆・特調冰萃咖啡與輕食三明治" },
  "原野牧場": { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "☕ 羊奶咖啡", dish: "🌊 七星潭漂流木海景窗・招牌香濃羊奶拿鐵配起司蛋糕" },
  "佳興冰果室": { img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700&auto=format&fit=crop", type: "🍋 招牌檸檬汁", dish: "🍋 連皮帶肉慢磨煉乳黃金檸檬汁＋大碗料多什錦炒麵" },
  "正當冰（花蓮總店）": { img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=700&auto=format&fit=crop", type: "🍨 小農冰淇淋", dish: "🍨 純天然無添加手作冰・甲仙香芋、百香果與蜜香紅茶" },
  "花蓮觀光糖廠冰品部（光復糖廠）": { img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700&auto=format&fit=crop", type: "🍦 百年糖廠冰", dish: "🍦 日治木造宿舍群・招牌月明冰與紅豆鮮奶脆餅冰淇淋" },
  "達基力部落屋": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "🎨 部落無菜單", dish: "🔥 太魯閣族木雕藝廊・柴燒煙燻山豬肉、刺蔥香腸與香蕉飯" },
  "欣欣麵館": { img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=700&auto=format&fit=crop", type: "🦞 生猛海鮮殿堂", dish: "🦞 滿櫃現撈龍蝦九孔鮑・金黃飛魚卵沙拉與澎湃鮮魚火鍋" },
  "花蓮翰品酒店・怡園中餐廳": { img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&auto=format&fit=crop", type: "⭐ 星級中菜宴", dish: "🦆 五星主廚產地風土宴・皮脆油亮招牌櫻桃烤鴨多吃" },
  "格上租車（花蓮火車站站前店）": { img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&auto=format&fit=crop", type: "🚗 站前自駕租車", dish: "🚗 花蓮站步行2分鐘・新穎五至八人座休旅全險自駕" },
  "和運租車（花蓮站前門市）": { img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&auto=format&fit=crop", type: "🚙 跨區甲租乙還", dish: "🚙 支援花蓮取車、台東或台北還車・快速透明取還車" },
  "胖草機車租借（花蓮站前旗艦店）": { img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=700&auto=format&fit=crop", type: "🛵 站前人氣租車", dish: "🛵 125cc與Gogoro電動車・隨車附乾淨帽襯、手機架與雨衣" },
  "達基力原民柴燒風味餐廳": { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop", type: "🔥 原木柴燒宴", dish: "🔥 正對蘇花斷崖海景・原木大圓烤盤慢燻黑豬肉與刺蔥蒸魚" },
  "巴奇克野生菜料理坊（Pacik）": { img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&auto=format&fit=crop", type: "🌿 野菜十全鍋", dish: "🌿 阿美族頭目採集數十種原生野菜・炭烤鹹豬肉與鮮魚野菜鍋" },
  "紅瓦屋老地方文化美食館": { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop", type: "🪨 阿美石頭火鍋", dish: "🪨 滾燙火山白大理石塊投入檳榔葉鞘鍋・原木鹽烤鮮魚" },

  // Vol. 06 台南篇 (21 家)
  "葉家小卷米粉": { img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop", type: "🍽️ 特色餐點", dish: "🦑 鮮燙厚切透抽小卷・甘甜糙米粗米粉" },
  "恭仔肉燥意麵": { img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=700&auto=format&fit=crop", type: "🍽️ 特色餐點", dish: "🍜 紅蔥肉燥手工扁意麵＋手作扁食湯" },
  "阿江炒鱔魚": { img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=700&auto=format&fit=crop", type: "🔥 鑊氣名菜", dish: "🔥 炭火高溫爆炒脆彈鱔魚意麵" },
  "邱家小卷米粉": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🍽️ 特色餐點", dish: "🥣 大鍋滾沸帶卵鮮彈小卷湯米粉" },
  "民生路無名意麵": { img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=700&auto=format&fit=crop", type: "🌙 深夜食堂", dish: "🥢 香濃豬油黑麻醬乾麵＋入味滷大腸" },
  "國華街老牌川味牛肉麵": { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop", type: "🥩 招牌湯麵", dish: "🥩 花椒慢火燉熬半筋半肉紅燒牛肉麵" },
  "奉茶・來坐": { img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop", type: "🍵 茶席空間", dish: "🍵 古樸二樓茶席・凍頂烏龍與東方美人茶食" },
  "窄門咖啡（老屋茶座）": { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop", type: "📸 店家空間", dish: "🪟 38公分窄巷秘境・正對孔廟綠蔭老木窗" },
  "隱肆好茶": { img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=700&auto=format&fit=crop", type: "🧊 特色茶飲", dish: "🍃 蝸牛巷老宅・台灣單一莊園定溫冷萃原葉茶" },
  "衛屋茶事 Sputnik Lab": { img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=700&auto=format&fit=crop", type: "📸 店家空間", dish: "🌿 昭和枯山水榻榻米茶室・現刷宇治抹茶和菓子" },
  "雙全紅茶": { img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=700&auto=format&fit=crop", type: "🥤 招牌茶飲", dish: "🥤 1949年傳奇雪克杯手搖綿密泡沫濃紅茶" },
  "聚珍臺灣茶空間": { img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=700&auto=format&fit=crop", type: "📚 書店茶席", dish: "📖 台灣文史圖書環繞・坪林包種茶佐古早味椪餅" },
  "PARIPARI apt.": { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop", type: "🍮 招牌甜點", dish: "🍮 昭和墨綠磁磚老洋樓・水洗單品佐焦糖布丁" },
  "Kadoya 喫茶店": { img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700&auto=format&fit=crop", type: "🧁 招牌甜點", dish: "🧁 昭和旋轉木吧台・招牌李桃可麗露與栗子泡芙" },
  "StableNice BLDG.": { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "📸 店家空間", dish: "🏛️ 老印刷廠原木紅磚天井・自家烘焙精品手沖" },
  "鬼咖啡": { img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=700&auto=format&fit=crop", type: "☕ 深夜手沖", dish: "🌙 木構老宅二樓榻榻米・極致安靜深焙單品" },
  "甘單咖啡": { img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=700&auto=format&fit=crop", type: "📸 店家空間", dish: "🪟 開隆宮廟埕老鐵花窗立面・自家烘焙冰拿鐵" },
  "蝸牛巷綠意咖啡（巷弄慢飲）": { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&auto=format&fit=crop", type: "🍰 空間與甜點", dish: "🌿 文學步道綠植庭園・冰滴咖啡配巴斯克乳酪" },
  "阿霞飯店": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "🦀 國宴名菜", dish: "🦀 爆膏紅蟳米糕＋手工蝦棗、粉腸與烏魚子拼盤" },
  "筑馨居": { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop", type: "🏮 清代老宅菜", dish: "🥩 1876年閩南老街屋・慢火東坡肉與無刺虱目魚肚" },
  "博仁堂": { img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&auto=format&fit=crop", type: "🍲 必比登藥膳", dish: "🍲 五代百子櫃老中藥鋪・原盅十全大補排骨湯" },

  // Vol. 05 北海岸與九份篇 (12 家)
  "我們在海邊": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "🌊 海景空間", dish: "🌊 兩層挑高無框海景窗・黃金曼巴手沖配焦糖戚風" },
  "靠北過日子（Q.B.Days）": { img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&auto=format&fit=crop", type: "🏄 露台與餐點", dish: "🦑 中角灣衝浪海景露台・香濃小卷烏龍麵與鬆餅" },
  "Papa 在三芝": { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&auto=format&fit=crop", type: "🌿 秘境空間", dish: "🏡 山坡玻璃溫室與綠植老屋・自家烘豆配起司蛋糕" },
  "白日夢 Tea & Cafe": { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop", type: "🏫 廢校看海", dish: "🍰 小學教室懷舊木課桌看海・手作千層蛋糕配高山茶" },
  "洋荳子咖啡館（Young Door）": { img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&auto=format&fit=crop", type: "🏛️ 藍白海景", dish: "🌊 地中海藍白拱門180度海景・冰滴咖啡配檸檬蛋糕" },
  "野事草店 Wild Herbs": { img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop", type: "🍵 純白茶廊", dish: "🌿 九份山林採集藥草茶席・金山地瓜野事雞蛋糕" },
  "阿柑姨芋圓": { img: "assets/ranking_taro_ball.png", type: "🍧 招牌甜點", dish: "🍧 手搓大甲芋圓金山地瓜圓・九份山海長廊觀景座" },
  "阿蘭草仔粿": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🍡 老街名物", dish: "🌱 天然鼠麴草Q彈外皮・鹹香菜脯米與甜紅豆草仔粿" },
  "金包里鴨肉（金山鴨肉）": { img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&auto=format&fit=crop", type: "🦆 廟口名菜", dish: "🦆 廣安宮廟埕端菜奇景・現切土番鴨肉與炒海瓜子" },
  "巧宴海鮮小館（龜吼漁港）": { img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=700&auto=format&fit=crop", type: "🦀 現撈萬里蟹", dish: "🦀 當日現撈清蒸花蟹三點蟹・招牌海膽蒸蛋" },
  "靖瑜平價海鮮（萬里龜吼）": { img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&auto=format&fit=crop", type: "🦐 港邊鮮味", dish: "🍳 桂花蛋香翻炒萬里蟹・川燙活小卷與綜合生魚片" },
  "望海巷石頭火鍋（二館）": { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop", type: "🍲 海景火鍋", dish: "🍲 潮境海景第一排・麻油爆香石頭鍋涮現流小卷明蝦" },

  // Vol. 04 台北篇 (11 家)
  "鼎泰豐（信義旗艦店）": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🥟 國際名菜", dish: "🥟 黃金18摺爆汁小籠包・金黃排骨蛋炒飯" },
  "小王煮瓜": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "🍚 必比登推介", dish: "🍚 膠質黏嘴黑金滷肉飯＋清甜瓜仔肉排骨湯" },
  "阜杭豆漿": { img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&auto=format&fit=crop", type: "🥖 經典早餐", dish: "🥖 古法炭烤厚燒餅夾油條・蝦米油條碎鹹豆漿" },
  "金蓬萊遵古台菜": { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop", type: "⭐ 米其林一星", dish: "🍖 傳承三代北投酒家菜・金黃酥脆特製排骨酥" },
  "施家鮮肉湯圓": { img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop", type: "🥣 必比登湯圓", dish: "🥣 純糯米手工爆汁黑豬鮮肉湯圓・茼蒿大骨湯" },
  "Simple Kaffa 興波咖啡（旗艦館）": { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "🏆 冠軍咖啡", dish: "☕ WBC世界冠軍水洗藝伎手沖・原味地瓜生乳捲" },
  "ASW Tea House": { img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop", type: "🍵 洋樓茶館", dish: "🪟 迪化街百年藥房二樓・台茶18號紅玉佐現烤司康" },
  "小器生活空間（赤峰店）": { img: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=700&auto=format&fit=crop", type: "🍮 選物與甜點", dish: "🍮 日台職人器皿展售・純手工焦糖昭和布丁" },
  "Bar Mood 吧沐": { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop", type: "🍸 亞洲50大", dish: "🍸 隱藏門沙龍酒吧・台灣高山茶與在地花果雞尾酒" },
  "紫藤廬 Wistaria Tea House": { img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=700&auto=format&fit=crop", type: "🏮 市定古蹟", dish: "🍵 百年紫藤日式木造榻榻米・正統高山烏龍工夫茶" },
  "Draft Land（忠孝總店）": { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop", type: "🥂 汲飲調酒", dish: "🥂 亞洲汲飲式調酒鼻祖・鐵觀音與桂花烏龍特調" },

  // Vol. 03 高雄篇 (17 家)
  "樺達奶茶（鹽埕總店）": { img: "https://images.unsplash.com/photo-1558857563-b37cf5a452ef?w=700&auto=format&fit=crop", type: "🧋 奶茶鼻祖", dish: "🧋 不加冰塊濃醇樺達奶茶・普洱紅茶鮮乳美容奶茶" },
  "双妃奶茶": { img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=700&auto=format&fit=crop", type: "🧋 珍珠厚奶", dish: "🧋 新樂街排隊老鋪・免費加Q彈手工珍珠厚鮮奶茶" },
  "老江紅茶牛奶（南台總店）": { img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700&auto=format&fit=crop", type: "🥪 炭焙絕配", dish: "🥪 古法炭焙紅茶撞高牧鮮乳＋半熟流心火腿蛋吐司" },
  "雋 GEN": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "⭐ 米其林一星", dish: "🍽️ 粵菜名廚陳泰榮掌杓・古法金錢雞與鮑汁焗花膠" },
  "承 Sho": { img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=700&auto=format&fit=crop", type: "⭐ 米其林一星", dish: "🍣 東京傳奇Den姐妹店・台灣山海旬野菜板前懷石" },
  "Haili": { img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=700&auto=format&fit=crop", type: "⭐ 米其林一星", dish: "🍷 正統法餐醬汁工藝揉合南台灣海港現撈漁獲" },
  "鴨肉珍": { img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&auto=format&fit=crop", type: "🦆 必比登推介", dish: "🦆 紅糖煙燻鴨肉切盤＋手切滷肉燥鴨肉飯與下水湯" },
  "鴨肉本（二哥的店）": { img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=700&auto=format&fit=crop", type: "🦆 老饕口袋", dish: "🦆 獨門甘草甜麵醬厚切煙燻鴨肉・中藥清香鴨血糕" },
  "正昌鴨肉飯": { img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop", type: "🍚 鴨肉飯首選", dish: "🍚 金黃純鴨油紅蔥頭醬汁・鋪滿去骨煙燻鴨肉絲飯" },
  "七賢鴨肉飯": { img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&auto=format&fit=crop", type: "🥣 九十載老店", dish: "🥣 1937年創立・鮮嫩白切鴨肉絲飯配乳白當歸鴨湯" },
  "極品當歸鴨": { img: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=700&auto=format&fit=crop", type: "🌙 宵夜名物", dish: "🍜 當歸鴨肉紅麵線＋炙烤煙燻鴨腿與乾煎米血" },
  "NOW & THEN by nybc": { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&auto=format&fit=crop", type: "🏭 挑高倉庫", dish: "🥞 駁二大義倉庫挑高工業風・澳式早午餐與法式吐司" },
  "海岸線咖啡（旗津店）": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "⚓ 水岸第一排", dish: "⚓ 旗津老造船廠看漁船穿梭・手沖單品配西西里氣泡" },
  "卡啡那 CAFFAINA（文化探索館）": { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop", type: "🏛️ 歐風挑高", dish: "🧁 歌劇院級挑高兩層樓書牆・現烤手工法式舒芙蕾" },
  "高流珊瑚礁群景觀咖啡": { img: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=700&auto=format&fit=crop", type: "🌉 港灣視野", dish: "🌉 正對大港橋15:00水平旋轉・愛河灣水岸冰滴冷萃" },
  "新濱・駅前（百年銀行咖啡）": { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop", type: "🏦 百年銀行", dish: "🏦 日治三和銀行百年鋼鐵金庫・金庫封存冰滴配可頌" },
  "萊加呵 Nine J（柴山海景咖啡）": { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "🌅 懸崖落日", dish: "🌅 柴山海岸懸崖露天階梯座・180度海景落日氣泡飲" },

  // Vol. 02 日月潭篇 (11 家)
  "阿婆茶葉蛋（金盆阿嬤）": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🥚 碼頭名物", dish: "🥚 台茶18號紅玉紅茶與野生香菇慢火滷製茶葉蛋" },
  "伊達邵手工現打麻糬（杜太太）": { img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=700&auto=format&fit=crop", type: "🍡 手搗麻糬", dish: "🍡 純糯米每日現蒸現搗・無糖花生粉與黑芝麻麻糬" },
  "邵族傳統風味餐：支部山產": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "🌿 邵族山味", dish: "🐟 邵族刺蔥煎蛋・清蒸總統魚、石板山豬肉與小米飯" },
  "湖妹手作草仔粿": { img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=700&auto=format&fit=crop", type: "🌱 草本米食", dish: "🌱 新鮮艾草糯米外皮・爆炒菜脯米香菇黑豬肉草仔粿" },
  "涵碧樓東方餐廳": { img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&auto=format&fit=crop", type: "🍽️ 湖景奢華", dish: "🍖 涵碧半島水岸第一排・招牌阿薩姆紅茶無錫排骨" },
  "朝霧茶莊・TEA18 朝霧紅茶": { img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop", type: "🍵 紅玉茶席", dish: "🍦 現沖冷萃台茶18號紅玉紅茶＋手工阿薩姆冰淇淋" },
  "蠻荒咖啡 Desolate Coffee": { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "🪟 玻璃屋美學", dish: "☕ 大片穿透玻璃與原木交織・耶加雪菲手沖配生乳酪" },
  "先得月 Tea Bar": { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop", type: "🌊 碼頭湖景", dish: "🌊 朝霧碼頭無遮蔽水岸・頂級紅玉單株手沖配千層" },
  "湖の怪物 咖啡": { img: "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=700&auto=format&fit=crop", type: "🐢 日式老屋", dish: "🍵 日式侘寂木造榻榻米・手作烤紅龜粿佐宇治抹茶" },
  "向山咖啡館（惠蓀咖啡向山店）": { img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&auto=format&fit=crop", type: "🏛️ 清水模水池", dish: "🏛️ 團紀彥清水模無邊際水池倒影・台灣惠蓀莊園手沖" },
  "鹿篙咖啡莊園 Lugo Cafe": { img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=700&auto=format&fit=crop", type: "⛰️ 山谷茶園", dish: "🌿 360度階梯茶園懸挑玻璃平台・莊園自烘台灣咖啡" },

  // Vol. 01 阿里山篇 (8 家)
  "奮起湖雅湖鐵路便當": { img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=700&auto=format&fit=crop", type: "🍱 老街木盒", dish: "🍱 古法木盒雙主菜・甘蔗慢滷厚排骨與無骨雞腿便當" },
  "Hana 廚房（來吉部落）": { img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700&auto=format&fit=crop", type: "🍕 部落柴燒", dish: "🍕 南非×鄒族深山廚房・柴燒天然酵母披薩與烤山豬肉" },
  "山賓餐廳（石頭火鍋）": { img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop", type: "🍲 高山暖鍋", dish: "🍲 黑鐵鍋麻油扁魚爆香高湯・高山甘甜高麗菜排骨鍋" },
  "游芭絲鄒宴餐廳（YUPASU）": { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "🔥 原木炭烤", dish: "🔥 山谷露天原木大烤盤・煙燻香腸、山豬肉與竹筒飯" },
  "街仔尾阿嬤草仔粿": { img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop", type: "🍡 奮起湖名物", dish: "🌱 純鼠麴草慢揉糯米皮・爆炒高山轎篙筍丁蝦米內餡" },
  "璟隆咖啡莊園": { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "☕ 雲海莊園", dish: "☁️ 隙頂茶園雲海第一排・SL34日曬手沖配焦糖布丁" },
  "阿將的家 23 咖啡館": { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop", type: "🏡 石砌童話", dish: "🪨 鄒族手作石頭檜木童話聚落・藝伎手沖佐小米鬆餅" },
  "霧裡村 喫茶會所": { img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop", type: "🍵 無框茶田", dish: "🍃 三面落地窗正對階梯茶園・高山金萱冷泡配茶戚風" }
};

function getPlaceCardVisualMeta(nameText, badgeText, detailText, badgeClass) {
  const cleanName = (nameText || "").trim();
  if (PLACE_PHOTO_SPOTLIGHT_MAP[cleanName]) {
    return PLACE_PHOTO_SPOTLIGHT_MAP[cleanName];
  }
  // 模糊匹配店名關鍵字
  for (const [k, val] of Object.entries(PLACE_PHOTO_SPOTLIGHT_MAP)) {
    if (cleanName.includes(k) || k.includes(cleanName)) {
      return val;
    }
  }
  // 智慧關鍵字分類備援 (給未來新增文章自動配圖)
  const combined = `${cleanName} ${badgeText} ${detailText} ${badgeClass}`;
  if (combined.includes("海鮮") || combined.includes("蟹") || combined.includes("seafood")) {
    return { img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=700&auto=format&fit=crop", type: "🦀 現撈海味", dish: "🦀 港邊產地現撈活海鮮與招牌熱炒" };
  }
  if (combined.includes("麵") || combined.includes("noodle")) {
    return { img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&auto=format&fit=crop", type: "🍜 招牌麵食", dish: "🍜 在地慢火熬湯與手作獨門麵食" };
  }
  if (combined.includes("鴨") || combined.includes("duck")) {
    return { img: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=700&auto=format&fit=crop", type: "🦆 招牌鴨肉", dish: "🦆 古法煙燻多汁鴨肉與獨門醬汁" };
  }
  if (combined.includes("酒吧") || combined.includes("調酒") || combined.includes("bar")) {
    return { img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=700&auto=format&fit=crop", type: "🍸 特色調酒", dish: "🍸 台灣茶韻與當季鮮果職人雞尾酒" };
  }
  if (combined.includes("茶") || combined.includes("tea")) {
    return { img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=700&auto=format&fit=crop", type: "🍵 茶席空間", dish: "🍵 台灣單一產區原葉工夫茶與手作茶點" };
  }
  if (combined.includes("米其林") || combined.includes("michelin")) {
    return { img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop", type: "⭐ 星級名菜", dish: "🍽️ 米其林評鑑主廚招牌手路名菜" };
  }
  if (combined.includes("海") || combined.includes("灣")) {
    return { img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop", type: "🌊 海景空間", dish: "🌊 海景第一排視野與手作精品咖啡甜點" };
  }
  if (combined.includes("咖啡") || combined.includes("cafe")) {
    return { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&auto=format&fit=crop", type: "☕ 店家空間", dish: "☕ 質感空間採光與自家烘焙單品手沖" };
  }
  return { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop", type: "🍽️ 招牌必嚐", dish: "🍽️ 在地職人手作風味料理與特色空間" };
}

function enhanceLongformPlaceCards(containerEl) {
  if (!containerEl) return;
  const cards = containerEl.querySelectorAll(".place-card");
  cards.forEach(card => {
    // 若卡牌已經包含圖片或已增強過，絕對不可重複插入頂部圖片！
    if (card.classList.contains("has-top-photo") || card.querySelector("img")) {
      card.classList.add("has-top-photo");
      return;
    }
    const nameEl = card.querySelector(".place-name");
    const badgeEl = card.querySelector(".place-badge");
    const detailEl = card.querySelector(".place-detail");
    const nameText = nameEl ? nameEl.textContent.trim() : "";
    const badgeText = badgeEl ? badgeEl.textContent.trim() : "";
    const detailText = detailEl ? detailEl.textContent.trim() : "";
    const badgeClass = badgeEl ? badgeEl.className : "";

    const meta = { ...getPlaceCardVisualMeta(nameText, badgeText, detailText, badgeClass) };
    if (journalLang() !== 'zh-TW') {
      meta.type = badgeText || journalText('feature');
      meta.dish = detailText || '';
    }

    // 建立頂部店家照片 / 特色餐點視覺區
    const imgWrap = document.createElement("div");
    imgWrap.className = "place-card-img-wrap";
    imgWrap.innerHTML = `
      <img src="${meta.img}" alt="${nameText}" loading="lazy" class="place-card-photo">
      <div class="place-card-img-gradient"></div>
      <span class="place-card-type-pill">${meta.type}</span>
      <div class="place-dish-spotlight">
        <span>${meta.dish}</span>
      </div>
    `;

    // 將原本卡牌內容包進 .place-card-body
    const bodyWrap = document.createElement("div");
    bodyWrap.className = "place-card-body";
    while (card.firstChild) {
      bodyWrap.appendChild(card.firstChild);
    }

    card.classList.add("has-top-photo");
    card.appendChild(imgWrap);
    card.appendChild(bodyWrap);
  });
}

function renderArticleModalContent(place) {
  const modal = document.getElementById("article-modal");
  if (!modal) return;

  // 填入基礎資料
  document.getElementById("modal-img").src = place.img;
  document.getElementById("modal-img").alt = place.title || place.nameZh;
  document.getElementById("modal-theme-badge").textContent = (place.vol ? place.vol + " ｜ " : "") + (place.themeName || journalText('journal'));
  document.getElementById("modal-title").textContent = place.nameZh;
  document.getElementById("modal-en-title").textContent = (place.nameEn || '') + " · " + (place.city || '') + " " + (place.district || '');
  document.getElementById("modal-rating").textContent = place.rating + " (" + (place.reviews || journalText('feature')) + ")";
  document.getElementById("modal-hours").textContent = "🕒 " + (place.hours || journalText('hours'));

  // 標籤
  const tagsEl = document.getElementById("modal-tags");
  tagsEl.innerHTML = (place.tags || []).map(t => `<span class="theme-tag-chip" style="background: #F8F5F0; border: 1px solid #E6DEC8; color: #1E293B; font-size: 11.5px; font-weight: 700;">${t}</span>`).join("");

  const customBodyEl = document.getElementById("modal-custom-article-body");
  const defaultBodyEl = document.getElementById("modal-default-article-body");

  const isEn = currentHopLang === 'en';
  const articles = getCurrentHopArticles();

  // 渲染文章主體 (徹底剔除任何品牌卡牌與系列導覽，確保品牌卡牌嚴格只出現在最底部)
  if (place.fullHtmlArticle && customBodyEl && defaultBodyEl) {
    const tempHolder = document.createElement('div');
    tempHolder.innerHTML = place.fullHtmlArticle;
    tempHolder.querySelectorAll('.brand-showcase-footer, .series-master-nav-box, .modal-series-nav').forEach(el => el.remove());

    customBodyEl.innerHTML = tempHolder.innerHTML;
    enhanceLongformPlaceCards(customBodyEl);
    customBodyEl.style.display = "block";
    defaultBodyEl.style.display = "none";
  } else {
    if (customBodyEl) {
      customBodyEl.innerHTML = "";
      customBodyEl.style.display = "none";
    }
    if (defaultBodyEl) {
      defaultBodyEl.style.display = "block";
    }
    // 生成特派員深度走訪文章 (Editorial Story)
    const story = place.features || '';

    document.getElementById("modal-article-text").textContent = story;
  }

  // 司機小字卡 (尺寸更小巧精緻、地址格式深度優化、分段下車點清晰)
  const rawZh = (place.addressZh || place.address || '').trim();
  const rawEn = (place.addressEn || '').trim();
  const stopsZh = rawZh.split(/\s*[\/／]\s*/).filter(Boolean);
  const stopsEn = rawEn.split(/\s*[\/／]\s*/).filter(Boolean);
  const primaryZh = stopsZh[0] || rawZh;
  const subsequentZh = stopsZh.slice(1);
  const primaryEn = stopsEn[0] || rawEn;
  const isMultiStop = subsequentZh.length > 0;

  const driverCardEl = document.getElementById("modal-driver-card");
  if (driverCardEl) {
    const safePrimaryZh = primaryZh.replace(/'/g, "\\'");
    const safeRawZh = rawZh.replace(/'/g, "\\'");
    driverCardEl.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
        <div style="font-size: 11px; color: #94A3B8; font-weight: 800; letter-spacing: 0.6px; display: flex; align-items: center; gap: 6px;">
          <span>🚖</span>
          <span style="color: #F8FAFC;">${journalText('driver')}</span>
          
        </div>
        <div style="display: flex; gap: 6px;">
          <button type="button" class="copy-btn" onclick="copyAddress('${safePrimaryZh}')" style="background: rgba(56, 189, 248, 0.2); color: #BAE6FD; border: 1px solid rgba(56, 189, 248, 0.45); border-radius: 6px; padding: 3px 9px; font-size: 11px; font-weight: 800; cursor: pointer; transition: all 0.2s ease;">
            ${journalText('first')}
          </button>
          ${isMultiStop ? `
            <button type="button" class="copy-btn" onclick="copyAddress('${safeRawZh}')" style="background: rgba(255,255,255,0.08); color: #94A3B8; border: 1px solid rgba(255,255,255,0.18); border-radius: 6px; padding: 3px 8px; font-size: 10.5px; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
              ${journalText('all')}
            </button>
          ` : ''}
        </div>
      </div>

      <!-- 主要目的地 / 首站下車點 (大字高對比、老年司機一秒看清) -->
      <div style="background: rgba(15, 23, 42, 0.55); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 9px 13px;">
        <div style="font-size: 10.5px; color: #94A3B8; margin-bottom: 2px; font-weight: 700;">
          🚩 ${isMultiStop ? journalText('firstDestination') : journalText('destination')}
        </div>
        <div id="modal-driver-addr" style="font-size: 17px; font-weight: 900; color: #38BDF8; line-height: 1.4; word-break: break-word; letter-spacing: 0.3px;">
          ${primaryZh}
        </div>
        ${primaryEn ? `
          <div id="modal-driver-addr-en" style="font-size: 11.5px; color: #CBD5E1; margin-top: 3px; line-height: 1.35;">
            ${primaryEn}
          </div>
        ` : ''}
      </div>

      <!-- 續行漫遊點 (若有多個推薦走訪地標) -->
      ${isMultiStop ? `
        <div style="margin-top: 7px; padding: 6px 10px; background: rgba(255, 255, 255, 0.03); border-radius: 8px; border: 1px dashed rgba(255, 255, 255, 0.15); display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap;">
          <span style="font-size: 10.5px; color: #94A3B8; font-weight: 700; white-space: nowrap;">${journalText('next')}</span>
          <div style="display: flex; gap: 5px; flex-wrap: wrap;">
            ${subsequentZh.map((stop, sIdx) => `
              <span style="display: inline-flex; align-items: center; gap: 3px; background: rgba(255, 255, 255, 0.08); color: #E2E8F0; padding: 2px 7px; border-radius: 5px; font-size: 11px; font-weight: 700;">
                <span style="color: #F59E0B; font-size: 9.5px;">${sIdx + 2}.</span> ${stop}
              </span>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;
  }

  // 複製按鈕綁定
  const copyBtn = document.getElementById("modal-copy-btn");
  if (copyBtn) {
    copyBtn.onclick = () => copyAddress(rawZh);
  }

  // 地圖與預訂連結
  const mapLink = document.getElementById("modal-map-link");
  if (mapLink) {
    mapLink.href = place.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(place.nameZh)}`;
  }

  const affLink = document.getElementById("modal-affiliate-link");
  if (affLink) {
    affLink.href = place.affiliateUrl || (mapLink ? mapLink.href : '#');
    affLink.textContent = journalText('book');
  }

  // 1. 全系列導覽已依需求移除
  const seriesNavContainer = document.getElementById("modal-series-nav-container");
  if (seriesNavContainer) {
    seriesNavContainer.innerHTML = "";
  }

  // 2. 官方品牌展示卡牌 (最底部・依使用者指示放置在最下方)
  const brandFooterContainer = document.getElementById("modal-bottom-brand-footer");
  if (brandFooterContainer) {
    brandFooterContainer.innerHTML = `
      <!-- Official Taiwan Roam & HiMyDream Brand Footer Card (最底部曝光) -->
      <div class="brand-showcase-footer" style="background: linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%); border: 1.5px solid #7DD3FC; border-radius: 26px; padding: 36px 32px; max-width: 100%; box-shadow: 0 10px 30px rgba(14, 116, 144, 0.08); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 18px;">
          <img src="assets/taiwan_roam_logo.png" alt="Taiwan Roam" style="width: 46px; height: 46px; border-radius: 14px; object-fit: cover; box-shadow: 0 4px 12px rgba(2, 132, 199, 0.22); border: 2px solid #FFFFFF;">
          <div>
            <div style="font-family: 'Noto Serif TC', serif; font-size: 21px; font-weight: 900; color: #0C4A6E; line-height: 1.2;">
              台灣吃喝玩樂 <span style="font-size: 12.5px; font-weight: 800; letter-spacing: 2px; color: #0284C7; font-family: -apple-system, sans-serif; text-transform: uppercase; margin-left: 6px;">TAIWAN ROAM</span>
            </div>
          </div>
        </div>

        <h3 style="font-family: 'Noto Serif TC', serif; font-size: 19.5px; font-weight: 900; color: #082F49; line-height: 1.5; margin: 0 0 8px 0; letter-spacing: -0.3px;" data-footer-text="slogan">以熱愛出發，探索台灣的巷弄、山海與在地風味。</h3>

        
        

        <div style="background: #FFFFFF; border-left: 4px solid #0284C7; border-radius: 0 16px 16px 0; padding: 18px 22px; margin-bottom: 24px; box-shadow: 0 4px 16px rgba(12, 74, 110, 0.05);">
          <p style="font-size: 13px; color: #334155; line-height: 1.85; margin: 0;" data-footer-text="about">HiMyDream STUDIO 策劃的台灣旅行指南，精選 22 縣市景點、米其林美食、330 間風格咖啡館與伴手禮，整合地圖導航、住宿比價與包車規劃。</p>
        </div>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <a href="mailto:himydream.studio0220@gmail.com?subject=【品牌合作洽詢】台灣吃喝玩樂 Taiwan Roam 商業合作" style="display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #0284C7 0%, #2563EB 100%); color: #FFFFFF; padding: 10px 22px; border-radius: 999px; font-size: 13px; font-weight: 800; text-decoration: none; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);">
            <span data-footer-text="footerContactLabel">品牌合作洽詢</span>
          </a>
          <a href="https://himydream.me/studio/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; background: #FFFFFF; color: #0369A1; border: 1.5px solid #BAE6FD; padding: 10px 22px; border-radius: 999px; font-size: 13px; font-weight: 800; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.04);">
            <span data-footer-text="team">開發團隊</span> HiMyDream STUDIO ↗
          </a>
        </div>
      </div>
    `;
  }

  applyJournalUI(modal);
  SiteFooter.apply(getWebLang(), modal);
  modal.classList.add("show");
  modal.querySelector(".article-modal-card").scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeArticleModalDirect() {
  const modal = document.getElementById("article-modal");
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }
}

function closeArticleModal(e) {
  if (e.target.id === "article-modal") {
    closeArticleModalDirect();
  }
}

/* =========================================================
   7. 複製地址 Toast 提示
   ========================================================= */
function copyAddress(address) {
  navigator.clipboard.writeText(address).then(() => {
    showToast(journalText('copied'));
  }).catch(err => {
    const input = document.createElement("input");
    input.value = address;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(journalText('copied'));
  });
}

function showToast(text) {
  const toast = document.getElementById("copy-toast");
  const textEl = document.getElementById("copy-toast-text");
  if (!toast) return;
  if (textEl) textEl.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
  const lang = getWebLang();
  switchWeekendHopLanguage(lang === 'zh-TW' || lang === 'zh' ? 'zh' : lang === 'de' ? 'en' : lang, false);
  if (typeof setSiteNavigationActive === 'function') setSiteNavigationActive('navJournals');
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeArticleModalDirect();
  });
});
