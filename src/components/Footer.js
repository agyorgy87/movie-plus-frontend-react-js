import '../css/Footer.css'
import React from 'react';

const Footer = () => {   
     return (
        <div className="footer-container">
            <div className="col footer-logo">
                MOVIE+
            </div>
                <div className="footer-menu">
                    <div className="col">
                        <p>Adatvédelmi Szabályzat</p>
                    </div>
                    <div className="col">
                        <p>Cookie-szabályzat</p>
                    </div>
                    <div className="col">
                        <p>Adatvédelmi jogok(EU and UK)</p>
                    </div>
                    <div className="col">
                        <p>Súgó</p>
                    </div>
                    <div className="col">
                        <p>Támogoatott eszközök</p>
                    </div>
                    <div className="col">
                        <p>Rólunk</p>
                    </div>
                </div>
            <div className="col">
                <p>&copy; movie+</p>
            </div>    
        </div>
  )
}

export default Footer;