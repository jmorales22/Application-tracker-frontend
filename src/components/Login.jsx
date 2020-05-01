import React, { Component } from "react";
import LoginContext from "../context/LoginContext";
import { withRouter } from "react-router-dom";
import LoginHeader from "./LoginHeader";
import Footer from "./Footer";
import {Main, Button, Wrapper, Input, Label} from "./styled";

class Login extends Component {
  static contextType = LoginContext;
  state = {
    email: "",
    password: "",
  };

  postAPI = async (url, data) => {
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

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { setUser } = this.context;

    try {
      const { email, password } = this.state;

      const data = {
        email: email,
        user_password: password,
      };

      const url = "http://localhost:2000/login/loginuser";
      const response = await this.postAPI(url, data);

      if (response.userId > 0) {
        const newUser = {
          status: true,
          user_id: response.userId,
          admin: false,
        };
        setUser(newUser);
        this.props.history.push("/applications");
      } else {
        alert("Incorrect email and/or password");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <LoginHeader />
        <Main>Login</Main>
        <Wrapper onSubmit={(e) => this.handleSubmit(e)}>
          <Label>
            Email&nbsp;  
            <Input
              type="text"
              onChange={(e) => this.handleChange(e)}
              name="email"
              value={email}
              placeholder="username"
            />
          </Label>
          <Label>
            &nbsp;&nbsp;&nbsp;Password&nbsp;
            <Input
              type="password"
              onChange={(e) => this.handleChange(e)}
              name="password"
              value={password}
              placeholder="password"
            />
          </Label>
          <br />
          <Button type="submit">Submit</Button>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Login);
