import React from "react";
import { CartContext } from "../context/GlobalStateContext";
import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderCart = () => {
  const { state, dispatch } = useContext(CartContext);
  if (state.cart.length < 1) {
    return "Your cart is empty";
  }
  return (
    <>
      {state.cart.map((product, index) => (
        <li className="fav-items" key={index}>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <Image width={100} height={50} src={product.image} alt="" />
              <Link
                className="favProductLink"
                href={`./singleProduct/${product.id}`}
              >
                {product.title} x <span className="">{product.quantity}</span>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column priceBox">
            <span className="favPriceCart">{product.price}$</span>
            <button
              className="removeFavItem"
              onClick={() =>
                dispatch({ type: "delete_product", payload: product.id })
              }
            >
              x
            </button>
          </div>
        </li>
      ))}
      <Link className="seeAllProducts" href={"/cart"}>
        Go to cart{" "}
      </Link>
    </>
  );
};

export default HeaderCart;
