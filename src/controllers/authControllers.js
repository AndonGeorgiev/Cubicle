const express = require('express');
const authServices = require('../services/authServices');

const router = express.Router();

const renderRegisterPage = (req, res) => {
    res.render('auth/register');
};

const register = async(req, res) => {
    let { username, password, repeatPassword } = req.body;

    await authServices.register(username, password, repeatPassword);


    res.redirect('/');
}


router.get('/register', renderRegisterPage);
router.post('/register', register);

module.exports = router;