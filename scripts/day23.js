function rng(beEven) {
    return new Promise(function (fulfill, reject) {
        window.setTimeout(
            function () {
                var i = Math.round((Math.random() * 100), 0);
                if ((i % 2 != 0 && beEven) || (i % 2 == 0 && !beEven)) {
                    reject(i);
                } else {
                    fulfill(i);
                }
            }, 2000);
    });
}

// invoke the code
var p = rng(true);

p.then(
    function (i) {
        console.log("fulfilled, i = " + i);
    },
    function (i) {
        console.log("rejected, i = " + i);
    }
);

console.log("Promise made...");

var rrr = ["rlang", "purrr", "lubridate", "stringr", "readr"];
console.log(rrr);
delete rrr[2];
console.log(rrr);
rrr[1] = "forcats";
console.log(rrr);
rrr.unshift("zoo"); // add an element to the front
console.log(rrr);
rrr.push("orientchessr"); // add an element to the end
console.log(rrr);
console.log(rrr.length);
var pkg1 = rrr.pop(); // get the last element and remove it
console.log(pkg1);
console.log(rrr);
var pkg2 = rrr.shift(); // get the first element and remove it
console.log(pkg2);
console.log(rrr);

console.log("See different methods:");
console.log(rrr);
console.log(rrr.valueOf());
console.log(rrr.toString());
console.log(rrr.join(";"));

var a1 = ["q", "w", "e"];
var a2 = ["a", "s", "d"];
var a3 = a1.concat(a2);

console.log(a1);
console.log(a2);
console.log(a3);

console.log(a1.slice(1, 3)); // get index 1 and 2
console.log(a1.slice(-2, -1)); // the last one is -1, get the -2

console.log(a1);
console.log(a1.splice(2, 1));
console.log(a1);
console.log(a1.splice(1, 0, "r", 't')); // 0 means add, at index 1
console.log(a1);
console.log(a1.splice(2, 1, "o", 'p')); // 1 means remove, remove index 2 and insert
console.log(a1);