/**
 * 台灣吃喝玩樂網頁版 - 7 國語言字典與切換機制
 * 支援：繁體中文、English、日本語、한국어、Español、Deutsch、ภาษาไทย
 */

const WEB_I18N = {
  "zh-TW": {
    brandName: "台灣吃喝玩樂",
    brandBadge: "Web 官方旗艦",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "探索首頁",
    navThemes: "16 大主題",
    navDrinks: "手搖排行 TOP20",
    navSpots: "人氣景點 TOP20",
    navRegions: "22 縣市分區",
    navSouvenir: "伴手禮直送",
    heroTagline: "✨ 2026 台灣旅遊旗艦門戶 · 全方位景點、手搖與在地體驗",
    heroTitle1: "探索台灣極致魅力",
    heroTitle2: "山海、節慶、溫泉與在地人情味",
    heroSubtitle: "匯聚 16 大主題深度路線、手搖飲料 TOP 20、包車直達與名湯住宿，世界旅人的台灣第一站。",
    searchPlaceholder: "搜尋想去的景點、手搖店、溫泉或夜市...",
    searchBtn: "開始探索",
    btnTour: "🎟️ 預定行程",
    btnCharter: "🚗 包車",
    btnHotel: "🏨 訂房去",
    btnHotelAlt: "🏨 找房間",
    btnFlight: "✈️ 查機票",
    btnMap: "📍 Map",
    btnSouvenir: "🛍️ 伴手禮直送",
    serviceFlight: "查機票",
    serviceFlightDesc: "國際與跳島機票",
    serviceCharter: "包車預約",
    serviceCharterDesc: "全台一日遊司機導覽",
    serviceAirport: "機場接送",
    serviceAirportDesc: "桃機/松機/高鐵直達",
    serviceHsr: "台灣高鐵",
    serviceHsrDesc: "全線特惠 85 折",
    serviceSouvenir: "伴手禮直送",
    serviceSouvenirDesc: "免提行李直送飯店",
    sectionThemesTitle: "🗺️ 16 大精選主題專區",
    sectionThemesDesc: "從火山群島、縱谷海景、名湯夜市到棒球狂潮，深入最真實的台灣脈動",
    sectionDrinksTitle: "🧋 台灣超人氣手搖飲料 TOP 20",
    sectionDrinksDesc: "台灣手搖王國巡禮！在地人真實票選招牌飲品與黃金甜度冰量指南",
    sectionSpotsTitle: "🏆 台灣百萬必訪景點 TOP 20",
    sectionSpotsDesc: "國際旅人一致盛讚！涵蓋自然奇景、歷史古蹟、絕美秘境與打卡勝地",
    favTitle: "我的收藏清單",
    favEmpty: "目前尚未收藏任何景點，快去探索並點擊愛心收藏吧！"
  },
  "en": {
    brandName: "Taiwan Roam",
    brandBadge: "Official Web Portal",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Home",
    navThemes: "16 Themes",
    navDrinks: "Top 20 Boba",
    navSpots: "Top 20 Spots",
    navRegions: "22 Regions",
    navSouvenir: "Souvenirs",
    heroTagline: "✨ 2026 Taiwan Travel Flagship · Ultimate Spots, Boba & Local Journeys",
    heroTitle1: "Discover the Wonders of Taiwan",
    heroTitle2: "Mountains, Coastlines, Hot Springs & Hospitality",
    heroSubtitle: "Explore 16 major themes, Top 20 Boba brands, chartered private drivers, and luxury hot springs.",
    searchPlaceholder: "Search spots, boba tea shops, hot springs or night markets...",
    searchBtn: "Explore Now",
    btnTour: "🎟️ Book Tour",
    btnCharter: "🚗 Private Car",
    btnHotel: "🏨 Book Hotel",
    btnHotelAlt: "🏨 Find Rooms",
    btnFlight: "✈️ Flights",
    btnMap: "📍 Google Maps",
    btnSouvenir: "🛍️ Souvenirs",
    serviceFlight: "Search Flights",
    serviceFlightDesc: "Island Hopping & Flights",
    serviceCharter: "Chartered Tour",
    serviceCharterDesc: "Private Driver & Guide",
    serviceAirport: "Airport Pick",
    serviceAirportDesc: "TPE/TSA/HSR Transfer",
    serviceHsr: "Taiwan HSR",
    serviceHsrDesc: "85% Off Fast Rail",
    serviceSouvenir: "Souvenir Direct",
    serviceSouvenirDesc: "Delivered to Hotels",
    sectionThemesTitle: "🗺️ 16 Thematic Travel Highlights",
    sectionThemesDesc: "From volcanic islands to night markets and hot springs, dive deep into Taiwan.",
    sectionDrinksTitle: "🧋 Taiwan Top 20 Boba Tea Brands",
    sectionDrinksDesc: "The kingdom of bubble tea! Signature drinks and sweet/ice recommendations.",
    sectionSpotsTitle: "🏆 Taiwan Top 20 Must-Visit Attractions",
    sectionSpotsDesc: "Highly praised by travelers worldwide. Natural wonders and cultural landmarks.",
    favTitle: "My Saved List",
    favEmpty: "No spots saved yet. Explore and tap the heart icon to save!"
  },
  "ja": {
    brandName: "台湾ワンダーラスト",
    brandBadge: "公式ウェブ旗艦店",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "ホーム",
    navThemes: "16のテーマ",
    navDrinks: "タピオカ TOP20",
    navSpots: "名所 TOP20",
    navRegions: "22都市ガイド",
    navSouvenir: "お土産直送",
    heroTagline: "✨ 2026 台湾旅行の総合ポータル · 絶景、タピオカ、伝統文化",
    heroTitle1: "台湾の極上な魅力を発見",
    heroTitle2: "壮大な山海、名湯、夜市とおもてなし",
    heroSubtitle: "16の厳選テーマツアー、タピオカTOP20、専用チャーター車、名湯旅館を完全網羅。",
    searchPlaceholder: "観光地、タピオカ店、温泉、夜市を検索...",
    searchBtn: "今すぐ探索",
    btnTour: "🎟️ ツアー予約",
    btnCharter: "🚗 チャーター車",
    btnHotel: "🏨 宿泊予約",
    btnHotelAlt: "🏨 部屋を探す",
    btnFlight: "✈️ 航空券検索",
    btnMap: "📍 マップ案内",
    btnSouvenir: "🛍️ お土産直送",
    serviceFlight: "航空券予約",
    serviceFlightDesc: "離島便・国際線比較",
    serviceCharter: "専用車予約",
    serviceCharterDesc: "安心の専属ドライバー",
    serviceAirport: "空港送迎",
    serviceAirportDesc: "桃園/松山空港直行",
    serviceHsr: "台湾新幹線",
    serviceHsrDesc: "特別割引 15% OFF",
    serviceSouvenir: "お土産直送",
    serviceSouvenirDesc: "ホテルへ手荷物不要直送",
    sectionThemesTitle: "🗺️ 16大テーマ特集",
    sectionThemesDesc: "離島から名湯温泉、夜市、大自然まで、台湾の魅力を深く旅する。",
    sectionDrinksTitle: "🧋 台湾タピオカ・ドリンク TOP 20",
    sectionDrinksDesc: "本場台湾の人気ブランド！おすすめ看板メニュー＆氷・甘さ配合ガイド。",
    sectionSpotsTitle: "🏆 台湾必訪の絶景・観光地 TOP 20",
    sectionSpotsDesc: "世界中の旅行者が絶賛する台湾屈指の名所と秘境。",
    favTitle: "お気に入りリスト",
    favEmpty: "まだお気に入りがありません。ハートをタップして保存しましょう！"
  },
  "ko": {
    brandName: "대만 여행 허브",
    brandBadge: "웹 공식 포털",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "홈",
    navThemes: "16대 테마",
    navDrinks: "버블티 TOP20",
    navSpots: "명소 TOP20",
    navRegions: "22개 도시",
    navSouvenir: "기념품 배송",
    heroTagline: "✨ 2026 대만 여행 공식 포털 · 명소, 버블티, 온천 완전 정복",
    heroTitle1: "대만의 눈부신 매력을 만나보세요",
    heroTitle2: "푸른 바다와 산, 명품 온천, 따뜻한 인심",
    heroSubtitle: "16대 테마 여행 코스, 버블티 TOP 20, 전용 렌터카 투어, 온천 호텔 완벽 안내.",
    searchPlaceholder: "관광지, 버블티 매장, 온천, 야시장 검색...",
    searchBtn: "탐색 시작",
    btnTour: "🎟️ 투어 예약",
    btnCharter: "🚗 프라이빗 카",
    btnHotel: "🏨 호텔 예약",
    btnHotelAlt: "🏨 방 찾기",
    btnFlight: "✈️ 항공권 조회",
    btnMap: "📍 지도 안내",
    btnSouvenir: "🛍️ 기념품 배송",
    serviceFlight: "항공권 검색",
    serviceFlightDesc: "국내선/국제선 비교",
    serviceCharter: "전용차량 투어",
    serviceCharterDesc: "기사 포함 일일 투어",
    serviceAirport: "공항 픽업",
    serviceAirportDesc: "타오위안/쑹산 공항",
    serviceHsr: "대만 고속철도",
    serviceHsrDesc: "전 구간 15% 할인",
    serviceSouvenir: "기념품 배송",
    serviceSouvenirDesc: "호텔 직배송 서비스",
    sectionThemesTitle: "🗺️ 16대 추천 테마 구역",
    sectionThemesDesc: "신비로운 섬부터 온천, 야시장, 웅장한 대자연까지 대만의 모든 것.",
    sectionDrinksTitle: "🧋 대만 버블티 & 음료 TOP 20",
    sectionDrinksDesc: "현지인들이 직접 뽑은 대표 음료와 추천 당도/얼음 가이드.",
    sectionSpotsTitle: "🏆 대만 필수 방문 명소 TOP 20",
    sectionSpotsDesc: "전 세계 여행자들이 사랑하는 대만의 대표적인 명소들.",
    favTitle: "내 보관함",
    favEmpty: "보관된 장소가 없습니다. 하트를 눌러 관심 명소를 저장하세요!"
  },
  "es": {
    brandName: "Taiwan Roam",
    brandBadge: "Portal Oficial Web",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Inicio",
    navThemes: "16 Temas",
    navDrinks: "Top 20 Té Boba",
    navSpots: "Top 20 Destinos",
    navRegions: "22 Regiones",
    navSouvenir: "Recuerdos",
    heroTagline: "✨ Portal Insignia de Viajes por Taiwán 2026",
    heroTitle1: "Descubre las Maravillas de Taiwán",
    heroTitle2: "Montañas, Costas, Aguas Termales y Calidez",
    heroSubtitle: "Explora 16 temas, Top 20 marcas de Boba, chófer privado y hoteles termales.",
    searchPlaceholder: "Buscar atracciones, tiendas de té, aguas termales...",
    searchBtn: "Explorar",
    btnTour: "🎟️ Reservar Tour",
    btnCharter: "🚗 Coche Privado",
    btnHotel: "🏨 Reservar Hotel",
    btnHotelAlt: "🏨 Buscar Hotel",
    btnFlight: "✈️ Vuelos",
    btnMap: "📍 Google Maps",
    btnSouvenir: "🛍️ Recuerdos",
    serviceFlight: "Vuelos",
    serviceFlightDesc: "Vuelos e Islas",
    serviceCharter: "Coche Privado",
    serviceCharterDesc: "Conductor privado",
    serviceAirport: "Traslado Aeropuerto",
    serviceAirportDesc: "Traslados 24H",
    serviceHsr: "Tren de Alta Velocidad",
    serviceHsrDesc: "15% de descuento",
    serviceSouvenir: "Entrega Directa",
    serviceSouvenirDesc: "Envío al hotel",
    sectionThemesTitle: "🗺️ 16 Rutas Temáticas Destacadas",
    sectionThemesDesc: "Desde islas volcánicas hasta mercados nocturnos y aguas termales.",
    sectionDrinksTitle: "🧋 Top 20 Bebidas Boba de Taiwán",
    sectionDrinksDesc: "¡El paraíso del té de burbujas! Bebidas estrella recomendadas.",
    sectionSpotsTitle: "🏆 Top 20 Destinos Imprescindibles",
    sectionSpotsDesc: "Alabados por viajeros de todo el mundo. Belleza natural e historia.",
    favTitle: "Mis Favoritos",
    favEmpty: "No hay lugares guardados. ¡Explora y añade tus favoritos!"
  },
  "de": {
    brandName: "Taiwan Roam",
    brandBadge: "Offizielles Webportal",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Startseite",
    navThemes: "16 Themen",
    navDrinks: "Top 20 Boba-Tee",
    navSpots: "Top 20 Orte",
    navRegions: "22 Regionen",
    navSouvenir: "Souvenirs",
    heroTagline: "✨ 2026 Taiwan Reiseportal · Sehenswürdigkeiten, Boba & Natur",
    heroTitle1: "Entdecken Sie die Wunder Taiwans",
    heroTitle2: "Berge, Küsten, Thermalquellen & Herzlichkeit",
    heroSubtitle: "16 Themenrouten, Top 20 Boba-Tees, Chauffeur-Touren & Thermalhotels.",
    searchPlaceholder: "Orte, Boba-Läden, Thermalquellen suchen...",
    searchBtn: "Entdecken",
    btnTour: "🎟️ Tour Buchen",
    btnCharter: "🚗 Privater Fahrer",
    btnHotel: "🏨 Hotel Buchen",
    btnHotelAlt: "🏨 Zimmer Finden",
    btnFlight: "✈️ Flüge",
    btnMap: "📍 Google Maps",
    btnSouvenir: "🛍️ Souvenirs",
    serviceFlight: "Flugsuche",
    serviceFlightDesc: "Flüge & Inseln",
    serviceCharter: "Privater Fahrer",
    serviceCharterDesc: "Tagestouren mit Fahrer",
    serviceAirport: "Flughafentransfer",
    serviceAirportDesc: "24h Transfers",
    serviceHsr: "Hochgeschwindigkeitszug",
    serviceHsrDesc: "15% Rabatt",
    serviceSouvenir: "Souvenirversand",
    serviceSouvenirDesc: "Direkt ins Hotel",
    sectionThemesTitle: "🗺️ 16 Thematische Reise-Highlights",
    sectionThemesDesc: "Von Vulkaninseln über Nachtmärkte bis hin zu Thermalquellen.",
    sectionDrinksTitle: "🧋 Top 20 Boba-Tee-Marken in Taiwan",
    sectionDrinksDesc: "Das Königreich des Bubble Teas! Beliebte Signature-Drinks.",
    sectionSpotsTitle: "🏆 Top 20 Unverzichtbare Attraktionen",
    sectionSpotsDesc: "Weltweit hoch gelobt von Reisenden. Naturwunder & Kulturdenkmäler.",
    favTitle: "Meine Merkliste",
    favEmpty: "Noch keine Orte gespeichert. Klicke auf das Herz zum Speichern!"
  },
  "th": {
    brandName: "ไต้หวันโรห์ม",
    brandBadge: "เว็บพอร์ทัลทางการ",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "หน้าแรก",
    navThemes: "16 ธีมท่องเที่ยว",
    navDrinks: "ชานมไข่มุก TOP 20",
    navSpots: "สถานที่ยอดนิยม TOP 20",
    navRegions: "22 จังหวัด",
    navSouvenir: "ของฝากส่งตรง",
    heroTagline: "✨ พอร์ทัลท่องเที่ยวไต้หวัน 2026 · จุดชมวิว ชานมไข่มุก และวัฒนธรรมท้องถิ่น",
    heroTitle1: "ค้นพบเสน่ห์อันน่าทึ่งของไต้หวัน",
    heroTitle2: "ขุนเขา ชายฝั่ง ออนเซ็น และมิตรไมตรีอันอบอุ่น",
    heroSubtitle: "รวม 16 ธีมท่องเที่ยว, ชานมไข่มุก TOP 20, รถเช่าพร้อมคนขับ และที่พักน้ำพุร้อน",
    searchPlaceholder: "ค้นหาสถานที่, ร้านชานม, น้ำพุร้อน หรือตลาดกลางคืน...",
    searchBtn: "เริ่มสำรวจ",
    btnTour: "🎟️ จองทัวร์",
    btnCharter: "🚗 รถเหมาพร้อมคนขับ",
    btnHotel: "🏨 จองโรงแรม",
    btnHotelAlt: "🏨 ค้นหาห้องพัก",
    btnFlight: "✈️ ค้นหาเที่ยวบิน",
    btnMap: "📍 Google Maps",
    btnSouvenir: "🛍️ สั่งของฝาก",
    serviceFlight: "จองเที่ยวบิน",
    serviceFlightDesc: "เที่ยวบินข้ามเกาะและระหว่างประเทศ",
    serviceCharter: "จองรถเหมา",
    serviceCharterDesc: "ทัวร์พร้อมคนขับส่วนตัว",
    serviceAirport: "รับส่งสนามบิน",
    serviceAirportDesc: "สนามบินเถาหยวน/ซงซาน",
    serviceHsr: "รถไฟความเร็วสูง",
    serviceHsrDesc: "ส่วนลด 15% ทุกเส้นทาง",
    serviceSouvenir: "ของฝากส่งตรง",
    serviceSouvenirDesc: "ส่งตรงถึงโรงแรมไม่ต้องหิ้วเอง",
    sectionThemesTitle: "🗺️ 16 ไฮไลท์ธีมท่องเที่ยว",
    sectionThemesDesc: "จากเกาะภูเขาไฟ น้ำพุร้อนชื่อดัง ตลาดกลางคืน สู่ธรรมชาติอันงดงาม",
    sectionDrinksTitle: "🧋 20 แบรนด์ชานมไข่มุกยอดนิยมในไต้หวัน",
    sectionDrinksDesc: "อาณาจักรชานมไข่มุก! เมนูแนะนำและระดับความหวานน้ำแข็งยอดฮิต",
    sectionSpotsTitle: "🏆 20 สถานที่ท่องเที่ยวยอดนิยมในไต้หวัน",
    sectionSpotsDesc: "ได้รับการยกย่องจากนักเดินทางทั่วโลก ธรรมชาติและโบราณสถาน",
    favTitle: "รายการโปรดของฉัน",
    favEmpty: "ยังไม่มีสถานที่ที่บันทึกไว้ สำรวจและแตะหัวใจเพื่อบันทึก!"
  }
};

/**
 * 台灣吃喝玩樂網頁版 - 國際化語系切換執行函數 (Bilingual Engine)
 */
function switchLanguage(lang) {
  if (!lang) lang = "zh-TW";
  if (typeof currentLang !== "undefined") {
    currentLang = lang;
  }
  try {
    localStorage.setItem("taiwan_travel_lang", lang);
  } catch (e) {}

  // 1. 同步右側語言下拉選單狀態
  document.querySelectorAll("#global-lang-select, .header-lang-select, .clean-lang-select").forEach(sel => {
    sel.value = lang;
  });

  document.querySelectorAll(".lang-pill").forEach(btn => {
    const onclickStr = btn.getAttribute("onclick") || "";
    if (onclickStr.includes(`'${lang}'`)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const isEn = (lang === "en");

  // 2. 品牌與導航
  const brandNameEl = document.querySelector(".brand-name");
  if (brandNameEl) {
    brandNameEl.textContent = isEn ? "Taiwan Roam" : "台灣吃喝玩樂";
  }
  const brandSubtextEl = document.querySelector(".brand-subtext");
  if (brandSubtextEl) {
    brandSubtextEl.textContent = "TAIWAN ROAM";
  }

  const navItems = document.querySelectorAll(".nav-menu .nav-item a");
  const navEn = ["Home", "Themes", "City Spots", "Rankings", "Souvenirs", "Cafe Map", "Michelin Guide", "Community"];
  const navZh = ["首頁", "精選主題", "城市景點", "排行榜", "伴手禮直送", "全台咖啡地圖", "米其林指南", "留言討論"];
  if (navItems.length >= 8) {
    navItems.forEach((item, idx) => {
      item.textContent = isEn ? navEn[idx] : navZh[idx];
    });
  }

  const ctaBtn = document.querySelector(".header-right-tools .btn-cta-primary");
  if (ctaBtn) {
    ctaBtn.textContent = isEn ? "🛍️ Souvenirs Delivery" : "🛍️ 伴手禮直送";
  }

  // 3. Hero 英雄區塊 (日雜散步小確幸風格)
  const heroZakkaTitle = document.querySelector(".hero-zakka-title");
  if (heroZakkaTitle) {
    heroZakkaTitle.textContent = isEn ? "Where shall we wander & taste across Taiwan today?" : "今天，想在台灣哪裡吃喝玩樂？";
  }
  const heroZakkaSubtitle = document.querySelector(".hero-zakka-subtitle");
  if (heroZakkaSubtitle) {
    heroZakkaSubtitle.textContent = "S I P • B I T E • W A N D E R • R E P E A T";
  }
  const heroZakkaLead = document.querySelector(".hero-zakka-lead");
  if (heroZakkaLead) {
    heroZakkaLead.textContent = isEn
      ? "Pack your happiest mood. Follow the aroma of pour-over coffee, savor night market street food, and wander through this island embraced by mountain and sea."
      : "把好心情裝進行囊。追一杯手沖的香氣、探一口街角的夜市煙火，漫步這座被山海擁抱的島嶼。";
  }

  // Hero Service Tabs
  const serviceTabs = document.querySelectorAll(".hero-service-tab");
  const tabEn = ["✈️ Flights", "🚗 Private Charter", "🚐 Airport Transfer", "📶 Taiwan eSIM", "🏆 Rankings", "🛍️ Souvenirs"];
  const tabZh = ["✈️ 搜機票 Flights", "🚗 預約包車 Private Charter", "🚐 機場接送 Airport Transfer", "📶 台灣網卡 eSIM", "🏆 熱門榜單 Rankings", "🛍️ 伴手禮直送 Souvenirs"];
  if (serviceTabs.length >= 6) {
    serviceTabs.forEach((tab, idx) => {
      tab.textContent = isEn ? tabEn[idx] : tabZh[idx];
    });
  }

  // 搜尋列
  const searchInput = document.getElementById("hero-main-search");
  if (searchInput) {
    searchInput.placeholder = isEn 
      ? "Search top attractions, cities, boba, cafes, hot springs (e.g. Taipei 101, Jiufen)..."
      : "搜尋全台熱門景點、城市、美食或主題（如：台北 101、九份、咖啡廳、溫泉）...";
  }
  const searchBtn = document.getElementById("hero-search-btn");
  if (searchBtn) {
    searchBtn.textContent = isEn ? "Search Taiwan" : "探索台灣 Search";
  }

  // Hero 3 分格 (米其林 ‧ 咖啡 ‧ 外國人)
  const michelinCol = document.querySelector(".michelin-col");
  if (michelinCol) {
    const t = michelinCol.querySelector(".featured-col-title");
    const s = michelinCol.querySelector(".featured-col-subtitle");
    if (t) t.textContent = isEn ? "Michelin Star & Bib Gourmand" : "米其林指南名店";
    if (s) s.textContent = isEn ? "Starred fine dining & local street food" : "星級名饌與全台必比登推薦";
  }
  const cafeCol = document.querySelector(".cafe-col");
  if (cafeCol) {
    const t = cafeCol.querySelector(".featured-col-title");
    const s = cafeCol.querySelector(".featured-col-subtitle");
    if (t) t.textContent = isEn ? "Taiwan Curated Cafe Atlas" : "全台風格咖啡圖鑑";
    if (s) s.textContent = isEn ? "330 historic hideouts & sea views" : "330間巷弄老宅與手沖海景";
  }
  const forCol = document.querySelector(".foreigners-col");
  if (forCol) {
    const t = forCol.querySelector(".featured-col-title");
    const s = forCol.querySelector(".featured-col-subtitle");
    if (t) t.textContent = isEn ? "Foreign Travelers Guide" : "外國人必看專區";
    if (s) s.textContent = isEn ? "Taxi flashcards · Souvenirs delivery" : "司機大字卡 ‧ 伴手禮直寄";
  }

  // 4. 第一區塊：Top 6
  const trendingTitle = document.querySelector("#trending-top6 h2");
  if (trendingTitle) {
    trendingTitle.textContent = isEn ? "Taiwan Day Tours & Charters" : "台灣一日遊行程推薦";
  }
  const trendingSub = document.querySelector("#trending-top6 .trending-title-wrap div");
  if (trendingSub) {
    trendingSub.textContent = isEn ? "TOP 6 BESTSELLING DAY TRIPS & CHARTERS" : "TAIWAN DAY TOURS & CHARTERS";
  }
  const trendingDesc = document.querySelector("#trending-top6 .trending-title-wrap p");
  if (trendingDesc) {
    trendingDesc.textContent = isEn
      ? "Most popular chartered & guided day trips loved by international travelers"
      : "人氣排行行程，外國人最愛台灣的跟團包車";
  }

  // 5. 第二區塊：精選旅行主題
  const themesTitle = document.querySelector("#themes h2");
  if (themesTitle) {
    themesTitle.textContent = isEn ? "Curated Travel Themes" : "精選旅行主題";
  }
  const themeCards = document.querySelectorAll("#themes .theme-card");
  const themeDataEn = [
    { title: "CPBL Baseball", desc: "Taipei Dome, Intercontinental & Xinzhuang! Passionate cheering squads.", tag: "6 Stadiums ➔" },
    { title: "Glamping & BBQ Fresh", desc: "Luxury starry tents & wagyu seafood foodboxes delivered directly to your campsite.", tag: "Direct Delivery ➔" },
    { title: "Curated Cafes", desc: "330 curated cafes across 22 cities! Outlets, pour-overs, heritage & coastal views.", tag: "330 Top Cafes ➔" },
    { title: "Michelin Guide", desc: "Le Palais 3-Stars, Taïrroir 2-Stars, logy, plus nationwide Bib Gourmand street delicacies.", tag: "Stars & Bib ➔" },
    { title: "Thermal Springs & Spa", desc: "Beitou white sulfur springs, Jiaoxi beauty baths, Zhiben Royal & Asahi saltwater.", tag: "Springs Guide ➔" },
    { title: "Night Market Foodies", desc: "Ningxia banquet, Fengjia egg crepes, and Tainan Garden Night Market braised specialties.", tag: "Street Legends ➔" }
  ];
  const themeDataZh = [
    { title: "職棒經典應援", desc: "台北大巨蛋、洲際、新莊！全球最狂啦啦隊熱血應援。", tag: "6 大主場館 ➔" },
    { title: "露營生鮮野炊", desc: "免搭帳奢華星空帳篷，和牛海陸食材箱一鍵直配營位。", tag: "免備料直配 ➔" },
    { title: "全台風格咖啡", desc: "全台 22 縣市 330 間名店！插頭、手沖、老宅與海景景觀。", tag: "330 間名店 ➔" },
    { title: "米其林指南", desc: "頤宮三星、態芮二星、logy 與全台必比登排隊街頭小吃。", tag: "摘星與必比登 ➔" },
    { title: "極致溫泉舒活", desc: "北投加賀屋白磺、礁溪美人湯、知本老爺與朝日海底溫泉。", tag: "全台名湯巡禮 ➔" },
    { title: "夜市老饕圖鑑", desc: "寧夏夜市千歲宴、逢甲明倫蛋餅、台南花園夜市大鍋滷味。", tag: "夜市排隊王 ➔" }
  ];
  themeCards.forEach((card, idx) => {
    const data = isEn ? themeDataEn[idx] : themeDataZh[idx];
    if (data) {
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");
      const chip = card.querySelector(".theme-tag-chip");
      if (h3) h3.textContent = data.title;
      if (p) p.textContent = data.desc;
      if (chip) chip.textContent = data.tag;
    }
  });

  // 6. 第三區塊：全台城市與景點探索
  const citySpotsTitle = document.querySelector("#city-spots h2");
  if (citySpotsTitle) {
    citySpotsTitle.textContent = isEn ? "Explore Taiwan Cities & Attractions" : "全台城市與景點探索";
  }

  // 7. 頁尾翻譯
  const footerBrand = document.querySelector(".footer-brand-col div div div:first-child");
  if (footerBrand) {
    footerBrand.textContent = isEn ? "Taiwan Roam" : "台灣吃喝玩樂";
  }
  const footerDesc = document.querySelector(".footer-brand-col p");
  if (footerDesc) {
    footerDesc.textContent = isEn
      ? "Official travel portal by HiMyDream Studio. The curated one-stop Taiwan independent travel guide for international travelers."
      : "HiMyDream Studio 官方維護旗艦入口網。專為歐美、日韓、東南亞及全球旅人打造的一站式台灣旅遊自由行指南。";
  }
  const footerContact = document.querySelector(".footer-brand-col div[style*='font-size: 12px']");
  if (footerContact) {
    footerContact.innerHTML = isEn
      ? `Business Partnership / Contact Email:<br><a href="mailto:himydream.studio0220@gmail.com" style="color: var(--cyan-primary); font-weight: 700;">himydream.studio0220@gmail.com</a>`
      : `商務異業合作 / 資料勘誤信箱：<br><a href="mailto:himydream.studio0220@gmail.com" style="color: var(--cyan-primary); font-weight: 700;">himydream.studio0220@gmail.com</a>`;
  }
  const colTitles = document.querySelectorAll(".footer-links-col .footer-col-title");
  if (colTitles.length >= 3) {
    colTitles[0].textContent = isEn ? "Curated Portals" : "專題導覽";
    colTitles[1].textContent = isEn ? "Travel Hub" : "旅遊服務樞紐";
    colTitles[2].textContent = isEn ? "Languages" : "國際化語系";
  }
  const footerBottom = document.querySelector(".footer-bottom-bar div:first-child");
  if (footerBottom) {
    footerBottom.textContent = isEn
      ? "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio."
      : "© 2026 台灣吃喝玩樂 TAIWAN ROAM. All Rights Reserved. Powered by HiMyDream Studio.";
  }

  // 8. 重新執行 JS 渲染邏輯
  if (typeof renderTrendingSection === "function") {
    renderTrendingSection();
  }
  if (typeof renderWaterfallSection === "function") {
    renderWaterfallSection();
  }
}
