import { useState } from "react";
import {
  FaEnvelope,
  FaPaperPlane,
  FaGift,
  FaCheckCircle,
} from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-linear-to-r from-red-600 to-red-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <FaEnvelope className="text-white text-2xl" />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Dapatkan Penawaran Eksklusif
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Berlangganan newsletter kami dan dapatkan promo khusus, diskon early
            bird, dan info jadwal terbaru langsung di email Anda
          </p>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <FaGift className="text-yellow-400 text-sm" />
              <span className="text-white text-sm">
                Diskon 10% untuk member baru
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <FaCheckCircle className="text-green-400 text-sm" />
              <span className="text-white text-sm">
                Akses early bird ticket
              </span>
            </div>
          </div>

          {/* Subscription Form */}
          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Masukkan alamat email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 cursor-pointer bg-white text-gray-900 rounded-xl hover:bg-gray-900/80 hover:text-white transition font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  "Memproses..."
                ) : (
                  <>
                    <FaPaperPlane />
                    Berlangganan
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="bg-green-500 text-white rounded-xl p-4 max-w-md mx-auto animate-pulse">
              <div className="flex items-center justify-center gap-2">
                <FaCheckCircle className="text-xl" />
                <span className="font-semibold">
                  Terima kasih telah berlangganan!
                </span>
              </div>
              <p className="text-sm mt-1">
                Cek email Anda untuk mendapatkan kupon diskon 10%
              </p>
            </div>
          )}

          {/* Trust Text */}
          <p className="text-white/60 text-xs mt-6">
            Kami tidak akan mengirim spam. Anda dapat berhenti berlangganan
            kapan saja.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
