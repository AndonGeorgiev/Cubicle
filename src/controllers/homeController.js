const express = require('express');
const router = express.Router();
const cubeServices = require('./../services/cubeServices');

const renderHomePage = (req, res) => {
    let cubes = cubeServices.getAll();
    res.render('index', { cubes });
}

const renderAboutPage = (req, res) => {
    res.render('about');
}


router.get('/', renderHomePage);
router.get('/about', renderAboutPage);


module.exports = router;