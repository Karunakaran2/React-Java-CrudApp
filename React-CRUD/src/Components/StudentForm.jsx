import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useStudentFormHook from "../Hooks/useStudentFormHook";

const StudentForm = () => {
  const { handleSave, handleChange, studentsData, departments } =
    useStudentFormHook();
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center">
        {studentsData.id ? "Update Student Data" : "Add Student Data"}
      </h1>

      <div className="d-flex justify-content-end mb-2">
        <Button variant="secondary" onClick={() => navigate("/studentData")}>
          Back
        </Button>
      </div>

      <Card className="card-body align-items-center">
        <Form className="w-50 d-flex flex-column gap-2" onSubmit={handleSave}>
          <Form.Group>
            <label className="mb-2" htmlFor="">
              First Name
            </label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={studentsData.firstName}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <label className="mb-2" htmlFor="">
              Last Name
            </label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="lastName"
              value={studentsData.lastName}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <label className="mb-2" htmlFor="">
              Mail ID
            </label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="email"
              value={studentsData.email}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <label className="mb-2" htmlFor="">
              Department Name
            </label>
            <select
              name="departmentId"
              value={studentsData.departmentId}
              className="form-select"
              onChange={handleChange}
            >
              <option value="Select Department">Select Department</option>
              {departments.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item.departmentName}
                  </option>
                );
              })}
            </select>
          </Form.Group>

          <button className="btn btn-primary mt-2" type="submit">
            {studentsData.id ? "Update" : "Save"}
          </button>
        </Form>
      </Card>
    </div>
  );
};

export default StudentForm;
