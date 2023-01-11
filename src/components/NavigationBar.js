import '../css/NavigationBar.css'; 
import React from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { MdLocalMovies, MdAccountCircle } from 'react-icons/md';


const NavigationBar = () => {  

    let navigate = useNavigate();

    return (
        <div>
            <nav>
                <div className="navigation-menu">
                    <div className="logo-menus-container">
                        <div className="logo-container">                           
                            <p className="logo">MOVIE+</p>                                                                      
                        </div>   
                        <div>
                            <ul>
                                <li><i><AiFillHome className="menu-icons" onClick={() => {navigate("/")}}/></i><a className="menu-pages" onClick={() => {navigate("/")}}>FŐOLDAL</a></li>
                                <li><i><MdLocalMovies className="menu-icons" onClick={() => {navigate("/movies")}}/></i><a className="menu-pages" onClick={() => {navigate("/movies")}}>FILMEK</a></li>
                                <li><i><AiOutlineSearch className="menu-icons" onClick={() => {navigate("/search")}}/></i><a className="menu-pages" onClick={() => {navigate("/search")}}>KERESÉS</a></li>
                                <li><i><AiOutlinePlus className="menu-icons" onClick={() => {navigate("/mylist")}}/></i><a className="menu-pages" onClick={() => {navigate("/mylist")}}>SAJÁT LISTA</a></li>
                            </ul>                                              
                        </div> 
                    </div>              
                    <div className="account-container">
                        <i><MdAccountCircle className="account-icon"/></i>                    
                    </div>  
                </div>             
            </nav>
        </div>
  )
}

export default NavigationBar;

