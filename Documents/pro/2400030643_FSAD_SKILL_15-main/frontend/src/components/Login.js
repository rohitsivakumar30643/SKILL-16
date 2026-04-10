import { useState } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios.post("http://localhost:8080/login", user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        alert("Login Success");
      })
      .catch(() => alert("Invalid credentials"));
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange}/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;