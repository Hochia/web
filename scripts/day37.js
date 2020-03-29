console.log(window.screen);
console.log(window.location);
// location.reload(true);
// location.reload(false);
// location.assign("https://github.com/");
window.onpopstate = function (e) {
    console.log("popstate URL: " + location + "state: " + JSON.stringify(e.state));
}

console.log("length: "+ history.length + ", state: " + JSON.stringify(history.state));
history.replaceState({ id: 1 }, "", location);
history.pushState({ id: 2 }, "", location);
history.pushState({ id: 3 }, "", location);
console.log("length: " + history.length + ", state: " + JSON.stringify(history.state));
history.go(-3);
console.log("length: " + history.length + ", state: " + JSON.stringify(history.state));