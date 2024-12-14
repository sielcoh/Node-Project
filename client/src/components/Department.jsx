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

  return (
    <div>
      <div className='text-center'>
        <Button variant="outline-light text-primary border-primary" onClick={() => nav('/system/newdepartment')}>Add New Department</Button>
      </div>
      <h1 className='text-center'>Departments</h1>
      {allDepartment.length > 0 && <Table striped bordered hover className="table table-sm">
        <thead>
          <tr>
            <th>Department Name - {allDepartment[0]?.name}  | Manager Name - {allDepartment[0].manager}</th>
          </tr>
        </thead>
        <tbody>
          {allDepartment.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>}
    </div>
  )
}
