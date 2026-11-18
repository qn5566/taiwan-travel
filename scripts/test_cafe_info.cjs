const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
function setup() {
 const context=vm.createContext({URL,URLSearchParams,Map,Set,fetch:async()=>{throw Error("unexpected fetch")}, TAIWAN_CAFES_DATA:[{id:'cafe_1',name:'Fallback cafe'},{id:'cafe_4',name:'No article cafe'}],mapToContentLang:lang=>lang==='zh-TW'?'zh':lang==='de'?'en':lang});
 vm.runInContext(fs.readFileSync('js/cafe_info.js','utf8'),context);
 return vm.runInContext('CafeArticleData',context);
}
const articles=JSON.parse(fs.readFileSync('data/cafe_articles.zh.json','utf8'));
test('cafe IDs join to their own articles regardless of order, slugs resolve, and missing IDs never pick a default article',()=>{
 const api=setup();const cafes=[{id:'cafe_1'},{id:'cafe_2'},{id:'cafe_3'},{id:'cafe_4'}];
 for(const id of ['cafe_1','cafe_2','cafe_3']) {
  const result=api.resolve(new URLSearchParams({id}),cafes,articles.slice().reverse());
  assert.equal(result.cafe.id,id);assert.equal(result.article.cafeId,id);
 }
 assert.equal(api.resolve(new URLSearchParams({slug:articles[1].slug}),cafes,articles).cafe.id,'cafe_2');
 const noArticle=api.resolve(new URLSearchParams({id:'cafe_4'}),cafes,articles);
 assert.equal(noArticle.cafe.id,'cafe_4');assert.equal(noArticle.article,undefined);
 for(const query of ['', 'id=invalid']) assert.equal(api.resolve(new URLSearchParams(query),cafes,articles).article,undefined);
});
test('language endpoint requests retain stable IDs and fill absent translations with Chinese articles',async()=>{
 const api=setup();const calls=[];
 const result=await api.load('ko',async(file,lang)=>{
  calls.push([file,lang]);
  if(file==='cafes.json')return [{id:'cafe_1',name:lang==='ko'?'Korean cafe':'中文店名'}];
  return lang==='ko'?[{...articles[0],title:'한국어 기사'}]:articles;
 });
 assert.equal(calls.length,4);assert.ok(calls.some(([file,lang])=>file==='cafe_articles.json'&&lang==='ko'));
 assert.equal(result.cafes.find(c=>c.id==='cafe_1').name,'Korean cafe');
 assert.equal(result.articles.find(a=>a.cafeId==='cafe_1').title,'한국어 기사');
 assert.ok(result.articles.find(a=>a.cafeId==='cafe_2'));
 assert.equal(result.translatedArticleIds.has('cafe_article_2'),false);
});
test('network and malformed JSON use the bundled snapshot; a successful empty article API stays empty',async()=>{
 const api=setup();
 for(const fetcher of [async()=>{throw Error('offline')},async()=>({error:'bad payload'})]){
  const data=await api.load('zh-TW',fetcher,async()=>({ok:true,json:async()=>articles}));
  assert.equal(data.offline,true);assert.equal(data.articles.length,3);assert.equal(data.cafes.length,2);
 }
 const empty=await api.load('zh-TW',async()=>[],async()=>{throw Error('must not request snapshot')});
 assert.equal(empty.articles.length,0);assert.equal(empty.offline,false);
});
test('detail URL handling rejects unsafe links and all seven interfaces have complete labels',()=>{
 const api=setup();
 assert.equal(api.safeUrl('javascript:alert(1)'), '');assert.equal(api.safeUrl('data:text/html,x'),'');
 assert.equal(api.safeUrl('https://maps.google.com/'),'https://maps.google.com/');
 for(const lang of ['zh-TW','en','ja','ko','es','de','th']) for(const key of ['back','emptyTitle','emptyBody','loading','offline','fallback','language','retry']) assert.ok(api.text(lang,key));
 const html=fs.readFileSync('cafe.html','utf8');assert.ok(html.includes('cafe_info.html?id=${encodeURIComponent(item.id)}&lang=${encodeURIComponent(getWebLang())}'));
 const detail=fs.readFileSync('cafe_info.html','utf8');assert.ok(!detail.includes('CAFE_DATABASE'));assert.ok(!detail.includes('coffee.html'));assert.ok(!detail.includes('SHOW TO STAFF'));assert.ok(detail.includes('js/cafe_info.js'));
});

test('menus join the same article and cafe across languages without relabeling a Chinese fallback',async()=>{
 const api=setup(), article=articles[0], calls=[];
 const zh={...article,menuHtml:'<p>中文菜單</p>'};
 const data={menuArticles:{zh:[zh],ko:[{...article,title:'한국어 기사',menuHtml:undefined}]}};
 const menus=await api.loadMenus(article,'ko',data,async(file,lang)=>{
  calls.push(lang);
  if(lang==='en')return [{...article,menuHtml:'<p>English menu</p>'}];
  return [{...article,cafeId:'wrong-cafe',menuHtml:'<p>Wrong venue</p>'}];
 });
 assert.deepEqual(Array.from(menus,m=>m.lang),['zh','en']);
 assert.deepEqual(calls,['en','ja']);
 assert.equal(menus[0].html,zh.menuHtml);
});

test('missing, empty, malformed, and unavailable menu translations stay hidden',async()=>{
 const api=setup();
 const data={menuArticles:{zh:[],en:[{...articles[0],menuHtml:'  '}],ja:null}};
 const menus=await api.loadMenus(articles[0],'zh-TW',data,async()=>{throw Error('offline')});
 assert.equal(menus.length,0);
 assert.equal((await api.loadMenus(undefined,'zh-TW',data,async()=>{throw Error('must not fetch')})).length,0);
});
