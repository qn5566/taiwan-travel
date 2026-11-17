const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
function setup(seed={}) {
 const values=new Map(Object.entries(seed));let blocked=false;
 const storage={getItem:key=>{if(blocked)throw Error('blocked');return values.get(key)||null;},setItem:(key,value)=>{if(blocked)throw Error('blocked');values.set(key,value);}};
 const document={readyState:'loading',addEventListener(){},getElementById(){return null;},querySelectorAll(){return [];}};
 const window={location:{href:'https://example.com/',search:''},requestAnimationFrame(){},addEventListener(){}};
 const context=vm.createContext({window,document,URL,URLSearchParams,localStorage:storage,console:{error(){}},setTimeout(){},clearTimeout(){}});
 vm.runInContext(fs.readFileSync('js/favorites_i18n.js','utf8'),context);
 vm.runInContext(fs.readFileSync('js/favorites.js','utf8'),context);
 const manager=window.FavoritesManager;
 for(const method of ['updateBadges','syncActiveButtons','showToast','triggerSparkleEffect']) manager[method]=()=>{};
 manager.isDrawerOpen=()=>false;
 return {manager,values,dictionaries:window.FAVORITES_I18N,block(){blocked=true;}};
}
test('all four favorite categories persist and stable IDs toggle across translated names',()=>{
 const {manager,values}=setup();
 for(const category of ['spot','itinerary','restaurant','cafe']) assert.equal(manager.toggle({id:category+'1',name:category,category}),true);
 assert.equal(manager.items.length,4);assert.equal(JSON.parse(values.get('tw_roam_favorites_v2')).length,4);
 const restored=setup(Object.fromEntries(values)).manager;restored.loadStorage();assert.equal(restored.items.length,4);
 assert.equal(restored.toggle({id:'cafe1',name:'翻譯後的店名',category:'cafe'}),false);
 assert.equal(restored.items.length,3);assert.equal(restored.isFavorited('cafe1'),false);
});
test('favorite payloads round-trip quotes, HTML, Unicode and line breaks without inline JS',()=>{
 const {manager}=setup();const item={id:'cafe_"\'&<>',name:'O\'Brien "咖啡" & <script>壞字串</script>\n第二行',category:'cafe',tags:['"','\'']};
 const attrs=manager.buttonAttributes(item);
 assert.ok(!attrs.includes('onclick'));assert.ok(!attrs.includes('<script>'));
 assert.deepEqual(JSON.parse(decodeURIComponent(attrs.match(/data-favorite-item="([^"]+)"/)[1])),item);
 manager.toggle(item);assert.equal(manager.items[0].name,item.name);
});
test('legacy names migrate and malformed storage does not crash favorites',()=>{
 const {manager,values}=setup({tw_roam_web_favs:JSON.stringify(['Old Café',null,42])});manager.loadStorage();
 assert.equal(manager.items.length,1);assert.equal(manager.items[0].name,'Old Café');assert.ok(values.has('tw_roam_favorites_v2'));
 for(const raw of ['{broken','{}','null','[null,1,"bad",{"name":"Valid","tags":{}}]']){
  const m=setup({tw_roam_favorites_v2:raw}).manager;assert.doesNotThrow(()=>m.loadStorage());assert.ok(Array.isArray(m.items));assert.doesNotThrow(()=>m.isFavorited('anything'));
 }
});
test('disabled browser storage retains in-memory favorites and reports persistence failure',()=>{
 const env=setup();env.block();assert.doesNotThrow(()=>env.manager.loadStorage());assert.equal(env.manager.toggle({id:'safe',name:'Cafe',category:'cafe'}),true);assert.equal(env.manager.items.length,1);assert.equal(env.manager.saveStorage(),false);
});
test('print preview escapes saved data and keeps affiliate URLs',()=>{
 const {manager}=setup();manager.toggle({id:'one',category:'restaurant',name:'<img src=x onerror=alert(1)>',desc:'<script>bad()</script>',img:'javascript:alert(1)',klookUrl:'https://www.klook.com/?aid=123436',tripUrl:'https://www.trip.com/?Allianceid=9507030'});
 const html=manager.buildPdfHtml();assert.ok(html.includes('&lt;script&gt;bad()&lt;/script&gt;'));assert.ok(!html.includes('<script>bad()'));assert.ok(!html.includes('src="javascript:'));assert.ok(html.includes('aid=123436'));assert.ok(html.includes('Allianceid=9507030'));
});

test('all site locales have complete favorites dictionaries and interpolate templates',()=>{
 const {manager,dictionaries}=setup();const keys=Object.keys(dictionaries.en).sort();
 assert.equal(Object.keys(dictionaries).length,12);
 for(const [lang,dict] of Object.entries(dictionaries)){
  assert.deepEqual(Object.keys(dict).sort(),keys,lang);
  for(const value of Object.values(dict)) assert.ok(typeof value==='string'&&value.trim(),lang);
  manager.setLanguage(lang);
  assert.ok(manager.t('saved',{name:'Test Café'}).includes('Test Café'));
  assert.ok(manager.t('pdfCount',{count:7}).includes('7'));
  assert.ok(manager.t('pdfDate',{date:'2026.11.17'}).includes('2026.11.17'));
 }
 manager.setLanguage('unsupported');assert.equal(manager.t('title'),dictionaries.en.title);
});
test('switching locale preserves saved data and translates legacy category labels in PDF',()=>{
 const {manager,values,dictionaries}=setup();manager.toggle({id:'c1',name:'Original Cafe',category:'cafe',city:'全台',desc:'編輯部嚴選打卡推薦'});
 const stored=values.get('tw_roam_favorites_v2');manager.currentTab='cafe';manager.searchKeyword='Original';
 for(const lang of Object.keys(dictionaries)){
  manager.setLanguage(lang);const html=manager.buildPdfHtml();
  assert.ok(html.includes(dictionaries[lang].cafe));assert.ok(html.includes(dictionaries[lang].recommended));
  assert.ok(html.includes('Original Cafe'));assert.equal(values.get('tw_roam_favorites_v2'),stored);
  assert.equal(manager.currentTab,'cafe');assert.equal(manager.searchKeyword,'Original');
 }
});
test('each favorites page loads the shared dictionary before the manager',()=>{
 let count=0;
 for(const file of fs.readdirSync('.').filter(file=>file.endsWith('.html'))){
  const html=fs.readFileSync(file,'utf8');if(!html.includes('src="js/favorites.js"'))continue;
  count++;assert.ok(html.indexOf('src="js/favorites_i18n.js"')>=0,file);
  assert.ok(html.indexOf('src="js/favorites_i18n.js"')<html.indexOf('src="js/favorites.js"'),file);
 }
 assert.equal(count,11);
});
