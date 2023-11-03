//HTML
// !DOCTYPE html>
// <html>
// <head>
  // <link rel="stylesheet" type="text/css" href="styles.css">
// </head>
// <body>
  // <div class="centered-text" id="centeredText">
    // <p id="output"></p>
  // </div>
  // <script src="script.js"></script>
// </body>
// </html>


//CSS
//body {
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    height: 100vh;
//    margin: 0;
//  }
  
//  .centered-text {
//    text-align: center;
//  }

const frase = prompt("Introduce una frase:");
const outputElement = document.getElementById("output");

if (frase) {
  outputElement.innerText = frase;
} else {
  outputElement.innerText = "No se ha introducido una frase válida.";
}
