import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedUsername = user.username.trim();

   
    const payload = {
      username: normalizedUsername,
      userName: normalizedUsername,
      email: normalizedUsername,
      password: user.password,
    };

    try {
      const response = await axios.post("http://localhost:9191/api/users/login", payload);
      const data = response.data || {};

      const username = data.username || data.userName || data.uname || normalizedUsername;
      const id = data.id || data.userId || data.userid || data.user_id || "";

      localStorage.setItem("username", username);
      if (id) {
        localStorage.setItem("userId", String(id));
      }
      sessionStorage.setItem("username", username);
      if (id) {
        sessionStorage.setItem("userId", String(id));
      }

      navigate("/home");
    } catch (error) {
      const serverMessage =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.response?.data ||
        "Invalid username or password";

      alert(typeof serverMessage === "string" ? serverMessage : "Login failed");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;