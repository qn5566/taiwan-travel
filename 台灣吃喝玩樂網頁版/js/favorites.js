/**
 * 台灣吃喝玩樂 Taiwan Roam - 全站通用離線收藏夾與專屬行程 PDF 匯出系統 (Favorites & Offline Travel Guide)
 * 支援全站四大卡牌類型：景點 (Spot)、行程 (Itinerary)、餐廳 (Restaurant)、咖啡 (Cafe)
 * 完美保留 Klook (aid=106452) 與 Trip.com 聯盟分潤導購預訂連結
 */

(function (window, document) {
  "use strict";

  const STORAGE_KEY = "tw_roam_favorites_v2";
  const LEGACY_STORAGE_KEY = "tw_roam_web_favs";

  const FavoritesManager = {
    items: [],
    currentTab: "all",
    searchKeyword: "",

    init: function () {
      this.loadStorage();
      this.injectStyles();
      this.injectDrawerDOM();
      this.injectPdfModalDOM();
      this.injectFloatingButton();
      this.updateBadges();
      this.syncActiveButtons();

      // 監聽全局自訂事件與熱鍵
      window.addEventListener("storage", (e) => {
        if (e.key === STORAGE_KEY) {
          this.loadStorage();
          this.updateBadges();
          this.syncActiveButtons();
          if (this.isDrawerOpen()) this.renderDrawerList();
        }
      });

      // 支援 Esc 鍵關閉抽屜與預覽
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          this.closeDrawer();
          this.closePdfModal();
        }
      });
    },

    loadStorage: function () {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          this.items = JSON.parse(raw);
        } else {
          // 嘗試相容遷移舊版單純字串陣列
          const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
          if (legacy) {
            const arr = JSON.parse(legacy);
            if (Array.isArray(arr)) {
              this.items = arr.map(name => ({
                id: "spot_" + name,
                category: "spot",
                categoryLabel: "景點",
                name: name,
                city: "全台",
                img: "assets/icon_lantern.png",
                rating: "4.9★",
                desc: "熱門精選景點",
                klookUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getSearchUrl(name) : "https://www.klook.com/?aid=106452",
                tripUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getTripSearchUrl(name) : "https://www.trip.com/?Allianceid=9507030&SID=325761227&trip_sub3=D20272275",
                mapUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getMapUrl(name) : `https://maps.google.com/?q=${encodeURIComponent(name)}`,
                savedAt: Date.now()
              }));
              this.saveStorage();
            }
          } else {
            this.items = [];
          }
        }
      } catch (err) {
        console.error("Failed to load favorites from localStorage", err);
        this.items = [];
      }
    },

    saveStorage: function () {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
        // 同步寫入舊版 key 維護向後相容
        const legacyNames = this.items.map(i => i.name);
        localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(legacyNames));
        if (typeof window.userFavorites !== "undefined") {
          window.userFavorites = legacyNames;
        }
      } catch (err) {
        console.error("Failed to save favorites to localStorage", err);
      }
    },

    isFavorited: function (idOrName) {
      return this.items.some(item => item.id === idOrName || item.name === idOrName);
    },

    /**
     * 核心切換收藏函式
     * @param {Object|string} itemData 卡片資料物件或名稱
     * @param {HTMLElement} btnEl 觸發按鈕元素 (可選)
     */
    toggle: function (itemData, btnEl) {
      let normalized = {};

      if (typeof itemData === "string") {
        normalized = {
          id: "item_" + itemData,
          category: "spot",
          categoryLabel: "景點",
          name: itemData,
          city: "台灣",
          img: "assets/icon_lantern.png",
          rating: "4.9★",
          desc: "編輯部嚴選打卡推薦",
          klookUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getSearchUrl(itemData) : "https://www.klook.com/?aid=106452",
          tripUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getTripSearchUrl(itemData) : "https://www.trip.com/?Allianceid=9507030&SID=325761227&trip_sub3=D20272275",
          mapUrl: typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getMapUrl(itemData) : `https://maps.google.com/?q=${encodeURIComponent(itemData)}`
        };
      } else {
        const cat = itemData.category || "spot";
        let catLabel = "景點";
        if (cat === "itinerary") catLabel = "行程";
        else if (cat === "restaurant") catLabel = "餐廳";
        else if (cat === "cafe") catLabel = "咖啡";

        const cleanName = itemData.name || itemData.title || "特色景點";
        const cleanKlook = itemData.klookUrl || (typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getSearchUrl(cleanName) : "https://www.klook.com/?aid=106452");
        const cleanTrip = itemData.tripUrl || (typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getTripSearchUrl(cleanName) : "https://www.trip.com/?Allianceid=9507030&SID=325761227&trip_sub3=D20272275");
        const cleanMap = itemData.mapUrl || (typeof AFFILIATE_HUB !== "undefined" ? AFFILIATE_HUB.getMapUrl(cleanName) : `https://maps.google.com/?q=${encodeURIComponent(cleanName)}`);

        normalized = {
          id: itemData.id || `${cat}_${cleanName}`,
          category: cat,
          categoryLabel: itemData.categoryLabel || catLabel,
          name: cleanName,
          enName: itemData.enName || "",
          city: itemData.city || itemData.cityRegion || "全台",
          district: itemData.district || "",
          img: itemData.img || itemData.image || "assets/icon_lantern.png",
          rating: itemData.rating || itemData.rate || "★ 4.9",
          desc: itemData.desc || itemData.features || itemData.excerpt || itemData.subtitle || "",
          tags: itemData.tags || [],
          klookUrl: cleanKlook,
          tripUrl: cleanTrip,
          uberEatsUrl: itemData.uberEatsUrl || "https://onelink.one/s/YoWYV",
          mapUrl: cleanMap,
          savedAt: Date.now()
        };
      }

      const existingIndex = this.items.findIndex(i => i.id === normalized.id || i.name === normalized.name);
      const isNowSaved = (existingIndex === -1);

      if (isNowSaved) {
        this.items.unshift(normalized);
      } else {
        this.items.splice(existingIndex, 1);
      }

      this.saveStorage();
      this.updateBadges();

      // 動態與視覺反饋
      if (btnEl) {
        btnEl.classList.toggle("active", isNowSaved);
        const icon = btnEl.querySelector(".fav-sparkle-icon") || btnEl.querySelector("img") || btnEl.querySelector("span");
        if (icon) icon.classList.toggle("active", isNowSaved);
        this.triggerSparkleEffect(btnEl, isNowSaved);
      }

      // 同步全頁面同名按鈕狀態
      this.syncActiveButtons();

      // 彈出精緻提示 Toast
      if (isNowSaved) {
        this.showToast(`已收藏【${normalized.categoryLabel}】${normalized.name}！已存入離線行程夾`, "💖");
      } else {
        this.showToast(`已從離線收藏夾移除「${normalized.name}」`, "🤍");
      }

      // 若抽屜開啟中則重繪
      if (this.isDrawerOpen()) {
        this.renderDrawerList();
      }

      return isNowSaved;
    },

    triggerSparkleEffect: function (btn, isSaved) {
      btn.classList.remove("heart-bouncing");
      void btn.offsetWidth;
      btn.classList.add("heart-bouncing");
      setTimeout(() => btn.classList.remove("heart-bouncing"), 600);

      if (!isSaved) return;

      const ring = document.createElement("div");
      ring.className = "fav-ripple-ring";
      btn.appendChild(ring);
      setTimeout(() => ring.remove(), 700);

      const sparkles = ["✨", "💖", "⭐", "✦", "🌸"];
      for (let i = 0; i < 5; i++) {
        const p = document.createElement("div");
        p.className = "fav-sparkle-dot";
        p.textContent = sparkles[i % sparkles.length];
        const angle = (i * 72 + Math.random() * 20) * (Math.PI / 180);
        const dist = 28 + Math.random() * 16;
        p.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
        p.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
        btn.appendChild(p);
        setTimeout(() => p.remove(), 650);
      }
    },

    showToast: function (msg, icon = "💖") {
      let toast = document.getElementById("fav-global-toast");
      if (!toast) {
        toast = document.createElement("div");
        toast.id = "fav-global-toast";
        document.body.appendChild(toast);
      }
      toast.innerHTML = `<span style="font-size: 20px;">${icon}</span> <span>${msg}</span>`;
      toast.classList.remove("show");
      void toast.offsetWidth;
      toast.classList.add("show");
      clearTimeout(toast._timer);
      toast._timer = setTimeout(() => toast.classList.remove("show"), 2400);
    },

    updateBadges: function () {
      const count = this.items.length;
      document.querySelectorAll(".fav-count-badge, #fav-count-badge, .fav-badge-num").forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? "inline-flex" : "none";
      });
      const floatCount = document.getElementById("fav-float-count");
      if (floatCount) {
        floatCount.textContent = count;
      }
    },

    syncActiveButtons: function () {
      document.querySelectorAll("[data-fav-name], [data-fav-id], .waterfall-fav-btn").forEach(btn => {
        const id = btn.getAttribute("data-fav-id");
        const name = btn.getAttribute("data-fav-name");
        const active = (id && this.isFavorited(id)) || (name && this.isFavorited(name));
        btn.classList.toggle("active", !!active);
        const icon = btn.querySelector(".fav-sparkle-icon");
        if (icon) icon.classList.toggle("active", !!active);
      });
    },

    /* =========================================================
       抽屜相關控制 (Drawer Control)
       ========================================================= */
    isDrawerOpen: function () {
      const drawer = document.getElementById("tw-fav-drawer");
      return drawer && drawer.classList.contains("open");
    },

    openDrawer: function (categoryTab = "all") {
      this.currentTab = categoryTab;
      const drawer = document.getElementById("tw-fav-drawer");
      const overlay = document.getElementById("tw-fav-overlay");
      if (drawer && overlay) {
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
        this.updateTabButtons();
        this.renderDrawerList();
      }
    },

    closeDrawer: function () {
      const drawer = document.getElementById("tw-fav-drawer");
      const overlay = document.getElementById("tw-fav-overlay");
      if (drawer && overlay) {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      }
    },

    setTab: function (tab) {
      this.currentTab = tab;
      this.updateTabButtons();
      this.renderDrawerList();
    },

    updateTabButtons: function () {
      document.querySelectorAll("#fav-drawer-tabs .fav-tab-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tab === this.currentTab);
      });
    },

    clearAll: function () {
      if (this.items.length === 0) return;
      if (confirm("確定要清空離線收藏夾中的所有卡牌嗎？")) {
        this.items = [];
        this.saveStorage();
        this.updateBadges();
        this.syncActiveButtons();
        this.renderDrawerList();
        this.showToast("已清空所有離線收藏！", "🗑️");
      }
    },

    renderDrawerList: function () {
      const listEl = document.getElementById("fav-drawer-list");
      const countEl = document.getElementById("fav-drawer-total-count");
      if (!listEl) return;

      if (countEl) {
        countEl.textContent = `(${this.items.length})`;
      }

      // 依分類標籤篩選
      let filtered = this.items;
      if (this.currentTab !== "all") {
        filtered = filtered.filter(item => item.category === this.currentTab);
      }

      // 依關鍵字搜尋
      if (this.searchKeyword) {
        const kw = this.searchKeyword.toLowerCase();
        filtered = filtered.filter(item => 
          (item.name && item.name.toLowerCase().includes(kw)) ||
          (item.city && item.city.toLowerCase().includes(kw)) ||
          (item.desc && item.desc.toLowerCase().includes(kw)) ||
          (item.tags && item.tags.some(t => t.toLowerCase().includes(kw)))
        );
      }

      if (filtered.length === 0) {
        listEl.innerHTML = `
          <div style="text-align: center; padding: 60px 20px; color: #94A3B8;">
            <div style="font-size: 48px; margin-bottom: 12px;">📭</div>
            <div style="font-size: 16px; font-weight: 800; color: #475569;">
              ${this.items.length === 0 ? "您的離線收藏夾目前是空的" : "沒有符合篩選條件的卡牌"}
            </div>
            <p style="font-size: 13px; color: #94A3B8; margin-top: 6px;">
              ${this.items.length === 0 ? "瀏覽景點、行程、餐廳與咖啡卡片時，點擊「❤️ 收藏」隨時存入！" : "請嘗試切換「全部」或調整搜尋關鍵字"}
            </p>
          </div>
        `;
        return;
      }

      listEl.innerHTML = filtered.map(item => {
        let badgeBg = "#E0F2FE";
        let badgeColor = "#0369A1";
        let iconEmoji = "🏔️";
        if (item.category === "itinerary") {
          badgeBg = "#FEF3C7"; badgeColor = "#B45309"; iconEmoji = "🗺️";
        } else if (item.category === "restaurant") {
          badgeBg = "#FEE2E2"; badgeColor = "#B91C1C"; iconEmoji = "🍽️";
        } else if (item.category === "cafe") {
          badgeBg = "#EDE9FE"; badgeColor = "#6D28D9"; iconEmoji = "☕";
        }

        return `
          <div class="fav-item-card">
            <div class="fav-item-img-wrap">
              <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.src='assets/icon_lantern.png'">
              <span class="fav-item-badge" style="background:${badgeBg}; color:${badgeColor};">
                ${iconEmoji} ${item.categoryLabel}
              </span>
            </div>
            <div class="fav-item-content">
              <div class="fav-item-topline">
                <span style="font-size: 11px; font-weight: 700; color: #64748B;">📍 ${item.city} ${item.district || ''}</span>
                <span style="font-size: 11.5px; font-weight: 800; color: #D97706;">${item.rating}</span>
              </div>
              <h4 class="fav-item-title">${item.name}</h4>
              <p class="fav-item-desc">${item.desc}</p>
              
              <!-- 預約與導航按鈕列 (保留 Klook & Trip.com 聯盟連結) -->
              <div class="fav-item-actions">
                <a href="${item.klookUrl}" target="_blank" rel="noopener noreferrer" class="fav-action-btn klook">
                  🎫 Klook 預訂
                </a>
                <a href="${item.tripUrl}" target="_blank" rel="noopener noreferrer" class="fav-action-btn trip">
                  🏨 Trip 查訂房
                </a>
                <a href="${item.mapUrl}" target="_blank" rel="noopener noreferrer" class="fav-action-btn map">
                  📍 地圖
                </a>
                <button onclick="FavoritesManager.toggle('${item.name.replace(/'/g, "\\'")}');" class="fav-item-del-btn" title="移除收藏">
                  🗑️
                </button>
              </div>
            </div>
          </div>
        `;
      }).join("");
    },

    /* =========================================================
       PDF 匯出引擎 (保留 Klook & Trip 預訂連結)
       ========================================================= */
    exportPDF: function () {
      if (this.items.length === 0) {
        alert("離線收藏夾中目前沒有任何卡牌，請先收藏景點或行程後再匯出 PDF！");
        return;
      }
      this.closeDrawer();
      this.openPdfModal();
    },

    openPdfModal: function () {
      const modal = document.getElementById("fav-pdf-modal");
      if (!modal) return;

      const container = document.getElementById("fav-pdf-preview-content");
      if (container) {
        container.innerHTML = this.buildPdfHtml();
      }

      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    },

    closePdfModal: function () {
      const modal = document.getElementById("fav-pdf-modal");
      if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
      }
    },

    printPdf: function () {
      window.print();
    },

    buildPdfHtml: function () {
      const now = new Date();
      const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`;

      // 分組四大主題
      const spots = this.items.filter(i => i.category === "spot");
      const itineraries = this.items.filter(i => i.category === "itinerary");
      const restaurants = this.items.filter(i => i.category === "restaurant");
      const cafes = this.items.filter(i => i.category === "cafe");

      const renderSection = (title, emoji, list, color) => {
        if (!list || list.length === 0) return "";
        return `
          <div class="pdf-section">
            <div class="pdf-section-title" style="border-left-color: ${color}; color: ${color};">
              <span>${emoji}</span> <span>${title} (${list.length})</span>
            </div>
            <div class="pdf-cards-grid">
              ${list.map(item => `
                <div class="pdf-card">
                  <div class="pdf-card-img-wrap">
                    <img src="${item.img}" alt="${item.name}" onerror="this.src='assets/icon_lantern.png'">
                    <span class="pdf-card-badge">${item.categoryLabel}</span>
                  </div>
                  <div class="pdf-card-body">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                      <span style="font-size:11px; font-weight:700; color:#64748B;">📍 ${item.city} ${item.district || ''}</span>
                      <span style="font-size:11.5px; font-weight:800; color:#D97706;">${item.rating}</span>
                    </div>
                    <div class="pdf-card-title">${item.name}</div>
                    <div class="pdf-card-desc">${item.desc}</div>
                    
                    <!-- 關鍵：PDF 內完全保留並高亮超連結點擊導購 -->
                    <div class="pdf-card-links">
                      <a href="${item.klookUrl}" target="_blank" rel="noopener noreferrer" class="pdf-link-btn klook">
                        🚐 點擊直接預約 Klook 方案 ➔
                      </a>
                      <a href="${item.tripUrl}" target="_blank" rel="noopener noreferrer" class="pdf-link-btn trip">
                        🏨 Trip.com 飯店比價預訂 ➔
                      </a>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `;
      };

      return `
        <div class="pdf-document">
          <!-- 刊頭與封面區塊 -->
          <div class="pdf-header">
            <div class="pdf-brand-tag">TAIWAN ROAM ‧ 台灣吃喝玩樂旅人誌</div>
            <h1 class="pdf-main-title">我的台灣專屬客製化離線行程手冊</h1>
            <p class="pdf-sub-title">Personalized Taiwan Offline Travel Guidebook ‧ 共收藏 ${this.items.length} 處必訪精選</p>
            <div class="pdf-meta-bar">
              <span>📅 匯出日期：${dateStr}</span>
              <span>·</span>
              <span>📱 支援離線瀏覽 ＆ 點擊預訂</span>
              <span>·</span>
              <span>✨ 官方直營聯盟特約</span>
            </div>
            <div class="pdf-notice-banner">
              💡 <strong>旅人使用指南</strong>：本手冊在手機、平板或印出的 PDF 中均<strong>保留可點擊的 Klook 與 Trip.com 專屬官方預約連結</strong>。在離線旅行途中隨時點擊即可直達專屬接駁、門票與星級飯店比價頁面！
            </div>
          </div>

          <!-- 各大主題清單 -->
          ${renderSection("精選客製行程", "🗺️", itineraries, "#B45309")}
          ${renderSection("必訪自然絕景與名勝", "🏔️", spots, "#0369A1")}
          ${renderSection("老饕必嚐餐廳與名饌", "🍽️", restaurants, "#B91C1C")}
          ${renderSection("職人風格咖啡館", "☕", cafes, "#6D28D9")}

          <!-- 手冊頁尾版權 -->
          <div class="pdf-footer">
            <div style="font-weight: 800; color: #0F172A; font-size: 13px; margin-bottom: 4px;">
              🌸 TAIWAN ROAM 台灣吃喝玩樂 ‧ 自由行旅人的隨身行囊
            </div>
            <div style="font-size: 11px; color: #64748B;">
              官方網站：https://taiwanroam.tw ‧ 官方商務合作：himydream.studio0220@gmail.com
            </div>
          </div>
        </div>
      `;
    },

    /* =========================================================
       DOM 結構與 CSS 注入
       ========================================================= */
    injectFloatingButton: function () {
      if (document.getElementById("fav-floating-btn")) return;
      const btn = document.createElement("button");
      btn.id = "fav-floating-btn";
      btn.className = "fav-floating-btn";
      btn.title = "開啟離線收藏夾與匯出行程 PDF";
      btn.onclick = () => this.openDrawer();
      btn.innerHTML = `
        <span class="fav-floating-icon">❤️</span>
        <span class="fav-floating-text">離線收藏夾</span>
        <span id="fav-float-count" class="fav-floating-badge">${this.items.length}</span>
      `;
      document.body.appendChild(btn);
    },

    injectDrawerDOM: function () {
      if (document.getElementById("tw-fav-drawer")) return;

      const overlay = document.createElement("div");
      overlay.id = "tw-fav-overlay";
      overlay.className = "tw-fav-overlay";
      overlay.onclick = () => this.closeDrawer();
      document.body.appendChild(overlay);

      const drawer = document.createElement("div");
      drawer.id = "tw-fav-drawer";
      drawer.className = "tw-fav-drawer";
      drawer.innerHTML = `
        <div class="fav-drawer-header">
          <div class="fav-drawer-title-wrap">
            <span style="font-size: 22px;">❤️</span>
            <h3 class="fav-drawer-title">我的離線收藏夾 <span id="fav-drawer-total-count" style="font-size:14px; color:#0284C7;">(${this.items.length})</span></h3>
          </div>
          <button onclick="FavoritesManager.closeDrawer()" class="fav-drawer-close-btn" title="關閉">✕</button>
        </div>

        <!-- 搜尋列與快速切換膠囊 -->
        <div class="fav-drawer-toolbar">
          <div class="fav-drawer-search-wrap">
            <input type="text" id="fav-drawer-search-input" placeholder="搜尋已收藏的景點、餐廳、行程..." oninput="FavoritesManager.searchKeyword = this.value; FavoritesManager.renderDrawerList();">
          </div>
          <div id="fav-drawer-tabs" class="fav-drawer-tabs">
            <button class="fav-tab-btn active" data-tab="all" onclick="FavoritesManager.setTab('all')">🌟 全部</button>
            <button class="fav-tab-btn" data-tab="spot" onclick="FavoritesManager.setTab('spot')">🏔️ 景點</button>
            <button class="fav-tab-btn" data-tab="itinerary" onclick="FavoritesManager.setTab('itinerary')">🗺️ 行程</button>
            <button class="fav-tab-btn" data-tab="restaurant" onclick="FavoritesManager.setTab('restaurant')">🍽️ 餐廳</button>
            <button class="fav-tab-btn" data-tab="cafe" onclick="FavoritesManager.setTab('cafe')">☕ 咖啡</button>
          </div>
        </div>

        <!-- 卡牌清單渲染區 -->
        <div id="fav-drawer-list" class="fav-drawer-list"></div>

        <!-- 底部重點：PDF 匯出列與保留分潤預約 -->
        <div class="fav-drawer-footer">
          <button onclick="FavoritesManager.exportPDF()" class="fav-export-pdf-btn">
            <span>📥 匯出個人專屬行程 PDF (保留 Klook/Trip 連結)</span>
          </button>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px;">
            <button onclick="FavoritesManager.clearAll()" class="fav-clear-btn">清空所有收藏</button>
            <span style="font-size:11px; color:#94A3B8;">📱 隨身離線儲存 ‧ 免登入</span>
          </div>
        </div>
      `;
      document.body.appendChild(drawer);
    },

    injectPdfModalDOM: function () {
      if (document.getElementById("fav-pdf-modal")) return;

      const modal = document.createElement("div");
      modal.id = "fav-pdf-modal";
      modal.className = "fav-pdf-modal";
      modal.innerHTML = `
        <div class="fav-pdf-modal-backdrop" onclick="FavoritesManager.closePdfModal()"></div>
        <div class="fav-pdf-modal-dialog">
          <div class="fav-pdf-modal-header">
            <div>
              <h3 style="font-size:18px; font-weight:900; color:#0F172A; margin:0;">📄 行程 PDF 預覽與下載</h3>
              <p style="font-size:12px; color:#64748B; margin:4px 0 0 0;">手冊內保留所有 Klook 專車/體驗與 Trip.com 飯店直達預約連結</p>
            </div>
            <div style="display:flex; gap:10px;">
              <button onclick="FavoritesManager.printPdf()" class="fav-print-action-btn">
                🖨️ 列印 / 儲存為 PDF
              </button>
              <button onclick="FavoritesManager.closePdfModal()" class="fav-pdf-close-btn">
                ✕ 關閉
              </button>
            </div>
          </div>
          <div id="fav-pdf-preview-content" class="fav-pdf-modal-body"></div>
        </div>
      `;
      document.body.appendChild(modal);
    },

    injectStyles: function () {
      if (document.getElementById("tw-fav-styles")) return;
      const style = document.createElement("style");
      style.id = "tw-fav-styles";
      style.textContent = `
        
        /* 首頁同款水晶閃光愛心按鈕 (Homepage Match Sparkling Heart Button) */
        .waterfall-fav-btn {
          position: absolute;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1.5px solid rgba(226, 232, 240, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.12);
          padding: 0;
          z-index: 4;
        }
        .waterfall-fav-btn:hover {
          transform: scale(1.12);
          background: #FFFFFF;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.18);
        }
        .fav-sparkle-icon {
          width: 17px !important;
          height: 17px !important;
          max-width: 17px !important;
          max-height: 17px !important;
          object-fit: contain;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: grayscale(100%) opacity(0.32);
          pointer-events: none;
          display: block;
        }
        .waterfall-fav-btn:hover .fav-sparkle-icon {
          filter: grayscale(30%) opacity(0.7);
        }
        .waterfall-fav-btn.active {
          background: #FFF1F2 !important;
          border-color: #FDA4AF !important;
          box-shadow: 0 4px 14px rgba(244, 63, 94, 0.25) !important;
        }
        .fav-sparkle-icon.active,
        .waterfall-fav-btn.active .fav-sparkle-icon {
          filter: none !important;
          opacity: 1 !important;
          transform: scale(1.08) !important;
        }

        /* 懸浮按鈕 */
        .fav-floating-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 998;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: linear-gradient(135deg, #E11D48 0%, #BE123C 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 8px 24px rgba(225, 29, 72, 0.35);
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .fav-floating-btn:hover {
          transform: translateY(-3px) scale(1.04);
          box-shadow: 0 12px 30px rgba(225, 29, 72, 0.45);
        }
        .fav-floating-badge {
          background: #FFFFFF;
          color: #E11D48;
          font-size: 12px;
          font-weight: 900;
          padding: 2px 7px;
          border-radius: 999px;
        }

        /* 遮罩與抽屜 */
        .tw-fav-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(15, 23, 42, 0.5);
          backdrop-filter: blur(4px);
          z-index: 9999;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .tw-fav-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }
        .tw-fav-drawer {
          position: fixed;
          top: 0; right: -480px; width: 440px; max-width: 92vw; height: 100%;
          background: #FFFFFF;
          box-shadow: -10px 0 36px rgba(0,0,0,0.18);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          transition: right 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .tw-fav-drawer.open {
          right: 0;
        }
        .fav-drawer-header {
          padding: 20px 24px;
          border-bottom: 1px solid #F1F5F9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .fav-drawer-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .fav-drawer-title {
          font-size: 18px;
          font-weight: 900;
          color: #0F172A;
          margin: 0;
        }
        .fav-drawer-close-btn {
          background: #F1F5F9;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 14px;
          font-weight: 800;
          color: #64748B;
        }
        .fav-drawer-toolbar {
          padding: 14px 20px 10px;
          border-bottom: 1px solid #F1F5F9;
        }
        .fav-drawer-search-wrap input {
          width: 100%;
          padding: 10px 16px;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          font-size: 13.5px;
          outline: none;
          box-sizing: border-box;
        }
        .fav-drawer-search-wrap input:focus {
          border-color: #0284C7;
          box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
        }
        .fav-drawer-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          margin-top: 10px;
          padding-bottom: 4px;
        }
        .fav-tab-btn {
          border: 1px solid #E2E8F0;
          background: #F8FAFC;
          color: #475569;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 999px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .fav-tab-btn.active {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
        }
        .fav-drawer-list {
          flex: 1;
          overflow-y: auto;
          padding: 16px 20px;
        }
        .fav-item-card {
          display: flex;
          gap: 12px;
          background: #FFFFFF;
          border: 1px solid #F1F5F9;
          border-radius: 16px;
          padding: 12px;
          margin-bottom: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.2s ease;
        }
        .fav-item-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 6px 16px rgba(0,0,0,0.06);
        }
        .fav-item-img-wrap {
          position: relative;
          width: 90px;
          height: 90px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          background: #F1F5F9;
        }
        .fav-item-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .fav-item-badge {
          position: absolute;
          top: 4px;
          left: 4px;
          font-size: 9.5px;
          font-weight: 800;
          padding: 2px 5px;
          border-radius: 4px;
        }
        .fav-item-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }
        .fav-item-topline {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2px;
        }
        .fav-item-title {
          font-size: 14.5px;
          font-weight: 800;
          color: #0F172A;
          margin: 0 0 4px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .fav-item-desc {
          font-size: 11.5px;
          color: #64748B;
          line-height: 1.4;
          margin: 0 0 8px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .fav-item-actions {
          display: flex;
          gap: 6px;
          align-items: center;
          margin-top: auto;
        }
        .fav-action-btn {
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          padding: 4px 9px;
          border-radius: 6px;
          white-space: nowrap;
        }
        .fav-action-btn.klook {
          background: #FF5B00;
          color: #FFFFFF;
        }
        .fav-action-btn.trip {
          background: #287DFA;
          color: #FFFFFF;
        }
        .fav-action-btn.map {
          background: #F1F5F9;
          color: #334155;
        }
        .fav-item-del-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 14px;
          padding: 4px;
          margin-left: auto;
          color: #94A3B8;
        }
        .fav-item-del-btn:hover {
          color: #E11D48;
        }

        .fav-drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid #F1F5F9;
          background: #FAFAFA;
        }
        .fav-export-pdf-btn {
          width: 100%;
          padding: 12px;
          background: linear-gradient(135deg, #0284C7 0%, #0369A1 100%);
          color: #FFFFFF;
          border: none;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
          transition: all 0.2s ease;
        }
        .fav-export-pdf-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(2, 132, 199, 0.4);
        }
        .fav-clear-btn {
          background: transparent;
          border: none;
          color: #94A3B8;
          font-size: 12px;
          cursor: pointer;
        }
        .fav-clear-btn:hover {
          color: #E11D48;
        }

        /* 愛心收藏通用按鈕 */
        .card-fav-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 10;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .card-fav-btn:hover {
          transform: scale(1.15);
        }
        .card-fav-btn svg, .card-fav-btn img, .card-fav-btn span {
          width: 18px;
          height: 18px;
          transition: all 0.2s ease;
        }
        .card-fav-btn.active {
          background: #FFE4E6;
          border-color: #FECDD3;
        }
        .card-fav-btn.active svg {
          fill: #E11D48;
          stroke: #E11D48;
        }

        /* Q彈特效與發光光圈 */
        .heart-bouncing {
          animation: heartBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes heartBounce {
          0% { transform: scale(1); }
          40% { transform: scale(1.35); }
          70% { transform: scale(0.92); }
          100% { transform: scale(1); }
        }
        .fav-ripple-ring {
          position: absolute;
          width: 100%; height: 100%;
          border-radius: 50%;
          border: 2px solid #E11D48;
          animation: favRipple 0.65s ease-out forwards;
          pointer-events: none;
        }
        @keyframes favRipple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .fav-sparkle-dot {
          position: absolute;
          font-size: 13px;
          pointer-events: none;
          animation: favParticle 0.6s ease-out forwards;
        }
        @keyframes favParticle {
          0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.2); opacity: 0; }
        }

        /* 全局 Toast */
        #fav-global-toast {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%) translateY(30px);
          background: rgba(15, 23, 42, 0.94);
          color: #FFFFFF;
          backdrop-filter: blur(8px);
          padding: 12px 24px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
          display: flex;
          align-items: center;
          gap: 10px;
          z-index: 10001;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        #fav-global-toast.show {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }

        /* PDF 預覽視窗 */
        .fav-pdf-modal {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          z-index: 10002;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .fav-pdf-modal.open {
          opacity: 1;
          pointer-events: auto;
        }
        .fav-pdf-modal-backdrop {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(6px);
        }
        .fav-pdf-modal-dialog {
          position: relative;
          width: 960px;
          max-width: 95vw;
          height: 90vh;
          background: #FFFFFF;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          z-index: 2;
        }
        .fav-pdf-modal-header {
          padding: 18px 28px;
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #F8FAFC;
        }
        .fav-print-action-btn {
          background: #0284C7;
          color: #FFF;
          border: none;
          font-size: 13.5px;
          font-weight: 800;
          padding: 9px 20px;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
        }
        .fav-print-action-btn:hover {
          background: #0369A1;
        }
        .fav-pdf-close-btn {
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          font-size: 13px;
          font-weight: 700;
          padding: 9px 16px;
          border-radius: 12px;
          cursor: pointer;
        }
        .fav-pdf-modal-body {
          flex: 1;
          overflow-y: auto;
          background: #E2E8F0;
          padding: 30px;
        }

        /* 渲染 PDF 文件頁面 */
        .pdf-document {
          max-width: 820px;
          margin: 0 auto;
          background: #FFFFFF;
          padding: 44px 48px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          border-radius: 8px;
          color: #1E293B;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
        .pdf-header {
          border-bottom: 2px solid #0F172A;
          padding-bottom: 20px;
          margin-bottom: 28px;
        }
        .pdf-brand-tag {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          color: #0284C7;
          text-transform: uppercase;
        }
        .pdf-main-title {
          font-size: 26px;
          font-weight: 900;
          color: #0F172A;
          margin: 8px 0 6px 0;
        }
        .pdf-sub-title {
          font-size: 14px;
          color: #475569;
          margin: 0 0 12px 0;
        }
        .pdf-meta-bar {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: #64748B;
          font-weight: 600;
          margin-bottom: 14px;
        }
        .pdf-notice-banner {
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 12.5px;
          color: #166534;
          line-height: 1.5;
        }
        .pdf-section {
          margin-bottom: 32px;
          page-break-inside: avoid;
        }
        .pdf-section-title {
          font-size: 18px;
          font-weight: 800;
          border-left: 5px solid #0284C7;
          padding-left: 12px;
          margin-bottom: 16px;
        }
        .pdf-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .pdf-card {
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          page-break-inside: avoid;
          background: #FFFFFF;
        }
        .pdf-card-img-wrap {
          position: relative;
          height: 140px;
          background: #F1F5F9;
        }
        .pdf-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .pdf-card-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: rgba(15, 23, 42, 0.85);
          color: #FFF;
          font-size: 10px;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 6px;
        }
        .pdf-card-body {
          padding: 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pdf-card-title {
          font-size: 15px;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 6px;
        }
        .pdf-card-desc {
          font-size: 12px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 12px;
          flex: 1;
        }
        .pdf-card-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: auto;
          background: #F8FAFC;
          padding: 8px;
          border-radius: 8px;
        }
        .pdf-link-btn {
          font-size: 11.5px;
          font-weight: 700;
          text-decoration: underline;
          display: block;
          word-break: break-all;
        }
        .pdf-link-btn.klook {
          color: #EA580C;
        }
        .pdf-link-btn.trip {
          color: #0284C7;
        }
        .pdf-footer {
          border-top: 1px solid #E2E8F0;
          padding-top: 18px;
          margin-top: 36px;
          text-align: center;
        }

        /* 專門針對瀏覽器列印 / 存為 PDF 的極致樣式 */
        @media print {
          body * {
            visibility: hidden;
          }
          #fav-pdf-modal, #fav-pdf-modal * {
            visibility: visible;
          }
          #fav-pdf-modal {
            position: absolute;
            top: 0; left: 0; width: 100%; height: auto;
            background: #FFF;
          }
          .fav-pdf-modal-backdrop, .fav-pdf-modal-header {
            display: none !important;
          }
          .fav-pdf-modal-dialog {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          .fav-pdf-modal-body {
            background: #FFF !important;
            padding: 0 !important;
          }
          .pdf-document {
            max-width: 100% !important;
            padding: 0 !important;
            box-shadow: none !important;
          }
          .pdf-card {
            border: 1px solid #CBD5E1 !important;
            page-break-inside: avoid !important;
          }
          .pdf-link-btn {
            text-decoration: underline !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  };

  // 全局註冊與相容匯出
  window.FavoritesManager = FavoritesManager;
  window.toggleFavorite = function (name, btn) {
    return FavoritesManager.toggle(name, btn);
  };
  window.openFavDrawer = function (cat) {
    FavoritesManager.openDrawer(cat);
  };
  window.closeFavDrawer = function () {
    FavoritesManager.closeDrawer();
  };

  // 頁面載入完成後自動初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => FavoritesManager.init());
  } else {
    FavoritesManager.init();
  }

})(window, document);
