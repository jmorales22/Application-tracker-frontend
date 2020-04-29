import React, { Component } from 'react';

const LoginContext = React.createContext({});
const LoginConsumer = LoginContext.Consumer;

class LoginProvider extends Component {
  // Context state
  state = {
    user: {
      admin: false,
      status: false,
      user_id: null
    },
  };

  constructor() {
    super()
    this.setUser = this.setUser.bind(this)
  }

  // Method to update state
  setUser = (user) => {
    this.setState((prevState) => ({ ...prevState, user }));
  };

  render() {
    const { children } = this.props;
    const { user } = this.state;
    const { setUser } = this;

    return (
      <LoginContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </LoginContext.Provider>
    );
  }
}

export default LoginContext;
export { LoginProvider, LoginConsumer };
