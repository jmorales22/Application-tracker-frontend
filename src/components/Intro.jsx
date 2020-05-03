import React, { Component } from "react";
import logo_transparent from "../images/logo_transparent.png";
import { LogoImage } from "../components/styled";
class Intro extends Component {
  render() {
    return (
      <div>
        <LogoImage>
          <img style={img} src={logo_transparent}></img>
        </LogoImage>
      </div>
    );
  }
}

const img = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

export default Intro;
