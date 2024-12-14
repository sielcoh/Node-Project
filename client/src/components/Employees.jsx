import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function Employees() {
  const [allEmployees, setAllEmployees] = useState([])

  const nav = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/employee/getAllEmployees').then(res => {
      setAllEmployees(res.data)
      // console.log(res.data);

    })
  }, [])

  return (
    <div>
      <div className='text-center'>
        <Button variant="outline-light text-primary border-primary" onClick={() => nav('/system/newemployee')}>add new employee</Button>
      </div>

      <h1 className='text-center'>Employees</h1>
      {allEmployees.length > 0 &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Start Work</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee._id}</td>
                <td style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} onClick={() => nav(`/system/employees/${employee._id}`)}>{employee.firstName} {employee.lastName}</td>
                <td>{employee.yearOfStartingWork}</td>
              </tr>
            ))}
          </tbody>
        </Table>}

    </div>
  )
}
