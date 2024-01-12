import React, { useState } from 'react'
import './slider.css'
import FirstBook from '../../assets/images/book1.png'
import SecondBook from '../../assets/images/book2.png'
import ThirdBook from '../../assets/images/book3.png'
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction == 'left') {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slideIndex + 1);

        }
    }
    return (
        <div className='slider-container'>
            {slideIndex !== 0 &&
                <FaAnglesLeft onClick={() => { handleClick('left') }} className='arrow-left' />
            }
            <div style={{ transform: `translateX(${slideIndex * -100}vw)` }} className='slider-wrapper'>

                <div className='slide first-slide'>
                    <div className='slide-img-wrapper'>
                        <img src={FirstBook} alt='First Book' />
                    </div>
                    <div className='slide-info-wrapper'>
                        <h1 className='slide-info-title'>Book Store</h1>
                        <p className='slide-info-desc'>Enjoy a world of reading with our wonderful online store.</p>
                    </div>
                </div>

                <div className='slide second-slide'>
                    <div className='slide-img-wrapper'>
                        <img src={SecondBook} alt='First Book' />
                    </div>
                    <div className='slide-info-wrapper'>
                        <h1 className='slide-info-title'>Check Out The New Titles</h1>
                        <p className='slide-info-desc'>Shop with ease and enjoy home delivery to your address</p>
                    </div>
                </div>

                <div className='slide third-slide'>
                    <div className='slide-img-wrapper'>
                        <img src={ThirdBook} alt='First Book' />
                    </div>
                    <div className='slide-info-wrapper'>
                        <h1 className='slide-info-title'>The Books For Everyone</h1>
                        <p className='slide-info-desc'>The doors of knowledge are open! Shop our library and enjoy an unforgettable journey to limitless worlds.</p>
                    </div>
                </div>
            </div>
            {slideIndex !== 2 &&
                <FaAnglesRight onClick={() => { handleClick('right') }} className='arrow-right' />
            }
        </div>
    )
}

export default Slider
