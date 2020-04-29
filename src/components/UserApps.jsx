import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginContext, { LoginConsumer } from '../context/LoginContext'
import NoData from "./NoData";

class UserApps extends Component {
  static contextType = LoginContext;

  state = {
    apps: [],
    user_id: this.context.user.user_id
  };

  async getData() {
    let user_id = this.state.user_id;

    const response = await fetch(
      `http://localhost:2000/applications/${user_id}`
    );
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const apps = await this.getData();

    this.setState({
      apps: apps
    });
  }

  render() {
    let appsArray = this.state.apps;

    return (
      <>
        <h3> Your submitted application data:</h3>
        <ul style={userApp}>
          {appsArray.length > 0 ? (
            appsArray.map((app) => (
              <li>
                City: {app.city}
                <br />
                Position: {app.position}
                <br />
                Postion description: {app.position_description}
                <br />
                Application Date: {app.application_date}
                <br />
                Offer Extended? {app.offer_extended}
                <br />
                <br />
              </li>
            ))
          ) : (
            <li>
              <NoData />
            </li>
          )}
        </ul>
      </>
    );
  }
}

const userApp = {
  listStyle: "none",
};
export default UserApps;
