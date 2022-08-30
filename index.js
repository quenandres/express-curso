const express = require('express');

const app = express(); //Server

app.get('/products', (req, res) => {
    res.send('Lista de productos');
});


app.post('/products', (req, res) => {
    res.send('creando productos');
});


app.put('/products', (req, res) => {
    res.send('actualizando producto');
});

app.delete('/products', (req, res) => {
    res.send('eliminando producto');
});

app.patch('/products', (req, res) => {
    res.send('actualizando una parte del producto');
});

app.listen(3000);
console.log('server on port 3000');