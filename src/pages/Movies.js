import '../css/PagesStyle.css';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";


const Movies = () => {

    let navigate = useNavigate();

    const [allMoviesType, setAllMoviesType] = useState([]);
    const [searchForMovies, setSearchForMovies] = useState("");


    useEffect (() => {
        fetch("http://localhost:4000/all-movies")
                .then(data => data.json())
                .then(parsedData => {
                    setAllMoviesType(parsedData);
                })
    }, [])



    const filterByAllMoviesType = () => {
        fetch("http://localhost:4000/all-movies-type/" + searchForMovies)
                .then(data => data.json())
                .then(parsedData => {
                    setAllMoviesType(parsedData);
                })
    };

    return (
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
            <div>
                <div className="SelectsForFilter">
                    <div>
                        <select>
                            <option>Movie type</option>
                            <option>Action</option>
                            <option>Scifi</option>
                            <option>Fantasy</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Search by year</option>
                            <option>2010-2022</option>
                            <option>2000-2010</option>
                            <option>1990-2000</option>
                            <option>1980-1990</option>
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
                        <button onClick={filterByAllMoviesType}>Filter movies type pl.: action, fantasy</button>
                    </div> 
                    <div>
                        {
                            allMoviesType.map( moviesType => (
                                <div >  
                                    <img 
                                        src={"http://localhost:4000/icons/" + moviesType.icon} 
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