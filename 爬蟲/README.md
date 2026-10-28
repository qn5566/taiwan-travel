# Klook 推廣聯盟爬蟲工具 (Klook Affiliate Scraper)

專門用來爬取 Klook Affiliate（推廣聯盟）的所有台灣地區旅遊、票券、體驗商品與專屬推廣連結。

---

## 📁 檔案結構

- `klook_affiliate_crawler.py`：主要爬蟲腳本（支援自動分頁、斷點續爬、防反爬延遲、匯出 JSON 與 CSV）。
- `crawler_config.json`：存放請求 Headers 與 Cookies 認證設定。
- `parse_curl.py`：可自動將瀏覽器複製的 cURL 解析並填入 `crawler_config.json` 的小工具。
- `klook_products_all.json`：爬取出來的完整商品 JSON 資料。
- `klook_products_all.csv`：爬取出來的商品 Excel / CSV 表格（含推廣連結、商品名稱、原價、折扣價、評分等）。
- `crawler_progress.json`：自動記錄爬取進度（中斷後可接續爬取，不會重複）。

---

## 🚀 快速使用步驟

### 第一步：在瀏覽器中取得完整的 cURL

因為 Klook 後台 API 有較嚴格的身分驗證（包含 CSRF Token、專屬 Request Headers 與 HttpOnly Cookie），最快速且 100% 成功的方法是：

1. 用瀏覽器（Chrome 或 Edge）登入 [Klook Affiliate 後台](https://affiliate.klook.com/)
2. 按 `F12`（Mac 按 `Cmd + Option + I`）開啟開發者工具，切換至 **「Network（網路）」** 標籤頁
3. 在頁面上點擊搜尋或翻頁
4. 在 Network 清單中找到 `search?lang=zh_TW`
5. 在該請求上點**右鍵** ➜ **「Copy」** ➜ **「Copy as cURL (bash)」**

### 第二步：交給 AI 或貼入設定

將複製出來的 cURL 貼給 AI，或者直接執行：
```bash
python3 爬蟲/parse_curl.py '<你的 cURL 指令>'
```

### 第三步：執行爬蟲

```bash
python3 爬蟲/klook_affiliate_crawler.py
```

爬蟲會自動逐頁抓取全部台灣商品，並即時儲存為 `klook_products_all.json` 與 `klook_products_all.csv`！

