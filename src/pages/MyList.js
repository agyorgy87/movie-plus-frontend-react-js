import '../css/PagesStyle.css';
import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


const MyList = () => {
  return (
    <div className="PagesContainer">
        <div>
            <Header/>
        </div>
        <div>
           MY LIST CONTENT
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default MyList;