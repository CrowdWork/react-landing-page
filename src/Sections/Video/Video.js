import React from "react";
import "./Video.scss";
import parse from "html-react-parser";

const Video = (props) => {
  let iFrame = props.video;
  iFrame = parse(iFrame);
  let backgroundStyle = {
    backgroundColor: `${props.background}`,
  };
  return (
    <div className="video">
      <div className="container" style={backgroundStyle}>
        <h1>{props.campaign}</h1>
        {iFrame}
      </div>
    </div>
  );
};

export default Video;
