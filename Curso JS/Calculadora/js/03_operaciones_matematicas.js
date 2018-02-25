// OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
var p = {
    // seleccionar todos los items de la calculadora
    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    ultimoCaracterDecimal: false,
    ultimoCaracterIgual: false
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
                    if(p.ultimoCaracterIgual) {
                        p.operaciones.innerHTML = digito;
                        p.ultimoCaracterIgual = false;
                    }
                    else {
                        p.operaciones.innerHTML += digito;
                    }
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
                        p.ultimoCaracterDecimal = false;
                        p.ultimoCaracterIgual = false;
                    }
                }
                break;
            case "decimal":
            if(!p.ultimoCaracterDecimal) {
                p.operaciones.innerHTML += digito;
                p.ultimoCaracterDecimal = true;
                p.ultimoCaracterIgual = false;
            }
                break;
            case "igual":
                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.ultimoCaracterIgual = true;
                break;
            default:

        }
    },

    borrarCalculadora: function() {
        p.operaciones.innerHTML = 0;
    }
}

m.inicio();
