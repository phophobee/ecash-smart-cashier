import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MasterBarang() {
  const navigate = useNavigate()

  const barang = [
    { barcode: '0123678', nama: 'Motorcyle Orange', beli: '12.000.000', jual: '21.000.000', stok: '10 Unit' },
    { barcode: '123799', nama: 'Black Panther', beli: '190.000.000', jual: '310.000.000', stok: '2 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    { barcode: '218792130', nama: 'Toyota Hilux', beli: '45.000.000', jual: '120.000.000', stok: '8 Unit' },
    // Tambahkan lebih banyak data untuk uji scroll
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
        <h1 className="text-xl font-bold">Master Barang</h1>
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
          <input className="mb-2 w-full px-2 py-1 rounded text-black" placeholder="Barcode" />
          <input className="mb-2 w-full px-2 py-1 rounded text-black" placeholder="Nama Barang" />
          <select className="mb-2 w-full px-2 py-1 rounded text-black">
            <option>Kategori</option>
          </select>
          <select className="mb-4 w-full px-2 py-1 rounded text-black">
            <option>Sub Kategori</option>
          </select>
          <button className="w-full bg-pink-700 hover:bg-pink-800 py-2 rounded font-semibold">Refresh</button>
        </div>

        {/* Table area */}
        <div className="flex-1 overflow-auto p-4">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-pink-200 text-center">
                <th className="border p-2">No.</th>
                <th className="border p-2">Barcode</th>
                <th className="border p-2">Nama Barang</th>
                <th className="border p-2">Harga Beli</th>
                <th className="border p-2">Harga Jual</th>
                <th className="border p-2">Stok Akhir</th>
                <th className="border p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {barang.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.barcode}</td>
                  <td className="border p-2">{item.nama}</td>
                  <td className="border p-2 text-right">{item.beli}</td>
                  <td className="border p-2 text-right">{item.jual}</td>
                  <td className="border p-2">{item.stok}</td>
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
