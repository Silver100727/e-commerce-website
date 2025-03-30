import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (!existingCartItem) {
    return cartItems; // Item not in cart, return unchanged cart
  }

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
};

export const cartContext = createContext({
  product: [],
  setProduct: () => {},
  cartItem: [],
  addProductToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [toggleOpen, settoggleOpen] = useState(false);
  const [cartItem, setcartItem] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    setcartCount(
      cartItem.reduce((total, cartItem) => {
        return total + cartItem.quantity;
      }, 0)
    );
  }, [cartItem]);



  useEffect(() => {
    setcartTotal(
      cartItem.reduce((total, cartItem) => {
        return total + cartItem.quantity * cartItem.price;
      }, 0)
    );
  }, [cartItem]);

  const addItemToCart = (producttoAdd) => {
    setcartItem(addCartItem(cartItem, producttoAdd));
  };

  const removeItemToCart = (producttoAdd) => {
    setcartItem(removeCartItem(cartItem, producttoAdd));
  };

  const clearItem = (producttoAdd) => {
    setcartItem(clearCartItem(cartItem, producttoAdd));
  };
  const value = {
    toggleOpen,
    settoggleOpen,
    addItemToCart,
    removeItemToCart,
    cartItem,
    cartCount,
    clearItem,
    cartTotal,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
