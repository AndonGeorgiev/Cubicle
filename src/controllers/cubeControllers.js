const express = require('express');
const router = express.Router();
const cubeServices = require('./../services/cubeServices');

const renderCreatePage = (req, res) => {
    res.render('create');
}

const renderAboutPage = (req, res) => {
    res.render('about')
}

const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;
    cubeServices.create(name, description, imageUrl, difficulty);
    console.log(cubeServices.getAll());
    res.redirect('/');
    res.end();
}


router.get('/create', renderCreatePage);
router.get('/about', renderAboutPage);
router.post('/create', createCube);


module.exports = router;