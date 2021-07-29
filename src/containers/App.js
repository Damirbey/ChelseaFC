import React from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Wrapper from '../components/Wrapper/Wrapper';
import Banner from '../components/Banner/Banner';
import Headline from '../components/Headline/Headline';
import News from '../components/NewsSection/News';
import Footer from '../components/Footer/Footer';


function App() {
  return (
    <div>
      <Navigation/>
      <Wrapper>
        <Banner/>
        <Headline/>
        <News/>
        <Footer/>
      </Wrapper>
    </div>
  );
}

export default App;
