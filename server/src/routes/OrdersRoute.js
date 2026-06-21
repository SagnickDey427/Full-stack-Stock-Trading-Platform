const express= require('express');
const router = express.Router();
const {handleTransaction, getOrders} = require('../controllers/OrderController.js');
const {VerifyAuth} = require('../middlewares/AuthMiddlewares.js');

router.post('/',VerifyAuth, handleTransaction);
router.get('/',VerifyAuth, getOrders);


module.exports = router;