// OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
var p = {
    // seleccionar todos los items de la calculadora
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0
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
        p.digito = event.target.innerHTML; // capturar el contenido HTMl
        m.calculadora(p.accion, p.digito);
    },

    calculadora: function(accion, digito) {
        switch (accion) {
            case "numero":
                p.cantidadSignos = 0;
                if(p.operaciones.innerHTML == 0) {
                    p.operaciones.innerHTML = digito;
                }
                else {
                    p.operaciones.innerHTML += digito;
                }

                break;
            case "signo":
                p.cantidadSignos++;
                if(p.cantidadSignos == 1) {
                    if(p.operaciones.innerHTML == 0) {
                        p.operaciones.innerHTML = 0;
                    }
                    else {
                        p.operaciones.innerHTML += digito;
                    }
                }
                break;
            case "decimal":
                console.log("Décimal");
                break;
            case "igual":
                console.log("Igual");
                break;
            default:

        }
    },

    borrarCalculadora: function() {
        p.operaciones.innerHTML = 0;
    }
}

m.inicio();
