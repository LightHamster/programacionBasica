function tirarDado() {
    return Math.floor(Math.random() * 6) + 1; // Genera un número aleatorio del 1 al 6 (cara de un dado)
  }
  
  let contadorSuma10 = 0;
  
  for (let i = 0; i < 100; i++) {
    const dado1 = tirarDado();
    const dado2 = tirarDado();
    const sumaDados = dado1 + dado2;
  
    if (sumaDados === 10) {
      contadorSuma10++;
    }
  }
  
  console.log(`Después de 100 tiradas de dos dados, la suma fue 10 en ${contadorSuma10} ocasiones.`);
  