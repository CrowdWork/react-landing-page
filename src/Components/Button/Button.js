import React, { useState } from "react";
import "./Button.scss";

const Button = (props) => {
  const [hover, toggleHover] = useState(false);
  let classList = "button";
  let icon;
  let type = props.type.split("_")[2];
  classList += ` ${type}-btn`;

  if (type === "email") {
    icon = "mail-outline";
  } else {
    icon = `logo-${type}`;
  }
  if (hover) {
    classList += " test";
  }
  if (props.type === "Donate") {
    return (
      <a href={props.link} className={classList}>
        <p>{props.type}</p>
      </a>
    );
  }

  return (
    <a
      className={classList}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
    >
      <div className="social">
        <span className="social-icon">
          <ion-icon name={icon}></ion-icon>
        </span>
        <span className="social-name"> {type}</span>
      </div>
    </a>
  );
};

export default Button;
