"use client";
import Image from "next/image";
import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

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
        console.log("Product quantity updated:", updatedCart);
        return { ...state, cart: updatedCart };
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        console.log("Product added:", newProduct);
        return { ...state, cart: [...state.cart, newProduct] };
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
};

const Products = () => {
  // Setam products cu ce returneaza api-ul
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Query catre api pentru a afisa toate produsele
  useEffect(() => {
    const fetchProducts = async function () {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resoult = await response.json();
        setProducts(resoult);
      } catch (err) {
        setError(err.message);
        console.error("You have an error" + err);
      }
    };
    fetchProducts();
  }, []);

  // Display errors
  if (error) return <p>Error loading products: {error}</p>;
  if (!products.length) return <p>Loading...</p>;

  // Set numbers of products per row
  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return (
    <div className="container">
      {/* Cart */}
      <p>Cart products</p>
      <button onClick={() => dispatch({ type: "empty_cart" })}>
        Emtpty cart
      </button>
      <ul>
        {state.cart.map((product, index) => (
          <div key={index}>
            <li>
              <div>
                <p>{product.title}</p>
                <div>
                  {product.price} Lei
                  <div className="d-flex">
                    <p>Quantity:</p>
                    <button className="btn">➕</button>
                    <span className="quantity">{product.quantity}</span>
                    <button className="btn">➖</button>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch({ type: "delete_product", payload: product.id })
                }
              >
                Delete
              </button>
            </li>
          </div>
        ))}
      </ul>
      {groupedProducts.map((group, index) => (
        <div key={index} className="row mb-4">
          {group.map((product) => (
            <div
              key={product.id}
              className="col-md-3 d-flex align-items-stretch"
            >
              <div className="product d-flex flex-column justify-content-between">
                <div className="thumb-inner">
                  <Link href={`../singleProduct/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="product-details d-flex flex-column">
                  <h2 className="product-title">{product.title}</h2>
                  <span className="rating">
                    Rating: {product.rating.rate}/{product.rating.count}
                  </span>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">{product.price} Lei</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "add_product",
                          payload: product,
                        })
                      }
                      className="btn add-to-cart"
                    >
                      <FaCartShopping />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Products;
