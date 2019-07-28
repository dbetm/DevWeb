
// Crear una nuea promesa
    // Executor
let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(confirm("¿La promesa se cumple?"))
            return resolve("¡Gracias, CódigoFacilito!");
        return reject(new Error("Hubo un error"));
        // resolve("sjdsd")                    resolvió bien
        // reject(new Error("Hubo falla"))     hubo un error
    }, 2000);
});

//promise.then(console.log).catch(console.log);
/*
promise (obj) puede estar en 3 posibles estados:
1) Pendiente - inicial
2) Cumplido - se completó
3) Rechazado - hubo un error

promise.then(f1-cumplido, f2-Rechazado)
*/

promise.then(function(resultado) {
    console.log(resultado);
}, function(error) {
    console.log("Algo salió mal");
    console.log(error);
});

// En lugar de pasar una segunda función como parámetro
// Se puede usar la sintáxis usando catch
promise.then(function(resultado) {
    console.log(resultado);
}).catch(function(err) {
    console.log(err);
});
