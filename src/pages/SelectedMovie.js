import '../css/PagesStyle.css';
import '../css/SelectedMovie.css'
import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
import { BsFillPlayFill } from 'react-icons/bs';
import { MdDone } from 'react-icons/md';
import { AiOutlinePlus} from 'react-icons/ai';


const SelectedMovie = () => { 

    const [currentlyDate, setCurrentlyDate] = useState(new Date());

    const [movieHourLength, setMovieHourLength] = useState();
    const [movieMinuteLength, setMovieMinuteLength] = useState();

    const movieDetails = useContext(MovieContext);

    let selectedMoviesGenre = movieDetails.value.genre
    let movieGenreUppercase = selectedMoviesGenre.toUpperCase();

    useEffect(() => {
        let movieInMinutes = movieDetails.value.movieLength;
        let countMovieHour = movieInMinutes / 60;
        setMovieHourLength(Math.trunc(countMovieHour));
        let remainingMovieMinutes = movieInMinutes % 60;
        setMovieMinuteLength(remainingMovieMinutes);
    }, [movieHourLength, movieMinuteLength]);

    const addToFavorites = () => {
        console.log("work");
        let favoritMovieDetails = movieDetails.value;
        if(localStorage.getItem("favorites") === null){
            let listForFavoritMovies = [];
            listForFavoritMovies.push(favoritMovieDetails);
            let stringifiedMovieList = JSON.stringify(listForFavoritMovies);
            localStorage.setItem("favorites", stringifiedMovieList);
        }else{
            let listForFavoritMovies = localStorage.getItem("favorites");
            let parsedListForFavoritMovies = JSON.parse(listForFavoritMovies);
            if(parsedListForFavoritMovies.filter(movie => movie.movieTitle === favoritMovieDetails.movieTitle).length === 0){
                parsedListForFavoritMovies.push(favoritMovieDetails);
            }else{
                parsedListForFavoritMovies = parsedListForFavoritMovies.filter(movie => movie.movieTitle !== favoritMovieDetails.movieTitle)
            }
            let stringifiedMovieDetails = JSON.stringify(parsedListForFavoritMovies);
            localStorage.setItem("favorites", stringifiedMovieDetails);
        }
        setCurrentlyDate(new Date());
    }
    
    let listForFavoritMovies = localStorage.getItem("favorites");
    let parsedListForFavoritMovies = listForFavoritMovies != null ? JSON.parse(listForFavoritMovies) : [];
    const isMovieInList = parsedListForFavoritMovies.filter(movie => movie.movieTitle === movieDetails.value.movieTitle).length;

    return (
      <div className="pages-container">   
          <div className="header">
              <NavigationBar/>
          </div>
          <div className="selected-movie-container main-content" style={{backgroundImage: `url("${process.env.REACT_APP_API_HOST}/img/${movieDetails.value.image}")`}}>
                <div className="gradient-background">
                    <div className="movie-details-container">
                        <p className="main-title">{movieDetails.value.movieTitle}</p>
                            <div className="age-year-time-container"> 
                                <div className="movie-length">
                                    <p className="movie-data">{movieHourLength} ÓRA {movieMinuteLength} PERC</p>
                                </div>                              
                                <div className="movie-age">
                                    <p className="movie-data">{movieDetails.value.ageLimit}+</p> 
                                </div>
                                <div className="movie-release">
                                    <p className="movie-data">{movieDetails.value.releaseDate}</p>
                                </div>                                                              
                                 <div className="movie-genre">
                                    <p className="movie-data">{movieGenreUppercase}</p>
                                 </div>
                                
                                {/*<span class="dot"></span>*/}
                            </div>                                              
                            <div className="play-and-add-buttons-container">   
                                <div>                           
                                    <button className="play-button"><BsFillPlayFill className="play-icon"/></button>            
                                </div>   
                                <div className="movie-add-pipe-button-container">                                            
                                    {
                                        isMovieInList === 0 ?
                                        <button className="add-button" onClick={addToFavorites}><AiOutlinePlus/></button>
                                        :
                                        <button className="pipe-button" onClick={addToFavorites}><MdDone/></button>
                                    }  
                                </div>                               
                            </div>
                            <div className="movie-description-container">
                                <p className="movie-description">{movieDetails.value.description}</p>
                            </div>
                            <div className="movie-director-container">
                                <p className="movie-director-title">Rendező:</p>
                                <p className="movie-director-name">{movieDetails.value.director}</p>  
                            </div>
                            <div>
                                <p className="movie-actors-title">Szereplők:</p>
                                <p className="movie-actor-names">{movieDetails.value.actors}</p>
                            </div>      
                    </div>  
                </div>
          </div>
          <div className="footer">
              <Footer/>
          </div>
      </div>
  )
}

export default SelectedMovie;