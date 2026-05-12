import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTrain,
  FaTicketAlt,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import Button from "@/components/layout/Button";

const HeroSection = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Perjalanan Kereta Modern",
      subtitle: "Nyaman • Cepat • Elegan",
      description:
        "Pesan perjalanan kereta premium dengan tiket digital yang mulus dan pengalaman perjalanan terkurasi di seluruh nusantara.",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&h=900&fit=crop",
      mobileImage:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=1200&fit=crop",
      stat: "500+ Rute Aktif",
    },
    {
      id: 2,
      title: "Dirancang untuk Setiap Perjalanan",
      subtitle: "Pengalaman Kereta Terpercaya",
      description:
        "Dari perjalanan bisnis hingga petualangan indah, bepergian lebih cerdas dengan jadwal real-time dan reservasi instan.",
      image:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1600&h=900&fit=crop",
      mobileImage:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&h=1200&fit=crop",
      stat: "Support 24/7",
    },
    {
      id: 3,
      title: "Tiket Digital Premium",
      subtitle: "Praktis • Aman • Fleksibel",
      description:
        "Nikmati perjalanan tanpa kertas dengan akses tiket QR dan pembaruan langsung.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=900&fit=crop",
      mobileImage:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=1200&fit=crop",
      stat: "10K+ Penumpang / Bulan",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="relative overflow-visible bg-gradient-to-b from-red-600 to-red-700">
      <div className="relative h-[620px] md:h-[760px] lg:h-[860px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Desktop */}
            <div
              className="absolute inset-0 hidden md:block bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />

            {/* Mobile */}
            <div
              className="absolute inset-0 md:hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.mobileImage})`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full mb-6">
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-gray-700 font-semibold">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-5">
                    {slide.title}
                  </h1>

                  <p className="text-sm md:text-lg text-white/90 mb-8 max-w-xl mx-auto md:mx-0">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <Button
                      onClick={() => navigate("/trains")}
                      className="w-full sm:w-auto px-7 py-3 rounded-xl"
                    >
                      Jelajahi Rute
                    </Button>

                    <div className="text-white font-semibold text-lg">
                      {slide.stat}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 items-center justify-center shadow-lg"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 items-center justify-center shadow-lg"
        >
          <FaChevronRight />
        </button>

        {/* Swipe Area */}
        <div
          className="absolute inset-0 md:hidden z-10"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />

        {/* Dots */}
        <div className="absolute bottom-28 md:bottom-36 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-10 bg-red-600" : "w-3 bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Feature Card */}
      <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="-mt-20 md:-mt-28 lg:-mt-36">
          <div className="bg-neutral-100 backdrop-blur-xl border rounded-3xl shadow-2xl p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaTrain className="text-red-600 text-lg" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    Layanan Kereta Harian
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Transportasi terpercaya ke berbagai destinasi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaTicketAlt className="text-red-600 text-lg" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    Tiket Elektronik Instan
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Tiket digital aman berbasis QR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                  <FaClock className="text-red-600 text-lg" />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">
                    Jadwal Real-Time
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Pembaruan langsung & pelacakan perjalanan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
