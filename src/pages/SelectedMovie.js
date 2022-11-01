import '../css/PagesStyle.css';
import '../css/SelectedMovie.css'
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
//import Movies from './Movies';


const SelectedMovie = () => {

    const movieDetails = useContext(MovieContext);

    return (
      <div className="PagesContainer">
          <div>
              <Header/>
          </div>
          <div className="SelectedMovieContainer">
                <img className="SelectedMovieBackgroundImage" src={"http://localhost:4000/img/" + movieDetails.value.image} alt="#"/>
                    <div className="MovieDetails">
                        <p className="MainTitle">{movieDetails.value.movieMainTitle}</p>
                            <div className="AgeYearTimeContainer">                               
                                <p className="AgeLimit">{movieDetails.value.ageLimit}</p>                                                                
                                <p className="ReleaseDate">{movieDetails.value.year}</p>
                                <span class="Dot"></span>
                                <p className="MovieLength">{movieDetails.value.time}</p>
                            </div>                        
                        <p className="MovieGenre">{movieDetails.value.type}</p>
                        <p className="MovieDescription">{movieDetails.value.description}</p>
                        <p className="MovieDirector">Rendező: {movieDetails.value.director}</p>
                        <p className="MovieActors">Szereplők: {movieDetails.value.actors}</p>
                    </div>  
          </div>
          <div>
              <Footer/>
          </div>
      </div>
  )
}

export default SelectedMovie;