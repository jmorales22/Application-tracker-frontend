import React, {Component} from 'react';
import '../App.css';

const postAPI = async (url, data) => {
  const response = await fetch (url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify (data),
  }).then (response => response.json ());
  console.log (response);
  return response;
};

class InterviewsEntry extends Component {
  state = {
    user_id: '',
    application_id: '',
    company_id: '',
    round: '',
    interview_date: '',
    interview_rating: '',
    interviewer: '',
    follow_up_person: '',
    follow_up_phone: '',
    follow_up_email: '',
    whiteboarding: '',
    comments: '',
  };

  handlechange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault ();

    try {
      const {
        user_id,
        application_id,
        company_id,
        round,
        interviewDate,
        interviewRating,
        interviewer,
        followUpPerson,
        followUpPhone,
        followUpEmail,
        whiteboarding,
        comments,
      } = this.state;

      const data = {
        user_id: user_id,
        application_id: application_id,
        company_id: company_id,
        round: round,
        interview_date: interviewDate,
        interview_rating: interviewRating,
        interviewer: interviewer,
        follow_up_person: followUpPerson,
        follow_up_phone: followUpPhone,
        follow_up_email: followUpEmail,
        whiteboarding: whiteboarding,
        comments: comments,
      };

      const url = 'http://localhost:2000/interviewsEntry';
      const response = await postAPI (url, data);

      if (response.status === 200) {
        alert ('Entry Created');
      }
      if (response.status !== 200) {
        alert ('Unable to input entry. Please try again later.');
      }
    } catch (err) {
      return err;
    }
  };

  render () {
    const {
      user_id,
      application_id,
      company_id,
      round,
      interviewDate,
      interviewRating,
      interviewer,
      followUpPerson,
      followUpPhone,
      followUpEmail,
      whiteboarding,
      comments,
    } = this.state;

    return (
      <div>
        <h1>Complete your interview information here:</h1>
        <form onSubmit={e => this.handleSubmit (e)}>
          <input
            type="text"
            data-testid="messageText"
            placeholder="User's Name"
            onChange={this.handleChange}
            name="user"
            value={user_id}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Was an application submitted?"
            onChange={this.handleChange}
            name="application"
            value={application_id}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Company Name"
            onChange={this.handleChange}
            name="company"
            value={company_id}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Interview Round"
            onChange={this.handleChange}
            name="round"
            value={round}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Date of Interview"
            onChange={this.handleChange}
            name="interviewDate"
            value={interviewDate}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Rate the Interview"
            onChange={this.handleChange}
            name="interviewRating"
            value={interviewRating}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Interviewer's Name?"
            onChange={this.handleChange}
            name="interviewer"
            value={interviewer}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Contact to follow up with?"
            onChange={this.handleChange}
            name="followUpPerson"
            value={followUpPerson}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Phone number for follow-up?"
            onChange={this.handleChange}
            name="followUpPhone"
            value={followUpPhone}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Follow-up email?"
            onChange={this.handleChange}
            name="followUpEmail"
            value={followUpEmail}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder="Was whiteboarding required?"
            onChange={this.handleChange}
            name="whiteboarding"
            value={whiteboarding}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
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
      </div>
    );
  }
}
export default InterviewsEntry;
