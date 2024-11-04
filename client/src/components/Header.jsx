import { Link } from "react-router-dom";
import React, { useContext, useState } from 'react'
import { UserContext } from "../UserContexts";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';

export default function Header() {
    const { user, setUser } = useContext(UserContext)
    const nav = useNavigate()
    const [value, setValue] = useState([1, 4]);
    const handleChange = (val) => setValue(val);

    const logOut = () => {
        setUser("")
        nav('/')
        alert('See You Letter')
    }
    return (
        <Container>
            <Row>
                <Col sm={3}></Col>
                <Col sm={6} className="d-flex p-2 gap-2 justify-content-center">
                    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
                        <ToggleButton id="tbg-btn-1" value={1}>
                            <Link to={'/system/users'} className="link-underline link-underline-opacity-0">
                                <span className="text-white">Users</span>
                            </Link>
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-2" value={2}>
                            <Link to={'/system/employees'} className="link-underline link-underline-opacity-0">
                                <span className="text-white">Employees</span>
                            </Link>
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-3" value={4}>
                            <Link to={'/system/department'} className="link-underline link-underline-opacity-0">
                                <span className="text-white">Department</span>
                            </Link>
                        </ToggleButton>
                        <ToggleButton id="tbg-btn-3" value={3}>
                            <Link to={'/system/shifts'} className="link-underline link-underline-opacity-0">
                                <span className="text-white">Shifts</span>
                            </Link>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col sm={3}>
                    <div className="d-flex p-2 gap-2 justify-content-center">
                        <div>
                            Hello <span className="text-primary">{user}</span>
                        </div>
                        <Button className="px-2 text-nowrap" variant="outline-danger" size="sm" onClick={logOut}>Log Out</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}