import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFilter,
  FaArrowLeft,
  FaArrowRight,
  FaEdit,
  FaTrain,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";
import useBookingStore from "@/store/bookingStore";
import { fetchTrains } from "@/services/mockApi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrainCard from "@/components/sections/trains/TrainCard";
import SearchFilters from "@/components/sections/trains/SearchFilters";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const TrainListPage = () => {
  const navigate = useNavigate();
  const { searchParams, setSelectedTrain } = useBookingStore();
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const trainsPerPage = 5;

  const loadTrains = useCallback(async () => {
    setLoading(true);

    const data = await fetchTrains(
      searchParams.from || "",
      searchParams.to || "",
      searchParams.date || "",
      searchParams.passengers || 1,
    );

    setTrains(data);
    setFilteredTrains(data);
    setLoading(false);
  }, [
    searchParams.from,
    searchParams.to,
    searchParams.date,
    searchParams.passengers,
  ]);

  useEffect(() => {
    loadTrains();
  }, [loadTrains]);

  const handleFilterChange = (filters) => {
    let filtered = [...trains];

    if (filters.trainType !== "all") {
      filtered = filtered.filter(
        (train) => train.type.toLowerCase() === filters.trainType.toLowerCase(),
      );
    }

    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filtered = filtered.filter(
        (train) => train.price >= min && (max ? train.price <= max : true),
      );
    }

    if (filters.departureTime !== "all") {
      filtered = filtered.filter((train) => {
        const hour = parseInt(train.departure.split(":")[0]);
        if (filters.departureTime === "morning") return hour < 12;
        if (filters.departureTime === "afternoon")
          return hour >= 12 && hour < 17;
        if (filters.departureTime === "evening") return hour >= 17;
        return true;
      });
    }

    setFilteredTrains(filtered);
    setCurrentPage(1);
  };

  const handleSelectTrain = (train) => {
    setSelectedTrain(train);
    navigate("/seats");
  };

  // Pagination
  const indexOfLastTrain = currentPage * trainsPerPage;
  const indexOfFirstTrain = indexOfLastTrain - trainsPerPage;
  const currentTrains = filteredTrains.slice(
    indexOfFirstTrain,
    indexOfLastTrain,
  );
  const totalPages = Math.ceil(filteredTrains.length / trainsPerPage);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner message="Mencari jadwal kereta terbaik untuk Anda..." />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-gray-50">
        {/* Hero Banner - Improved Version */}
        <div className="relative bg-linear-to-b from-black via-zinc-900 to-black overflow-hidden border-b border-red-900/30">
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Accent Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-red-600/10 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
            {/* Top Ornament */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-10 h-px bg-red-600/70" />
              <div className="w-2 h-2 rotate-45 bg-red-600" />
              <div className="w-10 h-px bg-red-600/70" />
            </div>

            {/* Heading */}
            <div className="text-center">
              <h1 className="railway-title text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Temukan Perjalanan
                <span className="block mt-1">Kereta Anda</span>
              </h1>

              <p className="mt-5 text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Nikmati perjalanan yang nyaman, aman, dan tepat waktu bersama
                GoRail.
              </p>
            </div>

            {/* Journey Card */}
            <div className="max-w-4xl mx-auto mt-10">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {/* Route */}
                  <div className="p-6 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-red-400 mb-3">
                      Rute
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      <span className="text-lg md:text-xl font-semibold text-white">
                        {searchParams.from || "Jakarta"}
                      </span>

                      <div className="flex items-center gap-1 text-red-500">
                        <div className="w-6 h-px bg-gray-500" />
                        <FaTrain className="text-xs" />
                        <div className="w-6 h-px bg-gray-500" />
                      </div>

                      <span className="text-lg md:text-xl font-semibold text-white">
                        {searchParams.to || "Surabaya"}
                      </span>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="p-6 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-red-400 mb-3">
                      Keberangkatan
                    </p>

                    <div className="flex items-center justify-center gap-2 text-white">
                      <FaCalendarAlt className="text-red-500 text-sm" />
                      <span className="font-medium">
                        {searchParams.date || "15 Jan 2025"}
                      </span>
                    </div>
                  </div>

                  {/* Passengers */}
                  <div className="p-6 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-red-400 mb-3">
                      Penumpang
                    </p>

                    <div className="flex items-center justify-center gap-2 text-white">
                      <FaUsers className="text-red-500 text-sm" />
                      <span className="font-medium">
                        {searchParams.passengers || 1} Penumpang
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 px-6 py-4 flex justify-center bg-black/20">
                  <button
                    onClick={() => navigate("/")}
                    className="group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all"
                  >
                    <FaEdit className="text-xs group-hover:text-red-500 transition-colors" />
                    <span className="tracking-wide">Ubah Pencarian</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block lg:w-80">
              <div className="sticky top-24">
                <SearchFilters onFilterChange={handleFilterChange} />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-lg shadow-sm"
                >
                  <FaFilter className="text-red-600" />
                  <span className="font-serif">Filter Kereta</span>
                </button>

                {/* Mobile Filters Drawer */}
                {showFilters && (
                  <div className="mt-4">
                    <SearchFilters onFilterChange={handleFilterChange} />
                  </div>
                )}
              </div>

              {/* Results Summary */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="railway-body text-gray-600">
                    Menampilkan{" "}
                    <span className="font-bold text-gray-900">
                      {filteredTrains.length}
                    </span>{" "}
                    kereta
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  <span className="railway-caption">Urutkan: </span>
                  <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
                    <option>Termurah</option>
                    <option>Tercepat</option>
                    <option>Berangkat Pagi</option>
                  </select>
                </div>
              </div>

              {/* Train List */}
              {currentTrains.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <FaTrain className="text-6xl text-gray-300 mx-auto mb-4" />
                  <h3 className="railway-title text-xl font-bold text-gray-700 mb-2">
                    Tidak Ada Kereta Tersedia
                  </h3>
                  <p className="railway-body text-gray-500">
                    Coba ubah tanggal atau rute perjalanan Anda
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentTrains.map((train) => (
                    <TrainCard
                      key={train.id}
                      train={train}
                      passengers={searchParams.passengers || 1}
                      onSelect={() => handleSelectTrain(train)}
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-600 transition"
                  >
                    <FaArrowLeft className="text-sm" />
                  </button>

                  <span className="px-4 py-2 bg-red-600 text-white rounded-md">
                    {currentPage}
                  </span>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-600 transition"
                  >
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrainListPage;
