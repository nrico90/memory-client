import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import superagent from "superagent";
import Toolbar from './components/Toolbar'

class App extends Component {
  url = "http://localhost:4000";
  stream = new EventSource(`${this.url}/stream`);
  state = { text: "" };

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log(action);
      this.props.dispatch(action);
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
      console.log("response test:", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onChange = event => {
    const { value } = event.target;

    this.setState({ text: value });
  };

  render() {
    console.log("this.props:", this.props);

    const { rooms } = this.props;
    const list = rooms.map(room => <div key={room.id}> {room.name} </div>);

    return (
      <div className="App">
        <Toolbar/>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>Submit</button>
        </form>
        {list}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState);

  return { rooms: reduxState.gameroom };
};

export default connect(mapStateToProps)(App);
