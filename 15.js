const numero1 = parseInt(prompt("Introduce el primer número:"));
const numero2 = parseInt(prompt("Introduce el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  let contadorNaturales = 0;
  let contadorPares = 0;
  let sumaImpares = 0;

  const numeroInicial = Math.min(numero1, numero2);
  const numeroFinal = Math.max(numero1, numero2);

  for (let i = numeroInicial; i <= numeroFinal; i++) {
    contadorNaturales++;

    if (i % 2 === 0) {
      contadorPares++;
    } else {
      sumaImpares += i;
    }
  }

  console.log("Números naturales entre " + numeroInicial + " y " + numeroFinal + ": " + contadorNaturales);
  console.log("Cantidad de números pares: " + contadorPares);
  console.log("Suma de números impares: " + sumaImpares);
} else {
  console.log("Por favor, introduce números válidos.");
}