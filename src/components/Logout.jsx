import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {
    navigate: false,
  };

  logout = () => {
    localStorage.removeItem("token");
    this.setState({ navigate: true });
  };
  render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/" push={true} />;
    }
    return <button onClick={this.logout}>Log out</button>;
  }
}

export default Logout;
