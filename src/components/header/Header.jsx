import { useState } from 'react'
import React from 'react'
import HeaderTop from './HeaderTop'
import Navbar from './Navbar'
import './header.css'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <header className='header'>
            <HeaderTop toggle={toggle} setToggle={setToggle} />
            <Navbar toggle={toggle} setToggle={setToggle} />
        </header>
    )
}

export default Header
