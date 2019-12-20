import React from "react";
import "./card.style.css";

export class Card extends React.Component {
  state = {
    flipCard: true
  };

  //flip to blank side of cards after 3 sec
  componentDidMount() {
    setTimeout(() => {
      this.setState({ flipCard: false });
    }, 3000);
  }

  //flip card front to back side
  toggleCard = () => {
    return this.state.flipCard ? (
      <div className="flip-card-front">
        <h2>{this.props.number}</h2>
      </div>
    ) : (
      <div className="flip-card-back" />
    );
  };

  //shows the number after click on card
  handleOnclick = () => {
    if (!this.state.flipCard) this.props.updateSelectedInput(this.props.number);
    this.setState({ flipCard: true });
  };

  render() {
    return (
      <main>
        <div className="flip-card">
          <div className="flip-card-inner" onClick={this.handleOnclick}>
            {this.toggleCard()}
          </div>
        </div>
      </main>
    );
  }
}
