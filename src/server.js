const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
require('./config/handlebars')(app);
const path = require('path');

app.use(express.static(path.resolve(__dirname, './static')));
app.all('/', function(req, res) {
    res.render('index');
});

app.listen(5000, function() {
    console.log("App working on http://localhost:5000/");
})