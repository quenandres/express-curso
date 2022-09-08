const express = require('express');

const app = express(); //Server

app.get('/hello/:username', (req, res) => {

    res.send(`Hello ${req.params.username.toUpperCase()}`);
});

app.get('/sumar/:x/:y', (req, res) => {
    const {x, y} = req.params;    
    res.send(`Result: ${parseInt(x) + parseInt(y)}`);
});

app.get('/restar/:x/:y', ({params: {x, y}}, res) => {
    res.send(`Result: ${parseInt(x) - parseInt(y)}`);
});

app.get('/users/:username/photo', (req, res) => {
    if( req.params.username === "fazt" ) {
        return res.sendFile('./logo.jpg', {
            root: __dirname
        });
    }
    res.send(`El usuario no tiene acceso`);
});

app.get('/nombre/:nombre/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.listen(3000);
console.log('server on port 3000');