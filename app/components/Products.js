"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import AddToCart from "./AddToCart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();

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

  if (error) return <p>Error loading products: {error}</p>;
  if (!products.length) return <p>Loading...</p>;

  const groupedProducts = [];

  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }

  return groupedProducts.map((group, index) => (
    <div key={index} className="row mb-4">
      {group.map((product) => (
        <div key={product.id} className="col-md-3 d-flex align-items-stretch">
          <div className="product d-flex flex-column justify-content-between">
            <div className="thumb-inner">
              <Link href={`../singleProduct/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
            </div>
            <div className="product-details d-flex flex-column">
              <h2 className="product-title">{product.title}</h2>
              <span className="rating">
                Rating: {product.rating.rate}/{product.rating.count}
              </span>
              <div className="d-flex justify-content-between align-items-center">
                <span className="price">{product.price} Lei</span>
                <AddToCart />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ));
};

export default Products;
