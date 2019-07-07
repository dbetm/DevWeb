var recuadro = document.querySelector("#recuadro");

/* EVENTOS DESDE EL DOM */
function cambiarColor() {
    recuadro.style.background = "red";
}

/* EVENTOS DESDE JAVASCRIPT */
var boton = document.querySelector("#boton");
boton.addEventListener("mousemove", moverCaja);
boton.addEventListener("click", restaurar);

function moverCaja() {
    recuadro.style.width = "500px";
    recuadro.style.transition = "1s width ease";
}

function restaurar() {
    recuadro.style.width = "200px";
    recuadro.style.transition = "1s width ease";
}
