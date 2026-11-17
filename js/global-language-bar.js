/** Shared language bar. Load once with <script src="js/global-language-bar.js" defer>. */
(() => {
  const languages = [
    ["zh-TW", "繁體中文 (Traditional Chinese)"],
    ["en", "English (International)"],
    ["ja", "日本語 (Japanese)"],
    ["ko", "한국어 (Korean)"],
    ["vi", "Tiếng Việt"],
    ["th", "ภาษาไทย"],
    ["id", "Bahasa Indonesia"],
    ["ms", "Bahasa Melayu (Malay)"],
    ["fil", "Filipino"],
    ["hi", "हिन्दी (Hindi)"],
    ["es", "Español (Spanish)"],
    ["de", "Deutsch (German)"]
  ];

  function getLanguage() {
    let lang = new URLSearchParams(window.location.search).get("lang");
    if (!lang) {
      try { lang = localStorage.getItem("taiwan_travel_lang"); } catch (e) {}
    }
    if (lang === "zh") lang = "zh-TW";
    return languages.some(([code]) => code === lang) ? lang : "zh-TW";
  }

  const loadingLabels = {
    'zh-TW': '正在載入資料…', en: 'Loading…', ja: '読み込み中…', ko: '불러오는 중…',
    vi: 'Đang tải…', th: 'กำลังโหลด…', id: 'Memuat…', ms: 'Sedang memuat…',
    fil: 'Naglo-load…', hi: 'लोड हो रहा है…', es: 'Cargando…', de: 'Wird geladen…'
  };
  const loadingTasks = new Set();
  function showLoading(lang = getLanguage()) {
    const token = {};
    loadingTasks.add(token);
    let overlay = document.getElementById('site-loading-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'site-loading-overlay';
      overlay.setAttribute('role', 'status');
      overlay.setAttribute('aria-live', 'polite');
      overlay.innerHTML = '<span class="site-loading-spinner" aria-hidden="true"></span><span class="site-loading-label"></span>';
      document.body.append(overlay);
    }
    overlay.querySelector('.site-loading-label').textContent = loadingLabels[lang] || loadingLabels.en;
    overlay.hidden = false;
    document.documentElement.setAttribute('aria-busy', 'true');
    // Each request releases its own token; overlapping requests cannot hide one another.
    return () => {
      loadingTasks.delete(token);
      if (!loadingTasks.size) {
        overlay.hidden = true;
        document.documentElement.removeAttribute('aria-busy');
      }
    };
  }
  window.SiteLoading = { begin: showLoading };
  window.addEventListener('pageshow', event => {
    if (!event.persisted) return;
    loadingTasks.clear();
    const overlay = document.getElementById('site-loading-overlay');
    if (overlay) overlay.hidden = true;
    document.documentElement.removeAttribute('aria-busy');
  });

  function mount() {
    if (document.querySelector(".top-lang-bar")) return;
    const bar = document.createElement("div");
    bar.className = "top-lang-bar";
    bar.innerHTML = `
      <div class="container top-lang-inner">
        <div class="top-lang-label"><span aria-hidden="true">🇹🇼</span> 台灣吃喝玩樂 ‧ TAIWAN ROAM OFFICIAL</div>
        <label class="clean-lang-select-wrap">
          <span aria-hidden="true">🌐</span>
          <span class="language-select-label">語言 / Language</span>
          <select id="global-lang-select" class="clean-lang-select">
            ${languages.map(([code, label]) => `<option value="${code}">${label}</option>`).join("")}
          </select>
        </label>
      </div>`;
    document.body.prepend(bar);
    document.body.classList.add("has-global-language-bar");

    const lang = getLanguage();
    const select = bar.querySelector("select");
    select.value = lang;
    document.documentElement.lang = lang;
    try { localStorage.setItem("taiwan_travel_lang", lang); } catch (e) {}
    if (typeof updateSiteNavigation === "function") updateSiteNavigation(lang);
    if (typeof switchWeekendHopLanguage === "function") {
      switchWeekendHopLanguage(lang === "zh-TW" ? "zh" : lang === "de" ? "en" : lang, false);
    }

    select.addEventListener("change", () => {
      const nextLang = select.value;
      showLoading(nextLang);
      try { localStorage.setItem("taiwan_travel_lang", nextLang); } catch (e) {}
      // Reload the current page so its existing content loader uses the new language.
      const url = new URL(window.location.href);
      url.searchParams.set("lang", nextLang);
      window.location.assign(url.href);
    });

    function syncHeight() {
      document.documentElement.style.setProperty("--top-language-bar-height", `${bar.getBoundingClientRect().height}px`);
    }
    syncHeight();
    if (typeof ResizeObserver !== "undefined") new ResizeObserver(syncHeight).observe(bar);
    else window.addEventListener("resize", syncHeight);
  }

  window.SiteLanguageBar = { mount, getLanguage };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
