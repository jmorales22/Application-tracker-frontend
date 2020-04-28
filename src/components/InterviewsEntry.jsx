import React, { Component } from "react";
import { Link } from "react-router-dom";
import InterviewsEntryHeader from "./InterviewsEntryHeader";
import "../App.css";

const postAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  console.log(response);
  return response;
};

class InterviewsEntry extends Component {
  state = {
    // application_id: '',
    // company_id: '',
    round: "",
    interview_type: "",
    interview_date: "",
    interview_rating: "",
    interviewer: "",
    follow_up_person: "",
    follow_up_phone: "",
    follow_up_email: "",
    whiteboarding: "",
    code_challenge: "",
    comments: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    // e.preventDefault ();
    try {
      const {
        // application_id,
        // company_id,
        round,
        interview_type,
        interview_date,
        interview_rating,
        interviewer,
        follow_up_person,
        follow_up_phone,
        follow_up_email,
        whiteboarding,
        code_challenge,
        comments,
      } = this.state;

      const data = {
        // application_id: application_id,
        // company_id: company_id,
        round: round,
        interview_type: interview_type,
        interview_date: interview_date,
        interview_rating: interview_rating,
        interviewer: interviewer,
        follow_up_person: follow_up_person,
        follow_up_phone: follow_up_phone,
        follow_up_email: follow_up_email,
        whiteboarding: whiteboarding,
        code_challenge: code_challenge,
        comments: comments,
      };

      const url = "http://localhost:2000/interviewsEntry";
      const response = await postAPI(url, data);

      if (response.status === 200) {
        alert("Entry Created");
      }
      if (response.status !== 200) {
        alert("Unable to input entry. Please try again later.");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const {
      //   application_id,
      //   company_id,
      round,
      interview_type,
      interview_date,
      interview_rating,
      interviewer,
      follow_up_person,
      follow_up_phone,
      follow_up_email,
      whiteboarding,
      code_challenge,
      comments,
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <InterviewsEntryHeader />
        <h1>Complete your interview information here:</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {/* <br />
          <input
            type="text"
            placeholder="Was an application submitted?"
            onChange={this.handleChange}
            name="application_id"
            value={application_id}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Company Name"
            onChange={this.handleChange}
            name="company_id"
            value={company_id}
            required
          />
          <br /> */}
          <input
            type="text"
            placeholder="Interview Round"
            onChange={this.handleChange}
            name="round"
            value={round}
            required
          />
          <br />
          <input
            type="text"
            placeholder="What type of interview did you have?"
            onChange={this.handleChange}
            name="interview_type"
            value={interview_type}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Date of Interview"
            onChange={this.handleChange}
            name="interview_date"
            value={interview_date}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Rate the Interview"
            onChange={this.handleChange}
            name="interview_rating"
            value={interview_rating}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Interviewer's Name?"
            onChange={this.handleChange}
            name="interviewer"
            value={interviewer}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Contact to follow up with?"
            onChange={this.handleChange}
            name="follow_up_person"
            value={follow_up_person}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Phone number for follow-up?"
            onChange={this.handleChange}
            name="follow_up_phone"
            value={follow_up_phone}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Follow-up email?"
            onChange={this.handleChange}
            name="follow_up_email"
            value={follow_up_email}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Was whiteboarding required?"
            onChange={this.handleChange}
            name="whiteboarding"
            value={whiteboarding}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Was there a code challenge?"
            onChange={this.handleChange}
            name="code_challenge"
            value={code_challenge}
            required
          />
          <br />
          <input
            type="text"
            placeholder="Add comments"
            onChange={this.handleChange}
            name="comments"
            value={comments}
            required
          />
          <br />
          <button type="submit" data-testid="submitButton">
            Submit
          </button>
        </form>
        <Link style={linkStyle} to={`/applications`}>
          Home Page
        </Link>
        <br />
        <Link style={linkStyle} to={`/applicationform`}>
          Enter your application information{" "}
        </Link>
      </div>
    );
  }
}

const linkStyle = {
  color: "blue",
};
export default InterviewsEntry;
