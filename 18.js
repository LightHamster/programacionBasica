const frase = prompt("Introduce una frase:");
const letraABuscar = prompt("Introduce la letra que deseas contar:");

if (frase && letraABuscar && letraABuscar.length === 1) {
  const letraMinuscula = letraABuscar.toLowerCase(); // Convertimos la letra a minúscula para hacer la búsqueda insensible a mayúsculas/minúsculas
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    const letraActual = frase[i].toLowerCase(); // Convertimos la letra actual a minúscula

    if (letraActual === letraMinuscula) {
      contador++;
    }
  }

  console.log(`La letra '${letraABuscar}' aparece ${contador} veces en la frase.`);
} else {
  console.log("Por favor, introduce una frase y una única letra para contar.");
}
