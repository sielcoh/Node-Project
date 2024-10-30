import React from 'react'
import { useNavigate } from "react-router-dom";


export default function Employees() {
  // const changeDirection = () => {

  // }
  const nav = useNavigate()
  return (
    <div>Employee

      <button onClick={() => nav('/system/newemployee')}>add</button>
    </div>
  )
}
