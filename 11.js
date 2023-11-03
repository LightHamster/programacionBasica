const numeroLimite = parseInt(prompt("Introduce un número:"));

if (!isNaN(numeroLimite)) {
  let contadorMultiplos = 0;

  for (let i = 1; i <= numeroLimite; i++) {
    if (i % 3 === 0) {
      console.log(i + " es múltiplo de 3.");
      contadorMultiplos++;
    }
  }

  console.log("Cantidad de múltiplos de 3 encontrados: " + contadorMultiplos);
} else {
  console.log("Por favor, introduce un número válido.");
}
