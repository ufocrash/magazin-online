"use client";
import { createContext, useReducer } from "react";

export const CartContext = createContext(null);

const reducer = function (state, action) {
  switch (action.type) {
    case "add_product":
      const productId = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (productId) {
        const updatedCart = state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );

        return { ...state, cart: updatedCart };
      } else {
        const newProduct = { ...action.payload, quantity: 1 };

        return { ...state, cart: [...state.cart, newProduct] };
      }

    case "decreas_quantity":
      const updateQuantity = state.cart
        .map((product) => {
          return product.id === action.payload.id
            ? { ...product, quantity: product.quantity - 1 }
            : product;
        })
        .filter((product) => product.quantity > 0);

      return { ...state, cart: updateQuantity };

    case "addToFavorites":
      const isFavorite = state.favorites.some(
        (product) => product.id === action.payload.id
      );

      if (isFavorite) {
        const updatedFavorites = state.favorites.filter(
          (product) => product.id !== action.payload.id
        );
        return { ...state, favorites: updatedFavorites };
      } else {
        return { ...state, favorites: [...state.favorites, action.payload] };
      }

    case "delete_product":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: updatedCart };

    case "empty_cart":
      return { ...state, cart: [] };

    default:
      return state;
  }
};
const initialState = {
  cart: [],
  favorites: [],
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
