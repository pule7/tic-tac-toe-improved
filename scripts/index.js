// player-config.js
let edit1Btn = document.getElementById("edit-1-btn");
let edit2Btn = document.getElementById("edit-2-btn");
let playerForm = document.getElementById("players-overlay");
let backdrop = document.getElementById("backdrop");
let cancelBtn = document.getElementById("cancel-btn");
let inputElement = document.getElementById("input-playername");
let player1 = document.getElementById("playername1");
let player2 = document.getElementById("playername2");
let warningOverlayParagraph = document.getElementById("warning1");

playerForm.addEventListener("submit", savePlayerName);
edit1Btn.addEventListener("click", showPlayerOverlay);
edit2Btn.addEventListener("click", showPlayerOverlay);
cancelBtn.addEventListener("click", closePlayerOverlay);
backdrop.addEventListener("click", closePlayerOverlay);

//game.js
let startGameBtn = document.getElementById("start-btn");
let gameSection = document.getElementById("game");
let activePlayerParagraph = document.getElementById("active-player-paragraph");
let activePlayerSpan = document.getElementById("active-player");
let allGameFields = document.querySelectorAll("li");
let afterGameOverlay = document.getElementById("after-game-overlay");
let winnerSpan = document.getElementById("winner");
let drawParagraph = document.getElementById("draw");
let winnerParagraph = document.getElementById("winner-paragraph");

startGameBtn.addEventListener("click", startGame);
for (let oneGameField of allGameFields) {
  oneGameField.addEventListener("click", playGame);
}

//after-game.js
let afterGameCancelBtn = document.getElementById("after-game-cancel");
let restartBtn = document.getElementById("restart");
let restartBtn2 = document.getElementById("restart2");

afterGameCancelBtn.addEventListener("click", closeAfterGameOverlay);
restartBtn.addEventListener("click", restartGame);
restartBtn2.addEventListener("click", restartGame);
