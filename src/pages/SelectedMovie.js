import '../css/PagesStyle.css';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useNavigate } from "react-router-dom";


const SelectedMovie = () => {

    let navigate = useNavigate();

  return (
    <div className="PagesContainer">
        <div>
            <Header/>
        </div>
        <div>
            <button onClick={() => {navigate("/")}}>back to home</button> 
           selected movie content
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default SelectedMovie;