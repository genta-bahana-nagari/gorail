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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nearestOffer = offersData
    .filter((offer) => offer.validUntil > currentTime)
    .sort((a, b) => a.validUntil - b.validUntil)[0];

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
    <section className="relative -mt-10 md:-mt-20 pt-28 md:pt-36 pb-20 bg-linear-to-b from-red-700 to-red-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full mb-5">
            <FaGift className="text-white" />

            <span className="text-white font-semibold text-sm">
              Promo Terbatas
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Penawaran Spesial
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto">
            Dapatkan promo perjalanan terbaik dengan harga lebih hemat.
          </p>
        </div>

        {/* Countdown */}
        {nearestOffer && (
          <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-5 md:p-8 mb-12">
            <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4 text-center xl:text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                  <FaClock className="text-white text-2xl animate-pulse" />
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">
                    Promo terdekat berakhir dalam
                  </p>

                  <p className="text-white/70 text-sm">{nearestOffer.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 md:gap-5">
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
                    <div className="bg-white rounded-2xl min-w-18 md:min-w-22 px-4 py-3">
                      <span className="text-2xl md:text-3xl font-bold text-red-600">
                        {String(item.value).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-white text-xs mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {offersData.map((offer) => {
            const isExpired = currentTime > offer.validUntil;

            return (
              <div
                key={offer.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-2xl transition-transform transition-shadow transition-opacity duration-300 ${
                  isExpired
                    ? "opacity-60 grayscale cursor-default"
                    : "cursor-pointer hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
                }`}
              >
                <div className="bg-linear-to-r from-red-500 to-red-600 p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-4xl font-bold">
                      {offer.discount}%
                    </span>

                    <FaTicketAlt className="text-white/30 text-5xl" />
                  </div>

                  <h3 className="text-white text-xl font-bold mt-3">
                    {offer.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-5">
                    {offer.description}
                  </p>

                  <div className="bg-gray-100 rounded-2xl p-4 mb-5">
                    <p className="text-xs text-gray-500 mb-1">Kode Promo</p>

                    <p className="font-mono text-xl font-bold text-red-600">
                      {offer.code}
                    </p>
                  </div>

                  <p className="text-xs text-gray-500 mb-5">
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
                    className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${
                      isExpired
                        ? "bg-gray-400 cursor-not-allowed text-white"
                        : "bg-red-600 hover:bg-red-700 text-white cursor-pointer"
                    }`}
                  >
                    {isExpired ? "Promo Berakhir" : "Pesan Sekarang"}

                    {!isExpired && <FaArrowRight className="text-sm" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/60 text-xs mt-10">
          *Syarat dan ketentuan berlaku.
        </p>
      </div>
    </section>
  );
};

export default SpecialOffers;
