import React, { Component } from "react";
import { Link } from "react-router-dom";
import InterviewsEntryHeader from "./InterviewsEntryHeader";
import "../App.css";
import { Form, Input, Question } from "./styled";

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
        <div style={h1Style}>Complete your interview information.</div>
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
          
          <Form>
            <Question>1. What round of interview are you in?</Question>
            
          <input
            type="text"
            placeholder="Interview Round"
            onChange={this.handleChange}
            name="round"
            required
            value={round}
            />
          </Form>   
          <Form>
            <Question>2. What type of interview did you have?</Question>
            <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="interview_type"
            value={interview_type}
            required
          />
          </Form>
          <Form>
          <Question>3. What was the date of the interview?</Question>
          <Input
            type="date"
            placeholder=""
            onChange={this.handleChange}
            name="interview_date"
            value={interview_date}
            required
          />
          </Form> 
          
          <Form> 
          <Question>4. How would you rate the interview process?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="interview_rating"
            value={interview_rating}
            required
          />
          </Form> 
          <Form> 
          <Question>5. What is the interviewer's name?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="interviewer"
            value={interviewer}
            required
          />
          </Form>
          <Form> 
          <Question>6. What is the name of the person to follow-up with?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="follow_up_person"
            value={follow_up_person}
            required
          />
          </Form>
          <Form> 
          <Question>7. What is the phone number of the person to follow up with?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="follow_up_phone"
            value={follow_up_phone}
            required
          />
          </Form>
          <Form> 
          <Question>8. What is the email address of the person to follow-up with?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="follow_up_email"
            value={follow_up_email}
            required
          />
          </Form>
          <Form> 
          <Question>9. Were you required to do whiteboarding for the interview?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="whiteboarding"
            value={whiteboarding}
            required
          />
          </Form>
          <Form> 
          <Question>10. Were you required to complete a code challenge?</Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="code_challenge"
            value={code_challenge}
            required
          />
          </Form>
          <Form>
          <Question>11. Please additional comments here: </Question>
          <Input
            type="text"
            placeholder=""
            onChange={this.handleChange}
            name="comments"
            value={comments}
            required
          />
          </Form>
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

const h1Style = {
  margin: "0",
  display: "flex",
  flexDirection: "row",
  flexGrow: "0",
  alignItems: "center",
  height: "50px",
  marginLeft: "30px",
  fontSize: "35px",
  fontFamily: "Comfortaa, cursive",
  color: "black",
  };


export default InterviewsEntry;

