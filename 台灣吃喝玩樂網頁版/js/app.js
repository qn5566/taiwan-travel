/**
 * 台灣吃喝玩樂網頁版 - 旗艦應用核心邏輯 (app.js)
 * 涵蓋：
 * 1. 圖四風格 Top 1-6 橢圓膠囊卡牌 (Trending Top 6 Pill Carousel)
 * 2. 18 大精選主題網格 (Themes 18 Grid)
 * 3. 全部景點 ＋ 全部縣市瀑布流 (Masonry Waterfall & City Filter)
 * 4. 7 大排行榜切換 (Rankings Hub: 手搖20、景點20、包車10、活動10、雨天10、咖啡20、文青20)
 * 5. 週末探店單列專欄文章 (Weekend Hop Editorial with Spot Info Box)
 * 6. 白色透明玻璃擬態搜尋樞紐 (Glassmorphic Search Hub)
 * 7. 收藏清單抽屜、社群留言討論區與多語系切換
 */

let currentLang = "zh-TW";
let currentCityFilter = "全部";
let currentRankingTab = "drinks";
let userFavorites = JSON.parse(localStorage.getItem("tw_roam_web_favs") || '["台北 101 高空觀景台", "九份老街與阿妹茶樓", "Simple Kaffa 興波咖啡旗艦店"]');

// 頁面加載完成後初始化
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("taiwan_travel_lang") || "zh-TW";
  if (savedLang === "en" && typeof switchLanguage === "function") {
    switchLanguage("en");
  } else {
    renderTrendingSection();
    renderThemesSection();
    renderWaterfallSection();
    renderRankingsSection();
    renderBlogSection();
    setupSearchHub();
    setupEventListeners();
    updateFavBadge();
  }
});

/* =========================================================
   1. 第一區塊：圖四風格橢圓膠囊卡牌 (Trending Top 6 Pill Carousel)
   ========================================================= */
function renderTrendingSection() {
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
}

function scrollTrending(direction) {
  const container = document.getElementById("trending-capsule-row");
  if (!container) return;
  const scrollAmount = 320;
  container.scrollBy({
    left: direction === "next" ? scrollAmount : -scrollAmount,
    behavior: "smooth"
  });
}

/* =========================================================
   2. 第二區塊：18 大主題專區網格 (18 Themes Grid)
   ========================================================= */
function renderThemesSection() {
  const container = document.getElementById("themes-grid-container");
  if (!container || typeof THEMES_DATA === "undefined") return;

  container.innerHTML = THEMES_DATA.map(theme => {
    return `
      <div class="theme-icon-card" onclick="filterByTheme('${theme.id}')" title="${theme.name}">
        <div class="theme-icon-circle">${theme.icon}</div>
        <div class="theme-card-title">${theme.shortName}</div>
        <div class="theme-card-count">${theme.count}</div>
      </div>
    `;
  }).join("");
}

function filterByTheme(themeId) {
  if (themeId === "michelin") {
    window.location.href = "michelin.html";
    return;
  }
  if (themeId === "cafe") {
    window.location.href = "cafe.html";
    return;
  }
  // 平滑滾動到瀑布流
  const wf = document.getElementById("city-spots");
  if (wf) wf.scrollIntoView({ behavior: "smooth" });
}

/* =========================================================
   3. 第三區塊：全部景點 ＋ 可愛兩段式分區與縣市瀑布流 (Cute Two-tier Regional Navigation)
   ========================================================= */
let currentRegion = "all";

const TAIWAN_REGIONS_CONFIG = [
  {
    id: "all",
    name: "全部景點",
    nameEn: "All Spots",
    icon: "🌟",
    cities: [
      { name: "全部景點 (All)", en: "All Spots", key: "全部" }
    ]
  },
  {
    id: "north",
    name: "北部地區",
    nameEn: "North Taiwan",
    icon: "🏙️",
    cities: [
      { name: "全部北部", en: "All North", key: "全部北部" },
      { name: "台北市", en: "Taipei", key: "台北" },
      { name: "新北市", en: "New Taipei", key: "新北" },
      { name: "基隆市", en: "Keelung", key: "基隆" },
      { name: "桃園市", en: "Taoyuan", key: "桃園" },
      { name: "新竹縣", en: "Hsinchu County", key: "新竹縣" },
      { name: "新竹市", en: "Hsinchu City", key: "新竹市" }
    ]
  },
  {
    id: "central",
    name: "中部地區",
    nameEn: "Central Taiwan",
    icon: "🌳",
    cities: [
      { name: "全部中部", en: "All Central", key: "全部中部" },
      { name: "台中市", en: "Taichung", key: "台中" },
      { name: "苗栗縣", en: "Miaoli", key: "苗栗" },
      { name: "彰化縣", en: "Changhua", key: "彰化" },
      { name: "南投縣", en: "Nantou", key: "南投" },
      { name: "雲林縣", en: "Yunlin", key: "雲林" }
    ]
  },
  {
    id: "south",
    name: "南部地區",
    nameEn: "South Taiwan",
    icon: "🏛️",
    cities: [
      { name: "全部南部", en: "All South", key: "全部南部" },
      { name: "台南市", en: "Tainan", key: "台南" },
      { name: "高雄市", en: "Kaohsiung", key: "高雄" },
      { name: "嘉義縣", en: "Chiayi County", key: "嘉義縣" },
      { name: "嘉義市", en: "Chiayi City", key: "嘉義市" },
      { name: "屏東縣", en: "Pingtung", key: "屏東" }
    ]
  },
  {
    id: "east",
    name: "東部地區",
    nameEn: "East Taiwan",
    icon: "🌊",
    cities: [
      { name: "全部東部", en: "All East", key: "全部東部" },
      { name: "宜蘭縣", en: "Yilan", key: "宜蘭" },
      { name: "花蓮縣", en: "Hualien", key: "花蓮" },
      { name: "台東縣", en: "Taitung", key: "台東" }
    ]
  },
  {
    id: "islands",
    name: "離島地區",
    nameEn: "Offshore Islands",
    icon: "🏝️",
    cities: [
      { name: "全部離島", en: "All Islands", key: "全部離島" },
      { name: "澎湖縣", en: "Penghu", key: "澎湖" },
      { name: "金門縣", en: "Kinmen", key: "金門" },
      { name: "連江縣", en: "Matsu", key: "連江" }
    ]
  }
];

function renderWaterfallSection() {
  renderCityRegionTabs();
  renderCitySubChips();
  renderWaterfallCards();
}

function renderCityRegionTabs() {
  const tabsContainer = document.getElementById("city-region-tabs");
  if (!tabsContainer) return;

  const isEn = (currentLang === "en");

  tabsContainer.innerHTML = TAIWAN_REGIONS_CONFIG.map(reg => {
    const isActive = currentRegion === reg.id ? "active" : "";
    const label = isEn ? reg.nameEn : reg.name;
    return `
      <button type="button" class="region-tab-btn ${isActive}" onclick="selectRegion('${reg.id}')">
        <span>${reg.icon}</span>
        <span>${label}</span>
      </button>
    `;
  }).join("");
}

function selectRegion(regionId) {
  currentRegion = regionId;
  const regObj = TAIWAN_REGIONS_CONFIG.find(r => r.id === regionId);
  if (regObj && regObj.cities.length > 0) {
    currentCityFilter = regObj.cities[0].key;
  } else {
    currentCityFilter = "全部";
  }
  renderCityRegionTabs();
  renderCitySubChips();
  renderWaterfallCards();
}

function renderCitySubChips() {
  const chipsContainer = document.getElementById("city-subchips-container");
  if (!chipsContainer) return;

  const regObj = TAIWAN_REGIONS_CONFIG.find(r => r.id === currentRegion);
  if (!regObj) return;

  const isEn = (currentLang === "en");

  chipsContainer.innerHTML = regObj.cities.map(city => {
    const isActive = currentCityFilter === city.key ? "active" : "";
    const label = isEn ? city.en : city.name;
    return `
      <button type="button" class="city-chip-btn ${isActive}" onclick="selectSubCity('${city.key}')">
        ${label}
      </button>
    `;
  }).join("");
}

function selectSubCity(cityKey) {
  currentCityFilter = cityKey;
  renderCitySubChips();
  renderWaterfallCards();
}

function renderWaterfallCards() {
  const container = document.getElementById("waterfall-cards-container");
  if (!container || typeof ALL_SPOTS_DATA === "undefined") return;

  // 使用三欄現代精緻網格
  container.className = "spots-img3-grid";

  const isEn = (currentLang === "en");

  const filteredSpots = ALL_SPOTS_DATA.filter(item => {
    if (currentCityFilter === "全部" || currentCityFilter === "全部景點") return true;
    if (currentCityFilter === "全部北部") {
      return ["台北", "新北", "基隆", "桃園", "新竹"].some(c => item.city.includes(c));
    }
    if (currentCityFilter === "全部中部") {
      return ["台中", "苗栗", "彰化", "南投", "雲林"].some(c => item.city.includes(c));
    }
    if (currentCityFilter === "全部南部") {
      return ["台南", "高雄", "嘉義", "屏東"].some(c => item.city.includes(c));
    }
    if (currentCityFilter === "全部東部") {
      return ["宜蘭", "花蓮", "台東"].some(c => item.city.includes(c));
    }
    if (currentCityFilter === "全部離島") {
      return ["澎湖", "金門", "連江", "馬祖"].some(c => item.city.includes(c));
    }
    return item.city.includes(currentCityFilter.replace("縣", "").replace("市", ""));
  });

  if (filteredSpots.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 60px 20px; text-align: center; color: var(--text-muted);">
        <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
        <div style="font-size: 18px; font-weight: 700;">${isEn ? "No featured spots in this region yet" : "該縣市目前尚無特選景點"}</div>
        <p style="margin-top: 6px; font-size: 14px;">${isEn ? "Feel free to select other cities or explore All Spots!" : "歡迎點選其他縣市或切換至「全部景點」探索！"}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredSpots.map((item, idx) => {
    const isFav = userFavorites.includes(item.name);
    const tourUrl = AFFILIATE_HUB.getTourUrl(item.activityId || "1874-jiufen-shifen-day-tour-taipei");
    const hotelUrl = AFFILIATE_HUB.getHotelUrl(item.name);

    // 依縣市自動賦予多彩分類膠囊
    let catClass = "cat-nature";
    let catPillText = isEn ? "Nature & Views" : "自然絕景 · Nature";
    if (item.city.includes("台北") || item.city.includes("新北")) {
      catClass = "cat-culture";
      catPillText = isEn ? "Taipei Iconic" : "都會經典 · Taipei Iconic";
    } else if (item.city.includes("台南") || item.city.includes("高雄")) {
      catClass = "cat-food";
      catPillText = isEn ? "Heritage & Eats" : "府城散策 · Heritage";
    } else if (item.city.includes("花蓮") || item.city.includes("台東")) {
      catClass = "cat-nature";
      catPillText = isEn ? "Pacific Coast" : "太平洋秘境 · Ocean Blue";
    } else if (item.city.includes("台中") || item.city.includes("南投")) {
      catClass = "";
      catPillText = isEn ? "Scenic Wonder" : "山水勝景 · Scenic Wonder";
    }

    const reviewerAvatars = ["🧑‍💼", "👩‍🎨", "🧳", "✈️", "📸", "☕", "🚴", "🎒"];
    const avatar = reviewerAvatars[idx % reviewerAvatars.length];
    const views = (8.5 + (idx % 12) * 1.3).toFixed(1) + "k";

    const stayLabel = isEn ? "⏱️ Stay 2-3h" : "⏱️ 建議停留 2-3h";
    const authorLabel = isEn ? "Editor's Pick" : "精選打卡推薦";
    const viewsLabel = isEn ? `🔥 ${views} visited` : `🔥 ${views} 旅人探訪`;
    const hotelLabel = isEn ? "🏨 Hotels" : "🏨 查訂房";
    const bookLabel = isEn ? "Book ➔" : "預訂 ➔";

    return `
      <div class="spot-img3-card">
        <div class="spot-img3-media-wrap">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
          <span class="spot-img3-category-pill ${catClass}">${catPillText}</span>
          <button class="waterfall-fav-btn ${isFav ? "active" : ""}" onclick="toggleFavorite('${item.name}')" title="${isEn ? 'Save' : '收藏景點'}" style="position: absolute; bottom: 12px; right: 12px; z-index: 3;">
            ${isFav ? "❤️" : "🤍"}
          </button>
        </div>
        <div class="spot-img3-body">
          <div>
            <div class="spot-img3-date-line">
              <span>📍 ${item.city}</span>
              <span>·</span>
              <span>${stayLabel}</span>
              <span>·</span>
              <span style="color: #F59E0B; font-weight: 800;">★ ${item.rate || "4.9"}</span>
            </div>
            <h3 class="spot-img3-title">${item.name}</h3>
            <p class="spot-img3-desc">${item.desc}</p>
          </div>
          <div class="spot-img3-footer">
            <div class="spot-img3-author-wrap">
              <div class="spot-img3-avatar">${avatar}</div>
              <div>
                <div class="spot-img3-author-name">${authorLabel}</div>
                <div style="font-size: 11px; color: #94A3B8;">${viewsLabel}</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 11.5px; font-weight: 700; color: #64748B; text-decoration: none; padding: 6px 10px; border-radius: 9999px; background: #F1F5F9;">
                ${hotelLabel}
              </a>
              <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="spot-img3-cta-btn">
                ${bookLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/* =========================================================
   4. 排行榜專區 (7 大排行 Tab 切換)
   ========================================================= */
function renderRankingsSection() {
  const container = document.getElementById("rankings-display-container");
  if (!container || typeof RANKINGS_DATA === "undefined") return;

  const dataList = RANKINGS_DATA[currentRankingTab] || [];

  if (currentRankingTab === "drinks") {
    container.innerHTML = `
      <div class="rankings-dual-grid" style="grid-template-columns: 1fr;">
        <div class="ranking-list-card">
          <div class="ranking-list-header">
            <div class="ranking-header-title-row">
              <span class="ranking-header-title">🧋 全台 20 大必喝手搖飲品牌與黃金甜度冰塊</span>
            </div>
          </div>
          <div class="ranking-list-body">
            ${dataList.map(item => {
              const rankClass = item.rank === 1 ? "top1" : item.rank === 2 ? "top2" : item.rank === 3 ? "top3" : "";
              const mapUrl = AFFILIATE_HUB.getMapUrl(item.name.split(" ")[0]);
              return `
                <div class="ranking-row-card">
                  <div class="rank-number ${rankClass}">${item.rank}</div>
                  <div style="font-size:24px; flex-shrink:0;">${item.logo}</div>
                  <div class="rank-info">
                    <div class="rank-name-row">
                      <span class="rank-name">${item.name}</span>
                      <span class="rank-tag-badge">${item.category}</span>
                      <span style="font-size:12px; color:#D97706; font-weight:700;">${item.rate}</span>
                    </div>
                    <div class="rank-desc">招牌必點：${item.drinks.join("、")}</div>
                    <div style="margin-top:4px;">
                      <span class="sugar-ice-badge">🍯 ${item.sugarIce}</span>
                    </div>
                  </div>
                  <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:6px 12px; font-size:12px; flex-shrink:0;">
                    📍 門市
                  </a>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  } else if (currentRankingTab === "spots") {
    container.innerHTML = `
      <div class="rankings-dual-grid" style="grid-template-columns: 1fr;">
        <div class="ranking-list-card">
          <div class="ranking-list-header">
            <div class="ranking-header-title-row">
              <span class="ranking-header-title">🏆 全台 20 大熱門訂閱景點人氣排行榜</span>
            </div>
          </div>
          <div class="ranking-list-body">
            ${dataList.map(item => {
              const rankClass = item.rank === 1 ? "top1" : item.rank === 2 ? "top2" : item.rank === 3 ? "top3" : "";
              const tourUrl = AFFILIATE_HUB.getTourUrl(item.activityId || "1874-jiufen-shifen-day-tour-taipei");
              const hotelUrl = AFFILIATE_HUB.getHotelUrl(item.name);
              return `
                <div class="ranking-row-card">
                  <div class="rank-number ${rankClass}">${item.rank}</div>
                  <img src="${item.img}" style="width:60px; height:60px; border-radius:12px; object-fit:cover; flex-shrink:0;" alt="${item.name}">
                  <div class="rank-info">
                    <div class="rank-name-row">
                      <span class="rank-name">${item.name}</span>
                      <span class="rank-tag-badge">${item.tag}</span>
                      <span style="font-size:12px; color:#D97706; font-weight:700;">${item.rate}</span>
                    </div>
                    <div class="rank-desc">${item.desc}</div>
                    <div style="font-size:11px; color:#0284C7; font-weight:700; margin-top:2px;">🔥 ${item.views}</div>
                  </div>
                  <div style="display:flex; flex-direction:column; gap:4px; align-items:flex-end; flex-shrink:0;">
                    <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-book" style="padding:5px 10px; font-size:11px;">🎟️ 預定行程</a>
                    <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-booking-room" style="padding:4px 8px; font-size:11px;">🏨 找房間</a>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  } else if (currentRankingTab === "charter") {
    container.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap:20px;">
        ${dataList.map(item => {
          const charterUrl = AFFILIATE_HUB.getCharterUrl();
          return `
            <div style="background:#FFFFFF; border:1px solid var(--border-color); border-radius:18px; padding:22px; display:flex; flex-direction:column; box-shadow:var(--shadow-sm);">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
                <span style="font-size:18px; font-weight:800; color:var(--text-heading);">#${item.rank} ${item.name}</span>
                <span style="background:#E0F2FE; color:#0284C7; font-size:11px; font-weight:800; padding:4px 10px; border-radius:9999px; flex-shrink:0;">${item.city}</span>
              </div>
              <p style="font-size:13px; color:var(--text-muted); line-height:1.6; margin-bottom:14px; flex:1;">${item.desc}</p>
              <div style="display:flex; align-items:center; justify-content:space-between; margin-top:auto; border-top:1px solid #F1F5F9; padding-top:12px;">
                <div>
                  <span style="font-size:11px; color:#64748B;">${item.trips}</span>
                  <div style="font-size:16px; font-weight:800; color:#0284C7;">${item.price}</div>
                </div>
                <a href="${charterUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-book" style="padding:8px 16px; font-size:12px;">
                  🚗 包車預約
                </a>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  } else if (currentRankingTab === "events") {
    container.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap:20px;">
        ${dataList.map(item => `
          <div style="background:#FFFFFF; border:1px solid var(--border-color); border-radius:18px; padding:22px; box-shadow:var(--shadow-sm);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
              <span style="font-size:18px; font-weight:800; color:var(--text-heading);">#${item.rank} ${item.name}</span>
              <span style="background:#FEF3C7; color:#92400E; font-size:11px; font-weight:800; padding:4px 10px; border-radius:9999px;">${item.tag}</span>
            </div>
            <div style="font-size:12px; color:#D97706; font-weight:700; margin-bottom:6px;">📅 ${item.date} ｜ 📍 ${item.loc}</div>
            <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">${item.desc}</p>
          </div>
        `).join("")}
      </div>
    `;
  } else if (currentRankingTab === "rainy") {
    container.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap:20px;">
        ${dataList.map(item => `
          <div style="background:#FFFFFF; border:1px solid var(--border-color); border-radius:18px; overflow:hidden; box-shadow:var(--shadow-sm); display:flex; flex-direction:column;">
            <img src="${item.img}" style="width:100%; height:180px; object-fit:cover;" alt="${item.name}">
            <div style="padding:20px; flex:1; display:flex; flex-direction:column;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span style="font-size:16px; font-weight:800; color:var(--text-heading);">#${item.rank} ${item.name}</span>
                <span style="font-size:12px; color:#D97706; font-weight:800;">${item.rate}</span>
              </div>
              <div style="font-size:12px; color:#0284C7; font-weight:700; margin-bottom:8px;">🏛️ ${item.indoor}</div>
              <p style="font-size:13px; color:var(--text-muted); line-height:1.6; margin-bottom:14px; flex:1;">${item.desc}</p>
              <div style="display:flex; justify-content:space-between; align-items:center; padding-top:10px; border-top:1px solid #F1F5F9;">
                <span style="font-size:13px; font-weight:800; color:#0F172A;">門票：${item.ticket}</span>
                <a href="${AFFILIATE_HUB.getMapUrl(item.name)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:6px 12px; font-size:12px;">🧭 導航</a>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (currentRankingTab === "cafe") {
    container.innerHTML = `
      <div class="cafe-grid-4col">
        ${dataList.map(item => `
          <div class="cafe-card">
            <div class="cafe-img-wrap">
              <img src="${item.img}" alt="${item.name}" loading="lazy">
              <span style="position:absolute; top:12px; left:12px; background:rgba(15,23,42,0.8); color:#fff; font-size:11px; font-weight:800; padding:4px 8px; border-radius:6px;">#${item.rank}</span>
            </div>
            <div style="padding:18px; display:flex; flex-direction:column; flex:1;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:#D97706;">📍 ${item.city}</span>
                <span style="font-size:12px; font-weight:800; color:#D97706;">${item.rate}</span>
              </div>
              <h4 style="font-size:16px; font-weight:800; color:var(--text-heading); margin:6px 0;">${item.name}</h4>
              <div style="font-size:11px; color:#92400E; background:#FEF3C7; padding:3px 8px; border-radius:6px; display:inline-block; font-weight:700; margin-bottom:8px;">✨ ${item.tag}</div>
              <p style="font-size:12px; color:var(--text-muted); line-height:1.5; margin-bottom:14px; flex:1;">${item.feature}</p>
              <a href="${AFFILIATE_HUB.getMapUrl(item.name)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="text-align:center; padding:7px; font-size:12px;">
                🧭 Google 地圖導航
              </a>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (currentRankingTab === "walk") {
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${dataList.map(item => `
          <div style="background:#FFFFFF; border:1px solid var(--border-color); border-radius:16px; padding:20px; display:flex; align-items:center; gap:20px; box-shadow:var(--shadow-sm);">
            <div style="font-size:22px; font-weight:900; color:#0284C7; width:44px; text-align:center; flex-shrink:0;">#${item.rank}</div>
            <div style="flex:1;">
              <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
                <span style="font-size:16px; font-weight:800; color:var(--text-heading);">${item.name}</span>
                <span style="font-size:11px; background:#F1F5F9; color:#475569; padding:2px 8px; border-radius:6px; font-weight:700;">${item.tag}</span>
              </div>
              <p style="font-size:13px; color:var(--text-muted); line-height:1.6;">${item.desc}</p>
            </div>
            <div style="text-align:right; flex-shrink:0;">
              <div style="font-size:11px; color:#64748B;">🔥 ${item.views}</div>
              <a href="${AFFILIATE_HUB.getMapUrl(item.name.split(" ｜ ")[0])}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="margin-top:6px; padding:6px 12px; font-size:12px;">🧭 路線散策</a>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }
}

function switchRankingTab(tabKey) {
  currentRankingTab = tabKey;
  document.querySelectorAll(".ranking-tab-pill").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabKey);
  });
  renderRankingsSection();
}

/* =========================================================
   5. 週末探店專欄部落格 (Weekend Hop Editorial - 一排一個文章)
   ========================================================= */
function renderBlogSection() {
  const container = document.getElementById("blog-articles-container");
  if (!container || typeof BLOG_ARTICLES_DATA === "undefined") return;

  container.innerHTML = BLOG_ARTICLES_DATA.map(art => {
    const spot = art.spotInfo;
    return `
      <article class="blog-editorial-row">
        <div class="blog-hero-wrap">
          <img src="${art.heroImg}" alt="${art.title}" loading="lazy">
          <span class="blog-category-badge">${art.category}</span>
        </div>
        <div class="blog-body">
          <div class="blog-meta-line">
            <span>📅 ${art.date}</span>
            <span>·</span>
            <span>✍️ ${art.author}</span>
            <span>·</span>
            <span>⏱️ ${art.readTime}</span>
          </div>
          <h3 class="blog-title">${art.title}</h3>
          <div class="blog-subtitle">${art.subtitle}</div>
          <div class="blog-excerpt">${art.content.replace(/\n\n/g, '<br><br>')}</div>

          <!-- 景點詳細資訊盒 (Spot Info Box) -->
          <div class="spot-info-box">
            <div class="spot-info-header">
              <span>🏠 ${spot.name}</span>
            </div>
            <div class="spot-info-list">
              <div class="spot-info-item">
                <span class="spot-info-label">📍 詳細地址</span>
                <span>${spot.address}</span>
              </div>
              <div class="spot-info-item">
                <span class="spot-info-label">⏰ 營業時間</span>
                <span>${spot.hours}</span>
              </div>
              <div class="spot-info-item">
                <span class="spot-info-label">💡 推薦必點</span>
                <span>${spot.signature}</span>
              </div>
              <div class="spot-info-item">
                <span class="spot-info-label">🚇 交通指南</span>
                <span>${spot.transport}</span>
              </div>
            </div>
            <div class="spot-info-actions">
              <a href="${AFFILIATE_HUB.getMapUrl(spot.mapQuery)}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:8px 16px; font-size:12px;">
                🧭 Google 地圖導航
              </a>
              <a href="${spot.bookingUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-book" style="padding:8px 16px; font-size:12px;">
                🎟️ 線上預約 / 官方地圖
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

/* =========================================================
   6. 搜尋中樞 (Hero Search Hub Setup)
   ========================================================= */
function setupSearchHub() {
  const searchInput = document.getElementById("hero-main-search");
  const searchBtn = document.getElementById("hero-search-btn");

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      executeSearch(searchInput.value.trim());
    });
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") executeSearch(searchInput.value.trim());
    });
  }
}

function executeSearch(query) {
  if (!query) {
    currentCityFilter = "全部";
    renderWaterfallSection();
    return;
  }
  const wf = document.getElementById("city-spots");
  if (wf) wf.scrollIntoView({ behavior: "smooth" });

  const container = document.getElementById("waterfall-cards-container");
  if (!container || typeof ALL_SPOTS_DATA === "undefined") return;

  const results = ALL_SPOTS_DATA.filter(item => {
    return item.name.includes(query) || item.city.includes(query) || item.desc.includes(query);
  });

  if (results.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 60px 20px; text-align: center; color: var(--text-muted);">
        <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
        <div style="font-size: 18px; font-weight: 700;">找不到與「${query}」相關的景點</div>
        <p style="margin-top: 6px; font-size: 14px;">試試搜尋「台北」、「日月潭」或「溫泉」吧！</p>
      </div>
    `;
  } else {
    container.innerHTML = results.map(item => {
      const isFav = userFavorites.includes(item.name);
      const tourUrl = AFFILIATE_HUB.getTourUrl(item.activityId || "1874-jiufen-shifen-day-tour-taipei");
      const hotelUrl = AFFILIATE_HUB.getHotelUrl(item.name);
      const mapUrl = AFFILIATE_HUB.getMapUrl(item.name);
      return `
        <div class="waterfall-card aspect-wide">
          <div class="waterfall-media-wrap">
            <img src="${item.img}" alt="${item.name}">
            <button class="waterfall-fav-btn ${isFav ? "active" : ""}" onclick="toggleFavorite('${item.name}')">
              ${isFav ? "❤️" : "🤍"}
            </button>
          </div>
          <div class="waterfall-body">
            <div class="waterfall-meta-header">
              <span class="waterfall-city-tag">📍 ${item.city}</span>
              <span class="waterfall-rate">${item.rate}</span>
            </div>
            <h3 class="waterfall-title">${item.name}</h3>
            <p class="waterfall-desc">${item.desc}</p>
            <div class="waterfall-actions-row">
              <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="btn-waterfall btn-wf-tour">🎟️ 預定行程</a>
              <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" class="btn-waterfall btn-wf-hotel">🏨 找房間</a>
              <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-waterfall btn-wf-map">🧭</a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
}

/* =========================================================
   7. 收藏清單與事件綁定 (Favorites & Event Listeners)
   ========================================================= */
function toggleFavorite(spotName) {
  const index = userFavorites.indexOf(spotName);
  if (index > -1) {
    userFavorites.splice(index, 1);
  } else {
    userFavorites.push(spotName);
  }
  localStorage.setItem("tw_roam_web_favs", JSON.stringify(userFavorites));
  updateFavBadge();
  renderWaterfallCards();
}

function updateFavBadge() {
  const badge = document.getElementById("fav-count-badge");
  if (badge) badge.textContent = userFavorites.length;
}

function openFavDrawer() {
  const drawer = document.getElementById("fav-drawer");
  const overlay = document.getElementById("fav-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.classList.add("open");
    renderFavDrawerList();
  }
}

function closeFavDrawer() {
  const drawer = document.getElementById("fav-drawer");
  const overlay = document.getElementById("fav-drawer-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
  }
}

function renderFavDrawerList() {
  const listEl = document.getElementById("fav-drawer-list");
  if (!listEl) return;

  if (userFavorites.length === 0) {
    listEl.innerHTML = `<div style="padding:40px 20px; text-align:center; color:#94A3B8;">尚無收藏景點，趕快在卡片上點擊 ❤️ 收藏吧！</div>`;
    return;
  }

  listEl.innerHTML = userFavorites.map(name => {
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:12px; background:#F8FAFC; border-radius:12px; margin-bottom:8px;">
        <span style="font-weight:700; font-size:14px; color:#0F172A;">${name}</span>
        <button onclick="toggleFavorite('${name}'); renderFavDrawerList();" style="border:none; background:transparent; cursor:pointer; color:#E11D48; font-size:16px;">🗑️</button>
      </div>
    `;
  }).join("");
}

function setupEventListeners() {
  // 語言選單切換
  const langSelect = document.getElementById("global-lang-select");
  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      currentLang = e.target.value;
      if (typeof switchLanguage === "function") {
        switchLanguage(currentLang);
      }
    });
  }
}
