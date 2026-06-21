const express= require('express');
const router = express.Router();
const {VerifyAuth} = require('../middlewares/AuthMiddlewares.js');
const {getPositions, getHoldings} = require('../controllers/PortfolioController.js');

router.get('/positions',VerifyAuth, getPositions);
router.get('/holdings',VerifyAuth,getHoldings);

module.exports = router;