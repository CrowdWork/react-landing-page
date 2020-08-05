import React from "react";
import "./Contribute.scss";
import CommentForm from "../../Components/Form/CommentForm.js";
import Sad from "../../Images/sad.svg";

const Contribute = (props) => {
  return (
    <section className="contribute">
      <div className="contribute-container">
        <div className="contributors column">
          <h2>Contributors</h2>
          <em>
            <strong>Be the first to donate!</strong>
          </em>
        </div>
        <div className="comments column">
          <div className="sad-face">
            <img src={Sad} alt="sad face"></img>
          </div>
          <p>No comments yet.</p>
        </div>
        <CommentForm />
      </div>
    </section>
  );
};

export default Contribute;
