import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import api from "../api";
import "../style/Home.css";
import { GameInstruction } from "./game-instruction/game-instruction";

class Home extends Component {
  state = {
    text: ""
  };
  reset = () => {
    this.setState({ text: "" });
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await api("/gameroom", {
        method: "POST",
        body: { name: this.state.text },
        jwt: this.props.jwt
      });

      this.reset();
      console.log("response test:", response);
    } catch (error) {
      console.warn("error test:", error);
    }
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ text: value });
  };

  onClick = async gameroomId => {
    console.log("gameroomId test:", gameroomId);
    try {
      const response = await api("/join", {
        method: "PUT",
        body: { room: gameroomId },
        jwt: this.props.jwt
      });
      this.props.history.push(`/room/${gameroomId}`);
      console.log("response test:", response);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { rooms } = this.props;
    const list = rooms.map(room => (
      <div key={room.id}>
        {" "}
        {room.name}
        <Link key={room.id} to={`/game-instruction`} children={GameInstruction}>
          <button onClick={room.id}>Join Game</button>
        </Link>{" "}
      </div>
    ));
    if (!this.props.jwt) {
      return (
        <div className="homy">
          <Link to="/signup">
            <h2>Please Sign Up to enter the Game Lobby</h2>
          </Link>
          <p>or</p>
          <Link to="/login">
            <h3>Login if you already have an account</h3>
          </Link>
        </div>
      );
    }
    return (
      <div>
        <h2>Join one of the gamerooms below or create a new one!</h2>
        <h2>Have Fun!</h2>
        <form onSubmit={this.onSubmit}>
          <input type="text" onChange={this.onChange} value={this.state.text} />
          <button>Create a new room</button>
        </form>
        <h2>Room List</h2>
        <div>{list}</div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log("redux:", reduxState);
  return {
    rooms: reduxState.gamerooms,
    jwt: reduxState.login.jwt
  };
};

export default connect(mapStateToProps)(Home);
