import '../css/PagesStyle.css';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";


const SelectedMovie = () => {

    let navigate = useNavigate();

    const movieDetails = useContext(MovieContext);

    return (
      <div className="PagesContainer">
          <div>
              <Header/>
          </div>
          <div>
              <button onClick={() => {navigate("/")}}>back to home</button> 
              {movieDetails.value.movieMainTitle}
              {movieDetails.value.year}
              {movieDetails.value.actors}
              <img src={movieDetails.value.image} style={{ width:"200px", height:"100"}} alt="#"/>
          </div>
          <div>
              <Footer/>
          </div>
      </div>
  )
}

export default SelectedMovie;