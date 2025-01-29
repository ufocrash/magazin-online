"use client";
import React from "react";
import { AuthProvider } from "../context/AuthContext";
import { useAuth } from "../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../context/GlobalStateContext";
import Link from "next/link";

const Page = () => {
  const { state, dispatch, totalPrice } = useContext(CartContext);
  const { user } = useAuth(AuthProvider);

  // Safely handle user data
  const userName = user ? user.name : { firstname: "", lastname: "" };
  const userAddress = user
    ? user.address
    : { street: "", number: "", zipcode: "" };

  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="container my-5">
      {user ? (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4">
              <h2 className="mb-4">Order Summary</h2>

              <div className="mb-4">
                <h5>Customer Information</h5>
                <p className="mb-1">
                  <strong>Name:</strong> {capitalize(userName.lastname)}{" "}
                  {capitalize(userName.firstname)}
                </p>
                <p className="mb-0">
                  <strong>Address:</strong> Str. {userAddress.street}, Nr.{" "}
                  {userAddress.number}, Zip code: {userAddress.zipcode}
                </p>
              </div>

              <div className="mb-4">
                <h5>Order Items</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.cart.map((product, index) => (
                      <tr key={index}>
                        <td>{product.title}</td>
                        <td>{product.quantity}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>
                          ${(product.quantity * product.price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-end mb-4">
                <h4>
                  <strong>Total:</strong> ${totalPrice.toFixed(2)}
                </h4>
              </div>

              <div className="text-end">
                <Link
                  onClick={() => dispatch({ type: "empty_cart" })}
                  href="/thankyou"
                  className="btn btn-primary btn-lg"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm p-4">
              <h2 className="mb-4">Order Summary</h2>
              <div className="mb-4">
                <h5>Order Items</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.cart.map((product, index) => (
                      <tr key={index}>
                        <td>{product.title}</td>
                        <td>{product.quantity}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>
                          ${(product.quantity * product.price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-end mb-4">
                <h4>
                  <strong>Total:</strong> ${totalPrice.toFixed(2)}
                </h4>
              </div>

              <div className="text-end">
                <Link
                  onClick={() => dispatch({ type: "empty_cart" })}
                  href="/thankyou"
                  className="btn btn-primary btn-lg"
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
