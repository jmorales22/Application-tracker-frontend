import React, { Component } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

import {
  AboutH1,
  Centered,
  AppIntWrapper,
  AppFormBox,
  LinkStyle,
  OuterWrapper,
  Wrapper,
  DividingLine,
  GithubLinks,
} from "./styled";
class About extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <br />
        <Centered>
          <OuterWrapper>
            <Wrapper>
              <Centered>
                <AppIntWrapper>
                  <Link style={linkStyle1} to={`/`}>
                    <LinkStyle>AppTrack</LinkStyle>
                  </Link>
                  <DividingLine></DividingLine>
                  <AppFormBox>
                    <AboutH1>
                      AppTrack is our capstone project for DigitalCrafts. You
                      can click on these links to checkout or download the code
                      from Github.
                    </AboutH1>

                    <GithubLinks>
                      <a
                        href="https://github.com/jmorales22/Application-tracker-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        Front-End of AppTrack
                      </a>
                      <br />
                      <br />
                      <a
                        href="https://github.com/jmorales22/Application-tracker-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                      >
                        Back-End of AppTrack
                      </a>
                    </GithubLinks>
                  </AppFormBox>
                </AppIntWrapper>
              </Centered>
            </Wrapper>
          </OuterWrapper>
        </Centered>
      </div>
    );
  }
}
const linkStyle = {
  color: "blue",
};
const linkStyle1 = {
  color: "#00adb5",
  textDecoration: "none",
};
export default About;
