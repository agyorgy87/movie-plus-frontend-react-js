import '../css/PagesStyle.css';
import '../css/SelectedMovie.css'
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
//import Movies from './Movies';


const SelectedMovie = () => {

    let navigate = useNavigate();

    const movieDetails = useContext(MovieContext);

    return (
      <div className="PagesContainer">
          <div>
              <Header/>
          </div>
          <div className="SelectedMovieContainer">
                <img className="SelectedMovieBackgroundImage" src={"http://localhost:4000/img/" + movieDetails.value.image} alt="#"/>
                <div className="MovieDetails">
                    <p>{movieDetails.value.movieMainTitle}</p>
                    <p>{movieDetails.value.year}</p>
                    <p>{movieDetails.value.actors}</p>
                </div>   
          </div>
          <div>
              <Footer/>
          </div>
      </div>
  )
}

export default SelectedMovie;