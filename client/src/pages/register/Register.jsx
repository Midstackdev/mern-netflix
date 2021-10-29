import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router'

import './register.scss'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const history = useHistory()

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }
    
    const handleFinish = async (e) => {
        e.preventDefault()
        setUsername(usernameRef.current.value)
        setPassword(passwordRef.current.value)
        await axios.post(`auth/register`, { email, username, password })
        history.push('/login')
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png" alt="" className="logo" />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restatrt your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" name="" placeholder="email address" ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>

                ) : (
                    <form className="input">
                        <input type="text" name="" placeholder="username" ref={usernameRef} />
                        <input type="password" name="" placeholder="password" ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}
