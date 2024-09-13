import '../css/PagesStyle.css';
import '../css/Movies.css';
import React, {useState, useEffect, useRef} from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";

const Movies = () => {  

    let navigate = useNavigate();

    const movieDetails = useContext(MovieContext);

    const allMovies = useRef([]);
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [selectedMoviesGenre, setSelectedMoviesGenre] = useState([]);

    const baseUrlForSearchMoviesGenre = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {
        axios.get(`${baseUrlForSearchMoviesGenre}/all-movies`)
          .then(response => {
            allMovies.current = response.data;
            setVisibleMovies(response.data);
          })
    }, []);

    
    useEffect(() => { 
        moviesGenre();
    },[selectedMoviesGenre])
      
    const moviesGenre = () => {

        let filterMoviesGenre = allMovies.current
        
        if(selectedMoviesGenre !== "none"){   
            filterMoviesGenre = filterMoviesGenre.filter(movie => movie.genre === selectedMoviesGenre);
            setVisibleMovies(filterMoviesGenre); 
        }
        setVisibleMovies(filterMoviesGenre);    
    }
    

    return (  
        <div className="pages-container"> 
            <div className="header"> 
                <NavigationBar/> 
            </div>
                <div className="main-content movies-content">              
                    <div className="movies-select-search-bar-container">
                        <div>
                            <h1 className="movies-text">FILMEK</h1>
                        </div>
                        <div className="genre-buttons"> 
                            <div>
                                <button value="none" onClick={(e) => setSelectedMoviesGenre(e.target.value)}>All</button>                              
                            </div> 
                            <div>
                                <button value="action" onClick={(e) => setSelectedMoviesGenre(e.target.value)}>Action</button>
                            </div>
                            <div>
                                <button value="comedy" onClick={(e) => setSelectedMoviesGenre(e.target.value)}>Comedy</button>
                            </div>
                            <div>
                                <button value="scienceFiction" onClick={(e) => setSelectedMoviesGenre(e.target.value)}>Science Fiction</button>
                            </div>
                        </div>
                    </div>                  
                    <div className="visible-movies-container">
                            {
                                visibleMovies.map( movies => (
                                    <div>  
                                        <img 
                                            src={process.env.REACT_APP_API_URL + "/icons/" + movies.icon} 
                                            className="movies-movie-icons"
                                            alt="moviepicture"
                                            onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                    </div> 
                                ))
                            }
                    </div>                
                </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Movies;