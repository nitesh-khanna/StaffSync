package net.project.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.project.ems_backend.dto.EmployeeDto;
import net.project.ems_backend.entity.Department;
import net.project.ems_backend.entity.Employee;
import net.project.ems_backend.exception.ResourceNotFoundException;
import net.project.ems_backend.mapper.EmployeeMapper;
import net.project.ems_backend.repository.DepartmentRepository;
import net.project.ems_backend.repository.EmployeeRepository;
import net.project.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    private DepartmentRepository departmentRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.mapToEmployee(employeeDto);
        Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exist with id: " + employeeDto.getDepartmentId())
        );

        employee.setDepartment(department);

        Employee savedEmployee= employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee= employeeRepository.findById(employeeId).
                orElseThrow(()->
                        new ResourceNotFoundException("employee does not exist with id: "+ employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees= employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee) ).
                collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee does not exists with id: " + employeeId)
        );

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Department department = departmentRepository.findById(updatedEmployee.getDepartmentId()).orElseThrow(
                () -> new ResourceNotFoundException("Department does not exist with id: " + updatedEmployee.getDepartmentId())
        );

        employee.setDepartment(department);

        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee= employeeRepository.findById(employeeId).
                orElseThrow(()->
                        new ResourceNotFoundException("Employee does not exists with id: "+ employeeId));
        employeeRepository.deleteById(employeeId);
    }
}
