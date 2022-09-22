const playerOneBtn = document.getElementsByTagName("button")[0];
const playerTwoBtn = document.getElementsByTagName("button")[1];
const scorePlayerOne = document.querySelector("#playerOneScore");
const scorePlayerTwo = document.querySelector("#playerTwoScore");
var maxScoreValue = document.querySelector("span");
const resetBtn = document.querySelector("#reset");
var scoreNumber = document.getElementById("myNumber");
var errorBlock = document.getElementById("error");

let gameEnd = false;
let number1 = 0;
let number2 = 0;
let maxScore = "";

scorePlayerOne.innerText = number1;
scorePlayerTwo.innerText = number2;

scoreNumber.addEventListener("change", function () {
  let number = Number(scoreNumber.value);
  if (!gameEnd && number > 0) {
    maxScoreValue.innerText = number;
    scoreNumber.value = number;
    errorBlock.innerText = "";
  } else {
    errorBlock.innerText = gameEnd
      ? "Reset the game"
      : "Please enter the number greater than 0";
    errorBlock.style.marginBottom = "20px";
    gameEnd = true;
  }
});

const playersScore = function (number, player, color) {
  if (!gameEnd && scoreNumber.value > 0) {
    number++;
    if (maxScoreValue.innerText > number) {
      player.innerText = number;
    } else {
      player.innerText = maxScoreValue.innerText;
      player.style.color = color;

      gameEnd = true;
    }
  }
  return number;
};

playerOneBtn.addEventListener("click", function () {
  number1 = playersScore(number1, scorePlayerOne, "green");
});

playerTwoBtn.addEventListener("click", function () {
  number2 = playersScore(number2, scorePlayerTwo, "red");
});

resetBtn.addEventListener("click", function () {
  scorePlayerOne.innerText = "0";
  scorePlayerOne.style.color = "white";
  scorePlayerTwo.style.color = "white";
  scorePlayerTwo.innerText = "0";
  scoreNumber.value = "";
  maxScoreValue.innerText = "...";
  number1 = 0;
  number2 = 0;
  gameEnd = false;
  errorBlock.innerText = "";
});
