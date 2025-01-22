import React from "react";
import Link from "next/link";
import { CartContext } from "../context/GlobalStateContext";
import { useContext } from "react";

const HeaderFavorites = () => {
  const { state, dispatch } = useContext(CartContext);
  if (!state.favorites) {
  }
  return (
    <>
      {state.favorites.length === 0
        ? "Add here your favorite products"
        : state.favorites.map((favorite, index) => (
            <li className="fav-items" key={index}>
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <img src={favorite.image} alt="" />
                  <Link
                    className="favProductLink"
                    href={`./singleProduct/${favorite.id}`}
                  >
                    {favorite.title}
                  </Link>
                </div>
                <button
                  className="addToCartFromFav"
                  onClick={() =>
                    dispatch({ type: "add_product", payload: favorite })
                  }
                >
                  Add to cart
                </button>
              </div>
              <div className="d-flex flex-column priceBox">
                <span>{favorite.price}$</span>
                <button
                  className="removeFavItem"
                  onClick={() =>
                    dispatch({ type: "addToFavorites", payload: favorite })
                  }
                >
                  x
                </button>
              </div>
            </li>
          ))}
      {state.favorites.length !== 0 ? (
        <Link className="seeAllProducts" href={"/favorites"}>
          See all products
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default HeaderFavorites;
