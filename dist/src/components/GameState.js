import React from "react";

export default function GameState(props) {
  const {
    gameState,
    userChoice,
    computerChoice,
    reset,
    renderComponent,
  } = props;

  return (
    <div className={`game-state ${gameState}`}>
      <div>
        <div className="game-state-content">
          <p>{renderComponent(userChoice)}</p>
          {gameState === "win" && <p>Congrats, You Won!</p>}
          {gameState === "lose" && <p>Sorry, You Lose!</p>}
          {gameState === "draw" && <p>Phew, You drew!</p>}
          <p>{renderComponent(computerChoice)}</p>
        </div>
        <button onClick={reset}>Play Again</button>
      </div>
    </div>
  );
}
