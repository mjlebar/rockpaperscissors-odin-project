"use strict";

const options = ["Rock", "Paper", "Scissors"]; //Array of possible moves in game

//Returns computer's choice of rock, paper, or scissors
function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

console.log(getComputerChoice());
