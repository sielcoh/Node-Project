import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function Department() {

  const nav = useNavigate()
  const [allDepartment, setAllDepartment] = useState([])


  useEffect(() => {
    axios.get('http://localhost:4000/department/getAllDepartment').then(res => {
      setAllDepartment(res.data)
      console.log(res.data);
    })
  }, [])

  const handleEditDepartment = (department) => {
    console.log(department);
  }

  const handleEditEmployee = (employee) => {
    console.log(employee);
  }


  return (
    <div>
      <div className='text-center'>
        <Button variant="outline-light text-primary border-primary" onClick={() => nav('/system/newdepartment')}>Add New Department</Button>
      </div>
      <h1 className='text-center'>Departments</h1>
      {allDepartment.length > 0 && <Table striped bordered hover className="table table-sm">
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Manager Name</th>
            <th>Employees</th>
          </tr>
        </thead>
        <tbody>
          {allDepartment.map((department) => (
            <tr key={department._id}>
              <td>{department.name}</td>
              <td>
                <a style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} onClick={() => handleEditDepartment(department.id)}>{department.manager}</a>
              </td>
              {department.employees.map((employee, index) => {
                <div key={index}>
                  <a style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} onClick={() => handleEditEmployee(employee)}>{employee}</a>
                </div>
              })}
            </tr>
          ))}
        </tbody>
      </Table>}
    </div>
  )
}
