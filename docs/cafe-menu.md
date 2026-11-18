# 咖啡內頁 HTML 菜單

菜單內容位於 ActivityEvent 的 `content/<lang>/cafe_articles.json`，每篇文章可新增 `menuHtml` 字串。文章仍以 `id`、`cafeId` 關聯，網址仍為 `cafe_info.html?id=cafe_1&lang=zh-TW`。

## 後台編輯

1. 啟動 ActivityEvent 的 `python3 admin.py`，開啟內容管理頁。
2. 選擇對應語言的 `cafe_articles.json` 與文章。
3. 在「招牌菜單」直接編輯表格，或按「新增品項」。選取品項內容後可刪除該列或加粗文字。
4. 也可展開「編輯 HTML 原始碼」貼入表格，預覽會同步更新。
5. 按頂部「存檔」。中文、英文、日文菜單分別在各語言檔案編輯，現有翻譯不會被其他語言的菜單覆蓋。清空菜單時，該語言的菜單按鈕會隱藏。

## 支援內容

前台和後台共用同一份 HTML 過濾規則：段落、標題、粗體、斜體、清單與表格。可保留表格合併儲存格（最多 20 格），以及 `menu-row`、`m-name`、`m-desc`、`m-price` 樣式類別。不接受腳本、事件、內嵌樣式、圖片、外部連結或 iframe。字型與配色由網站統一控制。

前台會載入中文、英文、日文與當前語言的菜單；中英文皆有內容時可並排，手機會上下排列。所有語言都沒有有效內容時，整個菜單區塊隱藏。單一翻譯載入失敗不會影響其他菜單與文章。

興波的示範菜單僅引用既有文章的手沖與皺皺蛋糕，未設定售價。正式價格應在確認店家菜單後填入。

## 發佈與驗證

前台預設從 ActivityEvent GitHub `main` 分支讀取資料。本機修改 JSON 不會立即改變線上內容；需同步發佈 ActivityEvent 的資料與台灣旅遊網站的前台程式。後台新增腳本路由後需重新啟動 `admin.py`。

前台 `js/cafe-menu-html.js` 與 ActivityEvent 根目錄的 `cafe-menu-html.js` 應保持一致。離線備份 `data/cafe_articles.zh.json` 也應隨中文文章更新。

執行 `node --test scripts/test_cafe_info.cjs scripts/test_loading.cjs scripts/test_cafe_partnership.cjs`；後台執行 `python3 -m unittest test_admin.py`。
