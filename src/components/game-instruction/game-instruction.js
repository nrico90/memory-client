import React from "react";
import { Link } from "react-router-dom";
import "./game-instruction.style.css";
import { SelectLevel } from "../select-level/select-level";

export const GameInstruction = () => {
  return (
    <main>
      <div className="instruction">
        <h3>Rules of Play</h3>
        <p> 1. After click on Play button player select level of game.</p>
        <p>
          {" "}
          2. player select one of three button such as Easy , Medium , Hard.{" "}
        </p>
        <p> 3. Selecting any button cards show randomally number.</p>
        <p> 4. After 2 seconds cards flip into blank side.</p>
        <p>
          {" "}
          5. Player has to select or click on card ascending order of the number
          shown before.
        </p>
        <p>
          {" "}
          6. If player selected numbers in ascending order then player win
          otherwise player lose the game.
        </p>
      </div>
      <Link to="/game-level" children={SelectLevel}>
        <button className="play-button">Play</button>
      </Link>
    </main>
  );
};
