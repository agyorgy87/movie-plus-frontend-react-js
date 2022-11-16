import '../css/Header.css'; 
import React from 'react';
import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import { useNavigate } from "react-router-dom";


const Header = () => { 

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
                                <li><i><AiFillHome className="menu-icons" onClick={() => {navigate("/")}}/></i><a className="menu-pages" onClick={() => {navigate("/")}}>Home</a></li>
                                <li><i><MdLocalMovies className="menu-icons" onClick={() => {navigate("/movies")}}/></i><a className="menu-pages" onClick={() => {navigate("/movies")}}>Movies</a></li>
                                <li><i><AiOutlineSearch className="menu-icons" onClick={() => {navigate("/search")}}/></i><a className="menu-pages" onClick={() => {navigate("/search")}}>Search</a></li>
                                <li><i><AiOutlinePlus className="menu-icons" onClick={() => {navigate("/mylist")}}/></i><a className="menu-pages" onClick={() => {navigate("/mylist")}}>My List</a></li>
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

export default Header;

