# 🇹🇼 台灣吃喝玩樂 開發者獨立架構與設計思維指南

> [!IMPORTANT]
> **架構獨立聲明 (Decoupling Policy)**：
> 本專案為獨立於「日本旅遊報報」的全新台灣在地旅遊與生活指南系統。兩者在**設計美學、文化思維、資料來源、分類邏輯與交通情境**上完全解耦，不得相互套用造成邏輯打架。

---

## 一、 台灣專案 VS 日本專案：核心思維與設計差異對照

| 維度 | 🇯🇵 日本旅遊報報 (Japan Travel) | 🇹🇼 台灣吃喝玩樂 (Taiwan Food & Fun) |
| :--- | :--- | :--- |
| **視覺與底色質感** | **和紙白（鳥の子色 `#FAF9F6`）**<br>搭配青海波（Seigaiha）微浮水印、和風陰影 | **島嶼日光暖白（`#FAF8F5`）**<br>搭配島嶼海浪波紋、文青翠綠（`#059669`）與夜市珊瑚紅（`#E11D48`） |
| **核心骨幹思維** | **季節時令與天候條件**<br>櫻花開花前線（WNI 標本木）、滑雪場粉雪積雪深度（SURF&SNOW）、花火大會發數與尺玉（Walkerplus） | **在地人情味與生活探索**<br>清晨搶頭鍋溫體牛肉湯、米其林必比登推薦、老宅與懸崖海景咖啡、週末手作市集、無味碳酸美人湯 |
| **交通出行邏輯** | **鐵道周遊券導向（JR Pass / Metro）**<br>重視新幹線直達、地鐵幾日券、車站出閘距離 | **高鐵＋客運＋機車自駕導向**<br>重視捷運站出口、租機車/租車便利度、停車場收費與導航便捷性 |
| **痛點避雷** | 櫻花滿開/吹雪凋謝、新手誤闖黑線雪道、花火百萬人潮管制 | **店家公休撲空**、**現場候位排隊 30+ 分鐘**、**每日限量賣完**、**海邊夕陽最佳卡位時段** |
| **資料來源體系** | Weathernews、SURF&SNOW、Walkerplus、日本觀光振興協會 | **交通部觀光署 Open Data**、**台灣米其林指南官方名錄**、**TDX 運輸資料平臺**、**Google Places 評分** |
| **獨立運行服務** | `http://127.0.0.1:8080/` | `http://127.0.0.1:8081/` |

---

## 二、 台灣專案目錄分類體系

```
台灣吃喝玩樂/
├── app/                      # 前端網頁應用
│   ├── css/                  # 專屬 CSS 主題
│   ├── js/                   # 地圖與狀態腳本
│   ├── index.html            # 主頁面 (寬幅 1540px、響應式 4 欄、CARTO 地圖)
│   └── manifest.json         # PWA 獨立宣告
├── config/                   # 獨立設定檔
│   ├── app_config.json       # 區域與主分類設定
│   ├── affiliate.json        # Klook / KKday 台灣特約分潤代碼
│   └── .env.example          # API 金鑰範本
├── data/                     # 地點資料庫
│   ├── taiwan_spots.json     # 完整地點 JSON 資料
│   └── seed_data.js          # JavaScript 種子資料
├── database/                 # 資料庫結構
│   └── schema.sql            # PostgreSQL / Supabase 專屬資料表
├── backend_scrapers/         # 排程爬蟲與同步管線
│   └── tourism_bureau_sync.py
├── DEVELOPER_GUIDE.md        # 本開發指南
├── API_INTEGRATION_GUIDE.md  # 台灣 API 串接規格
├── README.md                 # 專案快速啟動說明
└── server.pl                 # 本機獨立 HTTP 伺服器 (Port 8081)
```

---

## 三、 開發與維護原則

1. **嚴禁將日本專案的櫻花前線或雪況欄位引入本專案**：台灣專案以「米其林必比登」、「排隊候位指數」、「招牌必點料理」及「海景第一排」為核心指標。
2. **所有分潤連結獨立**：台灣專案的票券連結皆設定獨立追蹤標籤（如 `aff_label1=taiwan_card_id`），確保與日本旅遊報報分潤成效完全獨立計算。
3. **保持純網頁版響應式美學**：維護 `max-w-[1540px]` 容器寬度，嚴格避免手機 TabBar 遮蔽網頁內容，所有篩選一律採情境動態展開。

## 全站語系快捷列

根目錄的主要頁面共用 `js/global-language-bar.js`，不需在各頁複製語系列 HTML。在新頁面的 `<head>` 引入：

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/global-language-bar.js" defer></script>
```

語言選項與切換行為集中在此模組；導覽文字字典仍由 `js/i18n.js` 管理。模組會自動插入語系列並依實際高度設定導覽列的置頂偏移，支援手機尺寸。切換語言會保留目前路徑、其他查詢參數與錨點，更新 `?lang=` 後重新載入。語系優先順序為網址、`localStorage`、繁體中文；內容翻譯沿用各頁既有載入機制，尚未翻譯的靜態文案不會自動翻譯。

此模組也提供 `window.SiteLoading.begin()`，顯示共用半透明資料載入遮罩，並回傳該工作的結束函數。每個請求須在 `finally` 呼叫結束函數；content loader 與縣市配置請求已接入。多個請求同時執行時，全部結束才會隱藏遮罩；文字依當前語言顯示。從瀏覽器前後頁快取回復時會清除導頁遮罩。驗證：`node --test scripts/test_loading.cjs`。

## 城市與景點資料

首頁與 `spots.html` 共用 `js/city_regions.js`、`js/spots.js` 與 `js/content_loader.js`。先載入 city regions，再載入 spots 與 content loader；分類頁以 `defer` 在 `category_i18n.js` 前載入 city regions。

景點來源為 `https://raw.githubusercontent.com/qn5566/ActivityEvent/main/data/{lang}/AttractionList.json`，讀取根物件的 `Attractions` 陣列。語言依網址／目前語系映射，例如 `?lang=ko` 使用 `/data/ko/`，`zh-TW` 使用 `/data/zh/`，德文依既有內容回退規則使用 `/data/en/`。非中文內容同時按 `AttractionID` 對照中文來源的 `PostalAddress.City`、景點名稱與地址，以保留完整縣市分群及中文司機字卡；語系檔缺少的 ID 個別回退中文。`AttractionID`、`AttractionName`、`Description` 對應到卡片的 id、name、desc；縣市只從中文對照資料（若可取得）的 `PostalAddress.City` 取得，不能以頂層 city、地址或名稱猜測。`PostalAddress.Town` 與 `StreetAddress` 組合成司機卡地址，`PositionLat`／`PositionLon` 用於 Google Maps，圖片同時接受 `Images[].ImageURL` 與實際資料的 `Images[].URL`。缺少圖片使用本地佔位圖；不虛構評分或停留時間。完整分群可透過 `window.SPOTS_BY_CITY` 取得，鍵名使用 info.json 中的中文縣市名。

縣市翻譯唯一來源為 `https://raw.githubusercontent.com/qn5566/ActivityEvent/main/info.json` 的 `regions`，11 種語言以 22 個索引對齊。`CityRegions.localizedName(city, lang)` 接受 `zh-TW`／`zh`，亦處理臺／台寫法；沒有對應語言時回退中文，不從其他字典推測翻譯。因此目前選擇德文時，縣市會使用中文。`CityRegions.zhCityToIndex` 對外提供原始中文名稱到索引的 Map。模組內的離線備份取自同一來源（2026-11-17），遠端資料驗證成功後整批替換；更新備份時須保留所有語系的索引對齊。

景點語系檔、中文對照檔與 info.json 同時載入；請求快取按完整語系網址分開，重複切換同一語系不會重抓或誤用其他語系的資料。若語系檔失敗，先回退中文；兩者皆失敗才保留現有資料，初次無可用資料時回退 `data.js` 內建景點；縣市翻譯失敗則使用同來源離線備份。如需測試其他來源，分別設定 `window.ATTRACTION_LIST_URL`（可包含 `{lang}` 佔位符）與 `window.CITY_INFO_URL`；其他分類的 `CONTENT_BASE_URL` 不受影響。

縣市篩選鍵固定正規化為「台」字，並保留台北市、桃園市、花蓮縣、台南市優先排序；城市／縣別不合併，包含新竹市／縣、嘉義市／縣。篩選在完整記憶體資料中執行；首頁維持既有分批載入，景點頁每次顯示 48 筆，可按「顯示更多景點」繼續，不會刪減分群資料。

`spots.html` 的主分類只顯示北部、中部、南部、東部、離島，縣市子分類亦不提供「全部」。預設及重設為北部／台北市；切換地區時選取該區第一個縣市。共用 `SpotExplorer.getCities()` 仍保留其他頁面可能使用的「全部」，由景點頁渲染時排除。

此區的 Klook 使用 `AFFILIATE_HUB.spotKlookAid = 123436`；住宿使用 Trip.com 的 `Allianceid=9507030`，並保留 SID 與 trip_sub3。首頁與景點頁卡片暫不顯示餐券優惠連結。卡片與收藏資料使用同一組景點連結。

驗證：`node --test scripts/test_spots.cjs`（不需安裝套件）。

## 分類頁單一語系介面

`cafe.html`、`journals.html`、`themes.html`、`spots.html`、`ranking.html` 與 `souvenir.html` 共用 `js/category_i18n.js`，以 `defer` 載入。標題與簡短副標、分頁及篩選文字集中支援繁中、英文、日文、韓文、西班牙文、德文與泰文；其他既有語系暫用英文介面。內容資料仍沿用 content loader 的來源及回退機制。

靜態文字使用 `data-category-text="coffee.title"`，搜尋提示使用 `data-category-placeholder`，無可見標題的篩選群組以 `data-category-label` 保留無障礙名稱。動態按鈕使用 `CategoryUI` 取得當前語系文字。分類頁加上 `category-page`，主標與副標分別使用 `category-hero-title`、`category-hero-subtitle`，避免另加重複英文標題。

咖啡 API 的各語系資料須保留相同 ID；載入時以中文資料對照產生 `filterCity`、`filterTags`，顯示文字可翻譯，篩選鍵維持固定。咖啡與米其林分頁切換統一呼叫 `CategoryUI.applyCafeHero()` 更新標題；深度採訪使用獨立頁面 `journals.html`。

驗證：`node --test scripts/test_category_ui.cjs scripts/test_spots.cjs`（不需安裝套件）。

咖啡主理人合作入口 `#cafe-partnership-open` 使用連結直接在新分頁開啟 Google 表單（與咖啡文章頁相同表單），保留 `partnership.entry` 多國語言與膠囊樣式。`cafe.html` 不再載入原合作彈窗及 Gmail 表單腳本。

## 深度採訪獨立頁面

全站深度採訪入口統一使用 `journals.html`。頁面由 `js/journals.js` 渲染文章列表與完整閱讀彈窗，沿用 `weekend_hop_i18n.js` 與 `weekend_hop_i18n_extra.js` 的各語系資料。`cafe.html` 不再載入文章資料或讀取器；兩頁共用 `css/cafe-journals.css`，維持既有視覺樣式。

舊網址 `cafe.html?tab=weekend-hop` 會在頁首以 `location.replace()` 轉址到 `journals.html`，保留語言、其他查詢參數與錨點，並移除 `tab`。咖啡與米其林原有網址不受影響。驗證：`node --test scripts/test_journals.cjs`。

深度採訪的功能性文案集中於 `js/journals_i18n.js`（繁中、英、日、韓、西、德、泰；其餘語系回退英文）。靜態文案以 `data-journal-text`、`data-journal-title` 標記，頁尾連結重用 `WEB_CHROME_I18N`。閱讀彈窗每次開啟後套用翻譯，介面語系獨立於文章語系，故德文介面不會隨英文文章回退而改成英文。司機卡保留中文地址；缺少完整報導時顯示原始摘要，不產生中文通用文章。

全站 11 個主要頁面的 `site-footer` 共用 `js/site-footer.js`，支援語言選擇器的 12 種語言。介紹、標語、開發團隊與版權文案集中於 `SITE_FOOTER_I18N`，快速連結與合作標籤沿用 `WEB_CHROME_I18N`（德文另提供對應）。透過 `data-footer-text`、`data-footer-link`、`data-footer-title` 套用文字，保留原始連結目標；`updateSiteNavigation(lang)` 同步更新頁尾，文章閱讀彈窗也使用相同模組。維護頁尾翻譯請修改這個共用模組，勿在各頁另加固定語言段落。驗證：`node --test scripts/test_site_footer.cjs`。

咖啡店卡片以 `cafe_info.html?id=cafe_1&lang=zh-TW` 開啟獨立店家文章；也支援 `?slug=...` 與 `?cafeId=...`。頁面保留新版紙本雜誌版型，樣式集中於 `css/cafe-info.css`，渲染與資料處理集中於 `js/cafe_info.js`。資料透過既有 `CONTENT_BASE_URL/{lang}/cafes.json` 及 `cafe_articles.json` 取得，以 `article.cafeId === cafe.id` 關聯，缺少語系文章時回退繁中並提示，不依店名或陣列順序比對。

`data/cafe_articles.zh.json` 是從 ActivityEvent 的 `content/zh/cafe_articles.json` 同步的離線備援快照；更新後端文章時可同步更新此檔。API 失敗時使用這份快照與 `data.js` 店家資料，並提供重新載入；成功回傳空文章陣列則保留空狀態。沒有文章的店家仍顯示店名、簡介、地址、電話、地圖與附近住宿；無效 ID 不會套用示範店家。新版設計的示範菜單、贈品與認證文案不會在沒有 API 依據時顯示。標準店家卡片上的地圖、住宿與收藏維持獨立操作。驗證：`node --test scripts/test_cafe_info.cjs`。

全站收藏由 `js/favorites.js` 的 `FavoritesManager` 統一處理。新增卡片請呼叫 `FavoritesManager.buttonAttributes(item)`，透過編碼後的 `data-favorite-item` 和共用事件取得完整資料，勿把店名、描述、陣列或區域變數拼進 inline `onclick`。各卡片提供穩定 ID（咖啡使用 API 店家 ID、排行榜使用主題與項目 ID/名次、景點使用景點 ID、主題使用主題與景點 ID/原始索引），以便翻譯或重新渲染後同步愛心狀態。首頁舊的抽屜入口轉交相同 Manager，避免維護第二份清單。

收藏仍儲存於 `tw_roam_favorites_v2`，並相容 `tw_roam_web_favs` 舊資料；損壞的結構不會阻斷頁面。抽屜刪除使用穩定 ID；顯示文字及 PDF 預覽會跳脫 HTML，網址只接受 HTTP(S)。瀏覽器拒絕 localStorage 時保留本次瀏覽記憶體狀態，提示無法永久儲存。驗證：`node --test scripts/test_favorites.cjs`；瀏覽器須驗證五個主要卡片來源、加入/取消、重新載入、分類搜尋、抽屜刪除、跨分頁同步與 PDF 預覽。

收藏夾介面與 PDF 固定文案集中於 `js/favorites_i18n.js`，支援全站 12 種語言；各頁須先載入字典，再載入 `js/favorites.js`。`updateSiteNavigation(lang)` 呼叫 `FavoritesManager.setLanguage(lang)`，同步更新已開啟的抽屜與 PDF、搜尋提示、分類、愛心輔助文字和操作訊息。切換語系保留收藏、分類及搜尋條件；收藏當時的店名與介紹保留原文，舊資料的中文分類及通用提示則改用目前語系顯示。

全站正式 HTML（根目錄、`blog/` 文章及 `app/index.html`、`app/mobile.html`）在 `<head>` 開頭以 `<script async src="…/js/analytics.js"></script>` 引用共用追蹤入口；根頁使用 `js/analytics.js`、文章使用 `../../js/analytics.js`、App 使用 `../js/analytics.js`，以相對路徑支援 GitHub Pages 專案網址。新增其他追蹤服務或調整追蹤程式統一修改 `js/analytics.js`；檔案有重複載入保護。GTM 容器為 `GTM-N38CZ8XN`，停用 JavaScript 時的 noscript iframe 仍須直接保留在各頁 `<body>` 開頭；更換容器 ID 時同步更新這些 iframe。新正式頁面須加入共用引用及 noscript，備份與預覽檔不加入。GA4 的 Google 標籤與 Measurement ID 須於 GTM 容器內設定並發布；此程式僅安裝容器，不代表 GA4 已設定。避免同時透過共用檔案及 GTM 安裝同一套追蹤，造成重複計算。
