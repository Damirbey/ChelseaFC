import React from 'react';
import './Navigation.css';
function Navigation()
{
    return (
        <nav>
            <ul className="main-nav">
                <li><a href="#"><i class="fa fa-home fa-2x"></i></a></li>
                <li><a href="#">Chelsea FC</a></li>
                <li><a href="#">Squad</a></li>
                <li><a href="#">Transfers</a></li>
                <li><a href="#">Statistics</a></li>
                <li className="push"><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;