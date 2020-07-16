import React from "react";
import "./App.scss";
import NavBar from "./Sections/NavBar/NavBar.js";
import Donate from "./Sections/Donate/Donate.js";
import Button from "./Components/Button/Button.js";

function App() {
  return (
    <div className="App">
      <Button type="Facebook" />
      <NavBar />
      <Donate />
    </div>
  );
}

export default App;
