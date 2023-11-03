function mostrarReloj(horas, minutos, segundos) {
    console.clear();
    console.log(`${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);
  }
  
  function establecerHora() {
    const horas = parseInt(prompt("Introduce las horas (0-23):"));
    const minutos = parseInt(prompt("Introduce los minutos (0-59):"));
    const segundos = parseInt(prompt("Introduce los segundos (0-59):"));
  
    if (!isNaN(horas) && !isNaN(minutos) && !isNaN(segundos) &&
        horas >= 0 && horas <= 23 &&
        minutos >= 0 && minutos <= 59 &&
        segundos >= 0 && segundos <= 59) {
      return [horas, minutos, segundos];
    } else {
      console.log("Por favor, introduce una hora válida.");
      return null;
    }
  }
  
  function iniciarReloj() {
    let [horas, minutos, segundos] = establecerHora();
  
    if (horas !== null) {
      setInterval(() => {
        segundos++;
  
        if (segundos === 60) {
          segundos = 0;
          minutos++;
  
          if (minutos === 60) {
            minutos = 0;
            horas++;
  
            if (horas === 24) {
              horas = 0;
            }
          }
        }
  
        mostrarReloj(horas, minutos, segundos);
      }, 1000);
    }
  }
  
  iniciarReloj();
  