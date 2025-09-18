"use strict";

// const storedTheme = localStorage.getItem("storedTheme");
// console.log("storedTheme:", storedTheme);

// document.querySelector("#theme-switcher").addEventListener("change", changeTheme);
// console.log(event.target.value);

// function changeTheme(event) {
//   const chosenTheme = event.target.value;
//   console.log("chosenTheme:", chosenTheme);

//   document.querySelector("body").dataset.theme = chosenTheme;
// }

const storedTheme = localStorage.getItem("storedTheme");
document.querySelector("#theme-switcher").addEventListener("change", changeTheme);

console.log("storedTheme:", storedTheme);
if (storedTheme === null) {
  storedTheme(storedTheme);
} else {
  storedTheme(storedTheme);
}

function changeTheme(event) {
  const chosenTheme = event.target.value;
  console.log("chosenTheme:", chosenTheme);

  localStorage.setItem("storedTheme", chosenTheme);

  setTheme(theme);
}

function setTheme(theme) {
  document.querySelector("body").dataset.theme = theme;
}
