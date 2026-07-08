const trainClasses = [
  {
    id: "eksekutif",
    name: "Eksekutif",
    description: "Kelas tertinggi dengan kenyamanan maksimal",
    priceMultiplier: 1.5,
    features: [
      "Kursi reclining",
      "AC",
      "WiFi",
      "Makanan premium",
      "Selimut",
      "TV pribadi",
    ],
    icon: "FaCrown",
  },
  {
    id: "bisnis",
    name: "Bisnis",
    description: "Keseimbangan antara kenyamanan dan harga",
    priceMultiplier: 1,
    features: ["Kursi nyaman", "AC", "WiFi", "Makanan ringan", "TV bersama"],
    icon: "FaBriefcase",
  },
  {
    id: "ekonomi",
    name: "Ekonomi",
    description: "Pilihan hemat untuk perjalanan Anda",
    priceMultiplier: 0.7,
    features: ["Kursi standar", "AC", "TV bersama"],
    icon: "FaWallet",
  },
];

export default trainClasses;
