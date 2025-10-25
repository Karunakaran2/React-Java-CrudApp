import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import useDepartmentFormHook from "../Hooks/useDepartmentFormHook";
import { useNavigate } from "react-router-dom";

const DepartmentForm = () => {
  const {
    departmentData,
    setDepartmentData,
    saveDepartment,
    fetchDepartmentById,
  } = useDepartmentFormHook();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...departmentData, [name]: value };
    setDepartmentData(updatedData);
  };

  return (
    <div>
      <div>
        <Button variant="secondary" onClick={() => navigate("/department")}>
          Back
        </Button>
      </div>

      <div className="m-auto">
        <h1 className="text-center">
          {departmentData.length !== 0 ? "Update Department" : "Add Department"}
        </h1>

        <Card className="card-body d-flex align-items-center">
          <Form
            className="w-50 d-flex flex-column gap-3"
            onSubmit={saveDepartment}
          >
            <Form.Group>
              <label className="mb-2">Deparment Name</label>
              <Form.Control
                type="text"
                placeholder="Enter Deparment Name"
                name="departmentName"
                value={departmentData.departmentName}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <label className="mb-2">Job Role</label>
              <Form.Control
                type="text"
                placeholder="Enter Job Role"
                name="departmentDescription"
                value={departmentData.departmentDescription}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              {departmentData.id ? "Update" : "Save"}
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default DepartmentForm;
