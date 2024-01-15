import React, { useState } from 'react'
import './book-slider.css'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const BookSlider = ({ data }) => {

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = direction => {
    if (direction === 'left') {
      setSlideIndex(slideIndex - 1)
    }
    else {
      setSlideIndex(slideIndex + 1)
    }
  }
  return (
    <div className='book-slider-container'>
      {slideIndex >= 0 &&
        <FaChevronLeft onClick={() => handleClick('left')} className='book-slider-arrow-left' />

      }
      <div style={{ transform: `translateX(${slideIndex * -340}px)` }} className='book-slider-wrapper'>
        {data.map(item =>
          <div key={item.id} className='book-slide-item'>
            <img src={`/book/${item.image}`} alt={item.name} className='book-slide-item-img' />
            <h3 className='book-slide-item-title'>{item.title}</h3>
            <div className='ratting'>ratting</div>
            <div className='book-slide-item-price'>${item.price}</div>
            <div className='book-slider-icons-wrapper'>
              <IoEyeSharp className='book-slider-icon-eye' />
              <FaCartPlus className='book-slider-icon-cart' />
            </div>
          </div>
        )}
      </div>
      {slideIndex <= data.length - 1 &&
        <FaChevronRight onClick={() => handleClick('right')} className='book-slider-arrow-right' />

      }
    </div>
  )
}

export default BookSlider
