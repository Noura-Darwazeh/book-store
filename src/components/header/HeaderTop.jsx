import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import './header.css';

const HeaderTop = (props) => {
    const { toggle, setToggle } = props

    return (
        <div className='header-top'>
            <div onClick={() => setToggle(prev => !prev)} className='menuIcon'>

                {toggle ? <RxCross1 /> : <FiMenu />}

            </div>
            <div className='header-top-logo'>
                <b>Book</b>
                <IoBookOutline style={{ marginLeft: '10px', marginRight: '10px' }} />
                <b>Store</b>
            </div>

            <div className='header-top-search'>
                <input className='header-top-search-input' type='search' placeholder='Search book... ' />
                <CiSearch style={{ color: 'black' }} />
            </div>

            <div className='header-top-login-cart'>
                <IoPerson style={{ marginRight: '20px', cursor: 'pointer' }} />
                <FiShoppingCart style={{ cursor: 'pointer' }} />
            </div>

        </div>
    )
}

export default HeaderTop
