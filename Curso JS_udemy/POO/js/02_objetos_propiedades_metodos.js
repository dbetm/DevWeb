/* ### OBJETOS ##
    Es una colección de propiedades y métodos.
*/

var object = {
    // Un atributo es una asociación entre nombre y un valor.
    nombre:"David",
    edad:20,

    // Método, función dentro del método
    descripcion: function() {
        console.log("Su nombre es: " + object.nombre + " y tiene " +
        object.edad + " años.");
    }, // <===  OJO

    saludar: function(saludo) {
        console.log(saludo + " " + object.nombre);
    }
}

console.log("Nombre: ", object.nombre);
object.descripcion();
object.saludar("Hola");

// OBJETOS PRIMITIVOS

    // Objeto Date: Se utiliza para trabajar con fechas y horas
var d = new Date();
var year = d.getFullYear();
console.log("El años es: ", year);
console.log(d);
