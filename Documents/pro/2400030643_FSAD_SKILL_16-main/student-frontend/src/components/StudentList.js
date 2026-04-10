import { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ setEdit }) {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    axios.get("http://localhost:8080/students")
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:8080/students/${id}`)
      .then(() => fetchData());
  };

  return (
    <div>
      <h3>Student List</h3>
      {students.map(s => (
        <div key={s.id}>
          {s.name} | {s.email} | {s.course}
          <button onClick={() => setEdit(s)}>Edit</button>
          <button onClick={() => deleteStudent(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;