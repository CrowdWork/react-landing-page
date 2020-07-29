import React from "react";
import "./About.scss";
import parse from "html-react-parser";

const About = (props) => {
  let mission = "";
  let plan = "";
  let mainImg = "";
  let secondImg = "";
  if (props.data.main_content) {
    mission = props.data.main_content;
    mission = parse(mission);
    console.log(mission);
    mainImg = props.data.image_1.sizes.medium;
  }
  if (props.data.secondary_content) {
    plan = props.data.secondary_content;
    plan = parse(plan);
    console.log(plan);
    secondImg = props.data.image_2.sizes.medium_large;
  }
  return (
    <section className="about">
      <div className="mission">
        <div className="mission-content">{mission}</div>
        <div className="mission-image">
          <img src={mainImg} alt="Campaign main image"></img>
        </div>
      </div>
      <div className="plan">
        <div className="plan-image">
          <img src={secondImg} alt="Campaign secondary image"></img>
        </div>
        <div className="plan-content">{plan}</div>
      </div>
      <div className="media"></div>
    </section>
  );
};

export default About;
