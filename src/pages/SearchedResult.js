import '../css/PagesStyle.css';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from "../context/SearchContext.js";
import { MovieContext } from "../context/MovieContext.js";

const SearchedResult = () => {

  let navigate = useNavigate();

  const searchDetails = useContext(SearchContext);

  console.log(searchDetails);

  const movieDetails = useContext(MovieContext);

  const [allMovies, setAllMovies] = useState([]);

  useEffect (() => {
    fetch("http://localhost:4000/get-movie/" + searchDetails.value)
            .then(data => data.json())
            .then(parsedData => {
                console.log(parsedData);
              setAllMovies(parsedData);
            })
  }, [])
  

  return (
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
            <div>
                <h1>KERESÉS EREDMÉNYE: "db" "{searchDetails.value}"</h1>
                {
                    allMovies.map( movies => (
                        <div>  
                            <img 
                                src={"http://localhost:4000/icons/" + movies.icon} 
                                style={{width: "200px", marginRight: "20px"}} 
                                alt="moviepicture"
                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                             />
                        </div>
                    ))
                } 
            </div>
            <div>
                <Footer/>
            </div>
        </div>
  )
}

export default SearchedResult;