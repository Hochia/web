var rStudio = {};

rStudio.packages = {};
rStudio.cheatsheets = {};
rStudio.tasks = {};

// rStudio.packages.ggplot2 = "ggplot2";
rStudio.packages.rmarkdown = "rmarkdown";
// rStudio.cheatsheets.ggplot2 = true;
// rStudio.cheatsheets.rmarkdown = true;
// rStudio.tasks.ggplot2 = "Visualization";
// rStudio.tasks.rmarkdown = "Documentation";

// console.log(rStudio);

(function () {
    window.rStudio = window.rStudio || {};

    window.rStudio.packages = window.rStudio.packages || {};
    window.rStudio.cheatsheets = window.rStudio.cheatsheets || {};
    window.rStudio.tasks = window.rStudio.tasks || {};

    window.rStudio.packages.ggplot2 = window.rStudio.packages.ggplot2 || "ggplot3";
    window.rStudio.packages.rmarkdown = window.rStudio.packages.rmarkdown || "rmarkdown2";
    window.rStudio.cheatsheets.ggplot2 = true;
    window.rStudio.cheatsheets.rmarkdown = true;
    window.rStudio.tasks.ggplot2 = "Visualization";
    window.rStudio.tasks.rmarkdown = "Documentation";
})();

console.log(rStudio);
rStudio.tasks.ggplot2;

try {
    var r = true;
    var py = false;
    if (py == false) {
        throw("Install python")
    }
} catch (error) {
    console.log("Hint: " + error);
} finally {
    console.log("Have fun with programming!");
}










