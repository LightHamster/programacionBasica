const frase = prompt("Introduce una frase:");

for (let i = 0; i < 5; i++) {
  const espaciosEnBlanco = "    ".repeat(i); // Cuatro espacios por cada repetición
  console.log(espaciosEnBlanco + frase);
}
