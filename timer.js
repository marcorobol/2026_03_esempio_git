var msg;
setTimeout( () => {
    var m = "1000ms";
    console.log(m + " callback start");
    setTimeout( () => {
        console.log(m + " callback end");
    }, 1000);
}, 1000);
setTimeout( () => {
    msg = "?";
}, 2000);
msg = "Program ended"
console.log( msg );
