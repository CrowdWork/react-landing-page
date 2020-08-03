import React, { Component } from "react";
import "./App.scss";
import NavBar from "./Sections/NavBar/NavBar.js";
import Donate from "./Sections/Donate/Donate.js";
import Contribute from "./Sections/Contribute/Contribute.js";
import About from "./Sections/About/About.js";
import Contact from "./Sections/Contact/Contact.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: null,
    };
  }

  componentDidMount() {
    let baseUrl = "https://campaigns.crowdwork.coop/wp-json/wp/v2/fundraiser/";
    let cgc = "342";
    let secondaryCampaign = "378";
    fetch(baseUrl + secondaryCampaign)
      .then((res) =>
        res
          .json()
          .then((data) => this.setState({ data: data.acf, loading: true }))
      )
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
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
    if (this.state.loading === true) {
      return (
        <div className="App">
          <div style={overlay} className="image-overlay">
            <div className="color-overlay">
              <NavBar link={this.state.data.website} />
              <Donate data={this.state.data} />
              <Contribute />
            </div>
          </div>
          {/* <About data={this.state.data} /> */}
          <Contact info={this.state.data.profile_details} />
        </div>
      );
    } else if (this.state.loading === null) {
      return <div className="App">Loading...</div>;
    } else {
      return <div className="App">Oops, something went wrong</div>;
    }
  }
}

export default App;
