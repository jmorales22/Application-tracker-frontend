import React, { Component } from "react";
import LoginContext from "../context/LoginContext";
import { Link, withRouter } from "react-router-dom";

class Logout extends Component {
  static contextType = LoginContext;

  state = {};

  logout = () => {
    const { setUser } = this.context;
    const logoutUser = {
      status: false,
      user_id: null,
      admin: false,
    };
    setUser(logoutUser);
    this.props.history.push("/");
  };
  render() {
    return <Link onClick={this.logout}>Log out</Link>;
  }
}

export default withRouter(Logout);
