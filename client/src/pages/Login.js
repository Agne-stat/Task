import React from 'react'
import logo from '../assets/images/loginLogo.png'
import './Login.css'

function Login() {
    return (
        <main className="login">
            <div className="login-container">
                <div className="login-container-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <form >
                    <div className="login-container-form">
                        <input placeholder="Username"></input>
                        <input placeholder="Password"></input>
                        <button>Log In</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
