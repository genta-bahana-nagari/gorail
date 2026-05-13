import { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

const SearchFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    trainType: "all",
    priceRange: "all",
    departureTime: "all",
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      trainType: "all",
      priceRange: "all",
      departureTime: "all",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FaFilter className="text-red-600" />
          <h3 className="font-serif font-semibold text-gray-800">Filter</h3>
        </div>
        <button
          onClick={clearFilters}
          className="text-sm text-gray-500 hover:text-red-600 transition flex items-center gap-1"
        >
          <FaTimes size={12} />
          Reset
        </button>
      </div>

      <div className="space-y-4">
        {/* Train Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipe Kereta
          </label>
          <select
            value={filters.trainType}
            onChange={(e) => handleFilterChange("trainType", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          >
            <option value="all">Semua Tipe</option>
            <option value="superfast">Superfast</option>
            <option value="premium">Premium</option>
            <option value="express">Express</option>
            <option value="local">Lokal</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Rentang Harga
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          >
            <option value="all">Semua Harga</option>
            <option value="0-100">Di bawah Rp 100.000</option>
            <option value="100-200">Rp 100.000 - 200.000</option>
            <option value="200-300">Rp 200.000 - 300.000</option>
            <option value="300-500">Rp 300.000 - 500.000</option>
            <option value="500-1000">Di atas Rp 500.000</option>
          </select>
        </div>

        {/* Departure Time Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Waktu Keberangkatan
          </label>
          <select
            value={filters.departureTime}
            onChange={(e) =>
              handleFilterChange("departureTime", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
          >
            <option value="all">Semua Waktu</option>
            <option value="morning">Pagi (00:00 - 12:00)</option>
            <option value="afternoon">Siang (12:00 - 17:00)</option>
            <option value="evening">Malam (17:00 - 23:59)</option>
          </select>
        </div>
      </div>

      {/* Ornamental Divider */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center railway-caption">
          GO RAIL • EST. 2026
        </p>
      </div>
    </div>
  );
};

export default SearchFilters;
