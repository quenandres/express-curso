const express = require('express');
const morgan = require('morgan');
const app = express(); //Server

//Middleware
app.use(morgan('dev'));

// Settings
app.set('appName', 'Express Course');
app.set('port', 3000);
app.set('case sensitive routing', true);

// Routes
app.get('/Profile', (req, res) => {
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

app.listen(app.get('port'));
console.log(`server ${app.get('appName')} on port ${app.get('port')}`);