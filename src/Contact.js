import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./index.css";
import Footer from "./footer.js";

class Contact extends Component {
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
        <div className="window3"> 
          <form action="https://formspree.io/AndyHodappMT@gmail.com"method="POST">
            <div className="senderInfo">
              <input className="input1" type="text" name="phone number" placeholder="Enter Your Phone Number"></input>
              <input className="input2" type="email" name="_replyto" placeholder="Enter Your Email"></input>
              <textarea  className="input3" name="message" placeholder="Enter a brief message with you inquiry, and I will get back to you shortly!"></textarea>
              <input className="button" type="submit" value="Send"></input>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Contact;