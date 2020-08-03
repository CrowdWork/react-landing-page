import React, { Component } from "react";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneTime: true,
      recurring: false,
      threePercentAmount: "",
      sixPercentAmount: "",
    };
  }

  handleCheck = (e) => {
    this.setState({
      oneTime: !this.state.oneTime,
      recurring: !this.state.recurring,
    });
  };

  calculateOverhead = (e) => {};
  render() {
    return (
      <>
        <button
          id="donatefrontend"
          className="button donate-btn"
          uk-toggle="target: #my-id"
          type="button"
        >
          Donate Now
        </button>

        <div id="my-id" uk-modal="true">
          <div className="uk-modal-dialog uk-modal-body">
            <h2 className="uk-modal-title uk-heading-small">
              {this.props.campaign}
            </h2>
            <hr className="uk-divider-icon" />
            <p>
              Specialized note here about the fundraiser: Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ullamcorper morbi
              tincidunt ornare massa eget egestas purus viverra.
            </p>

            <form>
              <div className="uk-margin donor-details">
                <label>
                  Your Email <input type="email" name="email" />
                </label>
                <label>
                  Zipcode <input type="email" name="email" />
                </label>
              </div>
              <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <h3>Donation Type:</h3>
                <label>
                  <input
                    className="uk-checkbox monetarydonations"
                    type="checkbox"
                    id="recurring"
                    name="recurring"
                    onChange={this.handleCheck}
                    checked={this.state.recurring}
                  />
                  Recurring
                </label>
                <label>
                  <input
                    className="uk-checkbox monetarydonations"
                    type="checkbox"
                    id="onetime"
                    name="onetime"
                    checked={this.state.oneTime}
                    onChange={this.handleCheck}
                  />
                  One-Time
                </label>
                <label>
                  <input
                    className="uk-checkbox"
                    id="timebank"
                    type="checkbox"
                    name="timebank"
                    uk-tooltip="title: Timebanking is a labor-time based bartering system, where people exchange services for hourly time credits, rather than money; pos: bottom-left"
                  />
                  TimeBank-Credit
                </label>
              </div>

              <div className="uk-margin timebankcredit">
                <input
                  className="uk-input"
                  name="donatedcredits"
                  number="true"
                  type="text"
                  placeholder="Number of TimeCredits You Wish to Donate"
                />
              </div>

              <hr className="uk-divider-icon" />
              <input
                className="uk-input"
                name="donationamnt"
                id="donationamnt"
                number="true"
                type="number"
                placeholder="Donation Amount"
              />

              <div className="supportecosystem">
                <h5>
                  Add a little extra to your donation to keep the platform
                  operational
                </h5>
                <div id="threepercent">
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    name="recurring"
                  />
                  <label id="threepercent_lbl">
                    {" "}
                    3% - Total Donation: {this.state.threePercentAmount}
                  </label>
                </div>
                <div id="sixpercent">
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    name="sixpercent"
                  />
                  <label id="sixpercent_lbl">
                    {" "}
                    6% - Total Donation: {this.state.sixPercentAmount}
                  </label>
                </div>

                <div>
                  <label>Custom Amount</label>
                  <input
                    className="uk-input"
                    id="customsupport"
                    number="true"
                    name="customamnt"
                    // value="0"
                    type="number"
                  />
                </div>
              </div>

              <div id="subscription-form">
                <div id="card-element" className="MyCardElement">
                  {/* <!-- Elements will create input elements here --> */}
                </div>
              </div>
              <div id="payment-form">
                {/* <!-- We'll put the error messages in this element --> */}
                <div id="card-errors" role="alert">
                  <button
                    type="submit"
                    className="uk-button uk-align-center sustainingbtn"
                  >
                    Become A Sustaining Donor
                  </button>

                  <div id="card-element">
                    {/* <!-- placeholder for Elements --> */}
                  </div>
                  <div id="card-errors" role="alert"></div>
                  <button
                    id="card-button"
                    className="uk-button uk-align-center onetimebtn"
                  >
                    Submit One-Time Donation
                  </button>
                  <p id="payment-result">
                    {/* <!-- we'll pass the response from the server here --> */}
                  </p>
                </div>
              </div>
            </form>
            {/* <!--</li>
          </ul>--> */}
            <button className="uk-modal-close" type="button">
              X
            </button>
          </div>
        </div>
      </>
    );
  }
}
