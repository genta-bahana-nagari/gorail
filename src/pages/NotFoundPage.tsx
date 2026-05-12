import { useNavigate } from "react-router-dom";
import { FaTrain, FaHome, FaArrowLeft, FaHeadset } from "react-icons/fa";

const NotFoundSimple = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-l-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-px bg-red-700"></div>
          <div className="w-16 h-px bg-red-700"></div>
        </div>

        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold text-gray-700">
            404
          </div>
        </div>

        <h1 className="railway-title text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Wah, Tersesat?
        </h1>
        <p className="railway-body text-gray-600 mb-6">
          Sepertinya kereta Anda mengambil jalur yang salah. <br />
          Halaman yang Anda cari tidak dapat ditemukan.
        </p>

        <div className="w-20 h-px bg-red-700 mx-auto mb-6"></div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 hover:border-red-700 hover:text-red-700 rounded-lg transition-all duration-300"
          >
            <FaArrowLeft />
            <span>Kembali</span>
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-700 text-white hover:bg-red-800 rounded-lg transition-all duration-300"
          >
            <FaHome />
            <span>Beranda</span>
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Butuh bantuan?{" "}
          <button
            onClick={() => navigate("/contact")}
            className="text-red-700 hover:underline"
          >
            Hubungi Kami
          </button>
        </p>

        <div className="flex justify-center mt-8">
          <div className="w-12 h-px bg-gray-300"></div>
          <div className="w-12 h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundSimple;
