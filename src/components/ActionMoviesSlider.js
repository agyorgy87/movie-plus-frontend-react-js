import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import axios from "axios";

const ActionMoviesSlider = ({movieDetails}) => {

    let navigate = useNavigate();

    let actionMoviesScrl = useRef(null);

    const [actionMovies, setActionMovies] = useState([]);

    const [actionMoviesScrollX, setActionMoviesScrollX] = useState(0);
    const [actionMoviesScrollEnd, setActionMoviesScrollEnd] = useState(false);

    const baseUrlForImages = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    

    useEffect(() => {

        const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

        axios.get(`${baseURL}/all-movies-by-action/action`)
        .then(response => setActionMovies(response.data), console.log(actionMovies));
    })

    let iconSize = parseInt(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split("px")[0]) * 20
    let iconSizeWithMargin = iconSize + 33.6

    useEffect(() => {
        if (
          actionMoviesScrl.current &&
          actionMoviesScrl?.current?.scrollWidth === actionMoviesScrl?.current?.offsetWidth
        ) {
          setActionMoviesScrollEnd(true);
        } else {
          setActionMoviesScrollEnd(false);
        }
        return () => {};
    }, [actionMoviesScrl?.current?.scrollWidth, actionMoviesScrl?.current?.offsetWidth]);
    

    const actionMoviesSlide = (shift) => {
        actionMoviesScrl.current.scrollLeft += shift;
        setActionMoviesScrollX(actionMoviesScrollX + shift); 
    
        if (
          Math.floor(actionMoviesScrl.current.scrollWidth - actionMoviesScrl.current.scrollLeft) <=
          actionMoviesScrl.current.offsetWidth
        ) {
          setActionMoviesScrollEnd(true);
        } else {
          setActionMoviesScrollEnd(false);
        }
      };

    const actionMoviesScrollCheck = () => {
        setActionMoviesScrollX(actionMoviesScrl.current.scrollLeft);
        if (
          Math.floor(actionMoviesScrl.current.scrollWidth - actionMoviesScrl.current.scrollLeft) <=
          actionMoviesScrl.current.offsetWidth
        ) {
          setActionMoviesScrollEnd(true);
        } else {
          setActionMoviesScrollEnd(false);
        }
      };

  return (
    <div className="row"> 
                        <div className="movie-text-container">
                            <h2 className="movie-genre-texts">Action movies</h2>
                        </div>
                        <div className="different-genres-containers">                          
                            <div className="home-movies-container" ref={actionMoviesScrl} onScroll={actionMoviesScrollCheck}>
                                {
                                    actionMovies.map((movies, index) => (
                                        <div key={index}>  
                                            <img 
                                                src={`${baseUrlForImages}/icons/${movies.icon}`}  
                                                className="home-movie-icons"
                                                alt="moviepicture" 
                                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                        </div>
                                    ))
                                }
                            </div> 
                            <div className="prevoius-arrow-container">
                                {actionMoviesScrollX !== 0 && (                           
                                    <MdArrowBackIos
                                    className="prev-button" 
                                    onClick={() => actionMoviesSlide(- iconSizeWithMargin)}                                  
                                    />                                                     
                                )}
                            </div>
                            <div className="next-arrow-container">
                                {!actionMoviesScrollEnd && (
                                    <MdArrowForwardIos
                                    className="next-button" 
                                    onClick={() => actionMoviesSlide(iconSizeWithMargin)}                                                                
                                    />
                                )}
                            </div>       
                        </div>
                    </div>
  )
}

export default ActionMoviesSlider;
