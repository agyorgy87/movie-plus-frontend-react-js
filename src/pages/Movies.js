import '../css/PagesStyle.css';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


const Movies = () => {


    return (
        <div className="PagesContainer">
            <div>
                <Header/>
            </div>
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
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Movies;