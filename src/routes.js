const express = require('express');
const router = express.Router();
const cubeControllers = require('./controllers/cubeControllers');
const homeController = require('./controllers/homeController');
const accessoryControllers = require('./controllerS/accessoryControllers');

router.use(homeController);
router.use('/cube', cubeControllers);
router.use('/accessory', accessoryControllers);
router.use('*', (rec, res) => {
    res.render('404')
})

module.exports = router;