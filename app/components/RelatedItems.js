import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "../context/GlobalStateContext";

const RelatedItems = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    if (!product?.category) return;

    const fetchProducts = async function () {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${product.category}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resoult = await response.json();
        setCategory(resoult);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching products", err);
      }
    };
    fetchProducts();
  }, [product?.category]);

  return (
    <div className="relatedProducts">
      {error && <p>Error: {error}</p>}
      {category.length ? (
        <div className="row">
          <h3>Related products</h3>
          {category.map((item) => (
            <div className="col-md-3 mb-2" key={item.id}>
              <div className="relatedItems">
                <Link className="link" href={`../singleProduct/${item.id}`}>
                  <span className="relatedProductTitle">{item.title}</span>
                </Link>
                <Link href={`../singleProduct/${item.id}`}>
                  <Image
                    width={200}
                    height={200}
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
                <p>{item.price}$</p>
                <button
                  onClick={() =>
                    dispatch({
                      type: "add_product",
                      payload: item,
                    })
                  }
                  className="btn add-to-cart"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading related items...</p>
      )}
    </div>
  );
};

export default RelatedItems;
