"use strict";

const randomNumber = Math.floor(Math.random() * 100) + 1;
// Math.random() giver et tal mellem 0 og 1.
// * 100 gør det til 0 → 99.999....
// Math.floor() runder ned til nærmeste heltal.
// + 1 sikrer at vi får 1–100.
console.log(randomNumber);

document.getElementById("guess-button").addEventListener("click", function () {
  // Finder knappen med id="guess-button"
  // Når man klikker på den, kører funktionen

  const userGuess = parseInt(document.getElementById("guess-number").value);
  console.log("User guessed:", userGuess);
  // Henter værdien fra inputfeltet (id="guess-number") og laver det til et tal
  // Value henter det som er blevet skrevet i inputfeltet
  // Number konvertere strengen (value) til et rigtigt tal
  const results = document.getElementById("results");
  // Finder <div> hvor resultatet skal stå (id="results")

  if (userGuess === randomNumber) {
    results.textContent = "Correct! You guessed the number!";
    showConfetti();
    // Hvis gættet er korrekt, vis besked og konfetti
    // textContent ændrer teksten inde i <div> med id="results"
  } else if (userGuess < randomNumber) {
    results.textContent = "Too low. Try again!";
    // Hvis gættet er for lavt, vis besked
    // textContent ændrer teksten inde i <div> med id="results"
  } else {
    results.textContent = "Too high. Try again!";
    // Hvis gættet er for højt, vis besked
    // textContent ændrer teksten inde i <div> med id="results"
  }
});

function showConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 90 + 5}%`;
    confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = `${Math.random()}s`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1200);
  }
}
