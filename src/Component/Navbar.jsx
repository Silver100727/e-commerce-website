import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { userContext } from "../context/user.context";
import { signOutUser } from "../utils/firebase/firebase.utils";
import CartIcon from "./cart-icon/Cart-icon.component";
import CartDropdown from "./cart-dropdown/Cart-dropdown.component";
import { cartContext } from "../context/cart.context";

const Navbar = () => {
  const { currentUser } = useContext(userContext);
  const { toggleOpen } = useContext(cartContext);

  return (
    <>
      <div className="h-[50px] px-5 sticky top-0 z-50 w-full flex justify-between mb-6  items-center bg-transparent backdrop-blur-lg">
        <Link className="h-full w-[70px] flex items-center" to="/">
          <div className="text-lg font-bold">Logo</div>
        </Link>

        <div className="flex items-center uppercase text-sm">
          <Link
            to="/shop"
            className="px-3 py-2 cursor-pointer hover:text-blue-500"
          >
            Shop
          </Link>

          {currentUser ? (
            <span
              onClick={signOutUser}
              className="px-3 py-2 cursor-pointer hover:text-blue-500"
            >
              Sign Out
            </span>
          ) : (
            <Link
              to="/authentication"
              className="px-3 py-2 cursor-pointer hover:text-blue-500"
            >
              Sign In
            </Link>
          )}
          <CartIcon />
          {toggleOpen && <CartDropdown />}
        </div>
      </div>

      <div className="px-[40px]">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
