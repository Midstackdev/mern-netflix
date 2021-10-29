import React, { useState, useContext } from 'react'
import { login } from '../../context/authContext/ApiRequests'
import { AuthContext } from '../../context/authContext/AuthContext'

import './login.scss'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        login({ email, password}, dispatch)
        setEmail('')
        setPassword('')
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="" className="logo" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button className="loginButtton" onClick={handleLogin}>Sign In</button>
                    <span>
                        New to Nextflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}
