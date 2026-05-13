import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import TrainListPage from "@/pages/TrainListPage";
// import SeatSelectionPage from "@/pages/SeatSelectionPage";
// import PassengerDetailsPage from "@/pages/PassengerDetailsPage";
// import PaymentPage from "@/pages/PaymentPage";
// import BookingConfirmationPage from "@/pages/BookingConfirmationPage";
import MyBookingsPage from "@/pages/MyBookingsPage";
// import AboutPage from "@/pages/AboutPage";
import NotFoundPage from "@/pages/NotFoundPage";

import ScrollToTop from "@/components/common/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trains" element={<TrainListPage />} />
        {/* <Route path="/seats" element={<SeatSelectionPage />} /> */}
        {/* <Route path="/passenger-details" element={<PassengerDetailsPage />} /> */}
        {/* <Route path="/payment" element={<PaymentPage />} /> */}
        {/* <Route path="/confirmation" element={<BookingConfirmationPage />} /> */}
        <Route path="/my-bookings" element={<MyBookingsPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
