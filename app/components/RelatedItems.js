import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedItems = ({ product }) => {
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
      <h3>Related products</h3>
      {error && <p>Error: {error}</p>}
      {category.length ? (
        <div className="row">
          {category.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="relatedItems">
                {item.title}
                <Link href={`../singleProduct/${item.id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={item.image}
                    alt={item.title}
                  />
                </Link>
                <p>{item.price} lei</p>
                <button className="btn add-to-cart">Add to cart</button>
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
