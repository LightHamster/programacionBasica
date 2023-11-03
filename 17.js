const primerNumero = parseInt(prompt("Introduce el primer número:"));
const segundoNumero = parseInt(prompt("Introduce el segundo número:"));

if (!isNaN(primerNumero) && !isNaN(segundoNumero) && segundoNumero >= primerNumero) {
  let contadorMultiplos = 0;
  let sumaMultiplos = 0;

  for (let i = primerNumero; i <= segundoNumero; i++) {
    if (i % 2 === 0) {
      console.log(i);
      contadorMultiplos++;
      sumaMultiplos += i;
    }
  }

  console.log("Cantidad de múltiplos de 2: " + contadorMultiplos);
  console.log("Suma de múltiplos de 2: " + sumaMultiplos);
} else {
  console.log("Por favor, introduce dos números válidos, asegurándote de que el segundo número sea mayor o igual que el primero.");
}
