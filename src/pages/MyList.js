import '../css/PagesStyle.css';
import '../css/MyList.css'
import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";


const MyList = () => {  

    let navigate = useNavigate();

    const movieDetails = useContext(MovieContext);

    let listForFavoritMovies = localStorage.getItem("favorites");
    let parsedListForFavoritMovies = JSON.parse(listForFavoritMovies);

    return (
        <div className="pages-container">
            <div className="header">
                <NavigationBar/>
            </div>
            <div className="main-content mylist-content">   
                <div className="mylist-text-container">
                    <div>
                        <h1 className="mylist-text">SAJÁT LISTA</h1>
                    </div>
                </div>
                <div className="mylist-movies-container">
                    {
                        parsedListForFavoritMovies.map(movies => ( 
                            <div>  
                                <img 
                                    src={"http://localhost:4000/icons/" + movies.icon} 
                                    className="mylist-movie-icons"
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

export default MyList;