import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import NoData from "./NoData";
import UserAppsHeader from "./UserAppsHeader";
import plus from "../images/plus.png";

import SingleApp from "./SingleApp";
import PublicApps from "./PublicApps";
import { Wrapper } from "./styled";


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
        <br />
        <Wrapper>
          <p>
            <Link style={linkStyle} to={`/companies`}>
              See a List of All User Application Companies
            </Link>
          </p>
          <h3> Your submitted application data:</h3>
          <p>
            <Link style={linkStyle} to={`/applicationform`}>
              <img src={plus} height="20" width="20" alt="add" />
              Application Form
            </Link>
          </p>
          <ul style={userApp}>
            {appsArray.length > 0 ? (
              appsArray.map((app, index) => {
                return (
                  <li>
                    <SingleApp app={this.state.apps[index]}></SingleApp>
                    <div></div>
                    <Link
                      style={linkStyle}
                      to={`/interviewentry/${app.id}/${app.company_id}`}
                    >
                      Enter interview information{" "}
                    </Link>
                    <br />

                    <br />
                  </li>
                );
              })
            ) : (
              <li>
                <NoData />
              </li>
            )}
          </ul>
          <br />
          <PublicApps />
        </Wrapper>
      </>
    );
  }
}
const userApp = {
  listStyle: "none",
};
const linkStyle = {
  color: "blue",
  textDecoration: "none",
};
export default UserApps;
