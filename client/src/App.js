

import React, { Component } from 'react';  

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; 
import Home from  "./portfolioContainer/Home/Home";
import Project from "./portfolioContainer/Projects/Project";
import About from "./portfolioContainer/About me/About";
import Navbar from "./portfolioContainer/Home/Navbar"
import Contact from "./portfolioContainer/Contact me/Contact";

import {  
  BrowserRouter as Router,  
  Routes,  
  Route 
}   
from 'react-router-dom';  
class App extends Component {
  render(){
  return (
    
    
   
   <Router>
   <div className="App">  
             <Navbar/>

   
        <Routes>
        
           <Route exact path="/"element={<Home />} />
          <Route path="/about"element = { <About /> } />
          <Route path="/project"element={<Project />} />
          <Route path="/contact"element={<Contact />} />
          
          
        </Routes>
        
      </div>
     
    </Router>
    
  );
}
}

export default App;
