import React, { Component } from "react";
import { AppIntBox, AppIntTitle } from './styled'

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

    function appDate(rawDate) {
    const date = new Date(rawDate);
    const newDate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateStr = month + "/" + newDate + "/" + year;

    return dateStr
    }

    return (
      <AppIntBox>
        <AppIntTitle>What Others Are Applying For:</AppIntTitle>
        <ul className="PublicApplications">
          {appsArray.length > 0 ? (
            appsArray.map((app) => (
              <li>
                <strong>{app.first_name}</strong> on {appDate(app.application_date)}: {app.position} at {app.company_name}
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
