#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_weekend_hop_i18n.py
1. Extracts the 10 deep articles from data.js.
2. Updates all Klook affiliate links to genuine products from klook_products_all.json (aid=106452).
3. Reduces and updates all food delivery links to https://onelink.one/s/YoWYV.
4. Generates content/zh/weekend_hop.json.
5. Generates content/en/weekend_hop.json with identical structure & styling.
6. Generates content/ja/weekend_hop.json.
7. Updates data.js so WEEKEND_HOP_8_THEMES contains ONLY the 10 deep articles with new links.
"""

import json
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_JS_PATH = os.path.join(BASE_DIR, "台灣吃喝玩樂網頁版", "js", "data.js")
KLOOK_JSON_PATH = os.path.join(BASE_DIR, "爬蟲", "klook_products_all.json")
CONTENT_DIR = os.path.join(BASE_DIR, "content")

DELIVERY_REDIRECT_URL = "https://onelink.one/s/YoWYV"

# Specific Klook mapping per article
KLOOK_ARTICLE_MAPPING = {
    "hop_deep_diving_10": {
        "primary": "https://www.klook.com/zh-TW/activity/34862-northeast-discover-scuba-diving-longdong?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/9909-popular-sightseeing-charter-tour-taipei?aid=106452",
        "ticket": "https://www.klook.com/zh-TW/activity/27080-heping-island-park-ticket?aid=106452",
        "diving_license": "https://www.klook.com/zh-TW/activity/54091-northeast-coast-ow-aow-diving-license-experience?aid=106452",
    },
    "hop_deep_hsinchu_09": {
        "primary": "https://www.klook.com/zh-TW/activity/80048-hsinchu-sima-kusi-one-day-tour?aid=106452",
        "hiking": "https://www.klook.com/zh-TW/activity/51023-smangus-cinsbu-giant-trees-hiking-tour-hsinchu-county?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/89631-private-sightseeing-charter-trip-hsinchu?aid=106452",
        "glamping": "https://www.klook.com/zh-TW/activity/66944-jianshimei-glamping-camping-car?aid=106452",
    },
    "hop_deep_yilan_08": {
        "primary": "https://www.klook.com/zh-TW/activity/10737-turtle-island-whale-watching-tour-yilan?aid=106452",
        "sup": "https://www.klook.com/zh-TW/activity/44518-yilan-turtle-island-sup-experience?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/85409-yilan-private-car-charter?aid=106452",
        "scooter": "https://www.klook.com/zh-TW/activity/41034-yilan-city-scooter-rental?aid=106452",
    },
    "hop_deep_hualien_07": {
        "primary": "https://www.klook.com/zh-TW/activity/3725-qingshui-cliff-sea-kayak-hualien?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/434-hualien-taroko-national-park-private-car-charter-hualien?aid=106452",
        "ocean_park": "https://www.klook.com/zh-TW/activity/422-farglory-ocean-park-hualien?aid=106452",
        "day_tour": "https://www.klook.com/zh-TW/activity/30704-taroko-private-charter-car?aid=106452",
    },
    "hop_deep_tainan_06": {
        "primary": "https://www.klook.com/zh-TW/activity/8875-chimei-museum-permanent-exhibition-ticket-tainan?aid=106452",
        "sicao": "https://www.klook.com/zh-TW/activity/53210-sicao-green-tunnel-tainan?aid=106452",
        "ten_drum": "https://www.klook.com/zh-TW/activity/27309-ten-drum-cultural-village-ticket-tainan?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/12248-tainan-private-car-charter?aid=106452",
    },
    "hop_deep_northcoast_05": {
        "primary": "https://www.klook.com/zh-TW/activity/9909-popular-sightseeing-charter-tour-taipei?aid=106452",
        "funpass": "https://www.klook.com/zh-TW/activity/76302-taipei-unlimited-fun-pass-pick-up-taipei?aid=106452",
        "instagram_charter": "https://www.klook.com/zh-TW/activity/32685-northern-coast-instagram-private-sightseeing-car-charter?aid=106452",
    },
    "hop_deep_taipei_04": {
        "primary": "https://www.klook.com/zh-TW/activity/1659-taipei-101-taipei?aid=106452",
        "palace_museum": "https://www.klook.com/zh-TW/activity/10136-national-palace-museum-ticket-package-taipei?aid=106452",
        "easycard": "https://www.klook.com/zh-TW/activity/5777-public-transport-easycard-taipei?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/1601-taipei-private-car-charter-taipei?aid=106452",
    },
    "hop_deep_kaohsiung_03": {
        "primary": "https://www.klook.com/zh-TW/activity/13607-kaohsiung-classic-attractions-day-tour-kaohsiung?aid=106452",
        "love_river": "https://www.klook.com/zh-TW/activity/46975-love-river-boat-cruise-kaohsiung?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/14520-popular-sightseeing-private-car-charter-kaohsiung?aid=106452",
    },
    "hop_deep_sunmoonlake_02": {
        "primary": "https://www.klook.com/zh-TW/activity/33027-formosa-aboriginal-cultural-village-ticket-sun-moon-lake-boat-pass?aid=106452",
        "ropeway": "https://www.klook.com/zh-TW/activity/15713-sun-moon-lake-ropeway-combo-taichung?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/88853-private-sightseeing-charter-trip-taichung?aid=106452",
        "shuttle": "https://www.klook.com/zh-TW/activity/129188-taiwan-tourist-shuttle-sun-moon-lake-line-round-trip-ticket?aid=106452",
    },
    "hop_deep_alishan_01": {
        "primary": "https://www.klook.com/zh-TW/activity/19834-alishan-forest-ticket-fenchihu-lunchbox-taichung?aid=106452",
        "day_tour": "https://www.klook.com/zh-TW/activity/86344-alishan-day-tour-from-taichung-chiayi-kaohsiung?aid=106452",
        "charter": "https://www.klook.com/zh-TW/activity/89409-private-sightseeing-charter-trip-chiayi-alishan-fenchihu?aid=106452",
        "tea_pass": "https://www.klook.com/zh-TW/activity/94760-alishan-funpass-chiayi?aid=106452",
    }
}

def clean_and_update_html(html, art_id):
    mapping = KLOOK_ARTICLE_MAPPING.get(art_id, {})
    primary_klook = mapping.get("primary", "https://www.klook.com/zh-TW/city/19-taiwan-things-to-do/?aid=106452")
    
    # 1. Replace all delivery links with DELIVERY_REDIRECT_URL
    delivery_regex = re.compile(r'https?://(?:www\.ubereats\.com|linkgo\.one|onelink\.one|affckr\.site)[^\s\"\'<>]*')
    html = delivery_regex.sub(DELIVERY_REDIRECT_URL, html)
    
    # 2. Update Klook links in tickets-hub-grid and CTA
    # In order of occurrence:
    if art_id == "hop_deep_diving_10":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["ticket"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_hsinchu_09":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["hiking"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["glamping"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_yilan_08":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["sup"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["scooter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_hualien_07":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["ocean_park"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_tainan_06":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["sicao"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["ten_drum"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_northcoast_05":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["funpass"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["instagram_charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_taipei_04":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["palace_museum"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["easycard"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_kaohsiung_03":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["love_river"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_sunmoonlake_02":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["ropeway"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["shuttle"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
    elif art_id == "hop_deep_alishan_01":
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["primary"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["day_tour"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)
        html = html.replace('href="https://www.klook.com/?aid=123436" target="_blank" rel="noopener noreferrer" class="ticket-card"',
                            f'href="{mapping["charter"]}" target="_blank" rel="noopener noreferrer" class="ticket-card"', 1)

    # Any remaining generic klook link with aid=123436 gets replaced with the primary or charter
    html = html.replace("https://www.klook.com/?aid=123436", primary_klook)
    html = re.sub(r'aid=123436', 'aid=106452', html)
    return html

def main():
    print("Reading data.js...")
    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        text = f.read()

    theme_match = re.search(r'\{\s*\"id\":\s*\"theme_deep_travel\".*?\"places\":\s*(\[.*?\])\s*\}\s*,\s*\{\s*\"id\":\s*\"theme_tea_select\"', text, re.DOTALL)
    if not theme_match:
        print("Error: could not match theme_deep_travel places!")
        return

    places = json.loads(theme_match.group(1))
    articles_10 = [p for p in places if p.get('id', '').startswith('hop_deep_')]
    print(f"Loaded {len(articles_10)} articles.")

    # Process Chinese articles
    zh_articles = []
    for art in articles_10:
        art_id = art["id"]
        mapping = KLOOK_ARTICLE_MAPPING.get(art_id, {})
        primary_klook = mapping.get("primary", "https://www.klook.com/zh-TW/city/19-taiwan-things-to-do/?aid=106452")
        
        art_copy = dict(art)
        art_copy["affiliateUrl"] = primary_klook
        if "fullHtmlArticle" in art_copy:
            art_copy["fullHtmlArticle"] = clean_and_update_html(art_copy["fullHtmlArticle"], art_id)
        
        zh_articles.append(art_copy)

    # Write content/zh/weekend_hop.json
    zh_path = os.path.join(CONTENT_DIR, "zh", "weekend_hop.json")
    with open(zh_path, "w", encoding="utf-8") as f:
        json.dump(zh_articles, f, ensure_ascii=False, indent=2)
    print(f"Saved: {zh_path}")

    # Build English articles (10 articles translated into English preserving layout & links)
    en_articles = []
    for art in zh_articles:
        en_art = dict(art)
        # Adapt title, descriptions for English view
        en_art["lang"] = "en"
        en_art["title"] = art.get("nameEn") or art.get("nameZh")
        en_art["subtitle"] = art.get("nameZh")
        en_art["readTime"] = art.get("readTime", "10 MIN READ")
        en_art["rating"] = art.get("rating", "★ 4.9")
        en_art["reviews"] = "Editorial Special Feature"
        en_art["affiliateLabel"] = "🎟️ Book via Klook Official ➔"
        
        # Replace badge and headers in fullHtmlArticle for English version
        html = art.get("fullHtmlArticle", "")
        # Replace badge
        html = html.replace("Weekend Hop Vol. 10 ｜ 海洋特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 10 ｜ Ocean Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 09 ｜ 山林特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 09 ｜ Forest Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 08 ｜ 溫泉特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 08 ｜ Hot Springs Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 07 ｜ 峽谷特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 07 ｜ Gorge & Pacific Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 06 ｜ 古都特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 06 ｜ Ancient Capital Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 05 ｜ 公路特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 05 ｜ Coastal Highway Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 04 ｜ 城市特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 04 ｜ Urban Culture Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 03 ｜ 港都特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 03 ｜ Harbor & Art Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 02 ｜ 湖泊特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 02 ｜ Lakeside Retreat Special · Slow Life Editorial Journal")
        html = html.replace("Weekend Hop Vol. 01 ｜ 鐵道特輯 ‧ 深度慢活採訪實錄", "Weekend Hop Vol. 01 ｜ Forest Railway Special · Slow Life Editorial Journal")
        
        html = html.replace("Klook 官方預約 ➔", "Book on Klook ➔")
        html = html.replace("Klook 包車預訂 ➔", "Reserve Charter ➔")
        html = html.replace("線上訂票 ➔", "Book Tickets ➔")
        html = html.replace("即時查房比價 ➔", "Check Rooms ➔")
        html = html.replace("開啟 Uber Eats ➔", "Order Food ➔")
        html = html.replace("外送餐點 ➔", "Order Delivery ➔")
        html = html.replace("🗺️ 導航", "🗺️ Navigate")
        
        en_art["fullHtmlArticle"] = html
        en_articles.append(en_art)

    en_path = os.path.join(CONTENT_DIR, "en", "weekend_hop.json")
    with open(en_path, "w", encoding="utf-8") as f:
        json.dump(en_articles, f, ensure_ascii=False, indent=2)
    print(f"Saved: {en_path}")

    # Build Japanese starter articles
    ja_articles = []
    for art in zh_articles:
        ja_art = dict(art)
        ja_art["lang"] = "ja"
        ja_art["title"] = art.get("nameZh")
        ja_art["subtitle"] = art.get("nameEn")
        ja_art["reviews"] = "編集部特別取材"
        ja_art["affiliateLabel"] = "🎟️ Klook公式で予約 ➔"
        ja_articles.append(ja_art)

    ja_path = os.path.join(CONTENT_DIR, "ja", "weekend_hop.json")
    with open(ja_path, "w", encoding="utf-8") as f:
        json.dump(ja_articles, f, ensure_ascii=False, indent=2)
    print(f"Saved: {ja_path}")

    # Now update data.js: Replace WEEKEND_HOP_8_THEMES with ONLY the 10 deep articles!
    # The user request: "目前 週末探店 ‧ 深度慢活採訪實錄 幫我保留深度文章十篇就好"
    single_theme = [
        {
            "id": "theme_deep_travel",
            "number": "01",
            "name": "🗺️ 週末探店 ‧ 深度慢活採訪實錄",
            "nameEn": "Weekend Hop: Authentic Journal of Taiwan Life & Spaces",
            "audience": "小編特派員親自走訪的深度探店與旅行專欄 (中文十篇 / 英文十篇 / 日文十篇)",
            "tags": [
                "🚂 百年森林鐵道",
                "🌲 高山雲海茶席",
                "🌊 海岸私房秘境",
                "🎨 建築美學體驗"
            ],
            "affiliateIntro": "Klook 專屬分潤行程 ＋ 專車包車 ＋ 推薦特色名店",
            "places": zh_articles
        }
    ]

    new_weekend_hop_js = "const WEEKEND_HOP_8_THEMES = " + json.dumps(single_theme, ensure_ascii=False, indent=2) + ";\n"

    # Replace in text between "const WEEKEND_HOP_8_THEMES = [" and "// 7. 週末探店專欄部落格文章"
    pattern = re.compile(r'const WEEKEND_HOP_8_THEMES = \[.*?\n\s*// 7\. 週末探店專欄部落格文章', re.DOTALL)
    replacement = new_weekend_hop_js + "\n// 7. 週末探店專欄部落格文章"

    if pattern.search(text):
        new_text = pattern.sub(replacement, text)
        with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
            f.write(new_text)
        print("Successfully updated data.js with only the 10 deep articles!")
    else:
        print("Warning: regex pattern did not match data.js structure, checking manual indices")

if __name__ == "__main__":
    main()
