"use strict";

const randomNumber = Math.floor(Math.random() * 100) + 1;
// Math.random() giver et tal mellem 0 og 1.
// * 100 gør det til 0 → 99.999....
// Math.floor() runder ned til nærmeste heltal.
// + 1 sikrer at vi får 1–100.
console.log("Random number: " + randomNumber);

document.getElementById("guess-button").addEventListener("click", function () {
  // Finder knappen med id="guess-button"
  // Når man klikker på den, kører funktionen
  const userGuess = Number(document.getElementById("guess-number").value);
  // Henter værdien fra inputfeltet (id="guess-number") og laver det til et tal
  const results = document.getElementById("results");
  // Finder <div> hvor resultatet skal stå (id="results")

  if (userGuess === randomNumber) {
    results.textContent = "Correct! You guessed the number!";
    showConfetti();
    // Hvis gættet er korrekt, vis besked og konfetti
  } else if (userGuess < randomNumber) {
    results.textContent = "Too low. Try again!";
    // Hvis gættet er for lavt, vis besked
  } else {
    results.textContent = "Too high. Try again!";
    // Hvis gættet er for højt, vis besked
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

// const bool = true;
// const num = 41;
// const str = "Peter";
// const obj = { cats: 2, cars: 1 };
// const nothing = null;
// let undf;
// const sym = Symbol("symbol");

// console.log("typeof bool:", typeof bool);
// console.log("typeof num:", typeof num);
// console.log("typeof str:", typeof str);
// console.log("typeof obj:", typeof obj);
// console.log("typeof undf:", typeof undf);
// console.log("typeof sym:", typeof sym);

// "use strict";
// num = 17;

// let myString = "45";
// console.log("typeof 1", typeof myString);
// myString = Number.parseInt(myString);
// console.log("typeof 2", typeof myString);

// const n1 = 1;
// const n2 = 2;
// const s1 = "1";
// const s2 = "2";
// console.log(n1 + n2);

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log("2" * "3");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("-9" + 5);
// console.log("-9" - 5);
// console.log(null + 1);
// console.log(undefined + 1);

// const value = true;

// if (value) {
//   console.log("value is truthy");
// } else {
//   console.log("value is falsy");
// }

// const value = "false";

// if (value) {
//   console.log("value is truthy");
// } else {
//   console.log("value is falsy");
// }
