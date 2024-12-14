import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function NewDepartment() {
  const [allEmployees, setAllEmployees] = useState([])
  const [name, setName] = useState("")
  const [manager, setManager] = useState("")

  const nav = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:4000/employee/getAllEmployees').then(res => {
      setAllEmployees(res.data)
    })
  }, [])


  const creatNewDepartment = async () => {
    const department = {
      name,
      manager,
      employees: []
    }

    if (name && manager) {
      try {
        const { data } = await axios.post('http://localhost:4000/department/addNewDepartment', department,
          { headers: { Authorization: `${document.cookie}` } })
        if (data) {
          alert('department added');
          nav('/system/department');
        }
      } catch {
        alert('department added fail');
      }
    } else {
      alert('details not legit')
    }
  }

  return (
    <div>
      <h1>Add New department</h1>
      <h2>Department Name</h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <h2>Manager Name</h2>

      <br />
      <select onChange={(e) => setManager(e.target.value)}>
        <option defaultValue={''}>Open this select menu</option>
          {allEmployees.map(employee =>(
            <option key={employee._id} value={employee.name}>{employee.firstName}</option>
          ))}
      </select>
      <br />
      <button onClick={creatNewDepartment}>Add New Employee</button>
    </div>
  )
}
