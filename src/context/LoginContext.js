import React, { Component } from 'react'

const LoginContext = React.createContext()

class LoginProvider extends Component {
  // Context state
  state = {
    status: "false",
    user_id: 0,
    admin: ""
  }

  // Method to update state
  setUser = user_id => {
    this.setState(prevState => ({ user_id }))
  }

  render() {
    const { children } = this.props
    const { user_id } = this.state
    const { setUser } = this

    return (
      <LoginContext.Provider
        value={{
          user_id,
          setUser,
        }}
      >
        {children}
      </LoginContext.Provider>
    )
  }
}

export default LoginContext

export { LoginProvider }