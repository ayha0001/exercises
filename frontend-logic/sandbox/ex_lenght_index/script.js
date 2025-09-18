const name = "Albus Percival Wulfric Brian Dumbledore";

// 1. Hvad er det totale antal af karakterer inkl. mellemrum?
console.log(name.length);
// -> 36

// 2. Hvilken karakter er der på index 2?
console.log(name[2]);
// -> b  (A=0, l=1, b=2)

// 3. Hvilken karakter er der på index 6?
console.log(name[6]);
// -> P  (mellemrum er også en karakter)

// 4. Hvilket index har det første D i "Dumbledore"?
console.log(name.indexOf("D"));
// -> 27

// 5. Hvilket index har sidste e i "Dumbledore"?
console.log(name.lastIndexOf("e"));
// -> 35
