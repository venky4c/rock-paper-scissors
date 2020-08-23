import React from "react";
import Rock from "../icons/Rock";
import Paper from "../icons/Paper";
import Scissors from "../icons/Scissors";

export default function Choices(props) {
  const { onUserChoiceButtonClicked } = props;

  return (
    <div className="choices">
      {/* choices captions */}
      <div>You</div>
      <div />
      <div>Computer</div>

      {/* buttons for my choice */}
      <div>
        <button className="rock" onClick={() => onUserChoiceButtonClicked(1)}>
          <Rock />
        </button>
        <button className="paper" onClick={() => onUserChoiceButtonClicked(2)}>
          <Paper />
        </button>
        <button
          className="scissors"
          onClick={() => onUserChoiceButtonClicked(3)}
        >
          <Scissors />
        </button>
      </div>

      <div className="vs">vs</div>

      {/* show the computer's choice */}
      <div>
        <button className="computer-choice">?</button>
      </div>
    </div>
  );
}
