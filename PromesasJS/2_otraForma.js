// Generar promesas con un estado inicial diferente de pendiente

function dummy() {
    if(Math.floor(Date.now() / 1000) % 2 == 0)
        return Promise.resolve("Hola mundo");
    return Promise.reject("Error");
}

dummy().then(console.log).catch(console.log);

// Cuando interesa que resuelva
// Sintáxis alterna
Promise.resolve("Hi!").then(console.log);
// Nunca se ejecutaría then
Promise.reject("Hi2!").then(console.log).catch(console.log("falla"));
