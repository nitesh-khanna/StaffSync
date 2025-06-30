import React, { useState, useEffect } from 'react'
import { deleteDepartment, listDepartments } from '../services/DepartmentService';
import { Link, useNavigate } from 'react-router-dom';

const ListDepartmentComponent = () => {

    const [departments, setDepartments]= useState([])

    const navigator= useNavigate();

    useEffect(() => {
        getAllDepartments();
    }, [])

    function getAllDepartments(){
        listDepartments().then((response) => {
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewDepartment(){
        navigator('/add-department')
    }

    function updateDepartment(id){
        navigator(`/edit-department/${id}`)
    }

    function removeDepartment(id){
        deleteDepartment(id).then((response) => {
            console.log(response.data);
            getAllDepartments();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h1 className='text-center'>List of Departments</h1>
        <button className='btn btn-primary mb-2' onClick={addNewDepartment}>Add Department</button>
        {/* <Link to='/add-department' className='btn btn-primary mb-2'>Add Department</Link> */}
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map(department =>
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDescription}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => updateDepartment(department.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeDepartment(department.id)}  style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent