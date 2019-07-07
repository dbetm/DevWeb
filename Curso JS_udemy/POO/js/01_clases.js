/* #### CLASES ####
    Son funciones constructoras, siempre se inician con mayúscula
*/

// Clases primitivas
    // Clase String

var string = new String("Un bonito hola mundo");
console.log("Cadena: ", string);

    // Clase Number
var number = new Number(23);
console.log("Número: ", number);

    // Boolean
console.log("Boolean: ", new Boolean(true));


// Clases compuestas
    // Clase array
var array = new Array(9, 2, 3, "quetzal");
console.log("Array: ", array);

    // Object
var objeto = new Object({
    nombre:"Miguel",
    edad: 12
});
console.log("Object: ", objeto);


// Clases propias
    // Creamos el prototipo
    function Persona() {
        // Propiedades públicas
        this.nombre;
        this.edad;
    }

var yo = new Persona();
yo.nombre = "David";
yo.edad = 20;
console.log("Yo: ", yo);

    // Clases con parámetros
function Animal(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
}

var pet = new Animal("Perro", "Chihuahua");
console.log("Mascota: ", pet);
