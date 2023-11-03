function generarMatriz(filas, columnas) {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
      const fila = [];
      for (let j = 0; j < columnas; j++) {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Número aleatorio entre 1 y 100
        fila.push(numeroAleatorio);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  
  function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      console.log(matriz[i].join("\t")); // Imprime la fila separando los números por tabulaciones
    }
  }
  
  const filas = 4;
  const columnas = 5;
  const matrizAleatoria = generarMatriz(filas, columnas);
  
  console.log("Matriz generada:");
  imprimirMatriz(matrizAleatoria);
  