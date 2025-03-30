import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="w-full flex h-20 mb-4">
      <img className="w-1/4 object-cover" src={imageUrl} alt={name} />
      <div className="w-2/2 flex flex-col justify-center pl-5">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-gray-600">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;