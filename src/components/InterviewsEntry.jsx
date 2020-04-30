import React, { Component } from "react";
import { Link } from "react-router-dom";
import InterviewsEntryHeader from "./InterviewsEntryHeader";
import "../App.css";
import { Main, Input, Pstyle } from "./styled";


const postAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());  
  return response;
};

class InterviewsEntry extends Component {
  state = {
    user_id: this.props.user_id,
    application_id: this.props.match.params.app_id,
    company_id: this.props.match.params.company_id,
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
    e.preventDefault ();
    this.props.history.push("/applications")
    
    try {
      const {
        user_id,
        application_id,
        company_id,
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
        user_id: user_id,
        application_id: application_id,
        company_id: company_id,
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
        <h2>Complete your interview information.</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          
          <Main>
            <p>1. What round of interview are you in?</p>
            <div className="form-check"> Round 1
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="round"
              value= "Round1"
              checked={round === "Round1"}
              className="form-check-input"

              />
            </label>
          </div>
          <div className="form-check"> Round 2
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="round"
              value="round2"
              checked={round === "round2"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Round 3
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="round"
              value="round3"
              checked={round === "round3"}
              className="form-check-input"
              />
            </label>
          </div>
          <p>2. What type of interview did you have?</p>
          <div className="form-check"> In Person
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_type"
              value="In Person"
              checked={interview_type === "In Person"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Phone
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_type"
              value="Phone"
              checked={interview_type === "Phone"}
              className="form-check-input"
              />
            </label>
          </div>

          <div className="form-check"> Video
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_type"
              value="Video"
              checked={interview_type === "Video"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Other
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_type"
              value="Other"
              checked={interview_type === "Other"}
              className="form-check-input"
              />
            </label>
          </div>
          <Pstyle>3. What was the date of the interview?
          <Input
            type="date"
            placeholder=""
            onChange={this.handleChange}
            name="interview_date"
            value={interview_date}
            required
          /></Pstyle>
          <p>4. How would you rate the interview process?</p>
          <div className="form-check"> Easy
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_rating"
              value="Easy"
              checked={interview_rating === "Easy"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Moderate
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_rating"
              value="Moderate"
              checked={interview_rating === "Moderate"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Difficult
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="interview_rating"
              value="Difficult"
              checked={interview_rating === "Difficult"}
              className="form-check-input"
              />
            </label>
          </div>
          <Pstyle>5. What is the interviewer's name?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="interviewer"
            value={interviewer}
            required
          /></Pstyle>
          <Pstyle>6. What is the name of the person to follow-up with?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="follow_up_person"
            value={follow_up_person}
            required
          /></Pstyle>
          <Pstyle>7. What is the phone number of the person to follow up with?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="follow_up_phone"
            value={follow_up_phone}
            required
          /></Pstyle>
          <Pstyle>8. What is the email address of the person to follow-up with?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="follow_up_email"
            value={follow_up_email}
            required
          /></Pstyle>
          <p>9. Were you required to do whiteboarding for the interview?</p>
          <div className="form-check"> Yes
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="whiteboarding"
              value="Yes"
              checked={whiteboarding === "Yes"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> No
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="whiteboarding"
              value="No"
              checked={whiteboarding === "No"}
              className="form-check-input"
              />
            </label>
          </div>
          <p>10. Were you required to complete a code challenge?</p>
          <div className="form-check"> Yes
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="code_challenge"
              value="Yes"
              checked={code_challenge === "Yes"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> No
            <label>
              <input
              type="radio"
              onChange={this.handleChange}
              name="code_challenge"
              value="No"
              checked={code_challenge === "No"}
              className="form-check-input"
              />
            </label>
          </div>
          
          <Pstyle>11. Please provide additional comments here:
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="comments"
            value={comments}
            required
          /></Pstyle>
          </Main>
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

