import React from "react";
import "./SocialButton.scss";

const SocialButton = (props) => {
  let classList = "button";
  let types = ["Facebook", "Email", "Twitter", "LinkedIn", "WhatsApp"];

  if (types.includes(props.type)) {
    classList += ` ${props.type}`;
  }

  return <div className={classList}>{props.type}</div>;
};

export default SocialButton;
