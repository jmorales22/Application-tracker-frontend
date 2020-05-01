import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div>
        <div style={header1}>Keep track of your applications</div>
      </div>
    );
  }
}

const header1 = {
  marginTop: "40px",
  fontFamily: "Roboto, sans-serif",
  textAlign: "center",
};

const image1 = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
export default Intro;
