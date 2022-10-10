import '../css/Header.css';
import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';

const Header = () => {

    return (
        <div>
            <nav>
                <div className="Menu">
                    <p className="Logo">MOVIE PLUS</p> 
                        <div className="Browse">
                           <RiArrowDropDownLine className="DropDownArrow"/> 
                                <ul>
                                    <li><a href="#">MOVIES</a></li>
                                    <li><a href="#">SERIES</a></li>
                                    <li><a href="#">MY LIST</a></li>
                                </ul>
                        </div>
                        <div className="SearchBar">
                            <AiOutlineSearch className="SearchIcon"/><input placeholder="kereső  mező"></input>
                            <MdAccountCircle className="AccountIcon"/>
                        </div>
                </div>
                
            </nav>
        </div>
  )
}

export default Header;