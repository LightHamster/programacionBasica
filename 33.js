const calificaciones = [];
let sumaCalificaciones = 0;

for (let i = 1; i <= 10; i++) {
  const calificacion = parseFloat(prompt(`Introduce la calificación de la asignatura ${i}:`));

  if (!isNaN(calificacion)) {
    calificaciones.push(calificacion);
    sumaCalificaciones += calificacion;
  } else {
    console.log("Por favor, introduce una calificación válida.");
    i--; // Restamos 1 a i para que el usuario pueda volver a introducir la calificación.
  }
}

const media = sumaCalificaciones / calificaciones.length;

console.log("Calificaciones ingresadas:");
for (let i = 0; i < calificaciones.length; i++) {
  console.log(`Asignatura ${i + 1}: ${calificaciones[i]}`);
}

console.log(`La media de las calificaciones es: ${media}`);
