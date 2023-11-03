function esPrimo(numero) {
    if (numero <= 1) {
      return false; // Los números menores o iguales a 1 no son primos
    }
  
    if (numero <= 3) {
      return true; // 2 y 3 son primos
    }
  
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false; // Los múltiplos de 2 y 3 no son primos
    }
  
    for (let i = 5; i * i <= numero; i += 6) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false; // Si es divisible por algún número entre i e i+2, no es primo
      }
    }
  
    return true;
  }
  
  function calcularFactorial(numero) {
    if (numero === 0) {
      return 1; // El factorial de 0 es 1 por definición.
    } else {
      let factorial = 1;
      for (let i = 1; i <= numero; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  
  function imprimirTablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  const numero = parseInt(prompt("Introduce un número para realizar operaciones:"));
  
  if (!isNaN(numero)) {
    console.log(`Número ingresado: ${numero}`);
  
    if (esPrimo(numero)) {
      console.log(`${numero} es un número primo.`);
    } else {
      console.log(`${numero} no es un número primo.`);
    }
  
    const factorial = calcularFactorial(numero);
    console.log(`El factorial de ${numero} es: ${factorial}`);
  
    imprimirTablaDeMultiplicar(numero);
  } else {
    console.log("Por favor, introduce un número válido.");
  }
  