let numberOfTurns = 0;
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
  startGameBtn.style.display = "none";
  gameSection.style.display = "block";
  edit1Btn.removeEventListener("click", showPlayerOverlay);
  edit2Btn.removeEventListener("click", showPlayerOverlay);
  activePlayerSpan.textContent = players[0].name;
}

function playGame(event) {
  let listItem = event.target;
  if (listItem.textContent !== "") {
    return;
  }
  listItem.classList.add("clicked");
  numberOfTurns++;
  listItem.textContent = players[index].symbol;
  let row = listItem.dataset.row;
  let col = listItem.dataset.col;
  gameBoard[row][col] = index + 1;
  console.log(gameBoard);
  switchPlayer();
  activePlayerSpan.textContent = players[index].name;
  checkForAWinner();
  stopGame();
  console.log("Broj izmjena je " + numberOfTurns);
  console.log("Winner je " + winner);
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
    activePlayerParagraph.style.display = "none";
    afterGameOverlay.style.display = "block";
    backdrop.style.display = "block";
    winnerParagraph.style.display = "block";
    winnerSpan.textContent = players[winner - 1].name;
    drawParagraph.style.display = "none";
    numberOfTurns = 0;
    index = 0;
    winner = 3;
    gameBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    for (let oneGameField of allGameFields) {
      oneGameField.removeEventListener("click", playGame);
      backdrop.removeEventListener("click", closePlayerOverlay);
    }
  }

  if (numberOfTurns === 9) {
    numberOfTurns = 0;
    index = 0;
    gameBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    activePlayerParagraph.style.display = "none";
    afterGameOverlay.style.display = "block";
    backdrop.style.display = "block";
    drawParagraph.style.display = "block";
    winnerParagraph.style.display = "none";
    for (let oneGameField of allGameFields) {
      oneGameField.removeEventListener("click", playGame);
      backdrop.removeEventListener("click", closePlayerOverlay);
    }
  }
}
