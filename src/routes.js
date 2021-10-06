const express = require('express');
const router = express.Router();
const cubeControllers = require('./controllers/cubeControllers');
const homeController = require('./controllers/homeController');

router.use('/cube', cubeControllers);
router.use(homeController);
router.use('*', (rec, res) => {
    res.render('404')
})

module.exports = router;