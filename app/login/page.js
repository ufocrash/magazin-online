import React from "react";
import "./style.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="container">
      <div className="modalContainer">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="modalForm">
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input
            className="loginInput"
            type="text"
            placeholder="Email or Phone"
            id="username"
          />

          <label htmlFor="password">Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Password"
            id="password"
          />

          <button className="modal-button">Log In</button>
          <p>
            Don't have an account? Register <Link href={"/register"}>here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
