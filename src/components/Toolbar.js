import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../style/Toolbar.css";

class Toolbar extends Component {
  render() {
    console.log("this.props.toolbar", this.props);
    return (
      <div>
        
        {/* <Link to="/signup">
            <h2>Please sign up to enter the Game Lobby</h2>
          </Link>
          <Link to="/login">
            <h3>Login if you already have an account</h3>
          </Link> */}
        {/* <nav>
            <Link to="/">Start a new lobby!</Link>
          </nav> */}
        <nav>
          {this.props.email && <p> {this.props.email} you are logged in</p>}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("reduxStateX", reduxState);
  return {
    data: reduxState.loginReducer
  };
}
export default connect(mapStateToProps)(Toolbar);
