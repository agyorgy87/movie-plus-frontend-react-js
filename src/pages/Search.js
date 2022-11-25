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
        fetch("http://localhost:4000/all-movies")
                .then(data => data.json())
                .then(parsedData => {
                  allMovies.current = parsedData;
                  setVisibleMovies(parsedData);
                })
      }, []) 

    const filterByAllMoviesTypeWrite = () => {
        fetch("http://localhost:4000/all-movies-by-action/akció")
            .then(data => data.json())
            .then(parsedData => {
                setVisibleMovies(parsedData)
            })
    };

    useEffect(() => {
        filterDatas();
    },[searchByReleaseDate, searchByMovieLength, searchByAgeLimit]) 

    /*

    first, old solutions...

    useEffect(() => {
        searchByYear();
    },[searchByReleaseDate]) 

    useEffect (() => {        
        searchByTime();
    },[searchByMovieLength])
    

    const searchByYear = () => {
        if(searchByReleaseDate === "2010-2022"){
            const releaseDateBetweenTenAndTwentyTwo = allMovies.current.filter(movie => movie.releaseDate >= 2010 && movie.releaseDate <= 2022);
            setVisibleMovies(releaseDateBetweenTenAndTwentyTwo);
        }
        else if(searchByReleaseDate === "2000-2009"){
            const releaseDateBetweenZeroAndNine = allMovies.current.filter(movie => movie.releaseDate >= 2000 && movie.releaseDate <= 2009);
            setVisibleMovies(releaseDateBetweenZeroAndNine);
        }
        else if(searchByReleaseDate === "1990-1999"){
            const releaseDateBetweenNinetyAndNinetyNine = allMovies.current.filter(movie => movie.releaseDate >= 1990 && movie.releaseDate <= 1999);
            setVisibleMovies(releaseDateBetweenNinetyAndNinetyNine);
        }
        else if(searchByReleaseDate === "1980-1989"){
            const releaseDateBewtweenEightyAndEightyNine = allMovies.current.filter(movie => movie.releaseDate >= 1980 && movie.releaseDate <= 1989);
            setVisibleMovies(releaseDateBewtweenEightyAndEightyNine);
        }
        else if(searchByReleaseDate === "none"){
            setVisibleMovies(allMovies.current)
        }
    }
    

    const searchByYear = () => {

        console.log(searchByReleaseDate)
        const splittedYears = searchByReleaseDate.split("-");

        const fromYears = parseInt(splittedYears[0]);
        const toYears = parseInt(splittedYears[1]);

        const releaseDate = allMovies.current.filter(movie => movie.releaseDate >= fromYears && movie.releaseDate <= toYears);
            setVisibleMovies(releaseDate);
    }
    
    const searchByTime = () => {

        if(searchByMovieLength === "120+"){
            const moreThan120Minutes = allMovies.current.filter(movie => movie.movieLength > 120)
            setVisibleMovies(moreThan120Minutes);
        }
        else if(searchByMovieLength === "60-120"){
            const lessThan120Minutes = allMovies.current.filter(movie => movie.movieLength > 60 && movie.movieLength < 120);
            setVisibleMovies(lessThan120Minutes);
        }
        else if(searchByMovieLength === "none"){
            setVisibleMovies(allMovies.current);
        }
    }
    */

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
      
    return (
        <div className="pages-container">
            <div className="header">
                <NavigationBar/>
            </div>
            <div className="main-content search-content">
                <div className="search-input-button-container">                     
                    <input type="text" placeholder="Search Movies" className="search-input" onChange={handleChange}/>                          
                    <button className="search-button" onClick={() => {navigate("/searchedresult")}}><BiSearch/></button>  
                </div>
                <div className="selects-container">
                    <div>
                        <select className="release-date-select" onChange={(e) => setSearchByReleaseDate(e.target.value)}> 
                            <option value="none">Search by year</option>
                            <option value="2010-2022">2010-2022</option>
                            <option value="2000-2009">2000-2009</option>
                            <option value="1990-1999">1990-1999</option>
                            <option value="1980-1989">1980-1989</option>
                        </select>
                    </div>
                    <div>
                        <select className="movie-length-select" onChange={(e) => setSearchByMovieLength(e.target.value)}>
                            <option value="none">Search by movie time</option>
                            <option value="120+">more than 2 hours</option>
                            <option value="60-120">between 1 and 2 hours</option>
                        </select>
                    </div> 
                    <div>
                        <select className="age-limit-select" onChange={(e) => setSearchByAgeLimit(e.target.value)}>
                            <option value="none">Search by age limit</option>
                            <option value="16+">16+</option>
                            <option value="12+">12+</option>
                        </select>
                    </div> 
                </div>           
                <div className="visible-search-container">               
                        {
                            visibleMovies.map( movies => (
                                <div >  
                                    <img 
                                        src={"http://localhost:4000/icons/" + movies.icon} 
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