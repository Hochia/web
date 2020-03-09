// Using the class keyword to rewrite the function in day1.js.
// 
// function Pkg(name, color) {
//     this.name = name;
//     this.color = color;
//     this.log = function () {
//         console.log("The color of cheatsheet of " + this.name + " is " + this.color);
//     };
// }
class Pkg {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.log = function () {
            console.log("The color of cheatsheet of " + this.name + " is " + this.color);
        };
    }
}
// `extends` defines the parent constructor name
// `super` replace `.call()`
// 
// function UsePkg(arrange, name, color) {
//     Pkg.call(this, name, color);
//     this.arrange = arrange;
//     this.describe = function () {
//         console.log(this.name + " is arranged at " + this.arrange + ". It is " + this.color + ".");
//     };
// }
class UsePkg extends Pkg {
    constructor(arrange, name, color){
        super(name, color);
        this.arrange = arrange;
        this.describe = function () {
            console.log(this.name + " is arranged at " + this.arrange + ". It is " + this.color + ".");
        };
    }
}

Pkg.prototype.isAvailable = true;

UsePkg.prototype = new Pkg();

var uggplot2 = new UsePkg(2, "ggplot2", "green");
uggplot2.log();
uggplot2.describe();

console.log(uggplot2);
console.log("Access the property descriptor:")
console.log(Object.getOwnPropertyDescriptor(uggplot2, "color"));