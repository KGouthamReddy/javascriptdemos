var person = {};

person = {firstname: "Max", lastname: "Pane"};

console.log(person);

var jon={
    firstname: "mary",
    lastname: "phew",
    address: {
        street: "downtown",
        city: "new york"
    }
}

console.log(jon);

function greet(person){
    console.log("hi " + person.firstname + " " + person.lastname);
}

greet(jon);

greet({
    firstname: "ms.",
    lastname: "sofia"
})

console.log(JSON.stringify(jon));