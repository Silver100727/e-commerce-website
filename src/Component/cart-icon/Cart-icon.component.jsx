import { useContext } from "react";
import ShoppingBagIcon from "../../Assets/shopping-bag.svg";
import { cartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { settoggleOpen, cartCount } = useContext(cartContext);
  return (
    <div
      className="w-[45px] h-[45px] relative flex items-center justify-center cursor-pointer"
      onMouseEnter={() => {
        settoggleOpen(true);
      }}
      onMouseLeave={() => {
        settoggleOpen(false);
      }}
    >
      <img
        src={ShoppingBagIcon}
        alt="Shopping Cart"
        className="w-[24px] h-[24px]"
      />
      <span className="absolute text-[10px] font-bold bottom-[11px] ">
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
