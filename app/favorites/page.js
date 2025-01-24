"use client";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/GlobalStateContext";
import Image from "next/image";
import Link from "next/link";

const Favorites = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className="container">
      <div className="row">
        <h2>My favorites list</h2>
        {state.favorites.map((fav, index) => (
          <div className="col-md-4" key={index}>
            <div className="row">
              <div className="col-md-4">
                <div className="favProdImage">
                  <Link href={`../singleProduct/${fav.id}`}>
                    <Image width={100} height={100} src={fav.image} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <strong>{fav.title}</strong>
                <br />
                {fav.price} lei
                <br />
                <button
                  onClick={() =>
                    dispatch({ type: "add_product", payload: fav })
                  }
                  className="addToCartFromFav"
                >
                  Move to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
