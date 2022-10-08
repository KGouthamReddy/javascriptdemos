function add(x, y){
    console.log("add: "+ (x + y));
}

function subtract(x, y){
    console.log("sub: " + (x - y));
}

function mul(x,y){
    console.log("mul: " + x * y);
}

 function div(x, y){
    console.log("div: " + x / y);
}


function calc(operation, num1, num2){
    operation(num1, num2);
}


calc(add, 4, 3);
calc(subtract, 4, 3);
calc(mul, 4, 3);
calc(div, 4, 3);