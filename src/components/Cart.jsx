import React from "react";

export default function Cart({ cartItems, onRemove, onConfirm }) {
  const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md sticky top-4">
      <h2 className="font-extrabold text-pink-800 text-xl mb-4">Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <><div className="flex items-center justify-center">
          <img src="/images/illustration-empty-cart.svg" alt="empty" />
        </div>
        <p className="text-gray-500 text-center">your added items will appear here.</p></>
      ) : (
        <ul className="space-y-2 mb-4">
          {cartItems.map(item => (
            <><li>
                <div className="font-bold text-purple-600 ">{item.name}</div>
            </li>
            <li key={item.id} className="flex items-center gap-2">
                <span className="text-pink-800 items-center font-bold"><small>x{item.quantity}</small></span>
                <span className="text-pink-400"><small>@ Rp. {(item.price).toLocaleString()}</small></span>
                <div className="text-sm text-pink-800">Rp. {(item.price * item.quantity).toLocaleString()}</div>
                <button onClick={() => onRemove(item)} className="ml-auto px-1 rounded-[50%] border border-gray-400 h-[20px] w-[20px]">
                  <img src="/images/icon-remove-item.svg" alt="remove" /></button>
            </li></>
          ))}
      <div className="flex mb-4 items-center mt-4">
        <span className="text-pink-400">Order Total</span>
        <span className="ml-auto font-extrabold text-right text-purple-600 font-redhatbold">Total: Rp. {total.toLocaleString()}</span>
      </div>
      <button
        className="w-full bg-pink-600 hover:bg-purple-600 hover:cursor-pointer text-white py-2 h-[40px] font-bold rounded-[20px]"
        onClick={onConfirm}
        disabled={cartItems.length === 0}
      >
        Confirm Order
      </button>
        </ul>
      )}
    </div>
  );
}
