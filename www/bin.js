var app = require('../app');

var port = process.env.PORT || 8000;

// Listening to the port
app.listen(port, function(){
    console.log("Listening on port " + port);
});