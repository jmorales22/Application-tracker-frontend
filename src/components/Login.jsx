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


    return (
      <div>
        <h2>Login</h2>
        <form action="/applications">
          <label>
            User Name
            <input type="text" name="user_name" placeholder="username" />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="password" />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Login;