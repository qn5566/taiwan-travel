# 🇹🇼 台灣吃喝玩樂 (Taiwan Food, Drink & Fun Express)

專為喜愛台灣深度探索的旅人打造之「純網頁響應式在地生活誌與風土地圖」。

---

## 🌟 核心特色

1. **視覺美學**：
   - 暖奶茶米白底色（`#FAF8F5`）搭配細膩的島嶼海浪幾何微浮水印。
   - 綠意山林（`#059669`）、珊瑚熱情紅（`#E11D48`）與琥珀木質（`#B45309`）隨分類動態切換。
   - 寬幅 `max-w-[1540px]`，兩側無過度留白，卡片自適應 1/2/3/4 欄。

2. **四大骨幹分類**：
   - 🍜 **在地小吃**：台南牛肉湯、台北必比登阜杭豆漿、夜市排隊王、古早味老店。
   - ☕ **老宅咖啡**：九份海景茶樓、赤峰街復古老屋、墾丁懸崖第一排海景咖啡。
   - 🏞️ **絕美秘境**：阿里山雲海巨木群、花蓮七星潭月牙灣、日月潭水上自行車道。
   - 🎪 **週末市集**：台北華山 1914、高雄駁二藝術特區、台中審計新村。
   - ♨️ **渡假溫泉**：礁溪頂級美人湯、北投純正白磺日式風呂。

3. **台灣探索地圖**：
   - 採用 100% 免費開源之 **Leaflet.js + CARTO Voyager** 底圖。
   - 標記全台代表性地點，點擊即可開啟詳細卡片與 Google 導航。
   - 一鍵跳轉雙北、台中、台南、高雄、宜蘭、花蓮。

4. **分潤與導流**：
   - 依旅客市場選用規格中已確認的亞洲帳號與國際分潤短鏈，Klook AID 為 `123436`。

## 全球分潤設定

共同來源為相鄰專案 `../ActivityEvent/affiliate_config.json`。更新後執行：

```sh
python3 scripts/sync_affiliate_config.py
```

也可用 `--source /完整路徑/affiliate_config.json` 指定來源。腳本更新 `config/affiliate.json` 與同步載入的 `js/affiliate-config.js`；寵物品牌略過。

頁面依序載入 `affiliate-config.js`、`affiliate-market.js`，需要既有 API 的頁面再載入 `affiliate.js`。請一併發布這些檔案。市場／幣別選單獨立於網站語言；選「自動偵測」可取消手動市場。IP 失敗時使用瀏覽器語言備援，只有國家與時間會被快取。

`AFFILIATE_HUB` 保留既有函式名稱，住宿改依市場進入 Trip 或 Hotels.com，不再使用舊的 Booking 雙重追蹤。商品連結保留商品路徑；首頁、收藏與後續載入的卡片也會套用目前市場。既有台幣參考價不做匯率換算。

舊的 `scripts/global_link_cleaner.py` 現在只做相同的設定同步，不再把新帳號改回舊帳號。詳細檢視、修正與後續建議見 [H5_REVIEW.md](H5_REVIEW.md)。

驗證指令：`node --test scripts/test_*.cjs`。

---

## 🚀 啟動本機伺服器

```bash
perl server.pl
# 服務運行於 http://127.0.0.1:8081/
```

- 預設網址：[http://localhost:8081/](http://localhost:8081/)

