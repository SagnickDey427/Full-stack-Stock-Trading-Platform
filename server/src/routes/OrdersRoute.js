const express= require('express');
const router = express.Router();
const {handleTransaction, getOrders} = require('../controllers/OrderController.js');

router.post('/',handleTransaction);
router.get('/',getOrders);

module.exports = router;