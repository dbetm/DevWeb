var numeroAleatorio = document.querySelector("#numeroAleatorio");
var numero = 0;

// NÚMEROS ALEATORIOS
// Objeto Math permite operaciones matemáticas
// Math.random = devuelve un número aleatorio entre [0)
// Math.floor = redondea al menor número entero.
// Math.ceil = redondea al mayor número entero.
// Math.round = devuelve número redondeado a su número entero más próximo.

// numero = Math.floor(Math.random() * 10);
// numero = Math.ceil(Math.random() * 10);
numero = Math.round(Math.random() * 10);
numeroAleatorio.innerHTML = numero;
