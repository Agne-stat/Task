import React, {useState} from 'react'
import logo from '../assets/images/logo.png'
import './Header.css'
import { Redirect } from 'react-router-dom';

function Header() {
    const [redirect, setRedirect] = useState(null);

    const logout = () => {
        localStorage.removeItem('testio-login');
        setRedirect('/');
    }

    if(redirect) return <Redirect exact to={redirect}></Redirect>

    
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                <button onClick={logout}>Logout</button>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
