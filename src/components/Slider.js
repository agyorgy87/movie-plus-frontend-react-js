import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = ({slidePictures}) => {

    const [current, setCurrent] = useState(0);
    const length = slidePictures.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current);

    if(!Array.isArray(slidePictures) || slidePictures.length <= 0) {
        return null;
    }

    return (
        <div className="slider-container">
            <FaArrowLeft className="left-arrow" onClick={prevSlide}/>
                {slidePictures.map((movies, index) => {
                    return(
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>  
                            {index === current && (
                                <img 
                                src={"http://localhost:4000/icons/" + movies.icon} 
                                className="slider-images"
                                alt="moviepictures"                                               
                                />
                            )}
                        </div> 
                    )                  
                })}
            <FaArrowRight className="right-arrow" onClick={nextSlide}/>             
        </div>
  )
}

export default Slider