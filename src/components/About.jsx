import React, { Component } from "react";
import Header from "./Header";

class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <p>
          AppTrack is our capstone project for DigitalCrafts. You can click on
          these links to checkout or download the code from Github.
        </p>
        <a
          href="https://github.com/jmorales22/Application-tracker-frontend"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Front-End of AppTrack
        </a>
        <br />
        <a
          href="https://github.com/jmorales22/Application-tracker-backend"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          Back-End of AppTrack
        </a>
      </div>
    );
  }
}
const linkStyle = {
  color: "blue",
};

export default About;
