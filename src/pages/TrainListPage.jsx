import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClock,
  FaUsers,
  FaDollarSign,
  FaTrain,
  FaFilter,
} from "react-icons/fa";
import useBookingStore from "@/store/bookingStore";
import { fetchTrains } from "@/services/mockApi";
import Button from "@/components/layout/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const TrainListPage = () => {
  const navigate = useNavigate();
  const { searchParams, setSelectedTrain } = useBookingStore();
  const [trains, setTrains] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ type: "all", priceRange: "all" });

  useEffect(() => {
    if (!searchParams.from) {
      navigate("/");
      return;
    }
    loadTrains();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, trains]);

  const loadTrains = async () => {
    setLoading(true);
    const data = await fetchTrains(
      searchParams.from,
      searchParams.to,
      searchParams.date,
      searchParams.passengers,
    );
    setTrains(data);
    setFilteredTrains(data);
    setLoading(false);
  };

  const applyFilters = () => {
    let filtered = [...trains];

    if (filters.type !== "all") {
      filtered = filtered.filter(
        (train) => train.type.toLowerCase() === filters.type,
      );
    }

    if (filters.priceRange !== "all") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filtered = filtered.filter(
        (train) => train.price >= min && (max ? train.price <= max : true),
      );
    }

    setFilteredTrains(filtered);
  };

  const handleSelectTrain = (train) => {
    setSelectedTrain(train);
    navigate("/seats");
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching for trains...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search Summary */}
          <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <h2 className="text-lg font-semibold">
              {searchParams.from} → {searchParams.to}
            </h2>
            <p className="text-gray-600">
              Date: {searchParams.date} | Passengers: {searchParams.passengers}{" "}
              | Class: {searchParams.class}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4 sticky top-20">
                <div className="flex items-center mb-4">
                  <FaFilter className="mr-2" />
                  <h3 className="font-semibold">Filters</h3>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Train Type
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) =>
                      setFilters({ ...filters, type: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="all">All Types</option>
                    <option value="superfast">Superfast</option>
                    <option value="premium">Premium</option>
                    <option value="express">Express</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) =>
                      setFilters({ ...filters, priceRange: e.target.value })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="all">All Prices</option>
                    <option value="0-50">Under $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Train List */}
            <div className="lg:w-3/4">
              <h1 className="text-2xl font-bold mb-6">
                Available Trains ({filteredTrains.length})
              </h1>

              <div className="space-y-4">
                {filteredTrains.map((train) => (
                  <div
                    key={train.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {train.name}
                        </h3>
                        <p className="text-gray-600">
                          {train.trainNo} • {train.type}
                        </p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-2xl font-bold text-blue-600">
                          ${train.price}
                        </p>
                        <p className="text-sm text-gray-500">per seat</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="flex items-center">
                        <FaClock className="text-gray-400 mr-2" />
                        <span className="text-sm">
                          {train.departure} → {train.arrival}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaUsers className="text-gray-400 mr-2" />
                        <span className="text-sm">
                          {train.availableSeats} seats available
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaTrain className="text-gray-400 mr-2" />
                        <span className="text-sm">
                          Duration: {train.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <FaDollarSign className="text-gray-400 mr-2" />
                        <span className="text-sm">
                          Total: ${train.price * searchParams.passengers}
                        </span>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleSelectTrain(train)}
                      className="w-full md:w-auto"
                    >
                      Select This Train
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrainListPage;
