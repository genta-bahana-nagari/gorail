// components/sections/Testimonials.jsx
import { useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      location: "Jakarta",
      rating: 5,
      text: "Pelayanan luar biasa! Tiket digital sangat memudahkan perjalanan saya. Proses booking cepat dan mudah. Aplikasi GoRail sangat membantu!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      trip: "Jakarta → Bandung",
    },
    {
      id: 2,
      name: "Siti Rahayu",
      location: "Surabaya",
      rating: 5,
      text: "GoRail selalu jadi pilihan utama saya. Harga bersaing, jadwal tepat waktu, dan customer service yang responsif. Sangat direkomendasikan!",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      trip: "Surabaya → Yogyakarta",
    },
    {
      id: 3,
      name: "Agus Wijaya",
      location: "Bandung",
      rating: 4,
      text: "Pengalaman booking yang menyenangkan. Banyak promo menarik dan proses refund yang cepat. Akan selalu menggunakan GoRail untuk perjalanan.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      trip: "Bandung → Jakarta",
    },
    {
      id: 4,
      name: "Dewi Putri",
      location: "Semarang",
      rating: 5,
      text: "Fitur real-time tracking sangat membantu. Saya bisa memantau jadwal kereta dengan akurat. Terima kasih GoRail!",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      trip: "Semarang → Surabaya",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-16 bg-linear-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Apa Kata Mereka?
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Lebih dari 10.000 penumpang puas telah menggunakan layanan GoRail
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <FaQuoteLeft className="text-red-500 text-2xl mb-4 opacity-50" />
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-gray-300 text-sm" />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <FaQuoteLeft className="text-red-500 text-2xl mb-4 opacity-50" />
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-gray-300 text-sm" />
              ))}
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-gray-500">
                  {testimonials[currentIndex].trip}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 transition"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-red-600 transition"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-red-600" : "w-2 bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <span className="text-white text-sm">Rating 4.8/5 dari</span>
            <span className="text-red-500 font-bold text-lg">10.000+</span>
            <span className="text-white text-sm">penumpang</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
