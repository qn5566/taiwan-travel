# Trip.com 台灣城市編號

2026-11-18 逐一核對官方住宿頁的頁面名稱及內嵌 `cityId`。`765` 是斯圖加特，不能用於新北市。

| 縣市 | tripCityId | 官方住宿頁 |
| --- | --- | --- |
| 臺北市 | 617 | [官方來源](https://tw.trip.com/hotels/taipei-hotels-list-617/) |
| 基隆市 | 7810 | [官方來源](https://tw.trip.com/hotels/jilong-hotels-list-7810/) |
| 新北市 | 7662 | [官方來源](https://tw.trip.com/hotels/new-taipei-city-hotels-list-7662/) |
| 桃園市 | 7570 | [官方來源](https://tw.trip.com/hotels/taoyuan-hotels-list-7570/) |
| 新竹市 | 3845 | [官方來源](https://tw.trip.com/hotels/hsinchu-hotels-list-3845/) |
| 新竹縣 | 669328 | [官方來源](https://tw.trip.com/hotels/hsinchu-county-hotels-list-669328/) |
| 苗栗縣 | 7809 | [官方來源](https://tw.trip.com/hotels/miaoli-hotels-list-7809/) |
| 臺中市 | 3849 | [官方來源](https://tw.trip.com/hotels/taichung-hotels-list-3849/) |
| 彰化縣 | 7811 | [官方來源](https://tw.trip.com/hotels/zhanghua-hotels-list-7811/) |
| 南投縣 | 7524 | [官方來源](https://tw.trip.com/hotels/nantou-hotels-list-7524/) |
| 雲林縣 | 7523 | [官方來源](https://tw.trip.com/hotels/yunlin-hotels-list-7523/) |
| 嘉義市 | 5152 | [官方來源](https://tw.trip.com/hotels/chiayi-city-hotels-list-5152/) |
| 嘉義縣 | 650358 | [官方來源](https://tw.trip.com/hotels/chiayi-county-hotels-list-650358/) |
| 臺南市 | 3847 | [官方來源](https://tw.trip.com/hotels/tainan-hotels-list-3847/) |
| 高雄市 | 720 | [官方來源](https://tw.trip.com/hotels/kaohsiung-hotels-list-720/) |
| 屏東縣 | 5589 | [官方來源](https://tw.trip.com/hotels/pingtung-hotels-list-5589/) |
| 宜蘭縣 | 7614 | [官方來源](https://tw.trip.com/hotels/yilan-hotels-list-7614/) |
| 花蓮縣 | 6954 | [官方來源](https://tw.trip.com/hotels/hualien-hotels-list-6954/) |
| 臺東縣 | 3848 | [官方來源](https://tw.trip.com/hotels/taitung-hotels-list-3848/) |
| 澎湖縣 | 7805 | [官方來源](https://tw.trip.com/hotels/penghu-hotels-list-7805/) |
| 金門縣 | 7203 | [官方來源](https://tw.trip.com/hotels/kinmen-hotels-list-7203/) |
| 連江縣 | 7808 | [官方來源](https://tw.trip.com/hotels/matsu-hotels-list-7808/) |

新竹縣與新竹市、嘉義縣與嘉義市分別使用不同編號。連江縣對應 Trip.com 的馬祖住宿目的地。

設定來源為 ActivityEvent 的 `affiliate_config.json`；執行 `python3 scripts/sync_affiliate_config.py` 更新網站的 JSON 與 JavaScript。App 的 `assets/affiliate_config.json` 為內附備援，應同步更新其中的城市資料。

`config/trip-city-ids.verified.json` 保留本次官方來源與頁面標題，供資料檢查使用。
