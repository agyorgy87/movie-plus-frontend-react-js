import React, { useContext, useEffect, useState } from 'react';
import { CollectionMovieContext } from '../context/CollectionMovieContext.js';
import { useNavigate } from "react-router-dom";
import '../css/SelectedCollectionMovies.css';
import '../css/PagesStyle.css';
import { MovieContext } from "../context/MovieContext.js";
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';


const SelectedCollectionMovie = () => {

    let navigate = useNavigate();

    const collectionMovieDetails = useContext(CollectionMovieContext);//group datas
    
    const movieDetails = useContext(MovieContext);

    const [selectedCollectionMovieIcons, setSelectedCollectionMovieIcons] = useState([]);//movies


    useEffect (() => {
      fetch("http://localhost:4000/group/" + collectionMovieDetails.value.group)
            .then(data => data.json())
            .then(parsedData => {
              setSelectedCollectionMovieIcons(parsedData);
            })
    },[])


  return (
        <div className="pages-container">
            <div className="header">
                <NavigationBar/>
            </div>
            <div className="main-content">
                <div className="collection-background-image" style={{ 
                    backgroundImage: `url("http://localhost:4000/collection-backgrounds/${collectionMovieDetails.value.collectionBackground}")`
                    }}>   
                    <div className="collection-movies-container">
                        {
                        selectedCollectionMovieIcons.map( movies => (
                            <div>  
                            <img 
                            src={"http://localhost:4000/icons/" + movies.icon} 
                            className="collection-movie-icons" 
                            alt="moviepicture"
                            onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                            />
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
      </div>
    )
}

export default SelectedCollectionMovie;