import '../css/PagesStyle.css';
import '../css/Search.css';
import React, {useState, useEffect, useRef} from 'react';
import { BiSearch } from 'react-icons/bi';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";



const Search = () => {  

    let navigate = useNavigate();

    const baseUrlForSearchMoviesTitle = process.env.REACT_APP_API_URL || 'http://localhost:4000';
    
    const movieDetails = useContext(MovieContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const allMovies = useRef([]);

    const [visibleMovies, setVisibleMovies] = useState([]);

    

    useEffect (() => {

        axios.get(`${baseUrlForSearchMoviesTitle}/all-movies`)
            .then(response => setVisibleMovies(response.data));

        /*
        axios.get(`${baseUrlForSearchMoviesTitle}/all-movies`)
                .then(parsedData => {
                  allMovies.current = parsedData;
                  setVisibleMovies(parsedData);
                })
                */                 
    }, []) 

    
    useEffect(() => {
        if (searchTerm !== '') {
            axios.get(`${baseUrlForSearchMoviesTitle}/get-movie/${searchTerm}`)
                .then(response => {                 
                    setVisibleMovies(response.data);                  
                })
                .catch(error => {
                    console.error('Error:', error);
                });           
        } else {
            axios.get(`${baseUrlForSearchMoviesTitle}/all-movies`)
                .then(response => {
                    setVisibleMovies(response.data);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }, [searchTerm]);
    
    /*NOPE - only on frontend
    useEffect(() => {
        const filteredMovies = allMovies.current.filter(movie =>
            movie.movieTitle && movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setVisibleMovies(filteredMovies);
    }, [searchTerm]);
    */

    return (
        <div className="pages-container">  
            <div className="header">
                <NavigationBar/>
            </div>
            <div className="main-content search-content">
                <div className="search-input-button-container">                     
                    <input type="text" placeholder="Film keresése" className="search-input" onChange={handleChange} value={searchTerm}/>                          
                    {/*<button className="search-button" onClick={() => {navigate("/searchedresult")}}><BiSearch/></button>*/}
                </div>         
                <div className="visible-search-container">               
                        {
                            visibleMovies.map( movies => (
                                <div >  
                                    <img 
                                        src={process.env.REACT_APP_API_URL + "/icons/" + movies.icon} 
                                        className="search-movie-icons"
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

export default Search;