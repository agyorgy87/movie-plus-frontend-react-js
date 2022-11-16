import '../css/Slider.css';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const ImageSlider = ({slides}) => {

    const [sliderData, setSliderData] = useState([]);
    const [current, setCurrent] = useState(0);

    //const length = slides.length

    useEffect(() => {
        fetch("http://localhost:4000/all-movies-by-action/akció")
            .then(data => data.json())
            .then(parsedData => {
                setSliderData(parsedData)
            })
    })


    return (
        <div className="slider-container">
                <FaArrowLeft className="left-arrow"/>
                {sliderData.map((movies, index) => {
                    return(
                    <div>  
                        <img 
                            src={"http://localhost:4000/icons/" + movies.icon} 
                            className="image"
                            alt="moviepicture"                                               
                            />
                    </div> 
                    )                  
                })}
                <FaArrowRight className="right-arrow"/>             
        </div>
    )
}

export default ImageSlider;

