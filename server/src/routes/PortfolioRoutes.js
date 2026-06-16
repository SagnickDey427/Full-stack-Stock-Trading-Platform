const express= require('express');
const router = express.Router();

const {getPositions, getHoldings} = require('../controllers/PortfolioController.js');

router.get('/positions',getPositions);
router.get('/holdings',getHoldings);

module.exports = router;