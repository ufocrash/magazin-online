"use client";
import RelatedItems from "@/app/components/RelatedItems";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import sratFill from "../../../public/images/fillStars.png";
import starrEmpty from "../../../public/images/emptyStars.png";
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
    <div className="container mt-4">
      <div className="row">
        <div className="row">
          <div className="col-8">
            <h2 className="productTitle">{product.title}</h2>
          </div>
        </div>

        <div className="col-8">
          <div className="row">
            <div className="col-4 productBg d-flex">
              <div className="singleProductImage">
                <Image
                  width={100}
                  height={100}
                  src={product.image}
                  alt={product.title}
                />
              </div>
            </div>
            <div className="col-8">
              <div className="rating">
                <div className="rating-stars">
                  <div
                    style={{
                      width: `${(product.rating.rate / 5) * 100}px`,
                    }}
                    className="starFill"
                  >
                    <Image
                      width={100}
                      height={100}
                      src={sratFill}
                      alt="some text"
                    />
                  </div>
                  <div className="starEmpty">
                    <Image
                      width={100}
                      height={100}
                      src={starrEmpty}
                      alt="some text"
                    />
                  </div>
                </div>
                <p className="productRating">
                  {product.rating.rate} ({product.rating.count} reviews)
                </p>
              </div>
              <p className="productCategory">
                <strong>Category:</strong> <span>{product.category}</span>
              </p>
              <div className="productDescription">
                <p>
                  <strong>Description:</strong>
                </p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="rightArea">
            <div className="addToCartContainer">
              <p className="singleProductPrice">Price: {product.price}$</p>
              <button className="btn custom-btn-single-product">
                Add to Cart
              </button>
              <button className="btn custom-btn-single-product add-to-favorites-single-product">
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
        <RelatedItems product={product} />
      </div>
    </div>
  );
};

export default Single;
