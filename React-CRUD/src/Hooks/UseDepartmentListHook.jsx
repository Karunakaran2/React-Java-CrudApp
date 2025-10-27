import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteDepartment,
  listDepartments,
} from "../Services/DepartmentService";
import { toast } from "react-toastify";
import { useRef } from "react";

const UseDepartmentListHook = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const controllerRef = useRef(null);
  const isFetchedRef = useRef(false);

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
