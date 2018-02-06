// CICLO FOR
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// CICLO WHILE
var n = 1;
while(n <= 5) {
    console.log(Math.random());
    n++;
}

// CICLO DO-WHILE
var p = 1;
do {
    console.log("p: ", p);
    p++;
} while(p <= 5);


// Interactuar con el DOM
var cajas = document.querySelectorAll(".cajas");
for (var i = 0; i < cajas.length; i++) {
    cajas[i].style.width = "100px";
    cajas[i].style.height = "100px";
    cajas[i].style.background = "red";
    cajas[i].style.border = "1px solid white";
    cajas[i].style.marginTop = "2px";
    cajas[i].style.display = "inline-block";
}
