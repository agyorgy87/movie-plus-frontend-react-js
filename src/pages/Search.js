import '../css/PagesStyle.css';
import React, {useState, useEffect, useRef} from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
//import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";
import { SearchContext } from "../context/SearchContext.js";



const Search = () => { 

    //let navigate = useNavigate();

    const searchDetails = useContext(SearchContext);

    const handleChange = (e) => {
        searchDetails.setValue(e.target.value);
    }

    const movieDetails = useContext(MovieContext);

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
    useEffect(() => {
        searchByYear();
    },[searchByReleaseDate]) 

    useEffect (() => {        
        searchByTime();
    },[searchByMovieLength])
    */
    /*
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
    */
   /*
    const searchByYear = () => {

        console.log(searchByReleaseDate)
        const splittedYears = searchByReleaseDate.split("-");

        const fromYears = parseInt(splittedYears[0]);
        const toYears = parseInt(splittedYears[1]);

        const releaseDate = allMovies.current.filter(movie => movie.releaseDate >= fromYears && movie.releaseDate <= toYears);
            setVisibleMovies(releaseDate);
    }
    /*
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

    /*
    <div className="search-input-button">                     
                            <input type="text" placeholder="Search Movies"className="search-input" onChange={handleChange}/>                          
                            <button className="search-button" onClick={() => {navigate("/searchedresult")}}><BiSearch/></button>  
                        </div>

                        .search-container {
    display: flex;
    justify-content: flex-end;
}


.search-input-button{
    position: relative;
}

.search-input {
    height: 2rem;
    width: 100%rem;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    display: block;
    outline: none;
    font-family: 'Poppins', sans-serif;
}

.search-button {
    background: none;
    position: absolute;
    top: 2px;
    right: 0;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    font-size: 1.5rem;
    color: #3C4048;
}
*/
      
    return (
        <div className="pages-container">
            <div>
                <NavigationBar/>
            </div>
            <div className="SearchPage">
                <div className="SelectsForFilter">
                    <div>
                        <select onChange={(e) => setSearchByReleaseDate(e.target.value)}>
                            <option value="none">Search by year</option>
                            <option value="2010-2022">2010-2022</option>
                            <option value="2000-2009">2000-2009</option>
                            <option value="1990-1999">1990-1999</option>
                            <option value="1980-1989">1980-1989</option>
                        </select>
                    </div>
                    <div>
                        <select onChange={(e) => setSearchByMovieLength(e.target.value)}>
                            <option value="none">Search by movie time</option>
                            <option value="120+">more than 2 hours</option>
                            <option value="60-120">between 1 and 2 hours</option>
                        </select>
                    </div> 
                    <div>
                        <select onChange={(e) => setSearchByAgeLimit(e.target.value)}>
                            <option value="none">Search by age limit</option>
                            <option value="16+">16+</option>
                            <option value="12+">12+</option>
                        </select>
                    </div> 
                </div>
            
                <div>               
                        {
                            visibleMovies.map( movies => (
                                <div >  
                                    <img 
                                        src={"http://localhost:4000/icons/" + movies.icon} 
                                        style={{width: "200px", marginRight: "20px"}} 
                                        alt="moviepicture"
                                    />
                                </div>
                            ))
                        }
                </div>
                    
                    <div>
                    </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Search;