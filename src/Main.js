import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Entry from "./Entry";


class Navbar extends Component {
 
  render() {
    return (  
      <HashRouter>
        <div>
          <div>
            <Route exact path="/" component={Entry}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/stuff" component={Stuff}/>
            <Route exact path="/contact" component={Contact}/>
          </div>  
        </div>
      </HashRouter>
    );
  }
}

export default Navbar;