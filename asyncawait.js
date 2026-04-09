/** @return {Promise<string>} */
function sleep (ms) {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            if (typeof(ms) == "string")
                rej("string not accepted");
            else
                res(ms+"ms");
            console.log("timer");
        }, ms);
    } );
}

async function main () {
    console.log("start");
    var v;
    // try {
        v = await sleep("1000");
    // } catch (error) {
        // v = error;
    // }
    console.log(v);
    console.log("end");
    return("bye");
}
// function main () {
//     console.log("start");
//     sleep(1000)
//     .then( v => {
//          console.log(v);
//          console.log("end");
//     });
// }
main().finally( console.log ).catch( e => console.log(e) );