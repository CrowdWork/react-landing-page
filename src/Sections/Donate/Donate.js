import React from "react";
import "./Donate.scss";
import Button from "../../Components/Button/Button.js";
import Modal from "../../Components/Modal/Modal.js";

const Donate = (props) => {
  let raised = `$${props.data.donation_details.amount_raised}`;
  let goal = `$${props.data.donation_details.goal}`;
  let buttons = Object.entries(props.data.share).map(([key, value]) => {
    if (!value) {
      return <Button key={key} type={key} link={value} social />;
    } else {
      return null;
    }
  });

  return (
    <section className="donate">
      <div className="container">
        <div className="column first">
          <div className="logo-container">
            <img
              src={props.data._thumbnail_id.sizes.medium}
              alt="CGC Logo"
            ></img>
          </div>
          <p>{props.data.tagline}</p>
        </div>
        <div className="column second">
          <h2 className="goal">
            Goal: <span>{goal ? goal : "$0"}</span>
          </h2>
          <h2 className="amount-text">Amount Raised</h2>
          <div className="amount-value">
            <p>{raised ? raised : "$0"}</p>
          </div>
          <Modal campaign={props.data.post_title} />
          <p>
            <span>*</span>{" "}
            <strong>
              100% of contributions directly fund the Community Grocery
              Cooperative.
            </strong>
          </p>
        </div>
        <div className="column third">
          <h2>Please Forward Along to Your Networks!</h2>
          <div className="social-container">{buttons}</div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
