import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../img/logo.png";
import BgImg from "../img/background-header.png";
import Content from "../content/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-scroll";
import Contacts from "../contacts/Contacts";
import Menu from "../range/Menu";

function Range(props) {
  if (!props.give) {
    return null;
  }
  return (
    <div className="list-bl__fixed">
      <div className="list-bl__products">
        <Menu />
        <div className="list-bl__icon_close">
          <div className="fa fa-times" onClick={props.giveProducts}></div>
        </div>
      </div>
    </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BgImg: BgImg,
      Logo: Logo,
      btnName: "Ассортимент",
      title: "Ассортимент",
      shown: false
    };
    this.giveProducts = this.giveProducts.bind(this);
    this.products = {
      range: {
        title: "ассортимент",
        icon: "fas fa-clipboard-list"
      },
      menu: {
        title: "меню",
        icon: "fas fa-concierge-bell"
      },
      contacts: {
        title: "контакты",
        icon: "fas fa-id-badge"
      }
    };
  }
  giveProducts() {
    this.setState(state => ({
      shown: !state.shown
    }));
  }
  render() {
    const { BgImg, Logo, btnName } = this.state;
    const { range, menu, contacts } = this.products;
    return (
      <header>
        <Range give={this.state.shown} giveProducts={this.giveProducts} />
        <div className="header-wrap">
          <div className="header-wrap__bg">
            <img src={BgImg} alt="background" />
            <div className="header-wrap__bg_effect"></div>
          </div>
          <div className="container">
            <div className="header-logo">
              <img src={Logo} alt="logo" />
            </div>

            <div className="header-wrap__lists">
              <div className="header-wrap__list_item">
                <Link
                  activeClass="active"
                  to="header-btn"
                  spy={true}
                  smooth={true}
                  offset={180}
                  duration={1500}
                >
                  <div className="header-wrap__list_icon">
                    <div className={range.icon}></div>
                  </div>
                </Link>

                <div className="header-wrap__list_txt">
                  <Link
                    activeClass="active"
                    to="header-btn"
                    spy={true}
                    smooth={true}
                    offset={180}
                    duration={1500}
                  >
                    <h3>{range.title}</h3>
                  </Link>
                </div>
              </div>

              <div className="header-wrap__list_item">
                <div className="header-wrap__list_icon">
                  <div onClick={this.giveProducts} className={menu.icon}></div>
                  <div className="header-wrap__list_txt">
                    <h3 onClick={this.giveProducts}>{menu.title}</h3>
                  </div>
                </div>
              </div>

              <div className="header-wrap__list_item">
                <div className="header-wrap__list_icon">
                  <Router>
                    <a href="/Contacts">
                      <div className="header-wrap__list_icon">
                        <div className={contacts.icon}></div>
                      </div>
                    </a>
                    <Switch>
                      <Route exact path="/Contacts" component={Contacts} />
                    </Switch>
                  </Router>
                  <Router>
                    <div className="header-wrap__list_txt">
                      <h3>
                        <a href="/Contacts">{contacts.title}</a>
                      </h3>
                    </div>
                    <Switch>
                      <Route exact path="/Contacts" component={Contacts} />
                    </Switch>
                  </Router>
                </div>
              </div>
            </div>

            <div className="header-btn">
              <Link
                activeClass="active"
                to="header-btn"
                spy={true}
                smooth={true}
                offset={180}
                duration={1500}
              >
                <button>{btnName}</button>
              </Link>
            </div>
          </div>
        </div>
        <Content />
      </header>
    );
  }
}

export default Header;
