"use strict";

// Object defineret med to sprog, der fortæller indholdet og hvor det skal placeres i html
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Ændrebar variabel der hiver fat i dansk, sættes som standardsprog
let locale = "da";
// console.logger teksterne for det nuværende sprog i konsollen, altså dansk
console.log(texts[locale]);

// Funktion slår op i texts ud fra locale og løber i gennem alle tekster via forEach
// Finder derfor dom element via qls og opdatere indholdet via textConten = text
function enterLang() {
  texts[locale].texts.forEach(({ text, location }) => {
    document.querySelector(location).textContent = text;
  });
}

// Funktion der ændre sproget, hiver fat i deutsch sproget
function switchLanguage(newLocale) {
  // Laver ny locale
  locale = newLocale;
  // Kalder så funktionen der opdatere indholdet
  enterLang();
}

// Finder dropdown menuen i dom/html
let select = document.querySelector(".lang-select");
// console.logger den nye værdi, altså det nye sprog der er valgt, i konsollen
console.log("value", select.value);

// Lytter efter når sproget skiftes i dropdown
select.addEventListener("change", (language) => {
  // language.target.value er den nye værdi, altså "da" eller "de"
  console.log(language.target.value);
  // Funktionen bliver kaldt og skifter så sproget og opdatere dom'en
  switchLanguage(language.target.value);
});

// enterLang starter siden med at vise dansk, som blev defineret som standardsprog længere oppe
enterLang();
