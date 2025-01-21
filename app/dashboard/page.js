"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "../utils/auth";

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  console.log(isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect if not logged in
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated ? (
    <div className="container">
      <h2>Welcome to the Dashboard</h2>
      <button onClick={logoutUser}>Logout</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
