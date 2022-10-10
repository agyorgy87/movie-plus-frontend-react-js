import React from 'react';
import Iron from '../img/iron.jpg'

const Main = () => {
  return (
    <div>
        <div className="Row">
            <h2>My List</h2>
                <div className="films">
                    <img src={Iron} alt=""/>
                </div>
        </div>
    </div>
  )
}

export default Main