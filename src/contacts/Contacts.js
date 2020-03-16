import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const Maps = () => (
  <YMaps>
    <div>
      <Map
        defaultState={{ center: [57.453981, 42.128586], zoom: 19 }}
        width={"800px"}
        height={"500px"}
      />
    </div>
  </YMaps>
);

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Мясная лавка г. Кинешма",
      title: "Контакты",
      communication:
        "Мы находимся в городе Кинешма Ивановская область ул. 50-летия Комсомола, 18А, Кинешма, Россия"
    };
  }
  render() {
    const { heading, title, communication } = this.state;
    return (
      <div className="feedback">
        <div className="feedback-heading">
          <h2>{heading}</h2>
        </div>
        <div className="container">
          <div className="feedback-bl">
            <div className="feedback-bl__title">
              <h1>{title}</h1>
            </div>
            <div className="feedback-bl__map">
              <Maps />
            </div>
            <div className="feedback-bl__communication">
              <h1>{communication}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
