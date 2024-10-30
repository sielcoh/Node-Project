import React, { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../UserContexts';
import { useNavigate } from "react-router-dom";



export default function LoginPage() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const { setUser, user } = useContext(UserContext)
    const nav = useNavigate()


    const checkIfUserExists = async () => {

        try {
            const { data } = await axios.post('http://localhost:4000/login', { userName, userEmail });
            console.log(data);
            document.cookie = data.token
            setUser(userName);
            alert('Login successful');
            nav('/system');
        } catch {
            alert('Login fail');
        }
    }

    return (
        <div className='d-flex justify-content-center mt-4'>
            <div>
                <div className='p-3'>
                    <h1>user Name:</h1>
                    <input type="text" onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className='p-3'>
                    <h1>user email:</h1>
                    <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
                </div>

                <div className='p-3 d-flex justify-content-center'>
                    <button onClick={checkIfUserExists}>login</button>
                </div>
            </div>

        </div>
    )
}
