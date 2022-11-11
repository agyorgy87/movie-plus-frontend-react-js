import '../css/PagesStyle.css';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";

const Movies = () => { 

    let navigate = useNavigate();

    const movieDetails = useContext(MovieContext);

    const allMovies = useRef([]);
    const [visibleMovies, setVisibleMovies] = useState([]);
    //const [moviesTitle, setMoviesTitle] = useState("");
    const [selectedMoviesGenre, setSelectedMoviesGenre] = useState([]);

    useEffect (() => {
        fetch("http://localhost:4000/all-movies")
                .then(data => data.json())
                .then(parsedData => {
                  allMovies.current = parsedData;
                  setVisibleMovies(parsedData);
                })
      }, [])

    useEffect(() => { 
        moviesGenre();
    },[selectedMoviesGenre])
      
    
    const moviesGenre = () => {

        let filterMoviesGenre = allMovies.current
        
        if(selectedMoviesGenre !== "none"){   
            filterMoviesGenre = filterMoviesGenre.filter(movie => movie.genre === selectedMoviesGenre);
            setVisibleMovies(filterMoviesGenre); 
        }
        setVisibleMovies(filterMoviesGenre);
        
    }

    /*
            const selectedMovies = allMovies.current.filter(movie => movie.genre === selectedMoviesGenre);
            setVisibleMovies(selectedMovies);
            */

    return (
        <div className="pages-container">
            <div>
                <Header/>
            </div>
                <div>             
                    {/*}
                    Search by name: 
                    <input onChange={(e) => setMoviesTitle(e.target.value)} value={moviesTitle}/>
                    <button onClick={filterByMoviesTitle}>Filter movies by titles</button>
                    */}
                    <div>
                        <select onChange={(e) => setSelectedMoviesGenre(e.target.value)}>
                            <option value="none">All Movies</option>
                            <option value="akció">Action</option>
                            <option value="vígjáték">Comedy</option>
                        </select>
                    </div>
                    <div className="visible-movies">
                            {
                                visibleMovies.map( movies => (
                                    <div>  
                                        <img 
                                            src={"http://localhost:4000/icons/" + movies.icon} 
                                            className="movies-icon"
                                            alt="moviepicture"
                                            onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                    </div>
                                ))
                            }
                    </div>                                         
                </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Movies;