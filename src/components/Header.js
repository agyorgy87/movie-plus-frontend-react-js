import '../css/Header.css';
import React from 'react';

const Header = () => {

    return (
        <div>
            <nav>
                <div className="Menu">
                    <p>MOVIE PLUS</p> 
                        <div className="Browse">
                            <ul>
                                <li><a href="#">MOVIES</a></li>
                                <li><a href="#">SERIES</a></li>
                                <li><a href="#">MY LIST</a></li>
                            </ul>
                        </div>
                </div>
            </nav>
        </div>
  )
}

export default Header;