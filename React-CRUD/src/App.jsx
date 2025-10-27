import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepartmentList from "./Components/DepartmentList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DepartmentForm from "./Components/DepartmentForm";
import StudentList from "./Components/StudentList";
import StudentForm from "./Components/StudentForm";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/studentData" element={<StudentList />} />
          <Route path="/add-student" element={<StudentForm />} />
          <Route path="/edit-student/:id" element={<StudentForm />} />
          <Route path="/department" element={<DepartmentList />}></Route>
          <Route path="/add-department" element={<DepartmentForm />} />
          <Route path="/edit-department/:id" element={<DepartmentForm />} />
        </Routes>
        <ToastContainer position="top-right" />
      </div>
    </>
  );
}

export default App;
