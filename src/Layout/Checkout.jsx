import React, { useContext } from "react";
import { cartContext } from "../context/cart.context";
import CheckoutItem from "../Component/checkout-item/Checkout-item.component";

const Checkout = () => {
  const { cartItem, cartTotal } = useContext(cartContext);
  return (
    <div className="w-3/4 min-h-[90vh] flex flex-col items-center mx-auto m-12">
      <div className="w-full py-2 flex justify-between border-b border-gray-400">
        <div className="capitalize w-1/4 text-">Product</div>
        <div className="capitalize w-1/4 text-center">Description</div>
        <div className="capitalize w-1/4 text-center">Quantity</div>
        <div className="capitalize w-1/4 text-center">Price</div>
        <div className="capitalize w-1/12 text-center">Remove</div>
      </div>
      {cartItem.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="mt-8 ml-auto text-3xl">Total: {cartTotal}</span>
    </div>
  );
};

export default Checkout;
