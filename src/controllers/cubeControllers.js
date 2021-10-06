const express = require('express');
const router = express.Router();
const cubeServices = require('./../services/cubeServices');

const renderCreatePage = (req, res) => {
    res.render('create');
}


const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;
    cubeServices.create(name, description, imageUrl, difficulty);
    console.log(cubeServices.getAll());
    res.redirect('/');
    res.end();
}

const renderDetailsPage = (req, res) => {
    let id = req.params.cubeId;
    let cube = cubeServices.getOne(id);
    res.render('details', { cube });

}

router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/:cubeId', renderDetailsPage);


module.exports = router;