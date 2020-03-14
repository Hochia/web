var rrr = ["rlang", "purrr", "lubridate", "purrr", "purrr", 
    "purrr", "stringr", "purrr", "readr"]
console.log(rrr);

console.log(rrr.indexOf("purrr"));
console.log(rrr.lastIndexOf("purrr"));

function tidyverse(pkg, index, array) {
    if (pkg == "purrr" || pkg == "stringr") {
        return true;
    }
    return false;
}

console.log(rrr.find(tidyverse));

var subset = rrr.filter(tidyverse);

console.log(subset);

function iteration(item, index, array) {
    console.log("[" + index + "]: " + item + ", one of the packages in array ", array.toString());
}

rrr.forEach(iteration);

function sumAll(total, item, index, array) {
    return total + " " + index + " " + item;
}

console.log(rrr.reduce(sumAll));
console.log(rrr.reduce(sumAll, 2));
console.log(rrr.reduceRight(sumAll, 3));
