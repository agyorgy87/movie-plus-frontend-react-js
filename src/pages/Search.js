import '../css/PagesStyle.css';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
//import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";



const Search = () => { 

    //let navigate = useNavigate();

    const movieDetails = useContext(MovieContext);

    const allMovies = useRef([]);

    const [searchForMovies, setSearchForMovies] = useState("");
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [searchByReleaseDate, setSearchByReleaseDate] = useState([]);

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

    /*
    useEffect (() => {
        searchByYear();
    },[searchByReleaseDate])

    const searchByYear = () => {
        const splitYears = searchByReleaseDate.split("-");
        
    }
    */    
    return (
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
            <div>
                <div className="SelectsForFilter">
                    <div>
                        <select onChange={(e) => setSearchByReleaseDate(e.target.value)}>
                            <option>Search by year</option>
                            <option value="2010-2022">2010-2022</option>
                            <option value="2000-2010">2000-2010</option>
                            <option value="1990-2000">1990-2000</option>
                            <option value="1980-2000">1980-1990</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Search by movie time</option>
                            <option>more than 2 hours</option>
                            <option>under than 2 hours</option>
                            <option>between 1 and 2 hours</option>
                            <option>under than 1 hour</option>
                        </select>
                    </div>  
                    <div>
                        <input onChange={(e) => setSearchForMovies(e.target.value)} value={searchForMovies}/>
                        <button onClick={filterByAllMoviesTypeWrite}>Filter movies type pl.: action, fantasy</button>
                    </div>     
                    <div>
                        <input/>
                        <button>keresés színészre</button>
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