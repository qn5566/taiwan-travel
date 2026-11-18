# 台灣吃喝玩樂採訪報導（前端）

`journals.html` 提供兩種類型入口：

- `?type=articles`：既有深度文章，沿用原有文章來源與閱讀器。
- `?type=reports`：台灣吃喝玩樂採訪報導，列表與內頁版型參考 `gemini-code-0001.html`。

新報導的獨立內頁為 `report_info.html?id=<固定ID>&lang=zh-TW`，也支援 `?slug=<slug>`。重新整理、直接開啟連結與瀏覽器上一頁皆可使用。不存在的 ID 不會自動開啟其他文章。

## 資料接點

沿用 `fetchContentJson` 與語系對應設定，讀取 ActivityEvent 的 `content/<語系>/editorial_reports.json`。PM 提供的十篇範例已有十二種語言，依使用者要求改為可展示的範例報導，詳見 [資料分析與匯入說明](editorial-reports-data.md)。德文報導使用獨立的 `de` 資料夾，其餘資料集維持原本的德文回退規則。

- API 回傳 `[]` 或只有未發布文章：顯示「下一篇故事，正在路上」。HTTP 404 或連線失敗先嘗試前端資料副本；沒有副本與備援語言時才顯示缺省／錯誤狀態。
- 單篇找不到或沒有帶 ID：顯示尚未上架頁與返回列表連結。
- 無可用副本時，連線失敗、HTTP 500、JSON 格式不正確會顯示載入失敗與重試按鈕。
- 翻譯檔 404 時可讀取中文版本，並顯示繁體中文提示；成功回傳空陣列時維持空狀態。

資料格式為陣列，每篇必須有非空字串 `id` 與 `title`。`published: false` 或 `status` 不是 `published` 的項目不會出現在前台；未填 `status` 時視為可顯示。

| 欄位 | 用途 |
| --- | --- |
| `id`、`slug` | 固定識別與文章網址；ID 不可重複 |
| `title`、`summary` | 報導標題與摘要 |
| `city`、`area` | 城市與封面地區標籤 |
| `date`、`author` | 日期與作者 |
| `coverImg` | 封面照片的 HTTP(S) 網址 |
| `sections[]` | 探訪手記，每段支援 `heading`、`content`、`image`、`caption` |
| `sections[].blocks` | 可選的結構化段落，保留清單、標題、表格與連結；有值時優先呈現，否則顯示 `content` |
| `photos[]` | 照片集，每張支援 `image`、`caption`，與封面／段落相同的照片不重複呈現 |
| `nearby[]` | 最多三個周邊推薦，每筆支援 `name`、`description`、`walk`、`image`、`address`、`mapUrl` |
| `practicalInfo` | 主訪店家資訊：`name`、`address`、`addressEn`、`businessHours`、`mapUrl` |

`content` 以純文字呈現並保留換行；`blocks` 以允許的標籤建立 DOM，文字一律使用文字節點，不執行文章中的 HTML、任意標籤或程式碼。照片、地圖等網址只接受 HTTP(S)。表格在手機可水平捲動。缺少選填資料時對應區塊隱藏，不補上範例照片、價格、店家或實訪宣稱。

介面支援繁中、英、日、韓、西、德、泰；其餘語言使用英文介面並沿用現有內容語系對應。

## 驗證

`node --test scripts/test_journals.cjs scripts/test_journal_reports.cjs scripts/test_affiliate.cjs`

瀏覽器檢查包含空列表、找不到文章、錯誤重試、載入測試資料後的文章閱讀與返回、上一頁／下一頁、語言、手機排版及內容注入防護。測試文章只在測試中提供，不寫入正式資料。
