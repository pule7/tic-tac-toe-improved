let editedPlayer;
let players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

function showPlayerOverlay(event) {
  editedPlayer = +event.target.dataset.playerid;
  inputElement.value = "";
  playerForm.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerOverlay() {
  playerForm.style.display = "none";
  backdrop.style.display = "none";
  inputElement.value = "";
  warningOverlayParagraph.textContent = "";
  warningOverlayParagraph.classList.remove("warning");
  
}

function savePlayerName(event) {
  event.preventDefault();
  let enteredPlayername = inputElement.value.trim();

  if (enteredPlayername === "") {
    warningOverlayParagraph.textContent = "Please enter valid name!";
    warningOverlayParagraph.classList.add("warning");
    return;
  }
  players[editedPlayer - 1].name = enteredPlayername;
  player1.textContent = players[0].name;
  player2.textContent = players[1].name;
  playerForm.style.display = "none";
  backdrop.style.display = "none";
}
