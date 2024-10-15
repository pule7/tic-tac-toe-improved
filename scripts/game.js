let numberOfTurns = 1;
let index = 0;
let winner = 3;
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function switchPlayer() {
  if (index === 0) {
    index = 1;
  } else if (index === 1) {
    index = 0;
  }
}

function startGame() {
  if (player1.textContent === "" || player2.textContent === "") {
    alert("Please enter names for both players!");
    return;
  }

  if (player1.textContent === player2.textContent) {
    alert(
      "You enetered same name for both players, please change at least one!"
    );
    return;
  }
  gameSection.style.display = "block";
  activePlayerSpan.textContent = players[0].name;
}

function playGame(event) {
  let listItem = event.target;
  if (listItem.textContent !== "") {
    return;
  }
  listItem.textContent = players[index].symbol;
  let row = listItem.dataset.row;
  let col = listItem.dataset.col;
  gameBoard[row][col] = index + 1;
  console.log(gameBoard);
  switchPlayer();
  activePlayerSpan.textContent = players[index].name;
  checkForAWinner();
  stopGame();
  console.log(winner);
  numberOfTurns++;
}

function checkForAWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      gameBoard[i][0] > 0 &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][0] === gameBoard[i][2]
    ) {
      winner = gameBoard[i][0];
    }

    if (
      gameBoard[0][i] > 0 &&
      gameBoard[0][i] === gameBoard[1][i] &&
      gameBoard[0][i] === gameBoard[2][i]
    ) {
      winner = gameBoard[0][i];
    }
  }

  if (
    gameBoard[0][0] > 0 &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[0][0] === gameBoard[2][2]
  ) {
    winner = gameBoard[0][0];
  }

  if (
    gameBoard[0][2] > 0 &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[0][2] === gameBoard[2][0]
  ) {
    winner = gameBoard[0][2];
  }
}

function stopGame() {
  if (winner === 1 || winner === 2) {
    afterGameOverlay.style.display = "block";
    backdrop.style.display = "block";
    winnerSpan.textContent = players[winner - 1].name;
    drawParagraph.style.display = "none";
  }

  if (numberOfTurns === 9) {
    afterGameOverlay.style.display = "block";
    backdrop.style.display = "block";
    winnerParagraph.style.display = "none";
  }
}
