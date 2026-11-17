/* Shared matrix from config/affiliate.json, loaded through affiliate-config.js. */
(function (scope) {
  'use strict';
  function regionForCountry(config, country) {
    country = String(country || '').toUpperCase();
    return Object.keys(config.regions).find(key => config.regions[key].countries.includes(country)) || 'GLOBAL';
  }

  function buildLink(config, regionKey, category, destination = {}) {
    const region = config.regions[regionKey] || config.regions.GLOBAL;
    const platform = key => config.platforms[key].url;
    if (category === 'carRental' || category === 'transit' && !['JP', 'KR'].includes(regionKey)) return platform(category);
    if (!region.tripHost) return platform({flights:'expedia', hotel:'hotels', charter:'viator', tour:'viator', esim:'esim', transit:'transit'}[category] || category);
    if (category === 'flights' || category === 'hotel' || category === 'transit' && regionKey === 'JP') {
      const path = {flights:'/flights/', hotel:'/hotels/list', transit:'/trains/taiwan-high-speed-rail/'}[category];
      const url = new URL('https://' + region.tripHost + path);
      Object.entries(config.tracking.trip).forEach(([key, value]) => url.searchParams.set(key, value));
      url.searchParams.set('curr', region.currency);
      if (category === 'hotel') {
        const city = config.cities.find(c => c.name === destination.city || c.nameEn === destination.city);
        const district = config.districts.find(d => d.city === city?.name && d.name === destination.district);
        if (city?.tripCityId) url.searchParams.set('city', city.tripCityId);
        const keyword = district?.keyword || destination.keyword || (city?.tripCityId ? '' : city?.keyword);
        if (keyword) url.searchParams.set('keyword', keyword);
      }
      return url.href;
    }
    if (['charter','tour','esim','transit'].includes(category)) {
      const queries = {charter:'Taiwan Private Car Charter', tour:'Taiwan Day Tour', esim:'Taiwan eSIM'};
      const path = category === 'transit' ? '/activity/382-thsr-3-day-pass-taipei/' : '/search/result/';
      const url = new URL('https://www.klook.com/' + region.klookLocale + path);
      if (queries[category]) url.searchParams.set('query', queries[category]);
      url.searchParams.set('aid', config.tracking.klookAid);
      url.searchParams.set('currency', region.currency);
      return url.href;
    }
    return platform(category);
  }

  function languageFallback(config, language) {
    const code = String(language || '').toLowerCase();
    if (code.startsWith('zh-hk') || code.startsWith('zh-mo')) return 'HK_MO';
    if (code.startsWith('zh')) return 'TW';
    if (code.startsWith('en-sg') || code.startsWith('ms')) return 'SG_MY';
    return {ja:'JP', ko:'KR', th:'TH', vi:'VN', id:'ID', fil:'SOUTH_ASIA', hi:'SOUTH_ASIA'}[code.split('-')[0]] || 'GLOBAL';
  }

  async function fetchJson(url, timeoutMs) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {signal:controller.signal});
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return await response.json();
    } finally { clearTimeout(timer); }
  }

  async function detectRegion(config, language, storage) {
    const read = key => { try { return storage?.getItem(key); } catch (_) { return null; } };
    const manual = read('twfun-affiliate-region');
    if (config.regions[manual]) return manual;
    try {
      const cached = JSON.parse(read('twfun-affiliate-geo') || 'null');
      if (cached && /^[A-Z]{2}$/.test(cached.country) && Date.now() - cached.time >= 0 && Date.now() - cached.time < config.geo.cacheTtlMs) return regionForCountry(config, cached.country);
      const geo = await fetchJson(config.geo.endpoint, config.geo.timeoutMs);
      const country = String(geo.country_code || '').toUpperCase();
      if (geo.error || !/^[A-Z]{2}$/.test(country)) throw new Error('Invalid country');
      try { storage?.setItem('twfun-affiliate-geo', JSON.stringify({country, time:Date.now()})); } catch (_) {}
      return regionForCountry(config, country);
    } catch (_) { return languageFallback(config, language); }
  }

  const config = scope.TAIWAN_AFFILIATE_CONFIG;
  if (!config) return;
  let storage;
  try { storage = scope.localStorage; } catch (_) {}
  let market = languageFallback(config, scope.navigator?.language || 'zh-TW');
  try {
    const manual = storage?.getItem('twfun-affiliate-region');
    if (config.regions[manual]) market = manual;
  } catch (_) {}
  let revision = 0;
  const originalLinks = new WeakMap();

  function destination(value) {
    if (typeof value !== 'string') return value || {};
    const text = value.replace(/台/g, '臺');
    const city = config.cities.find(c => text.includes(c.name) || value.toLowerCase().includes(c.nameEn.toLowerCase()));
    const district = config.districts.find(d => (!city || city.name === d.city) && value.includes(d.name));
    return {city:city?.name || district?.city, district:district?.name, keyword:value};
  }

  function link(category, context) {
    return buildLink(config, market, category, destination(context));
  }

  function resolve(value, category) {
    let url;
    try { url = new URL(String(value), scope.location?.href || 'https://taiwanroam.tw/'); } catch (_) { return value; }
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return value;
    const host = url.hostname.toLowerCase();
    const region = config.regions[market];
    if (host === 'trip.com' || host.endsWith('.trip.com')) {
      const generic = /^\/(flights|hotels)(\/list)?\/?$/.test(url.pathname) || url.pathname === '/';
      if (/^\/trains\/taiwan(-high-speed-rail)?\/?$/.test(url.pathname)) return link('transit');
      if (generic) {
        const type = url.pathname.startsWith('/flights') ? 'flights' : 'hotel';
        const city = config.cities.find(c => c.tripCityId === url.searchParams.get('city'));
        const context = destination(url.searchParams.get('keyword') || city?.name || '');
        if (!context.city && city) context.city = city.name;
        const target = new URL(link(type, context));
        if (region.tripHost) {
          for (const [key, val] of url.searchParams) {
            if (!['allianceid','sid','trip_sub3','curr','currency'].includes(key.toLowerCase())) target.searchParams.set(key, val);
          }
        }
        return target.href;
      }
      for (const key of [...url.searchParams.keys()]) {
        if (['allianceid','sid','trip_sub3','curr','currency'].includes(key.toLowerCase())) url.searchParams.delete(key);
      }
      Object.entries(config.tracking.trip).forEach(([key, val]) => url.searchParams.set(key, val));
      url.searchParams.set('curr', region.currency);
      if (region.tripHost) url.hostname = region.tripHost;
      return url.href;
    }
    if (host === 'www.booking.com' || host === 'booking.com' || host === 'affone.me' && url.pathname === '/s/bQeO4') {
      let keyword = url.searchParams.get('ss') || '';
      try { keyword = new URL(url.searchParams.get('url')).searchParams.get('ss') || keyword; } catch (_) {}
      return link('hotel', keyword);
    }
    if (host === 'affiliate.klook.com') {
      const target = url.searchParams.get('k_site');
      if (!target) return link(category || 'charter');
      const redirected = resolve(target, category);
      let targetHost;
      try { targetHost = new URL(redirected).hostname; } catch (_) { return value; }
      if (!['www.klook.com','klook.com'].includes(targetHost)) return redirected;
      url.searchParams.set('k_site', redirected);
      url.searchParams.set('aid', config.tracking.klookAid);
      url.searchParams.set('_currency', region.currency);
      return url.href;
    }
    if (host === 'www.klook.com' || host === 'klook.com') {
      const path = url.pathname.replace(/^\/(zh-TW|zh-HK|zh-CN|en-US|en-SG|en|ja|ko|th|vi|id|ms)(?=\/|$)/, '');
      const query = url.searchParams.get('query') || url.searchParams.get('keyword') || '';
      const inferred = category || (/^\/(car-rentals|airport-transfers|city\/19-taiwan-car-charter)/.test(path) ? 'charter'
        : /^\/wifi-sim-card/.test(path) || /esim|網卡/i.test(query) ? 'esim'
        : /charter|包車/i.test(query) ? 'charter' : path === '/' || path === '' ? 'tour' : null);
      if (!region.tripHost && inferred && !path.startsWith('/activity/')) return link(inferred);
      url.pathname = '/' + region.klookLocale + (path || '/');
      url.searchParams.delete('keyword');
      if (query) url.searchParams.set('query', query);
      url.searchParams.set('aid', config.tracking.klookAid);
      url.searchParams.set('currency', region.currency);
      return url.href;
    }
    if (host === 'onelink.one' && url.pathname === '/s/YoWYV') return link(category || 'delivery');
    for (const platform of Object.values(config.platforms)) {
      const canonical = new URL(platform.url);
      if (url.hostname === canonical.hostname && url.pathname === canonical.pathname) return platform.url;
    }
    return value;
  }

  function refreshAnchor(anchor) {
    const href = anchor.getAttribute('href');
    const saved = originalLinks.get(anchor);
    const source = saved?.rendered === href ? saved.source : href;
    const category = anchor.dataset.affiliateCategory || (String(source).includes('onelink.one/s/YoWYV')
      ? (/萬家福|伴手禮|souvenir|gift/i.test(anchor.textContent) ? 'souvenirs'
        : /露營食材|食材箱|camping food/i.test(anchor.textContent) ? 'camping' : undefined) : undefined);
    const rendered = resolve(source, category);
    originalLinks.set(anchor, {source, rendered});
    if (rendered !== href) anchor.setAttribute('href', rendered);
    const parsed = (() => {try {return new URL(rendered);} catch (_) {return null;}})();
    if (!parsed || !/(^|\.)(klook\.com|trip\.com|tpk\.lu|affckr\.site|afftck\.com|aftck\.com|affclkr\.online|afftkr\.site|vbtrax\.com|linkgo\.one|affone\.site)$/.test(parsed.hostname)) return;
    const rel = new Set((anchor.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    ['sponsored','noopener','noreferrer'].forEach(value => rel.add(value));
    anchor.setAttribute('rel', [...rel].join(' '));
    // Brand names on plain text buttons must match the final provider.
    if (!anchor.children.length) {
      const name = parsed.hostname === 'hotels.tpk.lu' ? 'Hotels.com' : parsed.hostname.endsWith('.trip.com') ? 'Trip.com'
        : parsed.hostname === 'viator.tpk.lu' ? 'Viator' : parsed.hostname === 'yesim.tpk.lu' ? 'Yesim'
        : parsed.hostname.endsWith('klook.com') ? 'Klook' : null;
      if (name && /Trip\.com|Booking\.com|Hotels\.com|Klook|Viator|Yesim/.test(anchor.textContent)) anchor.textContent = anchor.textContent.replace(/Trip\.com|Booking\.com|Hotels\.com|Klook|Viator|Yesim/g, name);
    }
  }

  function refresh(root = document) {
    if (root.matches?.('a[href]')) refreshAnchor(root);
    root.querySelectorAll?.('a[href]').forEach(refreshAnchor);
    document.querySelectorAll('[data-affiliate-market]').forEach(select => {
      select.value = market;
      select.title = `${market} · ${config.regions[market].currency}`;
    });
  }

  function update(key) {
    if (!config.regions[key]) return;
    market = key;
    refresh();
    document.dispatchEvent(new CustomEvent('affiliate:change', {detail:{market, currency:config.regions[market].currency}}));
  }

  async function selectMarket(key) {
    const version = ++revision;
    try {
      if (key === 'AUTO') storage?.removeItem('twfun-affiliate-region');
      else if (config.regions[key]) storage?.setItem('twfun-affiliate-region', key);
    } catch (_) {}
    if (key !== 'AUTO') { update(key); return; }
    const next = await detectRegion(config, scope.navigator?.language, storage);
    if (version === revision) update(next);
  }

  function mount(container) {
    if (!container || container.querySelector('[data-affiliate-market]')) return;
    const label = document.createElement('label');
    label.className = 'clean-lang-select-wrap affiliate-market-control';
    const text = document.createElement('span');
    text.textContent = '市場／幣別 · Market';
    const select = document.createElement('select');
    // Keep separate from language selects; i18n.js updates .clean-lang-select.
    select.className = 'affiliate-market-select';
    select.dataset.affiliateMarket = '';
    select.setAttribute('aria-label', '市場與幣別 / Market and currency');
    for (const [key, text] of [['AUTO','自動偵測 / Automatic'], ...Object.entries(config.regions).map(([key, r]) => [key, `${key.replace(/_/g,' / ')} · ${r.currency}`])]) {
      const option = document.createElement('option'); option.value = key; option.textContent = text; select.appendChild(option);
    }
    select.value = market;
    select.addEventListener('change', () => selectMarket(select.value));
    label.append(text, select);
    container.appendChild(label);
  }

  scope.AffiliateMarket = {get market() {return market;}, config, link, resolve, refresh, selectMarket, mount, regionForCountry:country=>regionForCountry(config,country)};

  async function init() {
    // Keep the shared language bar dedicated to language selection.
    let controls;
    if (!document.querySelector('.top-lang-inner') && !document.querySelector('script[src$="global-language-bar.js"]')) {
      controls = document.createElement('aside');
      controls.style.cssText = 'position:sticky;top:0;z-index:1000;padding:8px 16px;background:#0f172a;color:#fff;font:13px system-ui;display:flex;justify-content:flex-end;';
      document.body.prepend(controls);
    }
    mount(controls);
    refresh();
    // Capture normal, modified and middle clicks before inline handlers use stale URLs.
    ['click','auxclick'].forEach(type => document.addEventListener(type, event => {
      const anchor = event.target.closest?.('a[href]');
      if (anchor) refreshAnchor(anchor);
    }, true));
    const open = scope.open;
    if (typeof open === 'function') scope.open = function (url, ...args) {
      return open.call(this, typeof url === 'string' ? resolve(url) : url, ...args);
    };
    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(records => {
        records.forEach(record => {
          if (record.type === 'attributes') refreshAnchor(record.target);
          else record.addedNodes.forEach(node => { if (node.nodeType === 1) refresh(node); });
        });
      }).observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:['href']});
    }
    const version = revision;
    const next = await detectRegion(config, scope.navigator?.language, storage);
    if (version === revision) update(next);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(typeof window !== 'undefined' ? window : globalThis);

