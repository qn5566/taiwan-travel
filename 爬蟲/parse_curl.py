#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Helper to parse cURL command or headers into crawler_config.json
"""

import os
import re
import json
import shlex

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_FILE = os.path.join(BASE_DIR, "crawler_config.json")

def parse_curl_command(curl_str: str) -> dict:
    """從 Chrome 'Copy as cURL' 字串中提取 Headers 與 Cookies"""
    headers = {}
    cookie = ""
    
    # 簡單正則提取 -H 參數
    header_matches = re.findall(r"-H\s+['\"]([^'\"]+)['\"]", curl_str)
    for h in header_matches:
        if ":" in h:
            k, v = h.split(":", 1)
            k = k.strip()
            v = v.strip()
            if k.lower() == "cookie":
                cookie = v
            else:
                headers[k] = v

    # 如果沒有抓到 cookie，也檢查 --cookie
    cookie_match = re.search(r"--cookie\s+['\"]([^'\"]+)['\"]", curl_str)
    if cookie_match:
        cookie = cookie_match.group(1)

    return {
        "headers": headers,
        "cookie": cookie
    }

def update_config_from_curl(curl_str: str):
    data = parse_curl_command(curl_str)
    with open(CONFIG_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"✅ 已成功將 Headers 與 Cookies 寫入 {CONFIG_FILE}！")
    print(f"   提取到的 Headers 數量: {len(data['headers'])}")
    print(f"   Cookie 長度: {len(data['cookie'])} 字元")

if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1:
        curl_text = " ".join(sys.argv[1:])
        update_config_from_curl(curl_text)
    else:
        print("請傳入 cURL 指令字串或手動編輯 crawler_config.json")

