"use strict";

// Når hele html'en er indlæst, kalden funktionen start()
window.addEventListener("DOMContentLoaded", start);

// En tom liste, som senere skal indeholde alle dyre-objekterne.
let allAnimals = [];

// Skabelon for hvordan et dyr skal se ud. Den skal ha et navn, beskrivelse, type og alder
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // kalder registerEventListeners(), som lytter efter klik på filter knapperne
  registerEventListeners();

  // Kalder loadJSON(), altså henter data fra animals,json filen
  loadJSON();
}

// Finder knapperne i html med data-action=filter og tilføjer en click event, så selectFilter() kaldes, når der klikkes på dem
function registerEventListeners() {
  document.querySelectorAll("[data-action=filter]").forEach((button) => button.addEventListener("click", selectFilter));
}

// Funktion der henter data fra animals.json og laver dem om til JavaScript-objekter
async function loadJSON() {
  // Henter data fra filen animals.json med fetch()
  const response = await fetch("animals.json");

  // Venter (await) til filen er hentet og oversætter den til et JavaScript-objekt (jsonData)
  const jsonData = await response.json();

  // Sender data videre til prepareObjects()
  prepareObjects(jsonData);
}

// Parameteren jsonData er en liste med de rå objekter hentet fra animal.json
function prepareObjects(jsonData) {
  // .map() går igennem alle elementerne i jsonData
  // For hvert element kaldes funktionen prepareObject()
  // prepareObject() laver et nyt objekt baseret på skabelonen animal og returnere den med de rigtige værdier
  // Resultatet af .map() er en ny liste med alle de nye objekter, som gemmes i allAnimals
  allAnimals = jsonData.map(preapareObject);

  // Viser alle dyrene i tabellen med det samme, på samme tid, før der er valgt et filter
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  // Opretter et nyt objekt ud fra skabelonen Animal
  const animal = Object.create(Animal);

  // jsonObject.fullname er en tekststreng, der bliver delt op i ord med .split(" ").
  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0]; // første ord bliver name
  animal.desc = texts[2]; // tredje ord bliver description
  animal.type = texts[3]; // fjerde ord bliver type
  animal.age = jsonObject.age; // direkte fra JSON og bliver alderen

  // returnere dyret
  return animal;
}

// Når der klikkes på en filter knap, kaldes denne funktion
function selectFilter(event) {
  // Henter filteret fra knappen der blev klikket på
  const filter = event.target.dataset.filter;

  // Viser i konsollen hvilket dyr er valgt
  console.log(`You selected ${filter}`);

  // Kalder filterList() og sender det valgte filter med
  filterList(filter);
}

// Viser en liste med dyr baseret på det valgte filter
function filterList(animalType) {
  // Starter med at antage at hele listen skal vises
  let filteredList = allAnimals;

  // Hvis filteret er "cat", så
  if (animalType === "cat") {
    filteredList = allAnimals.filter(isCat);
    // Hvis animalType er "dog", så filtreres listen med hunde
  } else if (animalType === "dog") {
    filteredList = allAnimals.filter(isDog);
  }

  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

function displayList(animals) {
  // først tømmes tabellen
  document.querySelector("#list tbody").innerHTML = "";

  // derefter køres displayAnimal() på hvert dyr på listen
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // Finder template i HTML og laver en kopi af det
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // Fylder kopien med dyrets data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // Sætter kopien ind i tabellen på siden
  document.querySelector("#list tbody").appendChild(clone);
}
