function closeAfterGameOverlay() {
  afterGameOverlay.style.display = "none";
  backdrop.style.display = "none";
  startGameBtn.style.display = "none";
  restartBtn2.style.display = "inline";
  activePlayerParagraph.style.display = "none";
}

function restartGame() {
  activePlayerParagraph.style.display = "block";
  restartBtn2.style.display = "none";
  afterGameOverlay.style.display = "none";
  backdrop.style.display = "none";
  activePlayerSpan.textContent = players[index].name;

  for (let oneGameField of allGameFields) {
    oneGameField.textContent = "";
    oneGameField.classList.remove("clicked");
  }

  for (let oneGameField of allGameFields) {
    oneGameField.addEventListener("click", playGame);
  }
}
