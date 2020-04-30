import React from "react";
import { LoginProvider } from "./context/LoginContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserApps from "./components/UserApps";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
// import Interviews from "./components/Interviews";
import ApplicationForm from "./components/ApplicationForm";
import InterviewEntry from "./components/InterviewsEntry";
// import ApplicationList from "./components/ApplicationList";
import "./App.css";

function App() {
  return (
    <LoginProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Intro />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <ProtectedRoute path="/applicationform" component={ApplicationForm} />
          <ProtectedRoute path="/interviewentry/:app_id?/:company_id?" component={InterviewEntry} />
          <ProtectedRoute path="/applications" component={UserApps} />
        </Switch>
      </Router>
    </LoginProvider>
  );
}

export default App;
