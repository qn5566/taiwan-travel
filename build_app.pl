#!/usr/bin/env perl
use strict;
use warnings;
use utf8;
binmode(STDOUT, ":utf8");
use File::Copy qw(copy);

my $target = "/Users/nanaminanami/Documents/HiMyDream/台灣吃喝玩樂/app/index.html";

open my $fh, '>:utf8', $target or die "Cannot open $target: $!\n";

print $fh <<'HTML_APP_CODE';
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>台灣吃喝玩樂 | 全台必吃小吃・老宅景觀咖啡・絕美秘境與市集導覽</title>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>

  <!-- Leaflet.js Interactive Map (100% Free Open-Source) -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

  <!-- Google Fonts: Zen Maru Gothic, Noto Sans TC, Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Plus+Jakarta+Sans:wght@400;600;800&family=Zen+Maru+Gothic:wght@400;500;700;900&display=swap" rel="stylesheet">

  <style>
    :root {
      --theme-bg: #FAF8F5;
      --theme-card-bg: #FFFFFF;
      --theme-primary: #059669; /* 島嶼森綠 */
      --theme-primary-hover: #047857;
      --theme-soft: #D1FAE5;
      --theme-deep: #064E3B;
      --theme-border: #E8E3D8;
      --theme-text: #272320;
      --theme-muted: #78716C;
      --theme-accent: #F43F5E; /* 珊瑚人情紅 */
    }

    body.theme-food {
      --theme-bg: #FFF9F6;
      --theme-primary: #E11D48; /* 必吃美食 珊瑚紅 */
      --theme-primary-hover: #BE123C;
      --theme-soft: #FFE4E6;
      --theme-deep: #881337;
      --theme-border: #FCD5DC;
      --theme-text: #2B1519;
      --theme-muted: #8C656C;
    }

    body.theme-cafe {
      --theme-bg: #FAF6F0;
      --theme-primary: #B45309; /* 暖木手沖咖啡 琥珀棕 */
      --theme-primary-hover: #92400E;
      --theme-soft: #FEF3C7;
      --theme-deep: #78350F;
      --theme-border: #F3E5CC;
      --theme-text: #2B1E13;
      --theme-muted: #836B53;
    }

    body.theme-spot {
      --theme-bg: #F4FAF7;
      --theme-primary: #059669; /* 絕美山海 翠綠 */
      --theme-primary-hover: #047857;
      --theme-soft: #D1FAE5;
      --theme-deep: #064E3B;
      --theme-border: #CFEBDC;
      --theme-text: #13271F;
      --theme-muted: #577869;
    }

    body.theme-market {
      --theme-bg: #FAF5FF;
      --theme-primary: #8B5CF6; /* 週末市集 藝文紫 */
      --theme-primary-hover: #7C3AED;
      --theme-soft: #EDE9FE;
      --theme-deep: #4C1D95;
      --theme-border: #E4D8FC;
      --theme-text: #211538;
      --theme-muted: #6B5B85;
    }

    body.theme-onsen {
      --theme-bg: #F0F9FF;
      --theme-primary: #0284C7; /* 溫泉渡假 蔚藍泉水 */
      --theme-primary-hover: #0369A1;
      --theme-soft: #E0F2FE;
      --theme-deep: #0C4A6E;
      --theme-border: #BDE4FE;
      --theme-text: #112330;
      --theme-muted: #597388;
    }

    * {
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-family: 'Zen Maru Gothic', 'Noto Sans TC', sans-serif;
    }

    /* 台灣在地紙質美學：溫潤米白 ＋ 細膩島嶼海浪微浮水印 */
    body {
      background-color: var(--theme-bg);
      background-image: 
        url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 A15 15 0 0 1 30 15 A15 15 0 0 1 60 15 M-15 30 A15 15 0 0 1 15 30 A15 15 0 0 1 45 30 A15 15 0 0 1 75 30 M-15 0 A15 15 0 0 1 15 0 A15 15 0 0 1 45 0 A15 15 0 0 1 75 0' fill='none' stroke='%23C5BAA8' stroke-width='0.7' stroke-opacity='0.16'/%3E%3C/svg%3E"),
        radial-gradient(circle at 50% 50%, rgba(180, 160, 130, 0.08) 1px, transparent 1px);
      background-size: 60px 30px, 28px 28px;
      color: var(--theme-text);
      transition: background-color 0.4s ease, color 0.4s ease;
      overflow-x: hidden;
      min-height: 100vh;
    }

    .border-theme { border-color: var(--theme-border); }
    .bg-theme-soft { background-color: var(--theme-soft); }
    .text-theme-primary { color: var(--theme-primary); }
    .bg-theme-primary { background-color: var(--theme-primary); }
    .text-theme-deep { color: var(--theme-deep); }
    .text-theme-muted { color: var(--theme-muted); }

    .tw-shadow {
      box-shadow: 0 4px 20px -2px rgba(60, 45, 30, 0.05), 0 2px 6px -1px rgba(60, 45, 30, 0.02);
    }
    .tw-shadow-lg {
      box-shadow: 0 12px 32px -4px rgba(60, 45, 30, 0.08), 0 4px 12px -2px rgba(60, 45, 30, 0.04);
    }

    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    .leaflet-container {
      font-family: 'Zen Maru Gothic', sans-serif !important;
      background-color: #FAF8F5 !important;
    }
    .custom-map-icon { background: none; border: none; }
  </style>
</head>
<body class="theme-spot min-h-screen flex flex-col relative">

  <!-- ================= 頂部 Header (寬版適配，左右留白恰到好處) ================= -->
  <header class="sticky top-0 z-40 bg-white/94 backdrop-blur-md border-b border-theme transition-colors">
    <div class="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-3 flex items-center justify-between gap-4">
      
      <!-- Brand Logo with Taiwan Island & Pin -->
      <div class="flex items-center gap-3 cursor-pointer select-none" onclick="resetAllFilters()">
        <div class="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 border border-emerald-400/40 shadow-sm flex items-center justify-center overflow-hidden flex-shrink-0 text-white text-xl">
          🇹🇼
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h1 id="i18n-brand-title" class="text-base sm:text-lg font-black tracking-tight text-theme-text leading-tight">台灣吃喝玩樂</h1>
            <span class="text-[10px] font-black px-2 py-0.5 rounded-full bg-theme-soft text-theme-primary border border-theme">
              在地生活誌
            </span>
          </div>
          <p id="i18n-brand-sub" class="text-[11px] text-theme-muted font-medium hidden sm:block">全台必吃排隊小吃・絕美山海老宅咖啡・週末市集與秘境地圖</p>
        </div>
      </div>

      <!-- 視圖切換 (📋 卡片清單 ⇄ 🗺️ 台灣探索地圖) -->
      <div class="flex items-center bg-stone-100 p-1 rounded-2xl border border-theme">
        <button id="view-cards-btn" onclick="setViewMode('cards')" class="px-3.5 py-1.5 text-xs font-black rounded-xl transition bg-white text-theme-primary shadow-sm flex items-center gap-1.5">
          <span>📋</span> <span id="i18n-view-cards">精選清單</span>
        </button>
        <button id="view-map-btn" onclick="setViewMode('map')" class="px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-500 hover:text-stone-900 flex items-center gap-1.5">
          <span>🗺️</span> <span id="i18n-view-map">全台風土地圖</span>
        </button>
      </div>

      <!-- 右側按鈕：語言切換 + 口袋名單收藏 -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button onclick="toggleLanguage()" id="lang-toggle-btn" class="px-3 py-1.5 rounded-2xl bg-white border border-theme shadow-sm hover:scale-105 active:scale-95 transition flex items-center gap-1 text-xs font-black text-theme-deep flex-shrink-0">
          <span>🌐</span>
          <span id="lang-label">EN</span>
        </button>

        <button onclick="toggleBookmarkDrawer()" class="relative px-3 py-1.5 rounded-2xl bg-white border border-theme shadow-sm hover:scale-105 active:scale-95 transition flex items-center gap-1.5 text-xs font-black text-theme-text flex-shrink-0">
          <span class="text-rose-500">❤️</span>
          <span class="hidden md:inline">口袋名單</span>
          <span id="bookmark-badge" class="bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center hidden">
            0
          </span>
        </button>
      </div>

    </div>

    <!-- ================= 一、頂部大區域 (全台灣 / 北部 / 中部 / 南部 / 東部離島) ================= -->
    <div class="bg-stone-50/90 border-t border-theme/60 px-4 sm:px-6 lg:px-8 xl:px-12 py-2">
      <div class="max-w-[1540px] mx-auto flex items-center justify-start gap-2 overflow-x-auto no-scrollbar" id="region-selector-wrap">
        <button onclick="setRegion('all')" id="reg-all-btn" class="reg-btn px-3.5 py-1.5 text-xs font-black rounded-xl transition bg-white text-theme-primary shadow-sm flex-shrink-0 flex items-center gap-1.5 border border-theme">
          <span>🇹🇼</span> <span id="i18n-reg-all">全台灣</span>
        </button>
        <button onclick="setRegion('north')" id="reg-north-btn" class="reg-btn px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-600 hover:text-stone-900 flex-shrink-0 flex items-center gap-1.5">
          <span>🏙️</span> <span id="i18n-reg-north">北部 (雙北/桃竹基)</span>
        </button>
        <button onclick="setRegion('central')" id="reg-central-btn" class="reg-btn px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-600 hover:text-stone-900 flex-shrink-0 flex items-center gap-1.5">
          <span>🍵</span> <span id="i18n-reg-central">中部 (台中/苗彰投)</span>
        </button>
        <button onclick="setRegion('south')" id="reg-south-btn" class="reg-btn px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-600 hover:text-stone-900 flex-shrink-0 flex items-center gap-1.5">
          <span>🥘</span> <span id="i18n-reg-south">南部 (台南/高嘉屏)</span>
        </button>
        <button onclick="setRegion('east')" id="reg-east-btn" class="reg-btn px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-600 hover:text-stone-900 flex-shrink-0 flex items-center gap-1.5">
          <span>🌊</span> <span id="i18n-reg-east">東部與離島 (宜花東/澎金馬)</span>
        </button>
      </div>
    </div>

    <!-- ================= 二、大分類主按鈕（吃喝玩樂核心） ================= -->
    <div class="bg-white/80 border-t border-theme/60 px-4 sm:px-6 lg:px-8 xl:px-12 py-2.5">
      <div class="max-w-[1540px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar" id="main-category-wrap">
        <!-- Rendered dynamically -->
      </div>
    </div>
  </header>

  <!-- ================= 三、情境動態展開面板 ================= -->
  <section class="max-w-[1540px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 z-10 relative space-y-3">
    
    <!-- 動態標籤篩選列 -->
    <div id="dynamic-context-panel" class="p-3.5 bg-white/95 border border-theme rounded-2xl tw-shadow">
      <!-- Injected via JavaScript -->
    </div>

    <!-- 即時狀態列 ＋ 搜尋 ＋ 快速回報按鈕 -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-theme-muted px-1 border-b border-theme/60 pb-3 gap-3">
      <div id="filter-summary-text" class="flex items-center gap-2 font-medium flex-wrap text-xs sm:text-sm">
        <!-- Injected via JavaScript -->
      </div>

      <div class="flex items-center gap-3 flex-wrap">
        <!-- 即時搜尋框 -->
        <div class="relative">
          <input type="text" id="search-input" oninput="handleSearch(this.value)" placeholder="搜尋小吃、咖啡、老街景點..." class="pl-8 pr-3 py-1.5 rounded-xl border border-theme bg-white text-xs font-bold text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-48 sm:w-64 transition" />
          <span class="absolute left-2.5 top-2 text-stone-400">🔍</span>
        </div>

        <button onclick="openReportModal()" class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs text-xs flex items-center gap-1.5 hover:scale-105 active:scale-95 transition">
          <span>📷</span> <span>回報現場實況</span>
        </button>
      </div>
    </div>
  </section>

  <!-- ================= 主內容區 (卡片列表 VS 台灣實況地圖) ================= -->
  <main class="max-w-[1540px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-5 flex-1 z-10 relative">

    <!-- 1. 卡片檢視容器 (4 欄格局大氣展開) -->
    <div id="cards-view-wrap">
      <div id="spots-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 lg:gap-6">
        <!-- Injected via JavaScript -->
      </div>

      <!-- 空狀態 -->
      <div id="empty-state" class="hidden text-center py-20 bg-white/80 rounded-3xl border border-theme tw-shadow p-8">
        <div class="text-5xl mb-3">🛵</div>
        <h3 class="text-base font-bold text-stone-800">目前篩選條件下尚無符合的地點</h3>
        <p class="text-xs text-stone-500 mt-1.5">試著切換至「全台灣」或清除關鍵字看看！</p>
        <button onclick="resetAllFilters()" class="mt-4 px-5 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-sm hover:scale-105 transition">
          重設所有篩選
        </button>
      </div>
    </div>

    <!-- 2. 【Leaflet ＋ CARTO 台灣探索地圖】 -->
    <div id="map-view-wrap" class="hidden">
      <div class="bg-white rounded-3xl overflow-hidden border border-theme tw-shadow-lg flex flex-col h-[75vh] min-h-[550px]">
        <div class="p-3.5 bg-stone-50/95 border-b border-theme flex items-center justify-between gap-3 flex-wrap z-10">
          <div class="flex items-center gap-2.5">
            <span class="text-lg">🗺️</span>
            <span class="text-xs sm:text-sm font-black text-theme-deep">全台灣吃喝玩樂探索地圖</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">
              即時標註景點美食
            </span>
          </div>

          <div class="flex items-center gap-1.5 text-xs">
            <button onclick="jumpMapTo('taipei')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">🏙️ 雙北</button>
            <button onclick="jumpMapTo('taichung')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">🍵 台中</button>
            <button onclick="jumpMapTo('tainan')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">🥘 台南</button>
            <button onclick="jumpMapTo('kaohsiung')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">🚢 高雄</button>
            <button onclick="jumpMapTo('yilan')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">♨️ 宜蘭</button>
            <button onclick="jumpMapTo('hualien')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">🌊 花蓮</button>
            <button onclick="jumpMapTo('all')" class="px-2.5 py-1 rounded-lg bg-white border border-stone-200 hover:bg-stone-100 font-bold">🇹🇼 全台</button>
          </div>
        </div>

        <div id="leaflet-map-container" class="relative flex-1 w-full h-full"></div>
      </div>
    </div>
  </main>

  <!-- ================= 詳細資訊抽屜 (Bottom Sheet Modal) ================= -->
  <div id="detail-sheet" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300 flex items-end sm:items-center justify-center p-0 sm:p-4" onclick="closeDetailSheet(event)">
    <div class="bg-white w-full sm:max-w-2xl max-h-[90vh] rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col transform translate-y-8 transition-transform duration-300" onclick="event.stopPropagation()">
      <div class="relative h-60 w-full bg-stone-100 flex-shrink-0">
        <img id="sheet-img" src="" alt="" class="w-full h-full object-cover" />
        <button onclick="closeDetailSheet()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white font-bold flex items-center justify-center hover:bg-black/80 transition">
          ✕
        </button>
        <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span id="sheet-region-badge" class="px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold">地區</span>
          <span id="sheet-status-badge" class="px-3.5 py-1 rounded-full bg-white/95 text-theme-primary text-xs font-black shadow-md">特色</span>
        </div>
      </div>

      <div class="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
        <div>
          <div class="flex items-center gap-2 mb-1.5 flex-wrap">
            <span id="sheet-cat-badge" class="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-bold">分類</span>
            <span id="sheet-rating-badge" class="px-2.5 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">⭐ 4.8</span>
          </div>
          <h2 id="sheet-title" class="text-xl sm:text-2xl font-black text-stone-900">名稱</h2>
          <p id="sheet-subtitle" class="text-xs sm:text-sm font-bold text-emerald-700 mt-1">特色副標</p>
          <p id="sheet-desc" class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">詳細說明</p>
        </div>

        <!-- 3 大亮點指標 -->
        <div class="grid grid-cols-3 gap-2 p-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-center">
          <div>
            <span id="sheet-m1-k" class="text-[11px] text-stone-400 font-bold block">消費/均價</span>
            <span id="sheet-m1-v" class="text-sm sm:text-base font-black text-stone-800">NT$ 150</span>
          </div>
          <div>
            <span id="sheet-m2-k" class="text-[11px] text-stone-400 font-bold block">排隊狀況</span>
            <span id="sheet-m2-v" class="text-sm sm:text-base font-black text-stone-800">約 15 分鐘</span>
          </div>
          <div>
            <span id="sheet-m3-k" class="text-[11px] text-stone-400 font-bold block">營業/預約</span>
            <span id="sheet-m3-v" class="text-sm sm:text-base font-black text-stone-800">現場排隊</span>
          </div>
        </div>

        <!-- 交通與地址 -->
        <div class="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-1">
          <div class="flex items-center justify-between">
            <span class="text-stone-500 font-bold">📍 地址與交通方式</span>
            <a id="sheet-map-link" href="#" target="_blank" class="text-emerald-600 font-bold hover:underline flex items-center gap-0.5">
              <span>🗺️</span> <span>Google 導航</span>
            </a>
          </div>
          <p id="sheet-address" class="text-stone-800 font-medium">地址資訊</p>
          <p id="sheet-transit" class="text-stone-500 text-[11px]">交通指南</p>
        </div>

        <!-- 旅人必點推薦 / 攻略小提示 -->
        <div class="p-3.5 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs">
          <span class="font-bold text-amber-900 block mb-1">💡 旅人必看推薦攻略：</span>
          <p id="sheet-tips" class="text-amber-800 leading-relaxed text-[11px]">推薦必點</p>
        </div>
      </div>

      <!-- 底部預訂/導購按鈕 -->
      <div id="sheet-action-footer" class="p-4 sm:p-5 bg-stone-50 border-t border-theme/80 space-y-2">
        <a id="sheet-ticket-btn" href="#" target="_blank"
          class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs text-center rounded-2xl flex items-center justify-center gap-2 shadow-sm transition">
          <span>🎫</span> <span>線上優惠預訂・即買即用 (Klook/KKday)</span>
        </a>
      </div>
    </div>
  </div>

  <!-- ================= UGC 現場實況回報 Modal ================= -->
  <div id="report-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-theme space-y-4">
      <div class="flex items-center justify-between border-b border-stone-100 pb-2.5">
        <div class="flex items-center gap-2">
          <span class="text-xl">📷</span>
          <h3 class="text-sm font-black text-stone-900">回報現場實況 (排隊/營業時間)</h3>
        </div>
        <button onclick="closeReportModal()" class="text-stone-400 hover:text-stone-700 font-bold text-sm">✕</button>
      </div>

      <div class="space-y-3 text-xs">
        <div>
          <label class="font-bold text-stone-700 block mb-1">地點名稱：</label>
          <input type="text" id="report-spot-name" placeholder="例：台南六千牛肉湯" class="w-full p-2.5 border border-stone-200 rounded-xl bg-stone-50 font-bold text-stone-800" />
        </div>
        <div>
          <label class="font-bold text-stone-700 block mb-1">目前人潮／候位時間：</label>
          <select id="report-wait-time" class="w-full p-2.5 border border-stone-200 rounded-xl bg-stone-50 font-bold text-stone-800">
            <option value="免排隊・立即可入座">免排隊・立即可入座</option>
            <option value="微幅排隊・約需 10-20 分鐘">微幅排隊・約需 10-20 分鐘</option>
            <option value="大排長龍・需候位 30-50 分鐘">大排長龍・需候位 30-50 分鐘</option>
            <option value="今日已完售 / 公休">今日已完售 / 公休請勿白跑</option>
          </select>
        </div>
        <div>
          <label class="font-bold text-stone-700 block mb-1">旅人實況心得備註：</label>
          <input type="text" id="report-comment" placeholder="例：早晨 6 點領號碼牌，肉質超甜超嫩，值得早起！" class="w-full p-2.5 border border-stone-200 rounded-xl font-bold" />
        </div>
      </div>

      <div class="pt-2">
        <button onclick="submitReport()" class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs shadow-md transition">
          確認送出回報
        </button>
      </div>
    </div>
  </div>

  <!-- ================= 收藏口袋抽屜 (Saved Bookmarks Drawer) ================= -->
  <div id="bookmark-drawer" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl border-l border-theme transform translate-x-full transition-transform duration-300 flex flex-col">
    <div class="p-5 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-xl">❤️</span>
        <h3 class="text-sm sm:text-base font-black text-stone-900">我的台灣口袋名單 (<span id="drawer-count">0</span>)</h3>
      </div>
      <button onclick="toggleBookmarkDrawer()" class="text-stone-400 hover:text-stone-700 font-bold text-base">✕</button>
    </div>
    
    <div id="bookmark-items-container" class="flex-1 overflow-y-auto p-5 space-y-3.5">
      <!-- Injected via JavaScript -->
    </div>
    
    <div class="p-5 bg-stone-50 border-t border-theme">
      <button onclick="clearAllBookmarks()" class="w-full py-2.5 bg-white border border-stone-200 text-stone-500 text-xs font-bold rounded-xl hover:text-rose-600 transition">
        清空口袋名單
      </button>
    </div>
  </div>

  <!-- ================= 網頁版精緻頁尾 (Web Footer) ================= -->
  <footer class="mt-16 bg-white/95 backdrop-blur-md border-t border-theme py-12 transition-colors z-20 relative">
    <div class="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-theme/60">
        <!-- Col 1: Brand -->
        <div class="space-y-3.5 md:col-span-1">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm flex items-center justify-center text-white text-lg">
              🇹🇼
            </div>
            <div>
              <h3 class="text-base font-black text-stone-900 leading-tight">台灣吃喝玩樂</h3>
              <p class="text-[10px] text-stone-500 font-bold">島嶼旅遊生活誌・全台風土探索</p>
            </div>
          </div>
          <p class="text-xs text-stone-500 leading-relaxed">
            專為喜愛台灣深度探索的旅人打造：集結米其林必比登小吃、無敵山海老宅咖啡、森林步道秘境與週末文創市集。
          </p>
        </div>

        <!-- Col 2: 主題導覽 -->
        <div class="space-y-2.5">
          <h4 class="text-xs font-black text-emerald-800 tracking-wider uppercase">🏮 主題快速導覽</h4>
          <ul class="text-xs space-y-2 text-stone-500 font-medium">
            <li><a href="javascript:void(0)" onclick="selectCategory('food')" class="hover:text-emerald-600 transition">🍜 全台必比登・傳承老店小吃</a></li>
            <li><a href="javascript:void(0)" onclick="selectCategory('cafe')" class="hover:text-emerald-600 transition">☕ 老宅手沖・無敵山海景觀咖啡</a></li>
            <li><a href="javascript:void(0)" onclick="selectCategory('spot')" class="hover:text-emerald-600 transition">🏞️ 國家風景區・絕美森林步道秘境</a></li>
            <li><a href="javascript:void(0)" onclick="selectCategory('market')" class="hover:text-emerald-600 transition">🎪 華山/審計/駁二 週末文創市集</a></li>
            <li><a href="javascript:void(0)" onclick="selectCategory('onsen')" class="hover:text-emerald-600 transition">♨️ 礁溪/北投/泰安 渡假溫泉旅宿</a></li>
          </ul>
        </div>

        <!-- Col 3: 資料來源與合作 -->
        <div class="space-y-2.5">
          <h4 class="text-xs font-black text-emerald-800 tracking-wider uppercase">📡 資料源與公開授權</h4>
          <ul class="text-xs space-y-2 text-stone-500 font-medium">
            <li class="flex items-center gap-2"><span>●</span> <span>觀光景點：交通部觀光署 Open Data API</span></li>
            <li class="flex items-center gap-2"><span>●</span> <span>美食名錄：米其林指南官方必比登推薦</span></li>
            <li class="flex items-center gap-2"><span>●</span> <span>地圖圖層：CARTO Voyager & OpenStreetMap</span></li>
            <li class="flex items-center gap-2"><span>●</span> <span>大眾交通：TDX 交通部智慧運輸數據平臺</span></li>
          </ul>
        </div>

        <!-- Col 4: 旅人分潤聲明 -->
        <div class="space-y-2.5">
          <h4 class="text-xs font-black text-emerald-800 tracking-wider uppercase">⚖️ 旅人服務聲明</h4>
          <p class="text-xs text-stone-500 leading-relaxed">
            本站票券及體驗預訂串聯 Klook (AID: 123436) 及 KKday 官方合作夥伴。透過連結預定可享即買即用與限時折扣，不影響原廠售價。
          </p>
          <div class="pt-2 flex items-center gap-2">
            <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">● 伺服器運作正常</span>
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="text-[11px] text-emerald-600 hover:underline font-bold">
              ⬆️ 回到頂部
            </button>
          </div>
        </div>
      </div>

      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
        <p>© 2026 台灣吃喝玩樂 Taiwan Food & Fun. 專為現代旅人設計之純網頁響應式指南.</p>
        <div class="flex items-center gap-3">
          <span class="hover:text-stone-800 cursor-pointer" onclick="toggleLanguage()">🌐 繁體中文 / English</span>
          <span>・</span>
          <span class="hover:text-stone-800 cursor-pointer" onclick="toggleBookmarkDrawer()">❤️ 口袋名單 (<span id="footer-fav-count">0</span>)</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- ================= 懸浮快捷動作 (回到頂部 ＆ 快速開啟收藏) ================= -->
  <div class="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
    <button onclick="toggleBookmarkDrawer()" class="px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-theme tw-shadow-lg text-stone-800 hover:scale-105 active:scale-95 transition flex items-center gap-2 text-xs font-black" title="查看口袋名單">
      <span class="text-rose-500">❤️</span>
      <span class="hidden sm:inline">口袋名單</span>
      <span id="floating-fav-badge" class="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">0</span>
    </button>
    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-theme tw-shadow-lg text-stone-800 hover:scale-105 active:scale-95 transition flex items-center justify-center text-xs font-bold shadow-md" title="回到頂部">
      ▲
    </button>
  </div>

  <!-- ================= JavaScript 資料庫與互動控制器 ================= -->
  <script>
    const AFFILIATE_AID = "123436";
    let currentLang = localStorage.getItem('twfun_lang') || 'zh';
    let currentRegion = 'all';
    let currentCategory = 'all';
    let currentSubtag = 'all';
    let searchQuery = '';
    let currentViewMode = 'cards';
    let map = null;
    let mapMarkers = [];
    let bookmarkedIds = JSON.parse(localStorage.getItem('twfun_bookmarks') || '[]');

    const CATEGORIES = [
      { id: "all", name: "全部探索", name_en: "All Exploration", icon: "🇹🇼" },
      { id: "food", name: "必吃美食", name_en: "Local Food", icon: "🍜" },
      { id: "cafe", name: "老宅咖啡", name_en: "Scenic Cafes", icon: "☕" },
      { id: "spot", name: "絕美秘境", name_en: "Scenic Spots", icon: "🏞️" },
      { id: "market", name: "週末市集", name_en: "Weekend Markets", icon: "🎪" },
      { id: "onsen", name: "渡假溫泉", name_en: "Hot Springs", icon: "♨️" }
    ];

    const SUBTAGS = {
      all: [
        { id: "all", name: "全部亮點", name_en: "All Highlights" },
        { id: "michelin", name: "米其林必比登", name_en: "Bib Gourmand" },
        { id: "seaview", name: "絕美海景", name_en: "Ocean View" },
        { id: "vintage", name: "老宅復古風", name_en: "Vintage House" },
        { id: "family", name: "親子/免門票", name_en: "Family Friendly" }
      ],
      food: [
        { id: "all", name: "全部小吃", name_en: "All Foods" },
        { id: "beef", name: "溫體牛肉湯", name_en: "Fresh Beef Soup" },
        { id: "nightmarket", name: "夜市排隊王", name_en: "Night Market" },
        { id: "breakfast", name: "排隊古早味早餐", name_en: "Traditional Breakfast" },
        { id: "seafood", name: "現撈海鮮熱炒", name_en: "Fresh Seafood" }
      ],
      cafe: [
        { id: "all", name: "全部咖啡", name_en: "All Cafes" },
        { id: "vintage", name: "昭和老屋選物", name_en: "Vintage House" },
        { id: "cliff", name: "山海第一排露台", name_en: "Cliff & Sea View" },
        { id: "wifi", name: "不限時插座友善", name_en: "Work Friendly" },
        { id: "pet", name: "寵物友善", name_en: "Pet Friendly" }
      ],
      spot: [
        { id: "all", name: "全部景點", name_en: "All Spots" },
        { id: "trail", name: "森林巨木步道", name_en: "Forest Trails" },
        { id: "coast", name: "奇岩海灣步道", name_en: "Coastal Trails" },
        { id: "historic", name: "文化歷史聚落", name_en: "Historic Town" },
        { id: "sunset", name: "落日晚霞名所", name_en: "Sunset Spots" }
      ],
      market: [
        { id: "all", name: "全部市集", name_en: "All Markets" },
        { id: "weekend", name: "每週末常態擺攤", name_en: "Weekend Regular" },
        { id: "handcraft", name: "原創手作選物", name_en: "Handmade Crafts" },
        { id: "music", name: "音樂草地市集", name_en: "Music & Grass" }
      ],
      onsen: [
        { id: "all", name: "全部溫泉", name_en: "All Onsens" },
        { id: "private", name: "獨立景觀湯屋", name_en: "Private Bath" },
        { id: "openair", name: "露天森林風呂", name_en: "Open-air Bath" },
        { id: "resort", name: "一泊二食渡假村", name_en: "Resort Stay" }
      ]
    };

    // 精選全台灣在地資料庫 (涵蓋雙北、宜蘭、台中、台南、高雄、花東、屏東等)
    const TAIWAN_SPOTS = [
      {
        id: "tw-tainan-beef",
        name: "六千泓佐牛肉湯",
        name_en: "Liuchien Beef Soup Tainan",
        category: "food",
        region: "south",
        city: "台南市中西區",
        city_en: "Tainan City",
        subtitle: "早晨現宰溫體牛肉・琥珀色牛大骨濃醇鮮甜高湯",
        subtitle_en: "Famous fresh warm beef soup simmered with rich marrow broth",
        desc: "台南溫體牛傳奇霸主！每日清晨限量供應，滾燙大骨高湯直接沖淋新鮮粉嫩溫體牛肉，入口軟嫩回甘，附甜鹹油膏與薑絲。",
        desc_en: "Tainan's iconic morning delicacy featuring freshly sliced warm beef.",
        badge: "🏆 府城排隊霸主",
        badgeColor: "bg-rose-100 text-rose-800",
        rating: 4.8,
        reviewsCount: 3280,
        subtag: "beef",
        m1_k: "招牌必點", m1_v: "精選牛肉湯 (NT$150)",
        m2_k: "候位時間", m2_v: "清晨約 20-30 分鐘",
        m3_k: "營業時間", m3_v: "05:00 - 售完為止",
        transit: "台南火車站轉乘計程車約 7 分鐘",
        address: "台南市中西區海安路一段63號",
        tips: "建議早晨 5:30 前抵達領號碼牌，第一鍋牛肉高湯最濃郁甘甜！",
        ticketUrl: "https://www.klook.com/zh-TW/city/30-tainan-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
        lat: 22.9902, lng: 120.1945
      },
      {
        id: "tw-fuhang-soy",
        name: "阜杭豆漿",
        name_en: "Fuhang Soy Milk Taipei",
        category: "food",
        region: "north",
        city: "台北市中正區",
        city_en: "Taipei City",
        subtitle: "米其林必比登連續推薦・現烤厚燒餅夾蛋油條與鹹豆漿",
        subtitle_en: "Michelin Bib Gourmand legend famous for thick flatbread & savory soy milk",
        desc: "台北人與各國觀光客早起的共同理由！老麵現烤厚燒餅炭火香氣十足，搭配酥脆油條與濃郁滑順的鹹豆漿，每一口都是台灣經典滋味。",
        desc_en: "Taipei legendary breakfast spot served from the iconic Huashan Market.",
        badge: "⭐ 米其林必比登",
        badgeColor: "bg-amber-100 text-amber-900 border border-amber-300",
        rating: 4.7,
        reviewsCount: 14200,
        subtag: "breakfast",
        m1_k: "必點招牌", m1_v: "厚燒餅夾蛋 (NT$45)",
        m2_k: "候位時間", m2_v: "約 25-45 分鐘",
        m3_k: "捷運站", m3_v: "善導寺站 5 號出口",
        transit: "捷運板南線「善導寺站」5 號出口直達 2F 華山市場",
        address: "台北市中正區忠孝東路一段108號2樓",
        tips: "平日早晨 7:00 前人潮較少，內用請跟隨動線至二樓排隊！",
        ticketUrl: "https://www.klook.com/zh-TW/city/19-taipei-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?w=800&auto=format&fit=crop&q=80",
        lat: 25.0442, lng: 121.5248
      },
      {
        id: "tw-jiufen-teahouse",
        name: "九份 阿妹茶樓",
        name_en: "A-Mei Teahouse Jiufen",
        category: "cafe",
        region: "north",
        city: "新北市瑞芳區",
        city_en: "New Taipei City",
        subtitle: "宛如神隱少女奇幻世界・懸崖紅燈籠與無敵海景茶席",
        subtitle_en: "Spirited Away fairytale tea house overlooking Pacific ocean cliffs",
        desc: "倚山面海的百年木造茶樓，夜晚大紅燈籠亮起時璀璨夢幻。坐在戶外露台席，手沖高山凍頂烏龍茶，佐以綠豆糕與茶梅，遠眺基隆嶼海天一色。",
        desc_en: "Iconic historic cliffside tea house overlooking Pacific Ocean and Keelung Islet.",
        badge: "🏮 山海第一排",
        badgeColor: "bg-rose-100 text-rose-800",
        rating: 4.7,
        reviewsCount: 8900,
        subtag: "cliff",
        m1_k: "茶席套餐", m1_v: "四式茶點 (NT$300)",
        m2_k: "最佳時刻", m2_v: "黃昏夕陽至入夜點燈",
        m3_k: "交通推薦", m3_v: "九份直達專車接送",
        transit: "瑞芳火車站轉乘 788/965 公車至九份老街站",
        address: "新北市瑞芳區市下巷20號",
        tips: "下午 16:30 入座可同時飽覽白天海景、落日金光與夜晚千盞燈籠點亮！",
        ticketUrl: "https://www.klook.com/zh-TW/activity/10940-a-mei-tea-house-jiufen/?aid=123436",
        img: "https://images.unsplash.com/photo-1508248467877-aec1b08de376?w=800&auto=format&fit=crop&q=80",
        lat: 25.1098, lng: 121.8451
      },
      {
        id: "tw-kenting-cliff-cafe",
        name: "山男咖啡 & 屾尋海景露台",
        name_en: "Mountain & Ocean Cafe Kenting",
        category: "cafe",
        region: "south",
        city: "屏東縣恆春鎮",
        city_en: "Pingtung Kenting",
        subtitle: "墾丁懸崖夕陽第一排・俯瞰紅柴坑漁港與巴士海峽橘紅晚霞",
        subtitle_en: "Panoramic cliffside sunset cafe overlooking the Bashi Channel",
        desc: "恆春半島最浪漫的高空海景咖啡廳！純白幾何建築搭配仙人掌造景，露天棧道直面蔚藍巴士海峽，傍晚落日時分晚霞染紅整個海平面。",
        desc_en: "Cliffside coffee sanctuary with stunning sunset over the ocean.",
        badge: "🌊 絕美海景第一排",
        badgeColor: "bg-sky-100 text-sky-800",
        rating: 4.8,
        reviewsCount: 2150,
        subtag: "cliff",
        m1_k: "低消限制", m1_v: "一杯飲品 (NT$140)",
        m2_k: "寵物友善", m2_v: "戶外區可牽繩",
        m3_k: "最佳景觀", m3_v: "戶外木棧躺椅席",
        transit: "恆春轉運站開車/租機車約 12 分鐘至紅柴坑山頂",
        address: "屏東縣恆春鎮紅柴路2-9號",
        tips: "傍晚 17:00 前抵達剛好卡位露天海景第一排，享受全台灣最美夕陽海潮聲！",
        ticketUrl: "https://www.klook.com/zh-TW/city/112-kenting-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
        lat: 21.9832, lng: 120.7185
      },
      {
        id: "tw-alishan-forest",
        name: "阿里山 巨木群步道 & 祝山觀日",
        name_en: "Alishan Giant Tree Trail & Sunrise",
        category: "spot",
        region: "south",
        city: "嘉義縣阿里山鄉",
        city_en: "Chiayi Alishan",
        subtitle: "千年紅檜巨木神木群・祝山日出雲海與森林小火車體驗",
        subtitle_en: "Sacred giant cypress trees, sea of clouds & historic mountain railway",
        desc: "走在千年巨木棧道間，享受芬多精深呼吸；搭乘復古紅色小火車前往祝山看雲海翻騰、金黃晨光躍出玉山山脊，感受台灣山林的神聖壯麗。",
        desc_en: "Taiwan's premier mountain paradise featuring millennial red cypresses.",
        badge: "🌲 台灣國家名所",
        badgeColor: "bg-emerald-100 text-emerald-800",
        rating: 4.9,
        reviewsCount: 18500,
        subtag: "trail",
        m1_k: "園區標高", m1_v: "2,200 公尺",
        m2_k: "步道難度", m2_v: "平緩好走木棧道",
        m3_k: "日出小火車", m3_v: "前一日需預訂票",
        transit: "嘉義火車站轉乘台灣好行阿里山線約 2.5 小時",
        address: "嘉義縣阿里山鄉中正村59號",
        tips: "山區清晨氣溫約 8-12 度，務必攜帶防風保暖外套與舒適健走鞋！",
        ticketUrl: "https://www.klook.com/zh-TW/activity/13247-alishan-day-tour-chiayi/?aid=123436",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        lat: 23.5118, lng: 120.8126
      },
      {
        id: "tw-qixingtan-hualien",
        name: "花蓮 七星潭月牙灣",
        name_en: "Qixingtan Crescent Bay Hualien",
        category: "spot",
        region: "east",
        city: "花蓮縣新城鄉",
        city_en: "Hualien City",
        subtitle: "太平洋湛藍月牙弧線・圓潤鵝卵石礫灘與聽浪觀星秘境",
        subtitle_en: "Stunning Pacific crescent bay with smooth pebble beach and starry nights",
        desc: "一望無際的深邃太平洋！弧形礫石海灘在白浪拍打下發出清脆滾石聲。向北可遠眺清水斷崖峭壁插入海中，是全台灣最療癒的海風散步勝地。",
        desc_en: "Breathtaking Pacific pebble beach with endless horizon views.",
        badge: "🌊 免門票海景",
        badgeColor: "bg-teal-100 text-teal-800",
        rating: 4.8,
        reviewsCount: 15600,
        subtag: "coast",
        m1_k: "海灘特色", m1_v: "圓潤七彩鵝卵石",
        m2_k: "自行車道", m2_v: "兩潭濱海自行車道",
        m3_k: "注意事項", m3_v: "海流湍急禁止游泳",
        transit: "花蓮火車站轉乘 308 公車或計程車約 15 分鐘",
        address: "花蓮縣新城鄉大漢村七星街",
        tips: "坐在礫灘上堆石頭拍照很美，但請勿將鵝卵石帶回家，共同維護自然海岸！",
        ticketUrl: "https://www.klook.com/zh-TW/city/27-hualien-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
        lat: 24.0326, lng: 121.6292
      },
      {
        id: "tw-huashan-market",
        name: "華山 1914 文化創意產業園區",
        name_en: "Huashan 1914 Creative Park",
        category: "market",
        region: "north",
        city: "台北市中正區",
        city_en: "Taipei City",
        subtitle: "百年日本酒廠變身文創新地標・每週末手作市集與國際特展",
        subtitle_en: "Historic sake distillery transformed into vibrant creative design haven",
        desc: "台北文青最愛聚集地！紅磚酒廠、綠藤老牆與寬闊大草坪，每逢週末集結全台頂尖手作品牌、獨立文創設計、風格餐車與街頭藝人演出。",
        desc_en: "Taipei's flagship creative center with weekend craft markets.",
        badge: "🎪 週末常態市集",
        badgeColor: "bg-purple-100 text-purple-800",
        rating: 4.8,
        reviewsCount: 28900,
        subtag: "weekend",
        m1_k: "市集時間", m1_v: "週六日 11:00-19:00",
        m2_k: "園區門票", m2_v: "戶外園區免費參觀",
        m3_k: "特色餐飲", m3_v: "興波咖啡 / 光點華山",
        transit: "捷運忠孝新生站 1 號出口步行 3 分鐘",
        address: "台北市中正區八德路一段1號",
        tips: "逛完市集可到園區內的世界咖啡冠軍「Simple Kaffa 興波咖啡」品嚐手沖！",
        ticketUrl: "https://www.klook.com/zh-TW/city/19-taipei-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&auto=format&fit=crop&q=80",
        lat: 25.0441, lng: 121.5294
      },
      {
        id: "tw-pier2-market",
        name: "高雄 駁二藝術特區 & 棧貳庫",
        name_en: "The Pier-2 Art Center Kaohsiung",
        category: "market",
        region: "south",
        city: "高雄市鹽埕區",
        city_en: "Kaohsiung City",
        subtitle: "港灣海風老倉庫聚落・大港橋旋轉秀與海線獨立選物市集",
        subtitle_en: "Harbor port warehouses bustling with indie designers & rotating bridge",
        desc: "全台灣最具海洋活力的文創特區！由舊港口碼頭倉庫改建，巨型裝置藝術、輕軌穿梭其間。每逢週末大義倉庫群舉辦「大義市集」，吹海風逛選物。",
        desc_en: "Kaohsiung waterfront creative park with indie craft markets and sea breeze.",
        badge: "🎪 海港週末市集",
        badgeColor: "bg-purple-100 text-purple-800",
        rating: 4.8,
        reviewsCount: 22000,
        subtag: "weekend",
        m1_k: "特色亮點", m1_v: "大港橋下午 3 點旋轉秀",
        m2_k: "交通方式", m2_v: "高雄輕軌駁二大義站",
        m3_k: "周邊美食", m3_v: "鹽埕必比登老店群",
        transit: "搭乘高雄輕軌至「駁二大義站」出站即達",
        address: "高雄市鹽埕區大勇路1號",
        tips: "下午 3 點可站在大港橋前觀看亞洲最長旋轉橋開合秀，隨後順遊棧貳庫海景旋轉木馬！",
        ticketUrl: "https://www.klook.com/zh-TW/city/22-kaohsiung-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80",
        lat: 22.6206, lng: 120.2815
      },
      {
        id: "tw-jiaoxi-hotspring",
        name: "宜蘭 礁溪寒沐酒店 溫泉湯屋",
        name_en: "Mu Jiao Xi Hotel Hot Spring Yilan",
        category: "onsen",
        region: "east",
        city: "宜蘭縣礁溪鄉",
        city_en: "Yilan Jiaoxi",
        subtitle: "蘭陽平原頂級美人湯・森林綠意環繞私人獨立湯屋與戶外風呂",
        subtitle_en: "Luxurious odorless carbonated beauty spring surrounded by lush greenery",
        desc: "宜蘭礁溪最優雅的碳酸氫鈉泉（美人湯）！泉水無色無味，浸泡後皮膚光滑細膩。酒店結合自然簡約藝術美學，提供頂級客房泡湯與大眾露天 SPA。",
        desc_en: "Top-tier hot spring hotel with healing bicarbonate minerals.",
        badge: "♨️ 頂級美人湯",
        badgeColor: "bg-sky-100 text-sky-800",
        rating: 4.8,
        reviewsCount: 4120,
        subtag: "private",
        m1_k: "泉質種類", m1_v: "碳酸氫鈉泉 (美人湯)",
        m2_k: "湯屋設施", m2_v: "獨立石造大浴池",
        m3_k: "火車站距離", m3_v: "礁溪站步行 5 分鐘",
        transit: "搭乘台鐵或葛瑪蘭客運至「礁溪站」步行 5 分鐘",
        address: "宜蘭縣礁溪鄉健康路1號",
        tips: "秋冬泡湯旺季務必提前 1-2 週於線上預約獨立湯屋時段！",
        ticketUrl: "https://www.klook.com/zh-TW/activity/33583-mu-jiao-xi-hotel-yilan/?aid=123436",
        img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
        lat: 24.8306, lng: 121.7712
      },
      {
        id: "tw-beitou-kagaya",
        name: "台北 北投日勝生加賀屋 溫泉",
        name_en: "Radium Kagaya Beitou Taipei",
        category: "onsen",
        region: "north",
        city: "台北市北投區",
        city_en: "Taipei Beitou",
        subtitle: "日本加賀屋海外唯一分館・純正和風數寄屋造與白磺泉風呂",
        subtitle_en: "Authentic Japanese onsen hotel with healing white sulfur springs",
        desc: "搭捷運就能抵達的極致日式溫泉！承襲石川縣加賀屋管家服務精神，全館採數寄屋造木質和風結構，沉浸在暖熱滑潤的白磺泉中，徹底消除都市疲憊。",
        desc_en: "Exclusive Japanese ryokan experience in the historic Beitou thermal valley.",
        badge: "♨️ 日式純正白磺泉",
        badgeColor: "bg-sky-100 text-sky-800",
        rating: 4.8,
        reviewsCount: 3890,
        subtag: "private",
        m1_k: "泉質種類", m1_v: "白磺泉 (弱酸性牛奶湯)",
        m2_k: "特色體驗", m2_v: "日本和服管家款待",
        m3_k: "捷運交通", m3_v: "新北投站步行 5 分鐘",
        transit: "捷運新北投支線「新北投站」出站步行 5 分鐘",
        address: "台北市北投區光明路236號",
        tips: "泡湯後可漫步至隔壁的北投圖書館與地熱谷，欣賞百年溫泉小鎮風貌！",
        ticketUrl: "https://www.klook.com/zh-TW/activity/7008-radium-kagaya-international-hotel-taipei/?aid=123436",
        img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80",
        lat: 25.1378, lng: 121.5065
      },
      {
        id: "tw-taichung-shenji",
        name: "台中 審計新村 暮暮市集",
        name_en: "Shenji New Village & Mumu Market",
        category: "market",
        region: "central",
        city: "台中市西區",
        city_en: "Taichung City",
        subtitle: "省政府老員工宿舍重生・文青甜點、獨立選品與暮光市集",
        subtitle_en: "Revitalized vintage government dorms full of dessert shops & creative stalls",
        desc: "兩層樓紅磚與黃色木窗老宿舍聚落，現已成為台中最具活力的文創聚落！每到午後，走道擺滿琳瑯滿目的陶藝、飾品手作攤位，還有超人氣泡芙與老宅咖啡。",
        desc_en: "Charming 1960s residential village now a buzzing arts and crafts hub.",
        badge: "🎪 青年文創聚落",
        badgeColor: "bg-purple-100 text-purple-800",
        rating: 4.7,
        reviewsCount: 16700,
        subtag: "weekend",
        m1_k: "常態市集", m1_v: "平日下午＋週末全天",
        m2_k: "招牌美食", m2_v: "旅禾泡芙之家 / 艸水木堂",
        m3_k: "氛圍特點", m3_v: "老樹光影好拍照",
        transit: "台中火車站搭乘 300 號公車至科博館站步行約 10 分鐘",
        address: "台中市西區民生路368巷",
        tips: "下午 14:00-17:00 陽光穿透二樓老陽台光影最迷人，適合慢步調拍照逛街！",
        ticketUrl: "https://www.klook.com/zh-TW/city/25-taichung-things-to-do/?aid=123436",
        img: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=800&auto=format&fit=crop&q=80",
        lat: 24.1458, lng: 120.6631
      },
      {
        id: "tw-sunmoon-lake",
        name: "南投 日月潭 向山水上自行車道",
        name_en: "Sun Moon Lake Xiangshan Bike Trail",
        category: "spot",
        region: "central",
        city: "南投縣魚池鄉",
        city_en: "Nantou Sun Moon Lake",
        subtitle: "CNN 評選全球十大最美自行車道・水上木棧道與清水模建築",
        subtitle_en: "CNN ranked Top 10 most breathtaking cycling trails in the world",
        desc: "架設在湖面之上的水上懸臂木棧道！騎著單車迎著微風穿梭在落羽松與碧綠湖光水色間，終點是日本大師團紀彥設計的向山遊客中心，宛如置身水墨畫中。",
        desc_en: "World-class lake boardwalk cycling path with panoramic alpine views.",
        badge: "🚴 全球最美自行車道",
        badgeColor: "bg-emerald-100 text-emerald-800",
        rating: 4.9,
        reviewsCount: 24000,
        subtag: "trail",
        m1_k: "車道全長", m1_v: "約 3.4 公里 (平緩無坡)",
        m2_k: "單車租借", m2_v: "水社碼頭租借電輔車",
        m3_k: "特色地標", m3_v: "永結同心橋 / 向山清水模",
        transit: "台中高鐵站搭乘台灣好行日月潭線直達水社遊客中心",
        address: "南投縣魚池鄉中山路599號",
        tips: "清晨 7:00-9:00 湖面常有晨霧繚繞如仙境，且此時遊客人潮最少！",
        ticketUrl: "https://www.klook.com/zh-TW/activity/13248-sun-moon-lake-day-tour-nantou/?aid=123436",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        lat: 23.8517, lng: 120.9022
      }
    ];

    function appendAffiliateParams(url, subId) {
      if (!url) return "#";
      try {
        const u = new URL(url);
        if (currentLang === 'en') {
          if (u.hostname.includes("klook.com") && u.pathname.startsWith("/zh-TW/")) {
            u.pathname = u.pathname.replace("/zh-TW/", "/en-US/");
          }
        }
        if (u.hostname.includes("klook.com")) {
          u.searchParams.set("aid", AFFILIATE_AID);
          u.searchParams.set("utm_medium", "affiliate-alwayson");
          u.searchParams.set("utm_source", "non-network");
          u.searchParams.set("utm_campaign", AFFILIATE_AID);
          if (subId) u.searchParams.set("aff_label1", subId);
        }
        return u.toString();
      } catch (e) {
        return url;
      }
    }

    // 初始化分類導覽列
    function renderMainCategories() {
      const wrap = document.getElementById('main-category-wrap');
      wrap.innerHTML = CATEGORIES.map(c => {
        const isActive = c.id === currentCategory;
        const name = currentLang === 'zh' ? c.name : c.name_en;
        return `
          <button onclick="selectCategory('${c.id}')"
            class="main-cat-btn flex-shrink-0 px-4 py-2 rounded-2xl text-xs sm:text-sm ${isActive ? 'font-black bg-theme-primary text-white shadow-sm scale-105' : 'font-bold bg-white text-stone-700 border border-theme hover:bg-stone-50'} transition-all flex items-center gap-1.5">
            <span>${c.icon}</span> <span>${name}</span>
          </button>
        `;
      }).join('');
    }

    // 更新動態次分類標籤
    function renderSubtags() {
      const panel = document.getElementById('dynamic-context-panel');
      const list = SUBTAGS[currentCategory] || SUBTAGS.all;
      panel.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-black text-theme-deep flex items-center gap-1.5">
            <span>✨</span> <span>即時精準情境快篩：</span>
          </span>
          <span class="text-[11px] text-theme-muted font-bold">在地人真心推薦避雷</span>
        </div>
        <div class="flex items-center gap-2 overflow-x-auto no-scrollbar">
          ${list.map(st => {
            const isActive = st.id === currentSubtag;
            const name = currentLang === 'zh' ? st.name : st.name_en;
            return `
              <button onclick="selectSubtag('${st.id}')"
                class="px-3 py-1.5 rounded-xl text-xs flex-shrink-0 transition ${isActive ? 'bg-theme-primary text-white font-black shadow-xs' : 'bg-stone-50 text-stone-700 border border-stone-200 font-bold hover:bg-stone-100'}">
                ${name}
              </button>
            `;
          }).join('')}
        </div>
      `;
    }

    function selectCategory(cat) {
      currentCategory = cat;
      currentSubtag = 'all';
      updateThemeClass();
      renderMainCategories();
      renderSubtags();
      renderCards();
      updateMapMarkers();
    }

    function selectSubtag(st) {
      currentSubtag = st;
      renderSubtags();
      renderCards();
      updateMapMarkers();
    }

    function setRegion(reg) {
      currentRegion = reg;
      ['all', 'north', 'central', 'south', 'east'].forEach(r => {
        const btn = document.getElementById(`reg-${r}-btn`);
        if (!btn) return;
        if (r === reg) {
          btn.className = "reg-btn px-3.5 py-1.5 text-xs font-black rounded-xl transition bg-white text-theme-primary shadow-sm flex-shrink-0 flex items-center gap-1.5 border border-theme";
        } else {
          btn.className = "reg-btn px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-600 hover:text-stone-900 flex-shrink-0 flex items-center gap-1.5";
        }
      });
      renderCards();
      updateMapMarkers();
    }

    function handleSearch(val) {
      searchQuery = (val || '').trim().toLowerCase();
      renderCards();
      updateMapMarkers();
    }

    function resetAllFilters() {
      currentRegion = 'all';
      currentCategory = 'all';
      currentSubtag = 'all';
      searchQuery = '';
      const input = document.getElementById('search-input');
      if (input) input.value = '';
      setRegion('all');
      selectCategory('all');
    }

    function updateThemeClass() {
      const b = document.body;
      b.className = b.className.replace(/theme-\w+/g, '');
      if (currentCategory === 'food') b.classList.add('theme-food');
      else if (currentCategory === 'cafe') b.classList.add('theme-cafe');
      else if (currentCategory === 'market') b.classList.add('theme-market');
      else if (currentCategory === 'onsen') b.classList.add('theme-onsen');
      else b.classList.add('theme-spot');
    }

    function getFilteredData() {
      return TAIWAN_SPOTS.filter(item => {
        if (currentRegion !== 'all' && item.region !== currentRegion) return false;
        if (currentCategory !== 'all' && item.category !== currentCategory) return false;
        if (currentSubtag !== 'all' && item.subtag !== currentSubtag) return false;
        if (searchQuery) {
          const matchName = item.name.toLowerCase().includes(searchQuery) || item.name_en.toLowerCase().includes(searchQuery);
          const matchCity = item.city.toLowerCase().includes(searchQuery);
          const matchSub = item.subtitle.toLowerCase().includes(searchQuery);
          if (!matchName && !matchCity && !matchSub) return false;
        }
        return true;
      });
    }

    function renderCards() {
      const container = document.getElementById('spots-grid');
      const emptyState = document.getElementById('empty-state');
      const summaryText = document.getElementById('filter-summary-text');
      const list = getFilteredData();

      summaryText.innerHTML = `
        <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
        <span>共找到 <strong class="text-stone-900 font-black">${list.length}</strong> 處精選目的地</span>
        <span class="text-stone-400">・</span>
        <span>即時同步 Google 4.5★ 以上優質評分</span>
      `;

      if (list.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }
      emptyState.classList.add('hidden');

      container.innerHTML = list.map(item => {
        const title = currentLang === 'zh' ? item.name : item.name_en;
        const sub = currentLang === 'zh' ? item.subtitle : item.subtitle_en;
        const city = currentLang === 'zh' ? item.city : item.city_en;
        const isFav = bookmarkedIds.includes(item.id);
        const ticketUrl = appendAffiliateParams(item.ticketUrl, `card_${item.id}`);
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' ' + item.city)}`;

        return `
          <article class="bg-white rounded-3xl overflow-hidden border border-theme tw-shadow flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div>
              <!-- 圖片與標籤 -->
              <div class="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer" onclick="openDetailSheet('${item.id}')">
                <img src="${item.img}" alt="${title}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-black px-2.5 py-1 rounded-xl">
                  📍 ${city}
                </span>
                <span class="absolute top-3 left-24 sm:left-28 ${item.badgeColor} text-[10px] font-black px-2 py-0.5 rounded-lg shadow-xs">
                  ${item.badge}
                </span>

                <button onclick="event.stopPropagation(); toggleBookmark('${item.id}')"
                  class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md transition hover:scale-110 active:scale-95" title="加入口袋名單">
                  <span class="text-sm">${isFav ? '❤️' : '🤍'}</span>
                </button>

                <div class="absolute bottom-2.5 inset-x-3 bg-black/65 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-lg truncate flex items-center justify-between">
                  <span class="truncate">🚇 ${item.transit}</span>
                  <span class="text-amber-300 font-black flex-shrink-0 ml-1">⭐ ${item.rating}</span>
                </div>
              </div>

              <!-- 卡片內文 -->
              <div class="p-4 cursor-pointer" onclick="openDetailSheet('${item.id}')">
                <h3 class="text-base font-black text-stone-900 mb-1 leading-snug">${title}</h3>
                <p class="text-xs font-bold text-emerald-700 mb-3 leading-snug">${sub}</p>

                <!-- 3 指標卡 -->
                <div class="grid grid-cols-3 gap-1.5 p-2.5 bg-stone-50 border border-stone-200/80 rounded-xl text-center mb-3">
                  <div>
                    <span class="text-[10px] text-stone-400 font-bold block">${item.m1_k}</span>
                    <span class="text-xs font-black text-stone-800 truncate block">${item.m1_v}</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-stone-400 font-bold block">${item.m2_k}</span>
                    <span class="text-xs font-black text-stone-800 truncate block">${item.m2_v}</span>
                  </div>
                  <div>
                    <span class="text-[10px] text-stone-400 font-bold block">${item.m3_k}</span>
                    <span class="text-xs font-black text-stone-800 truncate block">${item.m3_v}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 卡片底部按鈕 -->
            <div class="p-4 pt-0 border-t border-theme/60 space-y-2 mt-auto">
              <div class="grid grid-cols-2 gap-2">
                <a href="${ticketUrl}" target="_blank" onclick="event.stopPropagation()"
                  class="py-2 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black text-center flex items-center justify-center gap-1 shadow-xs transition">
                  <span>🎫</span> <span>特惠預訂</span>
                </a>
                <a href="${mapUrl}" target="_blank" onclick="event.stopPropagation()"
                  class="py-2 px-2 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1 transition">
                  <span>🗺️</span> <span>地圖導航</span>
                </a>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    // 地圖視圖與卡片視圖切換
    function setViewMode(mode) {
      currentViewMode = mode;
      const cardsWrap = document.getElementById('cards-view-wrap');
      const mapWrap = document.getElementById('map-view-wrap');
      const cardsBtn = document.getElementById('view-cards-btn');
      const mapBtn = document.getElementById('view-map-btn');

      if (mode === 'cards') {
        cardsWrap.classList.remove('hidden');
        mapWrap.classList.add('hidden');
        cardsBtn.className = "px-3.5 py-1.5 text-xs font-black rounded-xl transition bg-white text-theme-primary shadow-sm flex items-center gap-1.5";
        mapBtn.className = "px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-500 hover:text-stone-900 flex items-center gap-1.5";
      } else {
        cardsWrap.classList.add('hidden');
        mapWrap.classList.remove('hidden');
        mapBtn.className = "px-3.5 py-1.5 text-xs font-black rounded-xl transition bg-white text-theme-primary shadow-sm flex items-center gap-1.5";
        cardsBtn.className = "px-3.5 py-1.5 text-xs font-bold rounded-xl transition text-stone-500 hover:text-stone-900 flex items-center gap-1.5";

        if (!map) {
          initMap();
        } else {
          setTimeout(() => { map.invalidateSize(); }, 200);
        }
      }
    }

    function initMap() {
      // 台灣中心座標 [23.8, 121.0]，zoom 7.5
      map = L.map('leaflet-map-container', {
        center: [23.8, 121.0],
        zoom: 8,
        zoomControl: true
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      updateMapMarkers();
    }

    function updateMapMarkers() {
      if (!map) return;
      mapMarkers.forEach(m => map.removeLayer(m));
      mapMarkers = [];

      const list = getFilteredData();
      list.forEach(item => {
        const iconHtml = `
          <div class="px-2.5 py-1 rounded-xl bg-white border border-emerald-600 shadow-md flex items-center gap-1 text-[11px] font-black text-stone-900 hover:scale-110 transition whitespace-nowrap">
            <span>${item.category === 'food' ? '🍜' : item.category === 'cafe' ? '☕' : item.category === 'market' ? '🎪' : item.category === 'onsen' ? '♨️' : '🏞️'}</span>
            <span>${item.name}</span>
          </div>
        `;
        const icon = L.divIcon({
          html: iconHtml,
          className: 'custom-map-icon',
          iconSize: [120, 32],
          iconAnchor: [60, 16]
        });

        const marker = L.marker([item.lat, item.lng], { icon: icon }).addTo(map);
        marker.on('click', () => {
          openDetailSheet(item.id);
        });
        mapMarkers.push(marker);
      });
    }

    function jumpMapTo(region) {
      if (!map) return;
      const coords = {
        all: [[23.8, 121.0], 8],
        taipei: [[25.04, 121.53], 12],
        taichung: [[24.15, 120.67], 12],
        tainan: [[22.99, 120.20], 13],
        kaohsiung: [[22.62, 120.30], 12],
        yilan: [[24.80, 121.77], 12],
        hualien: [[24.01, 121.60], 11]
      };
      const c = coords[region] || coords.all;
      map.flyTo(c[0], c[1], { duration: 1.2 });
    }

    // 詳細資訊抽屜
    function openDetailSheet(id) {
      const item = TAIWAN_SPOTS.find(i => i.id === id);
      if (!item) return;

      document.getElementById('sheet-img').src = item.img;
      document.getElementById('sheet-title').textContent = currentLang === 'zh' ? item.name : item.name_en;
      document.getElementById('sheet-subtitle').textContent = currentLang === 'zh' ? item.subtitle : item.subtitle_en;
      document.getElementById('sheet-desc').textContent = currentLang === 'zh' ? item.desc : item.desc_en;
      document.getElementById('sheet-region-badge').textContent = `📍 ${item.city}`;
      document.getElementById('sheet-status-badge').textContent = item.badge;
      document.getElementById('sheet-rating-badge').textContent = `⭐ ${item.rating} (${item.reviewsCount} 則評價)`;
      document.getElementById('sheet-cat-badge').textContent = item.category === 'food' ? '在地必吃小吃' : item.category === 'cafe' ? '景觀特色咖啡' : item.category === 'market' ? '文創週末市集' : item.category === 'onsen' ? '渡假溫泉旅宿' : '絕美秘境步道';

      document.getElementById('sheet-m1-k').textContent = item.m1_k;
      document.getElementById('sheet-m1-v').textContent = item.m1_v;
      document.getElementById('sheet-m2-k').textContent = item.m2_k;
      document.getElementById('sheet-m2-v').textContent = item.m2_v;
      document.getElementById('sheet-m3-k').textContent = item.m3_k;
      document.getElementById('sheet-m3-v').textContent = item.m3_v;

      document.getElementById('sheet-address').textContent = item.address;
      document.getElementById('sheet-transit').textContent = item.transit;
      document.getElementById('sheet-tips').textContent = item.tips;

      document.getElementById('sheet-map-link').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' ' + item.city)}`;
      document.getElementById('sheet-ticket-btn').href = appendAffiliateParams(item.ticketUrl, `sheet_${item.id}`);

      const sheet = document.getElementById('detail-sheet');
      sheet.classList.remove('hidden');
      requestAnimationFrame(() => {
        sheet.classList.remove('opacity-0');
        sheet.firstElementChild.classList.remove('translate-y-8');
      });
    }

    function closeDetailSheet() {
      const sheet = document.getElementById('detail-sheet');
      sheet.classList.add('opacity-0');
      sheet.firstElementChild.classList.add('translate-y-8');
      setTimeout(() => { sheet.classList.add('hidden'); }, 300);
    }

    // 口袋名單收藏功能
    function toggleBookmark(id) {
      const idx = bookmarkedIds.indexOf(id);
      if (idx > -1) bookmarkedIds.splice(idx, 1);
      else bookmarkedIds.push(id);
      localStorage.setItem('twfun_bookmarks', JSON.stringify(bookmarkedIds));
      updateBookmarkUI();
      renderCards();
    }

    function updateBookmarkUI() {
      const count = bookmarkedIds.length;
      const b1 = document.getElementById('bookmark-badge');
      const b2 = document.getElementById('floating-fav-badge');
      const b3 = document.getElementById('drawer-count');
      const b4 = document.getElementById('footer-fav-count');

      if (b1) {
        b1.textContent = count;
        if (count > 0) b1.classList.remove('hidden');
        else b1.classList.add('hidden');
      }
      if (b2) b2.textContent = count;
      if (b3) b3.textContent = count;
      if (b4) b4.textContent = count;
    }

    function toggleBookmarkDrawer() {
      const drawer = document.getElementById('bookmark-drawer');
      if (drawer.classList.contains('translate-x-full')) {
        renderBookmarkDrawer();
        drawer.classList.remove('translate-x-full');
      } else {
        drawer.classList.add('translate-x-full');
      }
    }

    function renderBookmarkDrawer() {
      const container = document.getElementById('bookmark-items-container');
      const bookmarked = TAIWAN_SPOTS.filter(i => bookmarkedIds.includes(i.id));

      if (bookmarked.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12 text-stone-400">
            <span class="text-4xl block mb-2">🤍</span>
            <p class="text-xs font-bold text-stone-600">目前尚無收藏的台灣地點</p>
            <p class="text-[11px] text-stone-400 mt-1">點擊卡片右上角愛心即可快速加入！</p>
          </div>
        `;
        return;
      }

      container.innerHTML = bookmarked.map(item => `
        <div class="p-3 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between gap-3">
          <div class="flex items-center gap-3 overflow-hidden cursor-pointer" onclick="openDetailSheet('${item.id}'); toggleBookmarkDrawer();">
            <img src="${item.img}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
            <div class="overflow-hidden">
              <h4 class="text-xs font-black text-stone-900 truncate">${item.name}</h4>
              <p class="text-[10px] text-emerald-700 truncate font-bold">📍 ${item.city}</p>
            </div>
          </div>
          <button onclick="toggleBookmark('${item.id}')" class="text-stone-400 hover:text-rose-500 text-sm font-bold p-1">
            ✕
          </button>
        </div>
      `).join('');
    }

    function clearAllBookmarks() {
      bookmarkedIds = [];
      localStorage.removeItem('twfun_bookmarks');
      updateBookmarkUI();
      renderBookmarkDrawer();
      renderCards();
    }

    // 實況回報 Modal
    function openReportModal() {
      document.getElementById('report-modal').classList.remove('hidden');
    }
    function closeReportModal() {
      document.getElementById('report-modal').classList.add('hidden');
    }
    function submitReport() {
      const spot = document.getElementById('report-spot-name').value;
      const wait = document.getElementById('report-wait-time').value;
      const comment = document.getElementById('report-comment').value;

      if (!spot) {
        alert('請填寫地點名稱！');
        return;
      }
      alert(`感謝您的熱心回報！\n地點：${spot}\n狀態：${wait}\n情報已記錄並同步給廣大旅人！`);
      closeReportModal();
    }

    function toggleLanguage() {
      currentLang = currentLang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('twfun_lang', currentLang);
      document.getElementById('lang-label').textContent = currentLang === 'zh' ? 'EN' : '中文';
      document.getElementById('i18n-brand-title').textContent = currentLang === 'zh' ? '台灣吃喝玩樂' : 'Taiwan Food & Fun';
      renderMainCategories();
      renderSubtags();
      renderCards();
    }

    // 初始化應用
    renderMainCategories();
    renderSubtags();
    renderCards();
    updateBookmarkUI();
  </script>
</body>
</html>
HTML_APP_CODE

close $fh;
print "App index.html generated successfully at $target (" . (-s $target) . " bytes)\n";


