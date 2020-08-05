import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import "./Button.scss";

const Button = (props) => {
  let classList = "button";
  let icon;
  let type = props.type;
  let disabledDefault = {
    backgroundColor: "transparent",
  };
  // let type = props.type.split("_")[2];
  let typeClass = type.charAt(0).toLowerCase() + type.slice(1);
  classList += ` ${typeClass}-btn`;

  if (type === "Email") {
    icon = "mail-outline";
  } else {
    icon = `logo-${type}`;
  }

  if (type === "Email") {
    return (
      <EmailShareButton
        className={classList}
        url={props.link}
        subject={`${props.campaign} - Crowdfunding Campaigns`}
      >
        <div className="social">
          <span className="social-icon">
            <ion-icon name={icon}></ion-icon>
          </span>
          <span className="social-name"> {type}</span>
        </div>
      </EmailShareButton>
    );
  }
  if (type === "Facebook") {
    return (
      <FacebookShareButton className={classList} url={props.link}>
        <div className="social">
          <span className="social-icon">
            <ion-icon name={icon}></ion-icon>
          </span>
          <span className="social-name"> {type}</span>
        </div>
      </FacebookShareButton>
    );
  }
  if (type === "Twitter") {
    return (
      <TwitterShareButton className={classList} url={props.link}>
        <div className="social">
          <span className="social-icon">
            <ion-icon name={icon}></ion-icon>
          </span>
          <span className="social-name"> {type}</span>
        </div>
      </TwitterShareButton>
    );
  }

  if (type === "Linkedin") {
    return (
      <LinkedinShareButton className={classList} url={props.link}>
        <div className="social">
          <span className="social-icon">
            <ion-icon name={icon}></ion-icon>
          </span>
          <span className="social-name"> {type}</span>
        </div>
      </LinkedinShareButton>
    );
  }
  if (type === "Whatsapp") {
    return (
      <WhatsappShareButton className={classList} url={props.link}>
        <div className="social">
          <span className="social-icon">
            <ion-icon name={icon}></ion-icon>
          </span>
          <span className="social-name"> {type}</span>
        </div>
      </WhatsappShareButton>
    );
  }

  if (type === "Donate") {
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
