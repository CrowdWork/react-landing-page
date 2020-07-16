import React from "react";
import "./Donate.scss";
import cgcLogo from "../../Images/Community-Grocery-Coop_Logo-1-e1592865232476.jpg";

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
          <h3 className="goal">
            Goal: <span>$19,800</span>
          </h3>
          <h3 className="amount">Amount</h3>
          <div className="button"></div>
          <a href="#" className="button donate-btn">
            Donate
          </a>
          <p>
            <span>*</span> 100% of contributions directly fund the Community
            Grocery Cooperative.
          </p>
        </div>
        <div className="column third"></div>
      </div>
    </div>
  );
};

export default Donate;
