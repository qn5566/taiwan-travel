import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../models/destination.dart';
import '../theme/app_theme.dart';
import 'detail_screen.dart';
import '../widgets/homepage_spot_card.dart';
import '../widgets/curated_theme_card.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedRegionIndex = 0;
  int _currentNavIndex = 0;

  final List<String> _regions = ["全台灣", "北部", "中部", "南部", "東部", "離島"];

  Future<void> _openUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  Future<void> _openDrinkMap(String brandName) async {
    final cleanBrand = brandName.split(' ')[0].trim();
    final url = "https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent('$cleanBrand 飲料店')}";
    _openUrl(url);
  }

  void _showRankingsSheet(BuildContext context, {bool isDrinks = true}) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        bool showDrinks = isDrinks;
        return StatefulBuilder(
          builder: (context, setModalState) {
            return Container(
              height: MediaQuery.of(context).size.height * 0.85,
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
              ),
              child: Column(
                children: [
                  // 頂部把手與標題
                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 14, 20, 10),
                    child: Column(
                      children: [
                        Container(
                          width: 40,
                          height: 4,
                          decoration: BoxDecoration(
                            color: Colors.grey.shade300,
                            borderRadius: BorderRadius.circular(2),
                          ),
                        ),
                        const SizedBox(height: 12),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            const Text(
                              "🏆 台灣超人氣雙榜單指南",
                              style: TextStyle(
                                fontSize: 17,
                                fontWeight: FontWeight.w900,
                                color: AppColors.textHeading,
                              ),
                            ),
                            IconButton(
                              icon: const Icon(Icons.close, size: 20),
                              onPressed: () => Navigator.pop(context),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),

                  // 雙標籤切換按鈕 (🧋 手搖 TOP 20 ＆ 🏛️ 景點人次 TOP 20)
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 6),
                    child: Container(
                      padding: const EdgeInsets.all(4),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF1F5F9),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Row(
                        children: [
                          Expanded(
                            child: InkWell(
                              onTap: () => setModalState(() => showDrinks = true),
                              borderRadius: BorderRadius.circular(12),
                              child: Container(
                                padding: const EdgeInsets.symmetric(vertical: 8),
                                decoration: BoxDecoration(
                                  color: showDrinks ? Colors.white : Colors.transparent,
                                  borderRadius: BorderRadius.circular(12),
                                  boxShadow: showDrinks
                                      ? [
                                          BoxShadow(
                                            color: Colors.black.withOpacity(0.06),
                                            blurRadius: 6,
                                          ),
                                        ]
                                      : null,
                                ),
                                child: Center(
                                  child: Text(
                                    "🧋 必喝手搖 TOP 20",
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w900,
                                      color: showDrinks ? const Color(0xFF92400E) : AppColors.textMuted,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                          Expanded(
                            child: InkWell(
                              onTap: () => setModalState(() => showDrinks = false),
                              borderRadius: BorderRadius.circular(12),
                              child: Container(
                                padding: const EdgeInsets.symmetric(vertical: 8),
                                decoration: BoxDecoration(
                                  color: !showDrinks ? Colors.white : Colors.transparent,
                                  borderRadius: BorderRadius.circular(12),
                                  boxShadow: !showDrinks
                                      ? [
                                          BoxShadow(
                                            color: Colors.black.withOpacity(0.06),
                                            blurRadius: 6,
                                          ),
                                        ]
                                      : null,
                                ),
                                child: Center(
                                  child: Text(
                                    "🏛️ 景點人次 TOP 20",
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w900,
                                      color: !showDrinks ? AppColors.cyanDeep : AppColors.textMuted,
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),

                  // 列表清單 (支援開啟 Google Maps 找分店導航)
                  Expanded(
                    child: showDrinks
                        ? _buildDrinksRankingList()
                        : _buildSpotsRankingList(),
                  ),
                ],
              ),
            );
          },
        );
      },
    );
  }

  Widget _buildDrinksRankingList() {
    final drinksData = [
      {"rank": 1, "name": "50嵐 50LAN", "logo": "🟡", "tag": "國民珍奶 · 零踩雷", "drinks": "1號四季春珍波椰、波霸奶茶", "rate": "4.9★", "votes": "14.2萬票"},
      {"rank": 2, "name": "吃茶三千 CHICHA San Chen", "logo": "👑", "tag": "台中發跡 · 專利現萃奢華奶茶", "drinks": "國王珍珠奶茶、決明烏龍厚奶", "rate": "4.9★", "votes": "13.8萬票"},
      {"rank": 3, "name": "得正 Oolong Tea", "logo": "🟦", "tag": "文青純茶 · 烏龍專門", "drinks": "焙烏龍奶茶(加茶凍)、檸檬春烏龍", "rate": "4.9★", "votes": "12.5萬票"},
      {"rank": 4, "name": "麻古茶坊 MACU", "logo": "🥭", "tag": "鮮果肉 · 芝芝甜點系", "drinks": "芝芝芒果果粒、楊枝甘露", "rate": "4.8★", "votes": "10.1萬票"},
      {"rank": 5, "name": "一沐日 1MUJI", "logo": "🍃", "tag": "料神 · 草仔粿粉圓", "drinks": "逮丸奶茶(草仔粿)、油切蕎麥茶", "rate": "4.8★", "votes": "9.7萬票"},
      {"rank": 6, "name": "迷客夏 Milksha", "logo": "🥛", "tag": "牧場鮮奶 · 白玉珍珠", "drinks": "珍珠紅茶拿鐵、大甲芋頭鮮奶", "rate": "4.8★", "votes": "9.3萬票"},
      {"rank": 7, "name": "八曜和茶 Hachiyo", "logo": "🌾", "tag": "十穀炒焙 · 無咖啡因首選", "drinks": "八曜和茶歐蕾、柚香覺醒炙烏龍", "rate": "4.8★", "votes": "8.9萬票"},
      {"rank": 8, "name": "龜記茗品 GUIJI", "logo": "🐢", "tag": "古早味鮮果 · 紅柚翡翠專門", "drinks": "紅柚翡翠、濃乳茶", "rate": "4.8★", "votes": "8.5萬票"},
      {"rank": 9, "name": "可不可熟成紅茶 KEBUKE", "logo": "🍷", "tag": "熟成茶香 · 濃茶重奶", "drinks": "熟成歐蕾(加白玉)、胭脂紅茶", "rate": "4.8★", "votes": "10.4萬票"},
      {"rank": 10, "name": "珍煮丹 TRUEDAN", "logo": "🟤", "tag": "職人手炒黑糖珍珠", "drinks": "黑糖珍珠鮮奶、泰泰鮮奶茶", "rate": "4.7★", "votes": "8.1萬票"},
    ];

    return ListView.builder(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 20),
      itemCount: drinksData.length,
      itemBuilder: (context, idx) {
        final d = drinksData[idx];
        final name = d["name"] as String;
        return Container(
          margin: const EdgeInsets.only(bottom: 10),
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: const Color(0xFFF1F5F9)),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.03),
                blurRadius: 8,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: Column(
            children: [
              Row(
                children: [
                  Text(
                    "#${d["rank"]}",
                    style: const TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFFD97706),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Container(
                    width: 38,
                    height: 38,
                    decoration: BoxDecoration(
                      color: const Color(0xFFFEF3C7),
                      shape: BoxShape.circle,
                      border: Border.all(color: const Color(0xFFFCD34D)),
                    ),
                    child: Center(
                      child: Text(d["logo"] as String, style: const TextStyle(fontSize: 18)),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Text(
                              name,
                              style: const TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w900,
                                color: AppColors.textHeading,
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 2),
                        Text(
                          "🧋 必喝：${d["drinks"]}",
                          style: const TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.w700,
                            color: Color(0xFF92400E),
                          ),
                        ),
                      ],
                    ),
                  ),
                  Text(
                    d["rate"] as String,
                    style: const TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w900,
                      color: Color(0xFFD97706),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              const Divider(height: 1, color: Color(0xFFF1F5F9)),
              const SizedBox(height: 8),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    d["tag"] as String,
                    style: const TextStyle(fontSize: 9, color: AppColors.textMuted),
                  ),
                  InkWell(
                    onTap: () => _openDrinkMap(name),
                    borderRadius: BorderRadius.circular(10),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                      decoration: BoxDecoration(
                        color: AppColors.cyanDeep,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Row(
                        children: const [
                          Icon(Icons.location_on, size: 12, color: Colors.white),
                          SizedBox(width: 4),
                          Text(
                            "找附近店家・開始導航",
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        );
      },
    );
  }

  Widget _buildSpotsRankingList() {
    final spotsData = [
      {"rank": 1, "name": "台北 101 觀景台", "city": "台北市", "visitors": "360 萬人次/年", "img": "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&auto=format&fit=crop", "url": "https://www.klook.com/zh-TW/activity/1659-taipei-101-observation-deck-ticket-taipei/?aid=123436"},
      {"rank": 2, "name": "國立故宮博物院", "city": "台北市", "visitors": "280 萬人次/年", "img": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop", "url": "https://www.klook.com/zh-TW/activity/2112-national-palace-museum-ticket-taipei/?aid=123436"},
      {"rank": 3, "name": "日月潭國家風景區", "city": "南投縣", "visitors": "320 萬人次/年", "img": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop", "url": "https://www.klook.com/zh-TW/activity/2381-sun-moon-lake-shuishe-nantou/?aid=123436"},
      {"rank": 4, "name": "九份山城老街", "city": "新北市", "visitors": "260 萬人次/年", "img": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop", "url": "https://www.klook.com/zh-TW/activity/1874-jiufen-shifen-day-tour-taipei/?aid=123436"},
      {"rank": 5, "name": "墾丁國家公園", "city": "屏東縣", "visitors": "250 萬人次/年", "img": "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop", "url": "https://www.klook.com/zh-TW/activity/1090-kenting-day-tour-kaohsiung/?aid=123436"},
    ];

    return ListView.builder(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 20),
      itemCount: spotsData.length,
      itemBuilder: (context, idx) {
        final s = spotsData[idx];
        final name = s["name"] as String;
        final city = s["city"] as String;
        return Container(
          height: 110,
          margin: const EdgeInsets.only(bottom: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.08),
                blurRadius: 10,
                offset: const Offset(0, 4),
              ),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(18),
            child: Stack(
              fit: StackFit.expand,
              children: [
                Image.network(s["img"] as String, fit: BoxFit.cover),
                Container(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        Colors.black.withOpacity(0.85),
                        Colors.black.withOpacity(0.4),
                        Colors.transparent,
                      ],
                      begin: Alignment.bottomCenter,
                      end: Alignment.topCenter,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                            decoration: BoxDecoration(
                              color: AppColors.coralOrange,
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: Text(
                              "TOP ${s["rank"]}",
                              style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Colors.white),
                            ),
                          ),
                          Text(
                            "👥 ${s["visitors"]}",
                            style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Colors.white70),
                          ),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(
                                name,
                                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Colors.white),
                              ),
                              Text(
                                "📍 $city",
                                style: const TextStyle(fontSize: 10, color: Colors.white70),
                              ),
                            ],
                          ),
                          Row(
                            children: [
                              InkWell(
                                onTap: () => _openUrl("https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent('$name $city')}"),
                                child: Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                                  decoration: BoxDecoration(
                                    color: Colors.white24,
                                    borderRadius: BorderRadius.circular(8),
                                    border: Border.all(color: Colors.white54),
                                  ),
                                  child: const Text("📍 導航", style: TextStyle(fontSize: 10, color: Colors.white, fontWeight: FontWeight.w700)),
                                ),
                              ),
                              const SizedBox(width: 6),
                              InkWell(
                                onTap: () => _openUrl(s["url"] as String),
                                child: Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                  decoration: BoxDecoration(
                                    color: AppColors.cyanDeep,
                                    borderRadius: BorderRadius.circular(8),
                                  ),
                                  child: const Text("🎟️ 預約", style: TextStyle(fontSize: 10, color: Colors.white, fontWeight: FontWeight.w900)),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  
  void _showSouvenirsSheet(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        return Container(
          height: MediaQuery.of(context).size.height * 0.88,
          decoration: const BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.vertical(top: Radius.circular(24)),
          ),
          child: Column(
            children: [
              // 拖曳把手
              Center(
                child: Container(
                  margin: const EdgeInsets.only(top: 10, bottom: 8),
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: Colors.grey.shade300,
                    borderRadius: BorderRadius.circular(2),
                  ),
                ),
              ),

              // 標題列
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
                child: Row(
                  children: [
                    const Text("🛍️", style: TextStyle(fontSize: 22)),
                    const SizedBox(width: 8),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: const [
                        Text(
                          "全台 20 大必買伴手禮排行榜",
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.w900,
                            color: AppColors.textHeading,
                          ),
                        ),
                        Text(
                          "台灣名產推薦 · 萬家福線上訂購直配飯店",
                          style: TextStyle(
                            fontSize: 11,
                            fontWeight: FontWeight.w600,
                            color: Color(0xFFC2410C),
                          ),
                        ),
                      ],
                    ),
                    const Spacer(),
                    IconButton(
                      icon: const Icon(Icons.close, color: Colors.grey),
                      onPressed: () => Navigator.pop(ctx),
                    ),
                  ],
                ),
              ),

              // 頂部萬家福線上點餐 / 生鮮電商 (OneLink 專屬直配入口)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 6),
                child: InkWell(
                  onTap: () => _openUrl("https://onelink.one/s/KmfgH"),
                  borderRadius: BorderRadius.circular(16),
                  child: Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(
                        colors: [Color(0xFFEA580C), Color(0xFFC2410C)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                      borderRadius: BorderRadius.circular(16),
                      boxShadow: [
                        BoxShadow(
                          color: const Color(0xFFEA580C).withOpacity(0.3),
                          blurRadius: 10,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Row(
                      children: [
                        const Text("🥩", style: TextStyle(fontSize: 24)),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: const [
                              Text(
                                "萬家福線上點餐 · 生鮮電商",
                                style: TextStyle(
                                  fontSize: 13,
                                  fontWeight: FontWeight.w900,
                                  color: Colors.white,
                                ),
                              ),
                              SizedBox(height: 2),
                              Text(
                                "伴手禮免排隊直送飯店 / 露營食材箱一鍵訂",
                                style: TextStyle(
                                  fontSize: 10.5,
                                  fontWeight: FontWeight.w600,
                                  color: Colors.white70,
                                ),
                              ),
                            ],
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: const Text(
                            "線上預訂 ➔",
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w900,
                              color: Color(0xFFC2410C),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),

              // 20 大伴手禮產品清單
              Expanded(
                child: ListView.separated(
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
                  itemCount: kTaiwanSouvenirs.length,
                  separatorBuilder: (context, index) => const SizedBox(height: 12),
                  itemBuilder: (context, index) {
                    final item = kTaiwanSouvenirs[index];
                    return Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: const Color(0xFFF1F5F9)),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.04),
                            blurRadius: 8,
                            offset: const Offset(0, 2),
                          ),
                        ],
                      ),
                      child: Row(
                        children: [
                          ClipRRect(
                            borderRadius: BorderRadius.circular(12),
                            child: Image.network(
                              item.imageUrl,
                              width: 74,
                              height: 74,
                              fit: BoxFit.cover,
                              errorBuilder: (context, error, stackTrace) => Container(
                                width: 74,
                                height: 74,
                                color: const Color(0xFFF1F5F9),
                                child: const Icon(Icons.cake, color: Colors.grey),
                              ),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                                      decoration: BoxDecoration(
                                        color: const Color(0xFFFFF7ED),
                                        borderRadius: BorderRadius.circular(6),
                                      ),
                                      child: Text(
                                        "TOP ${item.rank} · ${item.tag}",
                                        style: const TextStyle(
                                          fontSize: 9,
                                          fontWeight: FontWeight.w800,
                                          color: Color(0xFFC2410C),
                                        ),
                                      ),
                                    ),
                                    Text(
                                      item.price,
                                      style: const TextStyle(
                                        fontSize: 11,
                                        fontWeight: FontWeight.w900,
                                        color: Color(0xFFEA580C),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 3),
                                Text(
                                  item.name,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(
                                    fontSize: 13,
                                    fontWeight: FontWeight.w900,
                                    color: AppColors.textHeading,
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  item.highlight,
                                  maxLines: 2,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(
                                    fontSize: 10.5,
                                    color: Color(0xFF64748B),
                                    height: 1.4,
                                  ),
                                ),
                                const SizedBox(height: 4),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      "📍 ${item.city}",
                                      style: const TextStyle(
                                        fontSize: 9.5,
                                        color: AppColors.textMuted,
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                    InkWell(
                                      onTap: () => _openUrl(item.buyUrl),
                                      borderRadius: BorderRadius.circular(8),
                                      child: Container(
                                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                        decoration: BoxDecoration(
                                          color: AppColors.palettePrimary,
                                          borderRadius: BorderRadius.circular(8),
                                        ),
                                        child: const Text(
                                          "萬家福預訂 ➔",
                                          style: TextStyle(
                                            fontSize: 9.5,
                                            fontWeight: FontWeight.w800,
                                            color: Colors.white,
                                          ),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bgCanvas,
      body: SafeArea(
        bottom: false,
        child: Stack(
          children: [
            CustomScrollView(
              slivers: [
                // 1. 頂部多語系切換列
                SliverToBoxAdapter(
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                    color: const Color(0xFFFAF8F5),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Row(
                        children: [
                          _buildLangChip("繁中", true),
                          _buildLangChip("EN", false),
                          _buildLangChip("日本語", false),
                          _buildLangChip("한국어", false),
                          _buildLangChip("ES", false),
                          _buildLangChip("DE", false),
                          _buildLangChip("TH", false),
                        ],
                      ),
                    ),
                  ),
                ),

                // 2. 品牌標題列 + 排行榜按鈕 (依用戶指示：單一清楚吸引力排行榜按鈕 + 伴手禮購物按鈕)
                SliverToBoxAdapter(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 6),
                    child: Row(
                      children: [
                        // 排行榜按鈕 (小巧、醒目金橘漸層、強烈吸引力)
                        Expanded(
                          child: InkWell(
                            onTap: () => _showRankingsSheet(context, isDrinks: true),
                            borderRadius: BorderRadius.circular(20),
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                              decoration: BoxDecoration(
                                gradient: const LinearGradient(
                                  colors: [Color(0xFFF59E0B), Color(0xFFD97706)],
                                  begin: Alignment.topLeft,
                                  end: Alignment.bottomRight,
                                ),
                                borderRadius: BorderRadius.circular(20),
                                boxShadow: [
                                  BoxShadow(
                                    color: const Color(0xFFD97706).withOpacity(0.35),
                                    blurRadius: 8,
                                    offset: const Offset(0, 2),
                                  ),
                                ],
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: const [
                                  Text("🏆", style: TextStyle(fontSize: 14)),
                                  SizedBox(width: 4),
                                  Text(
                                    "排行榜",
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w900,
                                      color: Colors.white,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 8),
                        // 伴手禮按鈕 (小巧、醒目珊瑚紅漸層、直通20大推薦)
                        Expanded(
                          child: InkWell(
                            onTap: () => _showSouvenirsSheet(context),
                            borderRadius: BorderRadius.circular(20),
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                              decoration: BoxDecoration(
                                gradient: const LinearGradient(
                                  colors: [Color(0xFFFF4757), Color(0xFFE11D48)],
                                  begin: Alignment.topLeft,
                                  end: Alignment.bottomRight,
                                ),
                                borderRadius: BorderRadius.circular(20),
                                boxShadow: [
                                  BoxShadow(
                                    color: const Color(0xFFE11D48).withOpacity(0.35),
                                    blurRadius: 8,
                                    offset: const Offset(0, 2),
                                  ),
                                ],
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: const [
                                  Text("🛍️", style: TextStyle(fontSize: 14)),
                                  SizedBox(width: 4),
                                  Text(
                                    "伴手禮",
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w900,
                                      color: Colors.white,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),

                // 3. 頂部 4 大正方形服務卡片 (依用戶指示：搜機票、包車預約、機場接送、台灣高鐵)
                SliverToBoxAdapter(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 6),
                    child: Row(
                      children: kTopServices.map((service) {
                        return Expanded(
                          child: Padding(
                            padding: const EdgeInsets.symmetric(horizontal: 4),
                            child: AspectRatio(
                              aspectRatio: 1.0,
                              child: InkWell(
                                onTap: () => _openUrl(service.url),
                                borderRadius: BorderRadius.circular(18),
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: service.bgColor,
                                    borderRadius: BorderRadius.circular(18),
                                    border: Border.all(color: service.borderColor),
                                    boxShadow: [
                                      BoxShadow(
                                        color: service.textColor.withOpacity(0.08),
                                        blurRadius: 8,
                                        offset: const Offset(0, 3),
                                      ),
                                    ],
                                  ),
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Text(service.icon, style: const TextStyle(fontSize: 22)),
                                      const SizedBox(height: 4),
                                      Text(
                                        service.label,
                                        style: TextStyle(
                                          fontSize: 11,
                                          fontWeight: FontWeight.w900,
                                          color: service.textColor,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ),
                            ),
                          ),
                        );
                      }).toList(),
                    ),
                  ),
                ),

                // 4. 精簡搜尋欄
                SliverToBoxAdapter(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF8FAFC),
                        borderRadius: BorderRadius.circular(16),
                        border: Border.all(color: const Color(0xFFE2E8F0)),
                      ),
                      child: Row(
                        children: const [
                          Text("🔍", style: TextStyle(fontSize: 14)),
                          SizedBox(width: 10),
                          Text(
                            "搜尋台灣景點，飲料，餐廳，花東離島...",
                            style: TextStyle(
                              fontSize: 12,
                              color: AppColors.textMuted,
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),

                // 5. 縣市快選標籤列
                SliverToBoxAdapter(
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    child: SizedBox(
                      height: 36,
                      child: ListView.separated(
                        padding: const EdgeInsets.symmetric(horizontal: 18),
                        scrollDirection: Axis.horizontal,
                        itemCount: _regions.length,
                        separatorBuilder: (context, index) => const SizedBox(width: 8),
                        itemBuilder: (context, index) {
                          final isSelected = _selectedRegionIndex == index;
                          return InkWell(
                            onTap: () => setState(() => _selectedRegionIndex = index),
                            borderRadius: BorderRadius.circular(18),
                            child: Container(
                              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
                              decoration: BoxDecoration(
                                color: isSelected ? AppColors.cyanDeep : const Color(0xFFF8FAFC),
                                borderRadius: BorderRadius.circular(18),
                                border: Border.all(
                                  color: isSelected ? AppColors.cyanDeep : const Color(0xFFE2E8F0),
                                ),
                                boxShadow: isSelected
                                    ? [
                                        BoxShadow(
                                          color: AppColors.cyanDeep.withOpacity(0.25),
                                          blurRadius: 8,
                                          offset: const Offset(0, 3),
                                        ),
                                      ]
                                    : null,
                              ),
                              child: Center(
                                child: Text(
                                  _regions[index],
                                  style: TextStyle(
                                    fontSize: 11,
                                    fontWeight: FontWeight.w700,
                                    color: isSelected ? Colors.white : AppColors.textBody,
                                  ),
                                ),
                              ),
                            ),
                          );
                        },
                      ),
                    ),
                  ),
                ),

                // 6. 首頁全部景點列表 (完全依據用戶圖片 Style 1：全部景點卡片顯示)
                SliverPadding(
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
                  sliver: SliverList(
                    delegate: SliverChildBuilderDelegate(
                      (context, index) {
                        final spot = kSampleDestinations[index % kSampleDestinations.length];
                        return HomepageSpotCard(
                          destination: spot,
                          onFavoriteToggle: () {
                            setState(() {
                              spot.isFavorite = !spot.isFavorite;
                            });
                          },
                        );
                      },
                      childCount: kSampleDestinations.length,
                    ),
                  ),
                ),

                const SliverToBoxAdapter(child: SizedBox(height: 80)),
              ],
            ),

            // 7. 懸浮底部導航列 (首頁 ｜ 精選 ｜ 地區 ｜ 收藏 ｜ 留言)
            Positioned(
              left: 18,
              right: 18,
              bottom: 14,
              child: Container(
                height: 58,
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.95),
                  borderRadius: BorderRadius.circular(30),
                  border: Border.all(color: Colors.white.withOpacity(0.8)),
                  boxShadow: [
                    BoxShadow(
                      color: AppColors.textHeading.withOpacity(0.12),
                      blurRadius: 20,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _buildNavItem(0, "🏠", "首頁"),
                    _buildNavItem(1, "✨", "精選"),
                    _buildNavItem(2, "🛍️", "伴手禮"),
                    _buildNavItem(3, "🗺️", "地區"),
                    _buildNavItem(4, "❤️", "收藏"),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildLangChip(String text, bool active) {
    return Container(
      margin: const EdgeInsets.only(right: 6),
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: active ? AppColors.textHeading : Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFE2E8F0)),
      ),
      child: Text(
        text,
        style: TextStyle(
          fontSize: 10,
          fontWeight: FontWeight.w800,
          color: active ? Colors.white : AppColors.textBody,
        ),
      ),
    );
  }

  Widget _buildNavItem(int index, String icon, String label) {
    final isSelected = _currentNavIndex == index;
    return InkWell(
      onTap: () {
        if (index == 2) {
          _showSouvenirsSheet(context);
        } else {
          setState(() => _currentNavIndex = index);
        }
      },
      borderRadius: BorderRadius.circular(16),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(icon, style: const TextStyle(fontSize: 16)),
            Text(
              label,
              style: TextStyle(
                fontSize: 9,
                fontWeight: FontWeight.w800,
                color: isSelected ? AppColors.cyanDeep : AppColors.textMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
