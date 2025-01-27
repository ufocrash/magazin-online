"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./style.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { handleLogin } = useAuth();

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      handleLogin(data.token);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg w-25">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={loginUser}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {error && <p className="text-danger text-center mt-2">{error}</p>}
      </div>
    </div>
  );
}
