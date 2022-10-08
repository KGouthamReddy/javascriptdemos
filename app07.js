var arr = new Array();

arr=[];
arr=[1, 2, 3];

console.log(arr);
console.log(arr[2]);


arr = [
    1, 3, "name", {
        name: "max",
        address: "NY"
    },
    function (name){
        var greeting = "hello ";
        console.log(greeting + name);
    },
]

console.log(arr);

arr[4](arr[3].name);