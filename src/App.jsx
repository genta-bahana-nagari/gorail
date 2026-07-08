import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import TrainListPage from "@/pages/TrainListPage";
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
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
