const express = require('express');
const router = express.Router();
const cubeControllers = require('./controllers/cubeControllers');
const homeController = require('./controllers/homeController');
const accessoryControllers = require('./controllers/accessoryControllers');
const authController = require('./controllers/authControllers');

router.use(homeController);
router.use('/cube', cubeControllers);
router.use('/accessory', accessoryControllers);
router.use(authController);
router.use('*', (rec, res) => {
    res.render('404')
})

module.exports = router;