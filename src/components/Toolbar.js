import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Toolbar extends Component {
  render() {
    console.log("this.props.toolbar", this.props);
    return (
      <div>
        <nav>
          <Link to="/signUp">Sign up</Link>
        </nav>
        <nav>
          <Link to="/login">Log in</Link>
        </nav>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <nav>
          {this.props.name && (
            <p> {this.props.name} you are logged in</p>
          )}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("reduxState", reduxState);
  return {
    data: reduxState.loginReducer
  };
}
export default connect(mapStateToProps)(Toolbar);