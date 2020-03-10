"use strict";
console.log("Use numbers for property names:");
var packages = {1: "rmarkdown", 2: "ggplot2", 3: "dplyr"};
console.log(packages[2]);

console.log("Difference in local and block scope:");
function testScope() {
    var local = 5;
    if (local > 1) {
        var local2 = 10;
        let block = 3;
        console.log(local2 + block);
    }
    console.log(local2);
    // Can't access block scope.
    // console.log(block);
}
testScope();

console.log("Under strict mode can avoid the misspelling and using a reserved keyword:");
var interval = 0;

for (let i = 0; i < 100; i++) {
    if (i % 3 == 0) { 
        interval += (i * 3) ** 2; 
    }
}
console.log(interval);
