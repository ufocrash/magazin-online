"use client";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
export default function Dashboard() {
  const { user, handleLogout } = useAuth();
  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return user ? (
    <div className="container mt-4">
      <div className="main-container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h2 className="dashboardTitle">
              <strong>Welcome,</strong> {user.username}
            </h2>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="col-md-6">
            <div className="userInfo card">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong>
                {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {capitalize(user.address.street)},
                {capitalize(user.address.city)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container mt-4">
      <p>You must login to your account to access this page.</p>
      <Link href="/login" className="btn btn-success">
        Login
      </Link>
    </div>
  );
}
