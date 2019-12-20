import React from "react";
import "./card-list.style.css";
import { Card } from "../card/card";
import { Link } from "react-router-dom";
import { GameInstruction } from "../game-instruction/game-instruction.js";
import { Message } from "../message/message";

export class CardList extends React.Component {
  state = {
    randomNumbers: [],
    userSelection: [],
    showCards: false,
    isWon: false,
    showMessage: false
  };

  updateSelectedInput = number => {
    var joined = this.state.userSelection.concat(number);
    this.setState({ userSelection: joined });

    const { userSelection, randomNumbers } = this.state;
    const selection = userSelection;
    if (userSelection.length + 1 === randomNumbers.length) {
      selection.push(number);
    }
    if (randomNumbers.slice().sort()[selection.length] !== number) {
      this.setState({ ...this.state, isWon: false, showMessage: true });
    }

    if (selection.length === randomNumbers.length) {
      if (
        randomNumbers
          .slice()
          .sort()
          .every(function(value, index) {
            return value === selection[index];
          })
      ) {
        this.setState({ ...this.state, isWon: true, showMessage: true });
      }
    }
  };

  //pass the level of game to backend
  componentDidMount() {
    fetch(
      "https://memory-game-server.herokuapp.com/number?mode=" + this.props.level
    )
      .then(response => response.json())
      .then(numbers => this.setState({ randomNumbers: numbers.randomArray }));
  }

  //display cards
  userSelectLevel = () => {
    return this.state.showCards ? null : (
      <div className="card-list">
        {this.state.randomNumbers.map(number => (
          <Card
            key={number}
            number={number}
            updateSelectedInput={this.updateSelectedInput}
          />
        ))}
      </div>
    );
  };

  //back to game-level
  backToSelectLevel = () => {
    this.props.back();
  };

  render() {
    return (
      <main>
        <div>
          {/* show the winning or losing game message */}
          {this.state.isWon && this.state.showMessage ? (
            <Message message="You won Game!" click={this.backToSelectLevel} />
          ) : null}
          {!this.state.isWon && this.state.showMessage ? (
            <Message message="You lose Game!" click={this.backToSelectLevel} />
          ) : null}
          <div className="card-buttons">
            <button
              className="play-button"
              id="back"
              onClick={this.backToSelectLevel}
            >
              Back
            </button>
            <Link to="/" children={GameInstruction}>
              <button className="play-button" id="back">
                Help
              </button>
            </Link>
          </div>
        </div>
        {this.userSelectLevel()}
      </main>
    );
  }
}
