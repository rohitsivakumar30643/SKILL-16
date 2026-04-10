import API from "../api";

function Employee() {

  const getProfile = () => {
    API.get("/employee/profile")
      .then(res => alert(JSON.stringify(res.data)))
      .catch(() => alert("Unauthorized"));
  };

  return (
    <div>
      <h2>Employee</h2>
      <button onClick={getProfile}>View Profile</button>
    </div>
  );
}

export default Employee;