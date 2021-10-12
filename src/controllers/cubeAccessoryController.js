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

router.get('/add', renderAttachPage);

module.exports = router