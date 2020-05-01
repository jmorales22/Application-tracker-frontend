import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div>
        <div>
          <p style={paragraph}>We help you </p>
          <p style={paragraph}>keep track of your applications</p>
        </div>
      </div>
    );
  }
}

const paragraph = {
  fontSize: "40px",
  fontFamily: "Roboto, sans-serif",
  textAlign: "center",
  marginTop: "0",
};
export default Intro;
