import '../css/PagesStyle.css';
import '../css/Home.css';
import NavigationBar from "../components/NavigationBar.js";
import Slider from "../components/Slider.js";
import ActionMoviesSlider from '../components/ActionMoviesSlider.js';
import ComedyMoviesSlider from '../components/ComedyMoviesSlider.js';
import Footer from "../components/Footer.js";
import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
import { CollectionMovieContext } from "../context/CollectionMovieContext.js" 
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';


const Home = () => {

    let scifiMoviesScrl = useRef(null);

    let navigate = useNavigate();

    const [allMovies, setAllMovies] = useState([]);
    
    const [scifiMovies, setScifiMovies] = useState([]);
    const [collectionMovies, setCollectionMovies] = useState([])    

    

    const [scifiMoviesScrollX, setScifiMoviesScrollX] = useState(0);
    const [scifiMoviesScrollEnd, setScifiMoviesScrollEnd] = useState(false);

    const movieDetails = useContext(MovieContext);
    const collectionMovieDetails = useContext(CollectionMovieContext);

    const baseUrlForImages = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {  

        const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

        //axios.get(`${baseURL}/slide-show-images`)
        //.then(response => setSliderData(response.data));

        axios.get(`${baseURL}/all-movies`)
            .then(response => setAllMovies(response.data));

        axios.get(`${baseURL}/all-movies-by-scifi/scienceFiction`)
            .then(response => setScifiMovies(response.data));

        axios.get(`${baseURL}/collection-movies`)
            .then(response => setCollectionMovies(response.data));     
    }, [])
    
      /*scifi movies slider useeffect, slide and scrollcheckfunctions*/

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
        <div className="pages-container"> 
            <div className="header">
                <NavigationBar/>
            </div>            
                <div> 
                    <div className="row">
                        <Slider/>
                    </div>
                    <div className="row">
                        <ActionMoviesSlider movieDetails={movieDetails}/>
                    </div>
                    <div className="row">
                        <ComedyMoviesSlider movieDetails={movieDetails}/>        
                    </div>
                    <div className="row">
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
                                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="prevoius-arrow-container">
                                {scifiMoviesScrollX !== 0 && (                           
                                    <MdArrowBackIos
                                    className="prev-button" 
                                    onClick={() => scifiMoviesSlide(- iconSizeWithMargin)}                                   
                                    />                                                     
                                )}
                            </div>
                            <div className="next-arrow-container">
                                {!scifiMoviesScrollEnd && (
                                    <MdArrowForwardIos
                                    className="next-button" 
                                    onClick={() => scifiMoviesSlide(iconSizeWithMargin)}                              
                                    />
                                )}
                            </div> 
                        </div>
                    </div>
                    <div className="row">  
                        <h2 className="movie-genre-texts">Collections</h2>                       
                            <div className="home-movies-container">
                                {
                                    collectionMovies.map((movies,index) => (
                                        <div key={index}>  
                                            <img                                               
                                                src={`${baseUrlForImages}/collection-icons/${movies.collectionIcon}`} 
                                                className="home-movie-icons" 
                                                alt="moviepicture"
                                                onClick={() => { collectionMovieDetails.setValue(movies); navigate("/selectedcollectionmovie")}}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                    </div>               
                </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Home;

/* 354 line */