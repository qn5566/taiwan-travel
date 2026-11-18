/** Michelin articles join restaurantId to michelin.json IDs, never to card rank. */
const MichelinArticleData = (() => {
  const str = value => typeof value === 'string' ? value.trim() : '';
  function articles(payload) {
    if (!Array.isArray(payload)) throw Error('Expected article array');
    const seen=new Set();
    return payload.filter(item=>{
      if(!item || !str(item.id) || !str(item.restaurantId) || !str(item.title) || item.published === false || (item.status && item.status!=='published') || seen.has(item.restaurantId))return false;
      seen.add(item.restaurantId);return true;
    });
  }
  function restaurants(payload) {
    if(!payload || !Array.isArray(payload.stars) || !Array.isArray(payload.bib))throw Error('Expected restaurant directory');
    return [...payload.stars,...payload.bib].filter(item=>item && str(item.id));
  }
  function safeUrl(value) {try {const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:'';}catch(_){return '';}}
  async function load(lang, remote=fetchContentJson, local=typeof fetch==='function'?fetch:null) {
    async function read(file, language, convert, folder) {
      const code=language==='de'?'de':mapToContentLang(language);
      const localPreview=typeof window!=='undefined' && ['127.0.0.1','localhost','[::1]'].includes(window.location.hostname)
        && (!window.CONTENT_BASE_URL || window.CONTENT_BASE_URL.startsWith('https://raw.githubusercontent.com/qn5566/ActivityEvent/'));
      async function bundle(){if(!local)return null;let response;try{response=await local(`data/${folder}/${code}.json`,{cache:'no-store'});}catch(_){}return response?.ok?convert(await response.json()):null;}
      if(localPreview){const result=await bundle();if(result)return result;}
      try{return convert(await remote(file,language,file==='michelin_articles.json' && language==='de'?'de':undefined));}
      catch(error){const result=await bundle();if(result)return result;throw error;}
    }
    const tasks=await Promise.allSettled([
      read('michelin.json',lang,restaurants,'michelin_restaurants'),
      (async()=>{
        try{return {records:await read('michelin_articles.json',lang,articles,'michelin_articles'),fallback:false};}
        catch(error){
          if(!/\bHTTP 404\b/.test(error.message || ''))throw error;
          if(mapToContentLang(lang)!=='zh'){
            try{return {records:await read('michelin_articles.json','zh-TW',articles,'michelin_articles'),fallback:true};}
            catch(other){if(!/\bHTTP 404\b/.test(other.message || ''))throw other;}
          }
          return {records:[],fallback:false};
        }
      })()
    ]);
    return {restaurants:tasks[0].status==='fulfilled'?tasks[0].value:[],
      restaurantState:tasks[0].status==='fulfilled'?'ready':'error',
      articles:tasks[1].status==='fulfilled'?tasks[1].value.records:[],
      articleState:tasks[1].status==='fulfilled'?'ready':'error',
      fallback:tasks[1].status==='fulfilled' && tasks[1].value.fallback};
  }
  function resolve(id,data){return {restaurant:data.restaurants.find(r=>r.id===id),article:data.articles.find(a=>a.restaurantId===id)};}
  return {articles,restaurants,safeUrl,load,resolve};
})();
