"use strict";

const message = document.querySelector(".message");

const buttons = document.querySelectorAll("button");

const options = ["Rock", "Paper", "Scissors"]; //Array of possible moves in game

//Returns computer's choice of rock, paper, or scissors
function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice());

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    // () => console.log(button.textContent)
    playRound
  );
});

//plays a single round
function playRound() {
  const pS = this.textContent;

  const cS = getComputerChoice();

  if (pS === cS) {
    message.textContent = `It's a tie! You both threw ${cS}`; //Second item in array is a convenient way to record whether the round is a tie, player win, or computer win
  } else if (
    (pS === "Rock" && cS === "Scissors") ||
    (pS === "Scissors" && cS === "Paper") ||
    (pS === "Paper" && cS === "Rock")
  ) {
    message.textContent = `You win! ${pS} beats ${cS}`;
  } else if (
    (cS === "Rock" && pS === "Scissors") ||
    (cS === "Scissors" && pS === "Paper") ||
    (cS === "Paper" && pS === "Rock")
  ) {
    message.textContent = `You lose! ${cS} beats ${pS}`;
  }
}
// console.log(playRound("rock", "PAPER"));

//Plays best of 5, not including ties

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   while (playerScore < 3 && computerScore < 3) {
//     const playerSelection = prompt("Rock, Paper, or Scissors?");
//     const results = playRound(playerSelection, getComputerChoice());
//     alert(results[0]);
//     if (results[1] === 1) {
//       playerScore++;
//     } else if (results[1] === 2) {
//       computerScore++;
//     }
//   }

//   if (playerScore === 3) {
//     alert("Congratulations! You win");
//   } else {
//     alert("You straight up suck at rock paper scissors, pal");
//   }
// }

// game();
