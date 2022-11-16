import '../css/Header.css'; 
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSearch} from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { SearchContext } from "../context/SearchContext.js";


const Header = () => { 

    let navigate = useNavigate();

    const searchDetails = useContext(SearchContext);

    const handleChange = (e) => {
        searchDetails.setValue(e.target.value);
    }

    return (
        <div>
            <nav>
                <div className="navigation-menu">
                        <div className="browse-container">
                            <div>
                           <RiArrowDropDownLine className="drop-down-arrow"/>
                           </div>
                                <ul>
                                    <li><a className="menu-pages" onClick={() => {navigate("/")}}><AiFillHome className="menu-icons"/>Home</a></li>
                                    <li><a className="menu-pages" onClick={() => {navigate("/movies")}}><MdLocalMovies className="menu-icons"/>Movies</a></li>
                                    <li><a className="menu-pages" onClick={() => {navigate("/search")}}><AiOutlineSearch className="menu-icons"/>Search</a></li>
                                    <li><a className="menu-pages" onClick={() => {navigate("/mylist")}}><AiOutlinePlus className="menu-icons"/>My List</a></li>
                                </ul>
                        </div>                        
                </div>
                <div className="navigation-menu">
                    <p className="logo">MOVIE+</p> 
                </div>
                <div className="navigation-menu">
                    <div className="search-container">                        
                            <input type="text" placeholder="Search Movies"className="search-input" onChange={handleChange}/>                          
                            <button className="search-button" onClick={() => {navigate("/searchedresult")}}><BiSearch/></button>                                                         
                    </div>
                    <div className="account-container">
                        <MdAccountCircle className="account-icon"/>
                    </div>
                </div>               
            </nav>
        </div>
  )
}

export default Header;

