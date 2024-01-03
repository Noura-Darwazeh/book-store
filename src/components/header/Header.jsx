import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-top'>
                <div className='header-top-logo'>
                    <b>Book</b>
                    <IoBookOutline style={{ marginLeft: '10px', marginRight: '10px' }} />
                    <b>Store</b>
                </div>

                <div className='header-top-search'>
                    <input className='header-top-search-input' type='search' placeholder='Search in book store... ' />
                    <CiSearch style={{ color: 'black' }} />
                </div>

                <div className='header-top-login-cart'>
                    <IoPerson style={{ marginRight: '20px', cursor: 'pointer' }} />
                    <FiShoppingCart style={{ cursor: 'pointer' }} />
                </div>

            </div>

            {/* nav */}

            <nav className='navbar'>
                <ul className='navbar-links'>
                    <li className='navbar-link'>Home</li>
                    <li className='navbar-link'>Authore</li>
                    <li className='navbar-link'>About Us</li>
                    <li className='navbar-link'>Contact Us</li>
                    <li className='navbar-link'>Register</li>
                </ul>

            </nav>
        </header>
    )
}

export default Header
