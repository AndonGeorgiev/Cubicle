const express = require('express');
const router = express.Router();
const cubeServices = require('../services/cubeServices');
const cubeAccessoryController = require('./cubeAccessoryController');
const accessoryService = require('../services/accessoryServices');

const renderCreatePage = (req, res) => {
    res.render('create');
}


const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;
    cubeServices.create(name, description, imageUrl, difficulty);
    res.redirect('/');
    res.end();
}

const renderDetailsPage = async(req, res) => {
    let id = req.params.cubeId;
    let cube = await cubeServices.getOne(id);
    let accessories = cube.accessories;
    let accessoriesArray = [];

    for (const accessory of accessories) {
        let accessoryInfo = await accessoryService.getOne(accessory._id);
        accessoriesArray.push(accessoryInfo);

    }


    res.render('details', { cube, accessoriesArray });

}

router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/:cubeId', renderDetailsPage);
router.use('/:cubeId/accessory', cubeAccessoryController);


module.exports = router;