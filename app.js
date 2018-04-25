var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var core = require('./routes/core');
var blog = require('./routes/blogRouter');

// host contents of static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parsing the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Database connection part
var dbname = 'paper';
var connectionString = 'mongodb://localhost/'+dbname;
mongoose.connect(connectionString);

//Mounting routes
app.use('/', core);
app.use('/blog', blog);

// exporting app
module.exports = app;