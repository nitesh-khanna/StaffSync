package net.project.ems_backend.mapper;

import net.project.ems_backend.dto.DepartmentDto;
import net.project.ems_backend.dto.EmployeeDto;
import net.project.ems_backend.entity.Department;
import net.project.ems_backend.entity.Employee;

public class DepartmentMapper {
    public static DepartmentDto mapToDepartmentDto(Department department){
        return new DepartmentDto(
                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    public static Department mapToDepartment(DepartmentDto departmentDto){
        return new Department(
                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }
}
