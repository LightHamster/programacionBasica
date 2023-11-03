let contadorMultiplos = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    contadorMultiplos++;
  }
}

console.log("Cantidad de números que son múltiplos de 2 o de 3: " + contadorMultiplos);