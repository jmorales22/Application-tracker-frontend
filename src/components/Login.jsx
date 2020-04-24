import React, { Component } from "react";
const postAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json());
  console.log(response);
  return response;
};

class Login extends Component {
  state = {
    email: "",
    password: "",
    
  };

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
    const { email, password } = this.state;

    const data = {
      email: email,
      user_password: password
    };

    const url = 'http://localhost:2000/login/loginuser';
    const response = await postAPI(url, data);

    if (response.status === 200) {
      alert('Successful Login');
    }
    if (response.status !== 200) {
      alert('Unable to Login. Please try again later or go to login page.');
    }
  }
  catch (err) {
    return err;
  }
  };

  render() {

    const { email, password } = this.state;

    return (
      <div>
          <h1>Login</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
         
          <input
            type="text"
            data-testid="messageText"
            placeholder="Email"
            onChange={this.handleChange}
            name="email"
            value={email}
            required
          />
          <br/>
          <input
            type="text"
            data-testid="messageText"
            placeholder="Password"
            onChange={this.handleChange}
            name="password"
            value={password}
            required
          />
          <br/>
          <button type="submit" data-testid="submitButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;