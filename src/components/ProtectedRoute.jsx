import React from "react";
import { Route, Link } from "react-router-dom";
import { LoginConsumer } from "../context/LoginContext";

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
                <Link to="/login" style={linkStyle}>
                  Return to Login Page
                </Link>
              </>
            );
          }}
          {...rest}
        />
      );
    }}
  </LoginConsumer>
);
const linkStyle = {
  color: "blue",
  textDecoration: "none",
};
export default ProtectedRoute;
