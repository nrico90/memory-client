import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../store/signUp/actions";
import { Link } from 'react-router-dom'

class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    const action = signUp(this.state.email, this.state.password);
    this.props.dispatch(action);
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </p>
          <p>
            <button type="submit">Sign Up</button>
          </p>
          <nav>
            <p>After you have signed up click <Link to="/login">Here</Link> to login </p>
          </nav>
        </form>
      </div>
    );
  }
}

export default connect()(SignUp);
