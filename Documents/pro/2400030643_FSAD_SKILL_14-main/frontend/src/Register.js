import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users/register", user);
      alert("Registered successfully");
      navigate("/");
    } catch {
      alert("Error");
    }
  };

  return (
  <div className="container">
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
      <input placeholder="Username"
        onChange={(e)=>setUser({...user,username:e.target.value})}/>
      <input type="password" placeholder="Password"
        onChange={(e)=>setUser({...user,password:e.target.value})}/>
      <button>Register</button>
    </form>
    <p>Already user? <Link to="/">Login</Link></p>
  </div>
);
}

export default Register;