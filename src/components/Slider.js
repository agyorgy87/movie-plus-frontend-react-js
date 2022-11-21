import '../css/Slider.css';
import React, { useEffect, useState } from 'react';
//import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";

const Slider = ({slidePictures}) => {

    const movieDetails = useContext(MovieContext);

    let navigate = useNavigate();

    const [current, setCurrent] = useState(0);
    const length = slidePictures.length;

    /*
    useEffect(() => {
        if(current === 0){
            setTimeout(() => {setCurrent(1);}, 5000);
        }
        if(current === 1){
            setTimeout(() => {setCurrent(0);}, 5000);
        }
        
        
    },[current])
    */

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
            <MdArrowBackIos className="left-arrow" onClick={prevSlide}/>
                {slidePictures.map((movies, index) => {
                    return(
                        <div className={index === current ? 'slide-active' : 'slide'} key={index}>  
                            {index === current && (
                                <img 
                                src={"http://localhost:4000/wide-images/" + movies.wideImage} 
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

export default Slider