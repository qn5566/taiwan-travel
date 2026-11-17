/** Cafe detail pages join cafe_articles.cafeId to cafes.id, never by list order. */
const CAFE_INFO_I18N = {
  'zh-TW': ['← 返回全台風格咖啡圖鑑','咖啡店深度探訪','這間咖啡店的故事，正在醞釀中。','目前尚未刊登探店文章，您仍可查看下方店家資訊，或返回咖啡圖鑑探索更多咖啡空間。','探訪亮點','地址','電話','附近住宿 ↗','走進台灣的咖啡空間，閱讀店家與在地生活的故事。','營業時間','建議停留','鄰近捷運','網路與插座','低消','正在載入店家故事…','目前無法取得最新資料，暫時顯示已收錄資訊。','重新載入','找不到這間咖啡店','請返回咖啡圖鑑選擇店家。','此篇文章暫以繁體中文顯示。','語言'],
  en: ['← Back to Taiwan Coffee Spaces','Cafe Stories','This café’s story is brewing.','No feature has been published yet. Browse the venue information below or return to explore more cafes.','Visit Highlights','Address','Phone','Nearby Stays ↗','Discover Taiwan’s coffee spaces and the people and places behind them.','Opening Hours','Suggested Stay','Nearest MRT','Wi-Fi & Power','Minimum Order','Loading the café story…','The latest data is unavailable. Showing saved information.','Try Again','Café not found','Return to the coffee guide to choose a café.','This article is currently shown in Traditional Chinese.','Language'],
  ja: ['← 台湾カフェ図鑑へ戻る','カフェ取材記','このカフェの物語は、ただいま準備中です。','取材記事はまだ公開されていません。店舗情報をご覧いただくか、図鑑から別のカフェをお探しください。','訪問の見どころ','住所','電話','周辺の宿泊施設 ↗','台湾のカフェと、その土地や人々の物語を訪ねて。','営業時間','滞在時間の目安','最寄りのMRT','Wi-Fi・電源','最低注文','記事を読み込み中…','最新情報を取得できません。保存済みの情報を表示しています。','再読み込み','カフェが見つかりません','カフェ図鑑に戻って店舗をお選びください。','この記事は現在、繁体字中国語で表示されています。','言語'],
  ko: ['← 대만 카페 도감으로','카페 이야기','이 카페의 이야기를 준비 중입니다.','아직 취재 기사가 없습니다. 아래 매장 정보를 확인하거나 카페 도감에서 다른 공간을 찾아보세요.','방문 포인트','주소','전화','주변 숙소 ↗','대만 카페와 지역의 일상, 사람들의 이야기를 만나보세요.','영업시간','추천 체류 시간','가까운 MRT','와이파이 및 콘센트','최소 주문','카페 이야기 불러오는 중…','최신 정보를 불러올 수 없어 저장된 정보를 표시합니다.','다시 시도','카페를 찾을 수 없습니다','카페 도감으로 돌아가 매장을 선택해 주세요.','이 기사는 현재 중국어 번체로 표시됩니다.','언어'],
  es: ['← Volver a los cafés de Taiwán','Historias de cafés','La historia de este café se está preparando.','Aún no hay un reportaje. Consulta los datos del local o vuelve a la guía para descubrir más cafés.','Lo más destacado','Dirección','Teléfono','Alojamiento cercano ↗','Descubre los cafés de Taiwán y las historias de su gente.','Horario','Visita recomendada','MRT más cercano','Wi-Fi y enchufes','Consumo mínimo','Cargando la historia…','No se pueden obtener los últimos datos. Se muestra la información guardada.','Reintentar','Café no encontrado','Vuelve a la guía para elegir un café.','Este artículo se muestra en chino tradicional.','Idioma'],
  de: ['← Zurück zum Caféführer','Cafégeschichten','Die Geschichte dieses Cafés entsteht gerade.','Es gibt noch keine Reportage. Entdecke die Informationen zum Café oder weitere Orte im Caféführer.','Höhepunkte','Adresse','Telefon','Unterkünfte in der Nähe ↗','Entdecke Taiwans Cafés und die Geschichten ihrer Menschen.','Öffnungszeiten','Empfohlener Aufenthalt','Nächste MRT','WLAN & Steckdosen','Mindestbestellung','Cafégeschichte wird geladen…','Aktuelle Daten sind nicht verfügbar. Gespeicherte Informationen werden angezeigt.','Erneut versuchen','Café nicht gefunden','Wähle ein Café im Caféführer aus.','Dieser Artikel wird auf traditionellem Chinesisch angezeigt.','Sprache'],
  th: ['← กลับสู่คู่มือคาเฟ่ไต้หวัน','เรื่องราวคาเฟ่','เรื่องราวของคาเฟ่แห่งนี้กำลังอยู่ระหว่างเตรียมการ','ยังไม่มีบทความแนะนำ คุณสามารถดูข้อมูลร้านด้านล่างหรือกลับไปค้นหาคาเฟ่อื่นได้','ไฮไลต์','ที่อยู่','โทรศัพท์','ที่พักใกล้เคียง ↗','ค้นพบคาเฟ่ไต้หวันและเรื่องราวของผู้คนในท้องถิ่น','เวลาเปิด','เวลาแนะนำ','MRT ใกล้เคียง','ไวไฟและปลั๊กไฟ','ยอดสั่งขั้นต่ำ','กำลังโหลดเรื่องราว…','ไม่สามารถโหลดข้อมูลล่าสุดได้ กำลังแสดงข้อมูลที่บันทึกไว้','ลองอีกครั้ง','ไม่พบคาเฟ่','โปรดกลับไปเลือกคาเฟ่จากคู่มือ','บทความนี้แสดงเป็นภาษาจีนตัวเต็ม','ภาษา']
};
const CAFE_INFO_PARTNERSHIP_I18N = {
  "zh-TW": "探店邀約/外語菜單/活動打卡/特色餐點",
  "en": "Visit Invitations / Multilingual Menus / Event Check-ins / Signature Dishes",
  "ja": "取材のご招待 / 多言語メニュー / イベントチェックイン / 看板メニュー",
  "ko": "방문 취재 초청 / 다국어 메뉴 / 이벤트 체크인 / 대표 메뉴",
  "es": "Invitaciones / Menús multilingües / Check-in en eventos / Platos de autor",
  "de": "Besuchseinladungen / Mehrsprachige Menüs / Event-Check-ins / Spezialitäten",
  "th": "เชิญเยี่ยมชมร้าน / เมนูหลายภาษา / เช็กอินกิจกรรม / เมนูเด่น",
  "vi": "Mời ghé thăm / Thực đơn đa ngôn ngữ / Check-in sự kiện / Món đặc trưng",
  "id": "Undangan Kunjungan / Menu Multibahasa / Check-in Acara / Menu Andalan",
  "ms": "Jemputan Lawatan / Menu Pelbagai Bahasa / Daftar Masuk Acara / Hidangan Istimewa",
  "fil": "Imbitasyon sa Pagbisita / Multilingguwal na Menu / Event Check-in / Espesyal na Pagkain",
  "hi": "कैफ़े भ्रमण आमंत्रण / बहुभाषी मेन्यू / कार्यक्रम चेक-इन / खास व्यंजन"
};
const CafeArticleData = (() => {
  const keys = ['back','title','emptyTitle','emptyBody','highlights','address','phone','hotels','footer','businessHours','recommendedStay','nearestMrt','wifiAndPower','minOrder','loading','offline','retry','notFound','notFoundBody','fallback','language'];
  function text(lang, key) {
    if (key === 'partnership') return CAFE_INFO_PARTNERSHIP_I18N[lang === 'zh' ? 'zh-TW' : lang] || CAFE_INFO_PARTNERSHIP_I18N.en;
    return (CAFE_INFO_I18N[lang === 'zh' ? 'zh-TW' : lang] || CAFE_INFO_I18N.en)[keys.indexOf(key)] || ''; }
  function list(data) {
    if (!Array.isArray(data)) throw new Error('Expected an array');
    return data.filter(item => item && typeof item === 'object' && typeof item.id === 'string');
  }
  function resolve(params, cafes, articles) {
    const id = params.get('id') || params.get('cafeId');
    const slug = params.get('slug');
    const article = id ? articles.find(a => a.cafeId === id) : slug ? articles.find(a => a.slug === slug) : undefined;
    const cafe = cafes.find(c => c.id === (id || article?.cafeId));
    return { cafe, article };
  }
  function merge(primary, fallback) {
    const byId = new Map(fallback.map(item => [item.id, item]));
    primary.forEach(item => byId.set(item.id, { ...byId.get(item.id), ...item }));
    return [...byId.values()];
  }
  function safeUrl(value) {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; } catch (e) { return ''; }
  }
  async function load(lang, fetcher = fetchContentJson, localFetch = fetch) {
    const chinese = mapToContentLang(lang) === 'zh';
    const tasks = await Promise.allSettled([
      fetcher('cafes.json', lang), fetcher('cafe_articles.json', lang),
      chinese ? Promise.resolve([]) : fetcher('cafes.json', 'zh-TW'),
      chinese ? Promise.resolve([]) : fetcher('cafe_articles.json', 'zh-TW')
    ]);
    const valid = index => tasks[index].status === 'fulfilled' && Array.isArray(tasks[index].value);
    const result = index => valid(index) ? list(tasks[index].value) : [];
    let zhArticles = chinese ? result(1) : result(3);
    const offline = !valid(0) || !valid(1);
    if (!(chinese ? valid(1) : valid(3))) {
      try { const response = await localFetch('data/cafe_articles.zh.json'); if (response.ok) zhArticles = list(await response.json()); } catch (e) {}
    }
    const localCafes = typeof TAIWAN_CAFES_DATA !== 'undefined' ? TAIWAN_CAFES_DATA : [];
    const primaryArticles = result(1);
    return {
      cafes: merge(result(0), merge(result(2), localCafes)),
      articles: merge(primaryArticles, zhArticles), offline,
      translatedArticleIds: new Set(primaryArticles.map(a => a.id))
    };
  }
  return { text, list, resolve, merge, safeUrl, load };
})();

function setCafeInfoLoading(active, lang = getWebLang()) {
  const overlay = document.getElementById('cafeInfoLoading');
  if (!overlay) return;
  document.getElementById('cafeInfoLoadingText').textContent = CafeArticleData.text(lang, 'loading');
  overlay.hidden = !active;
  document.body.classList.toggle('cafe-info-loading', active);
  document.getElementById('cafe-article').setAttribute('aria-busy', String(active));
  document.getElementById('articleLanguage').disabled = active;
}

async function initCafeInfo() {
  const params = new URLSearchParams(window.location.search);
  const lang = getWebLang();
  setCafeInfoLoading(true, lang);
  const t = key => CafeArticleData.text(lang, key);
  const byId = id => document.getElementById(id);
  const set = (id, value) => { byId(id).textContent = value || ''; };
  document.documentElement.lang = lang === 'zh-TW' ? 'zh-Hant' : lang;
  document.querySelectorAll('[data-info-text]').forEach(el => { el.textContent = t(el.dataset.infoText); });
  const backUrl = `cafe.html?lang=${encodeURIComponent(lang)}`;
  byId('backToCafes').href = backUrl;
  byId('emptyBack').href = backUrl;
  const language = byId('articleLanguage');
  const languages = [['zh-TW','繁體中文'],['en','English'],['ja','日本語'],['ko','한국어'],['es','Español'],['de','Deutsch'],['th','ไทย'],['vi','Tiếng Việt'],['id','Bahasa Indonesia'],['ms','Bahasa Melayu'],['fil','Filipino'],['hi','हिन्दी']];
  for (const [value, label] of languages) { const option = document.createElement('option'); option.value = value; option.textContent = label; language.appendChild(option); }
  language.value = lang === 'zh' ? 'zh-TW' : lang;
  language.setAttribute('aria-label', t('language'));
  language.addEventListener('change', () => {
    const url = new URL(window.location.href); url.searchParams.set('lang', language.value);
    try { localStorage.setItem('taiwan_travel_lang', language.value); } catch (e) {}
    setCafeInfoLoading(true, language.value);
    // Allow the loading indicator to paint before starting navigation.
    requestAnimationFrame(() => requestAnimationFrame(() => window.location.assign(url.href)));
  });
  set('articleStatus', t('loading'));
  byId('articleRetry').onclick = () => window.location.reload();
  const data = await CafeArticleData.load(lang);
  const { cafe, article } = CafeArticleData.resolve(params, data.cafes, data.articles);
  const info = article?.practicalInfo && typeof article.practicalInfo === 'object' ? article.practicalInfo : {};
  set('shopTitleZh', article?.title || cafe?.name || t('notFound'));
  document.title = `${article?.title || cafe?.name || t('notFound')}｜Taiwan Roam`;
  byId('pageDesc').content = article?.summary || cafe?.features || t('emptyBody');
  set('articleSummary', article?.summary || cafe?.features);
  set('shopAreaPill', [cafe?.city, cafe?.district].filter(Boolean).join(' · '));
  byId('shopAreaPill').hidden = !cafe?.city;
  set('articleByline', article ? [article.author, article.date, article.readTime].filter(Boolean).join(' · ') : '');
  const fallback = article && mapToContentLang(lang) !== 'zh' && !data.translatedArticleIds.has(article.id);
  set('articleStatus', [data.offline ? t('offline') : '', fallback ? t('fallback') : ''].filter(Boolean).join(' '));
  byId('articleRetry').hidden = !data.offline;
  const image = (el, url, alt) => {
    const safe = CafeArticleData.safeUrl(url);
    if (!safe) { el.hidden = true; return false; }
    el.src = safe; el.alt = alt || ''; el.onerror = () => { el.closest('figure, .hero-stage')?.setAttribute('hidden', ''); }; return true;
  };
  byId('articleHero').hidden = !image(byId('photo1Img'), article?.coverImg || cafe?.img, cafe?.name || article?.title);
  set('photo1Caption', cafe?.name || article?.category);
  byId('photo1Caption').hidden = !byId('photo1Caption').textContent;
  byId('articleEmpty').hidden = !!article;
  if (!cafe && !article) {
    byId('articleEmpty').querySelector('h2').textContent = t('notFound');
    byId('articleEmpty').querySelector('p').textContent = t('notFoundBody');
  }
  const sections = Array.isArray(article?.sections) ? article.sections : [];
  for (const section of sections) {
    if (!section || typeof section !== 'object') continue;
    const block = document.createElement('section'); block.className = 'concept-editorial-block';
    const heading = document.createElement('h2'); heading.className = 'concept-headline'; heading.textContent = section.heading || '';
    const content = document.createElement('p'); content.className = 'concept-text'; content.textContent = section.content || '';
    block.append(heading, content); byId('articleSections').appendChild(block);
    if (CafeArticleData.safeUrl(section.image)) {
      const figure = document.createElement('figure'); figure.className = 'article-photo';
      const img = document.createElement('img'); img.loading = 'lazy'; image(img, section.image, section.caption || section.heading);
      const caption = document.createElement('figcaption'); caption.textContent = section.caption || '';
      figure.append(img, caption); byId('articleSections').appendChild(figure);
    }
  }
  const highlights = Array.isArray(article?.highlights) ? article.highlights : [];
  highlights.forEach(text => { const item = document.createElement('li'); item.textContent = text; byId('highlightsList').appendChild(item); });
  byId('articleHighlights').hidden = !highlights.length;
  if (cafe || article) {
    byId('shopInfo').hidden = false;
    set('infoName', cafe?.name || article.title);
    set('infoAddress', cafe?.address);
    byId('addressRow').hidden = !cafe?.address;
    const phone = cafe?.phone && cafe.phone !== '暫無提供' ? cafe.phone : '';
    set('infoTel', phone); byId('infoTel').href = `tel:${phone.replace(/[^+\d]/g, '')}`; byId('phoneRow').hidden = !phone;
    for (const key of ['businessHours','recommendedStay','nearestMrt','wifiAndPower','minOrder']) {
      if (!info[key]) continue;
      const row = document.createElement('div'); row.className = 'stacked-meta-item';
      const label = document.createElement('span'); label.className = 'meta-label'; label.textContent = t(key);
      const value = document.createElement('span'); value.className = 'info-value'; value.textContent = info[key];
      row.append(label, value); byId('practicalInfo').appendChild(row);
    }
    byId('infoMapUrl').href = CafeArticleData.safeUrl(cafe?.mapUrl) || `https://maps.google.com/?q=${encodeURIComponent(cafe?.address || cafe?.name || article.title)}`;
    byId('infoHotelUrl').href = `https://www.trip.com/hotels/list?Allianceid=9507030&SID=325761227&trip_sub3=D20272275&keyword=${encodeURIComponent([cafe?.city, cafe?.district, cafe?.name].filter(Boolean).join(' ') || article.title)}`;
  }
  byId('cafe-article').setAttribute('aria-busy', 'false');
}
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', () => {
  initCafeInfo().catch(() => {
    document.getElementById('articleStatus').textContent = CafeArticleData.text(getWebLang(), 'offline');
    document.getElementById('articleRetry').hidden = false;
    document.getElementById('cafe-article').setAttribute('aria-busy', 'false');
  }).finally(() => setCafeInfoLoading(false));
});

if (typeof window !== 'undefined') window.addEventListener('pageshow', event => {
  if (event.persisted) setCafeInfoLoading(false);
});
