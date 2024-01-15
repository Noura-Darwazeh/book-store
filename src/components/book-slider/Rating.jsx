import React from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Rating = ({ rating, reviews }) => {
    return (
        <div className='rating'>
            {
                rating >= 1 ? <IoIosStar className='star' />
                    : rating >= 0.5 ? <IoIosStarHalf className='star' />
                        : <IoIosStarOutline className='star' />

            }

            {
                rating >= 2 ? <IoIosStar className='star' />
                    : rating >= 1.5 ? <IoIosStarHalf className='star' />
                        : <IoIosStarOutline className='star' />

            }

            {
                rating >= 3 ? <IoIosStar className='star' />
                    : rating >= 2.5 ? <IoIosStarHalf className='star' />
                        : <IoIosStarOutline className='star' />

            }

            {
                rating >= 4 ? <IoIosStar className='star' />
                    : rating >= 3.5 ? <IoIosStarHalf className='star' />
                        : <IoIosStarOutline className='star' />

            }

            {
                rating >= 5 ? <IoIosStar className='star' />
                    : rating >= 4.5 ? <IoIosStarHalf className='star' />
                        : <IoIosStarOutline className='star' />

            }

            <b>{reviews} reviews</b>
        </div>
    )
}

export default Rating
