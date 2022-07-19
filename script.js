"use strict";

const options = ["Rock", "Paper", "Scissors"]; //Array of possible moves in game

//Returns computer's choice of rock, paper, or scissors
function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice());

//plays a single round
function playRound(playerSelection, computerSelection) {
  const pS =
    playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);
  const cS =
    computerSelection[0].toUpperCase() +
    computerSelection.toLowerCase().slice(1); //standardizes capitalization so input can be in any capitalization

  if (pS === cS) {
    return `It's a tie! You both threw ${cS}`;
  } else if (
    (pS === "Rock" && cS === "Scissors") ||
    (pS === "Scissors" && cS === "Paper") ||
    (pS === "Paper" && cS === "Rock")
  ) {
    return `You win! ${pS} beats ${cS}`;
  } else if (
    (cS === "Sc" && pS === "Scissors") ||
    (cS === "Scissors" && pS === "Paper") ||
    (cS === "Paper" && pS === "Rock")
  ) {
    return `You win! ${cS} beats ${pS}`;
  }
}
console.log(playRound("rock", "PAPER"));
