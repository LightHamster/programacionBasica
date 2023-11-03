function shellSort(matriz) {
    const filas = matriz.length;
    
    // Aplicar el algoritmo SHELL para ordenar la matriz por la primera columna
    for (let gap = Math.floor(filas / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < filas; i++) {
        const temp = matriz[i];
        let j = i;
        while (j >= gap && matriz[j - gap][0] > temp[0]) {
          matriz[j] = matriz[j - gap];
          j -= gap;
        }
        matriz[j] = temp;
      }
    }
  }
  
  // Ejemplo de una matriz desordenada
  const matriz = [
    [3, "Alumno A", 25],
    [1, "Alumno B", 30],
    [4, "Alumno C", 20],
    [2, "Alumno D", 35]
  ];
  
  console.log("Matriz desordenada:");
  console.log(matriz);
  
  shellSort(matriz);
  
  console.log("\nMatriz ordenada por la primera columna:");
  console.log(matriz);
  