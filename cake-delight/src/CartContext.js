// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        // If item already exists, increase quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If item doesn't exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: newCartItems,
      };

    case "INCREASE_QUANTITY":
      const increasedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cartItems: increasedCartItems,
      };

    case "DECREASE_QUANTITY":
      const decreasedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      return {
        ...state,
        cartItems: decreasedCartItems,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, { cartItems: [] });

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart, CartContext };
