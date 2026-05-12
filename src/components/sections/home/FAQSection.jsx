// components/sections/FAQSection.jsx
import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaHeadset,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Bagaimana cara memesan tiket kereta di GoRail?",
      answer:
        "Pemesanan tiket sangat mudah! Anda dapat mencari rute dan tanggal perjalanan, pilih kereta yang diinginkan, isi data penumpang, lakukan pembayaran, dan tiket digital akan dikirim ke email Anda. Prosesnya hanya membutuhkan waktu kurang dari 5 menit!",
    },
    {
      question: "Apakah tiket bisa dibatalkan atau diubah?",
      answer:
        "Ya, tiket dapat dibatalkan atau diubah sesuai dengan kebijakan masing-masing kereta. Pembatalan H-7 mendapatkan refund 100%, H-3 refund 50%, dan kurang dari H-1 tidak dapat refund. Perubahan jadwal dikenakan biaya administrasi Rp 25.000.",
    },
    {
      question: "Metode pembayaran apa saja yang diterima?",
      answer:
        "Kami menerima berbagai metode pembayaran: Transfer Bank (BCA, Mandiri, BRI, BNI), Kartu Kredit (Visa, Mastercard), E-Wallet (GoPay, OVO, Dana, LinkAja), dan QRIS.",
    },
    {
      question: "Apakah ada diskon untuk pembelian tiket dalam jumlah besar?",
      answer:
        "Ya! Untuk pemesanan grup minimal 5 orang dalam satu transaksi, Anda akan mendapatkan diskon hingga 25%. Semakin banyak penumpang, semakin besar diskon yang didapatkan.",
    },
    {
      question: "Berapa maksimal bagasi yang diperbolehkan?",
      answer:
        "Setiap penumpang diperbolehkan membawa bagasi maksimal 20kg dengan dimensi 100cm x 50cm x 50cm. Kelebihan bagasi akan dikenakan biaya tambahan mulai dari Rp 50.000 per kg.",
    },
    {
      question: "Apakah anak-anak mendapatkan tiket gratis?",
      answer:
        "Anak dengan usia di bawah 4 tahun dapat bepergian gratis tanpa tempat duduk. Anak dengan tinggi 4-15 tahun mendapatkan diskon 50%. Di atas 15 dikenakan tarif dewasa.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-red-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="cursor-pointer w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-red-600 shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 shrink-0" />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-2xl p-8 text-center">
          <FaHeadset className="text-red-600 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Masih memiliki pertanyaan?
          </h3>
          <p className="text-gray-600 mb-6">
            Tim dukungan pelanggan kami siap membantu Anda 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition font-semibold">
              <FaWhatsapp className="text-xl" />
              Chat WhatsApp
            </button>
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition font-semibold">
              <FaEnvelope />
              Email Support
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Respon rata-rata dalam waktu 10 menit
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
