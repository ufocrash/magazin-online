"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import HeaderCart from "./HeaderCart";
import HeaderFavorites from "./HeaderFavorites";
import { logoutUser } from "../utils/auth";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
      <div className="navbar-container container">
        <div className="d-flex w-100 align-items-center justify-content-between">
          <div className="d-flex align-items-center justify-content-between">
            <Link className="navbar-brand helper-1" href="/">
              <h2>TMAG</h2>
            </Link>

            <div className="helper-1" id="navbarSupportedContent">
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn search-button" type="submit">
                  <CiSearch />
                </button>
              </form>
            </div>
          </div>

          <div className="menuItemsContainer d-flex">
            <ul className="right-menu">
              <li>
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard">Dashboard</Link>
                    <button onClick={logoutUser}>Logout</button>
                  </>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-dropdown"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Favorites
                  </button>
                  <ul className="dropdown-menu">
                    <HeaderFavorites />
                  </ul>
                </div>
              </li>
              <li>
                <div className="menu">
                  <div className="dropdown">
                    <button
                      className="btn btn-basket"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Basket
                    </button>
                    <ul className="dropdown-menu">
                      <p>Cart products</p>
                      <HeaderCart />
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
