const express = require('express');
const router = express.Router();

const renderAddAccessoryPage = (req, res) => {
    res.render('accessory/create');
}

const createAccessory = (req, res) => {
    const { name, description, imageUrl } = req.body;
}

router.get('/create', renderAddAccessoryPage);

module.exports = router;