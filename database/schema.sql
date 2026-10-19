-- ===============================================================
-- 台灣吃喝玩樂 獨立資料庫架構 (PostgreSQL / Supabase Schema)
-- 專門為台灣在地風土、必比登小吃、老宅咖啡、週末市集與溫泉設計
-- ===============================================================

-- 1. 核心地點資料表 (Taiwan Spots: 美食、咖啡、秘境、市集、溫泉)
CREATE TABLE IF NOT EXISTS taiwan_spots (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(128) NOT NULL,
    name_en VARCHAR(128),
    category VARCHAR(32) NOT NULL CHECK (category IN ('food', 'cafe', 'spot', 'market', 'onsen')),
    region VARCHAR(32) NOT NULL CHECK (region IN ('north', 'central', 'south', 'east', 'island')),
    county VARCHAR(32) NOT NULL,            -- 縣市：如 台北市、台南市、屏東縣、宜蘭縣
    district VARCHAR(64) NOT NULL,          -- 鄉鎮市區：如 中西區、恆春鎮、瑞芳區
    address TEXT NOT NULL,
    transit_info TEXT,                      -- 大眾運輸：捷運/公車/高鐵/火車站
    parking_info TEXT,                      -- 停車便利度：附設停車場、鄰近收費停車場
    
    -- 評分與人氣指標
    rating NUMERIC(3,2) DEFAULT 4.5,        -- Google 評分
    reviews_count INT DEFAULT 0,            -- 評論數量
    badge_label VARCHAR(64),                -- 特色徽章：如「⭐ 米其林必比登」「🏮 山海第一排」
    badge_color VARCHAR(32),
    
    -- 台灣在地特色指標
    subtag VARCHAR(32),                     -- 次分類：beef, cliff, weekend, trail, private
    bib_gourmand_year INT,                  -- 必比登獲選年份：如 2024, 2025, 2026
    avg_price_ntd INT,                      -- 平均消費 (NT$)
    queue_wait_minutes INT DEFAULT 15,      -- 預估尖峰候位時間 (分鐘)
    operating_hours TEXT,                   -- 營業時間
    closed_days VARCHAR(64),                -- 每週固定公休日
    
    -- 必吃推薦與攻略
    signature_dishes TEXT[],                -- 招牌必點：如 ['精選牛肉湯', '肉燥飯']
    insider_tips TEXT,                      -- 內行旅人秘笈避雷
    
    -- 經緯度與多媒體
    lat NUMERIC(10, 7) NOT NULL,
    lng NUMERIC(10, 7) NOT NULL,
    cover_image_url TEXT NOT NULL,
    gallery_image_urls TEXT[],
    
    -- 合作導流連結
    ticket_klook_url TEXT,
    ticket_kkday_url TEXT,
    google_maps_url TEXT,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. 週末文創市集特別行程表 (Taiwan Weekend Markets Schedule)
CREATE TABLE IF NOT EXISTS taiwan_markets (
    id VARCHAR(64) PRIMARY KEY,
    spot_id VARCHAR(64) REFERENCES taiwan_spots(id) ON DELETE CASCADE,
    market_name VARCHAR(128) NOT NULL,
    schedule_pattern VARCHAR(64),           -- 如「每週六日 11:00-19:00」
    stall_count INT,                        -- 攤位規模：如 60~120 攤
    theme_type VARCHAR(64),                 -- 市集主題：手作選品、陶藝、毛孩寵物、草地音樂
    is_active BOOLEAN DEFAULT TRUE,
    curator VARCHAR(64),                    -- 主辦單位：如 暮暮市集、大義市集
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. 旅人現場實況 UGC 回報表 (Live Crowdsourcing & Queue Status)
CREATE TABLE IF NOT EXISTS taiwan_ugc_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    spot_id VARCHAR(64) REFERENCES taiwan_spots(id) ON DELETE CASCADE,
    spot_name VARCHAR(128) NOT NULL,
    reporter_nickname VARCHAR(64) DEFAULT '熱心旅人',
    crowd_status VARCHAR(64) NOT NULL,      -- 免排隊 / 需候位15分 / 需候位40分 / 今日已完售
    comment TEXT,
    photo_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. 索引優化 (提升分類與經緯度檢索效能)
CREATE INDEX IF NOT EXISTS idx_taiwan_spots_cat_reg ON taiwan_spots(category, region);
CREATE INDEX IF NOT EXISTS idx_taiwan_spots_coords ON taiwan_spots(lat, lng);
CREATE INDEX IF NOT EXISTS idx_taiwan_ugc_spot ON taiwan_ugc_reports(spot_id, created_at DESC);

