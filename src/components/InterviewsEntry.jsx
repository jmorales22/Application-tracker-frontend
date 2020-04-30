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
  console.log(response);
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
    //e.preventDefault ();
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
    console.log("this is the state", this.state)
    console.log("these are the props", this.props)
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
        <h2>Complete your interview information.</h2>
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
          
          <Main>
          {/* <Pstyle>1. What round of interview are you in?
          <Input
            type="text"
            placeholder="Interview Round"
            onChange={this.handleChange}
            name="round"
            required
            value={round}
            /></Pstyle> */}
            <p>1. What round of interview are you in?</p>
            <div className="form-check"> Round 1
            <label>
              <input
              type="radio"
              name="round"
              value= "round1"
              checked={this.state.selectedOption === "round1"}
              className="form-check-input"

              />
            </label>
          </div>
          <div className="form-check"> Round 2
            <label>
              <input
              type="radio"
              name="round"
              value="round2"
              checked={this.state.selectedOption === "round2"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Round 3
            <label>
              <input
              type="radio"
              name="round"
              value="round3"
              checked={this.state.selectedOption === "round3"}
              className="form-check-input"
              />
            </label>
          </div>
            {/* <Pstyle>2. What type of interview did you have?
            <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="interview_type"
            value={interview_type}
            required
          /></Pstyle> */}
          <p>2. What type of interview did you have?</p>
          <div className="form-check"> In Person
            <label>
              <input
              type="radio"
              name="interview_type"
              value="In Person"
              checked={this.state.selectedOption === "In Person"}
              className="form-check-input"
              />
            </label>
          </div>

          <div className="form-check"> Phone
            <label>
              <input
              type="radio"
              name="interview_type"
              value="Phone"
              checked={this.state.selectedOption === "Phone"}
              className="form-check-input"
              />
            </label>
          </div>

          <div className="form-check"> Video
            <label>
              <input
              type="radio"
              name="interview_type"
              value="Video"
              checked={this.state.selectedOption === "Video"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Other
            <label>
              <input
              type="radio"
              name="interview_type"
              value="Other"
              checked={this.state.selectedOption === "Other"}
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
        
          {/* <Pstyle>4. How would you rate the interview process?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="interview_rating"
            value={interview_rating}
            required
          /></Pstyle> */}
          <p>4. How would you rate the interview process?</p>
          <div className="form-check"> Easy
            <label>
              <input
              type="radio"
              name="interview_rating"
              value="Easy"
              checked={this.state.selectedOption === "Easy"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Moderate
            <label>
              <input
              type="radio"
              name="interview_rating"
              value="Moderate"
              checked={this.state.selectedOption === "Moderate"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> Difficult
            <label>
              <input
              type="radio"
              name="interview_rating"
              value="Difficult"
              checked={this.state.selectedOption === "Difficult"}
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
          {/* <Pstyle>9. Were you required to do whiteboarding for the interview?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="whiteboarding"
            value={whiteboarding}
            required
          /></Pstyle> */}
          {/* </div> */}
          <p>9. Were you required to do whiteboarding for the interview?</p>
          <div className="form-check"> Yes
            <label>
              <input
              type="radio"
              name="whiteboarding"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> No
            <label>
              <input
              type="radio"
              name="whiteboarding"
              value="No"
              checked={this.state.selectedOption === "No"}
              className="form-check-input"
              />
            </label>
          </div>
          {/* <Pstyle>10. Were you required to complete a code challenge?
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="code_challenge"
            value={code_challenge}
            required
          /></Pstyle> */}
          <p>10. Were you required to complete a code challenge?</p>
          <div className="form-check"> Yes
            <label>
              <input
              type="radio"
              name="code_challenge"
              value="Yes"
              checked={this.state.selectedOption === "Yes"}
              className="form-check-input"
              />
            </label>
          </div>
          <div className="form-check"> No
            <label>
              <input
              type="radio"
              name="code_challenge"
              value="No"
              checked={this.state.selectedOption === "No"}
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

