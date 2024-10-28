import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Layout from './components/Layout';
import Users from './components/Users';
import Shifts from './components/Shifts'
import EditEmployee from './components/EditEmployee'
import Employees from './components/Employees'
import EditDepartment from './components/EditDepartment'
import NewDepartment from './components/NewDepartment'
import NewEmployee from './components/NewEmployee'
import Department from './components/Department'

export default function Main() {
    return (
        <div>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='/system' element={<Layout />}>
                    <Route index element={<Users />} />
                    <Route path="/system/users"  element={<Users />} />
                    <Route path="/system/shifts" element={<Shifts />} />
                    <Route path='/system/employees' element={<Employees />} />
                    <Route path='/system/editemployee' element={<EditEmployee />} />
                    <Route path='/system/newemployee' element={<NewEmployee />} />
                    <Route path='/system/department' element={<Department />} />
                    <Route path='/system/editdepartment' element={<EditDepartment />} />
                    <Route path='/system/newdepartment' element={<NewDepartment />} />
                </Route>
            </Routes>
        </div>
    )
}
