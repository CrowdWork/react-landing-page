import React from "react";
import "./Button.scss";

const Button = (props) => {
  let classList = "button";
  let types = [
    "Donate",
    "Facebook",
    "Email",
    "Twitter",
    "LinkedIn",
    "WhatsApp",
  ];

  if (types.includes(props.type)) {
    let type = props.type.toLowerCase();
    classList += ` ${type}-btn`;
  }

  return <div className={classList}>{props.type}</div>;
};

export default Button;
