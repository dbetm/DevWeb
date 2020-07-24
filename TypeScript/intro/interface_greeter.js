function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "David", lastName: "Betancourt" };
document.body.textContent = greeter(user);
