import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:url_launcher/url_launcher.dart';
import '../models/destination.dart';
import '../theme/app_theme.dart';

class SquareServiceTile extends StatelessWidget {
  final SquareService service;

  const SquareServiceTile({Key? key, required this.service}) : super(key: key);

  Future<void> _launchUrl() async {
    final uri = Uri.parse(service.url);
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _launchUrl,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // 50x50 正方形漸層 ICON 容器 (圖一風格)
          Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(
              gradient: LinearGradient(
                colors: service.gradientColors,
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: Colors.white.withOpacity(0.5),
                width: 1.2,
              ),
              boxShadow: [
                BoxShadow(
                  color: AppColors.charcoalSlate.withOpacity(0.08),
                  blurRadius: 10,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Center(
              child: Text(
                service.icon,
                style: const TextStyle(fontSize: 22),
              ),
            ),
          ),
          const SizedBox(height: 6),
          // 統一 4 字標籤 (DM Sans Bold)
          Text(
            service.label,
            style: GoogleFonts.dmSans(
              fontSize: 11,
              fontWeight: FontWeight.w700,
              color: AppColors.charcoalSlate,
              letterSpacing: 0.2,
            ),
          ),
        ],
      ),
    );
  }
}

