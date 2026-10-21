/**
 * 台灣吃喝玩樂網頁版 - 集中式分潤中樞規範模組 (AFFILIATE_HUB)
 * 嚴格落實文案與跳轉規範：
 * 1. Klook 行程 ➔ 寫「預定行程」，帶入 aid=123436
 * 2. Klook 包車 ➔ 寫「包車」或「包車預約」，帶入 aid=123436
 * 3. Booking 住宿 ➔ 寫「訂房去」或「找房間」，帶入 aid=123436
 * 4. Trip.com 機票 ➔ 寫「查機票」，帶入 allianceid=123436&sid=123436
 * 5. 萬家福特產 ➔ 寫「伴手禮直送」，連至 onelink.one/s/KmfgH
 * 6. Google 地圖 ➔ 寫「地圖導航」，連至 Google Maps Search API
 */

const AFFILIATE_HUB = {
  // 分潤代碼設定（之後更換分潤 ID 只需修改此處）
  klookAid: "123436",
  tripAllianceId: "9507030",
  tripSid: "325761227",
  tripSub3: "D20272275",
  wanjiafuUrl: "https://onelink.one/s/KmfgH",

  // Booking.com 聯盟網 (Affiliates.One / CJ) 專屬參數
  bookingAid: "8133101",
  bookingLabel: "affnetcj-17288959_pub-4456004_site-100117277",
  bookingAffoneBase: "https://affone.me/s/bQeO4",

  // 未來若你在聯盟網後台產出特定飯店的專屬推廣網址，可直接登記在此對照表：
  // 格式： "景點或飯店關鍵字": "該飯店在聯盟網產出的專屬短網址"
  customBookingLinks: {
    // 範例（可隨時擴充）：
    // "加賀屋": "https://affone.me/s/xxxx1",
    // "老爺酒店": "https://affone.me/s/xxxx2"
  },

  /**
   * 1. 預定行程 (Klook)
   * @param {string} activityIdOrPath Klook 活動代碼或路徑
   */
  getTourUrl: function(activityIdOrPath = "1874-jiufen-shifen-day-tour-taipei") {
    if (activityIdOrPath.startsWith("http")) {
      const url = new URL(activityIdOrPath);
      url.searchParams.set("aid", this.klookAid);
      return url.toString();
    }
    return `https://www.klook.com/zh-TW/activity/${activityIdOrPath}/?aid=${this.klookAid}`;
  },

  /**
   * 2. 包車 / 包車預約 (Klook)
   * @param {string} city 城市或地區名稱
   */
  getCharterUrl: function(city = "") {
    return `https://www.klook.com/zh-TW/car-rentals/?aid=${this.klookAid}`;
  },

  /**
   * 3. 機場接送 (Klook)
   */
  getAirportTransferUrl: function() {
    return `https://www.klook.com/zh-TW/airport-transfers/?aid=${this.klookAid}`;
  },

  /**
   * 4. 台灣高鐵 (Klook)
   */
  getHsrUrl: function() {
    return `https://www.klook.com/zh-TW/rails-32/1014-taiwan/?aid=${this.klookAid}`;
  },

  /**
   * 5. 訂房去 / 找房間 (Booking.com 透過聯盟網 Affiliates.One)
   * 智慧分潤路由：
   * - 若在 customBookingLinks 有登記特定飯店專屬短網址，優先使用
   * - 若無登記，自動帶入該景點/縣市的 Booking 精準搜尋頁，並封裝在聯盟網分潤網址中 (?url=...)
   * - 若未指定關鍵字，直接跳轉聯盟網推廣首頁 (https://affone.me/s/bQeO4)
   * @param {string} keyword 地點、飯店或景點名稱
   */
  getHotelUrl: function(keyword = "") {
    if (!keyword) {
      return this.bookingAffoneBase;
    }

    // 檢查是否有專屬飯店短網址
    for (const [key, customUrl] of Object.entries(this.customBookingLinks)) {
      if (keyword.includes(key)) {
        return customUrl;
      }
    }

    // 自動建構 Booking.com 精準搜尋頁面網址
    const query = keyword.includes("飯店") || keyword.includes("住宿") || keyword.includes("民宿")
      ? keyword 
      : `${keyword} 住宿`;
    
    // 自動建構 Booking.com 精準搜尋頁面網址，雙重帶入你的 Booking 專屬 AID: 8133101 與 Label 參數
    const targetBookingUrl = `https://www.booking.com/searchresults.zh-tw.html?ss=${encodeURIComponent(query)}&aid=${this.bookingAid}&label=${encodeURIComponent(this.bookingLabel)}`;

    // 透過聯盟網 deep link 機制轉址，確保 100% 記錄聯盟網 + Booking 雙重追蹤分潤
    return `${this.bookingAffoneBase}?url=${encodeURIComponent(targetBookingUrl)}`;
  },

  /**
   * 6. 查機票 (Trip.com)
   * 帶入你的專屬 Allianceid: 9507030, SID: 325761227, trip_sub3: D20395461
   */
  getFlightUrl: function() {
    return `https://tw.trip.com/flights/?Allianceid=${this.tripAllianceId}&SID=${this.tripSid}&trip_sub1=&trip_sub3=${this.tripSub3}`;
  },

  /**
   * Trip.com 首頁連結
   */
  getTripBaseUrl: function() {
    return `https://trip.com?Allianceid=${this.tripAllianceId}&SID=${this.tripSid}&trip_sub1=&trip_sub3=${this.tripSub3}`;
  },

  /**
   * 7. 伴手禮直送 (萬家福 OneLink)
   */
  getSouvenirUrl: function() {
    return this.wanjiafuUrl;
  },

  /**
   * 8. 地圖導航 (Google Maps)
   * @param {string} spotName 景點名稱
   */
  getMapUrl: function(spotName) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spotName)}`;
  }
};
