# PM 十篇採訪報導範例：資料分析與多語 JSON

## 原稿分析

來源為專案內 `台灣吃喝玩樂採訪報導範例資料/` 的十份英文 Markdown。實際內容是旅遊指南，沒有採訪問答、受訪者、實訪日期、作者或照片；因此標記 `contentType: "travel-guide"`，不補寫採訪經歷或編造缺少的資訊。

| 原稿 | 主題 | 內文章節 |
| --- | --- | ---: |
| 01 | 初訪台北三日行程 | 7 |
| 02 | 台灣美食入門 | 11 |
| 03 | 台北夜市美食 | 9 |
| 04 | 台北咖啡館 | 8 |
| 05 | 台南老城美食散步 | 6 |
| 06 | 高雄、墾丁海岸旅行 | 7 |
| 07 | 台灣交通指南 | 8 |
| 08 | 台北平價美食 | 10 |
| 09 | 北台灣近郊散策 | 9 |
| 10 | 國際旅客行前須知 | 9 |

完整保留 84 個內文章節、39 個表格、137 個連結、SEO 標題／摘要／關鍵字、閱讀時間、適合讀者、查核清單與 AI 生成註記。Markdown 開頭的編輯資料放進欄位；`SEO` 區塊放入 `seo`，其餘內文依原順序存入 `sections`，沒有縮寫成摘要。

十篇原稿均標為 Draft；依使用者後續要求，各語言範例現設為 `status: "published"`、`published: true`、`isSample: true`、`reviewStatus: "needs-fact-check"`，可在前台展示並有範例提示。`source.originalStatus` 仍保留原稿草稿狀態。本機修改尚未推送或部署。

## 輸出位置與語言

資料寫在相鄰的 ActivityEvent 專案：`content/<lang>/editorial_reports.json`，每檔十篇，共十二檔、一百二十筆。

| 代碼 | 語言 |
| --- | --- |
| `en` | 英文原稿 |
| `zh` | 繁體中文 |
| `ja` | 日文 |
| `ko` | 韓文 |
| `es` | 西班牙文 |
| `th` | 泰文 |
| `vi` | 越南文 |
| `ms` | 馬來文 |
| `fil` | 菲律賓文 |
| `hi` | 印地文 |
| `id` | 印尼文 |
| `de` | 德文 |

英文保留原文；其餘為 Google Translate 機器初譯，標為 `machine-translated-needs-review`。繁中另外做正體轉換與店名／常用標籤詞彙修正，仍須人工校對。這些是內容語言；網站其他介面維持既有語言支援範圍。

每篇的 `id`、`slug`、原始地圖網址、章節／表格結構在所有語言保持一致。`source` 保存來源檔名、原文 SHA-256、原始草稿狀態及 AI 註記，`translation.sourceSha256` 對應翻譯使用的原稿。

## JSON 格式

沿用現有報導欄位，增加編輯與來源資料。沒有來源的 `coverImg`、`date`、`author`、`practicalInfo` 不填；`photos` 和 `nearby` 為空陣列。原稿已在表格列出的店家與景點保留在內文，不擅自改成「周邊推薦」。

`sections[].content` 是完整純文字備援。`sections[].blocks` 保存結構，例如：

```json
{
  "heading": "交通建議",
  "content": "搭乘捷運，步行探索街區。",
  "blocks": [
    {"tag": "p", "children": [{"text": "搭乘捷運，步行探索街區。"}]}
  ]
}
```

文字用 `text`，標籤用 `tag`／`children`，連結另外使用 `href`；前台只允許段落、標題、清單、強調、表格等安全標籤及 HTTP(S) 連結。編輯 `blocks` 時也應更新 `content`；正式閱讀器有 `blocks` 時優先顯示它。

## 發布前資料缺口

- 店家營業時間、地址、菜單、價位、交通時刻、路線開放狀況，以及入境等規則尚未逐一查核。原稿的查核清單保留在內文。
- 部分 Google Maps 搜尋文字疑似錯字，例如「睿芳县」「塘丁大街」「阜昀豆浆」；目前保持原始網址，未冒稱已確認正確地點。正式發布前應核對並換成正確地點連結。
- 照片、圖片授權、作者與發布日期未提供；未套用設計稿示意圖。
- 所有機器譯文需要人工校對，專有名詞與在地料理名稱尤其需要確認。
- 後台已有報導表單，可編輯基本資料、SEO、段落、表格、照片、周邊推薦及探訪資訊；各語言獨立儲存與發布。

## 展示與後台編輯

在 ActivityEvent 執行 `python3 admin.py --port 8770`，開啟：

- `/admin.html?file=content/zh/editorial_reports.json`：報導管理，可搜尋、新增、排序、刪除、上下架。
- `/preview/journals.html?type=reports&lang=zh-TW`：直接讀本機後台 JSON 的前台。

段落提供可視編輯與進階結構 JSON；編輯表格文字即可更新儲存內容。錯誤 JSON 無法儲存，後端也會驗證 ID、發布狀態與安全內容結構。`content` 備援文字在儲存時由 `blocks` 重新產生，無須手動維護兩份。

後台儲存時，只更新目前語言；同時在相鄰 taiwan-travel 專案存在時更新 `data/editorial_reports/<lang>.json`，供本機靜態前台展示。localhost 的一般前台會優先讀這份本機資料，後台的 `/preview/` 則直接讀本機後台 JSON。

正式網站仍優先讀已推送的 ActivityEvent 遠端資料；遠端無法取得時才使用前端副本。遠端成功回傳空陣列或草稿時，不會拿舊副本重新顯示已下架內容。要更新正式網站，仍須依現有流程提交、推送與部署。

## 重建與驗證

在 taiwan-travel 專案執行，建議使用虛擬環境：

```sh
python3 -m pip install -r scripts/requirements-editorial-reports.txt
python3 scripts/build_editorial_reports.py --output ../ActivityEvent/content --translate --published
python3 scripts/sync_editorial_report_snapshots.py
python3 scripts/check_editorial_reports.py --content ../ActivityEvent/content --published
node --test scripts/test_journals.cjs scripts/test_journal_reports.cjs scripts/test_affiliate.cjs
```

翻譯透過 Google 公開翻譯端點，需網路且可能受限流影響；無付費 API 或 API 金鑰。快取在 ActivityEvent 的 `content/_translations/editorial_reports/<lang>.json`，沿用現有忽略規則，不納入版本控制；已生成的十二份內容 JSON 才是可提交的資料。重新匯入會依 Markdown 重建，因此要保留手動內容修改時，應先同步修改來源並重新校對譯文。

不帶 `--published` 的匯入預設仍產生草稿，以免日後匯入新原稿時自動發布。

ActivityEvent 的既有 `content_translate.py` 會掃描所有中文 JSON。已排除此資料集，避免日後執行舊翻譯流程時，把十二語報導覆寫成繁中；有獨立回歸測試 `python3 -m unittest test_editorial_translation.py`。
