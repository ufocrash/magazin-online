"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import HeaderCart from "./HeaderCart";
import HeaderFavorites from "./HeaderFavorites";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth(); // ✅ Get auth state
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
                {user ? (
                  <>
                    <Link className="link" href="/dashboard">
                      <span className="userAvatar">
                        {user.name.firstname[0].toUpperCase()}
                        {user.name.lastname[0].toUpperCase()}
                      </span>{" "}
                      My account
                    </Link>
                    {/* <button onClick={logoutUser}>Logout</button> */}
                  </>
                ) : (
                  <Link className="link" href="/login">
                    Login
                  </Link>
                )}
              </li>
              <li>
                <div className="dropdown">
                  <Link href={"#"} className="btn btn-dropdown">
                    Favorites
                  </Link>
                  <ul className="dropdown-menu">
                    <HeaderFavorites />
                  </ul>
                </div>
              </li>
              <li>
                <div className="menu">
                  <div className="dropdown">
                    <Link href={"#"} className="btn btn-basket">
                      Basket
                    </Link>
                    <ul className="dropdown-menu">
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
