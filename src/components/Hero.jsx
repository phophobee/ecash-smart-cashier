import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: '"Mobil Legendaris Siap Milik Anda! Koleksi Eksklusif Mobil Antik dengan Sejarah Tak Terlupakan!"',
    description: "Kami dengan bangga mempersembahkan koleksi mobil antik langka yang siap menghiasi garasi Anda! Setiap unit memiliki sejarah, karakter, dan keunikan yang tak tergantikan. Dari desain retro yang memukau hingga mesin yang masih prima, mobil-mobil ini adalah investasi bernilai tinggi dan kebanggaan seumur hidup.",
    image: "/images/vintage.png", // ganti dengan path sesuai
  },
  {
    title: '"Bukan Hanya Pickup, Tapi Partner Terpercaya di Segala Medan!"',
    description: "Toyota Hilux hadir dengan ketangguhan legendaris dan performa tak terbantahkan! Dibangun untuk menghadapi tantangan terberat, baik di jalan raya, medan off-road, maupun kebutuhan kerja harian. Daya tahan, kekuatan, dan kehandalannya sudah diakui di seluruh dunia!",
    image: "/images/hilux.png",
  },
  {
    title: '"Lebih dari Sekadar Mobil, Hyundai adalah Pengalaman Berkendara Premium!"',
    description: "Temukan mobil Hyundai terbaru dengan desain futuristik, teknologi canggih, dan performa optimal yang siap menemani setiap perjalanan Anda. Hyundai menghadirkan kombinasi sempurna antara kenyamanan, keamanan, dan efisiensi bahan bakar, cocok untuk keluarga, profesional, maupun petualang urban!",
    image: "/images/hyundai.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-12">
        {/* Kiri: Konten */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">{slides[current].title}</h1>
          <p className="mb-6">{slides[current].description}</p>
          <div className="space-x-4">
            <button className="bg-white text-purple-600 hover:bg-pink-600 hover:text-white font-semibold px-5 py-2 rounded-full shadow">
              Order Sekarang
            </button>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="hidden md:block">
          <img src={slides[current].image} alt="Hero Slide" className="w-[400px] drop-shadow-xl" />
        </div>
      </div>

      {/* Navigasi Panah */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-green-600 p-2 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-green-600 p-2 rounded-full shadow"
      >
        <FaChevronRight />
      </button>

      {/* Indikator Slide */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
