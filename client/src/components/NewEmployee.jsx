import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function NewEmployee() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [yearOfStartingWork, setYearOfStartingWork] = useState(0)

  const nav = useNavigate()

  const creatNewEmployee = async () => {
    const employee = {
      firstName,
      lastName,
      yearOfStartingWork
    }

    if (firstName && lastName && yearOfStartingWork) {
      try {
        const { data } = await axios.post('http://localhost:4000/employee/addNewEmployee', employee,
          { headers: { Authorization: `${document.cookie}` } })
        if (data) {
          alert('employee added');
          nav('/system/employees');
        }
      } catch {
        alert('employee added fail');
      }
    } else {
      alert('details not legit')
    }
  }

  return (
    <div>
      <h1>Add New emploee</h1>
      <h2>First Name</h2>
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />

      <h2>Last Name</h2>
      <input type="text" onChange={(e) => setLastName(e.target.value)} />

      <h2>Start Work</h2>
      <input type="text" onChange={(e) => setYearOfStartingWork(e.target.value)} />
      <br />
      <button onClick={creatNewEmployee}>Add New Employee</button>
    </div>
  )
}
