/**
 * 台灣吃喝玩樂網頁版 - 核心應用互動邏輯 (app.js)
 * 涵蓋：雙人氣排行榜（手搖 TOP20 + 景點 TOP20）、16大主題、多國語言、收藏抽屜與詳情彈窗
 */

let currentLang = "zh-TW";
let currentDrinksFilter = "全部";
let currentSpotsFilter = "全部";
let currentThemesFilter = "全部";
let currentRankingView = "dual";
let userFavorites = JSON.parse(localStorage.getItem("tw_roam_web_favs") || '["花蓮清水斷崖", "北投日勝生加賀屋", "澎湖七美雙心石滬"]');

// 初始化頁面
document.addEventListener("DOMContentLoaded", () => {
  renderDualRankings();
  renderThemesGrid();
  updateFavBadge();
  setupEventListeners();
});

/**
 * 1. 渲染雙人氣排行榜（手搖飲料 TOP 20 + 景點 TOP 20）
 */
function renderDualRankings() {
  renderDrinksList();
  renderSpotsList();
}

/**
 * 1-1. 渲染手搖飲料列表
 */
function renderDrinksList() {
  const drinksContainer = document.getElementById("drinks-ranking-list");
  if (!drinksContainer || typeof DRINKS_DATA === "undefined") return;

  const filteredDrinks = DRINKS_DATA.filter(item => {
    return currentDrinksFilter === "全部" || item.category === currentDrinksFilter;
  });

  drinksContainer.innerHTML = filteredDrinks.map(item => {
    const rankClass = item.rank === 1 ? "top1" : item.rank === 2 ? "top2" : item.rank === 3 ? "top3" : "";
    const mapUrl = AFFILIATE_HUB.getMapUrl(item.name.split(" ")[0]);
    
    return `
      <div class="ranking-row-card" onclick="openDrinkDetail(${item.rank})">
        <div class="rank-number ${rankClass}">${item.rank}</div>
        <div style="font-size:24px; flex-shrink:0;">${item.logo}</div>
        <div class="rank-info">
          <div class="rank-name-row">
            <span class="rank-name">${item.name}</span>
            <span class="rank-tag-badge">${item.category}</span>
            <span style="font-size:11px; color:#D97706; font-weight:700;">${item.rate}</span>
          </div>
          <div class="rank-desc">招牌必點：${item.drinks.slice(0, 2).join("、")}</div>
          <div style="display:flex; align-items:center; gap:6px; margin-top:2px;">
            <span class="sugar-ice-badge">🍯 ${item.sugarIce}</span>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; gap:4px; align-items:flex-end; flex-shrink:0;" onclick="event.stopPropagation()">
          <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:5px 10px; font-size:11px;" title="找附近門市">
            📍 地圖導航
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 1-2. 渲染人氣景點列表
 */
function renderSpotsList() {
  const spotsContainer = document.getElementById("spots-ranking-list");
  if (!spotsContainer || typeof SPOTS_TOP20_DATA === "undefined") return;

  const filteredSpots = SPOTS_TOP20_DATA.filter(item => {
    return currentSpotsFilter === "全部" || item.category === currentSpotsFilter;
  });

  spotsContainer.innerHTML = filteredSpots.map(item => {
    const rankClass = item.rank === 1 ? "top1" : item.rank === 2 ? "top2" : item.rank === 3 ? "top3" : "";
    const tourUrl = AFFILIATE_HUB.getTourUrl(item.activityId);
    const hotelUrl = AFFILIATE_HUB.getHotelUrl(item.city);
    const charterUrl = AFFILIATE_HUB.getCharterUrl(item.city);
    const mapUrl = AFFILIATE_HUB.getMapUrl(item.name);

    return `
      <div class="ranking-row-card" onclick="openSpotDetail(${item.rank})">
        <div class="rank-number ${rankClass}">${item.rank}</div>
        <div class="rank-info">
          <div class="rank-name-row">
            <span class="rank-name">${item.name}</span>
            <span class="rank-tag-badge">${item.city}</span>
            <span style="font-size:11px; color:#D97706; font-weight:700;">${item.rate}</span>
          </div>
          <div class="rank-desc">${item.highlight}</div>
          <div style="font-size:11px; color:var(--text-muted);">👥 ${item.visitors} · ${item.category}</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:5px; flex-shrink:0;" onclick="event.stopPropagation()">
          <div style="display:flex; gap:4px;">
            <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-tour" style="padding:4px 9px; font-size:11px;">
              🎟️ 預定行程
            </a>
            <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-booking-hotel" style="padding:4px 9px; font-size:11px;">
              🏨 訂房去
            </a>
          </div>
          <div style="display:flex; gap:4px;">
            <a href="${charterUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-charter" style="padding:3px 8px; font-size:10px;">
              🚗 包車
            </a>
            <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:3px 8px; font-size:10px;">
              📍 導航
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 2. 視圖切換器 (雙欄並列 / 手搖專區 / 景點專區)
 */
function switchRankingView(mode) {
  currentRankingView = mode;
  const grid = document.getElementById("rankings-main-grid");
  document.querySelectorAll(".switch-tab").forEach(tab => tab.classList.remove("active"));

  if (mode === "dual") {
    document.getElementById("tab-dual").classList.add("active");
    grid.className = "rankings-dual-grid";
  } else if (mode === "drinks") {
    document.getElementById("tab-drinks").classList.add("active");
    grid.className = "rankings-dual-grid show-only-drinks";
  } else if (mode === "spots") {
    document.getElementById("tab-spots").classList.add("active");
    grid.className = "rankings-dual-grid show-only-spots";
  }
}

/**
 * 3. 分類篩選膠囊
 */
function filterDrinksCategory(cat, btn) {
  currentDrinksFilter = cat;
  document.querySelectorAll("#drinks-filter-pills .filter-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderDrinksList();
}

function filterSpotsCategory(cat, btn) {
  currentSpotsFilter = cat;
  document.querySelectorAll("#spots-filter-pills .filter-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderSpotsList();
}

function filterThemesCategory(cat, btn) {
  currentThemesFilter = cat;
  document.querySelectorAll("#themes-filter-pills .filter-pill").forEach(p => p.classList.remove("active"));
  btn.classList.add("active");
  renderThemesGrid();
}

/**
 * 4. 渲染 16 大主題專區網格
 */
function renderThemesGrid() {
  const container = document.getElementById("themes-grid-container");
  if (!container || typeof THEMES_DATA === "undefined") return;

  const filteredThemes = THEMES_DATA.filter(theme => {
    return currentThemesFilter === "全部" || theme.categoryGroup === currentThemesFilter;
  });

  container.innerHTML = filteredThemes.map(theme => {
    const charterUrl = AFFILIATE_HUB.getCharterUrl(theme.location);
    const tourUrl = AFFILIATE_HUB.getTourUrl();
    const hotelUrl = AFFILIATE_HUB.getHotelUrl(theme.location);
    const flightBtn = theme.hasFlight ? `
      <a href="${AFFILIATE_HUB.getFlightUrl()}" target="_blank" rel="noopener noreferrer" class="btn-action btn-trip-flight" style="padding:4px 8px; font-size:11px;">
        ✈️ 查機票
      </a>
    ` : "";

    return `
      <div class="theme-card" onclick="openThemeDetail('${theme.id}')">
        <div class="theme-img-wrap">
          <img src="${theme.img}" alt="${theme.name}" loading="lazy">
          <span class="theme-badge">${theme.badge}</span>
        </div>
        <div class="theme-body">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
            <span class="rank-tag-badge" style="background:#E0F2FE; color:#0284C7;">${theme.categoryGroup}</span>
            <span style="font-size:11px; color:#D97706; font-weight:700;">★ ${theme.rate}</span>
          </div>
          <h3 class="theme-title">${theme.name}</h3>
          <p class="theme-desc">${theme.desc}</p>
          <div class="theme-footer-row">
            <span>📍 ${theme.location.split(" · ")[0]}</span>
            <span>⏱️ ${theme.duration}</span>
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:5px; margin-top:14px; padding-top:10px; border-top:1px solid #F1F5F9;" onclick="event.stopPropagation()">
            <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-tour" style="padding:4px 8px; font-size:11px;">
              🎟️ 預定行程
            </a>
            <a href="${charterUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-charter" style="padding:4px 8px; font-size:11px;">
              🚗 包車
            </a>
            <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-booking-hotel" style="padding:4px 8px; font-size:11px;">
              🏨 訂房去
            </a>
            ${flightBtn}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * 5. 搜尋連動邏輯
 */
function handleWebSearch(query) {
  query = (query || "").trim().toLowerCase();
  
  // 篩選主題卡片
  document.querySelectorAll(".theme-card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = (!query || text.includes(query)) ? "flex" : "none";
  });

  // 篩選排行榜
  document.querySelectorAll(".ranking-row-card").forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = (!query || text.includes(query)) ? "flex" : "none";
  });
}

function executeWebSearch() {
  const input = document.getElementById("hero-search-input");
  if (input) {
    handleWebSearch(input.value);
    const target = document.getElementById("rankings");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * 6. 多國語言切換
 */
function toggleLangDropdown() {
  const menu = document.getElementById("lang-dropdown-menu");
  if (menu) menu.classList.toggle("show");
}

function switchLanguage(langCode, flag, label) {
  currentLang = langCode;
  document.getElementById("current-lang-flag").innerText = flag;
  document.getElementById("current-lang-text").innerText = label;

  document.querySelectorAll(".lang-option").forEach(el => el.classList.remove("active"));
  if (event && event.currentTarget) event.currentTarget.classList.add("active");

  const menu = document.getElementById("lang-dropdown-menu");
  if (menu) menu.classList.remove("show");

  const t = (typeof WEB_I18N !== "undefined" && WEB_I18N[langCode]) ? WEB_I18N[langCode] : WEB_I18N["zh-TW"];
  if (!t) return;

  // 更新關鍵文案
  document.getElementById("nav-home-text").innerText = t.navHome;
  document.getElementById("nav-themes-text").innerText = t.navThemes;
  document.getElementById("nav-drinks-text").innerText = t.navDrinks;
  document.getElementById("nav-spots-text").innerText = t.navSpots;
  document.getElementById("hero-tagline-text").innerText = t.heroTagline;
  document.getElementById("hero-title-main").innerHTML = `${t.heroTitle1}<br><span class="highlight-gradient">${t.heroTitle2}</span>`;
  document.getElementById("hero-subtitle-text").innerText = t.heroSubtitle;
  document.getElementById("hero-search-input").placeholder = t.searchPlaceholder;
  document.getElementById("hero-search-btn-text").innerText = t.searchBtn;
  document.getElementById("section-themes-title").innerText = t.sectionThemesTitle;
  document.getElementById("section-themes-desc").innerText = t.sectionThemesDesc;
  document.getElementById("section-drinks-title").innerText = t.sectionDrinksTitle;
  document.getElementById("section-spots-title").innerText = t.sectionSpotsTitle;

  // 更新所有按鈕文案
  document.querySelectorAll(".btn-klook-tour").forEach(btn => btn.innerText = t.btnTour);
  document.querySelectorAll(".btn-klook-charter").forEach(btn => btn.innerText = t.btnCharter);
  document.querySelectorAll(".btn-booking-hotel").forEach(btn => btn.innerText = t.btnHotel);
  document.querySelectorAll(".btn-trip-flight").forEach(btn => btn.innerText = t.btnFlight);
  document.querySelectorAll(".btn-maps-nav").forEach(btn => btn.innerText = t.btnMap);
}

/**
 * 7. 詳情彈窗 Modal
 */
function openDrinkDetail(rank) {
  const item = DRINKS_DATA.find(d => d.rank === rank);
  if (!item) return;

  const mapUrl = AFFILIATE_HUB.getMapUrl(item.name.split(" ")[0]);
  const modal = document.getElementById("detail-modal-overlay");
  document.getElementById("modal-title").innerHTML = `${item.logo} ${item.name} <span class="rank-tag-badge">${item.category}</span>`;
  
  document.getElementById("modal-body-content").innerHTML = `
    <div style="font-size:14px; color:var(--text-body); margin-bottom:16px;">
      <p style="font-size:15px; font-weight:700; color:var(--text-heading); margin-bottom:8px;">${item.tag}</p>
      <p style="line-height:1.7; margin-bottom:16px;">${item.desc}</p>
    </div>
    <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:14px; padding:16px; margin-bottom:16px;">
      <div style="font-size:13px; font-weight:800; color:var(--text-heading); margin-bottom:8px;">⭐ 招牌人氣 Top 3 推薦：</div>
      <ul style="padding-left:20px; font-size:14px; color:#334155; line-height:1.8;">
        ${item.drinks.map(d => `<li><strong>${d}</strong></li>`).join("")}
      </ul>
    </div>
    <div style="background:#FEF3C7; border:1px solid #FDE68A; border-radius:14px; padding:12px 16px; display:flex; align-items:center; justify-content:space-between;">
      <span style="font-size:13px; font-weight:700; color:#92400E;">🍯 老饕黃金甜度冰量指南：</span>
      <span style="font-size:14px; font-weight:800; color:#B45309;">${item.sugarIce}</span>
    </div>
  `;

  document.getElementById("modal-footer-actions").innerHTML = `
    <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:9px 18px;">
      📍 Google 地圖導航找附近門市
    </a>
  `;

  modal.classList.add("open");
}

function openSpotDetail(rank) {
  const item = SPOTS_TOP20_DATA.find(s => s.rank === rank);
  if (!item) return;

  const tourUrl = AFFILIATE_HUB.getTourUrl(item.activityId);
  const charterUrl = AFFILIATE_HUB.getCharterUrl(item.city);
  const hotelUrl = AFFILIATE_HUB.getHotelUrl(item.city);
  const mapUrl = AFFILIATE_HUB.getMapUrl(item.name);
  const modal = document.getElementById("detail-modal-overlay");

  document.getElementById("modal-title").innerHTML = `🏆 NO.${item.rank} ${item.name}`;

  document.getElementById("modal-body-content").innerHTML = `
    <div style="width:100%; height:240px; border-radius:14px; overflow:hidden; margin-bottom:18px;">
      <img src="${item.img}" alt="${item.name}" style="width:100%; height:100%; object-fit:cover;">
    </div>
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
      <span class="rank-tag-badge">${item.city}</span>
      <span class="rank-tag-badge" style="background:#FEF3C7; color:#B45309;">${item.category}</span>
      <span style="font-size:13px; font-weight:700; color:#D97706;">${item.rate}</span>
      <span style="font-size:13px; color:var(--text-muted); margin-left:auto;">年度訪客：${item.visitors}</span>
    </div>
    <h4 style="font-size:16px; font-weight:800; color:var(--text-heading); margin-bottom:8px;">景點必訪亮點</h4>
    <p style="font-size:14px; color:var(--text-body); line-height:1.7; margin-bottom:16px;">${item.highlight}。身為台灣最具代表性的指標旅遊勝地，深受國內外旅人一致好評，推薦搭配一日包車或提早預約免排隊門票。</p>
  `;

  document.getElementById("modal-footer-actions").innerHTML = `
    <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-tour" style="padding:9px 16px;">
      🎟️ 預定行程
    </a>
    <a href="${charterUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-charter" style="padding:9px 16px;">
      🚗 包車
    </a>
    <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-booking-hotel" style="padding:9px 16px;">
      🏨 訂房去
    </a>
    <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:9px 16px;">
      📍 地圖導航
    </a>
  `;

  modal.classList.add("open");
}

function openThemeDetail(themeId) {
  const theme = THEMES_DATA.find(t => t.id === themeId);
  if (!theme) return;

  const tourUrl = AFFILIATE_HUB.getTourUrl();
  const charterUrl = AFFILIATE_HUB.getCharterUrl(theme.location);
  const hotelUrl = AFFILIATE_HUB.getHotelUrl(theme.location);
  const modal = document.getElementById("detail-modal-overlay");

  const flightBanner = theme.hasFlight ? `
    <div style="background:linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%); border-radius:12px; padding:12px 16px; margin:16px 0; display:flex; align-items:center; justify-content:space-between;">
      <div>
        <div style="font-size:13px; font-weight:800; color:#0369A1;">✈️ 離島國內跳島機票即時比價</div>
        <div style="font-size:11px; color:#0284C7;">松山 / 台中 / 高雄 飛 澎湖 / 金門 / 馬祖</div>
      </div>
      <a href="${AFFILIATE_HUB.getFlightUrl()}" target="_blank" rel="noopener noreferrer" class="btn-action btn-trip-flight" style="padding:6px 12px; font-size:12px;">
        ✈️ 查機票
      </a>
    </div>
  ` : "";

  const subSpotsHtml = (theme.subSpots && theme.subSpots.length) ? `
    <div style="margin-top:20px;">
      <h5 style="font-size:15px; font-weight:800; color:var(--text-heading); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
        <span>📍</span> 代表性精選景點路線 (${theme.subSpots.length})
      </h5>
      <div style="display:flex; flex-direction:column; gap:10px;">
        ${theme.subSpots.map(s => {
          const sTour = AFFILIATE_HUB.getTourUrl(s.activityId);
          const sHotel = AFFILIATE_HUB.getHotelUrl(s.city);
          const sCharter = AFFILIATE_HUB.getCharterUrl(s.city);
          const sMap = AFFILIATE_HUB.getMapUrl(s.name);
          return `
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; border-radius:12px; padding:12px 14px;">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
                <span style="font-size:14px; font-weight:800; color:var(--text-heading);">${s.name}</span>
                <span style="font-size:11px; color:var(--cyan-deep); font-weight:600;">${s.city}</span>
              </div>
              <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px; line-height:1.5;">${s.desc}</p>
              <div style="display:flex; flex-wrap:wrap; gap:5px;">
                <a href="${sTour}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-tour" style="padding:4px 8px; font-size:10px;">
                  🎟️ 預定行程
                </a>
                <a href="${sHotel}" target="_blank" rel="noopener noreferrer" class="btn-action btn-booking-hotel" style="padding:4px 8px; font-size:10px;">
                  🏨 訂房去
                </a>
                <a href="${sCharter}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-charter" style="padding:4px 8px; font-size:10px;">
                  🚗 包車
                </a>
                <a href="${sMap}" target="_blank" rel="noopener noreferrer" class="btn-action btn-maps-nav" style="padding:4px 8px; font-size:10px;">
                  📍 導航
                </a>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  ` : "";

  document.getElementById("modal-title").innerHTML = `${theme.name}`;
  document.getElementById("modal-body-content").innerHTML = `
    <div style="width:100%; height:220px; border-radius:14px; overflow:hidden; margin-bottom:16px;">
      <img src="${theme.img}" alt="${theme.name}" style="width:100%; height:100%; object-fit:cover;">
    </div>
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
      <span class="rank-tag-badge" style="background:#E0F2FE; color:#0284C7;">${theme.categoryGroup}</span>
      <span style="font-size:12px; font-weight:700; color:var(--cyan-deep);">📍 ${theme.location}</span>
      <span style="font-size:12px; color:var(--text-muted); margin-left:auto;">建議天數：${theme.duration}</span>
    </div>
    <h4 style="font-size:17px; font-weight:800; color:var(--text-heading); margin-bottom:8px;">${theme.title}</h4>
    <p style="font-size:14px; color:var(--text-body); line-height:1.7;">${theme.desc}</p>
    ${flightBanner}
    ${subSpotsHtml}
  `;

  document.getElementById("modal-footer-actions").innerHTML = `
    <a href="${tourUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-tour" style="padding:9px 16px;">
      🎟️ 預定行程
    </a>
    <a href="${charterUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-klook-charter" style="padding:9px 16px;">
      🚗 包車
    </a>
    <a href="${hotelUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-booking-hotel" style="padding:9px 16px;">
      🏨 訂房去
    </a>
  `;

  modal.classList.add("open");
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal-overlay");
  if (modal) modal.classList.remove("open");
}

/**
 * 8. 收藏抽屜管理
 */
function toggleFavDrawer() {
  const overlay = document.getElementById("fav-drawer-overlay");
  if (overlay) {
    overlay.classList.toggle("open");
    renderFavDrawerList();
  }
}

function updateFavBadge() {
  const badge = document.getElementById("fav-count-badge");
  const drawerCount = document.getElementById("drawer-fav-count");
  if (badge) badge.innerText = userFavorites.length;
  if (drawerCount) drawerCount.innerText = userFavorites.length;
  localStorage.setItem("tw_roam_web_favs", JSON.stringify(userFavorites));
}

function renderFavDrawerList() {
  const container = document.getElementById("drawer-fav-list");
  if (!container) return;

  if (userFavorites.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:60px 0; color:#94A3B8;">
        <div style="font-size:48px; margin-bottom:12px;">🤍</div>
        <p>目前尚未收藏任何項目<br>點擊景點卡片即可加入收藏！</p>
      </div>
    `;
    return;
  }

  container.innerHTML = userFavorites.map((title, i) => `
    <div style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:#F8FAFC; border-radius:12px; margin-bottom:10px; border:1px solid #E2E8F0;">
      <div style="font-weight:700; font-size:14px; color:#0F172A;">${i+1}. ${title}</div>
      <button onclick="removeFavorite('${title}')" style="border:none; background:none; cursor:pointer; color:#EF4444; font-size:13px; font-weight:600;">✕ 移除</button>
    </div>
  `).join("");
}

function removeFavorite(title) {
  const idx = userFavorites.indexOf(title);
  if (idx > -1) {
    userFavorites.splice(idx, 1);
    updateFavBadge();
    renderFavDrawerList();
  }
}

/**
 * 9. 事件監聽
 */
function setupEventListeners() {
  document.addEventListener("click", (e) => {
    const wrap = document.querySelector(".lang-dropdown-wrap");
    if (wrap && !wrap.contains(e.target)) {
      const menu = document.getElementById("lang-dropdown-menu");
      if (menu) menu.classList.remove("show");
    }
  });

  // ESC 鍵關閉彈窗
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDetailModal();
      const favDrawer = document.getElementById("fav-drawer-overlay");
      if (favDrawer) favDrawer.classList.remove("open");
    }
  });
}
