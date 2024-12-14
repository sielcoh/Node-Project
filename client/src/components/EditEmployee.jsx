import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function EditEmployee() {
  const { id } = useParams()
  const [employee, setEmployee] = useState({})

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [yearOfStartingWork, setYearOfStartingWork] = useState(0)
  const nav = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/employee/getAllEmployees').then(res => {
      const employeeData = res.data.find(employee => employee._id === id)
      if (employeeData !== -1) {
        setEmployee(employeeData)
      }
    })
  }, [])

  const editEmployee = async () => {
    const employee = {
      id,
      firstName,
      lastName,
      yearOfStartingWork
    }

    if (firstName && lastName && yearOfStartingWork) {
      try {
        const { data } = await axios.put(`http://localhost:4000/employee/${id}`, employee,
          { headers: { Authorization: `${document.cookie}` } })
        if (data) {
          alert('The employee details have been re-edited');
          nav('/system/employees');
        }
      } catch {
        alert('employee re-edited fail');
      }
    } else {
      alert('details not legit')
    }
  }

  const deleteEmployee = async () => {
    const { data } = await axios.delete(`http://localhost:4000/employee/${id}`,
      { headers: { Authorization: `${document.cookie}` } })

      if(!data){
        alert('somthing wrong')
      }
      alert('The employee is deleted')
      nav('/system/employees');
  }


  return (
    <div>
      <h1 className='text-center'>Edit Employee</h1>
      <h1>Edit emploee</h1>
      <h2>First Name</h2>
      <input type="text" placeholder={employee?.firstName || ''} onChange={(e) => setFirstName(e.target.value)} />

      <h2>Last Name</h2>
      <input type="text" placeholder={employee?.lastName || ''} onChange={(e) => setLastName(e.target.value)} />

      <h2>Start Work</h2>
      <input type="text" placeholder={employee?.yearOfStartingWork || ''} onChange={(e) => setYearOfStartingWork(e.target.value)} />
      <br />
      <button onClick={editEmployee}>Edit Employee</button>
      <button onClick={deleteEmployee}>Delete Employee</button>

    </div>
  )
}
