var varGlobal = 10;

// Funciones sin parámetros

// Una función se compone:
    // Declaramos la función
function saludo() {
    // Tarea de la función
    console.log("Hola");
}
    // Ejecutamos la función
saludo();

// Funciones con parámetro
function operacion(digito1, digito2) {
    var resultado = digito1 + digito2;
    console.log("Resultado", resultado);
}

operacion(5, 6);

// Funciones con retorno sin parámetros
function retorno1() {
    var numero = 5;
    return numero;
}

console.log(retorno1());

// Funciones con retorno sin parámetros
function retorno2(numero) {
    return numero % 2;
}

console.log(retorno2(11));
