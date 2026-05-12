import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTicketAlt,
  FaCalendar,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import useBookingStore from "@/store/bookingStore";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/layout/Button";

const MyBookingsPage = () => {
  const navigate = useNavigate();
  const { userBookings, isLoggedIn } = useBookingStore();
  const [selectedBooking, setSelectedBooking] = useState(null);

  if (!isLoggedIn) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Please Login</h2>
            <p className="mb-4">
              You need to be logged in to view your bookings
            </p>
            <Button onClick={() => navigate("/login")}>Login Now</Button>
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

          {userBookings.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <FaTicketAlt className="text-6xl text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Bookings Yet</h2>
              <p className="text-gray-600 mb-4">
                You haven't made any train bookings yet
              </p>
              <Button onClick={() => navigate("/trains")}>
                Book Your First Train
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {userBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <FaTicketAlt className="text-blue-600" />
                        <span className="font-mono font-bold">
                          {booking.pnr}
                        </span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                          {booking.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">
                        {booking.train.name}
                      </h3>
                      <p className="text-gray-600">{booking.train.trainNo}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Booked on</p>
                      <p className="font-semibold">
                        {new Date(booking.bookingDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-gray-400 mr-2" />
                      <span>
                        {booking.searchParams.from} → {booking.searchParams.to}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="text-gray-400 mr-2" />
                      <span>{booking.searchParams.date}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="font-semibold mb-2">Passengers & Seats:</p>
                    {booking.passengers.map((passenger, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {passenger.name} - Seat {booking.seats[idx]?.id}
                      </p>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <p className="text-lg font-bold text-green-600">
                      Total: $
                      {booking.seats.reduce((sum, seat) => sum + seat.price, 0)}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSelectedBooking(booking)}
                    >
                      <FaDownload className="inline mr-2" /> View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBookingsPage;
