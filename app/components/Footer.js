import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Column 1 - Logo & Description */}
          <div className="col-md-4 mb-3">
            <h5 className="text-uppercase">TMAG</h5>
            <p>Your go-to store for premium products.</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="text-light text-decoration-none" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-light text-decoration-none"
                  href="/products"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-light text-decoration-none"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-light me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-light me-3">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} TMAG. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
