var express = require('express');
var Blog = require('../models/blogModel');

var router = express.Router();

router.route("/new")
    .get(function (request, response) {
        response.render('newBlog.ejs');
    })
    .post(function (request, response) {
        var body = request.body;
        var title = body.title;
        var description = body.description;

        var newBlog = Blog();
        newBlog.title = title;
        newBlog.description = description;
        newBlog.publish_at = new Date();
        newBlog.save(function (err, blog) {
            if(err) throw err;
            return response.status(201).json(blog);
        });
    });

module.exports = router;