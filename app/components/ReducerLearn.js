"use client";
import React, { useReducer } from "react";

// Add, update, delete
const reducer = function (state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      const productToAdd = state.payload;
      return console.log(state);
  }
};
// Main component
const ReducerLearn = () => {
  // Products
  const products = [
    { id: 1, name: "Telefon", price: 500 },
    { id: 2, name: "Laptop", price: 7000 },
    { id: 3, name: "HDMI Cable", price: 100 },
  ];

  // Basket
  const initialState = {
    basket: [
      { id: 3, name: "HDMI Cable", price: 100 },
      { id: 3, name: "Glasses", price: 200 },
    ],
  };

  // Reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="d-flex">
          <p className="px-3">
            {product.name} | {product.price}
          </p>
          <button
            onClick={() => dispatch({ type: "ADD_PRODUCT", payload: product })}
            className="btn btn-success"
          >
            Add to cart
          </button>
        </div>
      ))}
      <p>Your cart</p>
      {initialState.basket.map((product, index) => (
        <p key={index}>{product.name}</p>
      ))}
    </div>
  );
};

export default ReducerLearn;
