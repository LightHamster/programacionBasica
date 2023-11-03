function cargarNotas(numCursos, numAlumnosPorCurso) {
    const notas = []; // Matriz para almacenar las notas
    for (let curso = 1; curso <= numCursos; curso++) {
      const cursoNotas = []; // Matriz para las notas de un curso
      for (let alumno = 1; alumno <= numAlumnosPorCurso; alumno++) {
        const nota = parseFloat(prompt(`Introduce la nota del alumno ${alumno} en el curso ${curso}:`));
        if (!isNaN(nota)) {
          cursoNotas.push(nota);
        } else {
          console.log("Por favor, introduce una nota válida.");
          alumno--; // Permite al usuario volver a ingresar la nota
        }
      }
      notas.push(cursoNotas);
    }
    return notas;
  }
  
  // Función para imprimir las notas
  function imprimirNotas(notas) {
    for (let curso = 0; curso < notas.length; curso++) {
      console.log(`Curso ${curso + 1}:`);
      for (let alumno = 0; alumno < notas[curso].length; alumno++) {
        console.log(`  Alumno ${alumno + 1}: ${notas[curso][alumno]}`);
      }
    }
  }
  
  const numCursos = parseInt(prompt("Introduce el número de cursos:"));
  const numAlumnosPorCurso = parseInt(prompt("Introduce el número de alumnos por curso:"));
  
  if (!isNaN(numCursos) && !isNaN(numAlumnosPorCurso)) {
    const notas = cargarNotas(numCursos, numAlumnosPorCurso);
    console.log("Notas cargadas:");
    imprimirNotas(notas);
  } else {
    console.log("Por favor, introduce números válidos.");
  }
  