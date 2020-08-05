import React from "react";
import "./Contact.scss";
import cwLogo from "../../Images/crowdwork_logo.png";

const Contact = (props) => {
  let socialLinks = Object.entries(props.info.social_media).map(
    ([key, value]) => {
      if (key !== "email" && value) {
        return (
          <a
            key={key}
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-link social-${key}`}
          >
            <ion-icon name={`logo-${key}`}></ion-icon>
          </a>
        );
      } else {
        return null;
      }
    }
  );
  return (
    <section className="contact">
      <div className="contact-social">{socialLinks}</div>
      <p>
        <strong>Email: </strong>{" "}
        <a href={`mailto:${props.info.email}`}>{props.info.email}</a>
      </p>
      <p>
        <strong>Website: </strong>
        <a href={props.info.website} target="_blank" rel="noopener noreferrer">
          {props.info.website}
        </a>
      </p>
      <div className="crowdwork">
        <img src={cwLogo} alt="crowdwork logo"></img>
        <p>powered by crowdwork.coop</p>
      </div>
      <footer>
        <p>
          <em>in partnership with</em> Social Conscience PBC
        </p>
      </footer>
    </section>
  );
};
export default Contact;
