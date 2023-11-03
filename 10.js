// Obtenemos un número introducido por el usuario
const numero = parseInt(prompt("Introduce un número:"));

if (!isNaN(numero)) {
  if (numero % 2 === 0) {
    console.log("El número es par.");
  } else {
    console.log("El número es impar.");
  }
} else {
  console.log("Por favor, introduce un número válido.");
}
