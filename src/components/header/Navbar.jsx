import React from 'react'
import './header.css'
const Navbar = (props) => {
    const { toggle, setToggle } = props

    return (
        <nav style={{ left: toggle && "0" }} className='navbar'>
            <ul className='navbar-links'>
                <li onClick={() => setToggle(false)} className='navbar-link'>Home</li>
                <li onClick={() => setToggle(false)} className='navbar-link'>Authore</li>
                <li onClick={() => setToggle(false)} className='navbar-link'>About Us</li>
                <li onClick={() => setToggle(false)} className='navbar-link'>Contact Us</li>
                <li onClick={() => setToggle(false)} className='navbar-link'>Register</li>
            </ul>
        </nav>
    )
}

export default Navbar
