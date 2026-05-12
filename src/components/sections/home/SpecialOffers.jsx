// components/sections/SpecialOffers.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTicketAlt, FaClock, FaGift, FaArrowRight } from "react-icons/fa";

const offersData = [
  {
    id: 1,
    title: "Diskon Akhir Pekan",
    discount: 20,
    code: "WEEKEND20",
    validUntil: new Date("2026-06-25T23:59:59"),
    description: "Nikmati diskon khusus untuk perjalanan akhir pekan",
  },
  {
    id: 2,
    title: "Early Bird Special",
    discount: 15,
    code: "EARLY15",
    validUntil: new Date("2026-06-15T23:59:59"),
    description: "Pesan H-7 dan dapatkan potongan harga",
  },
  {
    id: 3,
    title: "Group Booking",
    discount: 25,
    code: "GROUP25",
    validUntil: new Date("2026-07-01T23:59:59"),
    description: "Minimal 5 orang dalam satu pemesanan",
  },
];

const SpecialOffers = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update waktu setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Cari promo terdekat untuk flash sale
  const nearestOffer = offersData
    .filter((offer) => offer.validUntil > currentTime)
    .sort((a, b) => a.validUntil - b.validUntil)[0];

  // Countdown flash sale
  const getTimeLeft = (targetDate) => {
    if (!targetDate) return null;

    const difference = targetDate - currentTime;

    if (difference <= 0) {
      return {
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    // Perhitungan kasar
    const totalSeconds = Math.floor(difference / 1000);

    const months = Math.floor(totalSeconds / (30 * 24 * 60 * 60));
    const days = Math.floor(
      (totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60),
    );
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return {
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const timeLeft = getTimeLeft(nearestOffer?.validUntil);

  return (
    <section className="relative -mt-10 md:-mt-14 py-16 bg-linear-to-br from-red-600 to-red-800">
      <div className="max-w-7xl mx-auto px-4 mt-6 md:mt-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <FaGift className="text-white" />
            <span className="text-white font-semibold text-sm">
              Promo Terbatas
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Penawaran Spesial
          </h2>

          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>

          <p className="text-white/90 max-w-2xl mx-auto">
            Dapatkan diskon menarik untuk perjalanan Anda.
          </p>
        </div>

        {/* Flash Sale */}
        {nearestOffer && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FaClock className="text-white text-2xl animate-pulse" />

                <div>
                  <p className="text-white font-semibold">
                    Promo terdekat berakhir dalam:
                  </p>

                  <p className="text-white/70 text-sm">{nearestOffer.title}</p>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap justify-center">
                {[
                  {
                    label: "Bulan",
                    value: timeLeft?.months || 0,
                  },
                  {
                    label: "Hari",
                    value: timeLeft?.days || 0,
                  },
                  {
                    label: "Jam",
                    value: timeLeft?.hours || 0,
                  },
                  {
                    label: "Menit",
                    value: timeLeft?.minutes || 0,
                  },
                  {
                    label: "Detik",
                    value: timeLeft?.seconds || 0,
                  },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-white rounded-lg px-4 py-2 min-w-17.5">
                      <span className="text-2xl font-bold text-red-600">
                        {String(item.value).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-white text-xs mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Offers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offersData.map((offer) => {
            const isExpired = currentTime > offer.validUntil;

            return (
              <div
                key={offer.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300
                  ${
                    isExpired
                      ? "opacity-60 grayscale"
                      : "hover:shadow-2xl hover:-translate-y-1"
                  }
                `}
              >
                <div className="bg-linear-to-r from-red-500 to-red-600 p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold text-3xl">
                      {offer.discount}%
                    </span>

                    <FaTicketAlt className="text-white/30 text-5xl" />
                  </div>

                  <h3 className="text-white font-bold text-xl mt-2">
                    {offer.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">
                    {offer.description}
                  </p>

                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Kode Promo</p>

                    <p className="font-mono font-bold text-red-600 text-lg">
                      {offer.code}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mb-4">
                    Berlaku hingga{" "}
                    {offer.validUntil.toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <button
                    disabled={isExpired}
                    onClick={() => navigate("/trains")}
                    className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors
                      ${
                        isExpired
                          ? "bg-gray-400 cursor-not-allowed text-white"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }
                    `}
                  >
                    {isExpired ? "Promo Berakhir" : "Pesan Sekarang"}

                    {!isExpired && <FaArrowRight className="text-sm" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Terms */}
        <p className="text-center text-white/70 text-xs mt-8">
          *Syarat dan ketentuan berlaku.
        </p>
      </div>
    </section>
  );
};

export default SpecialOffers;
