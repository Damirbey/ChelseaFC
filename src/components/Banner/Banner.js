import React from 'react';
import banner1 from '../../images/Banner/banner1.png';
import banner2 from '../../images/Banner/banner2.png';
import './Banner.css';

function Banner(){
    return (
        <div id="carouselControls" className="carousel slide banner" data-ride="carousel" data-interval="2000" data-pause="hover">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={banner1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={banner2} alt="Second slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
export default Banner;
