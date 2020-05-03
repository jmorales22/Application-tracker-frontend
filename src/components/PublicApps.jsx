import React, { Component } from "react";
import { AppIntBox } from './styled'

class PublicApps extends Component {
  state = {
    apps: [],
  };

  async getData() {
    const response = await fetch("http://localhost:2000/apps");
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const apps = await this.getData();

    this.setState({
      apps: apps,
    });
  }

  render() {
    let appsArray = this.state.apps;

    return (
      <AppIntBox>
        <h3>All user interview and application history:</h3>
        <ul className="PublicApplications">
          {appsArray.length > 0 ? (
            appsArray.map((app) => (
              <li>
                {app.first_name} applied for: {app.position}
                <br />
                <br />
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </AppIntBox>
    );
  }
}
export default PublicApps;
