import React, { Component } from "react";
import "../App.css";
import ApplicationFormHeader from "./ApplicationFormHeader";
import { withRouter } from "react-router-dom";
import { Wrapper, Hstyle, Input } from "./styled";

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

class ApplicationForm extends Component {
  state = {
    user_id: this.props.user_id,
    company_name: "",
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
    e.preventDefault();

    try {
      const {
        user_id,
        company_name,
        city,
        position,
        position_description,
        date,
        offer,
        makePublic,
      } = this.state;

      const data = {
        user_id,
        company_name,
        city,
        position,
        position_description,
        application_date: date,
        offer_extended: offer,
        make_public: makePublic,
      };

      const url = "http://localhost:2000/userapplications";
      const response = await postAPI(url, data);

      if (response === 200) {
        this.props.history.push("/applications");
      }
      if (response !== 200) {
        alert("Unable to submit application data.");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const {
      company,
      city,
      position,
      position_description,
      date,
      offer,
      makePublic,
    } = this.state;

    return (
      <div>
        <ApplicationFormHeader />
        <br />
        <Wrapper>
          <Hstyle>Complete your application information.</Hstyle>
          <br />
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <Input
              type="text"
              placeholder="company"
              onChange={this.handleChange}
              name="company_name"
              value={company}
              required
            />
            <br />
            <Input
              type="text"
              placeholder="city"
              onChange={this.handleChange}
              name="city"
              value={city}
              required
            />
            <br />
            <Input
              type="text"
              placeholder="position"
              onChange={this.handleChange}
              name="position"
              value={position}
              required
            />
            <br />
            <Input
              type="text"
              placeholder="job description"
              onChange={this.handleChange}
              name="position_description"
              value={position_description}
              required
            />
            <br />
            <Input
              type="date"
              placeholder="applied date"
              onChange={this.handleChange}
              name="date"
              value={date}
              required
            />
            <br />
            <label>
              Job Offer?
              <Input
                type="radio"
                placeholder="job offer?"
                onChange={this.handleChange}
                name="offer"
                value="Yes"
                checked={offer === "Yes"}
              />
              Yes
            </label>
            <label>
              <Input
                type="radio"
                placeholder="job offer?"
                onChange={this.handleChange}
                name="offer"
                value="No"
                checked={offer === "No"}
              />
              No
            </label>
            <label>
              <Input
                type="radio"
                placeholder="job offer?"
                onChange={this.handleChange}
                name="offer"
                value="Nothing yet"
                checked={offer === "Nothing yet"}
              />
              Nothing Yet
            </label>
            <div>
              <label>
                Make Info Public?
                <Input
                  type="radio"
                  name="makePublic"
                  value="Yes"
                  checked={makePublic === "Yes"}
                  onChange={this.handleChange}
                />
                Yes
              </label>
              <label>
                <Input
                  type="radio"
                  name="makePublic"
                  value="No"
                  checked={makePublic === "No"}
                  onChange={this.handleChange}
                />
                No
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Wrapper>
      </div>
    );
  }
}

export default withRouter(ApplicationForm);
