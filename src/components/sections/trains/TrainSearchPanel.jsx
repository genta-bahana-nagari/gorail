import { FaTrain, FaUsers, FaTimes } from "react-icons/fa";
import { getAvailableCities } from "@/services/trainApi";

const cities = getAvailableCities();
const passengerOptions = [1, 2, 3, 4, 5, 6];

const TrainSearchPanel = ({ filters, onFilterChange, onClear }) => {
  const handleChange = ({ target: { name, value } }) => {
    onFilterChange({
      ...filters,
      [name]: name === "passengers" ? Number(value) : value,
    });
  };

  const fromCities = cities.filter((city) => city !== filters.to);
  const toCities = cities.filter((city) => city !== filters.from);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
        {/* Dari */}
        <div className="p-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400">
            Dari
          </p>

          <div className="flex items-center justify-center gap-3">
            <FaTrain className="text-red-500" />

            <select
              name="from"
              value={filters.from}
              onChange={handleChange}
              aria-label="Pilih kota asal"
              className="bg-transparent font-semibold text-white outline-none"
            >
              <option value="" className="text-black">
                Semua Kota
              </option>

              {fromCities.map((city) => (
                <option key={city} value={city} className="text-black">
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tujuan */}
        <div className="p-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400">
            Tujuan
          </p>

          <div className="flex items-center justify-center gap-3">
            <FaTrain className="text-red-500" />

            <select
              name="to"
              value={filters.to}
              onChange={handleChange}
              aria-label="Pilih kota tujuan"
              className="bg-transparent font-semibold text-white outline-none"
            >
              <option value="" className="text-black">
                Semua Tujuan
              </option>

              {toCities.map((city) => (
                <option key={city} value={city} className="text-black">
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Penumpang */}
        <div className="p-6 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400">
            Penumpang
          </p>

          <div className="flex items-center justify-center gap-3">
            <FaUsers className="text-red-500" />

            <select
              name="passengers"
              value={filters.passengers}
              onChange={handleChange}
              aria-label="Pilih jumlah penumpang"
              className="bg-transparent text-white outline-none"
            >
              {passengerOptions.map((num) => (
                <option key={num} value={num} className="text-black">
                  {num} Orang
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Clear */}
        <div className="flex items-center justify-center p-6">
          <button
            type="button"
            onClick={onClear}
            className="cursor-pointer flex items-center gap-2 rounded-lg border border-red-500 px-5 py-2 text-sm font-medium text-red-400 transition hover:bg-red-600 hover:text-white"
          >
            <FaTimes />
            Hapus Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainSearchPanel;
