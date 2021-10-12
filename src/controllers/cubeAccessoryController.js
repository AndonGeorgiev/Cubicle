const express = require('express');
const router = express.Router({ mergeParams: true });
const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');

const renderAttachPage = async(req, res) => {
    let id = req.params.cubeId;
    let cube = await cubeServices.getOne(id);
    let allAccessories = await accessoryServices.getAll();
    let accessory = await accessoryServices.getOnlyNotAddedAccessories(cube.accessories);
    console.log(accessory);
    res.render("attach", { cube, accessory });
}

const attachAccessory = async(req, res) => {
    let cubeId = req.params.cubeId;
    let accessoryId = req.body.accessory;

    await cubeServices.attach(cubeId, accessoryId);

    res.redirect(`/cube/${cubeId}`);
}

router.get('/add', renderAttachPage);
router.post('/add', attachAccessory);

module.exports = router