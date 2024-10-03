import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';
import axios from "axios";

const ComedyMoviesSlider = ({movieDetails}) => {

    let navigate = useNavigate();

    let comedyMoviesScrl = useRef(null);

    const [comedyMovies, setComedyMovies] = useState([]);

    const [comedyMoviesScrollX, setComedyMoviesScrollX] = useState(0);
    const [comedyMoviesScrollEnd, setComedyMoviesScrollEnd] = useState(false);

    const baseUrlForImages = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {
        const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

        axios.get(`${baseURL}/all-movies-by-comedy/comedy`)
            .then(response => setComedyMovies(response.data));
    }, [])

    useEffect(() => {
        if (comedyMoviesScrl.current && comedyMoviesScrl?.current?.scrollWidth === comedyMoviesScrl?.current?.offsetWidth) {
          setComedyMoviesScrollEnd(true);
        } else {
          setComedyMoviesScrollEnd(false);
        }
        return () => {};
    }, [comedyMoviesScrl?.current?.scrollWidth, comedyMoviesScrl?.current?.offsetWidth]);
    

    const comedyMoviesSlide = (shift) => {
        comedyMoviesScrl.current.scrollLeft += shift;
        setComedyMoviesScrollX(comedyMoviesScrollX + shift); 
    
        if (Math.floor(comedyMoviesScrl.current.scrollWidth - comedyMoviesScrl.current.scrollLeft) <= comedyMoviesScrl.current.offsetWidth) {
          setComedyMoviesScrollEnd(true);
        } else {
          setComedyMoviesScrollEnd(false);
        }
      };

    const comedyMoviesScrollCheck = () => {
        setComedyMoviesScrollX(comedyMoviesScrl.current.scrollLeft);
        if (Math.floor(comedyMoviesScrl.current.scrollWidth - comedyMoviesScrl.current.scrollLeft) <= comedyMoviesScrl.current.offsetWidth) {
          setComedyMoviesScrollEnd(true);
        } else {
          setComedyMoviesScrollEnd(false);
        }
    };

    let iconSize = parseInt(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize.split("px")[0]) * 20
    let iconSizeWithMargin = iconSize + 33.6

    return (
        <div>
            <div>
                <h2 className="movie-genre-texts">Comedy movies</h2>
            </div>
            <div className="different-genres-containers">
                <div className="home-movies-container" ref={comedyMoviesScrl} onScroll={comedyMoviesScrollCheck}>
                    {
                        comedyMovies.map((movies,index) => (
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
                    {comedyMoviesScrollX !== 0 && (                           
                        <MdArrowBackIos
                        className="prev-button" 
                        onClick={() => comedyMoviesSlide(- iconSizeWithMargin)}/>                                                     
                    )}
                </div>
                <div className="next-arrow-container">
                    {!comedyMoviesScrollEnd && (
                        <MdArrowForwardIos
                        className="next-button" 
                        onClick={() => comedyMoviesSlide(iconSizeWithMargin)}/>
                    )}
                </div> 
            </div>         
        </div>
    )
}

export default ComedyMoviesSlider;