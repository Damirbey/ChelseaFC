import React from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Wrapper from '../components/Wrapper/Wrapper';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import NewsDetail from '../components/NewsSection/NewsDetail';
import Statistics from '../components/Statistics/Statistics';
import Transfers from '../components/Transfers/Transfers';
import Squad from '../components/Squad/Squad';

function App() {
  return (
      <div> 
          <BrowserRouter>
            <Navigation/>
            <Wrapper>
              <Route path="/ChelseaFC" component={HomeScreen} exact/>
              <Route path="/news/:id" component={NewsDetail}/>
              <Route path="/squad" component={Squad}/>
              <Route path="/transfers" component={Transfers}/>
              <Route path="/statistics" component={Statistics}/>
            </Wrapper> 
          </BrowserRouter>      
      </div>
  );
}

export default App;
