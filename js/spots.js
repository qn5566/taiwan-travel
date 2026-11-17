/** Shared city keys, backend record normalization and spot card actions. */
const SpotExplorer = (() => {
  // Stable filter keys and region classification; all displayed names come from info.json.
  const cities = [
    ["台北市", "north"], ["桃園市", "north"], ["花蓮縣", "east"], ["台南市", "south"],
    ["新北市", "north"], ["基隆市", "north"], ["新竹縣", "north"], ["新竹市", "north"],
    ["苗栗縣", "central"], ["台中市", "central"], ["彰化縣", "central"], ["南投縣", "central"],
    ["雲林縣", "central"], ["嘉義縣", "south"], ["嘉義市", "south"], ["高雄市", "south"],
    ["屏東縣", "south"], ["宜蘭縣", "east"], ["台東縣", "east"], ["澎湖縣", "islands"],
    ["金門縣", "islands"], ["連江縣", "islands"]
  ].map(([name, region]) => ({ name, region, key: name,
    get en() { return CityRegions.localizedName(name, 'en'); } }));
  const regions = { north: "北部", central: "中部", south: "南部", east: "東部", islands: "離島" };
  const bundled = typeof ALL_SPOTS_DATA !== "undefined" ? ALL_SPOTS_DATA.slice() : [];
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  function cityKey(value) {
    const name = String(value || "").trim().replace(/臺/g, "台");
    return CityRegions.canonicalName(name).replace(/臺/g, "台");
  }

  function records(payload) {
    const list = Array.isArray(payload) ? payload : payload?.Attractions || payload?.spots || payload?.items || payload?.data;
    return Array.isArray(list) ? list : [];
  }

  function postalAddress(postal = {}) {
    postal = postal || {};
    const city = postal.City || '', town = postal.Town || '', street = postal.StreetAddress || '';
    if (city && street.replace(/臺/g, '台').startsWith(cityKey(city))) return street;
    return city + (town && !street.startsWith(town) ? town : '') + street;
  }

  function normalize(payload, chinese = bundled) {
    const sourceIsChinese = !payload?.Language || /^zh/i.test(payload.Language);
    const originals = new Map(records(chinese).filter(spot => spot && (spot.AttractionID ?? spot.id) != null)
      .map(spot => [String(spot.AttractionID ?? spot.id), spot]));
    return records(payload).filter(spot => {
      if (!spot) return false;
      const name = spot.AttractionName ?? spot.name;
      return typeof name === 'string' && name.trim() && (spot.AttractionName != null || spot.city || spot.county);
    }).map(spot => {
      const attraction = spot.AttractionName != null;
      const id = spot.AttractionID ?? spot.id;
      const base = originals.get(String(id)) || {};
      const sourceCity = attraction ? base.PostalAddress?.City || spot.PostalAddress?.City || '其他' : base.city || base.county || spot.city || spot.county;
      const city = cityKey(sourceCity);
      const knownCity = cities.find(entry => entry.name === city);
      const name = (spot.AttractionName ?? spot.name).trim();
      const address = attraction ? postalAddress(spot.PostalAddress) : spot.address || '';
      const candidateImage = attraction ? spot.Images?.find(image => image?.ImageURL || image?.URL) : null;
      const rawImage = candidateImage?.ImageURL || candidateImage?.URL || spot.img || spot.image || '';
      const img = /^https?:\/\//i.test(rawImage) || /^assets\//.test(rawImage) ? rawImage : 'assets/spot-placeholder.svg';
      return {
        ...base, ...spot, id: id ?? `${city}:${name}`, name,
        nameZh: attraction ? spot.nameZh || base.AttractionName || base.nameZh || (sourceIsChinese ? name : '') : spot.nameZh || spot.name_zh || base.nameZh || base.name || (/\p{Script=Han}/u.test(name) ? name : ''),
        addressZh: attraction ? spot.addressZh || (base.PostalAddress ? postalAddress(base.PostalAddress) : sourceIsChinese ? address : '') : spot.addressZh || spot.address_zh || base.addressZh || base.address || (/\p{Script=Han}/u.test(address) ? address : ''),
        address, city, displayCity: CityRegions.canonicalName(sourceCity),
        zone: !attraction && Object.values(regions).includes(base.zone) ? base.zone
          : !attraction && Object.values(regions).includes(spot.zone) ? spot.zone
          : knownCity ? regions[knownCity.region] : '',
        desc: spot.Description || spot.desc || spot.description || '', img,
        lat: spot.PositionLat ?? spot.lat ?? spot.latitude,
        lng: spot.PositionLon ?? spot.lng ?? spot.longitude,
        tag: Array.isArray(spot.Tags) ? spot.Tags.join(' · ') : spot.tag || '',
        rate: spot.rate || spot.rating || '', duration: spot.VisitDuration || spot.duration || ''
      };
    });
  }

  function groupByCity(spots) {
    const grouped = Object.assign(Object.create(null), Object.fromEntries(CityRegions.regions.zh.map(city => [city, []])));
    for (const spot of spots) {
      const city = CityRegions.canonicalName(spot.city || spot.PostalAddress?.City || '其他');
      (grouped[city] ||= []).push(spot);
    }
    return grouped;
  }

  function getCities(region = "all") {
    return [{ name: "全部", en: "All", key: "全部" }, ...cities.filter(city => region === "all" || city.region === region).map(city => ({ ...city, name: CityRegions.canonicalName(city.key) }))];
  }

  function matchesCity(spot, key) {
    return key === "全部" || key === "全部景點" || cityKey(spot.city) === cityKey(key);
  }

  function matchesRegion(spot, region) {
    return region === "all" || spot.zone === regions[region];
  }

  function mapUrl(spot) {
    try {
      const url = new URL(spot.mapUrl || "");
      if (url.protocol === "https:" && /(^|\.)(google\.com|maps\.app\.goo\.gl)$/.test(url.hostname)) return url.href;
    } catch (e) {}
    const lat = spot.lat ?? spot.latitude, lng = spot.lng ?? spot.longitude;
    const query = lat != null && lng != null && Number.isFinite(Number(lat)) && Number.isFinite(Number(lng))
      ? `${lat},${lng}` : [spot.nameZh || spot.name, spot.addressZh || spot.city].filter(Boolean).join(" ");
    return AFFILIATE_HUB.getMapUrl(query);
  }

  function links(spot) {
    return {
      map: mapUrl(spot), tour: AFFILIATE_HUB.getSpotTourUrl(spot),
      hotel: AFFILIATE_HUB.getTripSearchUrl(`${spot.city} ${spot.nameZh || spot.name}`),
      dining: AFFILIATE_HUB.getDiningUrl()
    };
  }

  function actions(spot, compact = false) {
    const urls = links(spot), id = escapeHtml(spot.id);
    if (compact) {
      const labels = {
        'zh-TW': '司機字卡', zh: '司機字卡',
        en: 'Driver card', ja: '行き先カード',
        ko: '기사님 카드', th: 'บัตรคนขับ',
        vi: 'Thẻ tài xế', ms: 'Kad pemandu',
        fil: 'Card sa drayber', hi: 'ड्राइवर कार्ड',
        id: 'Kartu sopir', es: 'Para el taxista',
        de: 'Fahrerkarte'
      };
      const lang = typeof getWebLang === 'function' ? getWebLang() : 'zh-TW';
      const driver = labels[lang] || labels.en;
      return `<div class="spot-explorer-actions spot-card-actions">
        <div class="spot-actions-primary">
          <a class="spot-map-action" href="${escapeHtml(urls.map)}" target="_blank" rel="noopener noreferrer">Google Maps</a>
          <button type="button" class="spot-driver-button" data-spot-id="${id}">${driver}</button>
        </div>
        <div class="spot-actions-secondary">
          <a href="${escapeHtml(urls.tour)}" target="_blank" rel="noopener noreferrer">Klook</a>
          <a href="${escapeHtml(urls.hotel)}" target="_blank" rel="noopener noreferrer">Trip.com</a>
        </div>
      </div>`;
    }
    return `<div class="spot-explorer-actions">
      <a href="${escapeHtml(urls.map)}" target="_blank" rel="noopener noreferrer">Google Maps</a>
      <button type="button" class="spot-driver-button" data-spot-id="${id}">Show to Driver</button>
      <a href="${escapeHtml(urls.tour)}" target="_blank" rel="noopener noreferrer">Klook</a>
      <a href="${escapeHtml(urls.hotel)}" target="_blank" rel="noopener noreferrer">Trip.com</a>
    </div>`;
  }

  function openDriver(id) {
    const spot = (window.ALL_SPOTS_DATA || []).find(item => String(item.id) === String(id));
    if (!spot) return;
    let dialog = document.getElementById("spot-driver-dialog");
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.id = "spot-driver-dialog";
      dialog.setAttribute("aria-labelledby", "spot-driver-heading");
      dialog.innerHTML = `<form method="dialog"><button class="spot-driver-close" aria-label="關閉 / Close">關閉 / Close</button></form>
        <p id="spot-driver-heading">Show to Driver · 請帶我到這裡</p>
        <h2 class="spot-driver-name"></h2><p class="spot-driver-address"></p>
        <a class="spot-driver-map" target="_blank" rel="noopener noreferrer">Google Maps 導航</a>`;
      document.body.append(dialog);
    }
    dialog.querySelector(".spot-driver-name").textContent = spot.nameZh || spot.name;
    dialog.querySelector(".spot-driver-address").textContent = spot.addressZh || `${spot.city}（詳細地址請以地圖確認）`;
    dialog.querySelector(".spot-driver-map").href = mapUrl(spot);
    if (!dialog.open) dialog.showModal();
  }

  document.addEventListener("click", event => {
    const driver = event.target.closest(".spot-driver-button");
    if (driver) openDriver(driver.dataset.spotId);
    const favorite = event.target.closest("[data-spot-favorite]");
    if (favorite) {
      if (typeof toggleFavorite === "function") toggleFavorite(favorite.dataset.spotFavorite, favorite);
      else if (typeof FavoritesManager !== "undefined") {
        const spot = (window.ALL_SPOTS_DATA || []).find(item => item.name === favorite.dataset.spotFavorite);
        if (spot) {
          const urls = links(spot);
          FavoritesManager.toggle({ ...spot, id: `spot_${spot.name}`, category: "spot", categoryLabel: "景點", rating: spot.rate,
            klookUrl: urls.tour, tripUrl: urls.hotel, mapUrl: urls.map }, favorite);
        }
      }
    }
  });

  return { cities, bundled, normalize, getCities, groupByCity, matchesCity, matchesRegion, cityKey, escapeHtml, links, actions, openDriver };
})();
