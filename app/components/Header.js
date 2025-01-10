"use client";
import React, { useState, useReducer } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import BasketInMenu from "./BasketInMenu";

const Header = () => {
  const [dropdown, setDropdown] = useState({ display: "none" });
  const showDropdown = function (e) {
    setDropdown({ display: "block" });
  };

  const hideDropdown = function () {
    dropdown.display === "block" ? setDropdown({ display: "none" }) : "";
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="navbar-container container">
        <div className="d-flex w-100 align-items-center px-3 justify-content-between">
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
                <div className="myAccount">
                  <div className="avatar d-flex">
                    <img src="/public/images/logo.png" alt="" />
                  </div>
                  Contul meu
                </div>
              </li>
              <li>
                <div className="favorite">Favorite</div>
              </li>
              <li>
                <div
                  className="menu"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <div className="dropdown">
                    <button
                      className="btn btn-basket"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      Coșul meu
                    </button>
                    <ul style={dropdown} className="dropdown-menu">
                      <BasketInMenu />
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
