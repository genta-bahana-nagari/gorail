import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
