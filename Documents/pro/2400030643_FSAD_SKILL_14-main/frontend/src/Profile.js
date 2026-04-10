import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("userId");

    if (!id) {
      navigate("/");
      return;
    }

    axios.get(`http://localhost:8080/user/${id}`)
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Profile</h2>
      <p>ID: {data.id}</p>
      <p>Username: {data.username}</p>
    </div>
  );
}

export default Profile;