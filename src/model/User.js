const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        minLength: 2,
    },

    password: {
        type: 'string',
        required: true,
        minLength: 8,
    }
});

userSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next();
        });

});

userSchema.method('compare', function(password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

module.exports = User;