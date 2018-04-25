var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
    title: String,
    description: String,
    publish_at: Date
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;