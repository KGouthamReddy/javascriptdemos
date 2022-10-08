greet();

function greet(){
    console.log("hi");
}

var newgreet  = function(){
    console.log("hi agagh");
}
newgreet();

function log(a){
    console.log(a);
}

var b = 3;
log(b);

log(5);
log("hello");
log({greetting: "hi"});

log.greetting;

log(function(){
    console.log("hi from function");
})

function newlog(b){
    b();
}

newlog(function(){
    console.log("print something");
});