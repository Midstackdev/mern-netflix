import React, { useContext, useState } from 'react'
import { login } from '../../context/authContext/ApiRequests'
import { AuthContext } from '../../context/authContext/AuthContext'
import './login.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isFetching, dispatch } = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        const formData = {
            email,
            password
        }
        login(formData, dispatch)
    }

    return (
        <div className="login">
            <form className="loginForm">
                <input type="email" className="loginInput" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="loginInput" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}
