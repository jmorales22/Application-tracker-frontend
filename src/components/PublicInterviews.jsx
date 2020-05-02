import React, { Component } from "react";
import NoInterviewData from "./NoInterviewData";
import PublicInterviewsHeader from "./PublicInterviewsHeader";
import { Link } from "react-router-dom";

class PublicInterviews extends Component {
  state = {
    interviews: [],
  };

  async getData() {
    const { id } = this.props.match.params;
    const response = await fetch(`http://localhost:2000/companies/${id}`);
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const interviews = await this.getData();

    this.setState({
      interviews: interviews,
    });
  }

  render() {
    let interviewsArray = this.state.interviews;

    return (
      <div>
        <>
          <PublicInterviewsHeader />
          <br />
          <Link style={back} to={`/companies`} type="submit">
            Back
          </Link>
          <h3> Interview Information</h3>
          <ul style={userApp}>
            {interviewsArray.length > 0 ? (
              interviewsArray.map((interview) => {
                const date = new Date(interview.interview_date);
                const newDate = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                let dateStr = month + "/" + newDate + "/" + year;
                return (
                  <li>
                    {interview.company_name}
                    <br />
                    Interview Round: {interview.round}
                    <br />
                    Interview Type: {interview.interview_type}
                    <br />
                    Date of Interview: {dateStr}
                    <br />
                    Rating: {interview.interview_rating}
                    <br />
                    Whiteboarding?: {interview.whiteboarding}
                    <br />
                    Code Challenge? {interview.code_challenge}
                    <br />
                    Comments: {interview.comments}
                    <br />
                    <br />
                  </li>
                );
              })
            ) : (
              <li>
                <NoInterviewData />
              </li>
            )}
          </ul>
        </>
      </div>
    );
  }
}

const back = {
  borderRadius: "10px",
  fontFamily: "Lato, sans-serif",
  fontSize: "14px",
  height: "20px",
  color: "#00adb5",
  background: "#00adb5",
  border: "solid 2px #00adb5",
  color: "#FFFFFF",
  textDecoration: "none",
  padding: "0px 8px",
  position: "relative",
  marginRight: "5px",
};

const userApp = {
  listStyle: "none",
};
export default PublicInterviews;
