import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const AddToCart = () => {
  const addToCart = function () {
    alert("clicked");
  };
  return (
    <>
      <button onClick={addToCart} className="btn add-to-cart">
        <FaCartShopping />
      </button>
    </>
  );
};

export default AddToCart;
