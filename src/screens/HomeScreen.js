import Navigation from "../components/Navigation/Navigation";
import Wrapper from "../components/Wrapper/Wrapper";
import Banner from "../components/Banner/Banner";
import News from "../components/NewsSection/News";
import Footer from "../components/Footer/Footer";
import React from "react";
import {news} from '../data.js';

function HomeScreen()
{
    return (
        <React.Fragment>
            <Banner/>
            <News news={news}/>
        </React.Fragment>
    )
}

export default HomeScreen;