import express from 'express';

const app = express();

// Serving static files
app.use('/', express.static('.'));

app.use( (req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v1/users/:id', (req, res) => {
    console.log(req.url)
    console.log(req.params.id)
    res.status(200).json([
        {username: "Marco"},
        {username: "Sandro"},
    ]);
});

app.use('/api/v1/users', (req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.query) // query parameters
    console.log(req.headers) // header parameters
    res.json([
        {username: "Marco"},
        {username: "Sandro"},
    ]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})