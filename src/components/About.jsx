import React, { Component } from "react";
import Header from "./Header";
import {
  AboutH1,
  Centered,
  AppIntWrapper,
  AppFormBox,
  Input,
  OuterWrapper,
  CreateButton,
  Wrapper,
  LinkStyle,
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
                  <LinkStyle>
                    <div> AppTrack</div>
                  </LinkStyle>
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

export default About;
