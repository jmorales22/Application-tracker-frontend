import React, { Component } from "react";

class UserInterviews extends Component {

  state = {
    interviews: [],
    app_id: this.props.appData.id
  };

  async getInterviews() {

    const response = await fetch(
      `http://localhost:2000/interviews/${this.state.app_id}`
    );
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const interviews = await this.getInterviews();

    this.setState({
      interviews: interviews
    });
  }

  render() {
    let interviewArray = this.state.interviews;

    return (
        <div>
            {interviewArray.map((interview, index) => (
              <li>
                <br />
                <strong>{interviewArray[index].round}</strong><br />
                Type: {interviewArray[index].interview_type}<br />
                Date: {interviewArray[index].interview_date}<br />
                Rating: {interviewArray[index].interview_rating}<br />
                Interviewer: {interviewArray[index].intervier}<br />
                Contact: {interviewArray[index].follow_up_person}<br />
                Contact Email: {interviewArray[index].follow_up_email}<br />
                Whiteboarding: {interviewArray[index].whiteboarding}<br />
                Coding Challenge: {interviewArray[index].code_challenge}<br />
                Comments: {interviewArray[index].comments}<br />
              </li>
            ))}
        </div>
    );
  }
}

export default UserInterviews;