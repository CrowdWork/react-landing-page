import React from "react";
import "./Contribute.scss";
import Form from "../../Components/Form/Form.js";
import Sad from "../../Images/sad.svg";

const Contribute = (props) => {
  return (
    <div className="contribute">
      <div className="container">
        <div className="contributors column">
          <h2>Contributors</h2>
          <em>
            <strong>Be the first to donate!</strong>
          </em>
        </div>
        <div className="comments column">
          <div className="sad-face">
            <img src={Sad}></img>
          </div>
          <p>No comments yet.</p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Contribute;
