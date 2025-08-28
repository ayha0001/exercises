"use strict";

// Definerer variabler for brugerens og computerens valg
let userChoice;
let computerChoice;

// Definerere variabler for knapperne og spillerne
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorButton = document.querySelector(".scissors");

const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// Definerer variabler for resultatskærmen
const draw = document.querySelector("#draw");
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

// Tilføjer event listeners til knapperne, så der høres når der klikkes
addEventListenersToButtons();
function addEventListenersToButtons() {
  rockButton.addEventListener("click", rockClick);
  paperButton.addEventListener("click", paperClick);
  scissorButton.addEventListener("click", scissorClick);
}

function hideResults() {
  // Skjuler alle resultater først
  draw.classList.add("hidden");
  win.classList.add("hidden");
  lose.classList.add("hidden");
}

// Funktionen for rock kaldes når der klikkes på rock knappen
function rockClick() {
  // Skjuler tidligere resultater, når der klikkes igen
  hideResults();
  console.log("Rock");
  userChoice = "rock";
  // Kalder funktionen computerGuess for at få computerens valg
  computerGuess();
  // Starter animationen
  animationStart();
}

// Funktionen for paper kaldes når der klikkes på paper knappen
function paperClick() {
  // Skjuler tidligere resultater, når der klikkes igen
  hideResults();
  console.log("Paper");
  userChoice = "paper";
  // Kalder funktionen computerGuess for at få computerens valg
  computerGuess();
  // Starter animationen
  animationStart();
}

// Funktionen for scissors kaldes når der klikkes på scissors knappen
function scissorClick() {
  // Skjuler tidligere resultater, når der klikkes igen
  hideResults();
  console.log("Scissors");
  userChoice = "scissors";
  // Kalder funktionen computerGuess for at få computerens valg
  computerGuess();
  // Starter animationen
  animationStart();
}

// Funktionen vælger tilfældigt mellem rock, paper og scissors til computeren
function computerGuess() {
  // Array med de mulige valg, som computeren kan tage
  const choiceArray = ["rock", "paper", "scissors"];
  // Genererer et tilfældigt tal mellem 0 og 2, altså et indeks i choiceArray
  const randomNumber = Math.floor(Math.random() * 3);
  // Vælger computerens valg baseret på det tilfældige indeks
  computerChoice = choiceArray[randomNumber];
  console.log("randomNumber", randomNumber);
  console.log(userChoice);
}

// Funktionen starter animationen ved at tilføje "shake" klassen til begge spillere
function animationStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  // Lytter efter når animationen slutter, og kalder animationEnd funktionen én gang
  player1.addEventListener("animationend", animationEnd, { once: true });
}

// Funktionen kaldes når animationen slutter, fjerner "shake" klassen og viser svaret,
function animationEnd() {
  // Fjerner "shake" klassen fra begge spillere
  // Fjerner også tidligere valg for at undgå overlap
  player1.classList.remove("shake, rock", "paper", "scissors");
  player2.classList.remove("shake, rock", "paper", "scissors");
  player1.classList.add(userChoice);
  player2.classList.add(computerChoice);
  screenResult();
}

function screenResult() {
  // Viser det korrekte resultat baseret på brugerens og computerens valg
  if (userChoice === computerChoice) {
    draw.classList.remove("hidden");
  } else if (
    // Hvis brugerens valg slår computerens valg
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    win.classList.remove("hidden");
  } else {
    // Ellers taber brugeren
    lose.classList.remove("hidden");
  }
}
