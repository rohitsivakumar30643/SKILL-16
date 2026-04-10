import { useState } from "react";
import axios from "axios";

function AddStudent({ refresh }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:8080/students", student)
      .then(() => {
        alert("Added");
        setStudent({ name: "", email: "", course: "" });
        refresh();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h3>Add Student</h3>
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name"/>
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email"/>
      <input name="course" value={student.course} onChange={handleChange} placeholder="Course"/>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddStudent;