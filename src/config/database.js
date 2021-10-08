const mongoose = require('mongoose');

function initDatabase() {
    let uri = 'mongodb://localhost:27017/cubicle';
    return mongoose.connect(uri);
}

module.exports = initDatabase;