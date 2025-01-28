"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container main-container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <Link className="navbar-brand helper-1" href="/">
            <h2>TMAG</h2>
          </Link>
          <h1 className="display-4">Thank You for Your Order!</h1>
          <p className="lead">
            Your order has been successfully placed. We appreciate your trust in
            TMAG.
          </p>
          <p>
            You will receive an email confirmation shortly with your order
            details.
          </p>

          <Link href="/" className="btn btn-primary mt-4">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
