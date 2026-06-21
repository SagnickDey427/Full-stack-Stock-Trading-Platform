const express= require('express');
const router = express.Router();
const {seedPosition,seedHolding} = require('../controllers/seedController.js');
const {VerifyAuth} = require('../middlewares/AuthMiddlewares.js');

router.get('/addpositions',VerifyAuth,seedPosition);
router.get('/addholdings',VerifyAuth,seedHolding);

module.exports = router;