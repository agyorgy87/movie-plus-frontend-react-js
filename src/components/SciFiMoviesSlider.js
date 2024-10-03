import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import axios from "axios";

const SciFiMoviesSlider = ({movieDetails}) => {

    let navigate = useNavigate();

    let scifiMoviesScrl = useRef(null);

    const [scifiMovies, setScifiMovies] = useState([]);

    const [scifiMoviesScrollX, setScifiMoviesScrollX] = useState(0);
    const [scifiMoviesScrollEnd, setScifiMoviesScrollEnd] = useState(false);

    const baseUrlForImages = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {
        const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

        axios.get(`${baseURL}/all-movies-by-scifi/scienceFiction`)
            .then(response => setScifiMovies(response.data));
    },[])

    useEffect(() => {
        if (
          scifiMoviesScrl.current &&
          scifiMoviesScrl?.current?.scrollWidth === scifiMoviesScrl?.current?.offsetWidth
        ) {
          setScifiMoviesScrollEnd(true);
        } else {
          setScifiMoviesScrollEnd(false);
        }
        return () => {};
    }, [scifiMoviesScrl?.current?.scrollWidth, scifiMoviesScrl?.current?.offsetWidth]);
    

    const scifiMoviesSlide = (shift) => {
        scifiMoviesScrl.current.scrollLeft += shift;
        setScifiMoviesScrollX(scifiMoviesScrollX + shift); 
    
        if (
          Math.floor(scifiMoviesScrl.current.scrollWidth - scifiMoviesScrl.current.scrollLeft) <=
          scifiMoviesScrl.current.offsetWidth
        ) {
          setScifiMoviesScrollEnd(true);
        } else {
          setScifiMoviesScrollEnd(false);
        }
      };

    const scifiMoviesScrollCheck = () => {
        setScifiMoviesScrollX(scifiMoviesScrl.current.scrollLeft);
        if (
          Math.floor(scifiMoviesScrl.current.scrollWidth - scifiMoviesScrl.current.scrollLeft) <=
          scifiMoviesScrl.current.offsetWidth
        ) {
          setScifiMoviesScrollEnd(true);
        } else {
          setScifiMoviesScrollEnd(false);
        }
      };

    let iconSize = parseInt(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split("px")[0]) * 20
    let iconSizeWithMargin = iconSize + 33.6

    return (
        <div>
            <div>
                <h2 className="movie-genre-texts">Science fiction movies</h2>
            </div>
            <div className="different-genres-containers">
                <div className="home-movies-container" ref={scifiMoviesScrl} onScroll={scifiMoviesScrollCheck}>
                    {
                        scifiMovies.map((movies,index) => (
                            <div key={index}>  
                                <img 
                                src={`${baseUrlForImages}/icons/${movies.icon}`}  
                                className="home-movie-icons" 
                                alt="moviepicture"
                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}/>
                            </div>
                        ))
                    }
                </div>
                <div className="prevoius-arrow-container">
                    {scifiMoviesScrollX !== 0 && (                           
                        <MdArrowBackIos
                        className="prev-button" 
                        onClick={() => scifiMoviesSlide(- iconSizeWithMargin)}/>                                                     
                    )}
                </div>
                <div className="next-arrow-container">
                    {!scifiMoviesScrollEnd && (
                        <MdArrowForwardIos
                        className="next-button" 
                        onClick={() => scifiMoviesSlide(iconSizeWithMargin)}/>
                    )}
                </div> 
            </div>
        </div>
    )
}

export default SciFiMoviesSlider;