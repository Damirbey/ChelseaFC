import React from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Wrapper from '../components/Wrapper/Wrapper';
import Footer from '../components/Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import NewsDetail from '../components/NewsSection/NewsDetail';

function App() {
  return (
      <div> 
          <BrowserRouter>
            <Navigation/>
            <Wrapper>
              <Route path="/ChelseaFC" component={HomeScreen} exact/>
              <Route path="/news/:id" component={NewsDetail}/>
              <Route path="/footer" component={Footer}/>
            </Wrapper> 
          </BrowserRouter>      
      </div>
  );
}

export default App;
