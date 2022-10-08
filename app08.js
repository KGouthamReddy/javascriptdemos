var person = {
    firstname:"Default",
    lastname:"Default",
    getFullName: function (){
        return this.firstname + " " + this.lastname;
    }
}


var john = Object.create(person);
john.firstname="Max";
john.lastname="Pane";

console.log(john.getFullName());


var person2 = {
    firstname: 'Default',
    lastname: 'Default',
    getfullName : function (){
        return this.firstname + " " + this.lastname;
    }
}

var newperson = Object.create(person2);
newperson.firstname = "Jonh";
newperson.lastname = "dbg";
console.log(newperson.getfullName());