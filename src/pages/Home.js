//import '../css/PagesStyle.css';
import '../css/Main.css';
import '../css/Slider.css';
import NavigationBar from "../components/NavigationBar.js";
import Footer from "../components/Footer.js";
//import ImageSlider from "../components/ImageSlider.js";
import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
//import { useParams, Link} from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";

const Home = () => {
    //const params = useParams();

    let navigate = useNavigate();

    const [allMovies, setAllMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [fantasyMovies, setFantasyMovies] = useState([]);

    const sliderData = [actionMovies];
    console.log(sliderData);

    const movieDetails = useContext(MovieContext);

    useEffect(() => {//FETCH for all data
        fetch("http://localhost:4000/all-movies")
            .then(data => data.json())
            .then(parsedData => {
                setAllMovies(parsedData);
            })

        fetch("http://localhost:4000/all-movies-by-action/akció")
            .then(data => data.json())
            .then(parsedData => {
                setActionMovies(parsedData)
            })

        fetch("http://localhost:4000/all-movies-by-comedy/vígjáték")
            .then(data => data.json())
            .then(parsedData => {
                setComedyMovies(parsedData);
            })

        fetch("http://localhost:4000/all-movies-by-fantasy/fantasy")
            .then(data => data.json())
            .then(parsedData => {
                setFantasyMovies(parsedData);
            })
        /*    
        fetch("http://localhost:4000/get-movie/" + params.movieMainTitle)
            .then(data => data.json())
            .then(parsedData => {
                setVisibleMovie(parsedData);
            }) 
        */
}, [])

    return ( 
        <div className="pages-container">
            <div>
                <NavigationBar/>
            </div>            
                <div className="main">
                    {/*}
                    <div className="row"> 
                        <ImageSlider className="slider" slides={sliderData}/>
                    </div>
    */}
                    <div className="row"> 
                        <div className="movie-text-container">
                            <h2 className="movie-genre-texts">Action</h2>
                        </div>
                            <div className="movies">
                                {
                                    actionMovies.map( movies => (
                                        <div>  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                className="movie-icons"
                                                alt="moviepicture" 
                                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                    <div className="row">
                        <h2 className="movie-genre-texts">Comedy</h2>
                            <div className="movies">
                                {
                                    comedyMovies.map( movies => (
                                        <div>  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                className="movie-icons"
                                                alt="moviepicture"
                                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                        </div>
                                    ))
                                }   
                            </div>
                    </div>
                    <div className="row">
                        <h2 className="movie-genre-texts">Fantasy</h2>
                            <div className="moviess">
                                {
                                    fantasyMovies.map( movies => (
                                        <div >  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                className="movie-icons" 
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

export default Home;