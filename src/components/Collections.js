import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { CollectionMovieContext } from "../context/CollectionMovieContext.js";
import axios from "axios";

const Collections = () => {

    let navigate = useNavigate();

    const [collectionMovies, setCollectionMovies] = useState([]); 

    const collectionMovieDetails = useContext(CollectionMovieContext);

    const baseUrlForImages = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {  
        axios.get(`${baseURL}/collection-movies`)
            .then(response => setCollectionMovies(response.data));      
    }, [])

    return (
        <div>
            <h2 className="movie-genre-texts">Collections</h2>                       
                <div className="home-movies-container">
                    {
                        collectionMovies.map((movies,index) => (
                            <div key={index}>  
                                <img                                               
                                src={`${baseUrlForImages}/collection-icons/${movies.collectionIcon}`} 
                                className="home-movie-icons" 
                                alt="moviepicture"
                                onClick={() => { collectionMovieDetails.setValue(movies); navigate("/selectedcollectionmovie")}}/>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Collections;