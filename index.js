let edit1Btn = document.getElementById("edit-1-btn");
let edit2Btn = document.getElementById("edit-2-btn");
let playerForm = document.getElementById("players-overlay");
let backdrop = document.getElementById("backdrop");
let cancelBtn = document.getElementById("cancel-btn");
let inputElement = document.getElementById("input-playername");

function showPlayerOverlay(){
    playerForm.style.display = "block";
    backdrop.style.display = "block";
}

function closePlayerOverlay(){
    playerForm.style.display = "none";
    backdrop.style.display = "none";
    inputElement.value = "";
}

edit1Btn.addEventListener("click", showPlayerOverlay);
edit2Btn.addEventListener("click", showPlayerOverlay);
cancelBtn.addEventListener("click", closePlayerOverlay);
backdrop.addEventListener("click", closePlayerOverlay);