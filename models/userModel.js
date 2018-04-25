var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    fullName: String,
    username: String,
    email: String,
    password: String,
    is_authenticated: Boolean
});

var User = mongoose.model('User', userSchema);

module.exports = User;