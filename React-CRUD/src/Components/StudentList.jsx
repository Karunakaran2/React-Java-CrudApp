import React from "react";
import useStudentListHook from "../Hooks/useStudentListHook";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const { students, setStudents, getDepartmentById, onDelete, editStudent } =
    useStudentListHook();
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Button variant="primary" onClick={() => navigate("/add-student")}>
          Add Student
        </Button>
      </div>
      <div>
        <h1 className="text-center">Student Lists</h1>
      </div>

      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Sl. No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length !== 0 ? (
            students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
                  <td>{getDepartmentById(student.departmentId)}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => editStudent(student.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
