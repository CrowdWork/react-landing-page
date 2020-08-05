import React from "react";
import "./About.scss";
import parse from "html-react-parser";

const About = (props) => {
  let mission = props.data.main_content;
  mission = parse(mission);
  let mainImg = props.data.image_1.sizes.large;
  let plan = props.data.secondary_content;
  plan = parse(plan);
  console.log(plan[2].props.children);
  let secondImg = props.data.image_2.sizes.large;
  let backgroundColor = {
    backgroundColor: `${props.data.primary_color}`,
  };

  return (
    <section className="about">
      <div className="about-container" style={backgroundColor}>
        <div className="mission">
          <div className="about-content mission-content">{mission}</div>
          <div className="about-image mission-image">
            <img src={mainImg} alt="Campaign Main"></img>
          </div>
        </div>
        <div className="plan">
          <div className="about-image plan-image">
            <img src={secondImg} alt="Campaign Secondary"></img>
          </div>
          <div className="about-content plan-content">{plan}</div>
        </div>
        <div className="test">
          <div className="box" id="two"></div>
          <div className="box" id="one"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
