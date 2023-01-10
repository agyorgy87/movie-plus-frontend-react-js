import '../css/PagesStyle.css';
import '../css/Home.scss';
import NavigationBar from "../components/NavigationBar.js";
import Slider from "../components/Slider.js";
import Footer from "../components/Footer.js";
import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from "react-router-dom";
//import { useParams, Link} from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
import { CollectionMovieContext } from "../context/CollectionMovieContext.js" 
import { MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md';

const Home = () => {
    //const params = useParams();
    /*
    let scrl = useRef(null); basic
    */

    let actionMoviesScrl = useRef(null);
    let comedyMoviesScrl = useRef(null);
    let scifiMoviesScrl = useRef(null);

    let navigate = useNavigate();

    const [allMovies, setAllMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [scifiMovies, setScifiMovies] = useState([]);
    const [collectionMovies, setCollectionMovies] = useState([])

    const [sliderData, setSliderData] = useState([]);

    const [actionMoviesScrollX, setActionMoviesScrollX] = useState(0);
    const [actionMoviesScrollEnd, setActionMoviesScrollEnd] = useState(false);

    const [comedyMoviesScrollX, setComedyMoviesScrollX] = useState(0);
    const [comedyMoviesScrollEnd, setComedyMoviesScrollEnd] = useState(false);

    const [scifiMoviesScrollX, setScifiMoviesScrollX] = useState(0);
    const [scifiMoviesScrollEnd, setScifiMoviesScrollEnd] = useState(false);

    const movieDetails = useContext(MovieContext);
    const collectionMovieDetails = useContext(CollectionMovieContext);

    useEffect(() => {  

        fetch("http://localhost:4000/slide-show-images")
            .then(data => data.json())
            .then(parsedData => {
                setSliderData(parsedData)
        })

        fetch("http://localhost:4000/all-movies")
            .then(data => data.json())
            .then(parsedData => {
                setAllMovies(parsedData);
            })

        fetch("http://localhost:4000/all-movies-by-action/akció")
            .then(data => data.json())
            .then(parsedData => {
                setActionMovies(parsedData)
            })

        fetch("http://localhost:4000/all-movies-by-comedy/vígjáték")
            .then(data => data.json())
            .then(parsedData => {
                setComedyMovies(parsedData);
            })

        fetch("http://localhost:4000/all-movies-by-scifi/scifi")
            .then(data => data.json())
            .then(parsedData => {
                setScifiMovies(parsedData);
            })

        fetch("http://localhost:4000/collection-movies")
            .then(data => data.json())
            .then(parsedData => {
                setCollectionMovies(parsedData);
            })
        /*    
        fetch("http://localhost:4000/get-movie/" + params.movieMainTitle)
            .then(data => data.json())
            .then(parsedData => {
                setVisibleMovie(parsedData);
            }) 
        */

         
    }, [])

    /*action movies slider useeffect, slide and scrollcheckfunctions*/

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

      /*comedy movies slider useeffect, slide and scrollcheckfunctions*/

      useEffect(() => {
        if (
          comedyMoviesScrl.current &&
          comedyMoviesScrl?.current?.scrollWidth === comedyMoviesScrl?.current?.offsetWidth
        ) {
          setComedyMoviesScrollEnd(true);
        } else {
          setComedyMoviesScrollEnd(false);
        }
        return () => {};
    }, [comedyMoviesScrl?.current?.scrollWidth, comedyMoviesScrl?.current?.offsetWidth]);
    

    const comedyMoviesSlide = (shift) => {
        comedyMoviesScrl.current.scrollLeft += shift;
        setComedyMoviesScrollX(comedyMoviesScrollX + shift); 
    
        if (
          Math.floor(comedyMoviesScrl.current.scrollWidth - comedyMoviesScrl.current.scrollLeft) <=
          comedyMoviesScrl.current.offsetWidth
        ) {
          setComedyMoviesScrollEnd(true);
        } else {
          setComedyMoviesScrollEnd(false);
        }
      };

    const comedyMoviesScrollCheck = () => {
        setComedyMoviesScrollX(comedyMoviesScrl.current.scrollLeft);
        if (
          Math.floor(comedyMoviesScrl.current.scrollWidth - comedyMoviesScrl.current.scrollLeft) <=
          comedyMoviesScrl.current.offsetWidth
        ) {
          setComedyMoviesScrollEnd(true);
        } else {
          setComedyMoviesScrollEnd(false);
        }
      };

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
                <div className="main-content">
                    <div className="row">
                        <Slider slidePictures={sliderData}/>
                    </div>
                    <div className="row"> 
                        <div className="movie-text-container">
                            <h2 className="movie-genre-texts">AKCIÓ FILMEK</h2>
                        </div>
                        <div className="different-genres-containers">                           
                            <div className="home-movies-container" ref={actionMoviesScrl} onScroll={actionMoviesScrollCheck}>
                                {
                                    actionMovies.map((movies, index) => (
                                        <div>  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
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
                    <div className="row">
                        <div>
                            <h2 className="movie-genre-texts">VÍGJÁTÉKOK</h2>
                        </div>
                        <div className="different-genres-containers">
                            <div className="home-movies-container" ref={comedyMoviesScrl} onScroll={comedyMoviesScrollCheck}>
                                {
                                    comedyMovies.map( movies => (
                                        <div>  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                className="home-movie-icons"
                                                alt="moviepicture"
                                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                        </div>
                                    ))
                                }   
                            </div>
                            <div className="prevoius-arrow-container">
                                {comedyMoviesScrollX !== 0 && (                           
                                    <MdArrowBackIos
                                    className="prev-button" 
                                    onClick={() => comedyMoviesSlide(- iconSizeWithMargin)}                                   
                                    />                                                     
                                )}
                            </div>
                            <div className="next-arrow-container">
                                {!comedyMoviesScrollEnd && (
                                    <MdArrowForwardIos
                                    className="next-button" 
                                    onClick={() => comedyMoviesSlide(iconSizeWithMargin)}                              
                                    />
                                )}
                            </div> 
                        </div>                    
                    </div>
                    <div className="row">
                        <div>
                            <h2 className="movie-genre-texts">SCI-FI FILMEK</h2>
                        </div>
                        <div className="different-genres-containers">
                            <div className="home-movies-container" ref={scifiMoviesScrl} onScroll={scifiMoviesScrollCheck}>
                                {
                                    scifiMovies.map( movies => (
                                        <div >  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
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
                        <h2 className="movie-genre-texts">GYŰJTEMÉNYEK</h2>
                        
                            <div className="home-movies-container">
                                {
                                    collectionMovies.map( movies => (
                                        <div >  
                                            <img 
                                                src={"http://localhost:4000/collection-icons/" + movies.collectionIcon} 
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