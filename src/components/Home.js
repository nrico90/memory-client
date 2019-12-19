import React, { Component } from "react";
import { connect } from "react-redux";
import superagent from "superagent";
import { Link } from "react-router-dom";
import "../style/Home.css";

class Home extends Component {
  url = "https://cryptic-sea-59697.herokuapp.com"
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

  reset = () => {
    this.setState({ text: "" });
  };

  onSubmit = async event => {
    event.preventDefault();
    try {
      const response = await superagent
        .post(`${this.url}/gameroom`)
        .send({ name: this.state.text });
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

  render() {
    const { rooms } = this.props;
    const list = rooms.map(room => <div key={room.id}> {room.name} </div>);
    if (!this.props.jwt) {
      return (
        <div>
          <Link to="/signup">
            <h2>Please Sign Up to enter the Game Lobby</h2>
          </Link>
          <p>or</p>
          <Link to="/login">
            <h3>Login if you already have an account</h3>
          </Link>
          <img
            alt="jpg"
            src="https://cdn.shopify.com/s/files/1/0322/7017/products/SLM-225_B_2048x.jpg?v=1396120490"
          ></img>
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
    rooms: reduxState.gameroom,
    jwt: reduxState.login.jwt
  };
};

export default connect(mapStateToProps)(Home);
