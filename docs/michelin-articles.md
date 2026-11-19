# 米其林餐廳文章：資料與前後台

## PM 稿件分析

`米其林餐廳/01-mi.html` 是頤宮中餐廳 Le Palais 的專刊設計稿，對應現有 `michelin.json` 的 `star-1`。原稿包含：

- 獲獎說明與 2018–2025 八筆歷年三星紀錄。
- 餐廳故事、編輯引言、一組空間介紹、五組菜色介紹。
- 七張 Unsplash 圖片：封面一張、空間一張、菜色五張。並非七道菜各有照片；不補造缺少的照片。
- 中、英、日各七道菜單，原有菜名、說明與價格完整保留。
- 五組原本以英日呈現的用餐須知（服裝、訂位、飲食限制、必點菜、慶生）。
- 地址、營業時間、電話、交通、地圖、官網訂位及住宿入口。

圖片是設計稿示意，非已驗證的餐廳實拍；獲獎資料只涵蓋原稿截至 2025 年的期間，沒有自動補上 2026 年。價格、服務費及訂位等規則保留原稿，尚未逐一向餐廳查核，因此資料帶有 `isSample: true` 和 `reviewStatus: "needs-fact-check"`，前台以圖片及文末編輯章的滑鼠提示標示。

## JSON 與語言

後台檔案：`ActivityEvent/content/<lang>/michelin_articles.json`。

十二種內容語言為 `zh`、`en`、`ja`、`ko`、`es`、`th`、`vi`、`ms`、`fil`、`hi`、`id`、`de`。原有中英日菜單保留原文，不重譯；原稿英日 FAQ 也保存於 `source.guideOriginals`，英日版本使用原稿，繁中 FAQ 及其餘譯文是機器初譯，仍需校對。介面沿用網站的七種語言，其餘介面回退英文。

每篇文章使用獨立 `id`，並以 `restaurantId` 連到餐廳固定 ID，與排名或陣列位置無關。同一語言的同一餐廳只允許一篇文章，發布狀態也各自獨立。

| 欄位 | 用途 |
| --- | --- |
| `id`、`restaurantId`、`slug` | 文章固定識別、對應餐廳、網址代稱 |
| `title`、`enTitle`、`summary`、`seo` | 封面與搜尋資訊 |
| `status`、`published` | 發布、草稿或封存；儲存時驗證兩者一致 |
| `coverImg`、`coverImageRole` | 封面網址；`illustration` 顯示示意圖標示，`photo` 為實拍 |
| `quickFacts[]` | 餐廳重點 |
| `honors` | `heading`、`content`、`years[]`、`note`：歷年獲獎與資料期間 |
| `sections[]` | `heading`、`content`、`blocks`、`image`、`caption`、`imageRole` |
| `sections[].layout` | `intro` 故事、`ambiance` 空間、`dish` 菜色、`guide` 用餐須知 |
| `menuVariants[]` | 各語言菜單：`language`、`title`、`items[]` |
| `menuVariants[].items[]` | `id`、`name`、`description`、`price`；價格使用文字，保留原幣別與附加費符號 |
| `menuNote` | 服務費、預訂等菜單補充說明 |
| `photos[]` | 可增補的照片集與圖說 |
| `practicalInfo`、`bookingUrl` | 地址、營業時間、電話、交通、地圖及官網訂位 |
| `source`、`translation` | 原稿檔名、SHA-256、原文 FAQ 與翻譯來源紀錄 |

段落使用安全結構化節點；不將整份設計稿 HTML 直接插入頁面。後台儲存時依 `blocks` 更新 `content` 純文字備援，拒絕可執行標籤與非 HTTP(S) 網址。頤宮專刊使用 PM 原稿的頁首導覽、品牌頁尾、字型與完整畫報排版；`michelin_info.html` 內的可信任靜態 template 由文章資料以安全 DOM 節點填入。樣式位於 `css/michelin-pm.css`，手機窄版額外處理導覽與菜單分頁換行。語言沿用 URL 與網站語言偏好，住宿連結沿用既有分潤與城市 ID 設定；此頁隱藏市場控制列以維持原稿版面，市場偵測與分潤連結功能仍保留。

## 前台

- `cafe.html?tab=michelin-guide`：圖片、標題與卡片空白區皆可進文章；地圖／訂位按鈕保留自己的行為。
- `michelin_info.html?id=star-1&lang=zh-TW`：頤宮專刊，使用黑、酒紅、金色與象牙色版型；支援單語與中英／中日菜單並排。
- 已存在但尚無已發布文章的餐廳：顯示缺省頁及自己的餐廳資訊；不會誤顯示頤宮文章。
- 未帶 ID：預設開啟頤宮專刊（`star-1`）；未知 ID：找不到餐廳頁。網路失敗與無文章分開處理，提供重試。

本機靜態預覽優先讀 `data/michelin_articles/<lang>.json` 和 `data/michelin_restaurants/<lang>.json`；正式網站優先讀後台遠端內容。遠端成功回傳空文章陣列或只有草稿時，維持未發布狀態，不用舊文章副本重新顯示。文章語言檔不存在時，可明確標示回退繁中。

## 後台操作

執行 `python3 admin.py --port 8772`：

- `/admin.html?file=content/zh/michelin_articles.json`：專刊管理，可新增、修改、刪除、上下架。
- 也可在 `michelin.json` 選取餐廳後，按「新增／編輯這間餐廳的文章」；尚未建立時會新增對應餐廳的草稿。
- 可編輯段落、圖片性質、表格、菜色、價格、各語言菜單、獲獎紀錄、SEO、店家資訊及官網訂位網址。
- 切換語言可獨立編輯該語言；儲存不覆寫其他語言。切換時保留對應餐廳，若該語言尚無文章，會提示新增，不會跳到另一間餐廳。
- 「查看前台」使用 `/preview/michelin_info.html?id=<餐廳ID>&lang=<語言>`，直接讀本機後台資料。

儲存時同步更新相鄰前端的文章副本。本機前台因此可立即查看新文章或修改；正式網站仍須照既有流程推送與部署。`content_translate.py` 排除此資料集，避免舊流程覆寫獨立譯文。

## 重建及驗證

在 taiwan-travel 執行：

```sh
python3 -m pip install -r scripts/requirements-michelin-articles.txt
python3 scripts/build_michelin_articles.py --translate --published
node --test scripts/test_michelin_links.cjs scripts/test_michelin_articles.cjs scripts/test_journal_reports.cjs scripts/test_affiliate.cjs
```

不加 `--published` 時，匯入會保持草稿。翻譯用 Google 公開端點，快取在後台 `content/_translations/michelin_articles/`，沿用既有忽略規則。重建會以原稿覆寫輸出，應先保存或合併後台手動編輯內容。

在 ActivityEvent 執行：

```sh
python3 -m unittest test_admin.py test_editorial_admin.py test_editorial_translation.py
```
