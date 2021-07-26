import React, { useRef, useState } from 'react'

import './login.scss'

export default function Login() {
    

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
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButtton">Sign In</button>
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
