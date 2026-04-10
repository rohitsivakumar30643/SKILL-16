import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const username =
    localStorage.getItem("username") || sessionStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Home Page</h2>
      <h3>Welcome, {username}</h3>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Home;