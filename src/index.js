const express = require('express');
const morgan = require('morgan');
const app = express(); //Server
const path = require('path');
require('ejs');

const HomeRoutes = require('./routes/home');
const UserRoutes = require('./routes/user');

//Middleware
app.use(morgan('dev'));

// Settings
app.set('appName', 'Express Course');
app.set('port', 3000);
app.set('case sensitive routing', true);
// ejs
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));

// Routes
app.use(HomeRoutes);
app.use(UserRoutes);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(app.get('port'));
console.log(`server ${app.get('appName')} on port ${app.get('port')}`);