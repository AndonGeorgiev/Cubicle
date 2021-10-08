const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const path = require('path');
const routes = require('./routes');
require('./config/handlebars')(app);
const initDatabase = require('./config/database');

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