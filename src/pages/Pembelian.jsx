import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { products } from "../data/produk";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import OrderModal from "../components/OrderModal";

export default function App() {
  const navigate = useNavigate()

  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (item) => {
    setCart(prev => {
      const found = prev.find(i => i.id === item.id);
      if (found) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const handleRemove = (item) => {
    setCart(prev =>
      prev
        .map(i => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)
    );
  };

  const handleDelete = (item) => {
    setCart(prev => prev.filter(i => i.id !== item.id));
  };

  const handleConfirm = () => {
    setShowModal(true);
  };

  const handleReset = () => {
    setCart([]);
    setShowModal(false);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white">
        <button
          onClick={() => navigate('/')}
          className="bg-white hover:bg-pink-600 hover:text-white px-4 py-2 rounded-full text-purple-600 text-sm"
        >
          Menu
        </button>
        <h1 className="text-xl font-bold">Order Pembelian</h1>
      </div>

      {/* Content utama */}
      <div className="w-full flex flex-col overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col text-purple-600 p-4">
          <h2 className="text-lg font-bold mb-4">Pencarian</h2>
          <input className="mb-2 px-2 py-1 border border-pink-300 rounded text-black" placeholder="Barcode" />
          <input className="mb-2 px-2 py-1 border border-pink-300 rounded text-black" placeholder="Nama Barang" />
          <button className="w-64 bg-pink-600 hover:bg-purple-600 text-white py-2 rounded font-semibold">Refresh</button>
        </div>

        <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-6 bg-cream min-h-screen">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => {
            const found = cart.find(i => i.id === product.id);
            return (
              <ProductCard
              key={product.id}
              item={product}
              quantity={found?.quantity || 0}
              onAdd={handleAdd}
              onRemove={handleRemove}
              />
            );
            })}
          </div>
          <Cart cartItems={cart} onRemove={handleDelete} onConfirm={handleConfirm} />
          {showModal && <OrderModal cartItems={cart} total={cart.reduce((s, i) => s + i.price * i.quantity, 0)} onClose={handleReset} />}
        </div>
      </div>
    </div>
  );
}
