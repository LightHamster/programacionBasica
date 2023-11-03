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
  
  const numero = parseInt(prompt("Introduce un número mayor o igual a la unidad para verificar si es primo:"));
  
  if (!isNaN(numero)) {
    if (esPrimo(numero)) {
      console.log(`${numero} es un número primo.`);
    } else {
      console.log(`${numero} no es un número primo.`);
    }
  } else {
    console.log("Por favor, introduce un número válido.");
  }
  