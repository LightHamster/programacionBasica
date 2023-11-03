const numero = parseInt(prompt("Introduce un número del 0 al 10 para obtener su tabla de multiplicar:"));

if (!isNaN(numero) && numero >= 0 && numero <= 10) {
  console.log(`Tabla de multiplicar del ${numero}:`);
  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("Por favor, introduce un número válido del 0 al 10.");
}
