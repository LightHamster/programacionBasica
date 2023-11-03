let impares = 0;

for (let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
        impares++;
    }
}

console.log("El total de números impares es: " + impares);