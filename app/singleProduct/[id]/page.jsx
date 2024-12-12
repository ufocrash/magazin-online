"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <h2>{product.title}</h2>
          <div className="productImage">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
