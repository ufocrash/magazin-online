"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

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
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
