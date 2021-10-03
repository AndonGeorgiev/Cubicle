let express = require('express');
let handlebars = require('express-handlebars');
let app = express();
require('./config/handlebars')(app)

app.all('/', function(req, res) {
    res.render('index');
});

app.listen(5000, function() {
    console.log("App working on http://localhost:5000/");
})