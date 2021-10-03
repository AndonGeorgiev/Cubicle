let handlebars = require('express-handlebars');
let path = require('path');

const configHandlebars = function(app) {
    app.set('views', path.resolve(__dirname, '../views'))
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs')
}

module.exports = configHandlebars;