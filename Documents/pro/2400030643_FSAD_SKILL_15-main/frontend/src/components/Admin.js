import API from "../api";

function Admin() {

  const add = () => {
    API.post("/admin/add")
      .then(() => alert("Added"))
      .catch(() => alert("Access Denied"));
  };

  const del = () => {
    API.delete("/admin/delete")
      .then(() => alert("Deleted"))
      .catch(() => alert("Access Denied"));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={add}>Add</button>
      <button onClick={del}>Delete</button>
    </div>
  );
}

export default Admin;