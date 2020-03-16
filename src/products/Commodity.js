import React from "react";
import { connect } from "react-redux";

class Commodity extends React.Component {
  titelIt() {
    let arr = [];
    arr.push(this.props.commoditys);

    let prod;

    const pro = arr.map(item => {
      return (prod = item.map(elem => {
        return (
          <div key={elem.id} className="block-commodity__wrapper">
            <div className="block-commodity__subtitle">
              <h3>{elem.subtitle}</h3>
            </div>
            <div className="blok-commodity__descriptinon">
              <p>{elem.description}</p>
            </div>
            <div className="block-commodity__img">
              <img src={elem.img} alt={elem.subtitle} />
            </div>
          </div>
        );
      }));
    });
    return <div className="block-commodity__item">{prod}</div>;
  }
  hiddenIt() {
    window.location.reload();
  }
  render() {
    if (!this.props.commoditys) {
      return null;
    }
    return (
      <div className="block-commodity__fixed">
        <div className="block-commodity__wrapp">
          <div className="block-commodity__icon">
            <div
              className="fa fa-times"
              onClick={this.hiddenIt.bind(this)}
            ></div>
          </div>
          {this.titelIt()}
        </div>
      </div>
    );
  }
}

function listCommoditys(state) {
  return { commoditys: state.active };
}

export default connect(listCommoditys)(Commodity);
