"use client";
import React from "react";
import { CartContext } from "../context/GlobalStateContext";
import { useContext } from "react";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  if (state.cart.length < 1) {
    return "Your cart is empty";
  }
  return (
    <div className="container">
      {state.cart.map((product, index) => (
        <div key={index}>
          <li>
            <div>
              <p>
                {product.title} | Pret: {product.price} Lei
              </p>
              <div>
                <div className="d-flex">
                  <p>Quantity:</p>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "add_product",
                        payload: product,
                      })
                    }
                    className="btn"
                  >
                    ➕
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "decreas_quantity",
                        payload: product,
                      })
                    }
                    className="btn"
                  >
                    ➖
                  </button>
                </div>
                <span className="favPrice">
                  Total: {(product.quantity * product.price).toFixed(2)} lei
                </span>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch({
                  type: "delete_product",
                  payload: product.id,
                })
              }
            >
              Delete
            </button>
          </li>
        </div>
      ))}
      <button
        className="emptyCart"
        onClick={() => dispatch({ type: "empty_cart" })}
      >
        Empty cart
      </button>
    </div>
  );
};

export default Cart;
