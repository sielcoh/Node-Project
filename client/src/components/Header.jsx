import { Link } from "react-router-dom";
import React, { useContext } from 'react'
import { UserContext } from "../UserContexts";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()


    const logOut = () => {
        setUser("")
        nav('/')
        alert('See You Letter')
    }
    return (
        <header className="d-flex justify-content-evenly">
            <div className="d-flex p-2 gap-2 justify-content-center ">
                <div>
                    <Link to={'/system/users'}>
                        <span>Users</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/system/employees'}>
                        <span>Employees</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/system/department'}>
                        <span>Department</span>
                    </Link>
                </div>
                <div>
                    <Link to={'/system/shifts'}>
                        <span>Shifts</span>
                    </Link>
                </div>
            </div>
            <div className="ms-auto">
                <div>
                    {user}
                </div>
                <button onClick={logOut}>Log Out</button>
            </div>





        </header>
    )
}