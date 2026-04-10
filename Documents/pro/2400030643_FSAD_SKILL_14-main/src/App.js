import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import "./App.css";

function App() {
  const storedUsername =
    localStorage.getItem("username") || sessionStorage.getItem("username");
  const storedUserId =
    localStorage.getItem("userId") || sessionStorage.getItem("userId");
  const isLoggedIn = Boolean(storedUsername || storedUserId);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
      <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;