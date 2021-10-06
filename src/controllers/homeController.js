const express = require('express');
const router = express.Router();
const cubeServices = require('./../services/cubeServices');

const renderHomePage = (req, res) => {
    let cubes = cubeServices.getAll();
    res.render('index', { cubes });
}

router.get('/', renderHomePage);


module.exports = router;