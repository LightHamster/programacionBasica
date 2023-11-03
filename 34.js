const calificaciones = [];

for (let i = 1; i <= 10; i++) {
  const calificacion = parseFloat(prompt(`Introduce la calificación de la asignatura ${i}:`));

  if (!isNaN(calificacion)) {
    calificaciones.push(calificacion);
  } else {
    console.log("Por favor, introduce una calificación válida.");
    i--; // Restamos 1 a i para que el usuario pueda volver a introducir la calificación.
  }
}

console.log("Calificaciones ingresadas:");
for (let i = 0; i < calificaciones.length; i++) {
  console.log(`Asignatura ${i + 1}: ${calificaciones[i]}`);
}

const notaBuscada = parseFloat(prompt("Introduce la calificación que deseas buscar:"));

if (!isNaN(notaBuscada)) {
  const encontrada = calificaciones.includes(notaBuscada);

  if (encontrada) {
    console.log(`La calificación ${notaBuscada} se encuentra en la lista.`);
  } else {
    console.log(`La calificación ${notaBuscada} no se encontró en la lista.`);
  }
} else {
  console.log("Por favor, introduce una calificación válida para buscar.");
}
