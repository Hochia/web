var f1 = function () {
    var x = 1;
    var f2 = function () {
        var y = 2;
        var f3 = function () {
            var z = 3;
            console.log(x+y+z);
        }
        console.log(x+y);
        f3();
    }
    console.log(x);
    f2();
}
f1();

console.log("f1 returns a function reference:");
var f1 = function () {
    var x = 1;
    var f2 = function () {
        var y = 2;
        var f3 = function () {
            var z = 3;
            console.log(x + y + z);
        }
        return f3;
    }
    return f2();
}

var closure = f1();
closure();
f1()();

function Lng(area, pop) {
    this.area = area;
    this.pop = pop;
}

function Nat(area, pop, prop, ext) {
    Lng.call(this, area, pop)
    this.prop = prop;
    this.ext = ext;
}

var tw = new Nat(5000, 2300, 0.03, false);
console.log(tw);

var tp = new Lng(5000, 2300);
console.log(tp);