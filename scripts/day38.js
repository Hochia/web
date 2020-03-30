console.info("Formatting: %d, %f, %s, %o", 3.1415, Math.PI, "hi there", "screen");
console.time("Here");
var j = 1;
for (var i = 0; i < 1000; i ++) {
    j += 1;
}
console.info("j = %i", j);
console.timeEnd("Here");
console.time("There");
var j = 1;
for (var i = 0; i < 1000; i++) {
    j += j + 1;
}
console.info("j = %i", j);
console.timeEnd("There");
console.log(performance.timing);
console.group("Group...");
console.log("log 1");
console.log("log 2");
console.log("log 3");
console.groupEnd();