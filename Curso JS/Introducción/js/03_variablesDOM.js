// Variabes DOM ('Modelo de Objetos del documento')
/*
El DOM es la estructura de objetos que genera el navegador cuando se carga
el documento y se puede alterar mediante JS para cambiar dinámicamente los
contenidos y aspecto de la página.
*/
// Seleccionando un componente del HTML
var caja = document.querySelector("#caja");
console.log("Caja", caja);

// Modificando sus estilos CSS
caja.style.background = "black";
caja.style.width = "200px";
caja.style.height = "200px";


// Seleccionando todos los elementos con cierta clase
var cajas = document.querySelectorAll(".cajas");
console.log("Cajas", cajas);
