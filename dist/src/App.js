import React, { useState, useEffect } from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import GameState from "./components/GameState";
import "./App.css";
import WinLosses from "./components/WinLosses";
import Choices from "./components/Choices";

//constant to store the data
const choices = [
  { id: 1, name: "rock", component: Rock, losesTo: 2 },
  { id: 2, name: "paper", component: Paper, losesTo: 3 },
  { id: 3, name: "scissors", component: Scissors, losesTo: 1 },
];
export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [gameState, setGameState] = useState(null); //this can be either of win / lose / draw
  const [userChoice, setUserChoice] = useState(null); // const to store players's choice
  const [computerChoice, setComputerChoice] = useState(null); // const to store computer's choice

  useEffect(() => {
    restartGameAgain();
  }, []); // this is equivalent to componentDidMount. We are not settng any variable to the dependency array as computer's choice need not be carried over re-renders

  //fn to reset the game, and hence called when user clicks play again button
  function restartGameAgain() {
    setUserChoice(null);
    setGameState(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function handleUsersChoice(choice) {
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);
    //determine the winner
    console.log("chosenChoice:", chosenChoice);
    if (chosenChoice.losesTo === computerChoice.id) {
      //player losses
      setLosses((losses) => losses + 1);
      setGameState("lose");
    } else if (computerChoice.losesTo === chosenChoice.id) {
      // player wins
      setWins((wins) => wins + 1);
      setGameState("win");
    } else if (chosenChoice.id === computerChoice.id) setGameState("draw"); // draw
  }

  // Very useful fn to render a Component dynamically based on the input parameter
  function renderComponent(choice) {
    const Component = choice.component; //this could be rock, paper or scissors based on the player's action
    return <Component />;
  }

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* ---------- WINLOSSES component  showing wins vs losses stats----------  */}
        <WinLosses wins={wins} losses={losses} />
      </div>
      {/* ---------- GAMESTATE - popup to show win, loss, draw and restart --------------*/}
      {gameState && (
        <GameState
          userChoice={userChoice}
          computerChoice={computerChoice}
          gameState={gameState}
          renderComponent={(choice) => renderComponent(choice)}
          reset={restartGameAgain}
        />
      )}

      {/* ---------- CHOICES component ---------- */}
      <Choices onUserChoiceButtonClicked={(id) => handleUsersChoice(id)} />
    </div>
  );
}
