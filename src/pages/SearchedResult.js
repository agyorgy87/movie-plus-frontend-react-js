import '../css/PagesStyle.css';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


const SearchedResult = () => {

  return (
    <div className="PagesContainer">
        <div>
            <Header/>
        </div>
        <div>
            <h1>KERESÉS EREDMÉNYE: "találat"</h1>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default SearchedResult;