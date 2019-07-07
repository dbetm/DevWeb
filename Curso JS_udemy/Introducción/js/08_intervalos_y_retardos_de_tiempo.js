var tiempo = document.querySelector("#tiempo");
var segundos = 0;

// SET INTERVAL (Intervalo de tiempo)
// setInterval(function, time-ms)
var intervalo = setInterval(function() {
    segundos++;
    tiempo.innerHTML = segundos;
}, 1000);

// SET TIMEOUT (Retardo de tiempo)
// setTimeout(function, time-ms)
setTimeout(function() {
    // alert("Se cumplió el tiempo");

    //Vamos a detener el intervalo
    clearInterval(intervalo);
}, 5000);
