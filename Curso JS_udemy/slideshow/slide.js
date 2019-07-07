// Objeto con las propiedades del Slide

var p = {
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul")
}

// Objetos con los métodos del Slide
var m = {
    inicioSlide: function() {
        for (var i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide)
        }
    },

    paginacionSlide: function(item) {
        p.item = item.target.parentNode.getAttribute("item") - 1;
        console.log("item: ", item.target.parentNode.getAttribute("item"));
        m.movimientoSlide(p.item);
    },

    movimientoSlide: function(item) {
        p.cajaSlide.style.left = -item * 100+"%";
        console.log("item", -(item*100)+"%");
    }
}

m.inicioSlide();
