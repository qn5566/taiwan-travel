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
  },
  "vi": {
    brandName: "Taiwan Roam",
    brandBadge: "Cổng Thông Tin Chính Thức",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Trang chủ",
    navThemes: "16 Chủ đề",
    navDrinks: "Top 20 Trà Sữa",
    navSpots: "Top 20 Điểm Đến",
    navRegions: "22 Vùng",
    navSouvenir: "Quà Lưu Niệm",
    heroTagline: "✨ Cổng du lịch Đài Loan 2026 · Điểm đến, trà sữa & trải nghiệm địa phương",
    heroTitle1: "Khám phá vẻ đẹp tuyệt vời của Đài Loan",
    heroTitle2: "Núi rừng, biển cả, suối nước nóng & lòng hiếu khách",
    heroSubtitle: "Khám phá 16 chủ đề, Top 20 trà sữa, xe riêng có tài xế và khách sạn suối nước nóng.",
    searchPlaceholder: "Tìm điểm đến, quán trà sữa, suối nước nóng hoặc chợ đêm...",
    searchBtn: "Bắt đầu khám phá",
    btnTour: "🎟️ Đặt Tour",
    btnCharter: "🚗 Xe Riêng",
    btnHotel: "🏨 Đặt Khách Sạn",
    btnHotelAlt: "🏨 Tìm Phòng",
    btnFlight: "✈️ Vé Máy Bay",
    btnMap: "📍 Bản Đồ",
    btnSouvenir: "🛍️ Quà Lưu Niệm",
    serviceFlight: "Vé máy bay",
    serviceFlightDesc: "Chuyến bay nội địa & quốc tế",
    serviceCharter: "Thuê xe riêng",
    serviceCharterDesc: "Tài xế riêng cả ngày",
    serviceAirport: "Đưa đón sân bay",
    serviceAirportDesc: "Đào Viên / Tùng Sơn",
    serviceHsr: "Tàu cao tốc Đài Loan",
    serviceHsrDesc: "Giảm 15% mọi tuyến",
    serviceSouvenir: "Giao quà lưu niệm",
    serviceSouvenirDesc: "Giao tận khách sạn",
    sectionThemesTitle: "🗺️ 16 Chủ đề du lịch nổi bật",
    sectionThemesDesc: "Từ đảo núi lửa, chợ đêm đến suối nước nóng, khám phá sâu Đài Loan.",
    sectionDrinksTitle: "🧋 Top 20 thương hiệu trà sữa Đài Loan",
    sectionDrinksDesc: "Vương quốc trà sữa! Đồ uống đặc trưng và gợi ý đường/đá.",
    sectionSpotsTitle: "🏆 Top 20 điểm đến không thể bỏ qua",
    sectionSpotsDesc: "Được du khách toàn cầu yêu thích. Kỳ quan thiên nhiên & di sản văn hóa.",
    favTitle: "Danh sách yêu thích",
    favEmpty: "Chưa có điểm nào được lưu. Hãy khám phá và chạm vào trái tim để lưu!"
  },
  "ms": {
    brandName: "Taiwan Roam",
    brandBadge: "Portal Web Rasmi",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Laman Utama",
    navThemes: "16 Tema",
    navDrinks: "Top 20 Boba",
    navSpots: "Top 20 Destinasi",
    navRegions: "22 Wilayah",
    navSouvenir: "Cenderamata",
    heroTagline: "✨ Portal Pelancongan Taiwan 2026 · Destinasi, Boba & Pengalaman Tempatan",
    heroTitle1: "Terokai Keindahan Luar Biasa Taiwan",
    heroTitle2: "Gunung, Pantai, Mata Air Panas & Kemesraan",
    heroSubtitle: "Terokai 16 tema, Top 20 jenama boba, pemandu peribadi dan hotel mata air panas.",
    searchPlaceholder: "Cari destinasi, kedai boba, mata air panas atau pasar malam...",
    searchBtn: "Mula Terokai",
    btnTour: "🎟️ Tempah Lawatan",
    btnCharter: "🚗 Kereta Persendirian",
    btnHotel: "🏨 Tempah Hotel",
    btnHotelAlt: "🏨 Cari Bilik",
    btnFlight: "✈️ Penerbangan",
    btnMap: "📍 Peta",
    btnSouvenir: "🛍️ Cenderamata",
    serviceFlight: "Penerbangan",
    serviceFlightDesc: "Penerbangan & Pulau",
    serviceCharter: "Kereta Persendirian",
    serviceCharterDesc: "Pemandu peribadi",
    serviceAirport: "Pengangkutan Lapangan Terbang",
    serviceAirportDesc: "Taoyuan / Songshan",
    serviceHsr: "Kereta Laju Taiwan",
    serviceHsrDesc: "Diskaun 15%",
    serviceSouvenir: "Penghantaran Cenderamata",
    serviceSouvenirDesc: "Hantar terus ke hotel",
    sectionThemesTitle: "🗺️ 16 Sorotan Tema Pelancongan",
    sectionThemesDesc: "Dari pulau gunung berapi ke pasar malam dan mata air panas.",
    sectionDrinksTitle: "🧋 Top 20 Jenama Boba Taiwan",
    sectionDrinksDesc: "Kerajaan teh buih! Minuman istimewa yang disyorkan.",
    sectionSpotsTitle: "🏆 Top 20 Destinasi Wajib Lawat",
    sectionSpotsDesc: "Dipuji pelancong seluruh dunia. Keajaiban alam & sejarah.",
    favTitle: "Senarai Kegemaran Saya",
    favEmpty: "Tiada tempat disimpan. Terokai dan ketik ikon hati untuk simpan!"
  },
  "fil": {
    brandName: "Taiwan Roam",
    brandBadge: "Opisyal na Web Portal",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Home",
    navThemes: "16 Tema",
    navDrinks: "Top 20 Boba",
    navSpots: "Top 20 Destinasyon",
    navRegions: "22 Rehiyon",
    navSouvenir: "Pasabuy",
    heroTagline: "✨ 2026 Taiwan Travel Portal · Destinasyon, Boba at Lokal na Karanasan",
    heroTitle1: "Tuklasin ang Ganda ng Taiwan",
    heroTitle2: "Bundok, Baybayin, Hot Spring at Mainit na Pagtanggap",
    heroSubtitle: "I-explore ang 16 na tema, Top 20 boba, pribadong driver at hot spring hotel.",
    searchPlaceholder: "Maghanap ng destinasyon, boba shop, hot spring o night market...",
    searchBtn: "Simulan ang Pag-explore",
    btnTour: "🎟️ Mag-book ng Tour",
    btnCharter: "🚗 Pribadong Kotse",
    btnHotel: "🏨 Mag-book ng Hotel",
    btnHotelAlt: "🏨 Maghanap ng Kwarto",
    btnFlight: "✈️ Flights",
    btnMap: "📍 Mapa",
    btnSouvenir: "🛍️ Pasabuy",
    serviceFlight: "Flights",
    serviceFlightDesc: "Flights at Island Hopping",
    serviceCharter: "Pribadong Kotse",
    serviceCharterDesc: "Pribadong driver",
    serviceAirport: "Airport Transfer",
    serviceAirportDesc: "Taoyuan / Songshan",
    serviceHsr: "Taiwan HSR",
    serviceHsrDesc: "15% Discount",
    serviceSouvenir: "Pasabuy Delivery",
    serviceSouvenirDesc: "Ipadala sa hotel",
    sectionThemesTitle: "🗺️ 16 Tampok na Tema sa Paglalakbay",
    sectionThemesDesc: "Mula sa bulkanikong isla hanggang night market at hot spring.",
    sectionDrinksTitle: "🧋 Top 20 Boba Brands ng Taiwan",
    sectionDrinksDesc: "Ang kaharian ng bubble tea! Mga signature na inumin.",
    sectionSpotsTitle: "🏆 Top 20 Dapat Bisitahing Destinasyon",
    sectionSpotsDesc: "Pinupuri ng mga manlalakbay sa buong mundo. Likas na ganda at kasaysayan.",
    favTitle: "Aking Mga Paborito",
    favEmpty: "Wala pang naka-save. Mag-explore at pindutin ang puso para mag-save!"
  },
  "hi": {
    brandName: "Taiwan Roam",
    brandBadge: "आधिकारिक वेब पोर्टल",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "होम",
    navThemes: "16 थीम",
    navDrinks: "टॉप 20 बोबा",
    navSpots: "टॉप 20 स्थल",
    navRegions: "22 क्षेत्र",
    navSouvenir: "स्मृति चिन्ह",
    heroTagline: "✨ 2026 ताइवान यात्रा पोर्टल · स्थल, बोबा और स्थानीय अनुभव",
    heroTitle1: "ताइवान की अद्भुत सुंदरता की खोज करें",
    heroTitle2: "पहाड़, तट, गर्म पानी के झरने और आतिथ्य",
    heroSubtitle: "16 थीम, टॉप 20 बोबा, निजी चालक और हॉट स्प्रिंग होटल का अन्वेषण करें।",
    searchPlaceholder: "स्थल, बोबा शॉप, हॉट स्प्रिंग या नाइट मार्केट खोजें...",
    searchBtn: "खोज शुरू करें",
    btnTour: "🎟️ टूर बुक करें",
    btnCharter: "🚗 निजी कार",
    btnHotel: "🏨 होटल बुक करें",
    btnHotelAlt: "🏨 कमरा खोजें",
    btnFlight: "✈️ उड़ानें",
    btnMap: "📍 मैप",
    btnSouvenir: "🛍️ स्मृति चिन्ह",
    serviceFlight: "उड़ानें",
    serviceFlightDesc: "उड़ानें और द्वीप",
    serviceCharter: "निजी कार",
    serviceCharterDesc: "निजी चालक",
    serviceAirport: "एयरपोर्ट ट्रांसफर",
    serviceAirportDesc: "ताओयुआन / सोंगशान",
    serviceHsr: "ताइवान हाई-स्पीड रेल",
    serviceHsrDesc: "15% छूट",
    serviceSouvenir: "स्मृति चिन्ह डिलीवरी",
    serviceSouvenirDesc: "होटल तक डिलीवरी",
    sectionThemesTitle: "🗺️ 16 प्रमुख यात्रा थीम",
    sectionThemesDesc: "ज्वालामुखी द्वीप से लेकर नाइट मार्केट और हॉट स्प्रिंग तक।",
    sectionDrinksTitle: "🧋 ताइवान के टॉप 20 बोबा ब्रांड",
    sectionDrinksDesc: "बबल टी का साम्राज्य! पसंदीदा सिग्नेचर ड्रिंक।",
    sectionSpotsTitle: "🏆 टॉप 20 ज़रूर घूमने वाले स्थल",
    sectionSpotsDesc: "दुनिया भर के यात्रियों द्वारा सराहा गया। प्राकृतिक अजूबे और इतिहास।",
    favTitle: "मेरी पसंदीदा सूची",
    favEmpty: "अभी कोई स्थल सहेजा नहीं गया। खोजें और दिल पर टैप करके सहेजें!"
  },
  "id": {
    brandName: "Taiwan Roam",
    brandBadge: "Portal Web Resmi",
    brandSubtext: "TAIWAN WANDERLUST PORTAL",
    navHome: "Beranda",
    navThemes: "16 Tema",
    navDrinks: "Top 20 Boba",
    navSpots: "Top 20 Destinasi",
    navRegions: "22 Wilayah",
    navSouvenir: "Oleh-oleh",
    heroTagline: "✨ Portal Wisata Taiwan 2026 · Destinasi, Boba & Pengalaman Lokal",
    heroTitle1: "Temukan Pesona Menakjubkan Taiwan",
    heroTitle2: "Pegunungan, Pantai, Mata Air Panas & Keramahan",
    heroSubtitle: "Jelajahi 16 tema, Top 20 boba, mobil pribadi dengan sopir, dan hotel mata air panas.",
    searchPlaceholder: "Cari destinasi, kedai boba, mata air panas atau pasar malam...",
    searchBtn: "Mulai Jelajah",
    btnTour: "🎟️ Pesan Tur",
    btnCharter: "🚗 Mobil Pribadi",
    btnHotel: "🏨 Pesan Hotel",
    btnHotelAlt: "🏨 Cari Kamar",
    btnFlight: "✈️ Penerbangan",
    btnMap: "📍 Peta",
    btnSouvenir: "🛍️ Oleh-oleh",
    serviceFlight: "Penerbangan",
    serviceFlightDesc: "Penerbangan & Pulau",
    serviceCharter: "Mobil Pribadi",
    serviceCharterDesc: "Sopir pribadi",
    serviceAirport: "Transfer Bandara",
    serviceAirportDesc: "Taoyuan / Songshan",
    serviceHsr: "Kereta Cepat Taiwan",
    serviceHsrDesc: "Diskon 15%",
    serviceSouvenir: "Pengiriman Oleh-oleh",
    serviceSouvenirDesc: "Kirim langsung ke hotel",
    sectionThemesTitle: "🗺️ 16 Sorotan Tema Wisata",
    sectionThemesDesc: "Dari pulau vulkanik hingga pasar malam dan mata air panas.",
    sectionDrinksTitle: "🧋 Top 20 Merek Boba Taiwan",
    sectionDrinksDesc: "Kerajaan bubble tea! Minuman khas yang direkomendasikan.",
    sectionSpotsTitle: "🏆 Top 20 Destinasi Wajib Kunjungi",
    sectionSpotsDesc: "Dipuji wisatawan dunia. Keajaiban alam & warisan budaya.",
    favTitle: "Daftar Favorit Saya",
    favEmpty: "Belum ada tempat tersimpan. Jelajahi dan ketuk ikon hati untuk menyimpan!"
  }
};

const WEB_CHROME_I18N = {
  "zh-TW": {
    navRankings: "排行榜",
    navCafe: "全台咖啡與米其林",
    navCommunity: "留言討論",
    heroZakkaTitle: "今天，想在台灣哪裡吃喝玩樂？",
    heroZakkaLead: "把好心情裝進行囊。追一杯手沖的香氣、探一口街角的夜市煙火，漫步這座被山海擁抱的島嶼。",
    tabFlight: "✈️ 搜機票 Flights",
    tabCharter: "🚗 預約包車 Private Charter",
    tabAirport: "🚐 機場接送 Airport Transfer",
    tabEsim: "📶 台灣網卡 eSIM",
    tabRankings: "🏆 熱門榜單 Rankings",
    tabSouvenir: "🛍️ 伴手禮直送 Souvenirs",
    colMichelinTitle: "米其林指南名店",
    colMichelinSubtitle: "星級名饌與全台必比登推薦",
    colCafeTitle: "全台風格咖啡圖鑑",
    colCafeSubtitle: "330間巷弄老宅與手沖海景",
    colForeignersTitle: "外國人必看專區",
    colForeignersSubtitle: "司機大字卡 ‧ 伴手禮直寄",
    trendingTitle: "台灣一日遊行程推薦",
    trendingSub: "TAIWAN DAY TOURS & CHARTERS",
    trendingDesc: "人氣排行行程，外國人最愛台灣的跟團包車",
    themesTitle: "精選旅行主題",
    citySpotsTitle: "全台城市與景點探索",
    footerContactLabel: "品牌合作洽詢",
    footerQuickLinks: "專題導覽",
    footerBottom: "© 2026 台灣吃喝玩樂 TAIWAN ROAM. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 全台景點", "🌟 米其林星級與必比登美食", "☕ 精選咖啡店", "🚗 台灣旅遊包車推薦行程", "🐢 跳島浮潛和海龜", "🚂 火車鐵道之旅", "📖 深度慢活採訪實錄"],
    themeCards: [
      { title: "⛰️ 露營登山", desc: "星空露營車與高山極光。", tag: "百岳星空 ➔" },
      { title: "🏝️ 離島跳島", desc: "綠島蘭嶼與海龜浮潛。", tag: "海龜跳島 ➔" },
      { title: "☕ 風格咖啡", desc: "22 縣市 330 間名店。", tag: "330 名店 ➔" },
      { title: "🍢 花火小吃", desc: "必比登小吃與璀璨煙火。", tag: "米其林攤 ➔" },
      { title: "🥩 美饌燒肉", desc: "和牛炭烤米其林星選。", tag: "星級燒肉 ➔" },
      { title: "♨️ 溫泉舒活", desc: "北投白磺礁溪名湯白霧。", tag: "名湯白霧 ➔" },
      { title: "🚗 環島壯遊", desc: "夢幻森林螢火蟲自駕。", tag: "公路自駕 ➔" }
    ]
  },
  "en": {
    navRankings: "Rankings",
    navCafe: "Cafes & Michelin",
    navCommunity: "Community",
    heroZakkaTitle: "Where shall we wander & taste across Taiwan today?",
    heroZakkaLead: "Pack your happiest mood. Follow the aroma of pour-over coffee, savor night market street food, and wander through this island embraced by mountain and sea.",
    tabFlight: "✈️ Flights",
    tabCharter: "🚗 Private Charter",
    tabAirport: "🚐 Airport Transfer",
    tabEsim: "📶 Taiwan eSIM",
    tabRankings: "🏆 Rankings",
    tabSouvenir: "🛍️ Souvenirs",
    colMichelinTitle: "Michelin Star & Bib Gourmand",
    colMichelinSubtitle: "Starred fine dining & local street food",
    colCafeTitle: "Taiwan Curated Cafe Atlas",
    colCafeSubtitle: "330 historic hideouts & sea views",
    colForeignersTitle: "Foreign Travelers Guide",
    colForeignersSubtitle: "Taxi flashcards · Souvenirs delivery",
    trendingTitle: "Taiwan Day Tours & Charters",
    trendingSub: "TOP 6 BESTSELLING DAY TRIPS & CHARTERS",
    trendingDesc: "Most popular chartered & guided day trips loved by international travelers",
    themesTitle: "Curated Travel Themes",
    citySpotsTitle: "Explore Taiwan Cities & Attractions",
    footerContactLabel: "Business Partnership",
    footerQuickLinks: "Quick Links",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 All Taiwan Spots", "🌟 Michelin Stars & Bib Gourmand", "☕ Curated Cafes", "🚗 Taiwan Charter Tours", "🐢 Island Hopping & Sea Turtles", "🚂 Scenic Train Journeys", "📖 In-depth Editorial Stories"],
    themeCards: [
      { title: "⛰️ Camping & Hiking", desc: "Starlit camping cars & alpine views.", tag: "Alpine Stars ➔" },
      { title: "🏝️ Island Hopping", desc: "Green Island, Orchid Island & turtle snorkeling.", tag: "Turtle Hopping ➔" },
      { title: "☕ Style Cafes", desc: "330 cafes across 22 cities.", tag: "330 Cafes ➔" },
      { title: "🍢 Night Market Bites", desc: "Bib Gourmand snacks & dazzling fireworks.", tag: "Michelin Stalls ➔" },
      { title: "🥩 Gourmet BBQ", desc: "Wagyu charcoal-grilled, Michelin-starred.", tag: "Star BBQ ➔" },
      { title: "♨️ Hot Spring Spa", desc: "Beitou white sulfur & Jiaoxi famous springs.", tag: "Famous Springs ➔" },
      { title: "🚗 Round-Taiwan Drive", desc: "Dreamy forests & fireflies self-drive.", tag: "Road Trip ➔" }
    ]
  },
  "ja": {
    navRankings: "ランキング",
    navCafe: "カフェ＆ミシュラン",
    navCommunity: "コミュニティ",
    heroZakkaTitle: "今日は台湾のどこで食べて遊ぼう？",
    heroZakkaLead: "楽しい気分を鞄に詰めて。ハンドドリップの香りを追い、夜市の屋台を味わい、山海に抱かれたこの島を散策しよう。",
    tabFlight: "✈️ 航空券検索",
    tabCharter: "🚗 チャーター車",
    tabAirport: "🚐 空港送迎",
    tabEsim: "📶 台湾eSIM",
    tabRankings: "🏆 ランキング",
    tabSouvenir: "🛍️ お土産直送",
    colMichelinTitle: "ミシュラン＆ビブグルマン",
    colMichelinSubtitle: "星付き名店と地元の屋台グルメ",
    colCafeTitle: "台湾カフェ図鑑",
    colCafeSubtitle: "330軒の路地裏・古民家と海景カフェ",
    colForeignersTitle: "外国人向けガイド",
    colForeignersSubtitle: "タクシー指さしカード・お土産直送",
    trendingTitle: "台湾日帰りツアー",
    trendingSub: "TOP 6 人気日帰りツアー＆チャーター",
    trendingDesc: "外国人に人気のチャーター・ガイド付き日帰りツアー",
    themesTitle: "おすすめ旅行テーマ",
    citySpotsTitle: "台湾の都市と観光スポット",
    footerContactLabel: "ブランド提携",
    footerQuickLinks: "クイックリンク",
    footerBottom: "© 2026 台湾吃喝玩楽 TAIWAN ROAM. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 台湾の観光スポット", "🌟 ミシュラン星とビブグルマン", "☕ おすすめカフェ", "🚗 台湾チャーター旅行", "🐢 離島ホッピングとウミガメ", "🚂 鉄道の旅", "📖 深掘り取材記事"],
    themeCards: [
      { title: "⛰️ キャンプ＆登山", desc: "星空キャンピングカーと高山の絶景。", tag: "高山絶景 ➔" },
      { title: "🏝️ 離島ホッピング", desc: "緑島・蘭嶼とウミガメシュノーケル。", tag: "ウミガメ ➔" },
      { title: "☕ スタイルカフェ", desc: "22都市330店舗。", tag: "330店舗 ➔" },
      { title: "🍢 夜市グルメ", desc: "ビブグルマン小吃と花火。", tag: "ミシュラン屋台 ➔" },
      { title: "🥩 美食焼肉", desc: "和牛炭火焼きミシュラン星。", tag: "星付き焼肉 ➔" },
      { title: "♨️ 温泉リラックス", desc: "北投白濁・礁渓名湯。", tag: "名湯めぐり ➔" },
      { title: "🚗 台湾一周", desc: "夢の森と蛍のドライブ。", tag: "ロードトリップ ➔" }
    ]
  },
  "ko": {
    navRankings: "랭킹",
    navCafe: "카페 & 미슐랭",
    navCommunity: "커뮤니티",
    heroZakkaTitle: "오늘은 대만 어디에서 즐길까요?",
    heroZakkaLead: "기분 좋게 떠나보세요. 핸드드립 향기를 따라, 야시장 먹거리를 맛보고 산과 바다가 품은 섬을 거닐어 보세요.",
    tabFlight: "✈️ 항공권",
    tabCharter: "🚗 프라이빗 카",
    tabAirport: "🚐 공항 픽업",
    tabEsim: "📶 대만 eSIM",
    tabRankings: "🏆 랭킹",
    tabSouvenir: "🛍️ 기념품",
    colMichelinTitle: "미슐랭 & 빕구르망",
    colMichelinSubtitle: "스타 레스토랑과 현지 길거리 음식",
    colCafeTitle: "대만 카페 아틀라스",
    colCafeSubtitle: "330곳의 골목 옛집과 오션뷰",
    colForeignersTitle: "외국인 전용 가이드",
    colForeignersSubtitle: "택시 대화 카드 · 기념품 배송",
    trendingTitle: "대만 당일치기 투어",
    trendingSub: "TOP 6 베스트셀러 당일 투어",
    trendingDesc: "외국인에게 인기 있는 전세차 및 가이드 투어",
    themesTitle: "추천 여행 테마",
    citySpotsTitle: "대만 도시와 명소 둘러보기",
    footerContactLabel: "브랜드 제휴",
    footerQuickLinks: "바로가기",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 대만 명소", "🌟 미슐랭 스타 & 빕구르망", "☕ 추천 카페", "🚗 대만 전세차 투어", "🐢 섬 호핑 & 바다거북", "🚂 기차 여행", "📖 심층 취재 기사"],
    themeCards: [
      { title: "⛰️ 캠핑 & 등산", desc: "별빛 캠핑카와 고산 절경.", tag: "고산 절경 ➔" },
      { title: "🏝️ 섬 호핑", desc: "그린아일랜드·란위와 바다거북 스노클링.", tag: "거북 호핑 ➔" },
      { title: "☕ 스타일 카페", desc: "22개 도시 330곳.", tag: "330곳 ➔" },
      { title: "🍢 야시장 먹거리", desc: "빕구르망 간식과 화려한 불꽃.", tag: "미슐랭 포장마차 ➔" },
      { title: "🥩 미식 바비큐", desc: "와규 숯불구이 미슐랭 스타.", tag: "스타 바비큐 ➔" },
      { title: "♨️ 온천 힐링", desc: "베이터우 백황천·자오시 명탕.", tag: "명탕 순례 ➔" },
      { title: "🚗 대만 일주", desc: "꿈같은 숲과 반딧불 드라이브.", tag: "로드트립 ➔" }
    ]
  },
  "vi": {
    navRankings: "Xếp hạng",
    navCafe: "Cà phê & Michelin",
    navCommunity: "Cộng đồng",
    heroZakkaTitle: "Hôm nay bạn muốn ăn gì, chơi gì ở Đài Loan?",
    heroZakkaLead: "Mang theo tâm trạng vui vẻ. Đuổi theo hương cà phê pha tay, thưởng thức món ăn chợ đêm và dạo bước trên hòn đảo ôm trọn núi và biển.",
    tabFlight: "✈️ Vé máy bay",
    tabCharter: "🚗 Xe riêng",
    tabAirport: "🚐 Đưa đón sân bay",
    tabEsim: "📶 eSIM Đài Loan",
    tabRankings: "🏆 Xếp hạng",
    tabSouvenir: "🛍️ Quà lưu niệm",
    colMichelinTitle: "Michelin & Bib Gourmand",
    colMichelinSubtitle: "Nhà hàng gắn sao và món đường phố",
    colCafeTitle: "Bản đồ cà phê Đài Loan",
    colCafeSubtitle: "330 quán cổ và view biển",
    colForeignersTitle: "Cẩm nang cho người nước ngoài",
    colForeignersSubtitle: "Thẻ đối thoại taxi · Giao quà",
    trendingTitle: "Tour trong ngày Đài Loan",
    trendingSub: "TOP 6 TOUR TRONG NGÀY BÁN CHẠY",
    trendingDesc: "Tour xe riêng và có hướng dẫn được du khách yêu thích",
    themesTitle: "Chủ đề du lịch nổi bật",
    citySpotsTitle: "Khám phá thành phố và điểm đến",
    footerContactLabel: "Hợp tác thương hiệu",
    footerQuickLinks: "Liên kết nhanh",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 Điểm đến Đài Loan", "🌟 Sao Michelin & Bib Gourmand", "☕ Cà phê chọn lọc", "🚗 Tour xe riêng Đài Loan", "🐢 Island hopping & rùa biển", "🚂 Hành trình tàu hỏa", "📖 Bài viết chuyên sâu"],
    themeCards: [
      { title: "⛰️ Cắm trại & Leo núi", desc: "Xe cắm trại dưới sao và cảnh núi cao.", tag: "Sao núi cao ➔" },
      { title: "🏝️ Đảo Hopping", desc: "Đảo Xanh, Lan Tự và lặn ngắm rùa.", tag: "Rùa biển ➔" },
      { title: "☕ Cà phê phong cách", desc: "330 quán tại 22 thành phố.", tag: "330 quán ➔" },
      { title: "🍢 Món chợ đêm", desc: "Món Bib Gourmand và pháo hoa rực rỡ.", tag: "Gian Michelin ➔" },
      { title: "🥩 Thịt nướng cao cấp", desc: "Bò wagyu nướng than đạt sao Michelin.", tag: "Nướng sao ➔" },
      { title: "♨️ Suối nước nóng", desc: "Suối lưu huỳnh Beitou & Jiaoxi.", tag: "Suối nổi tiếng ➔" },
      { title: "🚗 Vòng quanh Đài Loan", desc: "Rừng mộng mơ và đom đóm tự lái.", tag: "Tự lái ➔" }
    ]
  },
  "th": {
    navRankings: "จัดอันดับ",
    navCafe: "คาเฟ่ & มิชลิน",
    navCommunity: "ชุมชน",
    heroZakkaTitle: "วันนี้อยากไปกินเล่นที่ไหนในไต้หวันดี?",
    heroZakkaLead: "แพ็กความสุขไปด้วย ตามกลิ่นกาแฟดริป ลิ้มรสอาหารตลาดกลางคืน และเดินเล่นบนเกาะที่โอบล้อมด้วยภูเขาและทะเล",
    tabFlight: "✈️ เที่ยวบิน",
    tabCharter: "🚗 รถเหมา",
    tabAirport: "🚐 รับส่งสนามบิน",
    tabEsim: "📶 eSIM ไต้หวัน",
    tabRankings: "🏆 จัดอันดับ",
    tabSouvenir: "🛍️ ของฝาก",
    colMichelinTitle: "มิชลิน & บิบกูร์มองด์",
    colMichelinSubtitle: "ร้านดาวและอาหารริมทาง",
    colCafeTitle: "แผนที่คาเฟ่ไต้หวัน",
    colCafeSubtitle: "330 ร้านบ้านเก่าและวิวทะเล",
    colForeignersTitle: "คู่มือชาวต่างชาติ",
    colForeignersSubtitle: "การ์ดคุยแท็กซี่ · ส่งของฝาก",
    trendingTitle: "ทัวร์หนึ่งวันไต้หวัน",
    trendingSub: "TOP 6 ทัวร์หนึ่งวันยอดนิยม",
    trendingDesc: "ทัวร์เหมาพร้อมไกด์ที่ชาวต่างชาติชื่นชอบ",
    themesTitle: "ธีมท่องเที่ยวแนะนำ",
    citySpotsTitle: "สำรวจเมืองและสถานที่ไต้หวัน",
    footerContactLabel: "ร่วมมือแบรนด์",
    footerQuickLinks: "ลิงก์ด่วน",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 สถานที่ท่องเที่ยวไต้หวัน", "🌟 มิชลินสตาร์ & บิบกูร์มองด์", "☕ คาเฟ่แนะนำ", "🚗 ทัวร์รถเหมาไต้หวัน", "🐢 กระโดดเกาะ & เต่าทะเล", "🚂 ทริปรถไฟ", "📖 บทความเจาะลึก"],
    themeCards: [
      { title: "⛰️ ตั้งแคมป์ & ปีนเขา", desc: "รถแคมป์ใต้ดาวและวิวภูเขาสูง.", tag: "ดาวบนยอดเขา ➔" },
      { title: "🏝️ กระโดดเกาะ", desc: "เกาะกรีน เกาะหลานอวี่ และดำน้ำดูเต่า.", tag: "เต่าทะเล ➔" },
      { title: "☕ คาเฟ่สไตล์", desc: "330 ร้านใน 22 เมือง.", tag: "330 ร้าน ➔" },
      { title: "🍢 ของกินตลาดกลางคืน", desc: "ของกินบิบกูร์มองด์และพลุไฟ.", tag: "ร้านมิชลิน ➔" },
      { title: "🥩 ปิ้งย่างพรีเมียม", desc: "วากิวย่างถ่านระดับมิชลิน.", tag: "ย่างระดับดาว ➔" },
      { title: "♨️ ออนเซ็น", desc: "เป่ยโถว เจียวซี น้ำพุร้อนดัง.", tag: "ออนเซ็นชื่อดัง ➔" },
      { title: "🚗 ขับรอบไต้หวัน", desc: "ป่าในฝันและหิ่งห้อย.", tag: "ทริปขับรถ ➔" }
    ]
  },
  "id": {
    navRankings: "Peringkat",
    navCafe: "Kafe & Michelin",
    navCommunity: "Komunitas",
    heroZakkaTitle: "Mau makan dan main ke mana di Taiwan hari ini?",
    heroZakkaLead: "Bawa suasana hati yang bahagia. Ikuti aroma kopi seduh, nikmati jajanan pasar malam, dan berjalan di pulau yang dipeluk gunung dan laut.",
    tabFlight: "✈️ Penerbangan",
    tabCharter: "🚗 Mobil Pribadi",
    tabAirport: "🚐 Transfer Bandara",
    tabEsim: "📶 eSIM Taiwan",
    tabRankings: "🏆 Peringkat",
    tabSouvenir: "🛍️ Oleh-oleh",
    colMichelinTitle: "Michelin & Bib Gourmand",
    colMichelinSubtitle: "Restoran berbintang dan jajanan jalanan",
    colCafeTitle: "Atlas Kafe Taiwan",
    colCafeSubtitle: "330 kafe rumah tua dan pemandangan laut",
    colForeignersTitle: "Panduan Wisatawan Asing",
    colForeignersSubtitle: "Kartu taksi · Kirim oleh-oleh",
    trendingTitle: "Tur Sehari Taiwan",
    trendingSub: "TOP 6 TUR SEHARI TERLARIS",
    trendingDesc: "Tur mobil sewaan dan berpemandu favorit wisatawan",
    themesTitle: "Tema Wisata Pilihan",
    citySpotsTitle: "Jelajahi Kota & Tempat Wisata",
    footerContactLabel: "Kemitraan Merek",
    footerQuickLinks: "Tautan Cepat",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 Tempat Wisata Taiwan", "🌟 Bintang Michelin & Bib Gourmand", "☕ Kafe Pilihan", "🚗 Tur Mobil Taiwan", "🐢 Island Hopping & Penyu", "🚂 Perjalanan Kereta", "📖 Artikel Mendalam"],
    themeCards: [
      { title: "⛰️ Camping & Hiking", desc: "Mobil camping di bawah bintang dan pemandangan pegunungan.", tag: "Bintang Gunung ➔" },
      { title: "🏝️ Island Hopping", desc: "Green Island, Orchid Island & snorkeling penyu.", tag: "Penyu ➔" },
      { title: "☕ Kafe Bergaya", desc: "330 kafe di 22 kota.", tag: "330 Kafe ➔" },
      { title: "🍢 Jajanan Pasar Malam", desc: "Camilan Bib Gourmand & kembang api.", tag: "Gerai Michelin ➔" },
      { title: "🥩 BBQ Premium", desc: "Wagyu panggang arang bintang Michelin.", tag: "BBQ Bintang ➔" },
      { title: "♨️ Pemandian Air Panas", desc: "Beitou sulfur putih & Jiaoxi.", tag: "Air Panas Terkenal ➔" },
      { title: "🚗 Keliling Taiwan", desc: "Hutan impian & kunang-kunang.", tag: "Road Trip ➔" }
    ]
  },
  "ms": {
    navRankings: "Kedudukan",
    navCafe: "Kafe & Michelin",
    navCommunity: "Komuniti",
    heroZakkaTitle: "Hari ini nak makan dan main di mana di Taiwan?",
    heroZakkaLead: "Bawa mood gembira. Ikut aroma kopi tuang, nikmati makanan pasar malam, dan bersiar di pulau yang dipeluk gunung dan laut.",
    tabFlight: "✈️ Penerbangan",
    tabCharter: "🚗 Kereta Persendirian",
    tabAirport: "🚐 Transfer Lapangan Terbang",
    tabEsim: "📶 eSIM Taiwan",
    tabRankings: "🏆 Kedudukan",
    tabSouvenir: "🛍️ Cenderamata",
    colMichelinTitle: "Michelin & Bib Gourmand",
    colMichelinSubtitle: "Restoran berbintang dan makanan jalanan",
    colCafeTitle: "Atlas Kafe Taiwan",
    colCafeSubtitle: "330 kafe rumah lama dan pemandangan laut",
    colForeignersTitle: "Panduan Pelancong Asing",
    colForeignersSubtitle: "Kad teksi · Hantar cenderamata",
    trendingTitle: "Lawatan Sehari Taiwan",
    trendingSub: "TOP 6 LAWATAN SEHARI TERLARIS",
    trendingDesc: "Lawatan kereta sewa dan berpemandu kegemaran pelancong",
    themesTitle: "Tema Perjalanan Pilihan",
    citySpotsTitle: "Terokai Bandar & Tarikan",
    footerContactLabel: "Kerjasama Jenama",
    footerQuickLinks: "Pautan Pantas",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 Destinasi Taiwan", "🌟 Bintang Michelin & Bib Gourmand", "☕ Kafe Pilihan", "🚗 Lawatan Kereta Taiwan", "🐢 Island Hopping & Penyu", "🚂 Perjalanan Kereta Api", "📖 Artikel Mendalam"],
    themeCards: [
      { title: "⛰️ Perkhemahan & Mendaki", desc: "Kereta khemah bawah bintang dan pemandangan gunung.", tag: "Bintang Gunung ➔" },
      { title: "🏝️ Island Hopping", desc: "Pulau Hijau, Pulau Lanyu & snorkeling penyu.", tag: "Penyu ➔" },
      { title: "☕ Kafe Bergaya", desc: "330 kafe di 22 bandar.", tag: "330 Kafe ➔" },
      { title: "🍢 Makanan Pasar Malam", desc: "Snek Bib Gourmand & bunga api.", tag: "Gerai Michelin ➔" },
      { title: "🥩 BBQ Premium", desc: "Wagyu panggang arang bintang Michelin.", tag: "BBQ Bintang ➔" },
      { title: "♨️ Kolam Air Panas", desc: "Beitou sulfur putih & Jiaoxi.", tag: "Air Panas Terkenal ➔" },
      { title: "🚗 Jelajah Taiwan", desc: "Hutan impian & kunang-kunang.", tag: "Road Trip ➔" }
    ]
  },
  "fil": {
    navRankings: "Ranggo",
    navCafe: "Kape & Michelin",
    navCommunity: "Komunidad",
    heroZakkaTitle: "Saan tayo kakain at maglilibot sa Taiwan ngayon?",
    heroZakkaLead: "Dala ang masayang pakiramdam. Sundan ang aroma ng pour-over na kape, tikman ang street food sa night market, at maglakad sa islang yakap ng bundok at dagat.",
    tabFlight: "✈️ Flights",
    tabCharter: "🚗 Pribadong Kotse",
    tabAirport: "🚐 Airport Transfer",
    tabEsim: "📶 Taiwan eSIM",
    tabRankings: "🏆 Ranggo",
    tabSouvenir: "🛍️ Pasabuy",
    colMichelinTitle: "Michelin & Bib Gourmand",
    colMichelinSubtitle: "Starred na kainan at lokal na street food",
    colCafeTitle: "Atlas ng Kape sa Taiwan",
    colCafeSubtitle: "330 lumang bahay na kape at sea view",
    colForeignersTitle: "Gabay para sa Dayuhan",
    colForeignersSubtitle: "Taxi flashcards · Pasabuy delivery",
    trendingTitle: "Day Tour sa Taiwan",
    trendingSub: "TOP 6 MABILIS MAUBOS NA DAY TOURS",
    trendingDesc: "Paboritong chartered at guided na tour ng mga manlalakbay",
    themesTitle: "Mga Piniling Tema sa Paglalakbay",
    citySpotsTitle: "Tuklasin ang mga Lungsod at Atraksyon",
    footerContactLabel: "Brand Partnership",
    footerQuickLinks: "Mabilisang Link",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 Mga Destinasyon sa Taiwan", "🌟 Michelin Stars & Bib Gourmand", "☕ Mga Piling Kape", "🚗 Taiwan Charter Tours", "🐢 Island Hopping & Pawikan", "🚂 Paglalakbay sa Tren", "📖 Malalim na Artikulo"],
    themeCards: [
      { title: "⛰️ Camping & Hiking", desc: "Camping sa ilalim ng bituin at tanawin ng bundok.", tag: "Bituin sa Bundok ➔" },
      { title: "🏝️ Island Hopping", desc: "Green Island, Orchid Island at snorkeling ng pawikan.", tag: "Pawikan ➔" },
      { title: "☕ Mga Styling Kape", desc: "330 cafe sa 22 siyudad.", tag: "330 Cafe ➔" },
      { title: "🍢 Pagkain sa Night Market", desc: "Bib Gourmand meryenda at paputok.", tag: "Michelin Stall ➔" },
      { title: "🥩 Premium BBQ", desc: "Wagyu inihaw, Michelin-starred.", tag: "Star BBQ ➔" },
      { title: "♨️ Hot Spring", desc: "Beitou white sulfur at Jiaoxi.", tag: "Sikat na Hot Spring ➔" },
      { title: "🚗 Ikot-Taiwan Drive", desc: "Pangarap na gubat at alitaptap.", tag: "Road Trip ➔" }
    ]
  },
  "hi": {
    navRankings: "रैंकिंग",
    navCafe: "कैफ़े & मिशेलिन",
    navCommunity: "समुदाय",
    heroZakkaTitle: "आज ताइवान में कहाँ खाएँ और घूमें?",
    heroZakkaLead: "खुशमिज़ाज़ मन लेकर चलें। पोर-ओवर कॉफ़ी की खुशबू का पीछा करें, नाइट मार्केट का स्ट्रीट फ़ूड चखें और पहाड़-समुद्र से घिरे इस द्वीप पर घूमें।",
    tabFlight: "✈️ उड़ानें",
    tabCharter: "🚗 निजी कार",
    tabAirport: "🚐 एयरपोर्ट ट्रांसफर",
    tabEsim: "📶 ताइवान eSIM",
    tabRankings: "🏆 रैंकिंग",
    tabSouvenir: "🛍️ स्मृति चिन्ह",
    colMichelinTitle: "मिशेलिन & बिब गुरमां",
    colMichelinSubtitle: "स्टार रेस्तरां और स्थानीय स्ट्रीट फ़ूड",
    colCafeTitle: "ताइवान कैफ़े एटलस",
    colCafeSubtitle: "330 पुराने घर और समुद्र दृश्य वाले कैफ़े",
    colForeignersTitle: "विदेशी यात्रियों की मार्गदर्शिका",
    colForeignersSubtitle: "टैक्सी फ्लैशकार्ड · स्मृति चिन्ह डिलीवरी",
    trendingTitle: "ताइवान डे टूर",
    trendingSub: "TOP 6 सबसे ज़्यादा बिकने वाले डे टूर",
    trendingDesc: "यात्रियों के पसंदीदा चार्टर्ड और गाइडेड टूर",
    themesTitle: "पसंदीदा यात्रा थीम",
    citySpotsTitle: "शहर और आकर्षण खोजें",
    footerContactLabel: "ब्रांड साझेदारी",
    footerQuickLinks: "क्विक लिंक",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 ताइवान के स्थल", "🌟 मिशेलिन स्टार & बिब गुरमां", "☕ चुनिंदा कैफ़े", "🚗 ताइवान चार्टर टूर", "🐢 आइलैंड होपिंग & कछुआ", "🚂 ट्रेन यात्रा", "📖 गहन लेख"],
    themeCards: [
      { title: "⛰️ कैंपिंग & हाइकिंग", desc: "तारों भरे कैंपिंग और पहाड़ी नज़ारे।", tag: "पहाड़ी सितारे ➔" },
      { title: "🏝️ आइलैंड होपिंग", desc: "ग्रीन आइलैंड, ओर्किड आइलैंड और कछुआ स्नॉर्कलिंग।", tag: "कछुआ ➔" },
      { title: "☕ स्टाइल कैफ़े", desc: "22 शहरों के 330 कैफ़े।", tag: "330 कैफ़े ➔" },
      { title: "🍢 नाइट मार्केट भोजन", desc: "बिब गुरमां स्नैक्स और आतिशबाज़ी।", tag: "मिशेलिन स्टॉल ➔" },
      { title: "🥩 प्रीमियम BBQ", desc: "मिशेलिन-स्टार वाग्यू चारकोल ग्रिल।", tag: "स्टार BBQ ➔" },
      { title: "♨️ हॉट स्प्रिंग", desc: "बेइटोउ सफ़ेद सल्फर और जियाओक्सी।", tag: "मशहूर हॉट स्प्रिंग ➔" },
      { title: "🚗 ताइवान राउंड ट्रिप", desc: "सपनों भरे जंगल और जुगनू ड्राइव।", tag: "रोड ट्रिप ➔" }
    ]
  },
  "es": {
    navRankings: "Rankings",
    navCafe: "Cafés y Michelin",
    navCommunity: "Comunidad",
    heroZakkaTitle: "¿Dónde comer y pasear hoy por Taiwán?",
    heroZakkaLead: "Empaca tu mejor ánimo. Sigue el aroma del café de vertido, saborea la comida callejera del mercado nocturno y pasea por esta isla abrazada por montaña y mar.",
    tabFlight: "✈️ Vuelos",
    tabCharter: "🚗 Coche Privado",
    tabAirport: "🚐 Traslado al Aeropuerto",
    tabEsim: "📶 eSIM Taiwán",
    tabRankings: "🏆 Rankings",
    tabSouvenir: "🛍️ Recuerdos",
    colMichelinTitle: "Michelin y Bib Gourmand",
    colMichelinSubtitle: "Restaurantes con estrella y comida callejera",
    colCafeTitle: "Atlas de Cafés de Taiwán",
    colCafeSubtitle: "330 cafés en casas antiguas con vistas al mar",
    colForeignersTitle: "Guía para Extranjeros",
    colForeignersSubtitle: "Tarjetas para taxis · Envío de recuerdos",
    trendingTitle: "Tours de un día por Taiwán",
    trendingSub: "TOP 6 TOURS DE UN DÍA MÁS VENDIDOS",
    trendingDesc: "Tours chárter y guiados favoritos de los viajeros",
    themesTitle: "Temas de viaje destacados",
    citySpotsTitle: "Explora ciudades y atracciones",
    footerContactLabel: "Colaboración de Marca",
    footerQuickLinks: "Enlaces Rápidos",
    footerBottom: "© 2026 Taiwan Roam. All Rights Reserved. Powered by HiMyDream Studio.",
    footerQuickLinkItems: ["📍 Destinos de Taiwán", "🌟 Estrellas Michelin y Bib Gourmand", "☕ Cafés Seleccionados", "🚗 Tours Chárter por Taiwán", "🐢 Salto de Islas y Tortugas", "🚂 Rutas en Tren", "📖 Artículos en Profundidad"],
    themeCards: [
      { title: "⛰️ Camping y Senderismo", desc: "Autocaravanas bajo las estrellas y vistas alpinas.", tag: "Estrellas Alpinas ➔" },
      { title: "🏝️ Salto de Islas", desc: "Isla Verde, Orquídea y snorkel con tortugas.", tag: "Tortugas ➔" },
      { title: "☕ Cafés con Estilo", desc: "330 cafés en 22 ciudades.", tag: "330 Cafés ➔" },
      { title: "🍢 Bocados Nocturnos", desc: "Tapas Bib Gourmand y fuegos artificiales.", tag: "Puestos Michelin ➔" },
      { title: "🥩 Barbacoa Gourmet", desc: "Wagyu a la brasa con estrella Michelin.", tag: "BBQ Estrella ➔" },
      { title: "♨️ Aguas Termales", desc: "Beitou y las famosas termas de Jiaoxi.", tag: "Termas Famosas ➔" },
      { title: "🚗 Vuelta a Taiwán", desc: "Bosques de ensueño y luciérnagas en coche.", tag: "Ruta en Coche ➔" }
    ]
  }
};

/**
 * 台灣吃喝玩樂網頁版 - 國際化語系切換執行函數 (Dictionary-driven Engine)
 */
async function switchLanguage(lang) {
  if (!lang) lang = "zh-TW";
  if (typeof currentLang !== "undefined") currentLang = lang;
  try { localStorage.setItem("taiwan_travel_lang", lang); } catch (e) {}

  const core = WEB_I18N[lang] || WEB_I18N.en || WEB_I18N["zh-TW"];
  const chrome = WEB_CHROME_I18N[lang] || WEB_CHROME_I18N.en || WEB_CHROME_I18N["zh-TW"];

  // 1. 同步語言下拉選單狀態
  document.querySelectorAll("#global-lang-select, .header-lang-select, .clean-lang-select").forEach(sel => {
    sel.value = lang;
  });
  document.querySelectorAll(".lang-pill").forEach(btn => {
    const onclickStr = btn.getAttribute("onclick") || "";
    if (onclickStr.includes(`'${lang}'`)) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  // 2. 品牌與導航
  const brandNameEl = document.querySelector(".brand-name");
  if (brandNameEl) brandNameEl.textContent = core.brandName;
  const brandSubtextEl = document.querySelector(".brand-subtext");
  if (brandSubtextEl) brandSubtextEl.textContent = core.brandSubtext;

  const navItems = document.querySelectorAll(".nav-menu .nav-item a");
  const navLabels = [core.navHome, core.navThemes, core.navSpots, chrome.navRankings, chrome.navCafe, chrome.navCommunity];
  navItems.forEach((item, idx) => {
    if (navLabels[idx] != null) item.textContent = navLabels[idx];
  });

  const ctaBtn = document.querySelector(".header-right-tools .btn-cta-primary");
  if (ctaBtn) ctaBtn.textContent = core.btnSouvenir;

  // 3. Hero 英雄區塊
  const heroZakkaTitle = document.querySelector(".hero-zakka-title");
  if (heroZakkaTitle) heroZakkaTitle.textContent = chrome.heroZakkaTitle;
  const heroZakkaLead = document.querySelector(".hero-zakka-lead");
  if (heroZakkaLead) heroZakkaLead.textContent = chrome.heroZakkaLead;

  const serviceTabs = document.querySelectorAll(".hero-service-tab");
  const tabLabels = [chrome.tabFlight, chrome.tabCharter, chrome.tabAirport, chrome.tabEsim, chrome.tabRankings, chrome.tabSouvenir];
  serviceTabs.forEach((tab, idx) => {
    if (tabLabels[idx] != null) tab.textContent = tabLabels[idx];
  });

  const searchInput = document.getElementById("hero-main-search");
  if (searchInput) searchInput.placeholder = core.searchPlaceholder;
  const searchBtn = document.getElementById("hero-search-btn");
  if (searchBtn) searchBtn.textContent = core.searchBtn;

  // Hero 3 分格
  const michelinCol = document.querySelector(".michelin-col");
  if (michelinCol) {
    const t = michelinCol.querySelector(".featured-col-title");
    const s = michelinCol.querySelector(".featured-col-subtitle");
    if (t) t.textContent = chrome.colMichelinTitle;
    if (s) s.textContent = chrome.colMichelinSubtitle;
  }
  const cafeCol = document.querySelector(".cafe-col");
  if (cafeCol) {
    const t = cafeCol.querySelector(".featured-col-title");
    const s = cafeCol.querySelector(".featured-col-subtitle");
    if (t) t.textContent = chrome.colCafeTitle;
    if (s) s.textContent = chrome.colCafeSubtitle;
  }
  const forCol = document.querySelector(".foreigners-col");
  if (forCol) {
    const t = forCol.querySelector(".featured-col-title");
    const s = forCol.querySelector(".featured-col-subtitle");
    if (t) t.textContent = chrome.colForeignersTitle;
    if (s) s.textContent = chrome.colForeignersSubtitle;
  }

  // 4. Top 6 區塊
  const trendingTitle = document.querySelector("#trending-top6 h2");
  if (trendingTitle) trendingTitle.textContent = chrome.trendingTitle;
  const trendingSub = document.querySelector("#trending-top6 .trending-title-wrap div");
  if (trendingSub) trendingSub.textContent = chrome.trendingSub;
  const trendingDesc = document.querySelector("#trending-top6 .trending-title-wrap p");
  if (trendingDesc) trendingDesc.textContent = chrome.trendingDesc;

  // 5. 精選旅行主題
  const themesTitle = document.querySelector("#themes h2");
  if (themesTitle) themesTitle.textContent = chrome.themesTitle;
  const themeCards = document.querySelectorAll("#themes .theme-card");
  themeCards.forEach((card, idx) => {
    const data = chrome.themeCards[idx];
    if (data) {
      const h3 = card.querySelector("h3");
      const p = card.querySelector("p");
      const chip = card.querySelector(".theme-tag-chip");
      if (h3) h3.textContent = data.title;
      if (p) p.textContent = data.desc;
      if (chip) chip.textContent = data.tag;
    }
  });

  // 6. 城市與景點探索
  const citySpotsTitle = document.querySelector("#city-spots h2");
  if (citySpotsTitle) citySpotsTitle.textContent = chrome.citySpotsTitle;

  // 7. 頁尾 (僅翻譯具穩定 selector 的功能性文字；多語品牌宣言為設計元素維持原樣)
  const footerContact = document.getElementById("footer-contact-label");
  if (footerContact) footerContact.textContent = chrome.footerContactLabel;
  const footerQuickLinks = document.getElementById("footer-quick-links-title");
  if (footerQuickLinks) footerQuickLinks.textContent = chrome.footerQuickLinks;
  const footerBottom = document.getElementById("footer-copyright");
  if (footerBottom) footerBottom.textContent = chrome.footerBottom;

  const footerQuickLinkEls = document.querySelectorAll("#footer-quick-links a");
  footerQuickLinkEls.forEach((link, idx) => {
    if (chrome.footerQuickLinkItems && chrome.footerQuickLinkItems[idx] != null) {
      link.textContent = chrome.footerQuickLinkItems[idx];
    }
  });

  // 8. 重新抓取後端內容（對應語系）並重渲染各動態區塊
  if (typeof loadActivitiesContent === "function") await loadActivitiesContent(lang);
  if (typeof loadThemeGridContent === "function") await loadThemeGridContent(lang);
  if (typeof loadSpotsContent === "function") await loadSpotsContent(lang);
  if (typeof loadHomeRankingsContent === "function") await loadHomeRankingsContent(lang);
  if (typeof loadHomeBlogContent === "function") await loadHomeBlogContent(lang);

  if (typeof renderTrendingSection === "function") renderTrendingSection();
  if (typeof renderThemesSection === "function") renderThemesSection();
  if (typeof renderWaterfallSection === "function") renderWaterfallSection();
  if (typeof renderRankingsSection === "function") renderRankingsSection();
  if (typeof renderBlogSection === "function") renderBlogSection();

  if (typeof switchWeekendHopLanguage === "function") {
    const hopLang = lang.startsWith("en") ? "en" : (lang.startsWith("ja") ? "ja" : "zh");
    switchWeekendHopLanguage(hopLang);
  }
}
