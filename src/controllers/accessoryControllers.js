const express = require('express');
const router = express.Router();
const accessoryService = require('../services/accessoryServices')

const renderAddAccessoryPage = (req, res) => {
    res.render('accessory/create');
}

const createAccessory = async(req, res) => {
    const { name, description, imageUrl } = req.body;
    let create = await accessoryService.creat(name, description, imageUrl);
    console.log(create);

    res.redirect('/')

}

router.get('/create', renderAddAccessoryPage);
router.post('/create', createAccessory);

module.exports = router;