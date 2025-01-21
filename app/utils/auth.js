// utils/auth.js
export async function loginUser(username, password) {
  try {
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Invalid username or password");

    const data = await response.json();
    localStorage.setItem("token", data.token); // Store JWT in localStorage
    return data;
  } catch (error) {
    console.error("Login failed:", error.message);
    return null;
  }
}

export function logoutUser() {
  localStorage.removeItem("token");
  window.location.href = "/login"; // Redirect to login
}
