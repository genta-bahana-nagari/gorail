import {
  FaQrcode,
  FaApple,
  FaAndroid,
  FaBolt,
  FaBell,
  FaShieldAlt,
} from "react-icons/fa";
import { IoCloudOffline } from "react-icons/io5";

const MobileAppPromo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4">
              <FaBolt className="text-xs md:text-sm" />
              <span className="text-xs md:text-sm font-semibold">
                Download Aplikasi GoRail
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perjalanan Lebih Mudah dengan{" "}
              <span className="text-red-600">Aplikasi Mobile</span>
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Dapatkan pengalaman pemesanan tiket yang lebih cepat dan praktis.
              Pesan kapan saja, di mana saja dengan aplikasi GoRail.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <IoCloudOffline className="text-green-600 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Akses Offline</h4>
                  <p className="text-sm text-gray-600">
                    Akses tiket Anda bahkan tanpa koneksi internet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FaBell className="text-blue-600 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Notifikasi Real-Time
                  </h4>
                  <p className="text-sm text-gray-600">
                    Dapatkan update jadwal dan promo langsung di HP Anda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <FaShieldAlt className="text-purple-600 text-sm" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Keamanan Terjamin
                  </h4>
                  <p className="text-sm text-gray-600">
                    Teknologi enkripsi untuk melindungi data Anda
                  </p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition group">
                <FaApple className="text-2xl group-hover:scale-110 transition" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </button>

              <button className="cursor-pointer flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition group">
                <FaAndroid className="text-2xl group-hover:scale-110 transition" />
                <div className="text-left">
                  <p className="text-xs">Get it on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Mockup Phone */}
          <div className="relative flex justify-center">
            <div className="relative w-64 md:w-80">
              <div className="bg-gray-900 rounded-3xl p-3 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-linear-to-br from-red-500 to-red-600 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <FaQrcode className="text-white text-xl" />
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                    </div>
                    <h3 className="text-white font-bold text-lg">GoRail</h3>
                    <p className="text-white/80 text-xs">
                      Tiket Kereta Digital
                    </p>
                  </div>

                  <div className="p-4">
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-500">
                          Jakarta → Bandung
                        </span>
                        <FaQrcode className="text-gray-400 text-lg" />
                      </div>
                      <p className="font-bold text-gray-900">
                        Argo Parahyangan
                      </p>
                      <p className="text-xs text-gray-500">08:00 - 11:00</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Platform</p>
                        <p className="font-bold text-red-600">3</p>
                      </div>
                      <div className="flex-1 h-px bg-gray-200 mx-2"></div>
                      <div className="text-center">
                        <p className="text-xs text-gray-500">Gerbang</p>
                        <p className="font-bold text-red-600">A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppPromo;
