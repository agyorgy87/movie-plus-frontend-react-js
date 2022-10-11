import '../css/Header.css'; 
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
import { useNavigate } from "react-router-dom";


const Header = () => { 

    let navigate = useNavigate();

    return (
        <div>
            <nav>
                <div className="Menu">
                    <p className="Logo">MOVIE+</p> 
                        <div className="Browse">
                            <div>
                           <RiArrowDropDownLine className="DropDownArrow"/>
                           </div>
                                <ul>
                                    <li><a className="MenuPages" onClick={() => {navigate("/")}}>Home</a></li>
                                    <li><a className="MenuPages" onClick={() => {navigate("/movies")}}>Movies</a></li>
                                    <li><a className="MenuPages" onClick={() => {navigate("/mylist")}}>My List</a></li>
                                </ul>
                        </div>                        
                </div>
                <div className="Menu">
                    <div className="SearchBarContainer">
                        <div>
                            <AiOutlineSearch className="SearchIcon"/>
                        </div>
                        <div>
                            <input className="SearchInput"></input>
                            <button onClick={() => {navigate("/searchedresult")}}>Search button</button>
                        </div>
                        <div>
                            <MdAccountCircle className="AccountIcon"/>
                        </div>
                    </div>
                </div>               
            </nav>
        </div>
  )
}

export default Header;