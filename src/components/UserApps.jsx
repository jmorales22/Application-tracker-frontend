import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import NoData from "./NoData";
import UserAppsHeader from "./UserAppsHeader";

import SingleApp from "./SingleApp";
import PublicApps from "./PublicApps";
import {
  Centered,
  AppForm,
  OuterWrapper,
  LinkStyle,
  Wrapper,
  AppIntWrapper,
  AppIntTitle,
  MainList,
  DividingLine } from "./styled";


class UserApps extends Component {
  static contextType = LoginContext;

  state = {
    apps: [],
    user_id: this.context.user.user_id,
  };

  async getApps() {
    let user_id = this.state.user_id;

    const response = await fetch(
      `http://localhost:2000/applications/${user_id}`
    );
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const apps = await this.getApps();

    this.setState({
      apps: apps,
    });
  }

  render() {
    let appsArray = this.state.apps;

    return (
      <>
        <UserAppsHeader />
        <Centered>
          <OuterWrapper>
            <Wrapper>
              <div>
                <Link style={linkStyle} to={`/companies`}>
                  <LinkStyle>
                    See Companies Others Have Applied To
                  </LinkStyle>
                </Link>
              </div>
              <AppIntWrapper>
              <AppIntTitle>
                <div>
                  Your Applications:
                </div>
              </AppIntTitle>
              <Centered>
                <AppForm>
                  <Link style={linkStyle} to={`/applicationform`}>
                    +app
                  </Link>
                </AppForm>
              </Centered>
              <DividingLine></DividingLine>
              <MainList style={userApp}>
                {appsArray.length > 0 ? (
                  appsArray.map((app, index) => {
                    return (
                      <div key={app.id}>
                        <SingleApp app={this.state.apps[index]}></SingleApp>
                        <Link
                          style={linkStyle}
                          to={`/interviewentry/${app.id}/${app.company_id}`}
                        >
                          <LinkStyle>
                            Add a New Interview{" "}
                          </LinkStyle>
                        </Link>
                    <DividingLine></DividingLine>
                      </div>
                    );
                  })
                ) : (
                  <li>
                    <NoData />
                  </li>
                )}
              </MainList>
              </AppIntWrapper>
              <AppIntWrapper>
                <PublicApps />
              </AppIntWrapper>
            </Wrapper>
          </OuterWrapper>
        </Centered>
      </>
    );
  }
}
const userApp = {
  listStyle: "none",
};
const linkStyle = {
  color: "#00adb5",
  textDecoration: "none",
};
export default UserApps;
