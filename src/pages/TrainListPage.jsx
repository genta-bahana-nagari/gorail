import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
} from "react";
import { FaFilter, FaArrowLeft, FaArrowRight, FaTrain } from "react-icons/fa";
import { fetchTrains } from "@/services/trainApi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrainCard from "@/components/sections/trains/TrainCard";
import SearchFilters from "@/components/sections/trains/SearchFilters";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import TrainSearchPanel from "@/components/sections/trains/TrainSearchPanel";

const SEARCH_INITIAL = {
  from: "",
  to: "",
  passengers: 1,
};

const FILTER_INITIAL = {
  trainType: "all",
  priceRange: "all",
  departureTime: "all",
};

const TRAINS_PER_PAGE = 6;

const TrainListPage = () => {
  const [searchParams, setSearchParams] = useState(SEARCH_INITIAL);
  const [filters, setFilters] = useState(FILTER_INITIAL);

  const [trains, setTrains] = useState([]);

  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadTrains = useCallback(async (params = SEARCH_INITIAL) => {
    try {
      setLoading(true);

      const data = await fetchTrains(
        params.from,
        params.to,
        "",
        params.passengers,
        "all",
      );

      setTrains(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTrains(searchParams);
  }, [loadTrains]);

  const handleSearchChange = useCallback(
    async (newSearch) => {
      setSearchParams(newSearch);
      setCurrentPage(1);
      await loadTrains(newSearch);
    },
    [loadTrains],
  );

  const handleSearchClear = useCallback(async () => {
    setSearchParams(SEARCH_INITIAL);
    setCurrentPage(1);
    await loadTrains(SEARCH_INITIAL);
  }, [loadTrains]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  }, []);

  const handleFilterClear = useCallback(() => {
    setFilters(FILTER_INITIAL);
    setCurrentPage(1);
  }, []);

  const filteredTrains = useMemo(() => {
    let result = [...trains];

    if (filters.trainType !== "all") {
      result = result.filter(
        (train) => train.type.toLowerCase() === filters.trainType.toLowerCase(),
      );
    }

    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);

      result = result.filter(
        (train) => train.price >= min && train.price <= max,
      );
    }

    if (filters.departureTime !== "all") {
      result = result.filter((train) => {
        const hour = Number(train.departure.split(":")[0]);

        switch (filters.departureTime) {
          case "morning":
            return hour < 12;

          case "afternoon":
            return hour >= 12 && hour < 17;

          case "evening":
            return hour >= 17;

          default:
            return true;
        }
      });
    }

    return result;
  }, [trains, filters]);

  const totalPages = Math.ceil(filteredTrains.length / TRAINS_PER_PAGE);

  const indexOfFirstTrain = (currentPage - 1) * TRAINS_PER_PAGE;
  const indexOfLastTrain = indexOfFirstTrain + TRAINS_PER_PAGE;

  const currentTrains = filteredTrains.slice(
    indexOfFirstTrain,
    indexOfLastTrain,
  );

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />

        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner message="Mencari jadwal kereta terbaik untuk Anda..." />
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-linear-to-b from-black via-zinc-900 to-black overflow-hidden border-b border-red-900/30">
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

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-50 bg-red-600/10 blur-3xl rounded-full" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
            <div className="flex justify-center items-center gap-3 mb-6">
              <div className="w-10 h-px bg-red-600/70" />
              <div className="w-2 h-2 rotate-45 bg-red-600" />
              <div className="w-10 h-px bg-red-600/70" />
            </div>

            <div className="text-center">
              <h1 className="railway-title text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Temukan Jadwal
                <span className="block mt-1">Perjalanan Kereta</span>
              </h1>

              <p className="mt-5 text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Nikmati perjalanan yang nyaman, aman, dan tepat waktu bersama
                GoRail.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
              <TrainSearchPanel
                filters={searchParams}
                onFilterChange={handleSearchChange}
                onClear={handleSearchClear}
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="hidden lg:block lg:w-80">
              <div className="sticky top-24">
                <SearchFilters
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClear={handleFilterClear}
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setShowFilters((prev) => !prev)}
                  className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-lg shadow-sm"
                >
                  <FaFilter className="text-red-600" />
                  <span className="font-serif">Filter Kereta</span>
                </button>

                {showFilters && (
                  <div className="mt-4">
                    <SearchFilters
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onClear={handleFilterClear}
                    />{" "}
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="text-xs md:text-sm lg:text-base">
                  <p className="railway-body text-gray-600">
                    Menampilkan{" "}
                    <span className="font-bold text-gray-900">
                      {currentTrains.length}
                    </span>{" "}
                    dari{" "}
                    <span className="font-bold text-gray-900">
                      {filteredTrains.length}
                    </span>{" "}
                    kereta
                  </p>
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="railway-caption">Urutkan: </span>
                  <select className="border border-gray-300 rounded-md px-2 py-1 text-xs md:text-sm">
                    <option>Termurah</option>
                    <option>Tercepat</option>
                    <option>Berangkat Pagi</option>
                  </select>
                </div>
              </div>

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
                    />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <button
                    onClick={() =>
                      setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="cursor-pointer p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-600 transition"
                  >
                    <FaArrowLeft className="text-sm" />
                  </button>

                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }, (_, index) => {
                      const page = index + 1;

                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`cursor-pointer w-10 h-10 rounded-md border transition ${
                            currentPage === page
                              ? "bg-red-600 border-red-600 text-white"
                              : "bg-white border-gray-300 hover:border-red-600"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((page) => Math.min(page + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="cursor-pointer p-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:border-red-600 transition"
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
