import 'dart:ui';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../models/destination.dart';
import '../theme/app_theme.dart';

class DetailScreen extends StatefulWidget {
  final Destination destination;

  const DetailScreen({Key? key, required this.destination}) : super(key: key);

  @override
  State<DetailScreen> createState() => _DetailScreenState();
}

class _DetailScreenState extends State<DetailScreen> {
  late bool isFav;

  @override
  void initState() {
    super.initState();
    isFav = widget.destination.isFavorite;
  }

  Future<void> _openUrl(String url) async {
    final uri = Uri.parse(url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    final dest = widget.destination;

    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          // 滿版背景圖
          Image.network(
            dest.imageUrl,
            fit: BoxFit.cover,
            errorBuilder: (context, error, stackTrace) => Container(
              color: AppColors.cyanIce,
              child: const Icon(Icons.landscape, size: 60, color: AppColors.cyanDeep),
            ),
          ),

          // 頂部返回與收藏按鈕
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  GestureDetector(
                    onTap: () => Navigator.pop(context),
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.9),
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.1),
                            blurRadius: 8,
                          ),
                        ],
                      ),
                      child: const Center(
                        child: Icon(Icons.arrow_back_ios_new, size: 16, color: AppColors.textHeading),
                      ),
                    ),
                  ),
                  GestureDetector(
                    onTap: () {
                      setState(() {
                        isFav = !isFav;
                        dest.isFavorite = isFav;
                      });
                    },
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.9),
                        shape: BoxShape.circle,
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.1),
                            blurRadius: 8,
                          ),
                        ],
                      ),
                      child: Center(
                        child: Text(
                          isFav ? "❤️" : "🤍",
                          style: const TextStyle(fontSize: 18),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),

          // 底部彈性資訊卡片
          Align(
            alignment: Alignment.bottomCenter,
            child: Container(
              margin: const EdgeInsets.all(16),
              padding: const EdgeInsets.all(20),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.92),
                borderRadius: BorderRadius.circular(28),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.12),
                    blurRadius: 24,
                    offset: const Offset(0, 10),
                  ),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // 標題與評分
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Expanded(
                        child: Text(
                          dest.title,
                          style: const TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w900,
                            color: AppColors.textHeading,
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: AppColors.cyanLight,
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: AppColors.cyanBorder),
                        ),
                        child: Row(
                          children: [
                            const Text("⭐", style: TextStyle(fontSize: 12)),
                            const SizedBox(width: 4),
                            Text(
                              "${dest.rating}",
                              style: const TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w800,
                                color: AppColors.cyanDeep,
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 6),
                  Text(
                    "📍 ${dest.city}",
                    style: const TextStyle(
                      fontSize: 12,
                      fontWeight: FontWeight.w700,
                      color: AppColors.cyanDeep,
                    ),
                  ),
                  const SizedBox(height: 12),

                  // 氣候與時間指標
                  Row(
                    children: [
                      _buildMetricChip("☀️ 氣候", dest.climate),
                      const SizedBox(width: 10),
                      _buildMetricChip("⏱️ 遊程", dest.duration),
                    ],
                  ),
                  const SizedBox(height: 12),

                  // 介紹文案
                  Text(
                    dest.description,
                    maxLines: 3,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontSize: 13,
                      height: 1.5,
                      color: AppColors.textBody,
                    ),
                  ),
                  const SizedBox(height: 14),

                  // 萬家福線上伴手禮推薦橫幅
                  InkWell(
                    onTap: () => _openUrl("https://onelink.one/s/KmfgH"),
                    borderRadius: BorderRadius.circular(14),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                      decoration: BoxDecoration(
                        color: const Color(0xFFFFF7ED),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: const Color(0xFFFDBA74)),
                      ),
                      child: Row(
                        children: const [
                          Text("🎁", style: TextStyle(fontSize: 18)),
                          SizedBox(width: 8),
                          Expanded(
                            child: Text(
                              "台灣人氣伴手禮：免提行李・一鍵直送飯店",
                              style: TextStyle(
                                fontSize: 11,
                                fontWeight: FontWeight.w800,
                                color: Color(0xFFC2410C),
                              ),
                            ),
                          ),
                          Text(
                            "選購 ➔",
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.w800,
                              color: Color(0xFFC2410C),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 14),

                  // 立即預訂行程按鈕 (珊瑚橘漸層)
                  SizedBox(
                    width: double.infinity,
                    height: 50,
                    child: ElevatedButton(
                      onPressed: () => _openUrl(dest.bookUrl),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: AppColors.coralOrange,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(25),
                        ),
                        elevation: 4,
                      ),
                      child: const Text(
                        "🎟️ 立即預訂行程 (Klook 優惠已套用)",
                        style: TextStyle(
                          fontSize: 15,
                          fontWeight: FontWeight.w900,
                          color: Colors.white,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMetricChip(String label, String value) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: const Color(0xFFF8FAFC),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: const Color(0xFFE2E8F0)),
      ),
      child: Text(
        "$label: $value",
        style: const TextStyle(
          fontSize: 11,
          fontWeight: FontWeight.w700,
          color: AppColors.textBody,
        ),
      ),
    );
  }
}
