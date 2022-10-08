function greet(greetingmessage){
    return function(name){
        console.log(greetingmessage + " - " + name);
    };
}

var x = greet("welcome");

console.log(x);

x("asgf");