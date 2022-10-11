import '../css/PagesStyle.css';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";

const Search = () => {

    let navigate = useNavigate();

    const allMovies = useRef([]);
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [moviesTitle, setMoviesTitle] = useState("");

    useEffect (() => {
        fetch("http://localhost:4000/all-movies")
                .then(data => data.json())
                .then(parsedData => {
                  allMovies.current = parsedData;
                  setVisibleMovies(parsedData);
                })
      }, [])
      
      //Frontend filter 
      const filterByMoviesTitle = () => {
        const filteredMovies = allMovies.current.filter(movie => movie.movieMainTitle.includes(moviesTitle));
        setVisibleMovies(filteredMovies);
    }

    return (
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
            <div>
                <div>
                    Search by name: 
                    <div>
                        <input onChange={(e) => setMoviesTitle(e.target.value)} value={moviesTitle}/>
                            <button onClick={filterByMoviesTitle}>Filter movies by titles</button>
                                {
                                    visibleMovies.map( movies => (
                                        <div >  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                style={{width: "200px", marginRight: "20px"}} 
                                                alt="moviepicture"
                                                onClick={() => {navigate("/selectedmovie")}}
                                                />
                                        </div>
                                    ))
                                }
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Search;