/* =========================
Caso 1: Los 4 atletas

De cuatro corredores de atletismo se sabe que C ha llegado inmediatamente
detrás de B, y D ha llegado en medio de A y C. Calcula el orden de llegada.
*/

var a = {
    A:0,
    B:0,
    C:0,
    D:0,

    // métodos
    resultado: function() {
        if(a.C > a.B && a.D > a.B && a.D > a.C && a.D < a.A) {
            return true;
        }
        return false;
    },

    intervalo: setInterval(function() {
        a.A = Math.ceil(Math.random() * 4);
        a.B = Math.ceil(Math.random() * 4);
        a.C = Math.ceil(Math.random() * 4);
        a.D = Math.ceil(Math.random() * 4);

        if(a.resultado()) {
            clearInterval(a.intervalo);
            console.log("Atleta A", a.A);
            console.log("Atleta B", a.B);
            console.log("Atleta C", a.C);
            console.log("Atleta D", a.D);
        }
    }, 10)
}

/* Caso 2: Los caballos
El caballo de Mac es más oscuro que el de Smith, pero más rápido y más viejo que
el de Jack, que es aún más lento que el de Willy, que es más joven que el de Willy,
que es más joven que el de Mac, que es más viejo que el de Smith, que es más claro
que el de Willy, aunque el de Jack es más lento y más oscuro que el de Smith.
¿Cuál es el más viejo, cuál es más lento y cuál el más claro?

Mac | edad: viejo(2) | velocidad: rápido(2) | tono: oscuro(2)
Smith edad: joven(1) | velocidad: rápido(2) | tono: oscuro(1)
Jack | edad: joven(1) | velocidad: lento(1) | tono: oscuro(2)
Willy | edad: joven(1) | velocidad: rápido(2) | tono: oscuro(2)
*/
var b = {
    Mac: {edad:0, velocidad:0, tono:0},
    Smith: {edad:0, velocidad:0, tono:0},
    Jack: {edad:0, velocidad:0, tono:0},
    Willy: {edad:0, velocidad:0, tono:0},

    resultado: function() {
        if(b.Mac.tono > b.Smith.tono &&
        b.Mac.velocidad > b.Jack.velocidad &&
        b.Mac.edad > b.Jack.edad &&
        b.Willy.velocidad > b.Jack.velocidad &&
        b.Mac.edad > b.Willy.edad &&
        b.Mac.edad > b.Smith.edad &&
        b.Willy.tono > b.Smith.tono &&
        b.Smith.velocidad > b.Jack.velocidad &&
        b.Jack.tono > b.Smith.tono) {
            return true;
        }
        return false;
    },

    intervalo: setInterval(function(){
        b.Mac.edad = Math.ceil(Math.random() * 2);
        b.Mac.velocidad = Math.ceil(Math.random() * 2);
        b.Mac.tono = Math.ceil(Math.random() * 2);

        b.Smith.edad = Math.ceil(Math.random() * 2);
        b.Smith.velocidad = Math.ceil(Math.random() * 2);
        b.Smith.tono = Math.ceil(Math.random() * 2);

        b.Jack.edad = Math.ceil(Math.random() * 2);
        b.Jack.velocidad = Math.ceil(Math.random() * 2);
        b.Jack.tono = Math.ceil(Math.random() * 2);

        b.Willy.edad = Math.ceil(Math.random() * 2);
        b.Willy.velocidad = Math.ceil(Math.random() * 2);
        b.Willy.tono = Math.ceil(Math.random() * 2);

        if(b.resultado()) {
            clearInterval(b.intervalo);
            console.log("Caballo de Mac ", b.Mac);
            console.log("Caballo de Smith ", b.Smith);
            console.log("Caballo de Jack ", b.Jack);
            console.log("Caballo de Willy ", b.Willy);
        }
    }, 1)
}
