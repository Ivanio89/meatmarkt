import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/Header";
import Contacts from "../contacts/Contacts";
import ListProducts from "../listProducts/ListProducts";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <Router>
          <nav className="nav-flex">
            <ul className="nav-flex__item">
              <li>
                <a href="/">главная</a>
              </li>
              <li>
                <a href="/List">о товаре</a>
              </li>
              <li>
                <a href="/Contacts">контакты</a>
              </li>
            </ul>
          </nav>
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
