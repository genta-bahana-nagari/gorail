import {
  FaClock,
  FaUsers,
  FaDollarSign,
  FaTrain,
  FaChair,
  FaWifi,
  FaCoffee,
  FaPlug,
} from "react-icons/fa";
import Button from "@/components/common/Button";

const TrainCard = ({ train, passengers, onSelect }) => {
  const facilities = [];
  if (train.hasWifi)
    facilities.push(<FaWifi key="wifi" className="text-gray-400" />);
  if (train.hasFood)
    facilities.push(<FaCoffee key="food" className="text-gray-400" />);
  if (train.hasCharger)
    facilities.push(<FaPlug key="charger" className="text-gray-400" />);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-l-4 border-red-600">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <FaTrain className="text-red-600 text-xl" />
              <h3 className="font-serif text-xl font-bold text-gray-800">
                {train.name}
              </h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {train.trainNo}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FaClock size={14} />
                <span>
                  {train.departure} → {train.arrival}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaChair size={14} />
                <span>{train.availableSeats} kursi tersisa</span>
              </div>
              {facilities.length > 0 && (
                <div className="flex items-center gap-2">{facilities}</div>
              )}
            </div>
          </div>

          <div className="text-right mt-3 md:mt-0">
            <p className="text-2xl font-bold text-red-600">
              Rp {train.price.toLocaleString("id-ID")}
            </p>
            <p className="text-xs text-gray-500">per penumpang</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <FaClock className="text-red-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Durasi</p>
              <p className="font-medium text-gray-800">{train.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <FaUsers className="text-red-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Penumpang</p>
              <p className="font-medium text-gray-800">{passengers} orang</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
              <FaDollarSign className="text-red-600 text-sm" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Harga</p>
              <p className="font-medium text-gray-800">
                Rp {(train.price * passengers).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={onSelect}
          variant="primary"
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5"
        >
          Lihat Detail Kereta
        </Button>
      </div>
    </div>
  );
};

export default TrainCard;
