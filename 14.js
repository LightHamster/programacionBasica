let mayor = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;

for (let i = 1; i <= 5; i++) {
  const numero = parseFloat(prompt("Introduce el número " + i + ":"));

  if (!isNaN(numero)) {
    if (numero > mayor) {
      mayor = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  } else {
    console.log("Por favor, introduce un número válido.");
    i--; // Restar 1 al contador para volver a solicitar el número inválido.
  }
}

console.log("El mayor número introducido es: " + mayor);
console.log("El menor número introducido es: " + menor);