import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserInterviews extends Component {
  state = {
    apps: [],
  };

  async getData() {
    const response = await fetch("http://localhost:2000/interviews");
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
      <ul className="UserInterviews">
        {appsArray.length > 0 ? (
          appsArray.map((app) => (
            <li>
              {app.user_id}
              <br />
              {app.application_id}
              <br />
              {app.company_id}
              <br />
              {app.round}
              <br />
              {app.interview_type}
              <br />
              {app.interview_date}
              <br />
              {app.interview_rating}
              <br />
              {app.interviewer}
              <br />
              {app.follow_up_person}
              <br />
              {app.follow_up_phone}
              <br />
              {app.follow_up_email}
              <br />
              {app.whitebording}
              <br />
              {app.comments}
              <br />
            </li>
          ))
        ) : (
          <li>No Data</li>
        )}
      </ul>
    );
  }
}
export default UserInterviews;
