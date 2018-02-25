// OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
var p = {
    // seleccionar todos los items de la calculadora
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null
}

// OBJETO CON LOS MÉTODOS DE LA CALCULADORA
var m = {
    inicio: function() {
        for (var i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }
    },
    // la var event es el parámetro
    oprimirTecla: function(event) {
        p.accion = event.target.getAttribute("class");
        m.calculadora(p.accion);
    },

    calculadora: function(accion) {
        switch (accion) {
            case "numero":
                console.log("Número");
                break;
            case "signo":
                console.log("Signo");
                break;
            case "decimal":
                console.log("Décimal");
                break;
            case "igual":
                console.log("Igual");
                break;
            default:

        }
    }
}

m.inicio();
