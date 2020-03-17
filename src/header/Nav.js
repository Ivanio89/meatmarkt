import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/Header";
import Contacts from "../contacts/Contacts";
import ListProducts from "../listProducts/ListProducts";
import Navigation from "./Navigation";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Header} />
            <Route exact path="/list" component={ListProducts} />
            <Route exact path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Nav;
