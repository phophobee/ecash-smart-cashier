import React from "react";

export default function ProductCard({ item, quantity, onAdd, onRemove }) {
  return (
    <div className={`border rounded-xl p-2 shadow-sm transition hover:shadow-md`}>
      <img src={`./images/${item.image}`} alt={item.name} className="rounded-xl h-50 w-full object-cover" />
      <div className="mt-2">
        {quantity > 0 ? (
          <div className="absolute -mt-8 ml-20 flex items-center gap-2 justify-center bg-pink-600 hover:bg-purple-600 h-[40px] w-[150px] rounded-[20px] mx-auto">
            <button onClick={() => onRemove(item)} className="mr-[40px]">
                <img src="./images/icon-decrement-quantity.svg" alt="decrement"/>
            </button>
            <span className="text-[white]">{quantity}</span>
            <button onClick={() => onAdd(item)} className="ml-[40px]">
                <img src="./images/icon-increment-quantity.svg" alt="increment" />    
            </button>
          </div>
        ) : (
           <div className="absolute -mt-8 ml-10 bg-white flex items-center gap-2 justify-center border border-pink-600 bg-white-600 hover:bg-white-700 h-[40px] w-[200px] rounded-[20px] mx-auto">
            <img src="./images/icon-add-to-cart.svg" alt="add-to-cart" />
            <button onClick={() => onAdd(item)} className="hover:text-pink-600 hover:font-bold text-purple-600">
                Order
            </button>
           </div>
        )}
      </div>
      <p className="text-sm text-pink-600 mt-10">{item.short_name}</p>
      <h1 className="mt-2 font-semibold text-purple-600">{item.name}</h1>
      <h2 className="text-sm text-pink-800 font-bold">Rp. {item.price.toLocaleString()}</h2>
    </div>
  );
}
