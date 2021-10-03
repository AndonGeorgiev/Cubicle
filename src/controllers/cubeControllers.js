const express = require('express');
const router = express.Router();

const add = (req, res) => {
    res.render('create');
}

const about = (req, res) => {
    res.render('about')
}

router.get('/create', add);
router.get('/about', about);


module.exports = router;