import React, { Component } from "react";
import logo_transparent from "../images/logo_transparent.png";
import { Logo } from "./styled";
class Intro extends Component {
  render() {
    return (
      <Logo>
        <img src={logo_transparent} alt="App Track" />
      </Logo>
    );
  }
}

export default Intro;
