import { BsExclamationCircle } from "react-icons/bs";
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
        <div className="text-center max-w-3xl mx-auto mb-8">
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

        <div className="max-w-3xl mx-auto my-8">
          <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
            <BsExclamationCircle className="mt-0.5 h-5 w-5 shrink-0 text-gray-600" />
            <p className="text-sm leading-6 text-gray-900">
              <span className="font-semibold">Perhatian:</span> Pemesanan tiket
              hanya dapat dilakukan melalui aplikasi. Website ini hanya
              menyediakan informasi rute kereta dan kontak bantuan.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="group relative cursor-pointer rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-b from-red-600 to-red-500 text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <step.icon />
                </div>

                <div className="text-center">
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-3xl bg-linear-to-t from-red-600 to-red-500 p-10 shadow-2xl">
          <div className="grid grid-cols-1 gap-10 text-center text-white md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-4xl font-extrabold md:text-5xl">
                10.000+
              </h3>
              <p className="font-medium text-red-100">Penumpang Puas</p>
            </div>

            <div>
              <h3 className="mb-2 text-4xl font-extrabold md:text-5xl">500+</h3>
              <p className="font-medium text-red-100">Rute Aktif</p>
            </div>

            <div>
              <h3 className="mb-2 text-4xl font-extrabold md:text-5xl">24/7</h3>
              <p className="font-medium text-red-100">Dukungan Pelanggan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
