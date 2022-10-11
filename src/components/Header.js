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
                    <p className="Logo">MOVIE+</p> 
                        <div className="Browse">
                            <div>
                           <RiArrowDropDownLine className="DropDownArrow"/>
                           </div>
                                <ul>
                                    <li><a href="#" className="MenuPages">Home</a></li>
                                    <li><a href="#" className="MenuPages">Movies</a></li>
                                    <li><a href="#" className="MenuPages">Series</a></li>
                                    <li><a href="#" className="MenuPages">My List</a></li>
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