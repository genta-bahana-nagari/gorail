import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTrain,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-neutral-900/95 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <FaTrain className="text-red-500 text-2xl" />
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight">GoRail</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solusi perjalanan kereta api modern yang menghubungkan Anda ke
              berbagai destinasi dengan kenyamanan dan kemudahan.
            </p>
            <div className="flex space-x-4 pt-2">
              <FaTwitter className="text-xl text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <FaFacebook className="text-xl text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <FaInstagram className="text-xl text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <FaLinkedin className="text-xl text-gray-400 hover:text-red-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative inline-block">
              Tautan Cepat
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500 mt-1"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/trains"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Cari Kereta
                </a>
              </li>
              <li>
                <a
                  href="/my-bookings"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Pemesanan Saya
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative inline-block">
              Bantuan
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500 mt-1"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-sm"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-5 relative inline-block">
              Hubungi Kami
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-red-500 mt-1"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-red-500 mt-0.5 shrink-0" />
                <span>Jl. Kereta Api No. 123, Jakarta Pusat, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <FaPhone className="text-red-500 shrink-0" />
                <a
                  href="tel:+622112345678"
                  className="hover:text-red-500 transition-colors"
                >
                  +62 21 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <FaEnvelope className="text-red-500 shrink-0" />
                <a
                  href="mailto:info@gorail.com"
                  className="hover:text-red-500 transition-colors"
                >
                  info@gorail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-lg font-semibold mb-3">Tetap Terhubung</h4>
            <p className="text-gray-300 text-sm mb-4">
              Dapatkan info promo dan jadwal terbaru langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors text-sm"
              />
              <button className="px-6 py-2 cursor-pointer bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-300 font-medium text-sm">
                Berlangganan
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} GoRail. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex gap-6 text-xs md:text-sm text-center md:text-start">
              <a
                href="/terms"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Kebijakan Privasi
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                Kebijakan Cookie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
