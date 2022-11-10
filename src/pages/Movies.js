import '../css/PagesStyle.css';
import React, {useState, useEffect, useRef} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";

const Movies = () => {

    let navigate = useNavigate();

    const allMovies = useRef([]);
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [moviesTitle, setMoviesTitle] = useState("");
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
      
    /*
    const filterByMoviesTitle = () => {
        const filteredMovies = allMovies.current.filter(movie => movie.movieTitle.includes(moviesTitle));
        setVisibleMovies(filteredMovies);
    }
    */
    const moviesGenre = () => {
        const selectedMovies = allMovies.current.filter(movie => movie.genre === selectedMoviesGenre);
        setVisibleMovies(selectedMovies);
    }

    /*
    //search by type
    const filteredByActionMovies = () => {
        const filteredActionMovies = allMovies.current.filter(movie => movie.type === "action");
        setVisibleMovies(filteredActionMovies);
    }
    */

    return (
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
            <div>
                <div>
                    <div>
                        {/*}
                        Search by name: 
                        <input onChange={(e) => setMoviesTitle(e.target.value)} value={moviesTitle}/>
                            <button onClick={filterByMoviesTitle}>Filter movies by titles</button>
                            */}
                    <div>
                        <select onChange={(e) => setSelectedMoviesGenre(e.target.value)}>
                            <option>Movie type</option>
                            <option value="akció">Akció</option>
                            <option value="vígjáték">Vígjáték</option>
                        </select>
                    </div>
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

export default Movies;