import '../css/PagesStyle.css';
import '../css/Home.css';
import NavigationBar from "../components/NavigationBar.js";
import Slider from "../components/Slider.js";
import ActionMoviesSlider from '../components/ActionMoviesSlider.js';
import ComedyMoviesSlider from '../components/ComedyMoviesSlider.js';
import SciFiMoviesSlider from '../components/SciFiMoviesSlider.js';
import Footer from "../components/Footer.js";
import React, {useState, useEffect, useRef} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
import { CollectionMovieContext } from "../context/CollectionMovieContext.js" 

const Home = () => {

    let navigate = useNavigate();

    const [allMovies, setAllMovies] = useState([]);
    
    const [collectionMovies, setCollectionMovies] = useState([])    

    const movieDetails = useContext(MovieContext);
    const collectionMovieDetails = useContext(CollectionMovieContext);

    const baseUrlForImages = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {  

        axios.get(`${baseURL}/all-movies`)
            .then(response => setAllMovies(response.data));

        axios.get(`${baseURL}/collection-movies`)
            .then(response => setCollectionMovies(response.data));     
    }, [])

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
                        <SciFiMoviesSlider movieDetails={movieDetails}/>
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