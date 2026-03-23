// import StudentDetails from "./Components/StudentDetails";
// import CounterApp from "./Components/CounterApp";
// import Bulb from "./Components/Bulb";
// import TodoList from "./Components/TodoList";
// import TemperatureConverter from "./Components/TemperatureConverter";
// import LoginForm from "./Components/LoginForm";
import './App.css'
import React, { useState } from "react";

import AddStudentForm from "./StudentDashboard/AddStudentForm";
import StudentList from "./StudentDashboard/StudentList";

function App() {
  const [students, setStudents] = useState([
    { name: "Mubarak", age: 25, course: "MERN Stack", present: true },
    { name: "Rahul", age: 26, course: "Java", present: false },
    { name: "Shankar", age: 21, course: "Python ML", present: true }
  ]);

  // Add Student
  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // Toggle Attendance
  const toggleAttendance = (index) => {
    const updated = [...students];
    updated[index].present = !updated[index].present;
    setStudents(updated);
  };

  // Delete Student
  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (

    <div className="app-container">
      <h1>Student Dashboard</h1>

      <AddStudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        toggleAttendance={toggleAttendance}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;