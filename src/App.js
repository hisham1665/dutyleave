import StudentPage from "./pages/StudentPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Student from "./widgets/Student";
import FacultyPage from "./pages/FacultyPage";

function App() {
  return (
    <div className="App">
       <Router>
        <div>
          
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/student" element={<StudentPage/>} />
            <Route path="/dutyLeaveApplication" element={<Student/>} />
            <Route path="/faculty" element={<FacultyPage/>} />
          </Routes>
        </div>
    </Router>
    </div>
  );
}

export default App;
