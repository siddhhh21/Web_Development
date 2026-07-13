console.log(window);
window.alert("Hello");
alert("Welcome");

// confirm
let result = confirm("Delete File?");
console.log(result);

// prompt
let name = prompt("Enter Name");
console.log(name);

// setTimeout
setTimeout(function() {
    console.log("Hello after 3 seconds");
}, 3000);

// setInterval
let count = 0;
let intervalId = setInterval(function() {
    count++;
    console.log("Count: " + count);
    if (count >= 5) {
        clearInterval(intervalId);
        console.log("Interval cleared");
    }
}, 1000);

// location
console.log("Current URL:", window.location.href);
console.log("Protocol:", window.location.protocol);
console.log("Host:", window.location.host);
console.log("Pathname:", window.location.pathname);

// history
console.log("History Length:", window.history.length);
window.history.back();
window.history.forward();
window.history.go(-1);

// navigator
console.log("User Agent:", window.navigator.userAgent);
console.log("Platform:", window.navigator.platform);
console.log("Language:", window.navigator.language);

// screen
console.log("Screen Width:", window.screen.width);
console.log("Screen Height:", window.screen.height);

