import '../css/PagesStyle.css';
import '../css/SelectedMovie.css'
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
//import Movies from './Movies';

import { BsFillPlayFill } from 'react-icons/bs';


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
                        <p className="MainTitle">{movieDetails.value.movieTitle}</p>
                            <div className="AgeYearTimeContainer">                               
                                <p className="AgeLimit">{movieDetails.value.ageLimit}+</p>                                                                
                                <p className="ReleaseDate">{movieDetails.value.releaseDate}</p>
                                <span class="Dot"></span>
                                <p className="MovieLength">{movieDetails.value.movieLength}</p>
                            </div>                        
                        <p className="MovieGenre">{movieDetails.value.genre}</p>
                            <div className="PlayAndAddButtons">                               
                                    <button className="PlayButton"><BsFillPlayFill className="PlayIcon" />Lejátszás</button>                                                            
                                <button>Előzetes</button>
                                <button>listámhoz adás</button>
                            </div>
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