import React, { useEffect, useState } from "react";
import {
  addDepartment,
  getDepartmentById,
  updateDeparment,
} from "../Services/DepartmentService";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const useDepartmentFormHook = () => {
  const [departmentData, setDepartmentData] = useState({
    departmentName: "",
    departmentDescription: "",
  });

  const { id } = useParams();

  const fetchDepartmentById = async (id) => {
    try {
      const response = await getDepartmentById(id);
      setDepartmentData(response.data);
    } catch (error) {
      console.error("Failed to fetch department:", error);
      toast.error("Failed to load department data");
    }
  };

  useEffect(() => {
    if (id) {
      fetchDepartmentById(id);
    }
  }, [id]);

  const navigate = useNavigate();

  const saveDepartment = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateDeparment(id, departmentData);
        toast.success("Updated Successfully");
      } else {
        await addDepartment(departmentData);
        toast.success("Data Added Successfully");
      }

      navigate("/department");
    } catch (error) {
      toast.error("Something Wrong...");
    }
  };

  return {
    departmentData,
    setDepartmentData,
    saveDepartment,
    fetchDepartmentById,
  };
};

export default useDepartmentFormHook;
