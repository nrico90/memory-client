import React from "react";
import "./message.style.css";
import { Link } from "react-router-dom";
import { SelectLevel } from "../select-level/select-level";
import { GameInstruction } from "../game-instruction/game-instruction";

export const Message = props => {
  return (
    <div className="message">
      <p>{props.message}</p>
      <Link to="/game-level" children={SelectLevel}>
        <button className="play-button" onClick={props.click}>
          Play Again
        </button>
      </Link>{" "}
      <br />
      <Link to="/" children={GameInstruction}>
        <button className="play-button">Exit</button>
      </Link>
    </div>
  );
};
