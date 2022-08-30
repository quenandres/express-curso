const express = require('express');

const app = express(); //Server

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/about', (req, res) => {
    res.send('about');
});

app.get('/weather', (req, res) => {
    res.send('weather');
});


app.use((req, res) => { //
    res.status(404).send('No se encontro la pagina');
});

app.listen(3000);
console.log('server on port 3000');