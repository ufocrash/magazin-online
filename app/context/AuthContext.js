"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  // Load user
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Ensure sessionStorage is accessible
      const savedToken = sessionStorage.getItem("token");
      if (savedToken) {
        handleLogin(savedToken);
      }
    }
  }, []);

  const handleLogin = async (token) => {
    try {
      if (!token) throw new Error("Invalid token");

      const decoded = jwtDecode(token);

      // Fetch all users
      const usersResponse = await fetch("https://fakestoreapi.com/users");
      const users = await usersResponse.json();

      // Ensure `decoded.user` exists before checking
      if (!decoded.user) {
        throw new Error("JWT does not contain a username");
      }

      const loggedInUser = users.find(
        (u) => u.username.toLowerCase() === decoded.user.toLowerCase()
      );

      if (!loggedInUser) throw new Error("User not found");

      setUser(loggedInUser);
      setToken(token);
      sessionStorage.setItem("token", token);
      router.push("/dashboard");

      if (typeof window !== "undefined") {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
