#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
global_link_cleaner.py
1. Updates affiliate.js to use klookAid: "106452" and DELIVERY_URL.
2. Replaces all occurrences of aid=123436 with aid=106452 in all html/js files.
3. Replaces old food delivery / uber eats URLs across all html/js files with https://onelink.one/s/YoWYV.
"""

import glob
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_DELIVERY = "https://onelink.one/s/YoWYV"

# Update affiliate.js
affiliate_js_path = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "js", "affiliate.js")
if os.path.exists(affiliate_js_path):
    with open(affiliate_js_path, "r", encoding="utf-8") as f:
        content = f.read()
    content = content.replace('klookAid: "123436"', 'klookAid: "106452"')
    content = content.replace('https://www.ubereats.com/tw/search?q=%E7%83%A4%E8%82%89%E7%94%9F%E9%AE%AE', TARGET_DELIVERY)
    content = re.sub(r'wanjiafuLatestUrl:\s*"https://www\.ubereats\.com[^"]*"', f'wanjiafuLatestUrl: "{TARGET_DELIVERY}"', content)
    content = content.replace("aid=123436", "aid=106452")
    with open(affiliate_js_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated affiliate.js")

# Files to scan
files = glob.glob(os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "**", "*.html"), recursive=True) + \
        glob.glob(os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "**", "*.js"), recursive=True) + \
        glob.glob(os.path.join(BASE_DIR, "app", "**", "*.html"), recursive=True)

old_delivery_links = [
    "https://linkgo.one/s/qYLKx",
    "https://onelink.one/s/KmfgH",
    "https://onelink.one/s/GWEUg"
]

updated_count = 0
for fpath in files:
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        txt = f.read()
    orig = txt
    
    # Replace old klook AID
    txt = txt.replace("aid=123436", "aid=106452")
    txt = txt.replace("https://www.klook.com/?aid=123436", "https://www.klook.com/zh-TW/city/19-taiwan-things-to-do/?aid=106452")
    
    # Replace old delivery links
    for old_del in old_delivery_links:
        txt = txt.replace(old_del, TARGET_DELIVERY)
        
    if txt != orig:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(txt)
        updated_count += 1
        print(f"Updated: {os.path.relpath(fpath, BASE_DIR)}")

print(f"Total updated files: {updated_count}")
