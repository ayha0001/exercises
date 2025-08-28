// Funktionen beregn et beløb inkl. moms
// Beløbet er det beløb, der bliver kaldt når funktionen bliver brugt
function momsBeregner(beloeb, moms = 25) {
  // Beregner det totale beløb inkl. moms
  let total = beloeb * (1 + moms / 100);
  // Viser det totale beløb i konsollen
  console.log(`Beløb inkl. moms: ${total}`);
}

// Eksempel på at kalde funktionen med et beløb på 300
momsBeregner(300);
