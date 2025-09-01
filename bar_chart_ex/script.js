"use strict";

// Henter ul elementet i dom'en
const list = document.querySelector("ul");
// Array defineret til at holde bar højder
const barArray = [];

// Tilføjer en bar med højde 30 som en startværdi i dom'en
const li = document.createElement("li");
li.style.setProperty("--height", "30");
list.appendChild(li);

// Hvert sekund kald funktionen generateBar
setInterval(generateBar, 1000);

function generateBar() {
  console.log("generating bar");
  // Genererer en tilfældig højde mellem 1 og 10
  const height = Math.floor(Math.random() * 10) + 1;
  // Tilføjer højden til barArray
  barArray.push(height);
  // Hvis der er flere end 20 objekter i arrayet, fjernes det første objekt
  if (barArray.length > 20) {
    barArray.shift();
  }

  // showBars kaldes for at opdatere visningen
  showBars();
}

function showBars() {
  // Rydder den eksisterende ul i dom'en
  list.innerHTML = "";
  // Looper gennem barArray og opretter et li element for hver højde
  barArray.forEach((height) => {
    const li = document.createElement("li");
    // Højden skaleres op for bedre synlighed
    li.style.setProperty("--height", height * 10);
    // Tager det nye oprettede li element og tilføjer det som det sidste barn i ul elementet
    list.appendChild(li);
  });
}
