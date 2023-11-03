const numero1 = parseFloat(prompt("Introduce el primer número:"));
const numero2 = parseFloat(prompt("Introduce el segundo número:"));

if (!isNaN(numero1) && !isNaN(numero2)) {
  const opcion = prompt("Selecciona una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

  if (opcion === "1") {
    const suma = numero1 + numero2;
    console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
  } else if (opcion === "2") {
    const resta = numero1 - numero2;
    console.log(`La resta de ${numero1} y ${numero2} es: ${resta}`);
  } else if (opcion === "3") {
    const multiplicacion = numero1 * numero2;
    console.log(`La multiplicación de ${numero1} y ${numero2} es: ${multiplicacion}`);
  } else if (opcion === "4") {
    if (numero2 !== 0) {
      const division = numero1 / numero2;
      console.log(`La división de ${numero1} entre ${numero2} es: ${division}`);
    } else {
      console.log("No se puede dividir por cero.");
    }
  } else {
    console.log("Opción no válida. Por favor, selecciona una opción del 1 al 4.");
  }
} else {
  console.log("Por favor, introduce números válidos.");
}
