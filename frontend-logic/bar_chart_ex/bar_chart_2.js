const list = document.querySelector("ul");
const barArray = [];

setInterval(generateBars, 1000);

function generateBars() {
  barArray.push(Math.round(Math.random() * 100));

  if (barArray.length > 20) {
    barArray.shift();
  }

  renderBars();
}

function renderBars() {
  document.querySelectorAll("li").forEach((elm, i) => {
    elm.style.setProperty("--height", barArray[i]);
    console.log("i", i);
    console.log("elm");
  });
}
