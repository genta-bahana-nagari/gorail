// components/sections/PopularRoutes.jsx
import { useNavigate } from "react-router-dom";
import { FaTrain, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import popularRoutesData from "@/data/popularRoutes";

const PopularRoutes = () => {
  const navigate = useNavigate();

  const routes = popularRoutesData.map((route, index) => ({
    id: index + 1,
    from: route.from,
    fromCode: route.from.substring(0, 3).toUpperCase(),
    to: route.to,
    toCode: route.to.substring(0, 3).toUpperCase(),
    duration: `${Math.floor(route.count / 100) + 2} jam`,
    price: `Rp ${Math.floor(route.count * 150).toLocaleString("id-ID")}`,
    frequency: `${Math.floor(route.count / 100)}x/hari`,
    image:
      index % 2 === 0
        ? "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop"
        : "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
  }));

  return (
    <section className="py-16 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Rute Populer
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan rute favorit dengan jadwal terbaik dan harga terjangkau
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          {routes.map((route) => (
            <div
              key={route.id}
              className="group cursor-pointer"
              onClick={() => navigate("/trains")}
            >
              <div className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow,transition-transform duration-300 transform hover:-translate-y-2">
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
                    <button className="cursor-pointer px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300 text-sm font-medium">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/trains")}
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-colors duration-300 font-semibold"
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
