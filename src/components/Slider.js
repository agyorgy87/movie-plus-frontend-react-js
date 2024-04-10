import '../css/Slider.css';
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";

const Slider = ({slidePictures}) => {

    let clearTime = useRef({})

    const movieDetails = useContext(MovieContext);

    let navigate = useNavigate();

    const [current, setCurrent] = useState(0);
    const length = slidePictures.length;

    
    useEffect(() => {
        if(current === 0){
            clearTime.current = setTimeout(() => {setCurrent(1);}, 5000);
        }
        else if(current === 1){
            clearTime.current = setTimeout(() => {setCurrent(2);}, 5000);
        }
        else if(current === 2){
            clearTime.current = setTimeout(() => {setCurrent(0);}, 5000);
        }  
        return () => clearTimeout(clearTime.current) 
    },[current]);
    

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    } 

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slidePictures) || slidePictures.length <= 0) {
        return null;
    }

    return (
        <div className="slider-container">
            <MdArrowBackIos className="left-arrow" onClick={prevSlide}/>
                {slidePictures.map((movies, index) => { 
                    return(
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>  
                            {index === current && ( 
                                <img 
                                src={process.env.REACT_APP_API_URL + "/wide-images/" + movies.wideImage} 
                                className="slider-images"
                                alt="moviepictures"    
                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}                                           
                                />
                            )}
                        </div> 
                    )                  
                })}
            <MdArrowForwardIos className="right-arrow" onClick={nextSlide}/>             
        </div>
  )
}

export default Slider;