const express = require('express');
const authServices = require('../services/authServices');
const { TOKEN_KOOKIE_NAME } = require('../constants');

const router = express.Router();

const renderRegisterPage = (req, res) => {
    res.render('auth/register');
};

const register = async(req, res) => {
    let { username, password, repeatPassword } = req.body;

    await authServices.register(username, password, repeatPassword);


    res.redirect('/login');
}

const renderLoginPage = (req, res) => {
    res.render('auth/login');
}

const login = async(req, res) => {
    const { username, password } = req.body;

    let user = await authServices.login(username, password);

    let token = await authServices.createToken(user);

    res.cookie(TOKEN_KOOKIE_NAME, token, {
        httpOnly: true,
    });

    res.redirect('/');

}


router.get('/register', renderRegisterPage);
router.post('/register', register);
router.get('/login', renderLoginPage);
router.post('/login', login);


module.exports = router;