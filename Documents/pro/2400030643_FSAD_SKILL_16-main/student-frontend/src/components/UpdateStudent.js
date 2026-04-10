import { useEffect, useState } from "react";
import axios from "axios";

function UpdateStudent({ edit, refresh }) {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });

  useEffect(() => {
    if (edit) setStudent(edit);
  }, [edit]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const updateStudent = () => {
    axios.put(`http://localhost:8080/students/${student.id}`, student)
      .then(() => {
        alert("Updated");
        refresh();
      })
      .catch(err => console.log(err));
  };

  if (!edit) return null;

  return (
    <div>
      <h3>Update Student</h3>
      <input name="name" value={student.name} onChange={handleChange}/>
      <input name="email" value={student.email} onChange={handleChange}/>
      <input name="course" value={student.course} onChange={handleChange}/>
      <button onClick={updateStudent}>Update</button>
    </div>
  );
}

export default UpdateStudent;