function sleep (ms) {
    return new Promise( (res, rej) => {
        if (typeof(ms) == "string")
            throw ("string not accepted");
        setTimeout( () => {
            if (typeof(ms) == "string")
                rej ("string not accepted");
            else
                res(ms+"ms")
        }, ms);
    } );
}

try {
    sleep(1000)
    .then( v => {
        console.log(v);
        const p0 = sleep("hi");
        console.log(p0);
        const p1 = p0.catch ( e => console.log("final.promise.catch", e) );
        console.log(p1);
        return p1; //p1
    })
    .then( v => console.log(v) )
} catch (error) {
    console.error("maintrycatch", error);
}
console.error("program ended");




// const p2 = Promise.reject("error");
// console.log(p2);
