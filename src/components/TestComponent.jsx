import React, { Component } from 'react'
import LoginContext from '../context/LoginContext'

class TestComponent extends Component {
  static contextType = LoginContext

  render() {
    const { user_id, setUser } = this.context

    return (
      <div>
        <button
          onClick={() => {
            const newUser = 12

            console.log(this.context)
            console.log(newUser)

            setUser(newUser)

          }}
        >
          Update User
        </button>
        <p>{`Current User Id: ${user_id}`}</p>
      </div>
    )
  }
}

export default TestComponent;