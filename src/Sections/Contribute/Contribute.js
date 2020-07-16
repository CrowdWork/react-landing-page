import React from "react";
import "./Contribute.scss";
import Form from "../../Components/Form/Form.js";

const Contribute = (props) => {
  return (
    <div className="contribute">
      <div className="container">
        <div className="contributors column"></div>
        <div className="comments column"></div>
        <Form />
      </div>
    </div>
  );
};

export default Contribute;
