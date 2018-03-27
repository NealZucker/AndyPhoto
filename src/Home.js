import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./index.css";
import Footer from "./footer.js";

class Home extends Component {
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
        <div className="window2">Hi, I am Andy, a passionate landscape and automotive photographer based in beautiful Bozeman Mt.  I also do events and portraits. My work has won awards such as the 2014 National Scholastic Press Association Photo of The Year finalist.  For inquiries, visit the contact me page.</div>       
        <Footer/>
      </div>
    );
  }
}

export default Home;