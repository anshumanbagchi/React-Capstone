import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
};

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((count, cartItem) => count + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setTotal(newCartTotal);
  }, [cartItems]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };
  const clearItemFromCart = (cartItemToRemove) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove));
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
