/*
    CONDICIONES
*/

var a = 15;
var b = 15;

if(a > b) {
    console.log("a es mayor que b");
}
else if(a == b) {
    console.log("a es igual que b");
}
else {
    console.log("b es mayor que a");
}

/*
    CAMBIOS (SWITCHES)
*/
var dia = Math.floor((Math.random() * 7) + 1); // un número aleatorio entre 1 y 5
switch (dia) {
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miércoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sábado");
        break;
    default:
        console.log("Es domingo");
}
