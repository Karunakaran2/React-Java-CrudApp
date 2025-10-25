import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import UseDepartmentListHook from "../Hooks/UseDepartmentListHook";
import { useNavigate } from "react-router-dom";

const DepartmentList = () => {
  const { departments, fetchDepartments, removeDepartment, editDepartment } =
    UseDepartmentListHook();
  console.log(departments);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Department List</h1>

      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={() => navigate("/add-department")}>
          Add Department
        </Button>
      </div>

      <div className="mt-3">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Department Name</th>
              <th>Job Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {departments.length !== 0 ? (
              departments.map((department) => {
                return (
                  <tr key={department.id}>
                    <td>{department.id}</td>
                    <td>{department.departmentName}</td>
                    <td>{department.departmentDescription}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => editDepartment(department.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="ms-2"
                        onClick={() => removeDepartment(department.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>No data Found</td>
              </tr>
            )}
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentList;
