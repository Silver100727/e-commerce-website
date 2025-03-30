import React, { useContext } from "react";
import Button from "../Button";
import CartItem from "../cart-Item/Cart-item.component";
import { cartContext } from "../../context/cart.context";
import { userContext } from "../../context/user.context";

const CartDropdown = () => {
  const { navigateTo } = useContext(userContext);
  const { settoggleOpen, cartItem } = useContext(cartContext);

  return (
    <div
      onMouseEnter={() => {
        settoggleOpen(true);
      }}
      onMouseLeave={() => {
        settoggleOpen(false);
      }}
      className="absolute w-[300px] h-[340px] shadow-2xl flex flex-col justify-between p-5 rounded bg-white top-[40px] right-[10px] z-10"
    >
      <div className="h-[240px] flex flex-col overflow-y-auto">
        {cartItem.length > 0 ? (
          cartItem.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="text-center  text-xs text-gray-500 mt-10">
            Your cart is empty
          </span>
        )}
      </div>
      <Button
        onClick={() => {
          navigateTo("/checkout");
          settoggleOpen(false);
        }}
        buttontype="default"
        className="mt-auto"
        disabled={cartItem.length === 0} // Disable button when cart is empty
      >
        Go To Checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
