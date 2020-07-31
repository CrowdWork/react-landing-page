import React from "react";
import "./Donate.scss";
import cgcLogo from "../../Images/Community-Grocery-Coop_Logo-1-e1592865232476.jpg";
import Button from "../../Components/Button/Button.js";
import Modal from "../../Components/Modal/Modal.js";

const Donate = (props) => {
  let raised = "";
  let goal = "";
  let buttons;

  if (props.data.donation_details) {
    goal = `$${props.data.donation_details.goal}`;
    raised = `$${props.data.donation_details.amount_raised}`;
    let socialLinks = props.data.share;
    console.log(socialLinks);

    buttons = Object.entries(socialLinks).map(([key, value]) => {
      return <Button key={key.id} type={key} link={value} social />;
    });
  }
  return (
    <section className="donate">
      <div className="container">
        <div className="column first">
          <div className="logo-container">
            <img src={cgcLogo} alt="CGC Logo"></img>
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
            Goal: <span>{goal ? goal : "$0"}</span>
          </h2>
          <h2 className="amount-text">Amount Raised</h2>
          <div className="amount-value">
            <p>{raised ? raised : "$0"}</p>
          </div>
          {/* <Button type="Donate" link="#" /> */}
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
          <div className="social-container">
            {/* <Button
              type="Facebook"
              link="https://www.facebook.com/sharer.php?u=https://campaigns.crowdwork.coop/community-grocery-cooperative"
              social
            />
            <Button
              type="Email"
              link="mailto:?subject=Community Grocery Cooperative – Crowdfunding Campaigns&body=https://campaigns.crowdwork.coop/community-grocery-cooperative"
              social
            />
            <Button
              type="Twitter"
              link="https://twitter.com/intent/tweet?text=https://campaigns.crowdwork.coop/community-grocery-cooperative"
              social
            />
            <Button
              type="LinkedIn"
              link="https://www.linkedin.com/shareArticle?mini=true&url=https://campaigns.crowdwork.coop/community-grocery-cooperative&title=Community%20Grocery%20Cooperative%20%E2%80%93%20Crowdfunding%20Campaigns&summary=&source=https://campaigns.crowdwork.coop/community-grocery-cooperative"
              social
            />
            <Button
              type="WhatsApp"
              link="https://api.whatsapp.com/send?text=*Community%20Grocery%20Cooperative%20%E2%80%93%20Crowdfunding%20Campaigns*https://campaigns.crowdwork.coop/community-grocery-cooperative"
              social
            /> */}
            {buttons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
