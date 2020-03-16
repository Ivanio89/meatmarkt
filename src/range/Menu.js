import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { select } from "../select/Select";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
    this.list = {
      title: "Ассортимент",
      subtitle: [
        { id: 11, name: "Свинина" },
        { id: 12, name: "Рыба" },
        { id: 13, name: "РЫБА с / к" },
        { id: 14, name: "Вобла" },
        { id: 15, name: "Птица" },
        { id: 16, name: "Полуфабрикаты" },
        { id: 17, name: "Колбасы" },
        { id: 18, name: "Молоко" },
        { id: 19, name: "Сыры" }
      ]
    };
  }
  render() {
    const { title, subtitle } = this.list;
    return (
      <div className="list-price">
        <h1>{title}</h1>
        <div className="list-price__item">
          <ul>
            {this.props.commoditys.map((commodity, index) => {
              return (
                <li key={index} onClick={() => this.props.select(commodity)}>
                  {subtitle.map((sub, ind) => {
                    if (index === ind) {
                      return <h3 key={sub.id}>{sub.name}</h3>;
                    }
                  })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

function listCommodity(state) {
  return { commoditys: state.commoditys };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ select: select }, dispatch);
}

export default connect(listCommodity, matchDispatchToProps)(Menu);
