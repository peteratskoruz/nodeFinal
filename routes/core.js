var express = require('express');
var User = require('../models/userModel');
var Blog = require('../models/blogModel');

var router = express.Router();

router.get('/', function (request, response) {
    Blog.find({}, function (err, blogs) {
        response.render('index.ejs', {'blogs': blogs});
    });
});

module.exports = router;