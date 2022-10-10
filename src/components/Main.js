import '../css/Main.css';
import React from 'react';
import Iron from '../img/iron.jpg'; 

const Main = () => {
  return (
    <div className="Main">
        <div className="Row FirstRow"> 
            <h2>Action</h2>
                <div className="Movies">
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                </div>
        </div>
        <div className="Row">
            <h2>Comedy</h2>
                <div className="Movies">
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                </div>
        </div>
        <div className="Row">
            <h2>Fantasy</h2>
                <div className="Movies">
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                    <img className="Pictures" src={Iron} alt="pics"/>
                </div>
        </div>
    </div>
  )
}

export default Main