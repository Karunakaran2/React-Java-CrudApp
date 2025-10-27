import axios from "axios";

const REST_UPI_URL = "http://localhost:8083/api/students";

export const listStudents = () => {
  return axios.get(REST_UPI_URL);
};

export const createStudent = (student) => {
  return axios.post(REST_UPI_URL, student);
};

export const deleteStudent = (id) => {
  return axios.delete(REST_UPI_URL + "/" + id);
};

export const getStudentById = (id) => {
  return axios.get(REST_UPI_URL + "/" + id);
};

export const updateStudent = (id, data) => {
  return axios.put(REST_UPI_URL + "/" + id, data);
};
