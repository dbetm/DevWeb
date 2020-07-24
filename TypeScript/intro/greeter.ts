function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane user";
// Si a la función greeter le intentamos pasar otro objeto que no sea string
// se arrojará un error en el proceso de compilación.
document.body.textContent = greeter(user);
