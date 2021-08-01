import React from 'react';
import './Navigation.css';
import {Link} from 'react-router-dom';
function Navigation()
{
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <a class="navbar-brand" href="#">
                <i class="fa fa-home fa-2x"></i>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/ChelseaFC"><a class="nav-link" >Chelsea FC</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/footer"><a class="nav-link">Squad</a></Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Transfers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Statistics</a>
                    </li>              
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-user-plus"></i> Sign Up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fa fa-sign-in"></i> Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;