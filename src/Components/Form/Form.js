import React, { Component } from "react";
import "./Form.scss";
import Check from "../../Images/check.svg";

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
      <form
        autoComplete={this.state.autoComplete}
        className="comment-form column"
      >
        <h3>ADD A COMMENT</h3>
        <label htmlFor="name" className="form-text">
          {" "}
          Name
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={this.handleChange}
            required="required"
          ></input>
        </label>
        <label htmlFor="email" className="form-text">
          {" "}
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={this.handleChange}
            required="required"
          ></input>
        </label>
        <label htmlFor="message" className="form-text">
          {" "}
          Your Message
          <textarea
            rows="5"
            name="message"
            placeholder="Enter message"
            onChange={this.handleChange}
            required="required"
          ></textarea>
        </label>
        <label htmlFor="autofill" className="form-checkbox">
          <input
            type="checkbox"
            name="autofill"
            onChange={this.handleCheck}
            className="checkmark"
          ></input>
          <span className="checkmark purple-check">
            {" "}
            <img src={Check} alt="checkmark"></img>
          </span>
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
        <button
          type="submit"
          onSubmit={this.handleSubmit}
          className="submit-btn"
        >
          Submit Comment
        </button>
      </form>
    );
  }
}
