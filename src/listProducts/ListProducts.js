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

const CompartmentProduct = props => {
  const productsRange = props.productsRange;
  const listcompartmentProduct = productsRange.map(product => {
    return (
      <div className="product-inner__item" key={product.id}>
        <div className="product-inner__img">
          <img src={product.img} alt="img" />
        </div>
        <div className="product-inner__flex">
          <div className="product-inner__title">
            <h4>{product.title}</h4>
          </div>
          <div className="product-inner__text">
            <p>{product.text}</p>
          </div>
          <div className="product-inner__btn">
            <button onClick={props.giveProducts}>подробнее</button>
          </div>
        </div>
      </div>
    );
  });
  return <div className="product-inner">{listcompartmentProduct}</div>;
};

const productsRange = [
  {
    id: 11,
    title: "СВИНИНА",
    text:
      "Среди мясных блюд особой популярностью пользуется свинина. Она имеет множество полезных свойств, обладает приятным вкусом и ароматом.",
    img: ImgOne
  },
  {
    id: 12,
    title: "РЫБА",
    text:
      "Рыба по содержанию белка стоит на одном уровне с мясом. И с мясом мы можем получить незаменимые аминокислоты, которые не можем синтезировать.",
    img: ImgTwo
  },
  {
    id: 13,
    title: "РЫБА СОЛЕНАЯ, КОПЧЕНАЯ",
    text:
      "Рыба – вкусный и полезный продукт, который употребляют в пищу практически все люди на планете. Существует множество способов ее приготовления. Копчение добавляет во вкус пикантности и продлевает срок хранения.",
    img: ImgThree
  },
  {
    id: 14,
    title: "ВОБЛА",
    text:
      "Почти все из нас хоть раз употребляли воблу в пищу. И для этого вовсе нет необходимости одновременно употреблять и пиво. Вобла – это не добавка к пиву, а самостоятельный и полезный продукт.",
    img: ImgFour
  },
  {
    id: 15,
    title: "ПТИЦА",
    text:
      "Мясо птиц - важная составляющая в питании человека. В нем много ценных белков, витаминов, минералов и аминокислот. ",
    img: ImgFive
  },
  {
    id: 16,
    title: "ПОЛУФАБРИКАТЫ",
    text:
      "Когда нужно приготовить вкусный обед за 10 минут, всегда можно взять котлеты или пельмени.",
    img: ImgSix
  },
  {
    id: 17,
    title: "КОЛБАСЫ",
    text:
      "Колбаса — продукт любимый многими. Обязательный гость праздничного стола, а некоторые не представляют завтрак без нее. Пряный аромат, разнообразие вкусовых оттенков завоевали любовь потребителей. ",
    img: ImgSeven
  },
  {
    id: 18,
    title: "МОЛОКО",
    text:
      "Все родители призывают своих детей пить молоко, чтобы повысить защитные силы и улучшить настроение. Благодаря этому с продуктом знаком абсолютно каждый. ",
    img: ImgEight
  },
  {
    id: 19,
    title: "СЫРЫ",
    text:
      "Сыр является популярным молочным продуктом питания. Его получают путем организации процесса свертывания молока (коровьего, козьего, овечьего). ",
    img: ImgNine
  }
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

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Мясная лавка г. Кинешма",
      title: "Ассортимент",
      get: false
    };
    this.giveProducts = this.giveProducts.bind(this);
  }
  giveProducts() {
    this.setState(state => ({
      get: !state.get
    }));
  }
  render() {
    const { heading, title } = this.state;
    return (
      <div className="feedback">
        <div className="feedback-heading">
          <h2>{heading}</h2>
        </div>
        <div className="container">
          <div className="product-inner__title">
            <h1>{title}</h1>
          </div>
          <CompartmentProduct
            productsRange={productsRange}
            giveProducts={this.giveProducts}
            get={this.state.get}
          />
        </div>
        <RangeMenu give={this.state.get} giveProducts={this.giveProducts} />
      </div>
    );
  }
}

export default ListProducts;
