import React, { Component } from "react";
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

class ApplicationForm extends Component {
  state = {
    city: "",
    position: "",
    position_description: "",
    application_date: "",
    offer_extended: "",
    make_public: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    //e.preventDefault();

    try {
      const { city, position, description, date, offer, public } = this.state;

      const data = {
        city: city,
        position: position,
        position_description: description,
        application_date: date,
        offer_extended: offer,
        make_public: public,
      };

      const url = "http://localhost:2000/";
      const response = await postAPI(url, data);

      if (response.status === 200) {
        alert("application data submitted");
      }
      if (response.status !== 200) {
        alert("Unable to submit application data.");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const {} = this.state;

    return (
      <div>
        <h1>Complete your application information.</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="text"
            data-testid="messageText"
            placeholder=""
            onChange={this.handleChange}
            name=""
            value={}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder=""
            onChange={this.handleChange}
            name=""
            value={}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder=""
            onChange={this.handleChange}
            name=""
            value={}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder=""
            onChange={this.handleChange}
            name=""
            value={}
            required
          />
          <br />
          <input
            type="text"
            data-testid="messageText"
            placeholder=""
            onChange={this.handleChange}
            name=""
            value={}
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

export default ApplicationForm;
