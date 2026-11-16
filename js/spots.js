/** Shared city keys, backend record normalization and spot card actions. */
const SpotExplorer = (() => {
  const cities = [
    ["台北市", "Taipei City", "north"], ["桃園市", "Taoyuan City", "north"],
    ["花蓮縣", "Hualien County", "east"], ["台南市", "Tainan City", "south"],
    ["新北市", "New Taipei City", "north"], ["基隆市", "Keelung City", "north"],
    ["新竹縣", "Hsinchu County", "north"], ["新竹市", "Hsinchu City", "north"],
    ["苗栗縣", "Miaoli County", "central"], ["台中市", "Taichung City", "central"],
    ["彰化縣", "Changhua County", "central"], ["南投縣", "Nantou County", "central"],
    ["雲林縣", "Yunlin County", "central"], ["嘉義縣", "Chiayi County", "south"],
    ["嘉義市", "Chiayi City", "south"], ["高雄市", "Kaohsiung City", "south"],
    ["屏東縣", "Pingtung County", "south"], ["宜蘭縣", "Yilan County", "east"],
    ["台東縣", "Taitung County", "east"], ["澎湖縣", "Penghu County", "islands"],
    ["金門縣", "Kinmen County", "islands"], ["連江縣", "Lienchiang County", "islands"]
  ].map(([name, en, region]) => ({ name, en, region, key: name }));
  const regions = { north: "北部", central: "中部", south: "南部", east: "東部", islands: "離島" };
  const bundled = typeof ALL_SPOTS_DATA !== "undefined" ? ALL_SPOTS_DATA.slice() : [];
  const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);

  function cityKey(value) {
    const name = String(value || "").trim().replace(/臺/g, "台");
    const exact = cities.find(city => city.name === name || city.en.toLowerCase() === name.toLowerCase());
    if (exact) return exact.name;
    if (["馬祖", "Matsu", "Matsu Islands"].includes(name)) return "連江縣";
    const short = cities.filter(city => city.name.replace(/[縣市]$/, "") === name || city.en.replace(/ (City|County)$/, "").toLowerCase() === name.toLowerCase());
    return short.length === 1 ? short[0].name : name;
  }

  function records(payload) {
    const list = Array.isArray(payload) ? payload : payload?.spots || payload?.items || payload?.data;
    return Array.isArray(list) ? list : [];
  }

  function normalize(payload, chinese = bundled) {
    const originals = new Map(records(chinese).filter(spot => spot && spot.id != null).map(spot => [String(spot.id), spot]));
    return records(payload).filter(spot => spot && typeof spot.name === "string" && spot.name.trim() && (spot.city || spot.county)).map(spot => {
      const base = originals.get(String(spot.id)) || {};
      const city = cityKey(base.city || base.county || spot.city || spot.county);
      const knownCity = cities.find(entry => entry.name === city);
      return {
        ...base, ...spot,
        id: spot.id ?? `${city}:${spot.name}`,
        name: spot.name.trim(),
        nameZh: spot.nameZh || spot.name_zh || base.nameZh || base.name || (/\p{Script=Han}/u.test(spot.name) ? spot.name : ""),
        addressZh: spot.addressZh || spot.address_zh || base.addressZh || base.address || (/\p{Script=Han}/u.test(spot.address || "") ? spot.address : ""),
        city, displayCity: spot.city || spot.county,
        zone: Object.values(regions).includes(base.zone) ? base.zone
          : Object.values(regions).includes(spot.zone) ? spot.zone
          : knownCity ? regions[knownCity.region] : "",
        desc: spot.desc || spot.description || "", img: spot.img || spot.image || "",
        rate: spot.rate || spot.rating || "", duration: spot.duration || ""
      };
    });
  }

  function getCities(region = "all") {
    return [{ name: "全部", en: "All", key: "全部" }, ...cities.filter(city => region === "all" || city.region === region)];
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

  function actions(spot) {
    const urls = links(spot), id = escapeHtml(spot.id);
    return `<div class="spot-explorer-actions">
      <a href="${escapeHtml(urls.map)}" target="_blank" rel="noopener noreferrer">Google Maps</a>
      <button type="button" class="spot-driver-button" data-spot-id="${id}">Show to Driver</button>
      <a href="${escapeHtml(urls.tour)}" target="_blank" rel="noopener noreferrer">Klook</a>
      <a href="${escapeHtml(urls.hotel)}" target="_blank" rel="noopener noreferrer">Trip.com</a>
      <a href="${escapeHtml(urls.dining)}" target="_blank" rel="noopener noreferrer">餐券優惠</a>
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

  return { cities, bundled, normalize, getCities, matchesCity, matchesRegion, cityKey, escapeHtml, links, actions, openDriver };
})();
