import Image from "next/image";
import React, { useContext, useReducer } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CartContext } from "../context/GlobalStateContext";

const Products = () => {
  const { state, dispatch } = useContext(CartContext);
  // Setam products cu ce returneaza api-ul
  const [products, setProducts] = useState([]);
  //Afisare erori fetch api
  const [error, setError] = useState();
  //Updatare cart

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
        console.error("Error fetching products" + err);
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
      <div className="row">
        <div className="col">
          <div className="hero"></div>
        </div>
      </div>

      {groupedProducts.map((group, index) => (
        <div key={index} className="row mb-4">
          {group.map((product) => (
            <div
              key={product.id}
              className="col-md-3 d-flex align-items-stretch"
            >
              <div className="product d-flex flex-column justify-content-between">
                <button
                  onClick={() =>
                    dispatch({ type: "addToFavorites", payload: product })
                  }
                  className="addToFavorites"
                >
                  {state.favorites.some((fav) => fav.id === product.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                <div className="thumb-inner">
                  <Link href={`../singleProduct/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
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
