import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import './styles.css';


const StarRatings = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    console.log(hovered);
    

    const handleClick = (currentIndex) => {
        setRating(currentIndex);
    }

    const handleMouseEnter = (currentIndex) => {
        setHovered(currentIndex);
    }

    const handleMouseLeave = () => {
        setHovered(0);
    }

    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            size={40}
                            className={index <= (hovered || rating) ? "active" : "inactive"}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarRatings