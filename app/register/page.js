import React from "react";
import "./style.css";

const page = () => {
  return (
    <div className="container">
      <div className="modalContainer">
        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <form className="modalForm">
          <h3>Register an account</h3>

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

          <button className="modal-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default page;
