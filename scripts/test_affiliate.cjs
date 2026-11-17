const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function setup({language='zh-TW', stored=new Map(), anchors=[]}={}) {
  const events = {};
  const context = {URL,URLSearchParams,AbortController,setTimeout,clearTimeout,WeakMap,
    navigator:{language},location:{href:'https://taiwanroam.tw/index.html'},
    localStorage:{getItem:key=>stored.get(key),setItem:(key,value)=>stored.set(key,value),removeItem:key=>stored.delete(key)},
    CustomEvent:class {constructor(type, options){this.type=type;this.detail=options.detail;}},
    document:{readyState:'loading',addEventListener:(key, fn)=>{events[key]=fn;},dispatchEvent(){},
      querySelectorAll:selector=>selector==='a[href]'?anchors:[], querySelector:()=>null},
    fetch:async()=>({ok:true,json:async()=>({country_code:'JP'})})
  };
  context.window=context;
  vm.createContext(context);
  for (const file of ['affiliate-config','affiliate-market','affiliate']) vm.runInContext(fs.readFileSync(`js/${file}.js`,'utf8'),context);
  return {context,events,stored,market:context.AffiliateMarket,hub:vm.runInContext('AFFILIATE_HUB',context)};
}

test('H5 config and synchronous snapshot match the shared non-pet matrix', () => {
  const {context}=setup();
  const config=JSON.parse(fs.readFileSync('config/affiliate.json'));
  assert.deepEqual(JSON.parse(JSON.stringify(context.TAIWAN_AFFILIATE_CONFIG)),config);
  assert.equal(config.tracking.klookAid,'123436');
  assert.equal(Object.keys(config.platforms).some(key=>key.startsWith('pet')),false);
  for(const [country,expected] of Object.entries({TW:'TW',CN:'TW',HK:'HK_MO',MY:'SG_MY',JP:'JP',KR:'KR',TH:'TH',VN:'VN',ID:'ID',PH:'SOUTH_ASIA',IN:'SOUTH_ASIA',US:'GLOBAL'})) assert.equal(context.AffiliateMarket.regionForCountry(country),expected);
});

test('legacy hub API routes services, currency and exact city/district destinations', async () => {
  const {market,hub}=setup();
  await market.selectMarket('JP');
  const hotel=new URL(hub.getHotelUrl('台北市 北投區'));
  assert.equal(hotel.hostname,'jp.trip.com');
  assert.equal(hotel.searchParams.get('city'),'617');
  assert.equal(hotel.searchParams.get('keyword'),'北投溫泉');
  assert.equal(hotel.searchParams.get('curr'),'JPY');
  assert.equal(hotel.searchParams.get('trip_sub3'),'D20272275');
  assert.equal(new URL(hub.getTourUrl('123-test')).pathname,'/ja/activity/123-test/');
  await market.selectMarket('GLOBAL');
  for(const [fn,host] of Object.entries({getFlightUrl:'expedia.tpk.lu',getHotelUrl:'hotels.tpk.lu',getCharterUrl:'viator.tpk.lu',getSimOptionsUrl:'yesim.tpk.lu',getHsrUrl:'12go.tpk.lu'})) assert.equal(new URL(hub[fn]()).hostname,host);
  assert.equal(hub.getSouvenirUrl(),market.config.platforms.souvenirs.url);
  assert.equal(hub.getCampingFoodUrl(),market.config.platforms.camping.url);
  assert.equal(hub.getUberEatsUrl(),market.config.platforms.delivery.url);
});

test('product links and encoded Klook redirects keep products without nesting another provider', async () => {
  const {market}=setup();
  await market.selectMarket('KR');
  const url=new URL(market.resolve('https://affiliate.klook.com/redirect?aid=106452&k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Factivity%2F9909-tour'));
  assert.equal(url.searchParams.get('aid'),'123436');
  assert.equal(url.searchParams.get('_currency'),'KRW');
  assert.equal(new URL(url.searchParams.get('k_site')).pathname,'/ko/activity/9909-tour');
  await market.selectMarket('GLOBAL');
  assert.equal(new URL(market.resolve('https://www.klook.com/?aid=123436')).hostname,'viator.tpk.lu');
  assert.equal(new URL(market.resolve('https://www.klook.com/zh-TW/activity/9909-tour?aid=old')).pathname,'/en-US/activity/9909-tour');
  assert.equal(new URL(market.resolve('https://affiliate.klook.com/redirect?k_site=https%3A%2F%2Fwww.klook.com%2Fzh-TW%2Fcar-rentals%2F')).hostname,'viator.tpk.lu');
  assert.equal(market.resolve('https://maps.google.com/?q=Taipei'),'https://maps.google.com/?q=Taipei');
  assert.equal(market.resolve('https://trip.com.evil.test/hotels'),'https://trip.com.evil.test/hotels');
});

test('switching a rendered link back from global restores its original hotel keyword', async () => {
  let href='https://tw.trip.com/hotels/list?city=765&keyword=九份';
  const anchor={dataset:{},children:[],textContent:'Trip.com',getAttribute:key=>key==='href'?href:'',setAttribute:(key,value)=>{if(key==='href')href=value;}};
  const {market}=setup({anchors:[anchor]});
  await market.selectMarket('GLOBAL');
  assert.equal(new URL(href).hostname,'hotels.tpk.lu');
  assert.equal(anchor.textContent,'Hotels.com');
  await market.selectMarket('HK_MO');
  assert.equal(new URL(href).hostname,'hk.trip.com');
  assert.equal(new URL(href).searchParams.get('keyword'),'九份');
  assert.equal(new URL(href).searchParams.get('city'),'765');
  assert.equal(anchor.textContent,'Trip.com');
});

test('manual market persists independently of site language and auto can be restored offline', async () => {
  const {market,context,stored}=setup({language:'ja-JP'});
  await market.selectMarket('GLOBAL');
  stored.set('taiwan_travel_lang','zh-TW');
  assert.equal(setup({stored}).market.market,'GLOBAL');
  context.fetch=async()=>{throw Error('offline');};
  await market.selectMarket('AUTO');
  assert.equal(market.market,'JP');
  assert.equal(stored.has('twfun-affiliate-region'),false);
  assert.equal(stored.get('taiwan_travel_lang'),'zh-TW');
});

test('new DOM cards and window.open receive the current market without waiting at click time', async () => {
  const {context,events,market}=setup();
  let observe,opened;
  context.MutationObserver=class {constructor(callback){observe=callback;}observe(){}};
  context.document.body={};
  context.document.querySelector=selector=>selector==='script[src$="global-language-bar.js"]'?{}:null;
  context.open=(url,target)=>{opened={url,target};};
  await events.DOMContentLoaded();
  assert.equal(market.market,'JP');
  let href='https://tw.trip.com/hotels/list?keyword=Taipei';
  const anchor={nodeType:1,dataset:{},children:[],textContent:'Trip.com',matches:()=>true,querySelectorAll:()=>[],
    getAttribute:key=>key==='href'?href:'',setAttribute:(key,value)=>{if(key==='href')href=value;}};
  observe([{type:'childList',addedNodes:[anchor]}]);
  assert.equal(new URL(href).hostname,'jp.trip.com');
  await market.selectMarket('GLOBAL');
  context.open('https://tw.trip.com/flights/?Allianceid=old','_blank');
  assert.equal(new URL(opened.url).hostname,'expedia.tpk.lu');
  assert.equal(opened.target,'_blank');
});

test('all active pages with booking links load the generated matrix before the router', () => {
  const files=fs.readdirSync('.').filter(name=>name.endsWith('.html'));
  files.push(...fs.readdirSync('app').filter(name=>name.endsWith('.html')).map(name=>`app/${name}`));
  for(const folder of fs.readdirSync('blog',{withFileTypes:true}).filter(d=>d.isDirectory())) {
    files.push(...fs.readdirSync(`blog/${folder.name}`).filter(name=>name.endsWith('.html')).map(name=>`blog/${folder.name}/${name}`));
  }
  for(const file of files) {
    const html=fs.readFileSync(file,'utf8');
    if(!/klook\.com|trip\.com|js\/affiliate\.js/.test(html))continue;
    assert.ok(html.indexOf('affiliate-config.js')>=0,file);
    assert.ok(html.indexOf('affiliate-market.js')>html.indexOf('affiliate-config.js'),file);
    assert.equal(html.includes('aid=106452'),false,file);
  }
});
