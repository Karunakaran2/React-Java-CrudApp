import React, { useEffect, useState } from "react";
import { deleteStudent, listStudents } from "../Services/StudentService";
import { toast } from "react-toastify";
import { listDepartments } from "../Services/DepartmentService";
import { useNavigate } from "react-router-dom";

const useStudentListHook = () => {
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const getStudents = async () => {
    try {
      const response = await listStudents();
      setStudents(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("Couldn't fetch Students Data");
    }
  };

  const getDepartments = async () => {
    try {
      const response = await listDepartments();
      setDepartments(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getStudents();
    getDepartments();
  }, []);

  const getDepartmentById = (id) => {
    const department = departments.find((dept) => dept.id === id);
    return department ? department.departmentName : "Unknown";
  };

  const onDelete = async (id) => {
    try {
      await deleteStudent(id);
      toast.error("Student Data Deleted");
      getStudents();
    } catch (error) {}
  };

  const editStudent = (id) => {
    navigate(`/edit-student/${id}`);
  };

  return {
    students,
    setStudents,
    getStudents,
    getDepartmentById,
    onDelete,
    editStudent,
  };
};

export default useStudentListHook;
