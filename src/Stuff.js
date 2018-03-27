import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Footer from "./footer.js";
import "./index.css";

class Stuff extends Component {
  render() {
    return (
      <div>
        <div className="header"> 
          <h3 className="title2"> Andy Hodapp </h3>        
          <div className="headerRight"> 
            <NavLink className="link" exact to="/home">About Me</NavLink>
            <NavLink className="link" exact to="/stuff">My Work</NavLink>
            <NavLink className="link" exact to="/contact">Contact Me</NavLink>
          </div> 
        </div>    
        <div className="photoWindow"> 
          <div className="top"></div>
          <div className="upperLeft"></div>
          <div className="upperRight"></div>
          <div className="middle"></div>
          <div className="lowerLeft"></div>
          <div className="lowerRight"></div>
          <div className="bottom"></div>
        </div>  
        <Footer/>  
      </div>
    );
  }
}

export default Stuff;