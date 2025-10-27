import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { listDepartments } from "../Services/DepartmentService";
import {
  createStudent,
  getStudentById,
  updateStudent,
} from "../Services/StudentService";
import { useNavigate, useParams } from "react-router-dom";

const useStudentFormHook = () => {
  const [studentsData, setStudentsData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    departmentId: "",
  });
  const [departments, setDepartments] = useState([]);
  const controllerRef = useRef(null);
  const isFetchedRef = useRef(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchDepartments = async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    try {
      const response = await listDepartments();
      setDepartments(response.data);
    } catch (error) {
      toast.error("Failed to fetch Departments");
    }
  };

  useEffect(() => {
    if (!isFetchedRef.current) {
      isFetchedRef.current = true;
      fetchDepartments();
    }
    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...studentsData, [name]: value };
    setStudentsData(updatedData);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateStudent(id, studentsData);
        toast.success("Data Updated Successfully");
      } else {
        await createStudent(studentsData);
        toast.success("Data Added Successfully");
      }

      navigate("/studentData");
    } catch (error) {
      toast.error("Failed to Save Data");
    }
  };

  const getStudentDataById = async (id) => {
    const response = await getStudentById(id);
    setStudentsData(response.data);
  };

  useEffect(() => {
    if (id) getStudentDataById(id);
  }, [id]);

  return {
    handleSave,
    handleChange,
    studentsData,
    setStudentsData,
    departments,
    getStudentDataById,
  };
};

export default useStudentFormHook;
