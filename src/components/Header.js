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
                <div className="Menu">
                        <div className="Browse">
                            <div>
                           <RiArrowDropDownLine className="DropDownArrow"/>
                           </div>
                                <ul>
                                    <li><a className="MenuPages" onClick={() => {navigate("/")}}><AiFillHome className="menu-icons"/>Home</a></li>
                                    <li><a className="MenuPages" onClick={() => {navigate("/movies")}}><MdLocalMovies className="menu-icons"/>Movies</a></li>
                                    <li><a className="MenuPages" onClick={() => {navigate("/search")}}><AiOutlineSearch className="menu-icons"/>Search</a></li>
                                    <li><a className="MenuPages" onClick={() => {navigate("/mylist")}}><AiOutlinePlus className="menu-icons"/>My List</a></li>
                                </ul>
                        </div>                        
                </div>
                <div className="Menu">
                    <p className="Logo">MOVIE+</p> 
                </div>
                <div className="Menu">
                    <div className="SearchBarContainer">                        
                            <input type="text" placeholder="Search among movies"className="SearchInput" onChange={handleChange}/>                          
                            <button className="SearchButton" onClick={() => {navigate("/searchedresult")}}><BiSearch/></button>                                                         
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

//<button className="searchButton" onClick={() => {navigate("/searchedresult")}}><HiOutlineSearchCircle/></button>

{/*

*/}