const User = require('../model/User');

function register(username, password, repeatPassword) {
    if (password !== repeatPassword) {
        trow('Password not equal with repeat password!');
    }

    return User.create({ username, password });
}

const authServices = {
    register,
}

module.exports = authServices