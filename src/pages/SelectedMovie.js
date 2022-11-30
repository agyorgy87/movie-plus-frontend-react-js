import '../css/PagesStyle.css';
import '../css/SelectedMovie.css'
import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
//import Movies from './Movies';
import { BsFillPlayFill } from 'react-icons/bs';


const SelectedMovie = () => { 

    const [currentlyDate, setCurrentlyDate] = useState(new Date());

    const movieDetails = useContext(MovieContext);
    console.log(movieDetails);

    const addToFavorites = () => {
        console.log("work")
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
    let parsedListForFavoritMovies = JSON.parse(listForFavoritMovies);
    const isMovieInList = parsedListForFavoritMovies.filter(movie => movie.movieTitle === movieDetails.value.movieTitle).length;

    return (
      <div className="pages-container"> 
          <div className="header">
              <NavigationBar/>
          </div>
          <div className="selected-movie-container main-content">
                <img className="selected-movie-background-image" src={"http://localhost:4000/img/" + movieDetails.value.image} alt="#"/>
                    <div className="movie-details">
                        <p className="main-title">{movieDetails.value.movieTitle}</p>
                            <div className="age-year-time-container">                               
                                <p className="age-limit">{movieDetails.value.ageLimit}+</p>                                                                
                                <p className="release-date">{movieDetails.value.releaseDate}</p>
                                <span class="dot"></span>
                                <p className="movie-length">{movieDetails.value.movieLength}</p>
                            </div>                        
                        <p className="movie-genre">{movieDetails.value.genre}</p>
                            <div className="play-and-add-buttons">                               
                                <button className="play-button"><BsFillPlayFill className="play-icon" /></button>                                                            
                                {
                                    isMovieInList === 0 ?
                                    <button onClick={addToFavorites}>+</button>
                                    :
                                    <button onClick={addToFavorites}>pipa</button>
                                }                               
                            </div>
                        <p className="movie-description">{movieDetails.value.description}</p>
                        <p className="movie-director">Rendező: {movieDetails.value.director}</p>
                        <p className="movie-actors">Szereplők: {movieDetails.value.actors}</p>
                    </div>  
          </div>
          <div className="footer">
              <Footer/>
          </div>
      </div>
  )
}

export default SelectedMovie;