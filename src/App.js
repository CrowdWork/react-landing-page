import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./Sections/NavBar/NavBar.js";
import Donate from "./Sections/Donate/Donate.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Donate />
    </div>
  );
}

export default App;
