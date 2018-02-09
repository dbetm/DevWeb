
function operaciones() {
    var a = parseFloat(prompt("Escribe el valor de A: "));
    var b = parseFloat(prompt("Escribe el valor de B: "));
    var res = document.querySelector("#suma");
    res.innerHTML += " A + B: " + sumar(a, b);

    res = document.querySelector("#resta");
    res.innerHTML += " A - B: " + restar(a, b);

    res = document.querySelector("#multiplicacion");
    res.innerHTML += " A * B: " + multiplicar(a, b);

    res = document.querySelector("#division");
    res.innerHTML += " A / B: " + dividir(a, b);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}

// Mostrando en nombre

function displayNombre() {
    var nombre = document.querySelector("#nombre").value;
    document.querySelector("#nombreGrande").innerHTML += " " + nombre;
}
