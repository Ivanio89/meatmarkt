import React from "react";

const Navigation = props => (
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
);

export default Navigation;
