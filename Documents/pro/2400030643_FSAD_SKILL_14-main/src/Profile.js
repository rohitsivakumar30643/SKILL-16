import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState(null);
  const username =
    localStorage.getItem("username") || sessionStorage.getItem("username");
  const userId = localStorage.getItem("userId") || sessionStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username && !userId) {
      navigate("/login");
      return;
    }

    const identity = username || userId;

    axios
      .get(`http://localhost:9191/api/users/profile/${identity}`)
      .then((response) => setProfile(response.data))
      .catch(() => alert("Failed to load profile"));
  }, [username, userId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Profile Page</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {profile && (
        <div className="profile-card">
          <p><strong>ID:</strong> {profile.id}</p>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Username:</strong> {profile.username}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;