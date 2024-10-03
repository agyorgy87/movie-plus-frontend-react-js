import '../css/PagesStyle.css';
import '../css/Home.css';
import NavigationBar from "../components/NavigationBar.js";
import Slider from "../components/Slider.js";
import ActionMoviesSlider from '../components/ActionMoviesSlider.js';
import ComedyMoviesSlider from '../components/ComedyMoviesSlider.js';
import SciFiMoviesSlider from '../components/SciFiMoviesSlider.js';
import Collections from '../components/Collections.js';
import Footer from "../components/Footer.js";
import React from 'react';
import { useContext } from 'react';
import { MovieContext } from "../context/MovieContext.js";



const Home = () => {

    /*
    const [allMovies, setAllMovies] = useState([]);
    
    const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {  
        axios.get(`${baseURL}/all-movies`)
            .then(response => setAllMovies(response.data));
    }, [])
    */

    const movieDetails = useContext(MovieContext);

    return (  
        <div className="pages-container"> 
            <div className="header">
                <NavigationBar/>
            </div>            
            <div> 
                <div className="row">
                    <Slider/>
                </div>
                <div className="row">
                    <ActionMoviesSlider movieDetails={movieDetails}/>
                </div>
                <div className="row">
                    <ComedyMoviesSlider movieDetails={movieDetails}/>        
                </div>
                <div className="row">
                    <SciFiMoviesSlider movieDetails={movieDetails}/>
                </div>
                <div className="row">  
                    <Collections/>
                </div>               
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Home;

/* 354 line -> 60*/