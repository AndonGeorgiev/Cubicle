const express = require('express');
const router = express.Router({ mergeParams: true });
const cubeServices = require('../services/cubeServices');
const accessoryService = require('../services/accessoryServices');

const renderAttachPage = async(req, res) => {
    let id = req.params.cubeId;
    let cube = await cubeServices.getOne(id);
    let accessory = await accessoryService.getAll();
    res.render("attach", { cube, accessory });
}

const attachAccessory = async(req, res) => {
    let cubeId = req.params.cubeId;
    let accessoryId = req.body.accessory;

    console.log(accessoryId);

    await cubeServices.attach(cubeId, accessoryId);

    res.redirect(`/cube/${cubeId}`);
}

router.get('/add', renderAttachPage);
router.post('/add', attachAccessory);

module.exports = router