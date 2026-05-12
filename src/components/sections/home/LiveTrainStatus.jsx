// components/sections/LiveTrainStatus.jsx
import { useState } from "react";
import {
  FaTrain,
  FaMapMarkerAlt,
  FaSearch,
  FaSpinner,
} from "react-icons/fa";

const LiveTrainStatus = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [trainStatus, setTrainStatus] = useState(null);

  // Mock data - In production, connect to real API
  const mockTrains = {
    "123A": {
      name: "Argo Bromo",
      from: "Jakarta (GMR)",
      to: "Surabaya (SBI)",
      departureTime: "08:00",
      arrivalTime: "15:30",
      status: "On Time",
      currentStation: "Cirebon",
      nextStation: "Tegal",
      platform: "3",
      delay: 0,
    },
    "456B": {
      name: "Taksaka",
      from: "Yogyakarta (YK)",
      to: "Jakarta (GMR)",
      departureTime: "14:30",
      arrivalTime: "22:00",
      status: "Delayed",
      currentStation: "Purwokerto",
      nextStation: "Cirebon",
      platform: "2",
      delay: 25,
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!trainNumber) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setTrainStatus(mockTrains[trainNumber.toUpperCase()] || null);
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "On Time":
        return "text-green-600 bg-green-50";
      case "Delayed":
        return "text-red-600 bg-red-50";
      default:
        return "text-yellow-600 bg-yellow-50";
    }
  };

  return (
    <section className="py-16 bg-linear-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-4">
              <FaTrain className="text-xs md:text-sm" />
              <span className="text-xs md:text-sm font-semibold">Real-Time Tracking</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cek Status Kereta <span className="text-red-600">Live</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pantau perjalanan kereta Anda secara real-time. Dapatkan informasi
              terkini tentang jadwal, keterlambatan, dan platform keberangkatan.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <FaTrain className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Masukkan nomor kereta (cth: 123A)"
                    value={trainNumber}
                    onChange={(e) => setTrainNumber(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Memeriksa...
                    </>
                  ) : (
                    <>
                      <FaSearch />
                      Cek Status
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                <span>Update setiap 30 detik</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                <span>Informasi platform & gerbang</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                <span>Notifikasi keterlambatan</span>
              </div>
            </div>
          </div>

          {/* Right Side - Result Card */}
          <div>
            {trainStatus ? (
              <div className="bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {trainStatus.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      No. Kereta {trainNumber.toUpperCase()}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(trainStatus.status)}`}
                  >
                    {trainStatus.status}
                    {trainStatus.delay > 0 && ` +${trainStatus.delay} menit`}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Berangkat</p>
                      <p className="font-semibold text-gray-900">
                        {trainStatus.departureTime}
                      </p>
                      <p className="text-sm text-gray-600">
                        {trainStatus.from}
                      </p>
                    </div>
                    <FaTrain className="text-red-600 text-xl" />
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Tiba</p>
                      <p className="font-semibold text-gray-900">
                        {trainStatus.arrivalTime}
                      </p>
                      <p className="text-sm text-gray-600">{trainStatus.to}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-red-600 text-sm" />
                      <span className="text-sm font-semibold text-gray-900">
                        Posisi Terkini
                      </span>
                    </div>
                    <p className="text-gray-700">
                      Sedang berada di{" "}
                      <span className="font-semibold">
                        {trainStatus.currentStation}
                      </span>
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Menuju: {trainStatus.nextStation}
                    </p>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-xl">
                    <span className="text-sm text-gray-700">Platform</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {trainStatus.platform}
                    </span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-semibold">
                  Dapatkan Notifikasi
                </button>
              </div>
            ) : trainNumber && !loading ? (
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                <FaTrain className="text-gray-300 text-5xl mx-auto mb-4" />
                <p className="text-gray-600">Kereta tidak ditemukan</p>
                <p className="text-sm text-gray-500 mt-2">
                  Periksa kembali nomor kereta Anda
                </p>
              </div>
            ) : (
              <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 text-center">
                <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FaTrain className="text-blue-600 text-4xl" />
                </div>
                <p className="text-gray-500 text-sm">
                  Masukkan nomor kereta untuk melihat status terkini
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTrainStatus;
