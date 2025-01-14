"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./style.css";

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProduct = async function () {
      if (id) {
        try {
          const resoult = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          if (!resoult.ok) {
            throw new Error("Error fetching post");
          }
          const response = await resoult.json();
          setProduct(response);
        } catch (error) {
          setError(error);
        }
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <p>Product not found</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h2 className="productTitle">{product.title}</h2>
          <div className="row">
            <div className="col-4">
              <div className="productImage">
                <img src={product.image} alt={product.title} />
              </div>
            </div>
            <div className="col-8">
              <div className="rating">
                <img
                  src={"../../../public/images/fillStars.png"}
                  className="starFill"
                  alt={"star"}
                />
                <img
                  src={"../../../public/images/emptyStars.png"}
                  className="starEmpty"
                  alt={"star"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
