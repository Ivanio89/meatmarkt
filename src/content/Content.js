import React from "react";
import ImgOne from "../img/content/01.jpg";
import ImgTwo from "../img/content/02.jpg";
import ImgThree from "../img/content/03.jpg";
import ImgFour from "../img/content/04.jpg";
import ImgFive from "../img/content/05.jpg";
import ImgSix from "../img/content/06.jpg";
import ImgSeven from "../img/content/07.jpg";
import ImgEight from "../img/content/08.jpg";
import ImgNine from "../img/content/09.jpg";
import Menu from "../range/Menu";

const Range = props => {
  const rangeNameImg = props.rangeNameImg;
  const listRange = rangeNameImg.map(range => {
    return (
      <div className="content-box__item" key={range.id}>
        <div className="content-box__image">
          <img src={range.img} alt="img" width="250" height="250" />
        </div>
        <div className="content-box__txt-products">
          <h3>{range.name}</h3>
        </div>
        <div className="content-box__btn">
          <button onClick={props.giveProducts}>Узнать</button>
        </div>
      </div>
    );
  });
  return <div className="content-box">{listRange}</div>;
};

const rangeNameImg = [
  { id: 0, name: "Свинина", img: ImgOne },
  { id: 1, name: "Рыба", img: ImgTwo },
  { id: 2, name: "РЫБА с / к", img: ImgThree },
  { id: 3, name: "Вобла", img: ImgFour },
  { id: 4, name: "Птица", img: ImgFive },
  { id: 5, name: "Полуфабрикаты", img: ImgSix },
  { id: 6, name: "Колбасы", img: ImgSeven },
  { id: 7, name: "Молоко", img: ImgEight },
  { id: 8, name: "Сыры", img: ImgNine }
];

function RangeMenu(props) {
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

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      get: false,
      title: "Ассортимент"
    };
    this.giveProducts = this.giveProducts.bind(this);
  }
  giveProducts() {
    this.setState(state => ({
      get: !state.get
    }));
  }
  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <RangeMenu give={this.state.get} giveProducts={this.giveProducts} />
        <div className="product-inner__title">
          <h1>{title}</h1>
          <Range
            rangeNameImg={rangeNameImg}
            giveProducts={this.giveProducts}
            get={this.state.get}
          />
        </div>
      </div>
    );
  }
}

export default Content;
