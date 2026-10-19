import 'package:flutter/material.dart';

class Destination {
  final int id;
  final String title;
  final String city;
  final String imageUrl;
  final double rating;
  final String climate;
  final String duration;
  final String description;
  final String bookUrl;
  bool isFavorite;

  Destination({
    required this.id,
    required this.title,
    required this.city,
    required this.imageUrl,
    required this.rating,
    required this.climate,
    required this.duration,
    required this.description,
    required this.bookUrl,
    this.isFavorite = false,
  });
}

class ServiceCapsule {
  final String label;
  final String icon;
  final Color bgColor;
  final Color borderColor;
  final Color textColor;
  final String url;

  ServiceCapsule({
    required this.label,
    required this.icon,
    required this.bgColor,
    required this.borderColor,
    required this.textColor,
    required this.url,
  });
}

// 頂部 4 大正方形服務卡片 (依用戶指示精準四個：搜機票、包車預約、機場接送、台灣高鐵)
final List<ServiceCapsule> kTopServices = [
  ServiceCapsule(
    label: "搜機票",
    icon: "✈️",
    bgColor: const Color(0xFFF0F9FF),
    borderColor: const Color(0xFFBAE6FD),
    textColor: const Color(0xFF0369A1),
    url: "https://tw.trip.com/flights/?allianceid=123436&sid=123436",
  ),
  ServiceCapsule(
    label: "包車預約",
    icon: "🚗",
    bgColor: const Color(0xFFF0FDF4),
    borderColor: const Color(0xFFBBF7D0),
    textColor: const Color(0xFF15803D),
    url: "https://www.klook.com/zh-TW/car-rentals/?aid=123436",
  ),
  ServiceCapsule(
    label: "機場接送",
    icon: "🚐",
    bgColor: const Color(0xFFFAF5FF),
    borderColor: const Color(0xFFE9D5FF),
    textColor: const Color(0xFF7E22CE),
    url: "https://www.klook.com/zh-TW/airport-transfers/?aid=123436",
  ),
  ServiceCapsule(
    label: "台灣高鐵",
    icon: "🚄",
    bgColor: const Color(0xFFFFF7ED),
    borderColor: const Color(0xFFFED7AA),
    textColor: const Color(0xFFC2410C),
    url: "https://www.klook.com/zh-TW/rails-32/1012-taiwan/?aid=123436",
  ),
];

// 台灣 20 大必買伴手禮資料模型
class SouvenirProduct {
  final int rank;
  final String name;
  final String city;
  final String price;
  final String highlight;
  final String imageUrl;
  final String buyUrl;
  final String tag;

  SouvenirProduct({
    required this.rank,
    required this.name,
    required this.city,
    required this.price,
    required this.highlight,
    required this.imageUrl,
    required this.buyUrl,
    required this.tag,
  });
}

// 20 大台灣人氣必買伴手禮清單資料集 (含萬家福線上直購)
final List<SouvenirProduct> kTaiwanSouvenirs = [
  SouvenirProduct(
    rank: 1,
    name: "佳德糕餅 原味鳳梨酥",
    city: "台北市松山區",
    price: "NT\$ 380 / 盒 (12入)",
    highlight: "台北最佳伴手禮冠軍！皮薄餡多鬆香不黏牙，冬瓜與嚴選鳳梨完美黃金比例。",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "人氣排隊冠軍",
  ),
  SouvenirProduct(
    rank: 2,
    name: "微熱山丘 土鳳梨酥",
    city: "南投縣南投市",
    price: "NT\$ 420 / 盒 (10入)",
    highlight: "採用烈日熟成台灣在地土鳳梨，天然酸甜纖維感豐富，紐西蘭奶油酥皮香醇。",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "在地土鳳梨酸甜風味",
  ),
  SouvenirProduct(
    rank: 3,
    name: "糖村 法式經典牛軋糖",
    city: "台中市西屯區",
    price: "NT\$ 360 / 包 (400g)",
    highlight: "比利時天然奶香搭配低溫烘烤加州香脆杏仁粒，米其林推薦全台最美味牛軋糖。",
    imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "米其林推薦點心",
  ),
  SouvenirProduct(
    rank: 4,
    name: "萬家福 頂級野生烏魚子禮盒",
    city: "全台低溫直送",
    price: "NT\$ 880 / 盒",
    highlight: "正宗台灣野生烏魚子！手工日光醃漬翻曬，金黃剔透油脂香醇，真空即食炙燒包裝直送飯店。",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "萬家福商城推薦",
  ),
  SouvenirProduct(
    rank: 5,
    name: "海邊走走 手工肉鬆蛋捲",
    city: "新北市淡水區",
    price: "NT\$ 480 / 盒 (8入)",
    highlight: "爆漿頂級台灣後腿豬肉鬆！純天然洗選蛋與進口安佳奶油烘烤，濃郁厚實不加一滴水。",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "文青送禮第一名",
  ),
  SouvenirProduct(
    rank: 6,
    name: "快車肉乾 特厚蜜汁豬肉乾",
    city: "台北市南門市場",
    price: "NT\$ 250 / 包 (200g)",
    highlight: "厚達一公分爆汁厚切！嚴選台灣優質豬後腿肉，天然古法釀造醬油慢火炭烤。",
    imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "南門市場排隊名店",
  ),
  SouvenirProduct(
    rank: 7,
    name: "裕珍馨 奶油小酥餅",
    city: "台中市大甲區",
    price: "NT\$ 320 / 盒 (6入)",
    highlight: "大甲媽祖朝拜指定御禮！純天然奶油與特級小麥粉多層次桿皮，天然麥芽糖心香滑融口。",
    imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "大甲百年餅店經典",
  ),
  SouvenirProduct(
    rank: 8,
    name: "阿聰師 台灣芋頭酥",
    city: "台中市大甲區",
    price: "NT\$ 350 / 盒 (9入)",
    highlight: "大甲檳榔心芋頭之父手工力作！多層次的夢幻紫色酥皮，包裹濃郁綿密的大甲芋泥。",
    imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "國宴點心大師",
  ),
  SouvenirProduct(
    rank: 9,
    name: "福義軒 手工芝麻蛋捲",
    city: "嘉義市西區",
    price: "NT\$ 220 / 包 (500g)",
    highlight: "嘉義排隊傳奇！純手工新鮮現煎，天然黑芝麻粒香氣四溢，厚實酥脆越嚼越香。",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "嘉義排隊傳奇",
  ),
  SouvenirProduct(
    rank: 10,
    name: "台中太陽堂 老店原味太陽餅",
    city: "台中市中區",
    price: "NT\$ 300 / 盒 (10入)",
    highlight: "台中經典名產正宗傳承！天然豬油揉和多層次酥薄餅皮，溫潤麥芽糖餡甜而不膩。",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&auto=format&fit=crop",
    buyUrl: "https://onelink.one/s/KmfgH",
    tag: "台中在地代表名產",
  ),
];

// 景點範例資料 (純中文名稱與地點)
final List<Destination> kSampleDestinations = [
  Destination(
    id: 1,
    title: "墾丁龍磐崩崖秘境",
    city: "屏東縣 · 台灣",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=900&auto=format&fit=crop",
    rating: 4.8,
    climate: "26°C",
    duration: "半日遊",
    description: "龍磐公園位於屏東墾丁東海岸，全區屬於石灰岩崩崖地形。居高臨下壯闊的太平洋浩瀚無垠，珊瑚礁岩裂溝交織出震撼天際線。",
    bookUrl: "https://www.klook.com/zh-TW/activity/1090-kenting-day-tour-kaohsiung/?aid=123436",
  ),
  Destination(
    id: 2,
    title: "清水斷崖山海壯景",
    city: "花蓮縣 · 台灣",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    climate: "24°C",
    duration: "一日遊",
    description: "號稱台灣八大奇景之一！蘇花公路懸崖峭壁高達八百餘公尺直插入浩瀚太平洋，碧藍海水與白色浪花交織出澎湃極景。",
    bookUrl: "https://www.klook.com/zh-TW/city/19-hualien-things-to-do/?aid=123436",
  ),
  Destination(
    id: 3,
    title: "九份黃金山城老街",
    city: "新北市 · 台灣",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop",
    rating: 4.7,
    climate: "22°C",
    duration: "一日遊",
    description: "依山傍海的懷舊山城，紅燈籠階梯與阿妹茶樓瀰漫宮崎駿神隱少女的魔幻氛圍，品嚐香甜芋圓與漫步昇平戲院。",
    bookUrl: "https://www.klook.com/zh-TW/activity/1301-jiufen-shifen-day-tour-taipei/?aid=123436",
  ),
  Destination(
    id: 4,
    title: "阿里山特富野古道神木",
    city: "嘉義縣 · 台灣",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop",
    rating: 4.8,
    climate: "15°C",
    duration: "一日遊",
    description: "舊鐵道與柳杉林環抱的古道，晨曦破曉時分追逐祝山金黃雲海，漫步在千年巨木參天之間深呼吸天然芬多精。",
    bookUrl: "https://www.klook.com/zh-TW/activity/1628-alishan-forest-railway-day-tour-chiayi/?aid=123436",
  ),
  Destination(
    id: 5,
    title: "日月潭環湖遊艇秘境",
    city: "南投縣 · 台灣",
    imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop",
    rating: 4.9,
    climate: "22°C",
    duration: "一日遊",
    description: "晨霧如夢似幻繚繞湖面，搭乘環湖遊艇拜訪玄光寺阿婆茶葉蛋與伊達邵老街原民美食，全球十大最美自行車道騎行。",
    bookUrl: "https://www.klook.com/zh-TW/activity/1874-sun-moon-lake-day-tour-taichung/?aid=123436",
  ),
];
