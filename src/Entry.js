import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "./index.css";


class Entry extends Component {
  render() {
    return (
      <div> 
        <h1 className="title"> Andy Hodapp </h1>         
        <NavLink className="entryLink" exact to="/Home">
          <div className="window">Enter</div> 
        </NavLink> 
             
      </div>
    );
  }
}

export default Entry;