import React from "react";
import "./App.scss";
import NavBar from "./Sections/NavBar/NavBar.js";
import Donate from "./Sections/Donate/Donate.js";
import Contribute from "./Sections/Contribute/Contribute.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Donate />
      <Contribute />
    </div>
  );
}

export default App;
