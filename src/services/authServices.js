const User = require('../model/User');
const authHelpers = require('../helpers/authHelpers');
const { SECRET } = require('../constants');

function register(username, password, repeatPassword) {
    if (password !== repeatPassword) {
        trow('Password not equal with repeat password!');
    }

    return User.create({ username, password });
}

async function login(username, password) {

    let user = await User.findOne({ username: username });
    let comparePassword = await user.compare(password);
    console.log(comparePassword);

    if (comparePassword) {
        return user
    } else {
        return null
    }

}

function createToken(user) {
    let payload = {
        _id: user._id,
        username: user.username,
    };

    return authHelpers.jwtSign(payload, SECRET);

}

const authServices = {
    register,
    login,
    createToken,
}

module.exports = authServices