import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="font-bold text-lg">Hanina Aplikasi</p>
          <p className="text-sm">© 2025 Hanina Aplikasi. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:underline">Tentang Kami</a>
          <a href="#" className="hover:underline">Kontak</a>
          <a href="#" className="hover:underline">Kebijakan Privasi</a>
        </div>
      </div>
    </footer>
  )
}