import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteDepartment,
  listDepartments,
} from "../Services/DepartmentService";
import { toast } from "react-toastify";

const UseDepartmentListHook = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const fetchDepartments = async () => {
    try {
      const response = await listDepartments();
      setDepartments(response.data);
    } catch (error) {
      toast.error("Failed to fetch contacts");
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const removeDepartment = async (id) => {
    await deleteDepartment(id);
    toast.error("Data Deleted");
    fetchDepartments();
  };

  const editDepartment = (id) => {
    navigate(`/edit-department/${id}`);
  };

  return { departments, fetchDepartments, removeDepartment, editDepartment };
};

export default UseDepartmentListHook;
