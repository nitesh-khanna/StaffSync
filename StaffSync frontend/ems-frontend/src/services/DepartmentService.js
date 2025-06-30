import axios from "axios";
const  DEPARTMENT_REST_API_BASE_CALL= 'http://localhost:8080/api/departments';
export const listDepartments = () => axios.get(DEPARTMENT_REST_API_BASE_CALL);
export const createDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_CALL, department);
export const getDepartment = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_CALL + '/' + departmentId);
export const updateDepartment = (departmentId, department) => axios.put(DEPARTMENT_REST_API_BASE_CALL + '/' + departmentId, department);
export const deleteDepartment = (departmentId) => axios.delete(DEPARTMENT_REST_API_BASE_CALL + '/' + departmentId);