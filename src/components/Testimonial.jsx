import React from 'react'

const testimonials = [
  {
    message: "Aplikasi ini sangat membantu proses jual beli di toko saya!",
    name: "Siti",
    role: "Pemilik Toko Baju",
  },
  {
    message: "Fitur lengkap dan mudah digunakan bahkan oleh pemula.",
    name: "Andi",
    role: "Usaha Sembako",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Budi",
    role: "Pemilik Toko Elektronik",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Hanoman",
    role: "Pemilik Toko Pakan",
  },
  {
    message: "Saya bisa pantau semua cabang toko dari satu aplikasi.",
    name: "Gareng",
    role: "Pemilik Toko Wayang",
  },
]

export default function Testimonial() {
  return (
    <section className="bg-[#F9FAFB] py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-10 text-pink-800">Apa Kata Mereka</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded shadow">
              <p className="italic text-pink-400 mb-4">"{item.message}"</p>
              <h4 className="text-purple-600 font-semibold">{item.name}, {item.role}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
