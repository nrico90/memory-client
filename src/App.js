import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Toolbar from "./components/Toolbar";
import { GameInstruction } from "./components/game-instruction/game-instruction";
import { SelectLevel } from "./components/select-level/select-level";

class App extends Component {
  url = "http://localhost:4000";
  //"https://cryptic-sea-59697.herokuapp.com"
  stream = new EventSource(`${this.url}/stream`);

  componentDidMount() {
    this.stream.onmessage = event => {
      const { data } = event;
      const action = JSON.parse(data);
      console.log(action);

      this.props.dispatch(action);
    };
  }

  render() {
    return (
      <div className="App">
        <br />
        <h1>MEMORY GAME!</h1>
        <Toolbar />
        <div className="things">
          <Route path="/" exact component={Home} />
          <Route path="/game-instruction" component={GameInstruction} />
          <Route exact path="/game-level" component={SelectLevel} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </div>
      </div>
    );
  }
}

export default connect()(App);
