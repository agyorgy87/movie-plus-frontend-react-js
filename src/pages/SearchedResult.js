import '../css/PagesStyle.css';
import '../css/SearchedResult.css';
import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from "../context/SearchContext.js";
import { MovieContext } from "../context/MovieContext.js";

const SearchedResult = () => {

  let navigate = useNavigate();

  const searchDetails = useContext(SearchContext);;

  const movieDetails = useContext(MovieContext);

  const [allMovies, setAllMovies] = useState([]);

  useEffect (() => {
            fetch("http://localhost:4000/get-movie-title/" + searchDetails.value)
            .then(data => data.json())
            .then(parsedData => {
                console.log(parsedData);
                setAllMovies(parsedData); 
            }) 
  }, [])
  

  return (
        <div className="pages-container"> 
            <div className="header">
                <NavigationBar/>
            </div>
            <div className="main-content">
                <div className="search-result-text-container">
                    <h1 className="search-result-text">KERESÉS EREDMÉNYE: "{allMovies.length} db" "{searchDetails.value}"</h1>
                </div>
                <div className="all-movies-found"> 
                    {
                        allMovies.map( movies => (
                            <div>  
                                <img 
                                    src={"http://localhost:4000/icons/" + movies.icon} 
                                    className="result-movie-icon"
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

export default SearchedResult;