import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/home/HeroSection";
import SpecialOffers from "@/components/sections/home/SpecialOffers";
import PopularRoutes from "@/components/sections/home/PopularRoutes";
import HowItWorks from "@/components/sections/home/HowItWorks";
import TrainClasses from "@/components/sections/home/TrainClasses";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import Testimonials from "@/components/sections/home/Testimonials";
import LiveTrainStatus from "@/components/sections/home/LiveTrainStatus";
import MobileAppPromo from "@/components/sections/home/MobileAppPromo";
import FAQSection from "@/components/sections/home/FAQSection";
import NewsletterSection from "@/components/sections/home/NewsletterSection";
import Footer from "@/components/layout/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SpecialOffers /> 
      <PopularRoutes /> 
      <HowItWorks /> 
      <TrainClasses /> 
      <FeaturesSection /> 
      <Testimonials /> 
      <LiveTrainStatus /> 
      <MobileAppPromo /> 
      <FAQSection /> 
      <NewsletterSection /> 
      <Footer />
    </div>
  );
};

export default LandingPage;
