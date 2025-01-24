"use client";
import { useAuth } from "../context/AuthContext";
export default function Dashboard() {
  const { user, handleLogout } = useAuth();

  return user ? (
    <div className="container mt-4">
      <div className="main-container">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h2 className="dashboardTitle">
              <strong>Welcome,</strong> {user.username}
            </h2>
            <button className="logoutFromDashboard" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="col-md-6">
            <div className="userInfo">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong>
                {user.phone}
              </p>
              <p>
                <strong>Address:</strong> {user.address.street},{" "}
                {user.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading user details...</p>
  );
}
