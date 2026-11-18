/** Article-type navigation and the Taiwan Roam field-report reader. */
const JournalReports = (() => {
  const keys = ['articles', 'reports', 'reportsTitle', 'reportsSubtitle', 'emptyTitle', 'emptyBody', 'deepEmptyTitle', 'deepEmptyBody', 'errorTitle', 'errorBody', 'retry', 'backArticles', 'backReports', 'read', 'loading', 'notFoundTitle', 'notFoundBody', 'photoTitle', 'nearbyTitle', 'directory', 'stays', 'fallback', 'typesLabel'];
  const copy = {
    'zh-TW': [
      '深度文章', '台灣吃喝玩樂採訪報導', '台灣吃喝玩樂採訪報導', '跟著編輯部走進巷弄、山海與在地風味。',
      '下一篇故事，正在路上', '編輯部正在整理採訪手記與旅途中的風景。新的報導將在這裡與你見面，先看看我們的深度文章吧。',
      '新的深度文章，正在醞釀中', '更多台灣旅行故事即將登場，也可以到採訪報導看看。',
      '暫時無法載入報導', '連線似乎不太順利，請稍後重試，或先閱讀其他文章。', '重新載入', '閱讀深度文章', '返回報導列表', '閱讀報導 →', '正在翻開旅途手記…',
      '這篇報導尚未上架', '目前找不到這篇採訪報導，可能尚未發佈或已移除。請回到列表看看其他故事。',
      '空間光影與風味紀錄', '順遊散策・周邊推薦', '本篇探訪資訊', '附近住宿 ↗', '此篇報導暫以繁體中文顯示。', '文章類型'
    ],
    en: [
      'In-depth Articles', 'Taiwan Roam Reports', 'Taiwan Roam Reports', 'Explore Taiwan’s alleys, landscapes and local flavors with our editors.',
      'The next story is on its way', 'Our editors are gathering notes and photographs from their travels. New reports will appear here. Explore our in-depth articles in the meantime.',
      'More stories are brewing', 'More travel stories are coming. You can also explore our editorial reports.',
      'Reports are temporarily unavailable', 'Please check your connection and try again, or explore our other articles.', 'Try again', 'Read in-depth articles', 'Back to reports', 'Read report →', 'Opening the field notes…',
      'This report is not available', 'It may not have been published yet or may have been removed. Return to the list to find another story.',
      'Spaces, light & local flavors', 'Around the neighborhood', 'Featured spot information', 'Nearby stays ↗', 'This report is currently shown in Traditional Chinese.', 'Article type'
    ],
    ja: [
      '特集記事', 'Taiwan Roam 取材レポート', 'Taiwan Roam 取材レポート', '編集部とともに台湾の路地、山海、地域の味を訪ねて。',
      '次の物語を準備しています', '編集部が旅の記録と写真をまとめています。新しいレポートをお待ちの間、特集記事をお楽しみください。',
      '新しい特集を準備しています', '台湾の旅の物語をお届けする予定です。取材レポートもご覧ください。',
      'レポートを読み込めません', '接続をご確認のうえ再度お試しいただくか、ほかの記事をご覧ください。', '再読み込み', '特集記事を読む', 'レポート一覧へ', 'レポートを読む →', '旅の手帳を開いています…',
      'このレポートは公開されていません', '未公開または削除された可能性があります。一覧からほかの物語をお探しください。',
      '空間の光と地域の味', '周辺のおすすめ', '訪問スポット情報', '周辺の宿泊施設 ↗', 'この記事は現在、繁体字中国語で表示されています。', '記事の種類'
    ],
    ko: [
      '심층 기사', 'Taiwan Roam 취재 보고서', 'Taiwan Roam 취재 보고서', '편집부와 함께 대만의 골목, 자연과 지역의 맛을 만나보세요.',
      '다음 이야기를 준비 중입니다', '편집부가 여행 기록과 사진을 정리하고 있습니다. 새 보고서를 기다리는 동안 심층 기사를 읽어보세요.',
      '새로운 기사를 준비 중입니다', '더 많은 대만 여행 이야기가 찾아옵니다. 취재 보고서도 둘러보세요.',
      '보고서를 불러올 수 없습니다', '연결을 확인하고 다시 시도하거나 다른 기사를 읽어보세요.', '다시 시도', '심층 기사 읽기', '보고서 목록으로', '보고서 읽기 →', '여행 기록을 여는 중…',
      '이 보고서는 현재 제공되지 않습니다', '아직 게시되지 않았거나 삭제되었을 수 있습니다. 목록에서 다른 이야기를 찾아보세요.',
      '공간과 지역의 맛', '주변 추천 장소', '방문 장소 정보', '주변 숙소 ↗', '이 보고서는 현재 중국어 번체로 표시됩니다.', '기사 유형'
    ],
    es: [
      'Artículos en profundidad', 'Reportajes Taiwan Roam', 'Reportajes Taiwan Roam', 'Explora los barrios, paisajes y sabores de Taiwán con nuestros editores.',
      'La próxima historia está en camino', 'Nuestros editores están preparando notas y fotografías. Mientras llegan los nuevos reportajes, descubre nuestros artículos en profundidad.',
      'Estamos preparando nuevas historias', 'Pronto habrá más historias de Taiwán. También puedes explorar nuestros reportajes.',
      'No se pueden cargar los reportajes', 'Comprueba tu conexión y vuelve a intentarlo, o lee otros artículos.', 'Reintentar', 'Leer artículos en profundidad', 'Volver a los reportajes', 'Leer reportaje →', 'Abriendo las notas de viaje…',
      'Este reportaje no está disponible', 'Puede que aún no se haya publicado o que se haya eliminado. Vuelve a la lista para encontrar otra historia.',
      'Espacios y sabores locales', 'Recomendaciones cercanas', 'Información del lugar', 'Alojamiento cercano ↗', 'Este reportaje se muestra en chino tradicional.', 'Tipo de artículo'
    ],
    de: [
      'Ausführliche Artikel', 'Taiwan Roam Reportagen', 'Taiwan Roam Reportagen', 'Entdecke mit unserer Redaktion Taiwans Gassen, Landschaften und lokale Küche.',
      'Die nächste Geschichte entsteht', 'Unsere Redaktion stellt Reisenotizen und Fotos zusammen. Entdecke inzwischen unsere ausführlichen Artikel.',
      'Weitere Geschichten entstehen', 'Bald gibt es neue Reisegeschichten aus Taiwan. Entdecke auch unsere Reportagen.',
      'Die Reportagen sind nicht verfügbar', 'Prüfe deine Verbindung und versuche es erneut oder lies andere Artikel.', 'Erneut versuchen', 'Ausführliche Artikel lesen', 'Zurück zu den Reportagen', 'Reportage lesen →', 'Reisenotizen werden geöffnet…',
      'Diese Reportage ist nicht verfügbar', 'Sie wurde möglicherweise noch nicht veröffentlicht oder entfernt. Suche in der Liste nach einer anderen Geschichte.',
      'Räume und lokale Küche', 'Empfehlungen in der Nähe', 'Informationen zum Besuchsort', 'Unterkünfte in der Nähe ↗', 'Diese Reportage wird auf traditionellem Chinesisch angezeigt.', 'Artikeltyp'
    ],
    th: [
      'บทความเชิงลึก', 'รายงาน Taiwan Roam', 'รายงาน Taiwan Roam', 'สำรวจตรอกซอกซอย ธรรมชาติ และรสชาติท้องถิ่นกับทีมบรรณาธิการ',
      'เรื่องราวใหม่กำลังจะมา', 'ทีมบรรณาธิการกำลังรวบรวมบันทึกและภาพถ่าย ระหว่างรอรายงานใหม่ อ่านบทความเชิงลึกของเราได้เลย',
      'กำลังเตรียมเรื่องราวใหม่', 'เรื่องราวท่องเที่ยวไต้หวันเพิ่มเติมกำลังจะมา คุณสามารถดูรายงานของเราได้เช่นกัน',
      'ไม่สามารถโหลดรายงานได้', 'โปรดตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง หรืออ่านบทความอื่นก่อน', 'ลองอีกครั้ง', 'อ่านบทความเชิงลึก', 'กลับสู่รายการรายงาน', 'อ่านรายงาน →', 'กำลังเปิดบันทึกการเดินทาง…',
      'ยังไม่มีรายงานนี้', 'รายงานอาจยังไม่เผยแพร่หรือถูกนำออกแล้ว กลับไปเลือกเรื่องราวอื่นจากรายการ',
      'บรรยากาศและรสชาติท้องถิ่น', 'สถานที่แนะนำใกล้เคียง', 'ข้อมูลสถานที่', 'ที่พักใกล้เคียง ↗', 'รายงานนี้แสดงเป็นภาษาจีนตัวเต็ม', 'ประเภทบทความ'
    ]
  };
  function text(key, lang = getWebLang()) {
    return (copy[lang === 'zh' ? 'zh-TW' : lang] || copy.en)[keys.indexOf(key)] || key;
  }
  const str = value => JournalReportData.string(value);
  function sampleNotice() {
    const labels = {
      'zh-TW':'範例報導：店家、價格與交通資訊尚待查核。', zh:'範例報導：店家、價格與交通資訊尚待查核。',
      en:'Sample report: venue, price and transport details are awaiting verification.',
      ja:'サンプル記事：店舗・料金・交通情報は確認待ちです。',
      ko:'예시 기사: 매장, 가격 및 교통 정보는 확인이 필요합니다.',
      es:'Reportaje de ejemplo: los datos de locales, precios y transporte están pendientes de verificación.',
      de:'Beispielreportage: Angaben zu Orten, Preisen und Verkehr müssen noch geprüft werden.',
      th:'บทความตัวอย่าง: ข้อมูลร้าน ราคา และการเดินทางยังรอการตรวจสอบ',
      vi:'Bài viết mẫu: thông tin địa điểm, giá và giao thông đang chờ xác minh.',
      ms:'Laporan contoh: butiran tempat, harga dan pengangkutan menunggu pengesahan.',
      fil:'Halimbawang ulat: kailangan pang beripikahin ang lugar, presyo at transportasyon.',
      hi:'नमूना रिपोर्ट: स्थान, कीमत और परिवहन की जानकारी का सत्यापन बाकी है।',
      id:'Laporan contoh: informasi tempat, harga, dan transportasi masih perlu diverifikasi.'
    };
    return labels[getWebLang()] || labels.en;
  }
  function node(tag, className, value) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (value != null) element.textContent = value;
    return element;
  }
  function listHref(kind = 'reports') {
    const url = new URL('journals.html', window.location.href);
    url.searchParams.set('lang', getWebLang());
    url.searchParams.set('type', kind);
    return url.href;
  }
  function link(label, href, className, external = false) {
    const anchor = node('a', className, label); anchor.href = href;
    if (external) { anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; }
    return anchor;
  }
  function applyText(root = document) {
    root.querySelectorAll('[data-report-text]').forEach(element => { element.textContent = text(element.dataset.reportText); });
  }
  function renderEmpty(root, kind = 'empty', retry) {
    root.replaceChildren();
    const articleKind = kind === 'articles';
    const title = kind === 'error' ? 'errorTitle' : kind === 'notfound' ? 'notFoundTitle' : articleKind ? 'deepEmptyTitle' : 'emptyTitle';
    const body = kind === 'error' ? 'errorBody' : kind === 'notfound' ? 'notFoundBody' : articleKind ? 'deepEmptyBody' : 'emptyBody';
    const section = node('section', 'report-empty');
    const mark = node('div', 'report-empty-mark', '旅'); mark.setAttribute('aria-hidden', 'true');
    section.append(mark, node(root.id === 'report-reader' ? 'h1' : 'h3', '', text(title)), node('p', '', text(body)));
    const actions = node('div', 'report-empty-links');
    if (retry) {
      const button = node('button', '', text('retry')); button.type = 'button'; button.addEventListener('click', retry); actions.appendChild(button);
    }
    if (kind === 'notfound') actions.appendChild(link(text('backReports'), listHref()));
    const otherKind = articleKind ? 'reports' : 'articles';
    const other = link(text(articleKind ? 'reports' : 'backArticles'), listHref(otherKind));
    other.dataset.journalKind = otherKind;
    actions.appendChild(other); section.appendChild(actions); root.appendChild(section);
  }
  function photo(src, alt, className, badge, onError) {
    const safe = JournalReportData.safeUrl(src);
    if (!safe) return null;
    const figure = node('figure', className), img = node('img');
    img.src = safe; img.alt = str(alt); img.loading = 'lazy';
    img.addEventListener('error', () => { figure.hidden = true; onError?.(); });
    figure.appendChild(img);
    if (badge) figure.appendChild(node('span', 'photo-badge', badge));
    return figure;
  }
  function renderList(root, reports) {
    root.replaceChildren();
    for (const report of reports) {
      const url = new URL('report_info.html', window.location.href); url.searchParams.set('id', report.id); url.searchParams.set('lang', getWebLang());
      const card = node('article', 'zine-entry-card');
      const meta = node('div', 'card-meta-top'); meta.append(node('span', '', str(report.area) || str(report.city)), node('span', '', str(report.date)));
      card.appendChild(meta);
      const image = photo(report.coverImg, report.title, 'arch-photo');
      if (image) card.appendChild(image);
      const heading = node('h3'); heading.appendChild(link(report.title, url.href)); card.appendChild(heading);
      if (str(report.summary)) card.appendChild(node('p', 'card-summary', report.summary));
      if (report.isSample) card.appendChild(node('p', 'report-sample-label', sampleNotice()));
      card.appendChild(link(text('read'), url.href, 'card-footer-link'));
      root.appendChild(card);
    }
  }
  function appendBlocks(parent, blocks) {
    const allowed = new Set(['p', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'strong', 'em', 's', 'code', 'blockquote', 'br', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'a']);
    for (const block of Array.isArray(blocks) ? blocks : []) {
      if (!block || typeof block !== 'object') continue;
      if (typeof block.text === 'string') { parent.appendChild(document.createTextNode(block.text)); continue; }
      if (!allowed.has(block.tag)) continue;
      const safe = block.tag === 'a' ? JournalReportData.safeUrl(block.href) : '';
      const element = safe ? link('', safe, '', true) : node(block.tag === 'a' ? 'span' : block.tag);
      if (block.tag === 'ol' && Number.isInteger(block.start) && block.start > 0) element.start = block.start;
      appendBlocks(element, block.children);
      if (block.tag === 'table') {
        const scroller = node('div', 'report-table-scroll');
        scroller.tabIndex = 0; scroller.setAttribute('role', 'region');
        scroller.setAttribute('aria-label', [...element.querySelectorAll('th')].map(cell => cell.textContent).join(' / ') || 'Table');
        scroller.appendChild(element); parent.appendChild(scroller);
      } else parent.appendChild(element);
    }
  }
  function renderDetail(root, report) {
    root.replaceChildren();
    const paper = node('article', 'editorial-paper');
    const cover = node('section', 'mag-cover-split');
    const coverImage = photo(report.coverImg, report.title, 'cover-photo-box', 'PHOTO 01', () => cover.classList.add('without-photo'));
    if (coverImage) { coverImage.querySelector('img').loading = 'eager'; cover.appendChild(coverImage); }
    else cover.classList.add('without-photo');
    const intro = node('div', 'cover-info-box');
    intro.append(node('span', 'issue-kicker', str(report.area) || str(report.city)), node('h1', '', report.title));
    const byline = [report.date, report.author].map(str).filter(Boolean).join(' ｜ ');
    if (byline) intro.appendChild(node('div', 'cover-meta-sub', byline));
    if (str(report.summary)) intro.appendChild(node('p', 'report-intro', report.summary));
    cover.appendChild(intro); paper.appendChild(cover);
    if (report.isSample) paper.appendChild(node('aside', 'report-sample-notice', sampleNotice()));
    const sections = Array.isArray(report.sections) ? report.sections.filter(section => section && (str(section.heading) || str(section.content) || section.blocks?.length)) : [];
    const usedPhotos = new Set([JournalReportData.safeUrl(report.coverImg)].filter(Boolean));
    for (const section of sections) {
      const band = node('section', 'latte-story-band'), safe = JournalReportData.safeUrl(section.image);
      const image = photo(section.image, section.caption || section.heading, 'arch-portrait-frame', '', () => band.classList.add('without-photo'));
      if (image) { band.appendChild(image); usedPhotos.add(safe); }
      else band.classList.add('without-photo');
      const story = node('div', 'editor-story-col'); story.appendChild(node('span', 'micro-tag', 'FIELD NOTES'));
      if (str(section.heading)) story.appendChild(node('h2', '', section.heading));
      if (Array.isArray(section.blocks) && section.blocks.length) {
        const body = node('div', 'report-rich-content'); appendBlocks(body, section.blocks); story.appendChild(body);
      } else if (str(section.content)) story.appendChild(node('p', '', section.content));
      if (str(section.caption) && image) image.appendChild(node('figcaption', '', section.caption));
      band.appendChild(story); paper.appendChild(band);
    }
    const photos = Array.isArray(report.photos) ? report.photos.filter(item => {
      const safe = JournalReportData.safeUrl(item?.image);
      if (!safe || usedPhotos.has(safe)) return false;
      usedPhotos.add(safe); return true;
    }) : [];
    if (photos.length) {
      const gallery = node('section', 'gallery-editorial-band'), grid = node('div', 'four-photo-grid');
      gallery.appendChild(bandTitle('VISUAL ARCHIVE', text('photoTitle')));
      for (const [index, item] of photos.entries()) {
        const figure = photo(item.image, item.caption, 'num-shot-card', `PHOTO ${String(index + 1).padStart(2, '0')}`, () => {
          if ([...grid.children].every(child => child.hidden)) gallery.hidden = true;
        });
        if (str(item.caption)) figure.appendChild(node('figcaption', '', item.caption));
        grid.appendChild(figure);
      }
      gallery.appendChild(grid); paper.appendChild(gallery);
    }
    const nearby = Array.isArray(report.nearby) ? report.nearby.filter(item => item && str(item.name)).slice(0, 3) : [];
    if (nearby.length) {
      const band = node('section', 'nearby-extension-band'), grid = node('div', 'nearby-three-grid');
      band.appendChild(bandTitle('AROUND THE NEIGHBORHOOD', text('nearbyTitle')));
      for (const item of nearby) {
        const card = node('article', 'nearby-zine-card'), image = photo(item.image, item.name, '');
        if (image) card.appendChild(image);
        card.appendChild(node('h3', '', item.name));
        if (str(item.description)) card.appendChild(node('p', '', item.description));
        if (str(item.walk)) card.appendChild(node('p', '', item.walk));
        const map = JournalReportData.safeUrl(item.mapUrl) || `https://maps.google.com/?q=${encodeURIComponent([item.name, item.address].map(str).filter(Boolean).join(' '))}`;
        card.appendChild(link('Google Maps ↗', map, 'zine-inline-link', true)); grid.appendChild(card);
      }
      band.appendChild(grid); paper.appendChild(band);
    }
    const info = report.practicalInfo && typeof report.practicalInfo === 'object' ? report.practicalInfo : {};
    if ([info.name, info.address, info.addressEn, info.businessHours, info.mapUrl].some(str)) {
      const directory = node('section', 'spot-notes-footer'); directory.appendChild(node('h2', '', text('directory')));
      for (const value of [info.name, info.address, info.addressEn, info.businessHours]) if (str(value)) directory.appendChild(node('p', '', value));
      const map = JournalReportData.safeUrl(info.mapUrl) || `https://maps.google.com/?q=${encodeURIComponent([info.name, info.address, report.city].map(str).filter(Boolean).join(' '))}`;
      directory.appendChild(link('Google Maps ↗', map, 'zine-inline-link', true));
      if (typeof AFFILIATE_HUB !== 'undefined') directory.appendChild(link(text('stays'), AFFILIATE_HUB.getTripSearchUrl([report.city, info.name || report.title].map(str).filter(Boolean).join(' ')), 'zine-inline-link', true));
      paper.appendChild(directory);
    }
    const brand = node('footer', 'zine-colophon-brand-section'), copyBlock = node('div');
    const brandName = node('div', 'colophon-brand-head'); brandName.append(node('strong', '', '台灣吃喝玩樂'), node('span', '', 'TAIWAN ROAM'));
    const slogan = node('h2', 'colophon-slogan'); slogan.dataset.footerText = 'slogan';
    const about = node('p', 'colophon-copy'); about.dataset.footerText = 'about';
    const contact = link('', 'mailto:himydream.studio0220@gmail.com', 'zine-inline-link'); contact.dataset.footerText = 'footerContactLabel';
    copyBlock.append(brandName, slogan, about, contact); brand.append(copyBlock, node('aside', 'colophon-ornament-col', 'Curated with Love'));
    paper.appendChild(brand); root.appendChild(paper);
    if (typeof SiteFooter !== 'undefined') SiteFooter.apply(getWebLang(), brand);
    if (typeof AffiliateMarket !== 'undefined') AffiliateMarket.refresh(root);
  }
  function bandTitle(label, heading) {
    const title = node('header', 'band-title-row'); title.append(node('span', '', label), node('h2', '', heading)); return title;
  }
  function initList() {
    const tabs = document.getElementById('journal-type-tabs');
    if (!tabs) return;
    const deep = document.getElementById('section-weekend-hop'), panel = document.getElementById('journal-reports-panel');
    const status = document.getElementById('report-list-status'), grid = document.getElementById('editorial-reports-grid');
    let cached, pending;
    applyText(panel); tabs.setAttribute('aria-label', text('typesLabel'));
    for (const anchor of tabs.querySelectorAll('[data-journal-kind]')) {
      anchor.textContent = text(anchor.dataset.journalKind); anchor.href = listHref(anchor.dataset.journalKind);
    }
    async function loadList(force = false) {
      status.replaceChildren(node('p', 'report-loading', text('loading'))); grid.replaceChildren(); panel.setAttribute('aria-busy', 'true');
      if (!pending || force) pending = JournalReportData.load(getWebLang());
      const request = pending, result = cached && !force ? cached : await request;
      if (request !== pending) return;
      cached = result; panel.setAttribute('aria-busy', 'false'); status.replaceChildren();
      if (result.state === 'ready') {
        renderList(grid, result.reports);
        if (result.fallback) status.appendChild(node('p', 'report-notice', text('fallback')));
      } else renderEmpty(status, result.state, result.state === 'error' ? () => loadList(true) : undefined);
    }
    function applyKind() {
      const kind = new URLSearchParams(window.location.search).get('type') === 'reports' ? 'reports' : 'articles';
      deep.hidden = kind !== 'articles'; panel.hidden = kind !== 'reports';
      for (const anchor of tabs.querySelectorAll('[data-journal-kind]')) {
        if (anchor.dataset.journalKind === kind) anchor.setAttribute('aria-current', 'page');
        else anchor.removeAttribute('aria-current');
      }
      if (typeof closeArticleModalDirect === 'function') closeArticleModalDirect();
      if (kind === 'reports') loadList();
    }
    document.addEventListener('click', event => {
      const anchor = event.target.closest?.('a[data-journal-kind]');
      if (!anchor || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault(); window.history.pushState({}, '', anchor.href); applyKind();
    });
    window.addEventListener('popstate', applyKind); applyKind();
  }
  async function initDetail() {
    const root = document.getElementById('report-reader');
    if (!root) return;
    const back = document.getElementById('report-back-link'); back.href = listHref(); back.textContent = text('backReports');
    root.replaceChildren(node('p', 'report-loading', text('loading'))); root.setAttribute('aria-busy', 'true');
    const params = new URLSearchParams(window.location.search);
    if (!params.get('id') && !params.get('slug')) {
      renderEmpty(root, 'notfound'); root.setAttribute('aria-busy', 'false'); return;
    }
    const data = await JournalReportData.load(getWebLang());
    document.getElementById('report-language-notice').replaceChildren();
    if (data.state === 'error') renderEmpty(root, 'error', initDetail);
    else {
      const report = JournalReportData.resolve(params, data.reports);
      if (report) {
        renderDetail(root, report);
        document.title = `${report.title}｜Taiwan Roam`;
        document.getElementById('report-page-description').content = str(report.summary) || report.title;
        if (data.fallback) document.getElementById('report-language-notice').appendChild(node('p', 'report-notice', text('fallback')));
      } else renderEmpty(root, 'notfound');
    }
    root.setAttribute('aria-busy', 'false');
  }
  return { text, renderEmpty, renderList, renderDetail, initList, initDetail };
})();
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', () => {
  JournalReports.initList(); JournalReports.initDetail();
});
