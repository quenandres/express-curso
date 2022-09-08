const express = require('express');

const app = express(); //Server

//Middleware
app.use((req, res, next) => {
    console.log(`Ruta: ${req.url}, Metodo: ${req.method}`);
    next();
});

app.get('/profile', (req, res) => {
    res.send('profile page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.use((req, res, next) => {    
    if( req.query.login === 'fazt@faztweb.com' ) {
        next();
    } else {
        res.send('No autorizado');
    }
});

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page');
});

app.listen(3000);
console.log('server on port 3000');