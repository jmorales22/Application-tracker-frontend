import React, { Component } from "react";
import LoginContext from "../context/LoginContext";

<<<<<<< HEAD
export default class TestComponent extends Component {
  static contextType = LoginContext;
  render() {
    return (
      <LoginContext.Consumer>
        {(value) => <p>{value.user_id}</p>}
      </LoginContext.Consumer>
    );
  }
}
=======
export default class TestComponent extends Component{

    static contextType = LoginContext;
    render() {

        return (
            <LoginContext.Consumer>
                {value => (
                <p>
                    {value.user_id}
                </p>
                )}
            </LoginContext.Consumer>
        );
    }
}
>>>>>>> dd26e0da328cd82d46caf52c2db2f8ba7a2acc20
