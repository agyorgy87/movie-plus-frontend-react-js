import '../css/PagesStyle.css';
import '../css/Main.css';
import Header from "../components/Header.js";
//import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import React, {useState, useEffect} from 'react';
//import { MdArrowForwardIos } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
//import { useParams, Link} from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";

const Home = () => {
    //const params = useParams();

    let navigate = useNavigate();

    const [allMovies, setAllMovies] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [scifiMovies, setScifiMovies] = useState([]);
    const [fantasyMovies, setFantasyMovies] = useState([]);
    //const [visibleMovie, setVisibleMovie] = useState([]);

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

        fetch("http://localhost:4000/all-movies-by-scifi/scifi")
            .then(data => data.json())
            .then(parsedData => {
                setScifiMovies(parsedData);
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
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
            <div>
                <div className="Main">
                    <div className="Row FirstRow"> 
                        <h2>Action</h2>
                            <div className="Movies">
                                {/*<i className="Forward"><MdArrowForwardIos/></i>*/}
                                {
                                    actionMovies.map( movies => (
                                        <div >  
                                            <img 
                                                src={"http://localhost:4000/icons/" + movies.icon} 
                                                className="MovieIcons"
                                                alt="moviepicture" 
                                                onClick={() => { movieDetails.setValue(movies); navigate("/selectedmovie")}}
                                            />
                                            {/*<Link to={"/get-movie/" + movies.movieMainTitle}><img src={"http://localhost:4000/icons/" + movies.icon} style={{width: "200px", marginRight: "20px"}} alt="moviepicture"/></Link>*/}
                                        </div>
                                    ))
                                }
                            </div>
                    </div>
                    <div className="Row">
                        <h2>Scifi</h2>
                            <div className="Movies">
                                {
                                    scifiMovies.map( movies => (
                                        <div>  
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
                    <div className="Row">
                        <h2>Fantasy</h2>
                            <div className="Movies">
                                {
                                    fantasyMovies.map( movies => (
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
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home;