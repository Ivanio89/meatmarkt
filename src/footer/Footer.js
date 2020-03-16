import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Напишите нам",
      author: "Сайт создан и разработан для ознакомления",
      subtitle: "2020/все права защищены"
    };
    this.getForm = this.getForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ [event.target.email]: event.target.value });
    this.setState({ [event.target.comment]: event.target.value });
  }
  getForm(event) {
    event.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let comment = this.state.comment;
    console.log(name);
    console.log(email);
    console.log(comment);
  }
  render() {
    const { title, author, subtitle } = this.state;
    return (
      <footer>
        <div className="footer-block">
          <div className="container">
            <div className="footer-block__title">
              <h1>{title}</h1>
            </div>
            <form onSubmit={this.getForm}>
              <input
                type="text"
                onChange={this.handleChange}
                name="name"
                value={this.state.value}
                id="user-name"
                placeholder="Имя"
              />
              <input
                type="text"
                onChange={this.handleChange}
                name="email"
                value={this.state.value}
                id="user-email"
                placeholder="Email"
              />
              <textarea
                onChange={this.handleChange}
                name="comment"
                value={this.state.value}
                id="user-text"
                cols="30"
                rows="10"
                placeholder="Напишите текст"
              ></textarea>
              <input type="submit" value="Отправить" />
            </form>
            <div className="footer-block">
              <p className="footer-block__author">{author}</p>
              <p className="footer-block__subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
