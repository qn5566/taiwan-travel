const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
function setup(){const context=vm.createContext({URL,mapToContentLang:lang=>['zh','zh-TW'].includes(lang)?'zh':lang==='de'?'en':lang});vm.runInContext(fs.readFileSync('js/michelin_article_data.js','utf8'),context);return vm.runInContext('MichelinArticleData',context);}
const directory={stars:[{id:'a',name:'A'},{id:'b',name:'B'}],bib:[]};
test('articles match the fixed restaurant ID even after restaurant reordering',()=>{
 const data=setup(),articles=data.articles([{id:'article-b',restaurantId:'b',title:'B article',status:'published'},
 {id:'draft',restaurantId:'a',title:'Draft',status:'draft'},{id:'dup',restaurantId:'b',title:'Duplicate'}]);
 assert.equal(articles.length,1);
 assert.equal(data.resolve('b',{restaurants:[...directory.stars].reverse(),articles}).article.id,'article-b');
 assert.equal(data.resolve('a',{restaurants:directory.stars,articles}).article,undefined);
 assert.equal(data.resolve('article-b',{restaurants:directory.stars,articles}).article,undefined);
});
test('empty publication stays empty and network failure remains distinct from no article',async()=>{
 const data=setup();
 const empty=await data.load('en',async file=>file==='michelin.json'?directory:[]);
 assert.equal(empty.articles.length,0);assert.equal(empty.articleState,'ready');
 const failed=await data.load('en',async file=>{if(file==='michelin.json')return directory;throw Error('HTTP 500');});
 assert.equal(failed.articleState,'error');assert.equal(failed.restaurants.length,2);
});
test('missing translation can use Chinese, but a valid draft-only language never borrows published articles',async()=>{
 const data=setup(),calls=[];
 const fallback=await data.load('ja',async(file,lang)=>{if(file==='michelin.json')return directory;calls.push(lang);if(lang==='ja')throw Error('HTTP 404');return [{id:'one',restaurantId:'a',title:'中文'}];});
 assert.equal(fallback.fallback,true);assert.deepEqual(calls,['ja','zh-TW']);
 const drafts=await data.load('ja',async file=>file==='michelin.json'?directory:[{id:'one',restaurantId:'a',title:'Draft',published:false}]);
 assert.equal(drafts.fallback,false);assert.equal(drafts.articles.length,0);
});
test('bundled editions preserve seven menu entries in three original languages and historical award years',()=>{
 const data=setup();let menus;
 for(const language of ['zh','en','ja','ko','es','th','vi','ms','fil','hi','id','de']){
  const records=JSON.parse(fs.readFileSync(`data/michelin_articles/${language}.json`,'utf8'));
  const [article]=data.articles(records);assert.ok(article);assert.equal(article.restaurantId,'star-1');assert.equal(article.language,language);
  assert.equal(article.sections.length,12);assert.equal(article.sections.filter(s=>s.layout==='guide').length,5);
  assert.equal(article.honors.years.length,8);assert.match(article.honors.years.at(-1),/2025/);
  assert.equal(article.menuVariants.length,3);assert.ok(article.menuVariants.every(v=>v.items.length===7));
  if(menus)assert.deepEqual(article.menuVariants,menus);else menus=article.menuVariants;
  const restaurants=data.restaurants(JSON.parse(fs.readFileSync(`data/michelin_restaurants/${language}.json`,'utf8')));
  assert.ok(restaurants.some(r=>r.id===article.restaurantId));
 }
});
test('executable URLs and malformed datasets are rejected',()=>{
 const data=setup();for(const value of ['javascript:alert(1)','file:///tmp/test','data:text/html,x'])assert.equal(data.safeUrl(value),'');
 assert.throws(()=>data.restaurants([]));assert.throws(()=>data.articles({}));
});
