import '../css/NavigationBar.css'; 
import React from 'react';
import { useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { MdLocalMovies, MdAccountCircle } from 'react-icons/md';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';


const NavigationBar = () => {  

    let navigate = useNavigate();

    const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    ];
    
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    return (
        <nav>
                <div className="navigation-menu">
                    <div className="logo-menus-container">
                        <div className="logo-container">                           
                            <p className="logo">MOVIE+</p>                                                                
                        </div>   
                        <div>
                            <ul>
                                <li>
                                    <i><AiFillHome className="menu-icons" onClick={() => {navigate("/")}}/></i>
                                    <a className="menu-pages" onClick={() => {navigate("/")}}>HOME</a>
                                </li>
                                <li>
                                    <i><MdLocalMovies className="menu-icons" onClick={() => {navigate("/movies")}}/></i>
                                    <a className="menu-pages" onClick={() => {navigate("/movies")}}>MOVIES</a>
                                </li>
                                <li>
                                    <i><AiOutlineSearch className="menu-icons" onClick={() => {navigate("/search")}}/></i>
                                    <a className="menu-pages" onClick={() => {navigate("/search")}}>SEARCH</a>
                                </li>
                                <li>
                                    <i><AiOutlinePlus className="menu-icons" onClick={() => {navigate("/mylist")}}/></i>
                                    <a className="menu-pages" onClick={() => {navigate("/mylist")}}>MY LIST</a>
                                </li>
                            </ul>                                              
                        </div> 
                    </div>              
                    <div className="account-container">
                        <i><MdAccountCircle className="account-icon"/></i>                    
                    </div>  
                </div>             
            </nav>
  )
}

export default NavigationBar;

/*

            */

