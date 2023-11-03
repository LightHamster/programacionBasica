function convertirANumeroRomano(numero) {
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    
    let numeroRomano = "";
  
    if (numero < 1 || numero >= 5000) {
      return "Número fuera del rango (debe ser mayor o igual a 1 y menor que 5000).";
    }
  
    for (let i = 0; i < valores.length; i++) {
      while (numero >= valores[i]) {
        numeroRomano += simbolos[i];
        numero -= valores[i];
      }
    }
  
    return numeroRomano;
  }
  
  const numero = parseInt(prompt("Introduce un número (menor de 5000) para convertir a número romano:"));
  
  if (!isNaN(numero)) {
    const numeroRomano = convertirANumeroRomano(numero);
    console.log(`El número ${numero} en números romanos es: ${numeroRomano}`);
  } else {
    console.log("Por favor, introduce un número válido.");
  }
  