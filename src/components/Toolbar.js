import React, { Component } from "react";
import { connect } from "react-redux";
import "../style/Toolbar.css";

class Toolbar extends Component {
  render() {
    console.log("this.props.toolbar", this.props);
    return (
      <div>
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
