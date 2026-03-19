console.log("Hello World!");

/**
 * Questo è un array di numeri, ma contiene anche una stringa, quindi non è un array di numeri
 * @type {Array<string>}
 */
var array = ['1', '2', '3', '4', 'five'];
// var a2 = array.map( a => a * a );
// console.log( a2 );

/** @type {function(string):void} */
var callback = v => console.log(v.substring(0, 3));
array.forEach( callback );