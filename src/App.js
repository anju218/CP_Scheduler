import './App.css';
import React, { Component } from 'react'
import Subscribe from './components/Subscribe'
import NavigationBar from './components/NavigationBar'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {

  return (
    
    <div>
      <Router>
        <NavigationBar/>
      </Router>
    <Subscribe/>
    </div>
    
  );
  
}

export default App;