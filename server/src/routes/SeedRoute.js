const express= require('express');
const router = express.Router();
const {seedPosition,seedHolding} = require('../controllers/seedController.js');

router.get('/addpositions',seedPosition);
router.get('/addholdings',seedHolding);

module.exports = router;