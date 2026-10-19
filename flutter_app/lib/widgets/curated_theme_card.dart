import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import '../theme/app_theme.dart';

/// 🌟 STYLE 2: 16大精選分類卡牌 (參考圖二右上：16個精選分類的卡片 景點卡片顯示)
/// - 滿版震撼實景背景大圖 (430px 高度，展現 Nusa Penida 等級美感)
/// - 頂部懸浮極簡圓形毛玻璃控制鍵 (左側分類圖示，右側書籤收藏鍵)
/// - 底部懸浮深碳綠色/深灰青毛玻璃卡片 (Dark Slate Frosted Glass Card)
///   * 📍 地點標籤 (天空藍 #A7C7E7 大寫字樣)
///   * Inter 900 粗體大標題
///   * 3 條橫向水平數據指標 (⭐ 評分 | 🌡️ 氣候 | ⏱️ 天數)
///   * 故事性段落介紹 + Read More 天空藍超連結
///   * 高對比純白膠囊按鈕：[ Book Now 探索專題 ➔ ]
class CuratedThemeCard extends StatelessWidget {
  final String title;
  final String location;
  final String imageUrl;
  final String rating;
  final String temperature;
  final String duration;
  final String description;
  final String badgeText;
  final VoidCallback onTap;
  final VoidCallback? onBookmarkToggle;
  final bool isBookmarked;

  const CuratedThemeCard({
    Key? key,
    required this.title,
    required this.location,
    required this.imageUrl,
    required this.rating,
    required this.temperature,
    required this.duration,
    required this.description,
    required this.badgeText,
    required this.onTap,
    this.onBookmarkToggle,
    this.isBookmarked = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        height: 440,
        margin: const EdgeInsets.only(bottom: 24),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(28),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.24),
              blurRadius: 36,
              offset: const Offset(0, 14),
            ),
          ],
        ),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(28),
          child: Stack(
            fit: StackFit.expand,
            children: [
              // 滿版實景背景大圖
              Image.network(
                imageUrl,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) => Container(
                  color: const Color(0xFF1E293B),
                  child: const Icon(Icons.landscape, color: Colors.white54, size: 48),
                ),
              ),

              // 頂部懸浮控制鈕
              Positioned(
                top: 16,
                left: 16,
                right: 16,
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    // 左側主題圖示/標籤
                    ClipOval(
                      child: BackdropFilter(
                        filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
                        child: Container(
                          width: 40,
                          height: 40,
                          decoration: BoxDecoration(
                            color: Colors.white.withOpacity(0.25),
                            shape: BoxShape.circle,
                            border: Border.all(color: Colors.white.withOpacity(0.4)),
                          ),
                          child: Center(
                            child: Text(
                              badgeText,
                              style: const TextStyle(fontSize: 16),
                            ),
                          ),
                        ),
                      ),
                    ),

                    // 右側書籤/愛心按鈕
                    GestureDetector(
                      onTap: onBookmarkToggle,
                      child: ClipOval(
                        child: BackdropFilter(
                          filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
                          child: Container(
                            width: 40,
                            height: 40,
                            decoration: BoxDecoration(
                              color: isBookmarked ? AppColors.paletteCoral : Colors.white.withOpacity(0.25),
                              shape: BoxShape.circle,
                              border: Border.all(color: Colors.white.withOpacity(0.4)),
                            ),
                            child: const Center(
                              child: Text(
                                "🔖",
                                style: TextStyle(fontSize: 15),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              // 底部懸浮深碳綠色/深灰青毛玻璃卡片 (Dark Slate Frosted Glass Card)
              Positioned(
                bottom: 14,
                left: 14,
                right: 14,
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(22),
                  child: BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 24, sigmaY: 24),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
                      decoration: BoxDecoration(
                        color: AppColors.paletteSlate.withOpacity(0.86),
                        borderRadius: BorderRadius.circular(22),
                        border: Border.all(color: Colors.white.withOpacity(0.18)),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.35),
                            blurRadius: 28,
                            offset: const Offset(0, 10),
                          ),
                        ],
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          // 📍 地點標籤
                          Row(
                            children: [
                              const Text("📍", style: TextStyle(fontSize: 11)),
                              const SizedBox(width: 4),
                              Expanded(
                                child: Text(
                                  location,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: GoogleFonts.inter(
                                    fontSize: 11,
                                    fontWeight: FontWeight.w700,
                                    color: AppColors.paletteSky,
                                    letterSpacing: 0.5,
                                  ),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 3),

                          // 粗體大標題
                          Text(
                            title,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: GoogleFonts.inter(
                              fontSize: 18,
                              fontWeight: FontWeight.w900,
                              color: Colors.white,
                              height: 1.25,
                              letterSpacing: -0.2,
                            ),
                          ),
                          const SizedBox(height: 8),

                          // 3 條橫向水平數據指標
                          Row(
                            children: [
                              Text(
                                "⭐ $rating 旅人推薦",
                                style: GoogleFonts.inter(
                                  fontSize: 11.5,
                                  fontWeight: FontWeight.w700,
                                  color: Colors.white.withOpacity(0.92),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 8),
                                child: Text(
                                  "|",
                                  style: TextStyle(color: Colors.white.withOpacity(0.3)),
                                ),
                              ),
                              Text(
                                "🌡️ $temperature",
                                style: GoogleFonts.inter(
                                  fontSize: 11.5,
                                  fontWeight: FontWeight.w700,
                                  color: Colors.white.withOpacity(0.92),
                                ),
                              ),
                              Padding(
                                padding: const EdgeInsets.symmetric(horizontal: 8),
                                child: Text(
                                  "|",
                                  style: TextStyle(color: Colors.white.withOpacity(0.3)),
                                ),
                              ),
                              Text(
                                "⏱️ $duration",
                                style: GoogleFonts.inter(
                                  fontSize: 11.5,
                                  fontWeight: FontWeight.w700,
                                  color: Colors.white.withOpacity(0.92),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 10),

                          // 故事性段落介紹
                          RichText(
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            text: TextSpan(
                              style: GoogleFonts.dmSans(
                                fontSize: 12,
                                height: 1.55,
                                color: Colors.white.withOpacity(0.86),
                              ),
                              children: [
                                TextSpan(text: "$description "),
                                TextSpan(
                                  text: "Read More",
                                  style: GoogleFonts.dmSans(
                                    fontWeight: FontWeight.w700,
                                    color: AppColors.paletteSky,
                                    decoration: TextDecoration.underline,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 14),

                          // 高對比純白膠囊按鈕：[ Book Now 探索專題 ➔ ]
                          Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(9999),
                              boxShadow: [
                                BoxShadow(
                                  color: Colors.black.withOpacity(0.2),
                                  blurRadius: 16,
                                  offset: const Offset(0, 4),
                                ),
                              ],
                            ),
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Text(
                                  "Book Now 探索專題 ➔",
                                  style: GoogleFonts.inter(
                                    fontSize: 14,
                                    fontWeight: FontWeight.w900,
                                    color: AppColors.paletteSlate,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
