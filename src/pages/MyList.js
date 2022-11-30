import '../css/PagesStyle.css';
import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
//import { useParams, Link} from 'react-router-dom';
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
        <div className="main-content">
           SAJÁT LIST
            <div>
              {
                parsedListForFavoritMovies.map(movies => ( 
                  <div>  
                                          <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                className="home-movie-icons"
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