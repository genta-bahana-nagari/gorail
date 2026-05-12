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
      stat: "Melayani 500+ Rute",
      mobileImage:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=1200&fit=crop",
    },
    {
      id: 2,
      title: "Dirancang untuk Setiap Perjalanan",
      subtitle: "Pengalaman Kereta Terpercaya",
      description:
        "Dari perjalanan bisnis hingga petualangan indah, bepergian lebih cerdas dengan jadwal real-time dan reservasi instan.",
      image:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1600&h=900&fit=crop",
      stat: "Dukungan 24/7 Tersedia",
      mobileImage:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&h=1200&fit=crop",
    },
    {
      id: 3,
      title: "Tiket Digital Premium",
      subtitle: "Praktis • Aman • Fleksibel",
      description:
        "Nikmati perjalanan tanpa kertas dengan akses tiket QR, pembaruan langsung, dan pengalaman pemesanan modern.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1600&h=900&fit=crop",
      stat: "10K+ Turis Setiap Bulan",
      mobileImage:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=1200&fit=crop",
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
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-125 md:h-150 lg:h-175">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
              style={{
                backgroundImage: `url(${slide.mobileImage})`,
              }}
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/40 to-black/60 md:from-gray-800/20 md:via-neutral-700/40 md:to-gray-800/30"></div>

            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-sm mb-4 md:mb-6">
                    <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-700 font-medium">
                      {slide.subtitle}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base md:text-lg text-white/90 md:text-neutral-100 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-5">
                    <Button
                      onClick={() => navigate("/trains")}
                      className="cursor-pointer font-serif px-5 py-2.5 md:px-7 md:py-3 rounded-xl text-sm md:text-base w-full sm:w-auto"
                    >
                      Jelajahi Rute
                    </Button>

                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="text-sm md:text-xl font-semibold font-serif text-white/90 md:text-gray-100 text-shadow-sm text-shadow-neutral-800">
                        {slide.stat}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 border border-gray-200 text-gray-700 hover:text-red-600 shadow-sm transition items-center justify-center"
          aria-label="Slide sebelumnya"
        >
          <FaChevronLeft className="text-sm lg:text-base" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white/90 border border-gray-200 text-gray-700 hover:text-red-600 shadow-sm transition items-center justify-center"
          aria-label="Slide berikutnya"
        >
          <FaChevronRight className="text-sm lg:text-base" />
        </button>

        <div
          className="absolute inset-0 z-10 md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />

        <div className="absolute bottom-4 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-6 md:w-10 bg-red-600"
                  : "w-1.5 md:w-3 bg-white/60 md:bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Pergi ke slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 -mt-8 md:-mt-12 lg:-mt-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-200 shadow-xl p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center gap-3 md:gap-4 p-2 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <FaTrain className="text-red-600 text-base md:text-lg" />
              </div>
              <div>
                <h3 className="text-xs md:text-sm font-bold text-gray-900">
                  Layanan Kereta Harian
                </h3>
                <p className="text-[11px] md:text-xs text-gray-600 mt-0.5 md:mt-1">
                  Transportasi terpercaya ke berbagai destinasi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-2 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <FaTicketAlt className="text-red-600 text-base md:text-lg" />
              </div>
              <div>
                <h3 className="text-xs md:text-sm font-bold text-gray-900">
                  Tiket Elektronik Instan
                </h3>
                <p className="text-[11px] md:text-xs text-gray-600 mt-0.5 md:mt-1">
                  Tiket digital aman berbasis QR
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 p-2 md:p-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <FaClock className="text-red-600 text-base md:text-lg" />
              </div>
              <div>
                <h3 className="text-xs md:text-sm font-bold text-gray-900">
                  Jadwal Real-Time
                </h3>
                <p className="text-[11px] md:text-xs text-gray-600 mt-0.5 md:mt-1">
                  Pembaruan langsung & pelacakan perjalanan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
