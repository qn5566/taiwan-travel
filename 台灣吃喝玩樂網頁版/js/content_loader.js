/**
 * 台灣吃喝玩樂網頁版 - 後端內容載入層 (Content Loader)
 * 從 ActivityEvent 後端 (raw.githubusercontent.com/qn5566/ActivityEvent/main/content)
 * 抓取多國語言內容 JSON，若網路失敗則回退到本地內建資料 (data.js / *_data.js)。
 *
 * 對應 Flutter App 的 contentBaseUrl 抓取方式：
 *   const contentBaseUrl = 'https://raw.githubusercontent.com/qn5566/ActivityEvent/main/content';
 *   檔案：themes.json / rankings.json / cafes.json / michelin.json /
 *        souvenirs.json / blog.json / charter.json
 */
window.CONTENT_BASE_URL = 'https://raw.githubusercontent.com/qn5566/ActivityEvent/main/content';

// 前端語系 -> 後端 content 語系資料夾代碼
const WEB_TO_CONTENT_LANG = {
  'zh-TW': 'zh',
  'zh':    'zh',
  'en':    'en',
  'ja':    'ja',
  'ko':    'ko',
  'es':    'es',
  'th':    'th',
  'de':    'en',   // 後端無德文，回退英文
  'vi':    'vi',
  'ms':    'ms',
  'fil':   'fil',
  'hi':    'hi',
  'id':    'id'
};

/** 取得目前前端語系 (URL ?lang= 優先，其次 localStorage，最後 global currentLang) */
function getWebLang() {
  try {
    const p = new URLSearchParams(window.location.search);
    const l = p.get('lang');
    if (l) return l;
  } catch (e) {}
  try {
    const s = localStorage.getItem('taiwan_travel_lang');
    if (s) return s;
  } catch (e) {}
  return (typeof currentLang !== 'undefined') ? currentLang : 'zh-TW';
}

/** 前端語系映射到後端 content 語系代碼 */
function mapToContentLang(lang) {
  return WEB_TO_CONTENT_LANG[lang] || 'en';
}

/**
 * 抓取後端單一 content JSON 檔 (自動帶入目前語系)
 * @param {string} filename 例如 'rankings.json'
 * @param {string} [lang]   覆寫語系 (預設目前語系)
 * @returns {Promise<any>}  解析後的 JSON
 */
async function fetchContentJson(filename, lang) {
  const l = mapToContentLang(lang || getWebLang());
  const url = `${window.CONTENT_BASE_URL}/${l}/${filename}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);
  try {
    const res = await fetch(url, { signal: ctrl.signal, cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

/** 抓取 rankings.json 並覆寫 RANKINGS_TOPICS_META / RANKINGS_FULL_DATA (失敗則保留本地資料) */
async function loadRankingsContent(lang) {
  try {
    const data = await fetchContentJson('rankings.json', lang);
    if (data && Array.isArray(data.topics) && data.items) {
      window.RANKINGS_TOPICS_META = data.topics;
      window.RANKINGS_FULL_DATA = data.items;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] rankings.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 themes.json 並覆寫 THEMES_COMPLETE_DATA (失敗則保留本地資料) */
async function loadThemesContent(lang) {
  try {
    const data = await fetchContentJson('themes.json', lang);
    if (Array.isArray(data) && data.length) {
      window.THEMES_COMPLETE_DATA = data;
      window.THEMES_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] themes.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 cafes.json 並覆寫 TAIWAN_CAFES_DATA (失敗則保留本地資料) */
async function loadCafesContent(lang) {
  try {
    const data = await fetchContentJson('cafes.json', lang);
    if (Array.isArray(data) && data.length) {
      window.TAIWAN_CAFES_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] cafes.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 michelin.json 並覆寫 TAIPEI_MICHELIN_STARS_DATA / BIB_GOURMAND_DATA */
async function loadMichelinContent(lang) {
  try {
    const data = await fetchContentJson('michelin.json', lang);
    if (data) {
      if (Array.isArray(data.stars)) window.TAIPEI_MICHELIN_STARS_DATA = data.stars;
      if (Array.isArray(data.bib)) window.BIB_GOURMAND_DATA = data.bib;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] michelin.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 souvenirs.json 並覆寫 SOUVENIR_CATEGORIES_DATA */
async function loadSouvenirsContent(lang) {
  try {
    const data = await fetchContentJson('souvenirs.json', lang);
    if (Array.isArray(data) && data.length) {
      window.SOUVENIR_CATEGORIES_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] souvenirs.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 blog.json 並覆寫 BLOG_ARTICLES_DATA */
async function loadBlogContent(lang) {
  try {
    const data = await fetchContentJson('blog.json', lang);
    if (Array.isArray(data) && data.length) {
      window.BLOG_ARTICLES_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] blog.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 activities.json 並覆寫 TOP_ACTIVITIES_6 */
async function loadActivitiesContent(lang) {
  try {
    const data = await fetchContentJson('activities.json', lang);
    if (Array.isArray(data) && data.length) {
      window.TOP_ACTIVITIES_6 = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] activities.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 spots.json 並覆寫 ALL_SPOTS_DATA */
async function loadSpotsContent(lang) {
  try {
    const data = await fetchContentJson('spots.json', lang);
    if (Array.isArray(data) && data.length) {
      window.ALL_SPOTS_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] spots.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 theme_grid.json 並覆寫 THEMES_DATA（首頁 18 大主題網格） */
async function loadThemeGridContent(lang) {
  try {
    const data = await fetchContentJson('theme_grid.json', lang);
    if (Array.isArray(data) && data.length) {
      window.THEMES_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] theme_grid.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 home_rankings.json 並覆寫 RANKINGS_DATA（首頁 9 大排行榜） */
async function loadHomeRankingsContent(lang) {
  try {
    const data = await fetchContentJson('home_rankings.json', lang);
    if (data && typeof data === 'object' && Object.keys(data).length) {
      window.RANKINGS_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] home_rankings.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}

/** 抓取 home_blog.json 並覆寫 BLOG_ARTICLES_DATA（首頁部落格文章） */
async function loadHomeBlogContent(lang) {
  try {
    const data = await fetchContentJson('home_blog.json', lang);
    if (Array.isArray(data) && data.length) {
      window.BLOG_ARTICLES_DATA = data;
      return true;
    }
    return false;
  } catch (e) {
    console.warn('[content-loader] home_blog.json 載入失敗，回退本地資料：', e && e.message);
    return false;
  }
}
