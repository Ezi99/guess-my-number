"use strict";
let highScore = 0;
let score;
let gameOver;
let secretNumber;
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const secretNumberElement = document.querySelector(".number");
const guessInputElement = document.querySelector(".guess");
const highScoreElement = document.querySelector(".highscore");
const bodyElement = document.querySelector("body");

const resetGame = function () {
  score = 20;
  gameOver = false;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};

resetGame();

document.querySelector(".btn.check").addEventListener("click", function () {
  let num = Number(guessInputElement.value);

  if (gameOver) return;

  if (!num) {
    messageElement.textContent = "invalid input";
  } else if (num !== secretNumber) {
    updateStatus(num);
  } else {
    gameOver = true;
    messageElement.textContent = "CONGRATS YOU WON !";
    bodyElement.style.backgroundColor = "#60b347";
    secretNumberElement.textContent = secretNumber;
    secretNumberElement.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = score;
    }
  }
});

const updateStatus = function (num) {
  if (score > 1) {
    messageElement.textContent =
      num > secretNumber ? "Too high !" : "Too low !";
    scoreElement.textContent = --score;
  } else {
    scoreElement.textContent = --score;
    gameOver = true;
    secretNumberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = "#e74c3c";
    messageElement.textContent = "Game Over :(";
  }
};

document.querySelector(".btn.again").addEventListener("click", function () {
  resetGame();
  messageElement.textContent = "Start guessing...";
  scoreElement.textContent = score;
  guessInputElement.value = "";
  highScoreElement.textContent = highScore;
  bodyElement.style.backgroundColor = "#222";
  secretNumberElement.textContent = "?";
  secretNumberElement.style.width = "15rem";
});
