import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MasterCustomer() {
  const navigate = useNavigate()

  const barang = [
    { id_customer: '1238012', nama: 'Jhon Doe', toko: 'Toko Barokah', alamat: 'Jln. Kemayoran Selatan', point: '1000' },
    { id_customer: '1292390', nama: 'Michael Angelo', toko: 'Toko Le Braunch', alamat: 'Paris De Franch', point: '891' },
    { id_customer: '2380213', nama: 'Leonardo Da Vinci', toko: 'Art De Coach', alamat: 'Spain De Matador', point: '765' },
    { id_customer: '1298013', nama: 'Raphael', toko: 'Dagger On Map', alamat: 'Japanesse De Samurai', point: '789' },
    { id_customer: '8931009', nama: 'Uzumaki Naruto', toko: 'Kagebunshin', alamat: 'Konoha', point: '1230' },
    { id_customer: '0192801', nama: 'Uchiha Sasuke', toko: 'Sharingan', alamat: 'Konoha', point: '500' },
  ]

  return (
    <div className="w-full h-screen flex flex-col bg-white">
      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white">
        <button
          onClick={() => navigate('/')}
          className="bg-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-purple-600 text-sm"
        >
          Menu
        </button>
        <h1 className="text-xl font-bold">Daftar Customer</h1>
        <div className="space-x-2">
          <button className="bg-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-purple-600 text-sm">Tambah</button>
          <button className="bg-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-purple-600 text-sm">Cetak</button>
          <button className="bg-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-purple-600 text-sm">Export</button>
        </div>
      </div>

      {/* Content utama */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-pink-500 to-purple-500 text-white p-4">
          <h2 className="text-lg font-bold mb-4">Pencarian</h2>
          <input className="mb-2 w-full px-2 py-1 rounded text-black" placeholder="ID Customer" />
          <input className="mb-2 w-full px-2 py-1 rounded text-black" placeholder="Nama Customer" />
          <button className="w-full bg-pink-700 hover:bg-pink-800 py-2 rounded font-semibold">Refresh</button>
        </div>

        {/* Table area */}
        <div className="flex-1 overflow-auto p-4">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-pink-200 text-center">
                <th className="border p-2">No.</th>
                <th className="border p-2">ID Customer</th>
                <th className="border p-2">Nama Customer</th>
                <th className="border p-2">Nama Toko</th>
                <th className="border p-2">Alamat</th>
                <th className="border p-2">Point</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {barang.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.id_customer}</td>
                  <td className="border p-2">{item.nama}</td>
                  <td className="border p-2">{item.toko}</td>
                  <td className="border p-2">{item.alamat}</td>
                  <td className="border p-2 text-right">{item.point}</td>
                  <td className="border p-2 text-center">
                    <span className='hover:cursor-pointer'>✏️</span><span className='hover:cursor-pointer'> 🗑️</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
