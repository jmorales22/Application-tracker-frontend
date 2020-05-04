import React, {Component} from 'react';
import LoginContext from '../context/LoginContext';
import {withRouter} from 'react-router-dom';
import LoginHeader from './LoginHeader';
import Footer from './Footer';
import {Main, Button, Wrapper, Input, Centered} from './styled';
import {LogoImage} from '../components/styled';
import logo_transparent from '../images/logo_transparent.png';

class Login extends Component {
  static contextType = LoginContext;
  state = {
    email: '',
    password: '',
  };

  postAPI = async (url, data) => {
    const response = await fetch (url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify (data),
    }).then (response => response.json ());
    return response;
  };

  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async e => {
    e.preventDefault ();
    const {setUser} = this.context;

    try {
      const {email, password} = this.state;

      const data = {
        email: email,
        user_password: password,
      };

      const url = 'http://localhost:2000/login/loginuser';
      const response = await this.postAPI (url, data);

      if (response.userId > 0) {
        const newUser = {
          status: true,
          user_id: response.userId,
          admin: false,
        };
        setUser (newUser);
        this.props.history.push ('/applications');
      } else {
        alert ('Incorrect email and/or password');
      }
    } catch (err) {
      return err;
    }
  };

  render () {
    const {email, password} = this.state;

    return (
      <div>
        <LoginHeader />
        <LogoImage>
          <Main>Login here!</Main>
          <div>
            <form onSubmit={e => this.handleSubmit (e)}>
              <Centered>
                <Input
                  type="text"
                  onChange={e => this.handleChange (e)}
                  name="email"
                  value={email}
                  placeholder="username"
                />
              </Centered>
              <Centered>
                <Input
                  type="password"
                  onChange={e => this.handleChange (e)}
                  name="password"
                  value={password}
                  placeholder="password"
                />
              </Centered>
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div>
            <img style={img} src={logo_transparent} />
          </div>
        </LogoImage>
        <Footer />
      </div>
    );
  }
}
const img = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
};
export default withRouter (Login);
