import React, { useContext } from "react";
import { cartContext } from "../../context/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart,clearItem } = useContext(cartContext);

  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="w-full flex min-h-[100px] border-b border-gray-400 py-4 text-lg items-center">
      <div className="w-1/4 pr-4">
        <img className="w-1/2 object-cover" src={imageUrl} alt={name} />
      </div>
      <span className="w-1/4 text-center">{name}</span>
      <span className="w-1/4 text-center flex items-center justify-center">
        <span
          className="cursor-pointer px-2"
          onClick={() => {
            removeItemToCart(cartItem);
          }}
        >
          &#9664;
        </span>
        <span className="mx-2">{quantity}</span>
        <span
          className="cursor-pointer px-2"
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          &#9654;
        </span>
      </span>
      <span className="w-1/4 text-center">${price}</span>
      <span
        className="pl-4 cursor-pointer text-red-500 hover:text-red-700"
        onClick={() => {
          clearItem(cartItem);
        }}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
