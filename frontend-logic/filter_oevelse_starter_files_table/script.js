const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
const buttons = document.querySelectorAll("button");

showTheseVehicles(vehicles);

function isElektrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}
const onlyElectricVehicles = vehicles.filter(isElektrisk);
console.log("onlyElectricVehicles", onlyElectricVehicles);

document.getElementById("electric").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(onlyElectricVehicles);
});

function jonasVehicle(vehicle) {
  if (vehicle.ownedBy === "Jonas") {
    return true;
  }
}
const onlyJonasVehicles = vehicles.filter(jonasVehicle);
console.log("onlyJonasVehicles", onlyJonasVehicles);

document.getElementById("jonas").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(onlyJonasVehicles);
});

function hasTwoSeats(vehicle) {
  if (vehicle.passengers > 1) {
    return true;
  }
}

const onlyTwoSeatVehicles = vehicles.filter(hasTwoSeats);
console.log("onlyTwoSeatVehicles", onlyTwoSeatVehicles);

document.getElementById("twoseat").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(onlyTwoSeatVehicles);
});

function fuelRugbrod(vehicle) {
  if (vehicle.fuel === "Rugbrød") {
    return true;
  }
}
const onlyRugbrodVehicles = vehicles.filter(fuelRugbrod);
console.log("onlyRugbrodVehicles", onlyRugbrodVehicles);

document.getElementById("rugbrod").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(onlyRugbrodVehicles);
});

document.getElementById("showall").addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(vehicles);
});

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type ?? "x"}</td>
  <td>${each.fuel ?? "x"}</td>
  <td>${each.passengers ?? "x"}</td> 
  <td>${each.stops ?? "x"}</td>
  <td>${each.ownedBy ?? "x"}</td>
  <td>${each.isElectric ?? "x"}</td>
  <td>${each.isTandem ?? "x"}</td>
</tr>`;
  });
}
