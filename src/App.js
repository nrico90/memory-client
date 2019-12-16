import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/"> Home </Link>
        <Link to="/signUp">signUp</Link>
        <Link to="/login">Login</Link>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
