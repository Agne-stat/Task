import React, {useEffect, useState} from 'react'
import logo from '../assets/images/loginLogo.png'
import './Login.css'
import axios from 'axios'
import { Redirect } from 'react-router';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(null);
    const [errMessage, setErrMessage] = useState('')

    useEffect(() => {
        setUsername('')
        setPassword('')

        const token = localStorage.getItem('testio-login')
        if(token === null) {
            console.log('not loged in')
        } else {
            setRedirect('/home');
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://playground.tesonet.lt/v1/tokens', {username, password})
        .then((res) => {
            localStorage.setItem('testio-login', res.data.token)
            setRedirect('/home')
        })
        .catch((err) => {
            setErrMessage('Wrong username or password')
        })
    }

    if(redirect) return <Redirect exact to={redirect}></Redirect>

    return (
        <main className="login">
            <div className="login-container">
                <div className="login-container-logo">
                    <img src={logo} alt="logo"></img>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="login-container-form">
                        
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <button>Log In</button>
                    </div>
                    <p>{errMessage}</p>
                </form>
            </div>
        </main>
    )
}

export default Login
