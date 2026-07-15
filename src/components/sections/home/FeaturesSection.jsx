import {
  FaShieldAlt,
  FaWallet,
  FaHeadset,
  FaMapMarkedAlt,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-red-600 text-xl" />,
      title: "Pemesanan Aman",
      description:
        "Transaksi dan data perjalanan Anda terlindungi dengan sistem keamanan modern.",
    },
    {
      icon: <FaWallet className="text-red-600 text-xl" />,
      title: "Harga Terbaik",
      description:
        "Nikmati harga tiket kompetitif dengan berbagai promo perjalanan menarik.",
    },
    {
      icon: <FaHeadset className="text-red-600 text-xl" />,
      title: "Layanan 24/7",
      description:
        "Tim kami siap membantu kapan saja untuk memastikan perjalanan tetap nyaman.",
    },
    {
      icon: <FaMapMarkedAlt className="text-red-600 text-xl" />,
      title: "Pelacakan Langsung",
      description:
        "Pantau posisi dan jadwal kereta secara real-time dengan mudah.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full mx-auto px-6 lg:px-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="railway-subtitle text-red-600">Mengapa GoRail</span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-5">
            Pengalaman Perjalanan yang Modern
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
            Kami menghadirkan pengalaman perjalanan kereta yang lebih praktis,
            nyaman, dan elegan untuk setiap penumpang.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center group bg-white border border-gray-200 rounded-3xl px-6 py-8 hover:border-red-100 hover:shadow-xl transition-[border-color,box-shadow] duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex  items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 ">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
