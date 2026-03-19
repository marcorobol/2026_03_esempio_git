import {userTemplate} from './user.js'; // ESM
import fs from 'fs';
import express from 'express';

console.log( userTemplate({name:'marco'}) );

const app = express()
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})