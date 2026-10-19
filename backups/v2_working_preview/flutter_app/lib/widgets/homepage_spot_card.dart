import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../models/destination.dart';
import '../screens/detail_screen.dart';
import '../theme/app_theme.dart';

/// 🌟 STYLE 1: 首頁全部景點卡片 (參考圖二下中：全部景點卡片顯示)
/// - 上半部：高解析實景大圖，圓角 26px，右上角粉紅愛心徽章
/// - 下半部：純白典雅卡片 (#FFFFFF)
///   * 分頁三圓點 (Pagination Dots)
///   * 粗體大標題 + 右側粉紅愛心收藏鈕
///   * 📍 粉紅地標地點
///   * 3 大橫向數據卡 (評分、門票價格、氣候)
///   * About 介紹區塊 + Show More 展開
///   * 底部全寬膠囊行動按鈕 [查看景點詳情 ➔]
class HomepageSpotCard extends StatelessWidget {
  final Destination destination;
  final VoidCallback? onFavoriteToggle;

  const HomepageSpotCard({
    Key? key,
    required this.destination,
    this.onFavoriteToggle,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(destination: destination),
          ),
        );
      },
      child: Container(
        margin: const EdgeInsets.only(bottom: 22),
        decoration: BoxDecoration(
          color: AppColors.paletteWhite,
          borderRadius: BorderRadius.circular(28),
          border: Border.all(color: const Color(0xFFEEF2F6)),
          boxShadow: [
            BoxShadow(
              color: AppColors.paletteSlate.withOpacity(0.08),
              blurRadius: 30,
              offset: const Offset(0, 12),
            ),
          ],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // 上半部實景大圖
            ClipRRect(
              borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
              child: Stack(
                children: [
                  SizedBox(
                    height: 230,
                    width: double.infinity,
                    child: Image.network(
                      destination.imageUrl,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) => Container(
                        color: const Color(0xFFE2E8F0),
                        child: const Icon(Icons.image, color: Colors.grey, size: 40),
                      ),
                    ),
                  ),
                  // 左上角返回/探索小圖示與右上角粉紅愛心標籤
                  Positioned(
                    top: 14,
                    left: 14,
                    right: 14,
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Container(
                          width: 36,
                          height: 36,
                          decoration: BoxDecoration(
                            color: Colors.white.withOpacity(0.75),
                            shape: BoxShape.circle,
                            border: Border.all(color: Colors.white.withOpacity(0.9)),
                          ),
                          child: const Center(
                            child: Icon(Icons.arrow_back_ios_new, size: 14, color: AppColors.paletteSlate),
                          ),
                        ),
                        GestureDetector(
                          onTap: onFavoriteToggle,
                          child: Container(
                            width: 38,
                            height: 38,
                            decoration: BoxDecoration(
                              color: Colors.white,
                              shape: BoxShape.circle,
                              border: Border.all(color: AppColors.paletteRose.withOpacity(0.6), width: 1.5),
                              boxShadow: [
                                BoxShadow(
                                  color: AppColors.paletteRose.withOpacity(0.3),
                                  blurRadius: 8,
                                ),
                              ],
                            ),
                            child: Center(
                              child: Text(
                                destination.isFavorite ? "❤️" : "🤍",
                                style: const TextStyle(fontSize: 16),
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),

            // 下半部純白內容卡片
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // 頂部粉紅分頁三圓點
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        width: 18,
                        height: 6,
                        decoration: BoxDecoration(
                          color: AppColors.paletteRose,
                          borderRadius: BorderRadius.circular(6),
                        ),
                      ),
                      const SizedBox(width: 6),
                      Container(
                        width: 6,
                        height: 6,
                        decoration: const BoxDecoration(
                          color: Color(0xFFE2E8F0),
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 6),
                      Container(
                        width: 6,
                        height: 6,
                        decoration: const BoxDecoration(
                          color: Color(0xFFE2E8F0),
                          shape: BoxShape.circle,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),

                  // 標題與粉紅愛心按鈕列
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          destination.title,
                          style: GoogleFonts.inter(
                            fontSize: 19,
                            fontWeight: FontWeight.w800,
                            color: AppColors.paletteSlate,
                            letterSpacing: -0.3,
                          ),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                      ),
                      GestureDetector(
                        onTap: onFavoriteToggle,
                        child: Container(
                          width: 38,
                          height: 38,
                          decoration: const BoxDecoration(
                            color: AppColors.paletteRoseLight,
                            shape: BoxShape.circle,
                          ),
                          child: Center(
                            child: Text(
                              destination.isFavorite ? "❤️" : "🤍",
                              style: const TextStyle(fontSize: 16),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),

                  // 地點
                  Padding(
                    padding: const EdgeInsets.only(top: 2, bottom: 12),
                    child: Row(
                      children: [
                        const Text("📍", style: TextStyle(fontSize: 13)),
                        const SizedBox(width: 4),
                        Text(
                          destination.city,
                          style: GoogleFonts.inter(
                            fontSize: 13,
                            fontWeight: FontWeight.w700,
                            color: AppColors.paletteRose,
                          ),
                        ),
                      ],
                    ),
                  ),

                  // 三大水平指標卡牌
                  Row(
                    children: [
                      Expanded(
                        child: _buildMetricBox(
                          "⭐ ${destination.rating}",
                          "5k+ 評價",
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: _buildMetricBox(
                          "💰 免門票",
                          "門票資訊",
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: _buildMetricBox(
                          "☀️ ${destination.climate}",
                          "最佳氣候",
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),

                  // About 區塊
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        "About",
                        style: GoogleFonts.inter(
                          fontSize: 14,
                          fontWeight: FontWeight.w800,
                          color: AppColors.paletteSlate,
                        ),
                      ),
                      Text(
                        "Show More",
                        style: GoogleFonts.dmSans(
                          fontSize: 12,
                          fontWeight: FontWeight.w700,
                          color: AppColors.paletteCoral,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  Text(
                    destination.description,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: GoogleFonts.dmSans(
                      fontSize: 12,
                      height: 1.55,
                      color: AppColors.textLight,
                    ),
                  ),
                  const SizedBox(height: 14),

                  // 底部操作按鈕
                  Container(
                    width: double.infinity,
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    decoration: BoxDecoration(
                      gradient: AppColors.primaryGradient,
                      borderRadius: BorderRadius.circular(9999),
                      boxShadow: [
                        BoxShadow(
                          color: AppColors.palettePrimary.withOpacity(0.35),
                          blurRadius: 14,
                          offset: const Offset(0, 4),
                        ),
                      ],
                    ),
                    child: Center(
                      child: Text(
                        "查看景點詳情 ➔",
                        style: GoogleFonts.inter(
                          fontSize: 13,
                          fontWeight: FontWeight.w800,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMetricBox(String val, String lbl) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: const Color(0xFFF1F5F9)),
      ),
      child: Column(
        children: [
          Text(
            val,
            style: GoogleFonts.inter(
              fontSize: 13,
              fontWeight: FontWeight.w800,
              color: AppColors.paletteSlate,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            lbl,
            style: GoogleFonts.dmSans(
              fontSize: 10,
              fontWeight: FontWeight.w600,
              color: AppColors.textMuted,
            ),
          ),
        ],
      ),
    );
  }
}
