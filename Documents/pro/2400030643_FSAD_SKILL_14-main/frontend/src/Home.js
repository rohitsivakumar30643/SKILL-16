import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (!user) navigate("/");
  }, []);

  return (
    <div className="container">
      <h2>Home Page</h2>
      <p>Welcome! Logged in successfully.</p>
    </div>
  );
}

export default Home;