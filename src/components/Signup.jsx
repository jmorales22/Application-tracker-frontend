import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SignUpHeader from "./SignupHeader";
import Footer from "./Footer";
import { Main, Input, Pstyle, InputBox, Wrapper, Button } from "./styled"; 

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

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.history.push("./login");

    try {
      const { firstName, lastName, email, password } = this.state;

      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        user_password: password,
        is_admin: "no",
      };
      const url = "http://localhost:2000/adduser";
      const response = await postAPI(url, data);

      if (response.status === 200) {
        alert("Account Created");
      }
      if (response.status !== 200) {
        alert("Unable to sign up. Please try again later or go to login page.");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div>
        <SignUpHeader />
        <Main>Sign Up Here!</Main>
        <Wrapper>
        <form onSubmit={(e) => this.handleSubmit(e)} action="/login">
          <Input
            type="text"
            data-testid="messageText"
            placeholder="First Name"
            onChange={this.handleChange}
            name="firstName"
            value={firstName}
            required
          />
          <br />
          <Input
            type="text"
            data-testid="messageText"
            placeholder="Last Name"
            onChange={this.handleChange}
            name="lastName"
            value={lastName}
            required
          />
          <br />
          <Input
            type="text"
            data-testid="messageText"
            placeholder="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            required
          />
          <br />
          <Input
            type="text"
            data-testid="messageText"
            placeholder="Password"
            onChange={this.handleChange}
            name="password"
            value={password}
            required
          />
          <br />
          <button type="submit">SignUp!</button>
        </form>
        </Wrapper>
        <Footer />
        </div>
    );
  }
}

export default withRouter(Signup);
