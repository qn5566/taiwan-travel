/**
 * 台灣吃喝玩樂網頁版 - 旗艦應用核心邏輯 (app.js)
 * 涵蓋：
 * 1. 圖四風格 Top 1-6 橢圓膠囊卡牌 (Trending Top 6 Pill Carousel)
 * 2. 18 大精選主題網格 (Themes 18 Grid)
 * 3. 全部景點 ＋ 全部縣市瀑布流 (Masonry Waterfall & City Filter)
 * 6. 白色透明玻璃擬態搜尋樞紐 (Glassmorphic Search Hub)
 * 7. 收藏清單抽屜、社群留言討論區與多語系切換
 */

let currentLang = "zh-TW";
let currentCityFilter = "";
let currentSearchQuery = "";
let waterfallLoadedCount = 10;
let waterfallObserver = null;
const WATERFALL_PAGE_SIZE = 10;
let userFavorites = [];

function escapeHomeText(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function themeDestination(id) {
  const lang = encodeURIComponent(currentLang);
  if (id === 'michelin') return `michelin.html?lang=${lang}`;
  if (id === 'cafe') return `cafe.html?lang=${lang}`;
  return `themes.html?theme=${encodeURIComponent(id)}&lang=${lang}`;
}

// 頁面加載完成後初始化
document.addEventListener("DOMContentLoaded", async () => {
  const initialLang = (typeof getWebLang === "function") ? getWebLang() : "zh-TW";
  currentLang = initialLang;
  setupSearchHub();
  updateFavBadge();
  renderWaterfallSection();
  if (typeof switchLanguage === "function") {
    await switchLanguage(initialLang);
  } else {
    await loadActivitiesContent(initialLang);
    await loadThemeGridContent(initialLang);
    await loadSpotsContent(initialLang);
    renderTrendingSection();
    renderThemesSection();
    renderWaterfallSection();
  }
});

/* =========================================================
   1. 第一區塊：圖四風格橢圓膠囊卡牌 (Trending Top 6 Pill Carousel)
   ========================================================= */
function renderTrendingSection() {
  const container = document.getElementById("trending-capsule-row");
  if (!container || typeof TOP_ACTIVITIES_6 === "undefined") return;

  const isEn = (currentLang === "en");
  const escape = escapeHomeText;

  container.innerHTML = TOP_ACTIVITIES_6.map(item => {
    const klookUrl = (typeof AFFILIATE_HUB !== "undefined" && AFFILIATE_HUB.getTourUrl) 
      ? AFFILIATE_HUB.getTourUrl(item.activityId) 
      : `https://www.klook.com/zh-TW/activity/${item.activityId}/?aid=123436`;
    const title = (isEn && item.enName) ? item.enName : item.name;
    const ctaText = isEn ? "Book ➔" : "預定去 ➔";
    const fallbackImg = item.localImg || item.img;
    return `
      <a class="pill-card-item" href="${escape(klookUrl)}" target="_blank" rel="sponsored noopener noreferrer" title="${escape(title)}" style="cursor: pointer; text-decoration:none; color:inherit;">
        <div class="pill-window">
          <img src="${escape(item.img)}" alt="${escape(title)}" loading="lazy" data-fallback-src="${escape(fallbackImg)}">
          <div class="pill-window-overlay"></div>
        </div>
        <div class="pill-info-block">
          <div class="pill-title" style="cursor: pointer; margin-bottom: 8px;">${escape(title)}</div>
          <span class="pill-klook-cta" style="cursor: pointer;">${ctaText}</span>
        </div>
      </a>
    `;
  }).join("");
  container.querySelectorAll('img[data-fallback-src]').forEach(image => image.addEventListener('error', () => {
    if (image.dataset.fallbackSrc && image.src !== image.dataset.fallbackSrc) image.src = image.dataset.fallbackSrc;
  }, {once:true}));
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
      <a class="theme-icon-card" href="${escapeHomeText(themeDestination(theme.id))}" title="${escapeHomeText(theme.name)}" style="text-decoration:none;color:inherit;">
        <div class="theme-icon-circle">${escapeHomeText(theme.icon)}</div>
        <div class="theme-card-title">${escapeHomeText(theme.shortName)}</div>
        <div class="theme-card-count">${escapeHomeText(theme.count)}</div>
      </a>
    `;
  }).join("");
}

function filterByTheme(themeId) {
  window.location.href = themeDestination(themeId);
}

/* =========================================================
   3. 第三區塊：全部景點 ＋ 可愛兩段式分區與縣市瀑布流 (Cute Two-tier Regional Navigation)
   ========================================================= */
let currentRegion = "north";

const TAIWAN_REGIONS_CONFIG = [
  { id: "north", name: "北部地區", nameEn: "North Taiwan", icon: "🏙️" },
  { id: "central", name: "中部地區", nameEn: "Central Taiwan", icon: "🌳" },
  { id: "south", name: "南部地區", nameEn: "South Taiwan", icon: "🏛️" },
  { id: "east", name: "東部地區", nameEn: "East Taiwan", icon: "🌊" },
  { id: "islands", name: "離島地區", nameEn: "Offshore Islands", icon: "🏝️" }
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
  currentSearchQuery = "";
  // 選擇分區時，預設選取該分區的第一個真實縣市
  currentCityFilter = SpotExplorer.getCities(regionId).find(city => city.key !== "全部")?.key || "";
  waterfallLoadedCount = WATERFALL_PAGE_SIZE;
  renderCityRegionTabs();
  renderCitySubChips();
  renderWaterfallCards();
}

function renderCitySubChips() {
  const chipsContainer = document.getElementById("city-subchips-container");
  if (!chipsContainer) return;

  const isEn = (currentLang === "en");

  // 過濾掉任何帶有「全部」名稱或鍵值的子分類，僅保留具體縣市
  const validCities = SpotExplorer.getCities(currentRegion).filter(city => {
    return city.key !== "全部" && !city.key.startsWith("全部") && !city.name.includes("全部");
  });

  chipsContainer.innerHTML = validCities.map(city => {
    const isActive = currentCityFilter === city.key ? "active" : "";
    const label = CityRegions.localizedName(city.key, currentLang);
    return `
      <button type="button" class="city-chip-btn ${isActive}" onclick="selectSubCity('${city.key}')">
        ${SpotExplorer.escapeHtml(label)}
      </button>
    `;
  }).join("");
}

function selectSubCity(cityKey) {
  currentCityFilter = cityKey;
  currentSearchQuery = "";
  waterfallLoadedCount = WATERFALL_PAGE_SIZE;
  renderCitySubChips();
  renderWaterfallCards();
}

function getFilteredSpots() {
  if (typeof ALL_SPOTS_DATA === "undefined") return [];

  // 若有全域搜尋詞
  if (currentSearchQuery) {
    const needle = currentSearchQuery.toLocaleLowerCase().replace(/臺/g, "台");
    return ALL_SPOTS_DATA.filter(spot => {
      const cityEn = SpotExplorer.cities.find(c => c.key === spot.city)?.en;
      const text = [spot.name, spot.nameZh, spot.city, spot.displayCity, cityEn, CityRegions.localizedName(spot.city, currentLang), spot.desc].join(" ").toLocaleLowerCase().replace(/臺/g, "台");
      return text.includes(needle);
    });
  }

  // 根據當前分區與選定縣市過濾
  return ALL_SPOTS_DATA.filter(item => {
    if (!currentCityFilter || currentCityFilter.startsWith("全部")) {
      return SpotExplorer.matchesRegion(item, currentRegion);
    }
    return SpotExplorer.matchesCity(item, currentCityFilter);
  });
}

function renderSingleSpotCard(item, idx, isEn) {
  const isFav = FavoritesManager.isFavorited(item.id) || FavoritesManager.isFavorited(item.name);
  const escape = SpotExplorer.escapeHtml;

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

  const stayLabel = escape(item.duration || (isEn ? "See venue information" : "依景點資訊為準"));

  return `
    <div class="spot-img3-card">
      <div class="spot-img3-media-wrap">
        <img src="${escape(item.img)}" alt="${escape(item.name)}" loading="lazy">
        <span class="spot-img3-category-pill ${catClass}">${catPillText}</span>
        <button type="button" class="waterfall-fav-btn ${isFav ? "active" : ""}" ${FavoritesManager.buttonAttributes({ ...item, id: `spot_${item.id || item.name}`, category: 'spot', rating: item.rate, klookUrl: SpotExplorer.links(item).tour, tripUrl: SpotExplorer.links(item).hotel, mapUrl: SpotExplorer.links(item).map })} title="${isEn ? 'Save' : '收藏景點'}" style="position: absolute; bottom: 12px; right: 12px; z-index: 3;">
          <img src="assets/icon_heart_sparkle.png" alt="favorite" class="fav-sparkle-icon ${isFav ? 'active' : ''}">
        </button>
      </div>
      <div class="spot-img3-body">
        <div>
          <div class="spot-img3-date-line">
            <span>📍 ${escape(CityRegions.localizedName(item.city, currentLang))}</span>
            <span>·</span>
            <span>${stayLabel}</span>
            <span>·</span>
            <span style="color: #F59E0B; font-weight: 800;">★ ${escape(item.rate || "—")}</span>
          </div>
          <h3 class="spot-img3-title">${escape(item.name)}</h3>
          <p class="spot-img3-desc">${escape(item.desc)}</p>
        </div>
        <div class="spot-img3-footer">
          ${SpotExplorer.actions(item, true)}
        </div>
      </div>
    </div>
  `;
}

function renderWaterfallCards() {
  const container = document.getElementById("waterfall-cards-container");
  if (!container || typeof ALL_SPOTS_DATA === "undefined") return;

  container.className = "spots-img3-grid";
  const isEn = (currentLang === "en");

  const filteredSpots = getFilteredSpots();

  if (filteredSpots.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 60px 20px; text-align: center; color: var(--text-muted);">
        <div style="font-size: 40px; margin-bottom: 12px;">🔍</div>
        <div style="font-size: 18px; font-weight: 700;">${isEn ? "No featured spots found" : "目前尚無符合的特選景點"}</div>
        <p style="margin-top: 6px; font-size: 14px;">${isEn ? "Feel free to select other cities or regions to explore!" : "歡迎點選其他縣市或地區探索！"}</p>
      </div>
    `;
    updateWaterfallSentinel(0, 0);
    return;
  }

  // 初始先讀取 10 筆
  const visibleSpots = filteredSpots.slice(0, waterfallLoadedCount);
  container.innerHTML = visibleSpots.map((item, idx) => renderSingleSpotCard(item, idx, isEn)).join("");

  updateWaterfallSentinel(visibleSpots.length, filteredSpots.length);
  initWaterfallInfiniteScroll();
}

function appendNextWaterfallCards() {
  const container = document.getElementById("waterfall-cards-container");
  if (!container) return;

  const filteredSpots = getFilteredSpots();
  if (waterfallLoadedCount >= filteredSpots.length) return;

  const nextBatch = filteredSpots.slice(waterfallLoadedCount, waterfallLoadedCount + WATERFALL_PAGE_SIZE);
  if (nextBatch.length === 0) return;

  const isEn = (currentLang === "en");
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = nextBatch.map((item, idx) => renderSingleSpotCard(item, waterfallLoadedCount + idx, isEn)).join("");

  while (tempDiv.firstChild) {
    container.appendChild(tempDiv.firstChild);
  }

  waterfallLoadedCount += nextBatch.length;
  updateWaterfallSentinel(waterfallLoadedCount, filteredSpots.length);

  // 同步收藏按鈕狀態
  if (typeof FavoritesManager !== "undefined" && typeof FavoritesManager.syncActiveButtons === "function") {
    FavoritesManager.syncActiveButtons();
  }
}

function updateWaterfallSentinel(loaded, total) {
  const indicator = document.getElementById("waterfall-loading-indicator");
  const sentinel = document.getElementById("waterfall-scroll-sentinel");
  if (!indicator || !sentinel) return;

  if (loaded >= total || total === 0) {
    indicator.style.display = "none";
    sentinel.style.display = "none";
  } else {
    sentinel.style.display = "block";
    indicator.style.display = "flex";
    const textEl = document.getElementById("waterfall-loading-text");
    if (textEl) {
      textEl.textContent = (currentLang === "en") ? `Loading more spots (${loaded}/${total})...` : `載入更多精選景點中 (${loaded}/${total})...`;
    }
  }
}

let isWaterfallLoading = false;
function initWaterfallInfiniteScroll() {
  const sentinel = document.getElementById("waterfall-scroll-sentinel");
  if (!sentinel) return;

  if (waterfallObserver) {
    waterfallObserver.disconnect();
  }

  if ("IntersectionObserver" in window) {
    waterfallObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isWaterfallLoading) {
          isWaterfallLoading = true;
          setTimeout(() => {
            appendNextWaterfallCards();
            isWaterfallLoading = false;
          }, 150);
        }
      });
    }, { rootMargin: "250px 0px" });
    waterfallObserver.observe(sentinel);
  } else {
    // 降級使用 window scroll 事件
    window.addEventListener("scroll", () => {
      if (isWaterfallLoading) return;
      const rect = sentinel.getBoundingClientRect();
      if (rect.top <= window.innerHeight + 250) {
        isWaterfallLoading = true;
        setTimeout(() => {
          appendNextWaterfallCards();
          isWaterfallLoading = false;
        }, 150);
      }
    });
  }
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
  currentSearchQuery = (query || "").trim();
  waterfallLoadedCount = WATERFALL_PAGE_SIZE;

  const wf = document.getElementById("city-spots");
  if (wf) wf.scrollIntoView({ behavior: "smooth" });

  renderWaterfallCards();
}

/* =========================================================
   7. 收藏清單與事件綁定 (Favorites & Event Listeners)
   ========================================================= */
function toggleFavorite(spotName, btnEl) {
  let spotObj = null;
  if (typeof ALL_SPOTS_DATA !== "undefined") {
    spotObj = ALL_SPOTS_DATA.find(s => s.name === spotName);
  }
  if (!spotObj) {
    spotObj = {
      id: "spot_" + spotName,
      name: spotName,
      category: "spot",
      categoryLabel: "景點",
      city: "全台",
      img: "assets/icon_lantern.png",
      rating: "★ 4.9",
      desc: "編輯部推薦熱門景點",
      klookUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getSearchUrl(spotName) : "https://www.klook.com/?aid=123436",
      tripUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getTripSearchUrl(spotName) : "https://www.trip.com/?Allianceid=9507030&SID=325761227&trip_sub3=D20272275",
      mapUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getMapUrl(spotName) : `https://maps.google.com/?q=${encodeURIComponent(spotName)}`
    };
  } else {
    const urls = SpotExplorer.links(spotObj);
    spotObj = {
      id: "spot_" + spotObj.name,
      name: spotObj.name,
      category: "spot",
      categoryLabel: "景點",
      city: spotObj.city,
      img: spotObj.img,
      rating: spotObj.rate ? `★ ${spotObj.rate}` : "★ 4.9",
      desc: spotObj.desc || "",
      klookUrl: urls.tour,
      tripUrl: urls.hotel,
      mapUrl: urls.map
    };
  }

  if (typeof FavoritesManager !== "undefined") {
    FavoritesManager.toggle(spotObj, btnEl);
    userFavorites = FavoritesManager.items.map(i => i.name);
  } else {
    const idx = userFavorites.indexOf(spotName);
    if (idx === -1) userFavorites.push(spotName);
    else userFavorites.splice(idx, 1);
    localStorage.setItem("tw_roam_web_favs", JSON.stringify(userFavorites));
  }
}

function triggerHeartSparkleEffect(btn, isFavorited) {
  // 播放按鈕 Q 彈動態
  btn.classList.remove("heart-bouncing");
  void btn.offsetWidth; // force reflow
  btn.classList.add("heart-bouncing");
  setTimeout(() => btn.classList.remove("heart-bouncing"), 600);

  if (!isFavorited) return;

  // 產生發光漣漪光圈
  const ring = document.createElement("div");
  ring.className = "heart-ripple-ring";
  btn.appendChild(ring);
  setTimeout(() => ring.remove(), 700);

  // 噴灑 6 個可愛發光小粒子 (✨ 💖 ⭐)
  const sparkles = ["✨", "💖", "⭐", "✦", "💫", "✨"];
  for (let i = 0; i < sparkles.length; i++) {
    const p = document.createElement("div");
    p.className = "sparkle-particle";
    p.textContent = sparkles[i];
    
    const angle = (i * 60 + Math.random() * 20) * (Math.PI / 180);
    const dist = 32 + Math.random() * 20;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    
    p.style.setProperty("--tx", `${tx}px`);
    p.style.setProperty("--ty", `${ty}px`);
    
    btn.appendChild(p);
    setTimeout(() => p.remove(), 680);
  }
}

function showCuteToast(msg, icon) {
  let toast = document.getElementById("cute-toast-pill");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cute-toast-pill";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size: 18px;">${icon || '💖'}</span> <span>${msg}</span>`;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function updateFavBadge() { FavoritesManager.updateBadges(); }
function openFavDrawer(category = 'all') { FavoritesManager.openDrawer(category); }
function closeFavDrawer() { FavoritesManager.closeDrawer(); }
function renderFavDrawerList() { FavoritesManager.renderDrawerList(); }
