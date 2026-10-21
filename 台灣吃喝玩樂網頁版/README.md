# 🇹🇼 台灣吃喝玩樂網頁版 (Taiwan Wanderlust Web Portal)

> 本資料夾為**完全獨立的官方網頁版專案**，品牌歸屬 **HiMyDream Studio**，可直接整包部署至任何虛擬主機、雲端空間（GitHub Pages、Netlify、Vercel、Cloudflare Pages、Apache、Nginx）自架網站。
> 官方商務／資料聯繫信箱：`himydream.studio0220@gmail.com`

---

## 📁 資料夾架構

```
台灣吃喝玩樂網頁版/
├── index.html         # 網頁版首頁入口（支援桌面寬螢幕、平板與手機自適應 RWD）
├── css/
│   └── style.css      # 全站專屬樣式表（設計變數、圓角陰影、網格佈局、按鈕系統）
├── js/
│   ├── affiliate.js   # ⭐ 集中式分潤中樞規範模組 (包含全專案 14 大分潤通道)
│   ├── data.js        # 16 大主題專區、手搖 TOP 20、景點 TOP 20 核心資料
│   ├── i18n.js        # 7 國語言字典（繁中、EN、日本語、한국어、Español、Deutsch、ภาษาไทย）
│   └── app.js         # 前端核心邏輯（即時搜尋、抽屜收藏、多國語言切換）
├── assets/            # 本地獨立圖資（Logo、服務圖標、珍奶圖示等）
└── README.md          # 說明文件與全專案分潤總覽表
```

---

## 🏷️ 全專案分潤平台最新總覽表 (HiMyDream Studio 官方規格)

全站所有按鈕與跳轉連結已全數集中由 `js/affiliate.js` 的 `AFFILIATE_HUB` 自動調用管理：

| 編號 | 服務模組與通路 | 模組代號 | 追蹤參數與推廣網址 | 主要應用場景 |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **露營生鮮食材箱** | `MODULE_AFFILIATE_CAMPING_FRESH_FOOD_AFTCK` | aftck (subid_1=台灣吃喝玩樂&subid_2=日本報報) | ⛺ 露營專題「生鮮烤肉火鍋箱一鍵直配營區」、中秋烤肉 |
| **02** | **教育學習綜合平台** | `MODULE_AFFILIATE_EDUCATION_LEARNING` | vbtrax (subid_1=台灣吃喝玩樂&subid_2=日本報報) | 親子數位啟蒙、共融公園專欄延伸、職場技能進修 |
| **03** | **線上學英文專屬** | `MODULE_AFFILIATE_ENGLISH_LEARNING_APP` | affckr (subid_1=台灣吃喝&subid_2=日本報報&subid_3=學英文ＡＰＰ) | 自由行會話家教、外籍旅人隨身工具、雙語啟蒙 |
| **04** | **台灣熱門藥妝店** | `MODULE_AFFILIATE_DRUGSTORE_TAIWAN` | affckr (subid_1=台灣吃喝玩樂&subid_2=日本報報) | 💄 藥妝必買、夜市掃貨指南、溫泉保濕面膜直配飯店 |
| **05** | **質感選物生活選品** | `MODULE_AFFILIATE_CURATED_LIFESTYLE_SHOP` | affclkr (subid_1=台灣吃喝玩樂&subid_2=日本報報) | 🏺 質感選物、赤峰街大稻埕文創、露營美學道具 |
| **06** | **萬家福伴手禮直送** | `MODULE_AFFILIATE_WANJIAFU_LATEST` | afftck (subid_1=台灣吃喝玩樂&subid_2=日本報報) | 🛍️ 伴手禮免提直配飯店、走春禮盒、年菜生鮮 |
| **07** | **台灣訂餐與優惠餐券**| `MODULE_AFFILIATE_TAIWAN_DINING` | affckr (subid_1=台灣吃喝玩樂&subid_2=日本報報) | 🍽️ 訂餐搶位、高空夜景景觀餐廳、米其林星級餐券 |
| **08** | **保健食品導購** | `MODULE_AFFILIATE_HEALTH_SUPPLEMENTS` | afftkr (subid_1=台灣吃喝玩樂) | 💊 保健好物、夜市酵素益生菌、登山環島高單位B群 |
| **09** | **奧丁丁在地深度體驗**| `MODULE_AFFILIATE_OWLRING_EXPERIENCE` | `https://linkgo.one/s/ikCjF` | 花東部落文化行腳、百岳嚮導團、小農採茶體驗 |
| **10** | **化妝品藥品備用通道**| `MODULE_AFFILIATE_COSMETICS_PHARMA` | `https://afflink.one/s/3WAKW` | 開架美妝藥品導購備用通道、行前清單醫美保養品 |
| **11** | **Trip.com 官方聯盟** | 官方旗艦通道 | Allianceid=9507030&SID=325761227&trip_sub3=D20272275 | ✈️ 查機票比價、高鐵特惠、國內外訂房比價 |
| **12** | **Klook 官方聯盟** | 官方旗艦通道 | `?aid=123436` | 🎟️ 預定行程、🚗 包車一日遊、高鐵聯票、機場接送 |
| **13** | **SimOptions 網卡** | 官方推薦通道 | `https://www.simoptions.com/zh/` | 📶 台灣 eSIM 網卡、外國旅客來台行前上網指南 |
| **14** | **官方商務窗口** | HiMyDream Studio | `himydream.studio0220@gmail.com` | 全站頁尾聯絡、商務異業合作洽談、資料勘誤 |

---

### 🏨 Booking.com 雙重追蹤機制 (聯盟網 Affiliates.One + Booking 原廠)
- **短網址轉址**：`https://affone.me/s/bQeO4`
- **Booking 專屬 AID**：`8133101`
- **媒體追蹤標籤 (Label)**：`affnetcj-17288959_pub-4456004_site-100117277`
- **運作模式**：所有「🏨 訂房去」按鈕均自動帶入目的地搜尋頁面，並雙重封裝在聯盟網中，同時累積聯盟網佣金與 Booking 原廠數據！

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
3. 選擇 Branch（例如 `main`），儲存後即可取得公開網址：
   `https://qn5566.github.io/taiwan-travel/台灣吃喝玩樂網頁版/`

### 方法三：部署至 Vercel / Netlify / 虛擬主機
- 直接將 `台灣吃喝玩樂網頁版` 資料夾上傳拖曳至 Netlify Drop，或連結 GitHub 自動部署，0 秒上線！
