import React, { Component } from "react";
import LoginContext from "../context/LoginContext";
import { withRouter } from "react-router-dom";
class Logout extends Component {
  static contextType = LoginContext;

  state = {};

  logout = (e) => {
    e.preventDefault();
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
    return (
      <a type="button" style={linkStyle} onClick={this.logout}>
        Log out
      </a>
    );
  }
}

const linkStyle = {
  cursor: "pointer",
  color: "#00adb5",
  textDecoration: "none",
};
export default withRouter(Logout);
