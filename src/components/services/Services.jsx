import React from 'react'
import './services.css'
import { FaTruck } from "react-icons/fa";
import { BsFillGiftFill } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";

const Services = () => {
    return (
        <div className='services'>
            <div className='service-item'>
                <FaTruck />
                <b>Free Shipping</b>
            </div>

            <div className='service-item'>
                <BsFillGiftFill />
                <b>Gift Card</b>
            </div>

            <div className='service-item'>
                <BsArrowClockwise />
                <b>7 Days Return</b>
            </div>

            <div className='service-item'>
                <BsFillSendFill />
                <b>Contact Us</b>
            </div>

        </div>
    )
}

export default Services
