import axios from "axios";
const  REST_API_BASE_CALL= 'http://localhost:8080/api/employees';
const  REST_API_GETALL_CALL= 'http://localhost:8080/api/employees/all';
export const listEmployees = () => axios.get(REST_API_GETALL_CALL);
export const createEmployee = (employee) => axios.post(REST_API_BASE_CALL, employee);
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_CALL + '/' + employeeId);
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_CALL + '/' + employeeId, employee);
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_CALL + '/' + employeeId);