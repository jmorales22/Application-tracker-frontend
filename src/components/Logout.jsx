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
    return (
      <Link style={linkStyle} onClick={this.logout}>
        Log out
      </Link>
    );
  }
}
const linkStyle = {
  color: "blue",
  textDecoration: "none",
};
export default withRouter(Logout);
