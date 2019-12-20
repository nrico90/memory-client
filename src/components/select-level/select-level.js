import React from "react";
import "./select-level.style.css";
import { CardList } from "../card-list/card-list";

export class SelectLevel extends React.Component {
  state = {
    isSelect: true,
    value: ""
  };
  //user selection level
  handleClick = event => {
    return this.setState({ value: event.target.value, isSelect: false });
  };
  //back to select level
  goback = () => {
    return this.setState({ isSelect: true });
  };

  showcards = () => {
    if (this.state.isSelect) {
      return (
        <div className="level">
          <p className="level-title">Select Level</p>
          <button className="level-button" value={4} onClick={this.handleClick}>
            Easy
          </button>
          <button className="level-button" value={8} onClick={this.handleClick}>
            Medium
          </button>
          <button
            className="level-button"
            value={12}
            onClick={this.handleClick}
          >
            Hard
          </button>
        </div>
      );
    } else {
      return <CardList level={this.state.value} back={this.goback} />;
    }
  };

  render() {
    return <main>{this.showcards()}</main>;
  }
}
