import '../css/PagesStyle.css';
import React from 'react';
import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';


const MyList = () => {
  return (
    <div className="PagesContainer">
        <div>
            <NavigationBar/>
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