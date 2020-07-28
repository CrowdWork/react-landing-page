import React, { Component } from "react";
import "./App.scss";
import NavBar from "./Sections/NavBar/NavBar.js";
import Donate from "./Sections/Donate/Donate.js";
import Contribute from "./Sections/Contribute/Contribute.js";
import About from "./Sections/About/About.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    fetch("https://campaigns.crowdwork.coop/wp-json/wp/v2/fundraiser/342")
      .then((res) =>
        res.json().then((data) => this.setState({ data: data.acf }))
      )
      .then();
  }

  render() {
    let overlay;
    if (this.state.data.background_image) {
      overlay = {
        backgroundImage: `url(${this.state.data.background_image.url})`,
      };
    } else {
      overlay = null;
    }
    return (
      <div className="App">
        <div style={overlay} className="image-overlay">
          <div className="color-overlay">
            <NavBar />
            <Donate data={this.state.data} />
            <Contribute />
          </div>
        </div>
        <About data={this.state.data} />
      </div>
    );
  }
}

export default App;
