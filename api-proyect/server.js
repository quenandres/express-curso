const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/products', (req, res) => {
    res.send('Obteniendo products');
});

app.post('/products', (req, res) => {
    res.send('creando product');
});

app.put('/products', (req, res) => {
    res.send('actualizacion product');
});

app.delete('/products', (req, res) => {
    res.send('Eliminando product');
});

app.get('/products:id', (req, res) => {
    res.send('Obteniendo product');
});

app.listen(3000);
console.log('Server on port 3000');