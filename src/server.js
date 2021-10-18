const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
require('./config/handlebars')(app);
const initDatabase = require('./config/database');
const cookie_parser = require('cookie-parser');

app.use(cookie_parser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, './static')));;
app.use(routes);

initDatabase()
    .then(() =>
        app.listen(5000, function() {
            console.log("App working on http://localhost:5000/");
        })
    ).catch(err => {
        console.log(`Database crash: \n ${err}`);
    })