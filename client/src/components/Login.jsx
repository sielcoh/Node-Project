import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const checkIfUserExists = async () => {        
        const { data } = await axios.post('http://localhost:4000/login', {userName,userEmail});
        console.log(data);
    }
    return (
        <div>
            <h1>user Name:</h1>
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <h1>user email:</h1>
            <input type="text" onChange={(e) => setUserEmail(e.target.value)} />
            <button onClick={checkIfUserExists}>login</button>
        </div>
    )
}
