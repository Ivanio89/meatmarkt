import React from "react";
import Footer from "./footer/Footer";
import Nav from "./header/Nav";
import Commodity from "./products/Commodity";

import "normalize.css";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div className="">
        <Nav />
        <Commodity />
        <Footer />
      </div>
    );
  }
}

export default App;
