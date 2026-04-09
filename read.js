import fs from "fs";
// try {
//     var data = fs.readFileSync( "_readme.MD", "utf8" );
// } catch (error) {
//     console.error('The file _readme.MD does not exists!');
// }
// console.log( data );
fs.readFile( "_readme.MD", "utf8", (err, data) => {
    if (err)
        console.error('The file _readme.MD does not exists!');
    else
        console.log( data );
});
console.log( "Program ended" );