const express = require('express');
const router = express.Router();
const cubeControllers = require('./controllers/cubeControllers');

router.use('/cube', cubeControllers);

module.exports = router;