import { FaFilter, FaTimes } from "react-icons/fa";

const SearchFilters = ({ filters, onFilterChange, onClear }) => {
  const handleChange = ({ target: { name, value } }) => {
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaFilter className="text-red-600" />
          <h3 className="font-serif font-semibold text-gray-800">Filter</h3>
        </div>

        <button
          type="button"
          onClick={onClear}
          className="flex items-center gap-1 text-sm text-gray-500 transition hover:text-red-600"
        >
          <FaTimes size={12} />
          Reset
        </button>
      </div>

      <div className="space-y-4">
        {/* Tipe Kereta */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Tipe Kereta
          </label>

          <select
            name="trainType"
            value={filters.trainType}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            <option value="all">Semua Tipe</option>
            <option value="superfast">Superfast</option>
            <option value="premium">Premium</option>
            <option value="express">Express</option>
            <option value="local">Lokal</option>
          </select>
        </div>

        {/* Harga */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Rentang Harga
          </label>

          <select
            name="priceRange"
            value={filters.priceRange}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            <option value="all">Semua Harga</option>
            <option value="0-100000">Di bawah Rp100.000</option>
            <option value="100000-200000">Rp100.000 - Rp200.000</option>
            <option value="200000-300000">Rp200.000 - Rp300.000</option>
            <option value="300000-500000">Rp300.000 - Rp500.000</option>
            <option value="500000-999999999">Di atas Rp500.000</option>
          </select>
        </div>

        {/* Waktu */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Waktu Keberangkatan
          </label>

          <select
            name="departureTime"
            value={filters.departureTime}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500"
          >
            <option value="all">Semua Waktu</option>

            <option value="morning">Pagi (00:00 - 12:00)</option>

            <option value="afternoon">Siang (12:00 - 17:00)</option>

            <option value="evening">Malam (17:00 - 23:59)</option>
          </select>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-4">
        <p className="railway-caption text-center text-xs text-gray-400">
          GoRail • Est. 2026
        </p>
      </div>
    </div>
  );
};

export default SearchFilters;
