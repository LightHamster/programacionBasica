// Definir el tamaño de la tabla
const numPaginas = 3;
const filasPorPagina = 4;
const columnas = 5;

// Inicializar el valor inicial
let valor = 1;

// Recorrer las páginas
for (let pagina = 1; pagina <= numPaginas; pagina++) {
  console.log(`Página ${pagina}:`);
  
  // Recorrer las filas
  for (let fila = 1; fila <= filasPorPagina; fila++) {
    const filaActual = [];
    
    // Recorrer las columnas
    for (let columna = 1; columna <= columnas; columna++) {
      filaActual.push(valor);
      valor++;
    }
    
    console.log(filaActual.join("\t")); // Imprimir la fila con tabulaciones
  }
  
  console.log(); // Separador en blanco entre páginas
}
