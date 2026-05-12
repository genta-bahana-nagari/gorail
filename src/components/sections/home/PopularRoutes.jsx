// components/sections/PopularRoutes.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrain, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const PopularRoutes = () => {
  const navigate = useNavigate();
  const [setHoveredRoute] = useState(null);

  const routes = [
    {
      id: 1,
      from: "Jakarta",
      fromCode: "GMR",
      to: "Bandung",
      toCode: "BD",
      duration: "3 jam",
      price: "Rp 150.000",
      frequency: "20x/hari",
      image:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      from: "Surabaya",
      fromCode: "SBI",
      to: "Yogyakarta",
      toCode: "YK",
      duration: "4 jam",
      price: "Rp 200.000",
      frequency: "15x/hari",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      from: "Semarang",
      fromCode: "SMC",
      to: "Jakarta",
      toCode: "GMR",
      duration: "5 jam",
      price: "Rp 250.000",
      frequency: "12x/hari",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      from: "Malang",
      fromCode: "MLG",
      to: "Surabaya",
      toCode: "SBI",
      duration: "2 jam",
      price: "Rp 80.000",
      frequency: "18x/hari",
      image:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rute Populer
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan rute favorit dengan jadwal terbaik dan harga terjangkau
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredRoute(route.id)}
              onMouseLeave={() => setHoveredRoute(null)}
              onClick={() => navigate("/trains")}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-40 lg:h-65 overflow-hidden">
                  <img
                    src={route.image}
                    alt={`${route.from} to ${route.to}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between text-white text-sm font-semibold">
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-red-500" />
                        {route.fromCode}
                      </span>
                      <span className="flex items-center gap-1">
                        {route.toCode}
                        <FaMapMarkerAlt className="text-red-500" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <span>{route.from}</span>
                      <FaArrowRight />
                      <span>{route.to}</span>
                    </h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaClock className="text-red-500" />
                      <span>{route.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaTrain className="text-red-500" />
                      <span>{route.frequency}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <p className="text-xl font-bold text-red-600">
                        {route.price}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 text-sm font-medium">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/trains")}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold"
          >
            Lihat Semua Rute
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
