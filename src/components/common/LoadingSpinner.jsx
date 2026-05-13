import { FaTrain } from "react-icons/fa";

const LoadingSpinner = ({ message = "Memuat..." }) => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <FaTrain className="text-6xl text-red-600 animate-pulse" />
          <div className="absolute -top-2 -right-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="railway-body text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
