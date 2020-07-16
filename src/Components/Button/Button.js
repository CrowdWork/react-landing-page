import React, { useState } from "react";
import "./Button.scss";

const Button = (props) => {
  const [hover, toggleHover] = useState(false);
  let classList = "button";
  let icon;
  let type = props.type.toLowerCase();
  classList += ` ${type}-btn`;

  if (props.type === "Email") {
    icon = "mail-outline";
  } else {
    icon = `logo-${props.type}`;
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
      {/* {hover ? <div className="hover-overlay"></div> : null} */}
      <div className="social">
        <span className="social-icon">
          <ion-icon name={icon}></ion-icon>
        </span>
        <span className="social-name"> {props.type}</span>
      </div>
    </a>
  );
};

export default Button;
