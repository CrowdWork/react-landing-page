import React, { Component } from "react";
import "./App.scss";
import NavBar from "./Sections/NavBar/NavBar.js";
import Donate from "./Sections/Donate/Donate.js";
import Contribute from "./Sections/Contribute/Contribute.js";
import About from "./Sections/About/About.js";
import Contact from "./Sections/Contact/Contact.js";
import Video from "./Sections/Video/Video.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      pageUrl: "",
      loading: null,
    };
  }

  componentDidMount() {
    let baseUrl = "https://campaigns.crowdwork.coop/wp-json/wp/v2/fundraiser/";
    // let cgc = "342";
    let earthBound = "378";
    fetch(baseUrl + earthBound)
      .then((res) =>
        res
          .json()
          .then((data) =>
            this.setState({ data: data.acf, loading: true, pageUrl: data.link })
          )
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
              <NavBar link={this.state.data.profile_details.website} />
              <Video
                video={this.state.data.video}
                campaign={this.state.data.post_title}
                background={this.state.data.secondary_color}
              />
              <Donate data={this.state.data} page={this.state.pageUrl} />
              <About data={this.state.data} />
              <Contribute />
            </div>
          </div>
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
