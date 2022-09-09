const express = require('express');
const morgan = require('morgan');
const app = express(); //Server

//Middleware
app.use(morgan('dev'));

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