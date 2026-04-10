import { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  const [edit, setEdit] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => setRefreshFlag(!refreshFlag);

  return (
    <div>
      <AddStudent refresh={refresh} />
      <UpdateStudent edit={edit} refresh={refresh} />
      <StudentList setEdit={setEdit} key={refreshFlag} />
    </div>
  );
}

export default App;