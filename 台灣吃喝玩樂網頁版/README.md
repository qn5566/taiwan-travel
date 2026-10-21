# 🇹🇼 台灣吃喝玩樂網頁版 (Taiwan Wanderlust Web Portal)

> 本資料夾為**完全獨立的官方網頁版專案**，可直接整包部署至任何虛擬主機、雲端空間（GitHub Pages、Netlify、Vercel、Cloudflare Pages、Apache、Nginx）自架網站。

---

## 📁 資料夾架構

```
台灣吃喝玩樂網頁版/
├── index.html         # 網頁版首頁入口（支援桌面寬螢幕、平板與手機自適應 RWD）
├── css/
│   └── style.css      # 全站專屬樣式表（設計變數、圓角陰影、網格佈局、按鈕系統）
├── js/
│   ├── affiliate.js   # 集中式分潤中樞規範模組 (Klook, Booking, Trip.com, 萬家福)
│   ├── data.js        # 16 大主題專區、手搖 TOP 20、景點 TOP 20 核心資料
│   ├── i18n.js        # 7 國語言字典（繁中、EN、日本語、한국어、Español、Deutsch、ภาษาไทย）
│   └── app.js         # 前端核心邏輯（即時搜尋、抽屜收藏、多國語言切換）
├── assets/            # 本地獨立圖資（Logo、服務圖標、珍奶圖示等）
└── README.md          # 說明文件與自架指引
```

---

## 🏷️ 聯合行銷夥伴分潤設定 (Klook AID: 123436 & Booking 聯盟網)

本專案所有跳轉按鈕已**全面預設綁定你的分潤代碼**：

| 按鈕文案規範 | 目標平台 | 帶入的分潤參數與規格 |
| :--- | :--- | :--- |
| **「🎟️ 預定行程」** | **Klook** | `https://www.klook.com/.../?aid=123436` |
| **「🚗 包車」** / **「包車預約」** | **Klook** | `https://www.klook.com/zh-TW/car-rentals/?aid=123436` |
| **「🏨 訂房去」** / **「找房間」** | **Booking.com (聯盟網)** | 透過 `https://affone.me/s/bQeO4?url=...` 智慧精準導購（雙重帶入 Booking 專屬 AID: `8133101` 與 Tracking Label） |
| **「✈️ 查機票」** | **Trip.com** | `https://tw.trip.com/flights/?Allianceid=9507030&SID=325761227&trip_sub1=&trip_sub3=D20272275` |
| **「🛍️ 伴手禮直送」** | **萬家福 OneLink** | `https://onelink.one/s/KmfgH` |
| **「📍 地圖導航」** | **Google Maps** | 自動帶入景點名稱精準導航 |

### 🏨 Booking.com 透過「聯盟網 (Affiliates.One)」的運作機制：
1. **首頁推薦**：預設直通你的聯盟網推廣首頁 `https://affone.me/s/bQeO4`。
2. **景點自動深層跳轉 (Deep Link)**：當使用者在任何景點卡片點擊「🏨 訂房去」，程式會自動產生該景點的 Booking 搜尋頁面，並包裝在你的聯盟網轉址中：
   `https://affone.me/s/bQeO4?url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.zh-tw.html%3Fss%3D花蓮飯店`
   這讓旅客點擊後能**直接看到該地區的飯店，同時 100% 記錄你的聯盟網分潤佣金**！
3. **未來新增特定飯店專屬短網址**：若你在聯盟網後台產出了某家特定名湯飯店的推廣短網址，只需打開 `js/affiliate.js`，填入 `customBookingLinks` 對照表即可：
   ```javascript
   customBookingLinks: {
     "加賀屋": "https://affone.me/s/你的加賀屋短網址",
     "老爺酒店": "https://affone.me/s/你的老爺短網址"
   }
   ```

> 💡 **未來若需要更換 AID**：只需開啟 `js/affiliate.js`，修改最上方 `klookAid: "123436"` 即可一次更新全站所有按鈕！

---

## 🚀 自架網站與部署方式

### 方法一：本機或內網直接開啟
- 雙擊 `index.html` 即可在任一瀏覽器直接開啟完整功能。
- 或在終端機啟動本機伺服器：
  ```bash
  cd "台灣吃喝玩樂網頁版"
  python3 -m http.server 8080
  # 瀏覽器打開 http://localhost:8080
  ```

### 方法二：部署至 GitHub Pages（免費）
1. 在 GitHub 倉庫中，將根目錄或 `台灣吃喝玩樂網頁版` 資料夾推送上傳。
2. 進入 GitHub 倉庫的 **Settings** -> **Pages**。
3. 選擇 Branch（例如 `main`），儲存後即可取得公開網址 `https://你的帳號.github.io/...`。

### 方法三：部署至 Vercel / Netlify / 虛擬主機
- 直接將 `台灣吃喝玩樂網頁版` 資料夾上傳拖曳至 Netlify Drop，或連結 GitHub 自動部署，0 秒上線！
