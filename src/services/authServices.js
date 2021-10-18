const User = require('../model/User');
const authHelpers = require('../helpers/authHelpers')

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

    let secret = '<<Hn%=:LuQ(*<?V"S<8x4_bOrK*62=B;SaouFn9issT@3)NY,M_5cZ}i1ysNqOq'

    return authHelpers.jwtSign(payload, secret);

}

const authServices = {
    register,
    login,
    createToken,
}

module.exports = authServices