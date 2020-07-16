import React from "react";
import "./Donate.scss";
import cgcLogo from "../../Images/Community-Grocery-Coop_Logo-1-e1592865232476.jpg";
import Button from "../../Components/Button/Button.js";

const Donate = (props) => {
  return (
    <div className="donate">
      <div className="container">
        <div className="column first">
          <div className="logo-container">
            <img src={cgcLogo}></img>
          </div>
          <p>
            <strong>
              Support our consumer-owned grocery store for DC’s Wards 7 & 8 —{" "}
            </strong>
            Bringing Local, Accessible and Affordable Healthy Food to
            Neighborhoods East of the River.
          </p>
        </div>
        <div className="column second">
          <h2 className="goal">
            Goal: <span>$19,800</span>
          </h2>
          <h2 className="amount-text">Amount Raised</h2>
          <div className="amount-value"></div>
          <Button type="Donate" link="#" />
          <p>
            <span>*</span>{" "}
            <strong>
              100% of contributions directly fund the Community Grocery
              Cooperative.
            </strong>
          </p>
        </div>
        <div className="column third">
          <h2>Please Forward Along to Your Networks</h2>
          <Button type="Facebook" link="#" social />
          <Button type="Email" link="#" social />
          <Button type="Twitter" link="#" social />
          <Button type="LinkedIn" link="#" social />
          <Button type="WhatsApp" link="#" social />
        </div>
      </div>
    </div>
  );
};

export default Donate;
