import React from "react";
import "./NavBar.scss";

const NavBar = (props) => {
  return (
    <nav>
      <a
        className="link-container"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        &#8592; BACK TO HOME
      </a>
    </nav>
  );
};

export default NavBar;
