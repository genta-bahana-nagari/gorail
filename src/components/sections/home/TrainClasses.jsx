// components/sections/TrainClasses.jsx
import { useState } from "react";
import {
  FaChair,
  FaWifi,
  FaUtensils,
  FaPlug,
  FaSnowflake,
  FaTv,
} from "react-icons/fa";

const TrainClasses = () => {
  const [selectedClass, setSelectedClass] = useState("eksekutif");

  const classes = {
    ekonomi: {
      name: "Ekonomi",
      price: "Mulai Rp 80.000",
      description: "Perjalanan hemat dengan fasilitas standar yang nyaman",
      features: [
        { icon: FaChair, text: "Kursi standar" },
        { icon: FaSnowflake, text: "AC" },
      ],

      image:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
    },
    bisnis: {
      name: "Bisnis",
      price: "Mulai Rp 150.000",
      description:
        "Kenyamanan ekstra dengan fasilitas premium untuk perjalanan bisnis",
      features: [
        { icon: FaChair, text: "Kursi reclining" },
        { icon: FaWifi, text: "WiFi" },
        { icon: FaSnowflake, text: "AC" },
        { icon: FaPlug, text: "Charger port" },
      ],

      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    },
    eksekutif: {
      name: "Eksekutif",
      price: "Mulai Rp 250.000",
      description: "Pengalaman perjalanan mewah dengan layanan terbaik",
      features: [
        { icon: FaChair, text: "Kursi legrest" },
        { icon: FaWifi, text: "WiFi premium" },
        { icon: FaUtensils, text: "Makanan & minuman" },
        { icon: FaTv, text: "Hiburan pribadi" },
        { icon: FaPlug, text: "Charger port" },
        { icon: FaSnowflake, text: "AC" },
      ],

      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop",
    },
  };

  const currentClass = classes[selectedClass];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kelas Perjalanan
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih kelas yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        {/* Class Selector */}
        <div className="flex justify-center gap-4 mb-10">
          {Object.keys(classes).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedClass(key)}
              className={`px-3 py-1 md:px-6 md:py-3 text-sm md:text-base rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                selectedClass === key
                  ? `bg-red-600 text-white shadow-lg transform scale-105`
                  : "bg-white text-gray-700 hover:bg-gray-200/80"
              }`}
            >
              {classes[key].name}
            </button>
          ))}
        </div>

        {/* Class Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-64 lg:h-full">
              <img
                src={currentClass.image}
                alt={currentClass.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                  {currentClass.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {currentClass.description}
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm md:text-base text-gray-500 mb-2">
                  Harga mulai dari
                </p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  {currentClass.price}
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  *harga dapat berubah sesuai musim
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {currentClass.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
                    <feature.icon className="text-black" />
                    <span className="text-gray-700">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 cursor-pointer transition-colors font-semibold">
                Lihat Jadwal & Harga
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainClasses;
