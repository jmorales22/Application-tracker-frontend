import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginProvider } from './context/LoginContext';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import UserApps from './components/UserApps';

function App() {
  return (
    <LoginProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <ProtectedRoute path="/applications" component={UserApps} />
        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;