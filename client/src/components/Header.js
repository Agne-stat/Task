import React from 'react'
import logo from '../assets/images/logo.png'
import './Header.css'

function Header() {
    return (
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo"></img>
                </div>
                <div>
                <button>Logout</button>
                </div>
                
            </nav>
        </header>
    )
}

export default Header
