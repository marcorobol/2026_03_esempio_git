const o = {};
try {
    console.log( o.a[0] );
} catch (err) {
    console.error('Catching an error:', err);
}