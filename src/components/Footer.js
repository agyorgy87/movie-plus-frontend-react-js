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
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col">
                        <p>Cookie Policy</p>
                    </div>
                    <div className="col">
                        <p>Privacy Rights(EU and UK)</p>
                    </div>
                    <div className="col">
                        <p>Help</p>
                    </div>
                    <div className="col">
                        <p>Supported Devices</p>
                    </div>
                    <div className="col">
                        <p>About Us</p>
                    </div>
                </div>
            <div className="col">
                <p>&copy; movie+</p>
            </div>    
        </div>
  )
}

export default Footer;