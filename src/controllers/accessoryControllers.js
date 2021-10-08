const express = require('express');
const router = express.Router();

const renderAddAccessoryPage = (req, res) => {
    res.render('createAccessory');
}

router.get('/create', renderAddAccessoryPage);

module.exports = router;