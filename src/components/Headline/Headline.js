import React from 'react';
import fire from '../../images/Headline/fire.png';
import './Headline.css';

function Headline(){
    return (
        <div className="headline">
            <img src={fire} className="fire"/>
            <h4>Latest News</h4>
        </div>
    )
}

export default Headline;