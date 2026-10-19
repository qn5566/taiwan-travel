import 'package:flutter/material.dart';

class AppColors {
  // 🎨 用戶指定整體配色 (參考圖二右下：整體按鈕配色 COLOR PALETTE)
  // PRIMARY: 鼠尾草綠/深松綠
  static const Color palettePrimary = Color(0xFF5E887E);
  static const Color palettePrimaryDeep = Color(0xFF43645C);
  
  // SKY: 柔和天空藍
  static const Color paletteSky = Color(0xFFA7C7E7);
  static const Color paletteSkyDeep = Color(0xFF38BDF8);

  // DARK SLATE: 深炭板岩色
  static const Color paletteSlate = Color(0xFF2F3E46);

  // WHITE / ALABASTER: 純白
  static const Color paletteWhite = Color(0xFFFFFFFF);
  static const Color paletteAlabaster = Color(0xFFF8F9FA);

  // ACCENT / PINK: 玫瑰粉紅與珊瑚粉
  static const Color paletteRose = Color(0xFFE8AEB7);
  static const Color paletteRoseLight = Color(0xFFFFF0F3);
  static const Color paletteCoral = Color(0xFFFF6F61);

  // 系統功能輔助色彩
  static const Color cyanPrimary = Color(0xFF38BDF8);
  static const Color cyanDeep = Color(0xFF0284C7);
  static const Color cyanLight = Color(0xFFF0F9FF);
  static const Color cyanIce = Color(0xFFE0F2FE);
  static const Color cyanBorder = Color(0xFFBAE6FD);

  // 文字層級
  static const Color textHeading = Color(0xFF2F3E46);
  static const Color textBody = Color(0xFF334155);
  static const Color textMuted = Color(0xFF94A3B8);
  static const Color textLight = Color(0xFF64748B);

  // 底色
  static const Color bgCanvas = Color(0xFFF8FAFC);
  static const Color cardWhite = Color(0xFFFFFFFF);

  // 漸層常數
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [palettePrimary, palettePrimaryDeep],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient cyanGradient = LinearGradient(
    colors: [cyanPrimary, cyanDeep],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const LinearGradient coralGradient = LinearGradient(
    colors: [paletteCoral, Color(0xFFFA5A4B)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
}

class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      scaffoldBackgroundColor: AppColors.bgCanvas,
      colorScheme: const ColorScheme.light(
        primary: AppColors.palettePrimary,
        secondary: AppColors.paletteSky,
        surface: AppColors.paletteWhite,
        background: AppColors.bgCanvas,
        onPrimary: Colors.white,
        onSurface: AppColors.textHeading,
      ),
      fontFamily: 'PingFang TC',
    );
  }
}
