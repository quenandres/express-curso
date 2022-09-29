const express = require('express');
const morgan = require('morgan');
const app = express(); //Server
const path = require('path');

//Middleware
app.use(morgan('dev'));

// Settings
app.set('appName', 'Express Course');
app.set('port', 3000);
app.set('case sensitive routing', true);

app.get('/note.txt', (req, res) => {
    res.send('este no es un archivo');
});

// Routes
app.get('/Profile', (req, res) => {
    res.send('profile page');
});

app.get('/about', (req, res) => {
    res.send('about page');
});

/* app.use((req, res, next) => {    
    if( req.query.login === 'fazt@faztweb.com' ) {
        next();
    } else {
        res.send('No autorizado');
    }
}); */

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page');
});

console.log(__dirname);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(app.get('port'));
console.log(`server ${app.get('appName')} on port ${app.get('port')}`);