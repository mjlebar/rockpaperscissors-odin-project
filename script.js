"use strict";

const message = document.querySelector(".message");
const winner = document.querySelector(".winner");
const reset = document.querySelector(".reset");
const yourScore = document.querySelector(".score-you");
const compScore = document.querySelector(".score-comp");

const gameButtons = document.querySelectorAll(".btn-game");

const options = ["Rock", "Paper", "Scissors"]; //Array of possible moves in game

let playerScore = 0;
let computerScore = 0;

//Returns computer's choice of rock, paper, or scissors
function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

// console.log(getComputerChoice());

gameButtons.forEach((button) => {
  button.addEventListener(
    "click",
    // () => console.log(button.textContent)
    playRound
  );
});

reset.addEventListener("click", function () {
  winner.classList.add("hidden");
  reset.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  yourScore.textContent = "You:";
  compScore.textContent = "Computer:";
  gameButtons.forEach((button) => {
    button.addEventListener(
      "click",
      // () => console.log(button.textContent)
      playRound
    );
  });
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
    playerScore++;
    yourScore.textContent = `You: ${playerScore}`;
  } else if (
    (cS === "Rock" && pS === "Scissors") ||
    (cS === "Scissors" && pS === "Paper") ||
    (cS === "Paper" && pS === "Rock")
  ) {
    message.textContent = `You lose! ${cS} beats ${pS}`;
    computerScore++;
    compScore.textContent = `Computer: ${computerScore}`;
  }

  setTimeout(() => (message.textContent = ""), 2500);
  if (playerScore >= 5) {
    winner.classList.toggle("hidden");
    winner.textContent = "Congratulations! You won";
    setTimeout(() => reset.classList.toggle("hidden"), 1500);
    gameButtons.forEach((button) =>
      button.removeEventListener("click", playRound)
    );
  } else if (computerScore >= 5) {
    winner.style.color = "red";
    winner.classList.toggle("hidden");
    winner.textContent = "Sorry! You straight up suck";
    setTimeout(() => reset.classList.toggle("hidden"), 1500);
    gameButtons.forEach((button) =>
      button.removeEventListener("click", playRound)
    );
  }
}

// console.log(playRound("rock", "PAPER"));

//Plays best of 5, not including ties

// function game() {
//
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
