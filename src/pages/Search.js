import '../css/PagesStyle.css';
import '../css/Search.css';
import React, {useState, useEffect, useRef} from 'react';
import { BiSearch } from 'react-icons/bi';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
import { SearchContext } from "../context/SearchContext.js";



const Search = () => {  

    let navigate = useNavigate();
    
    const movieDetails = useContext(MovieContext);
    const searchDetails = useContext(SearchContext);

    const handleChange = (e) => {
        searchDetails.setValue(e.target.value);
    }

    const allMovies = useRef([]);

    const [visibleMovies, setVisibleMovies] = useState([]);
    const [searchByReleaseDate, setSearchByReleaseDate] = useState("none");
    const [searchByMovieLength, setSearchByMovieLength] = useState("none");
    const [searchByAgeLimit, setSearchByAgeLimit] = useState("none");


    useEffect (() => {
        fetch(process.env.REACT_APP_API_URL + "/all-movies")
                .then(data => data.json())
                .then(parsedData => {
                  allMovies.current = parsedData;
                  setVisibleMovies(parsedData);
                })
      }, []) 

    /*
    useEffect(() => {
        filterDatas();
    },[searchByReleaseDate, searchByMovieLength, searchByAgeLimit]) 
    

    const filterDatas = () => {

        let filterAllMovies = allMovies.current;

        if(searchByReleaseDate !== "none"){
            const splittedYears = searchByReleaseDate.split("-");
            const fromYears = parseInt(splittedYears[0]);
            const toYears = parseInt(splittedYears[1]);
            filterAllMovies = filterAllMovies.filter(movie => movie.releaseDate >= fromYears && movie.releaseDate <= toYears);
        }
        if(searchByMovieLength !== "none"){
            if(searchByMovieLength === "120+"){
                filterAllMovies = filterAllMovies.filter(movie => movie.movieLength > 120);            
            }
            else if(searchByMovieLength === "60-120"){
                filterAllMovies = filterAllMovies.filter(movie => movie.movieLength > 60 && movie.movieLength < 120);               
            }
        }
        if(searchByAgeLimit !== "none"){
            if(searchByAgeLimit === "16+"){
                filterAllMovies = filterAllMovies.filter(movie => movie.ageLimit >= 16);            
            }
            else if(searchByAgeLimit === "12+"){
                filterAllMovies = filterAllMovies.filter(movie => movie.ageLimit >= 12);               
            }
        }
        setVisibleMovies(filterAllMovies);
    }
    */
    return (
        <div className="pages-container">  
            <div className="header">
                <NavigationBar/>
            </div>
            <div className="main-content search-content">
                <div className="search-input-button-container">                     
                    <input type="text" placeholder="Film keresése" className="search-input" onChange={handleChange}/>                          
                    <button className="search-button" onClick={() => {navigate("/searchedresult")}}><BiSearch/></button>  
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