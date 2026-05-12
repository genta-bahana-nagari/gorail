import { FaSearch, FaTicketAlt, FaQrcode, FaTrain } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Cari & Pilih",
      description:
        "Cari rute, tanggal perjalanan, dan pilih kereta favorit Anda",
    },
    {
      id: 2,
      icon: FaTicketAlt,
      title: "Pesan & Bayar",
      description: "Isi data penumpang dan selesaikan pembayaran dengan aman",
    },
    {
      id: 3,
      icon: FaQrcode,
      title: "E-Ticket",
      description: "Terima tiket digital dengan kode QR langsung di email Anda",
    },
    {
      id: 4,
      icon: FaTrain,
      title: "Nikmati Perjalanan",
      description: "Tunjukkan tiket di pintu masuk dan nikmati perjalanan Anda",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center rounded-full bg-red-100 px-4 py-1 text-xs md:text-sm font-semibold text-red-600">
            Mudah & Cepat
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900">
            Cara Memesan Tiket
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Hanya 4 langkah mudah untuk memulai perjalanan Anda bersama GoRail
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="cursor-pointer group relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute top-5 right-5 w-5 md:w-9 h-5 md:h-9 rounded-full bg-gray-900 text-white text-xs md:text-sm font-bold flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>

                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-linear-to-b from-red-600 to-red-500 flex items-center justify-center text-white text-xl md:text-2xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <step.icon />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-3xl bg-linear-to-t from-red-600 to-red-500 p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">
                10.000+
              </h3>
              <p className="text-red-100 font-medium">Penumpang Puas</p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">500+</h3>
              <p className="text-red-100 font-medium">Rute Aktif</p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-2">24/7</h3>
              <p className="text-red-100 font-medium">Dukungan Pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
