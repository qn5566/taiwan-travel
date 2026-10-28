/**
 * 台灣吃喝玩樂網頁版 - 集中式分潤中樞規範模組 (AFFILIATE_HUB)
 * 品牌：HiMyDream Studio
 * 官方商務信箱：himydream.studio0220@gmail.com
 * 全專案 14 大分潤通道權威配置中心
 */

const AFFILIATE_HUB = {
  // 官方商務聯絡
  contactEmail: "himydream.studio0220@gmail.com",

  // 12. Klook 官方聯盟
  klookAid: "106452",

  // 11. Trip.com 官方聯盟
  tripAllianceId: "9507030",
  tripSid: "325761227",
  tripSub3: "D20272275",

  // Booking.com 聯盟網 (Affiliates.One / CJ) 專屬參數
  bookingAid: "8133101",
  bookingLabel: "affnetcj-17288959_pub-4456004_site-100117277",
  bookingAffoneBase: "https://affone.me/s/bQeO4",

  // 01. 露營生鮮食材箱 (Uber Eats 外送直配)
  campingFreshFoodUrl: "https://onelink.one/s/YoWYV",

  // 02. 教育學習綜合平台 (vbtrax)
  educationLearningUrl: "https://vbtrax.com/track/clicks/9445/c627c2bc9b0428dbf189ec23d62e9d47266c4cdf2aabebfd0364b713234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",

  // 03. 線上學英文專屬推薦 (affckr)
  englishLearningAppUrl: "https://affckr.site/track/clicks/6826/c627c2bc9b0428dbf18eec23d62e9d47266c4cdf2aabebf20f62b413234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1&subid_3=%E5%AD%B8%E8%8B%B1%E6%96%87%EF%BC%A1%EF%BC%B0%EF%BC%B0",

  // 04. 台灣熱門藥妝店 (affckr)
  drugstoreTaiwanUrl: "https://affckr.site/track/clicks/5891/c627c2bc9b0428dbf188ec23d62e9d47266c4cdf2aabebf10f69b313234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",

  // 05. 質感選物店與生活選品 (affclkr)
  lifestyleShopUrl: "https://affclkr.online/track/clicks/5686/c627c2bf910421d7fb8dec23d62e9d47266c4cdf2aabebf10168b413234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",

  // 06. Uber Eats 萬家福「休閒零嘴」與伴手禮外送直送飯店
  wanjiafuLatestUrl: "https://onelink.one/s/YoWYV",

  // 07. 台灣訂餐與優惠餐券 (affckr)
  diningVoucherUrl: "https://affckr.site/track/clicks/4127/c627c2bc980126defc88ec23d62e9d47266c4cdf2aabebf00662b513234652eed671a3ea103a9e71?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82&subid_2=%E6%97%A5%E6%9C%AC%E5%A0%B1%E5%A0%B1",

  // 08. 保健食品導購 (afftkr)
  healthSupplementsUrl: "https://afftkr.site/track/clicks/2498/c627c2bc900729d8fd9cab248d219d46266e5b9633e0e4f00e68a44125095ff88635aca3163d8e?subid_1=%E5%8F%B0%E7%81%A3%E5%90%83%E5%96%9D%E7%8E%A9%E6%A8%82",

  // 09. 奧丁丁在地深度體驗 (linkgo)
  owltingExperienceUrl: "https://linkgo.one/s/ikCjF",

  // 10. 化妝品與藥品備用通道 (afflink)
  cosmeticsPharmaUrl: "https://afflink.one/s/3WAKW",

  // 13. 台灣上網網卡 / eSIM (Klook 官方聯盟)
  simOptionsUrl: "https://www.klook.com/zh-TW/wifi-sim-card/?aid=106452",

  // Booking 特定飯店專屬短網址映射表（可隨時擴增）
  customBookingLinks: {
    // 範例："加賀屋": "https://affone.me/s/xxxx"
  },

  /* =======================================================
     分潤連結建構函式
     ======================================================= */

  /** 1. 預定行程 (Klook) */
  getTourUrl: function(activityIdOrPath = "1874-jiufen-shifen-day-tour-taipei") {
    if (activityIdOrPath.startsWith("http")) {
      const url = new URL(activityIdOrPath);
      url.searchParams.set("aid", this.klookAid);
      return url.toString();
    }
    return `https://www.klook.com/zh-TW/activity/${activityIdOrPath}/?aid=${this.klookAid}`;
  },

  /** Klook 關鍵字搜尋預約 */
  getSearchUrl: function(keyword = "") {
    return `https://www.klook.com/zh-TW/search/result/?keyword=${encodeURIComponent(keyword)}&aid=${this.klookAid}`;
  },

  /** Trip.com 飯店/溫泉搜尋比價 */
  getTripSearchUrl: function(keyword = "") {
    return `https://tw.trip.com/hotels/list?keyword=${encodeURIComponent(keyword)}&Allianceid=${this.tripAllianceId}&SID=${this.tripSid}&trip_sub1=&trip_sub3=${this.tripSub3}`;
  },

  /** 2. 包車 / 包車預約 (Klook) */
  getCharterUrl: function(city = "") {
    return `https://www.klook.com/zh-TW/city/19-taiwan-car-charter/?aid=${this.klookAid}`;
  },

  /** 2.5 Uber Eats 美食與伴手禮外送專屬導購 */
  getUberEatsUrl: function(storeName = "") {
    const clean = storeName.replace(/（.*）/, '').replace(/・.*/, '').trim();
    return `https://www.ubereats.com/tw/search?q=${encodeURIComponent(clean)}`;
  },

  /** 3. 機場接送 (Klook) */
  getAirportTransferUrl: function() {
    return `https://www.klook.com/zh-TW/airport-transfers/?aid=${this.klookAid}`;
  },

  /** 4. 台灣高鐵 (Klook) */
  getHsrUrl: function() {
    return `https://www.klook.com/zh-TW/rails-32/1014-taiwan/?aid=${this.klookAid}`;
  },

  /** 5. 訂房去 / 找房間 (Booking.com 雙重分潤) */
  getHotelUrl: function(keyword = "") {
    if (!keyword) {
      return this.bookingAffoneBase;
    }

    for (const [key, customUrl] of Object.entries(this.customBookingLinks)) {
      if (keyword.includes(key)) {
        return customUrl;
      }
    }

    const query = keyword.includes("飯店") || keyword.includes("住宿") || keyword.includes("民宿")
      ? keyword 
      : `${keyword} 住宿`;
    
    const targetBookingUrl = `https://www.booking.com/searchresults.zh-tw.html?ss=${encodeURIComponent(query)}&aid=${this.bookingAid}&label=${encodeURIComponent(this.bookingLabel)}`;
    return `${this.bookingAffoneBase}?url=${encodeURIComponent(targetBookingUrl)}`;
  },

  /** Booking.com 搜尋直達 (別名) */
  getBookingUrl: function(keyword = "") {
    return this.getHotelUrl(keyword);
  },

  /** 6. 查機票 (Trip.com) */
  getFlightUrl: function() {
    return `https://tw.trip.com/flights/?Allianceid=${this.tripAllianceId}&SID=${this.tripSid}&trip_sub1=&trip_sub3=${this.tripSub3}`;
  },

  /** Trip.com 首頁連結 */
  getTripBaseUrl: function() {
    return `https://trip.com?Allianceid=${this.tripAllianceId}&SID=${this.tripSid}&trip_sub1=&trip_sub3=${this.tripSub3}`;
  },

  /** 7. 萬家福生鮮伴手禮直送 (最新 afftck) */
  getSouvenirUrl: function() {
    return this.wanjiafuLatestUrl;
  },

  /** 8. 露營生鮮食材箱 (aftck) */
  getCampingFoodUrl: function() {
    return this.campingFreshFoodUrl;
  },

  /** 9. 台灣訂餐與優惠餐券 (affckr) */
  getDiningUrl: function() {
    return this.diningVoucherUrl;
  },

  /** 10. 台灣熱門藥妝店 (affckr) */
  getDrugstoreUrl: function() {
    return this.drugstoreTaiwanUrl;
  },

  /** 11. 質感選物店與生活選品 (affclkr) */
  getLifestyleShopUrl: function() {
    return this.lifestyleShopUrl;
  },

  /** 12. 教育學習綜合平台 (vbtrax) */
  getEducationUrl: function() {
    return this.educationLearningUrl;
  },

  /** 13. 線上學英文 (affckr) */
  getEnglishLearningUrl: function() {
    return this.englishLearningAppUrl;
  },

  /** 14. 保健食品導購 (afftkr) */
  getHealthSupplementsUrl: function() {
    return this.healthSupplementsUrl;
  },

  /** 15. 奧丁丁在地深度體驗 (linkgo) */
  getOwltingUrl: function() {
    return this.owltingExperienceUrl;
  },

  /** 16. 化妝品與藥品備用通道 (afflink) */
  getCosmeticsPharmaUrl: function() {
    return this.cosmeticsPharmaUrl;
  },

  /** 17. SimOptions 上網網卡 */
  getSimOptionsUrl: function() {
    return this.simOptionsUrl;
  },

  /** 18. 地圖導航 (Google Maps) */
  getMapUrl: function(spotName) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spotName)}`;
  }
};
