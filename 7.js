let frases = 0;

while(true){
    const frase = prompt("Introduce una frase: ");
    
    if(frase == null || frase === ""){
        break;
    }

    frases++;
}

console.log("Cantidad de frases: " + frases);