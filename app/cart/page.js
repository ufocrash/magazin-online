"use client";
import React from "react";
import { CartContext } from "../context/GlobalStateContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  if (state.cart.length < 1) {
    return "Your cart is empty";
  }
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-between">
          <h2 className="mt-4">My cart</h2>
          <button
            className="btn px-0 emptyCartCart"
            onClick={() => dispatch({ type: "empty_cart" })}
          >
            Empty cart
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          {state.cart.map((product, index) => (
            <div className="row mb-2" key={index}>
              <div className="col-md-12 py-3 product-row">
                <div className="row">
                  <div className="col-md-2 d-flex justify-content-center align-items-center">
                    <Image
                      src={product.image}
                      alt={""}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>
                      {product.title} | Pret: {product.price} Lei
                    </p>
                  </div>
                  <div className="col-md-6 justify-content-end d-flex flex-row">
                    <div className="d-flex flex-column justify-content-end">
                      <span className="favPrice">{product.totalPerItem}$</span>
                      <div className="cartQuantity mb-4">
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
                        <span className="quantity">{product.quantity}</span>

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
                      </div>

                      <button className="custom-dotted btn text-end p-0">
                        Move to favorites
                      </button>
                      <button
                        className="custom-dotted btn text-end p-0"
                        onClick={() =>
                          dispatch({
                            type: "delete_product",
                            payload: product.id,
                          })
                        }
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="toCheckout">
            <div className="text-end">
              <p className="my-0">
                Subtotal: <span>1.159,98</span>$
              </p>
              <p>
                Delivery and processing cost:
                <span className="green"> FREE</span>
              </p>
            </div>

            <div className="text-end">
              <p className="my-0">
                <strong>Total:</strong>
              </p>
              <p className="checkoutTotal">272736$</p>
              <Link href="/checkout" className="btn btn-primary">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
