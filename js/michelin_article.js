/* Data-driven Michelin magazine template, based on the PM's 01-mi.html. */
const MichelinArticle = (() => {
  const labels={
    'zh-TW':['返回米其林餐廳','餐廳文章準備中','目前尚未刊登這間餐廳的完整文章，您仍可查看餐廳資訊。','找不到這間餐廳','請返回米其林列表選擇餐廳。','暫時無法載入文章','重新載入','招牌菜單','用餐須知','餐廳資訊','官網預約 ↗','附近住宿 ↗','範例內容：圖片為設計稿示意，價格、菜單與訂位規則尚待查核。','設計稿示意照片，非餐廳實拍','此篇文章暫以繁體中文顯示。','空間與招牌料理','中英並排','中日並排'],
    en:['Back to Michelin restaurants','This restaurant’s story is being prepared','The full article is not available yet. Restaurant information is shown below.','Restaurant not found','Return to the Michelin directory to choose a restaurant.','The article could not be loaded','Try again','Signature menu','Dining essentials','Restaurant information','Official reservations ↗','Nearby stays ↗','Sample content: design illustrations; prices, menus and booking policies await verification.','Design illustration; not a photograph of this restaurant','This article is currently shown in Traditional Chinese.','Ambiance & signature dishes','Chinese / English','Chinese / Japanese'],
    ja:['ミシュラン一覧へ','記事を準備しています','記事はまだ公開されていません。店舗情報をご覧いただけます。','店舗が見つかりません','一覧から店舗をお選びください。','記事を読み込めません','再読み込み','看板メニュー','ご来店前のご案内','店舗情報','公式予約 ↗','周辺の宿泊施設 ↗','サンプル：写真はイメージです。料金・メニュー・予約条件は確認待ちです。','イメージ写真・店舗の実際の写真ではありません','この記事は繁体字中国語で表示されています。','空間と看板料理','中国語・英語','中国語・日本語'],
    ko:['미쉐린 목록으로','기사를 준비 중입니다','아직 기사가 없습니다. 아래 매장 정보를 확인하세요.','매장을 찾을 수 없습니다','목록에서 매장을 선택하세요.','기사를 불러올 수 없습니다','다시 시도','대표 메뉴','방문 안내','매장 정보','공식 예약 ↗','주변 숙소 ↗','예시 콘텐츠: 이미지는 디자인용이며 가격, 메뉴와 예약 정책은 확인이 필요합니다.','디자인용 이미지이며 실제 매장 사진이 아닙니다','이 기사는 중국어 번체로 표시됩니다.','공간과 대표 요리','중국어 / 영어','중국어 / 일본어'],
    es:['Volver a Michelin','Artículo en preparación','Aún no hay artículo. Consulta los datos del restaurante.','Restaurante no encontrado','Selecciona un restaurante del directorio.','No se pudo cargar el artículo','Reintentar','Menú de especialidades','Información para comensales','Datos del restaurante','Reservas oficiales ↗','Alojamiento cercano ↗','Ejemplo: imágenes ilustrativas; precios, menús y reservas pendientes de verificación.','Imagen ilustrativa, no es una foto del restaurante','Este artículo se muestra en chino tradicional.','Ambiente y especialidades','Chino / Inglés','Chino / Japonés'],
    de:['Zurück zum Michelin-Verzeichnis','Der Artikel wird vorbereitet','Ein vollständiger Artikel ist noch nicht verfügbar. Die Restaurantinformationen stehen unten.','Restaurant nicht gefunden','Wähle ein Restaurant im Verzeichnis.','Der Artikel konnte nicht geladen werden','Erneut versuchen','Spezialitätenkarte','Hinweise für Gäste','Restaurantinformationen','Offizielle Reservierung ↗','Unterkünfte in der Nähe ↗','Beispielinhalt: illustrative Bilder; Preise, Menüs und Reservierungsregeln sind noch zu prüfen.','Illustration, kein Foto dieses Restaurants','Dieser Artikel wird auf traditionellem Chinesisch angezeigt.','Ambiente und Spezialitäten','Chinesisch / Englisch','Chinesisch / Japanisch'],
    th:['กลับสู่ร้านอาหารมิชลิน','กำลังเตรียมบทความ','ยังไม่มีบทความฉบับเต็ม ดูข้อมูลร้านอาหารด้านล่างได้','ไม่พบร้านอาหาร','เลือกร้านอาหารจากรายการ','ไม่สามารถโหลดบทความได้','ลองอีกครั้ง','เมนูแนะนำ','ข้อควรรู้ก่อนรับประทาน','ข้อมูลร้านอาหาร','จองกับเว็บไซต์ทางการ ↗','ที่พักใกล้เคียง ↗','เนื้อหาตัวอย่าง: รูปภาพประกอบ ราคา เมนู และเงื่อนไขการจองยังรอตรวจสอบ','ภาพประกอบ ไม่ใช่ภาพถ่ายจริงของร้าน','บทความนี้แสดงเป็นภาษาจีนตัวเต็ม','บรรยากาศและอาหารแนะนำ','จีน / อังกฤษ','จีน / ญี่ปุ่น']
  };
  const names=['back','empty','emptyBody','notFound','notFoundBody','error','retry','menu','guide','info','booking','stays','sample','illustration','fallback','gallery','dualEn','dualJa'];
  const t=(key,lang=getWebLang())=>(labels[lang==='zh'?'zh-TW':lang]||labels.en)[names.indexOf(key)]||key;
  const str=value=>typeof value==='string'?value.trim():'';
  const node=(tag,text,className)=>{const e=document.createElement(tag);if(text!=null)e.textContent=text;if(className)e.className=className;return e;};
  function link(text,href){const a=node('a',text);a.href=href;a.target='_blank';a.rel='noopener noreferrer';return a;}
  function back(){const a=node('a',t('back'));a.href='cafe.html?'+new URLSearchParams({tab:'michelin-guide',lang:getWebLang()});return a;}
  function blocks(root,items){
    const allowed=new Set(['p','h3','h4','h5','h6','ul','ol','li','strong','em','s','code','blockquote','br','hr','table','thead','tbody','tr','th','td','a']);
    for(const item of Array.isArray(items)?items:[]){
      if(!item || typeof item!=='object')continue;
      if(typeof item.text==='string'){root.appendChild(document.createTextNode(item.text));continue;}
      if(!allowed.has(item.tag))continue;
      const href=item.tag==='a'?MichelinArticleData.safeUrl(item.href):'';
      const element=href?link('',href):node(item.tag==='a'?'span':item.tag);
      if(item.tag==='ol'&&Number.isInteger(item.start)&&item.start>0)element.start=item.start;
      blocks(element,item.children);
      if(item.tag==='table'){const scroll=node('div',null,'mi-table-scroll');scroll.tabIndex=0;scroll.appendChild(element);root.appendChild(scroll);}else root.appendChild(element);
    }
  }
  function picture(src,alt,illustration=false){
    const safe=MichelinArticleData.safeUrl(src);if(!safe)return null;
    const figure=node('figure'),img=node('img');img.src=safe;img.alt=illustration?t('illustration'):str(alt);img.loading='lazy';
    img.addEventListener('error',()=>{figure.hidden=true;});figure.appendChild(img);
    if(illustration || str(alt))figure.appendChild(node('figcaption',illustration?t('illustration'):alt));return figure;
  }
  function band(title,className){const section=node('section',null,`mi-band ${className||''}`),inner=node('div',null,'mi-container');if(title)inner.appendChild(node('h2',title));section.appendChild(inner);return {section,inner};}
  function renderInfo(root,article,restaurant){
    const info=article?.practicalInfo||{},group=band(t('info'),'mi-info'),name=info.name||restaurant?.name;
    if(name)group.inner.appendChild(node('h3',name));
    for(const value of [info.address||restaurant?.address,info.addressEn,info.businessHours,info.phone,info.transport])if(str(value))group.inner.appendChild(node('p',value));
    const actions=node('div',null,'mi-actions');
    const map=MichelinArticleData.safeUrl(info.mapUrl||restaurant?.mapUrl) || (name?`https://maps.google.com/?q=${encodeURIComponent([name,info.address||restaurant?.address].filter(Boolean).join(' '))}`:'');
    if(map)actions.appendChild(link('Google Maps ↗',map));
    const booking=MichelinArticleData.safeUrl(article?.bookingUrl||restaurant?.bookingUrl||restaurant?.links?.find(l=>l.type==='official')?.url||restaurant?.website);
    if(booking)actions.appendChild(link(t('booking'),booking));
    if(typeof AFFILIATE_HUB!=='undefined' && (article?.city||restaurant?.city)){
      const hotel=MichelinArticleData.safeUrl(AFFILIATE_HUB.getHotelUrl([article?.city||restaurant.city,name].filter(Boolean).join(' ')));
      if(hotel)actions.appendChild(link(t('stays'),hotel));
    }
    group.inner.appendChild(actions);root.appendChild(group.section);
  }
  function renderMenus(root,article){
    const variants=Array.isArray(article.menuVariants)?article.menuVariants.filter(v=>v && str(v.language) && Array.isArray(v.items)&&v.items.length):[];
    if(!variants.length)return;
    const group=band(t('menu'),'mi-menu'),tabs=node('div',null,'mi-menu-tabs'),grid=node('div',null,'mi-menu-grid');
    const display={zh:'繁體中文',en:'English',ja:'日本語'};
    const modes=variants.map(v=>({label:display[v.language]||v.language,items:[v],id:v.language}));
    const zh=variants.find(v=>v.language==='zh'),en=variants.find(v=>v.language==='en'),ja=variants.find(v=>v.language==='ja');
    if(zh&&ja)modes.unshift({label:t('dualJa'),items:[zh,ja],id:'zh-ja'});
    if(zh&&en)modes.unshift({label:t('dualEn'),items:[zh,en],id:'zh-en'});
    function select(mode){
      for(const b of tabs.children)b.setAttribute('aria-pressed',String(b.dataset.mode===mode.id));
      grid.replaceChildren();grid.classList.toggle('single',mode.items.length===1);
      for(const variant of mode.items){
        const board=node('section',null,'mi-menu-board');board.lang=variant.language==='zh'?'zh-Hant':variant.language;
        board.appendChild(node('h3',variant.title||display[variant.language]||variant.language));const list=node('ul');
        for(const item of variant.items){const row=node('li'),copy=node('div');copy.append(node('strong',item.name||''),node('p',item.description||''));row.append(copy,node('span',item.price||'','mi-price'));list.appendChild(row);}
        board.appendChild(list);grid.appendChild(board);
      }
    }
    for(const mode of modes){const b=node('button',mode.label);b.type='button';b.dataset.mode=mode.id;b.onclick=()=>select(mode);tabs.appendChild(b);}
    tabs.setAttribute('aria-label',t('menu'));group.inner.append(tabs,grid);if(str(article.menuNote))group.inner.appendChild(node('p',article.menuNote,'mi-menu-note'));
    root.appendChild(group.section);const lang=getWebLang();select(modes.find(m=>m.id===(lang==='zh-TW'?'zh-en':lang))||modes[0]);
  }
  // Keep the PM's DOM and CSS intact; populate editable article fields safely.
  function renderPM(root,article,restaurant){
    const template=document.getElementById('michelin-pm-template');
    if(!template || article.source?.file!=='米其林餐廳/01-mi.html')return false;
    root.classList.add('pm-edition');
    root.replaceChildren(template.content.cloneNode(true));
    const $=selector=>root.querySelector(selector);
    const text=(selector,value)=>{const element=$(selector);if(element)element.textContent=value||'';};
    const fill=(element,section,items=section?.blocks)=>{
      element.replaceChildren();
      if(Array.isArray(items)&&items.length)blocks(element,items);
      else if(str(section?.content))element.appendChild(node('p',section.content));
    };
    const image=(element,src,alt,role)=>{
      const safe=MichelinArticleData.safeUrl(src);
      if(!safe){element.removeAttribute('src');element.hidden=true;return;}
      element.src=safe;element.alt=alt||'';
      if(role==='illustration')element.title=t('illustration');
    };
    text('h1',article.title);text('.hero-en-display',article.enTitle);
    text('.nav-crumb .active',[article.title,article.enTitle?.split(' — ')[0]].filter(Boolean).join(' '));
    const returnLink=$('.nav-back');
    returnLink.href=back().href;
    returnLink.setAttribute('aria-label',t('back'));
    returnLink.title=t('back');
    returnLink.querySelector('span').textContent=({'zh-TW':'返回',zh:'返回',en:'Back',ja:'戻る',ko:'뒤로',es:'Volver',de:'Zurück',th:'กลับ'})[getWebLang()]||'Back';
    for(const a of root.querySelectorAll('.nav-crumb a')){const url=new URL(a.href);url.searchParams.set('lang',getWebLang());a.href=url.href;}
    image($('.hero-bg-img'),article.coverImg,article.title,article.coverImageRole);
    $('.hero-quick-specs').replaceChildren(...(article.quickFacts||[]).map(value=>node('span',value)));
    const honors=article.honors||{};
    text('.michelin-honor-block h2',honors.heading);text('.michelin-honor-block p',honors.content);
    $('.years-ribbon').replaceChildren(...(honors.years||[]).map(year=>node('span',year)));
    text('.honor-big-stat strong',String(honors.years?.length||0).padStart(2,'0'));
    const sections=article.sections||[],intro=sections.find(s=>s.layout==='intro');
    if(intro){
      const essay=$('.editorial-essay');text('.editorial-essay h3',intro.heading);
      essay.querySelectorAll('p').forEach(p=>p.remove());
      const copy=node('div');fill(copy,intro,intro.blocks?.filter(b=>b.tag&&b.tag!=='blockquote'));
      essay.append(...copy.childNodes);essay.querySelector('p')?.classList.add('drop-cap');
      const quote=intro.blocks?.find(b=>b.tag==='blockquote');
      if(quote){$('.editorial-pullquote-box blockquote').replaceChildren();blocks($('.editorial-pullquote-box blockquote'),quote.children);}
      const cite=intro.blocks?.find(b=>typeof b.text==='string');if(cite)text('.editorial-pullquote-box cite',cite.text);
    }else $('.story-magazine-grid').hidden=true;
    const ambiance=sections.find(s=>s.layout==='ambiance');
    if(ambiance){
      image($('.spatial-wide-img img'),ambiance.image,ambiance.heading,ambiance.imageRole);
      const card=$('.spatial-floating-card');card.replaceChildren(node('h3',ambiance.heading));
      const copy=node('div');fill(copy,ambiance,ambiance.blocks?.filter(b=>b.tag));card.append(...copy.childNodes);
      const tags=node('div',null,'ambiance-tags');for(const b of ambiance.blocks||[])if(b.text)tags.appendChild(node('span',b.text));card.appendChild(tags);
    }else $('.spatial-feature-stage').hidden=true;
    const dishes=sections.filter(s=>s.layout==='dish'),cards=[...root.querySelectorAll('.dish-editorial-item')];
    dishes.forEach((dish,index)=>{
      const card=cards[index]||cards.at(-1).cloneNode(true);if(!cards[index])$('.bottom-duo-dishes').appendChild(card);
      image(card.querySelector('img'),dish.image,dish.heading,dish.imageRole);
      const body=card.querySelector('.dish-text-body');body.replaceChildren();
      const label=dish.blocks?.find(b=>b.text);if(label)body.appendChild(node('span',label.text,'dish-index-label'));
      body.appendChild(node('h4',dish.heading));const copy=node('div');fill(copy,dish,dish.blocks?.filter(b=>b.tag));body.append(...copy.childNodes);
    });
    cards.slice(dishes.length).forEach(card=>card.remove());
    // Menu modes retain the PM's default Chinese/English pairing and styling.
    const variants=article.menuVariants||[],tabs=$('.lang-tabs'),grid=$('#menuBoardsGrid');tabs.replaceChildren();grid.replaceChildren();
    const modes=[['zh-en','中英並排',['zh','en']],['zh-ja','中日並排',['zh','ja']],['zh','繁體中文',['zh']],['en','English',['en']],['ja','日本語',['ja']]]
      .filter(mode=>mode[2].every(lang=>variants.some(v=>v.language===lang)));
    for(const variant of variants){
      const board=node('div',null,'menu-board-card');board.dataset.language=variant.language;board.lang=variant.language==='zh'?'zh-Hant':variant.language;
      board.appendChild(node('div',variant.title,'board-lang-title'));const list=node('ul',null,'menu-items-list');
      for(const item of variant.items||[]){const row=node('li'),copy=node('div');copy.append(node('span',item.name,'m-name'),node('span',item.description,'m-desc'));row.append(copy,node('span',item.price,'m-price'));list.appendChild(row);}
      board.appendChild(list);grid.appendChild(board);
    }
    function select(mode){
      for(const button of tabs.children){const active=button.dataset.mode===mode[0];button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));}
      for(const board of grid.children)board.hidden=!mode[2].includes(board.dataset.language);
      grid.classList.toggle('single',mode[2].length===1);
    }
    for(const mode of modes){const button=node('button',mode[1],'lang-tab-btn');button.type='button';button.dataset.mode=mode[0];button.onclick=()=>select(mode);tabs.appendChild(button);}
    if(modes.length)select(modes[0]);else $('.trilingual-menu-band').hidden=true;
    text('.trilingual-menu-band .container-narrow > p',article.menuNote);
    // Original English/Japanese editorial copy is preserved in the CMS dataset.
    const guides=sections.filter(s=>s.layout==='guide');
    root.querySelectorAll('.etiquette-card').forEach((card,index)=>{
      const guide=guides[index];if(!guide){card.remove();return;}
      for(const [lang,selector] of [['en','.en-guide'],['ja','.jp-guide']]){
        const source=(article.language===lang?guide:article.source?.guideOriginals?.[guide.key]?.[lang])||guide;
        const target=card.querySelector(selector);target.replaceChildren(node('h3',source.heading));const copy=node('div');fill(copy,source);target.append(...copy.childNodes);
      }
    });
    const info=article.practicalInfo||{};
    text('.concierge-info strong',info.name||restaurant?.name);
    const address=[info.address,info.transport?`（${info.transport.replace('／',' / ')}）`:''].join('');
    const detail=$('.concierge-info p');detail.replaceChildren(document.createTextNode(`📍 ${address}`),node('br'),document.createTextNode(`🕒 ${info.businessHours||''} ｜ ☎️ ${info.phone||''}`));
    const actions=$('.concierge-actions'),map=MichelinArticleData.safeUrl(info.mapUrl||restaurant?.mapUrl),booking=MichelinArticleData.safeUrl(article.bookingUrl||restaurant?.bookingUrl);
    const mapLink=actions.querySelector('a:first-child'),bookingLink=actions.querySelector('a:last-child');
    if(map)mapLink.href=map;else mapLink.remove();if(booking)bookingLink.href=booking;else bookingLink.remove();
    const hotel=actions.querySelector('a[href*="trip.com"]');
    if(hotel&&typeof AFFILIATE_HUB!=='undefined'){
      const url=new URL(hotel.href);url.searchParams.set('Allianceid',AFFILIATE_HUB.tripAllianceId);url.searchParams.set('SID',AFFILIATE_HUB.tripSid);url.searchParams.set('trip_sub3',AFFILIATE_HUB.tripSub3);hotel.href=url.href;
    }
    if(article.isSample)$('.editorial-stamp-box').title=article.editorialNote||t('sample');
    document.documentElement.lang=article.language==='zh'?'zh-Hant':article.language||'zh-Hant';
    return true;
  }
  function render(root,article,restaurant){
    root.classList.remove('pm-edition');
    if(renderPM(root,article,restaurant))return;
    root.replaceChildren();const nav=node('nav',null,'mi-reader-nav');nav.append(back(),node('span','TAIWAN ROAM · MICHELIN EDITION'));root.appendChild(nav);
    const hero=node('header',null,'mi-hero');const image=picture(article.coverImg,article.title,article.coverImageRole==='illustration');if(image){image.querySelector('img').loading='eager';hero.appendChild(image);}
    const intro=node('div',null,'mi-hero-copy');if(restaurant?.stars||restaurant?.badge)intro.appendChild(node('span',restaurant.stars||restaurant.badge,'mi-award'));
    intro.appendChild(node('h1',article.title));if(str(article.enTitle))intro.appendChild(node('p',article.enTitle,'mi-en-title'));
    const facts=node('ul',null,'mi-quick-facts');for(const value of article.quickFacts||[])facts.appendChild(node('li',value));intro.appendChild(facts);hero.appendChild(intro);root.appendChild(hero);
    if(article.isSample)root.appendChild(node('aside',t('sample'),'mi-sample'));
    const honors=article.honors||{};
    if(str(honors.heading)||str(honors.content)||(honors.years||[]).length){const group=band(honors.heading,'mi-dark mi-honors');if(str(honors.content))group.inner.appendChild(node('p',honors.content));const years=node('ul',null,'mi-years');for(const year of honors.years||[])years.appendChild(node('li',year));group.inner.appendChild(years);if(str(honors.note))group.inner.appendChild(node('p',honors.note,'mi-period-note'));root.appendChild(group.section);}
    const sections=Array.isArray(article.sections)?article.sections:[];
    function content(parent,section){if(Array.isArray(section.blocks)&&section.blocks.length)blocks(parent,section.blocks);else if(str(section.content))parent.appendChild(node('p',section.content));}
    for(const section of sections.filter(s=>s && (!s.layout||s.layout==='intro'))){const group=band(section.heading,'mi-dark');const image=picture(section.image,section.caption||section.heading,section.imageRole==='illustration');if(image)group.inner.appendChild(image);content(group.inner,section);root.appendChild(group.section);}
    const illustrated=sections.filter(s=>s && ['ambiance','dish'].includes(s.layout));
    if(illustrated.length){const gallery=band(t('gallery'),'mi-gallery'),grid=node('div',null,'mi-dish-grid');for(const section of illustrated){const card=node('article',null,section.layout==='ambiance'?'mi-ambiance':'mi-dish');const image=picture(section.image,section.caption||section.heading,section.imageRole==='illustration');if(image)card.appendChild(image);const body=node('div',null,'mi-dish-copy');if(str(section.heading))body.appendChild(node('h3',section.heading));content(body,section);card.appendChild(body);grid.appendChild(card);}gallery.inner.appendChild(grid);root.appendChild(gallery.section);}
    const photos=Array.isArray(article.photos)?article.photos.filter(p=>p && MichelinArticleData.safeUrl(p.image)):[];
    if(photos.length){const group=band(t('gallery'),'mi-gallery'),grid=node('div',null,'mi-dish-grid');for(const photo of photos)grid.appendChild(picture(photo.image,photo.caption,photo.imageRole==='illustration'));group.inner.appendChild(grid);root.appendChild(group.section);}
    renderMenus(root,article);
    const guides=sections.filter(s=>s && s.layout==='guide');if(guides.length){const group=band(t('guide'),'mi-guides'),grid=node('div',null,'mi-guide-grid');for(const section of guides){const item=node('article');if(str(section.heading))item.appendChild(node('h3',section.heading));content(item,section);grid.appendChild(item);}group.inner.appendChild(grid);root.appendChild(group.section);}
    renderInfo(root,article,restaurant);
  }
  async function init(){
    const root=document.getElementById('michelin-article-reader');if(!root)return;
    root.setAttribute('aria-busy','true');root.replaceChildren(node('p','…','mi-loading'));
    const id=new URLSearchParams(location.search).get('id')||'star-1';
    const data=await MichelinArticleData.load(getWebLang()),{article,restaurant}=MichelinArticleData.resolve(id,data);
    if(article){
      render(root,article,restaurant);document.title=article.seo?.title||`${article.title}｜Taiwan Roam`;
      const canonical=new URL('https://taiwanroam.tw/michelin_info.html');canonical.searchParams.set('id',id);canonical.searchParams.set('lang',getWebLang());
      for(const selector of ['meta[name="description"]','meta[property="og:description"]','meta[name="twitter:description"]']){const meta=document.querySelector(selector);if(meta)meta.content=article.seo?.description||article.summary||article.title;}
      for(const selector of ['meta[property="og:title"]','meta[name="twitter:title"]']){const meta=document.querySelector(selector);if(meta)meta.content=document.title;}
      const canonicalLink=document.querySelector('link[rel="canonical"]');if(canonicalLink)canonicalLink.href=canonical.href;
      const ogUrl=document.querySelector('meta[property="og:url"]');if(ogUrl)ogUrl.content=canonical.href;
      for(const alternate of document.querySelectorAll('link[rel="alternate"][hreflang]')){const url=new URL(canonical);url.searchParams.set('lang',alternate.hreflang==='x-default'?'zh-TW':alternate.hreflang);alternate.href=url.href;}
      if(data.fallback)root.prepend(node('p',t('fallback'),'mi-sample'));
    }
    else if(restaurant){empty(root,data.articleState==='error'?'error':'empty',data.articleState==='error');renderInfo(root,null,restaurant);}
    else empty(root,data.restaurantState==='error' || data.articleState==='error'?'error':'notFound',data.restaurantState==='error' || data.articleState==='error');
    root.setAttribute('aria-busy','false');
  }
  function empty(root,kind,retry=false){root.classList.remove('pm-edition');root.replaceChildren();const group=band(t(kind),'mi-empty');if(t(kind+'Body')!==kind+'Body')group.inner.appendChild(node('p',t(kind+'Body')));group.inner.prepend(back());if(retry){const b=node('button',t('retry'));b.type='button';b.onclick=init;group.inner.appendChild(b);}root.appendChild(group.section);}
  return {init,render,t};
})();
document.addEventListener('DOMContentLoaded',MichelinArticle.init);
