let entrada;

while (true){
    entrada = prompt("Introduce 'S' para Sí, o 'N' para No: ");

    if (entrada === null){
        break;
    }else if (entrada === "S" || entrada === "N"){
        break;
    }else{
        alert("Introduce 'S' o 'N'.")
    }
}

if(entrada === "S"){
    console.log("Seleccionaste 'Sí'.");
}else if (entrada === "N"){
    console.log("Seleccionaste 'No'.");
}else{
    console.log("Saliste.")
}