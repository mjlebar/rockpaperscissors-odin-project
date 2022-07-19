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
    return [`It's a tie! You both threw ${cS}`, 0]; //Second item in array is a convenient way to record whether the round is a tie, player win, or computer win
  } else if (
    (pS === "Rock" && cS === "Scissors") ||
    (pS === "Scissors" && cS === "Paper") ||
    (pS === "Paper" && cS === "Rock")
  ) {
    return [`You win! ${pS} beats ${cS}`, 1];
  } else if (
    (cS === "Rock" && pS === "Scissors") ||
    (cS === "Scissors" && pS === "Paper") ||
    (cS === "Paper" && pS === "Rock")
  ) {
    return [`You Lose! ${cS} beats ${pS}`, 2];
  }
}
// console.log(playRound("rock", "PAPER"));

//Plays best of 5, not including ties

function game() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 3 && computerScore < 3) {
    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const results = playRound(playerSelection, getComputerChoice());
    alert(results[0]);
    if (results[1] === 1) {
      playerScore++;
    } else if (results[1] === 2) {
      computerScore++;
    }
  }

  if (playerScore === 3) {
    console.log("Congratulations! You win");
  } else {
    console.log("You straight up suck at rock paper scissors, pal");
  }
}

game();
