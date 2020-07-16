import React, { Component } from "react";
import "./Form.scss";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      checked: false,
      autoComplete: "off",
    };
  }

  handleCheck = (e) => {
    if (!this.state.checked) {
      this.setState({ checked: e.target.checked, autoComplete: "on" });
    } else {
      this.setState({ checked: e.target.checked, autoComplete: "off" });
    }
  };

  handleChange = (e) => {
    // let valuee = e.target.name;
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form autoComplete={this.state.autoComplete}>
        <label htmlFor="name" className="form-name">
          {" "}
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleChange}
          ></input>
        </label>
        <label htmlFor="email" className="form-email">
          {" "}
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={this.handleChange}
          ></input>
        </label>
        <label htmlFor="message" className="form-message">
          {" "}
          Your Message
          <textarea
            rows="5"
            name="message"
            placeholder="Enter message"
            onChange={this.handleChange}
          ></textarea>
        </label>
        <label htmlFor="autofill" className="form-checkbox">
          {" "}
          Save my name, email, and website in this browser for the next time I
          comment.
          <input
            type="checkbox"
            name="autofill"
            onChange={this.handleCheck}
          ></input>
        </label>
        <button type="submit" onSubmit={this.handleSubmit}>
          Submit Comment
        </button>
      </form>
    );
  }
}
