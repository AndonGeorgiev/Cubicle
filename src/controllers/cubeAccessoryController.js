const express = require('express');
const router = express.Router({ mergeParams: true });
const cubeServices = require('./../services/cubeServices');

const renderAttachPage = async(req, res) => {
    let id = req.params.cubeId;
    console.log(id);
    let cube = await cubeServices.getOne(id);
    res.render("attach", { cube });
}

router.get('/add', renderAttachPage);

module.exports = router