const express = require('express');

const app = express(); //Server

app.get('/', (req, res) => {
    res.sendFile('./static/index.html',{
        root: __dirname
    });
});

app.listen(3000);
console.log('server on port 3000');