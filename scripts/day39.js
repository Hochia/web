document.cookie = "Test=Cookie; expires=Tue, 31 Mar 2020 20:20:20 UTC";
// create helper functions
function storeCookie(key, value, duration) {
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + duration * 86400);
    document.cookie = key + "=" + value + ";expires=" + expDate.toUTCString();
}

function removeCookie(key) {
    storeCookie(key, "", 0)
}

function getCookie(key) {
    var cookies = document.cookie.split(';');
    for(var i=0; i<cookies.length; i++) {
        if (cookies[i].trim().indexOf(key + "=") == 0) {
            return cookies[i].trim().substring(key.length + 1);
        }
    }
    return null;
}

storeCookie("Cook 1", "Cookie #1", 5);
storeCookie("Cook 2", "Cookie #2", 5);
storeCookie("Cook 3", "Cookie #3", 5);

console.log(document.cookie);
console.log("Cook 2", getCookie("Cook 2"));
removeCookie("Cook 2");
console.log("Cook 2", getCookie("Cook 2"));
console.log(document.cookie);

var cache = window.sessionStorage;
cache.clear();
cache.setItem("key", "Data is here.");
console.log("Show: " + cache.getItem("key"));
cache.removeItem("key");
console.log("Show: " + cache.getItem("key"));