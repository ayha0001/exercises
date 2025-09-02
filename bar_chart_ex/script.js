// "use strict";

// // Henter ul elementet i dom'en
// const list = document.querySelector("ul");
// // Array defineret til at holde bar højder
// const barArray = [];

// // Tilføjer en bar med højde 30 som en startværdi i dom'en
// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

// // Hvert sekund kald funktionen generateBar
// setInterval(generateBar, 1000);

// function generateBar() {
//   console.log("generating bar");
//   // Genererer en tilfældig højde mellem 1 og 10
//   const height = Math.floor(Math.random() * 10) + 1;
//   // Tilføjer højden til barArray
//   barArray.push(height);
//   // Hvis der er flere end 20 objekter i arrayet, fjernes det første objekt
//   if (barArray.length > 20) {
//     barArray.shift();
//   }

//   // showBars kaldes for at opdatere visningen
//   showBars();
// }

// function showBars() {
//   // Rydder den eksisterende ul i dom'en
//   list.innerHTML = "";
//   // Looper gennem barArray og opretter et li element for hver højde
//   barArray.forEach((height) => {
//     const li = document.createElement("li");
//     // Højden skaleres op for bedre synlighed
//     li.style.setProperty("--height", height * 10);
//     // Tager det nye oprettede li element og tilføjer det som det sidste barn i ul elementet
//     list.appendChild(li);
//   });
// }

"use strict";

// Henter ul elementet i dom'en
const list = document.querySelector("ul");
// Array defineret til at holde bar højder
const barArray = [];

// // Tilføjer en bar med højde 30 som en startværdi i dom'en
// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

// Hvert sekund kald funktionen generateBar
setInterval(generateBar, 1000);

function generateBar() {
  console.log("generating bar");
  // Variabel defineres der genererer en tilfældig højde mellem 1 og 100
  const height = Math.floor(Math.random() * 100) + 1;

  // Tilføjer de generede højder til barArray
  addBar(height);

  // Her oprettes nyt li element og højden sættes til den tilfældigt generede højde
  const li = document.createElement("li");
  li.style.setProperty("--height", height);
  // Tager det nye oprettede li element og tilføjer det som det sidste barn i ul elementet
  list.appendChild(li);

  // Hvis der er flere end 20 objekter i arrayet, fjernes det første objekt
  if (barArray.length > 20) {
    removeBar();
  }

  // showBars kaldes for at opdatere visningen
  showBars();
}

// Funktion der tilføjer en bar til barArray
// Value er den tilfældigt generede højde, som sendes med som argument
function addBar(height) {
  console.log("adding bar");
  // Tilføjer værdien til barArray
  if (true) {
    // Bar tilføjes til arrayet hvis der er færre end 20 objekter i arrayet
    barArray.push(height);
  }
}

function removeBar() {
  console.log("removing bar");
  // Fjerner det første objekt i barArray
  barArray.shift();
  // Tjekker om der er et li element i ul elementet
  if (list.firstElementChild) {
    // Fjerner det første li element hvis der er et li element i ul elementet
    list.removeChild(list.firstElementChild);
  }
}

function showBars() {
  // Rydder den eksisterende ul i dom'en
  list.innerHTML = "";
  // Kigger gennem barArray og opretter et li element for hver højde
  barArray.forEach((height) => {
    // Opretter nyt li element
    const li = document.createElement("li");
    // Højden sættes til den tilfældigt generede højde
    li.style.setProperty("--height", height);
    // Tager det nye oprettede li element og tilføjer det som det sidste barn i ul elementet i dom'en
    list.appendChild(li);
  });
}
