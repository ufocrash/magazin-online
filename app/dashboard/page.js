"use client";
import { useAuth } from "../context/AuthContext";
export default function Dashboard() {
  const { user, handleLogout } = useAuth();
  console.log(user);

  return user ? (
    <div className="container">
      <div className="main-container">
        <div>
          <h2>Welcome, {user.username}!</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>
            Address: {user.address.street}, {user.address.city}
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading user details...</p>
  );
}
