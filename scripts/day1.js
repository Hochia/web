function honkthehorn() {
    alert("All right!");
}
// honkthehorn();

var rpkg = {
    name: "R markdown",
    color: "red",
    log: function () {
        console.log("The cheatsheet color of " + this.name + " is " + this.color);
    }
};

rpkg.log();
// window.alert(rpkg.color);

function Pkg(name, color) {
    this.name = name;
    this.color = color;
    if (name == undefined) {
        this.name = "Cheatsheet";
    }
    if (color == undefined) {
        this.color = "white";
    }
    this.log = function () {
        console.log("The color of cheatsheet of " + this.name + " is " + this.color); 
    };
}
/* 設定 property */
var rmd = new Pkg("R markdown", "red");
rmd.log();

var ggplot2 = new Pkg("ggplot2", "green");
// not yet available
if (ggplot2.isAvailable) {
    console.log("ggplot2 is available");
}

Pkg.prototype.isAvailable = true;
// now it is available
if (ggplot2.isAvailable) {
    console.log("ggplot2 is available");
}
// new object will also be available
var dplyr = new Pkg("dplyr", "yellow");
if (dplyr.isAvailable) {
    console.log("dplyr is available");
}
console.log(dplyr);

/* 設定繼承 */
function UsePkg(arrange, name, color) {
    Pkg.call(this, name, color);
    this.arrange = arrange;
    this.describe = function () {
        console.log(this.name + " is arranged at " + this.arrange + ". It is " + this.color + ".");
    };
}

UsePkg.prototype = new Pkg();

var uggplot2 = new UsePkg(2, "ggplot2", "green");
uggplot2.log();
uggplot2.describe();

console.log(uggplot2);

/* 另一種繼承方式 */
UsePkg.prototype = Object.create(Pkg.prototype);
UsePkg.prototype.ctr = UsePkg;

var uggplot2 = new UsePkg(2, "ggplot2", "green");
uggplot2.log();
uggplot2.describe();

console.log(uggplot2);