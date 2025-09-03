const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
  // string defineres som en tom streng, der skal samle indholdet der skal indsættes i ul elementet i html
  let string = "";
  //   //   string += "Finn";
  //   //   string += " hello";
  //   console.log(string);
  //   bc.forEach((elm) => {
  //     // console.log("elm", elm.name);

  //     string += `<a href="">${elm.name}</a>`;

  // Kigger i arrayet og laver et li element for hver objekt i arrayet
  // elm og i køres for hver objekt i arrayet
  bc.forEach((elm, i) => {
    // -1 betyder at hvis det ikke er sidste element i arrayet, så tilføjes en skråstreg bagefter
    if (i < bc.length - 1) {
      // Hvis det ikke er sidste element i arrayet, laves et link
      string += `<li><a href="">${elm.name}</a></li>`;
      // Hvis det ikke er sidste element i arrayet, tilføjes en skråstreg bagefter
      string += " / ";
      // Hvis det er sidste element i arrayet, laves der ikke et link, men kun tekst i li elementet
    } else {
      string += `<li>${elm.name}</li>`;
    }
  });

  // Tilføjer den samlede string til ul elementet i html
  document.querySelector("ul").innerHTML = string;
}
