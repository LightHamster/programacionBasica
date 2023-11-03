function factorial(n) {
    if (n === 0) {
      return 1; // El factorial de 0 es 1 por definición.
    } else if (n < 0) {
      return "No se puede calcular el factorial de un número negativo.";
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const numero = parseInt(prompt("Introduce un número para calcular su factorial:"));
  
  if (!isNaN(numero)) {
    const resultado = factorial(numero);
    console.log(`El factorial de ${numero} es ${resultado}`);
  } else {
    console.log("Por favor, introduce un número válido.");
  }
  