#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Klook Affiliate Product Crawler
爬取 Klook 推廣聯盟台灣區全部商品資料與專屬推廣連結
"""

import os
import sys
import json
import time
import csv
import urllib.request
import ssl
from typing import Dict, Any, List, Optional, Tuple

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_FILE = os.path.join(BASE_DIR, "crawler_config.json")
OUTPUT_JSON = os.path.join(BASE_DIR, "klook_products_all.json")
OUTPUT_CSV = os.path.join(BASE_DIR, "klook_products_all.csv")
PROGRESS_FILE = os.path.join(BASE_DIR, "crawler_progress.json")

API_URL = "https://affiliate.klook.com/v1/affsrv/product/search?lang=zh_TW"

def load_config() -> Dict[str, Any]:
    """載入設定檔（包含 headers, cookies 與 affiliate_id）"""
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"⚠️ 讀取 {CONFIG_FILE} 失敗: {e}")
    return {}

def save_progress(last_rank: int, total_items: int):
    """保存爬取進度，支援中斷後接續爬取"""
    data = {
        "last_rank": last_rank,
        "total_items": total_items,
        "updated_at": time.strftime("%Y-%m-%d %H:%M:%S")
    }
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def load_progress() -> Dict[str, Any]:
    """載入上次爬取進度"""
    if os.path.exists(PROGRESS_FILE):
        try:
            with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {"last_rank": 0, "total_items": 0}

def fetch_page(headers: Dict[str, str], last_rank: int = 0, retry: int = 8) -> Optional[Dict[str, Any]]:
    """發送單次 API 請求，具備重試機制與頻率限制 (Rate Limit) 自動等待"""
    payload = {
        "keyword": "",
        "locale": "zh-TW",
        "currency": "TWD",
        "last_rank": last_rank,
        "sub_category_id": [],
        "area": [
            {
                "area_code": "Asia",
                "country_code": "taiwan"
            }
        ]
    }
    
    data = json.dumps(payload).encode("utf-8")
    ctx = ssl.create_default_context()

    for attempt in range(1, retry + 1):
        try:
            req = urllib.request.Request(API_URL, data=data, headers=headers, method="POST")
            with urllib.request.urlopen(req, context=ctx, timeout=30) as resp:
                if resp.status == 200:
                    body = resp.read().decode("utf-8")
                    parsed = json.loads(body)
                    if parsed.get("success"):
                        return parsed
                    
                    err = parsed.get("error", {})
                    err_code = err.get("code")
                    err_msg = err.get("message", "")
                    
                    if err_code == "P0216" or "frequently" in err_msg.lower():
                        cool_time = 15 + attempt * 5
                        print(f"\n⏳ 觸發訪問頻率限制 (visiting too frequently)，自動冷卻 {cool_time} 秒後重試...")
                        time.sleep(cool_time)
                        continue
                    else:
                        print(f"\n⚠️ API 回傳錯誤: {err}")
                else:
                    print(f"\n⚠️ HTTP 狀態碼: {resp.status}")
        except Exception as e:
            error_body = ""
            if hasattr(e, "read"):
                try:
                    error_body = e.read().decode("utf-8", errors="ignore")
                except Exception:
                    pass
            print(f"\n⚠️ 第 {attempt}/{retry} 次請求失敗 (last_rank: {last_rank}): {e} {error_body[:150]}")
            if "Auth Fail" in error_body or "403" in str(e):
                print("🛑 驗證失敗 (Auth Fail)！請檢查 Cookie 或 Headers 是否過期。")
                return None
            time.sleep(3 * attempt)
            
    return None

def build_affiliate_link(detail_url: str, aid: str) -> str:
    """生成包含 affiliate id 的專屬推廣連結"""
    if not detail_url:
        return ""
    if not aid:
        return detail_url
    delimiter = "&" if "?" in detail_url else "?"
    return f"{detail_url}{delimiter}aid={aid}"

def extract_products(response_data: Dict[str, Any], aid: str) -> Tuple[List[Dict[str, Any]], Optional[int]]:
    """從回傳 JSON 中解析出商品清單與最後一個商品的 rank"""
    res = response_data.get("result", {})
    products = res.get("products", [])
    if not products:
        # 兼容其他可能結構
        data = response_data.get("data", {})
        if isinstance(data, dict):
            products = data.get("products", []) or data.get("items", [])
        elif isinstance(data, list):
            products = data

    next_rank = None
    enriched_products = []
    for p in products:
        rank = p.get("rank")
        if rank is not None:
            next_rank = rank
        
        detail_url = p.get("detail_url", "")
        p["affiliate_url"] = build_affiliate_link(detail_url, aid)
        enriched_products.append(p)

    return enriched_products, next_rank

def export_to_csv(products: List[Dict[str, Any]], filepath: str):
    """匯出乾淨易讀的 CSV 檔案"""
    if not products:
        return
    
    preferred_order = [
        "rank",
        "product_name",
        "city_name",
        "sell_price_format",
        "sell_price",
        "rate",
        "affiliate_url",
        "detail_url",
        "instant_text",
        "category_id",
        "product_id",
        "image_url"
    ]
    
    # 取得商品有的所有欄位
    all_keys = set()
    for p in products:
        all_keys.update(p.keys())
    
    fields = [k for k in preferred_order if k in all_keys]
    fields += [k for k in all_keys if k not in fields]
    
    with open(filepath, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        for p in products:
            row = {}
            for k in fields:
                val = p.get(k)
                if isinstance(val, (dict, list)):
                    row[k] = json.dumps(val, ensure_ascii=False)
                else:
                    row[k] = val
            writer.writerow(row)
    print(f"📊 已成功匯出 CSV 表格: {filepath} (共 {len(products)} 筆資料)")

def run_crawler():
    """執行完整爬蟲程序"""
    config = load_config()
    headers = config.get("headers", {})
    cookie = config.get("cookie", "")
    aid = config.get("affiliate_id", "106452")

    if cookie:
        headers["cookie"] = cookie

    if "cookie" not in headers or not headers["cookie"]:
        print("⚠️ 尚未設定 Cookie！請在 crawler_config.json 中填入 Cookie。")
        return

    progress = load_progress()
    last_rank = progress.get("last_rank", 0)
    
    all_products = []
    if os.path.exists(OUTPUT_JSON):
        try:
            with open(OUTPUT_JSON, "r", encoding="utf-8") as f:
                all_products = json.load(f)
            print(f"📂 載入已存在之資料: {len(all_products)} 筆，自 rank={last_rank} 繼續爬取...")
        except Exception:
            all_products = []

    page = 1
    seen_ids = set()
    for p in all_products:
        pid = p.get("product_id")
        if pid:
            seen_ids.add(pid)

    print(f"🚀 開始爬取 Klook 台灣商品 (推廣 ID: {aid})...")

    try:
        while True:
            print(f"📄 正在爬取第 {page} 頁 (目前 last_rank: {last_rank})...", end=" ", flush=True)
            res = fetch_page(headers, last_rank)
            
            if not res or not res.get("success"):
                print("❌ 爬取中斷！請檢查錯誤訊息或更新 Cookie。")
                break

            products, next_rank = extract_products(res, aid)
            
            if not products:
                print("✅ 已無更多新商品，爬取完畢！")
                break

            new_count = 0
            for p in products:
                pid = p.get("product_id")
                if not pid or pid not in seen_ids:
                    all_products.append(p)
                    if pid:
                        seen_ids.add(pid)
                    new_count += 1

            print(f"✔️ 成功取得 {len(products)} 筆 (累計: {len(all_products)} 筆, 新 rank: {next_rank})")

            # 每次即時寫入 JSON
            with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
                json.dump(all_products, f, ensure_ascii=False, indent=2)

            if next_rank is not None and next_rank != last_rank:
                last_rank = next_rank
                save_progress(last_rank, len(all_products))
            else:
                print("🏁 無更新的 rank，已爬取至最末頁！")
                break

            page += 1
            # 延遲 1.8 秒保護帳號與防止頻率限制
            time.sleep(1.8)

    except KeyboardInterrupt:
        print("\n⚠️ 使用者手動中斷爬蟲。目前進度已完整保存！")

    # 匯出 CSV 表格
    export_to_csv(all_products, OUTPUT_CSV)
    print(f"\n🎉 爬取結束！總計抓取 {len(all_products)} 筆商品。")
    print(f"📁 JSON: {OUTPUT_JSON}")
    print(f"📁 CSV:  {OUTPUT_CSV}")

if __name__ == "__main__":
    run_crawler()
