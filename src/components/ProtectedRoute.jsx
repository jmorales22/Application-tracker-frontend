import React from 'react';
import { Route, Link } from 'react-router-dom';
import { LoginConsumer } from '../context/LoginContext';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <LoginConsumer>
    {({ user }) => {
      return (
        <Route
          render={(props) => {
            return user.status ? (
              <Component {...props} {...user} />
            ) : (
              <>
                <p>UNAUTHORIZED</p>
                <Link to="/login">Return to Login Page</Link>
              </>
            );
          }}
          {...rest}
        />
      );
    }}
  </LoginConsumer>
);

export default ProtectedRoute;